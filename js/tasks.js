// ============================================
// Tasks Logic
// ============================================

(function() {
    'use strict';
    
    let currentTab = 'cpp';
    let currentTask = null;
    
    function getTasks() {
        return currentTab === 'cpp' ? window.CPP_Tasks : window.WF_Tasks;
    }
    
    function initTabs() {
        const tabs = document.querySelectorAll('.tab-btn');
        tabs.forEach(function(tab) {
            tab.addEventListener('click', function() {
                tabs.forEach(function(t) { t.classList.remove('active'); });
                this.classList.add('active');
                currentTab = this.dataset.tab;
                renderTasksList();
            });
        });
        
        // Check URL param
        const params = new URLSearchParams(window.location.search);
        const tabParam = params.get('tab');
        if (tabParam === 'wf') {
            tabs.forEach(function(t) { t.classList.remove('active'); });
            const wfTab = document.querySelector('.tab-btn[data-tab="wf"]');
            if (wfTab) wfTab.classList.add('active');
            currentTab = 'wf';
        }
    }
    
    // Приховує або показує вкладки перемикання між C++ та Windows Forms
    function toggleTabsVisibility(show) {
        const tabsSection = document.querySelector('.tabs-section');
        if (tabsSection) {
            tabsSection.style.display = show ? 'block' : 'none';
        }
    }
    
    function renderTasksList() {
        const grid = document.getElementById('tasksGrid');
        if (!grid) return;
        
        const tasks = getTasks();
        grid.innerHTML = '';
        
        tasks.forEach(function(task) {
            const card = document.createElement('div');
            card.className = 'task-card';
            card.innerHTML = `
                <div class="task-card-number">Завдання #${task.id}</div>
                <h3 class="task-card-title">${task.title}</h3>
                <p class="task-card-desc">${task.description.substring(0, 150)}...</p>
                <div class="task-card-meta">
                    <span class="task-card-difficulty difficulty-${task.difficulty}">${task.difficultyName}</span>
                    <span>${currentTab === 'cpp' ? 'C++' : 'Windows Forms'}</span>
                </div>
            `;
            card.addEventListener('click', function() {
                openTask(task);
            });
            grid.appendChild(card);
        });
    }
    
    function openTask(task) {
        currentTask = task;
        
        // Hide list, show detail
        const listSection = document.getElementById('tasksListSection');
        const taskDetail = document.getElementById('taskDetail');
        
        if (listSection) listSection.style.display = 'none';
        if (taskDetail) taskDetail.style.display = 'block';
        
        // Приховуємо вкладки при відкритті завдання
        toggleTabsVisibility(false);
        
        renderTaskDetail();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    function renderTaskDetail() {
        const card = document.getElementById('taskDetailCard');
        if (!card || !currentTask) return;
        
        let reqHtml = '<ul>';
        currentTask.requirements.forEach(function(req) {
            reqHtml += `<li>${req}</li>`;
        });
        reqHtml += '</ul>';
        
        card.innerHTML = `
            <h2 class="task-detail-title">${currentTask.title}</h2>
            <div class="task-detail-section">
                <h3>Умова завдання</h3>
                <p>${currentTask.description}</p>
            </div>
            <div class="task-detail-section">
                <h3>Вимоги</h3>
                ${reqHtml}
            </div>
            
            <button class="task-hint-toggle" id="hintToggle">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                Показати підказку
            </button>
            <div class="task-hint-content" id="hintContent">
                <p>${currentTask.hint}</p>
            </div>
            
            <button class="task-solution-toggle" id="solutionToggle">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                Показати розв'язок
            </button>
            <div class="task-solution-content" id="solutionContent">
                <div class="code-block">
                    <div class="code-header">
                        <span>Розв'язок</span>
                        <button class="code-copy" onclick="copySolution()">Копіювати</button>
                    </div>
                    <pre><code>${escapeHtml(currentTask.solution)}</code></pre>
                </div>
            </div>
        `;
        
        // Toggle handlers
        const hintToggle = document.getElementById('hintToggle');
        const hintContent = document.getElementById('hintContent');
        if (hintToggle) {
            hintToggle.addEventListener('click', function() {
                hintContent.classList.toggle('visible');
                this.innerHTML = hintContent.classList.contains('visible') 
                    ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> Приховати підказку'
                    : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> Показати підказку';
            });
        }
        
        const solutionToggle = document.getElementById('solutionToggle');
        const solutionContent = document.getElementById('solutionContent');
        if (solutionToggle) {
            solutionToggle.addEventListener('click', function() {
                solutionContent.classList.toggle('visible');
                this.innerHTML = solutionContent.classList.contains('visible')
                    ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> Приховати розв\'язок'
                    : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> Показати розв\'язок';
            });
        }
    }
    
    function backToTasks() {
        const listSection = document.getElementById('tasksListSection');
        const taskDetail = document.getElementById('taskDetail');
        
        if (listSection) listSection.style.display = 'block';
        if (taskDetail) taskDetail.style.display = 'none';
        
        currentTask = null;
        
        // Показуємо вкладки знову при поверненні до списку завдань
        toggleTabsVisibility(true);
    }
    
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    // Copy solution to global scope for inline handler
    window.copySolution = function() {
        if (currentTask && currentTask.solution) {
            navigator.clipboard.writeText(currentTask.solution).then(function() {
                const btn = document.querySelector('#solutionContent .code-copy');
                if (btn) {
                    btn.textContent = 'Скопійовано!';
                    setTimeout(function() {
                        btn.textContent = 'Копіювати';
                    }, 2000);
                }
            });
        }
    };
    
    // Initialize
    document.addEventListener('DOMContentLoaded', function() {
        initTabs();
        renderTasksList();
        
        const backBtn = document.getElementById('backToTasks');
        if (backBtn) backBtn.addEventListener('click', backToTasks);
    });
})();