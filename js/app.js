// ============================================
// Main App Logic
// ============================================

(function() {
    'use strict';
    
    // Determine which page we're on
    function getPageType() {
        const path = window.location.pathname;
        if (path.includes('lectures.html')) return 'lectures';
        if (path.includes('windows-forms.html')) return 'wf';
        if (path.includes('tests.html')) return 'tests';
        if (path.includes('tasks.html')) return 'tasks';
        return 'home';
    }
    
    // ===========================
    // HOME PAGE
    // ===========================
    function initHomePage() {
        const modulesList = document.getElementById('modulesList');
        if (!modulesList) return;
        
        window.CPP_Modules.forEach(function(mod) {
            const item = document.createElement('button');
            item.className = 'module-item';
            item.innerHTML = `<span class="module-number">${mod.id}</span><span>${mod.name}</span>`;
            item.addEventListener('click', function() {
                window.location.href = 'lectures.html';
            });
            modulesList.appendChild(item);
        });
    }
    
    // ===========================
    // LECTURES PAGE
    // ===========================
    let currentLectureId = 1;
    let currentFilter = 'all';
    let searchQuery = '';
    
    function getLectures() {
        const pageType = getPageType();
        return pageType === 'wf' ? window.WF_Lectures : window.CPP_Lectures;
    }
    
    function getModules() {
        const pageType = getPageType();
        return pageType === 'wf' ? window.WF_Modules : window.CPP_Modules;
    }
    
    function renderLecturesGrid() {
        const grid = document.getElementById('lecturesGrid');
        if (!grid) return;
        
        const lectures = getLectures();
        const filtered = filterLectures(lectures);
        
        grid.innerHTML = '';
        
        filtered.forEach(function(lec) {
            const card = document.createElement('div');
            card.className = 'lecture-card' + (getPageType() === 'wf' ? ' wf-lecture' : '');
            card.innerHTML = `
                <div class="lecture-card-img" style="background: linear-gradient(135deg, ${getPageType() === 'wf' ? '#7C3AED' : '#1E40AF'}, ${getPageType() === 'wf' ? '#4F46E5' : '#3B82F6'}); height: 180px; display: flex; align-items: center; justify-content: center; color: white; font-size: 48px; font-weight: 700;">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
                <div class="lecture-card-body">
                    <span class="lecture-card-number">#${lec.id}</span>
                    <h3 class="lecture-card-title">${lec.title}</h3>
                    <p class="lecture-card-desc">Лекція з модуля: ${getModuleName(lec.module)}</p>
                    <div class="lecture-card-meta">
                        <span class="lecture-card-tag">${lec.category}</span>
                        <span>3 год</span>
                    </div>
                </div>
            `;
            card.addEventListener('click', function() {
                openLecture(lec.id);
            });
            grid.appendChild(card);
        });
        
        if (filtered.length === 0) {
            grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">Лекцій не знайдено. Спробуйте змінити фільтр або пошуковий запит.</p>';
        }
    }
    
    function filterLectures(lectures) {
        return lectures.filter(function(lec) {
            // Category filter
            if (currentFilter !== 'all' && lec.category !== currentFilter) {
                return false;
            }
            // Search filter
            if (searchQuery) {
                const query = searchQuery.toLowerCase();
                return lec.title.toLowerCase().includes(query) ||
                       getModuleName(lec.module).toLowerCase().includes(query);
            }
            return true;
        });
    }
    
    function getModuleName(moduleId) {
        const modules = getModules();
        const mod = modules.find(function(m) { return m.id === moduleId; });
        return mod ? mod.name : '';
    }
    
    function openLecture(id) {
        currentLectureId = id;
        const lectures = getLectures();
        const lecture = lectures.find(function(l) { return l.id === id; });
        if (!lecture) return;
        
        // Hide grid, show lecture view
        const lecturesSection = document.querySelector('.lectures-section');
        const filtersSection = document.querySelector('.filters-section');
        const lectureView = document.getElementById('lectureView');
        
        if (lecturesSection) lecturesSection.style.display = 'none';
        if (filtersSection) filtersSection.style.display = 'none';
        if (lectureView) lectureView.style.display = 'block';
        
        // Render lecture content
        const article = document.getElementById('lectureArticle');
        if (article) {
            article.innerHTML = lecture.content;
            // Handle broken images in lecture content
            article.querySelectorAll('img').forEach(function(img) {
                img.addEventListener('error', function() {
                    this.style.display = 'none';
                });
            });
            // Initialize code copy buttons
            initCodeCopy();
        }
        
        // Update URL
        const url = new URL(window.location);
        url.searchParams.set('lecture', id);
        window.history.pushState({}, '', url);
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Update nav buttons
        updateNavButtons();
    }
    
    function closeLecture() {
        const lecturesSection = document.querySelector('.lectures-section');
        const filtersSection = document.querySelector('.filters-section');
        const lectureView = document.getElementById('lectureView');
        
        if (lecturesSection) lecturesSection.style.display = '';
        if (filtersSection) filtersSection.style.display = '';
        if (lectureView) lectureView.style.display = 'none';
        
        // Update URL
        const url = new URL(window.location);
        url.searchParams.delete('lecture');
        window.history.pushState({}, '', url);
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    function prevLecture() {
        const lectures = getLectures();
        const idx = lectures.findIndex(function(l) { return l.id === currentLectureId; });
        if (idx > 0) {
            openLecture(lectures[idx - 1].id);
        } else {
            // Wrap to last
            openLecture(lectures[lectures.length - 1].id);
        }
    }
    
    function nextLecture() {
        const lectures = getLectures();
        const idx = lectures.findIndex(function(l) { return l.id === currentLectureId; });
        if (idx < lectures.length - 1) {
            openLecture(lectures[idx + 1].id);
        } else {
            // Wrap to first
            openLecture(lectures[0].id);
        }
    }
    
    function updateNavButtons() {
        const lectures = getLectures();
        const idx = lectures.findIndex(function(l) { return l.id === currentLectureId; });
        
        const prevBtn = document.getElementById('prevLecture');
        const nextBtn = document.getElementById('nextLecture');
        const prevBtn2 = document.getElementById('prevLecture2');
        const nextBtn2 = document.getElementById('nextLecture2');
        
        if (prevBtn) prevBtn.disabled = lectures.length <= 1;
        if (nextBtn) nextBtn.disabled = lectures.length <= 1;
        if (prevBtn2) prevBtn2.disabled = lectures.length <= 1;
        if (nextBtn2) nextBtn2.disabled = lectures.length <= 1;
    }
    
    function initFilters() {
        const filterTags = document.querySelectorAll('.filter-tag');
        filterTags.forEach(function(tag) {
            tag.addEventListener('click', function() {
                filterTags.forEach(function(t) { t.classList.remove('active'); });
                this.classList.add('active');
                currentFilter = this.dataset.filter;
                renderLecturesGrid();
            });
        });
        
        const searchInput = document.getElementById('lectureSearch');
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                searchQuery = this.value;
                renderLecturesGrid();
            });
        }
    }
    
    function initLectureNav() {
        const backBtn = document.getElementById('backToLectures');
        const prevBtn = document.getElementById('prevLecture');
        const nextBtn = document.getElementById('nextLecture');
        const prevBtn2 = document.getElementById('prevLecture2');
        const nextBtn2 = document.getElementById('nextLecture2');
        
        if (backBtn) backBtn.addEventListener('click', closeLecture);
        if (prevBtn) prevBtn.addEventListener('click', prevLecture);
        if (nextBtn) nextBtn.addEventListener('click', nextLecture);
        if (prevBtn2) prevBtn2.addEventListener('click', prevLecture);
        if (nextBtn2) nextBtn2.addEventListener('click', nextLecture);
        
        // Open tests button
        const openTestsBtn = document.getElementById('openTestsBtn');
        if (openTestsBtn) {
            openTestsBtn.addEventListener('click', function() {
                const pageType = getPageType();
                window.location.href = 'tests.html?tab=' + pageType;
            });
        }
        
        // Open tasks button
        const openTasksBtn = document.getElementById('openTasksBtn');
        if (openTasksBtn) {
            openTasksBtn.addEventListener('click', function() {
                const pageType = getPageType();
                window.location.href = 'tasks.html?tab=' + pageType;
            });
        }
        
        // PDF Export
        const pdfExportBtn = document.getElementById('pdfExportBtn');
        if (pdfExportBtn) {
            pdfExportBtn.addEventListener('click', exportPDF);
        }
    }
    
    // Check URL params for lecture
    function checkUrlParams() {
        const params = new URLSearchParams(window.location.search);
        const lectureId = params.get('lecture');
        if (lectureId) {
            openLecture(parseInt(lectureId));
        }
    }
    
    // ===========================
    // PDF EXPORT
    // ===========================
    function exportPDF() {
        const lecture = getLectures().find(function(l) { return l.id === currentLectureId; });
        if (!lecture) return;
        
        // Create a clean version for PDF
        const printDiv = document.createElement('div');
        printDiv.style.cssText = 'position:fixed;left:-9999px;top:0;width:800px;background:#fff;color:#000;padding:40px;font-family:Arial,sans-serif;line-height:1.6;';
        printDiv.innerHTML = `
            <h1 style="font-size:24px;margin-bottom:20px;color:#1E40AF;">${lecture.title}</h1>
            <div style="font-size:14px;">${lecture.content.replace(/<img[^>]*>/g, '')}</div>
        `;
        document.body.appendChild(printDiv);
        
        // Use browser print
        setTimeout(function() {
            const originalTitle = document.title;
            document.title = lecture.title + ' - C++ Academy';
            
            // Create print window
            const printWindow = window.open('', '_blank');
            printWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>${lecture.title}</title>
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 40px; color: #333; }
                        h1 { color: #1E40AF; font-size: 24px; }
                        h2 { color: #333; font-size: 18px; margin-top: 30px; border-bottom: 1px solid #ddd; padding-bottom: 8px; }
                        h3 { font-size: 16px; }
                        pre { background: #f5f5f5; padding: 16px; border-radius: 4px; overflow-x: auto; font-size: 13px; }
                        code { font-family: monospace; background: #f5f5f5; padding: 2px 6px; border-radius: 3px; font-size: 13px; }
                        table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 13px; }
                        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                        th { background: #f5f5f5; font-weight: 600; }
                        .note { padding: 12px 16px; margin: 16px 0; border-left: 4px solid #1E40AF; background: #f0f5ff; }
                        ul, ol { padding-left: 24px; }
                        li { margin-bottom: 4px; }
                        img { display: none; }
                    </style>
                </head>
                <body>
                    <h1>${lecture.title}</h1>
                    <p><strong>C++ Academy</strong> — Лекція #${lecture.id}</p>
                    <hr style="margin: 20px 0;">
                    ${lecture.content.replace(/<img[^>]*>/g, '')}
                </body>
                </html>
            `);
            printWindow.document.close();
            
            setTimeout(function() {
                printWindow.print();
                document.title = originalTitle;
                document.body.removeChild(printDiv);
            }, 500);
        }, 100);
    }
    
    // ===========================
    // CODE COPY
    // ===========================
    function initCodeCopy() {
        document.querySelectorAll('.code-block').forEach(function(block) {
            const header = block.querySelector('.code-header');
            if (!header || header.querySelector('.code-copy')) return;
            
            const copyBtn = document.createElement('button');
            copyBtn.className = 'code-copy';
            copyBtn.textContent = 'Копіювати';
            copyBtn.addEventListener('click', function() {
                const code = block.querySelector('pre') ? block.querySelector('pre').textContent : '';
                navigator.clipboard.writeText(code).then(function() {
                    copyBtn.textContent = 'Скопійовано!';
                    copyBtn.classList.add('copied');
                    setTimeout(function() {
                        copyBtn.textContent = 'Копіювати';
                        copyBtn.classList.remove('copied');
                    }, 2000);
                });
            });
            
            header.appendChild(copyBtn);
        });
    }
    
    // ===========================
    // INIT
    // ===========================
    document.addEventListener('DOMContentLoaded', function() {
        const pageType = getPageType();
        
        if (pageType === 'home') {
            initHomePage();
        } else if (pageType === 'lectures' || pageType === 'wf') {
            renderLecturesGrid();
            initFilters();
            initLectureNav();
            checkUrlParams();
        }
        
        // Global code copy init
        initCodeCopy();
    });
    
    // Expose
    window.App = {
        openLecture: openLecture,
        closeLecture: closeLecture,
        prevLecture: prevLecture,
        nextLecture: nextLecture,
        getLectures: getLectures,
        getPageType: getPageType
    };
})();
