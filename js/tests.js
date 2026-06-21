// ============================================
// Tests Logic
// ============================================

(function() {
    'use strict';
    
    let currentTab = 'cpp';
    let currentTest = null;
    let currentQuestion = 0;
    let answers = [];
    let showingResults = false;
    
    function getTests() {
        return currentTab === 'cpp' ? window.CPP_Tests : window.WF_Tests;
    }
    
    function initTabs() {
        const tabs = document.querySelectorAll('.tab-btn');
        tabs.forEach(function(tab) {
            tab.addEventListener('click', function() {
                tabs.forEach(function(t) { t.classList.remove('active'); });
                this.classList.add('active');
                currentTab = this.dataset.tab;
                renderTestsList();
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
    
    function renderTestsList() {
        const grid = document.getElementById('testsGrid');
        if (!grid) return;
        
        const tests = getTests();
        grid.innerHTML = '';
        
        tests.forEach(function(test) {
            const card = document.createElement('div');
            card.className = 'test-card';
            card.innerHTML = `
                <div class="test-card-number">Тест #${test.id}</div>
                <h3 class="test-card-title">${test.title}</h3>
                <p class="test-card-desc">20 запитань на перевірку знань</p>
                <div class="test-card-meta">
                    <span>20 запитань</span>
                    <span>${currentTab === 'cpp' ? 'C++' : 'Windows Forms'}</span>
                </div>
            `;
            card.addEventListener('click', function() {
                startTest(test);
            });
            grid.appendChild(card);
        });
    }
    
    function startTest(test) {
        currentTest = test;
        currentQuestion = 0;
        answers = new Array(test.questions.length).fill(-1);
        showingResults = false;
        
        // Hide list, show interface
        const listSection = document.getElementById('testsListSection');
        const testInterface = document.getElementById('testInterface');
        const testResults = document.getElementById('testResults');
        
        if (listSection) listSection.style.display = 'none';
        if (testInterface) testInterface.style.display = 'block';
        if (testResults) testResults.style.display = 'none';
        
        // Приховуємо вкладки при старті тесту
        toggleTabsVisibility(false);
        
        renderQuestion();
        updateProgress();
    }
    
    function renderQuestion() {
        const card = document.getElementById('testQuestionCard');
        if (!card || !currentTest) return;
        
        const q = currentTest.questions[currentQuestion];
        
        let html = `
            <div class="test-question-number">Запитання ${currentQuestion + 1} з ${currentTest.questions.length}</div>
            <h3 class="test-question-text">${q.question}</h3>
        `;
        
        if (q.code) {
            html += `<div class="test-question-code"><pre><code>${escapeHtml(q.code)}</code></pre></div>`;
        }
        
        html += '<div class="test-options">';
        q.options.forEach(function(opt, idx) {
            const selected = answers[currentQuestion] === idx ? ' selected' : '';
            html += `
                <label class="test-option${selected}">
                    <input type="radio" name="answer" value="${idx}" ${selected ? 'checked' : ''}>
                    <span>${escapeHtml(opt)}</span>
                </label>
            `;
        });
        html += '</div>';
        
        card.innerHTML = html;
        
        // Add event listeners to options
        card.querySelectorAll('.test-option').forEach(function(opt, idx) {
            opt.addEventListener('click', function() {
                answers[currentQuestion] = idx;
                card.querySelectorAll('.test-option').forEach(function(o) {
                    o.classList.remove('selected');
                });
                this.classList.add('selected');
                this.querySelector('input').checked = true;
            });
        });
        
        // Update buttons
        updateButtons();
    }
    
    function updateProgress() {
        const fill = document.getElementById('testProgressFill');
        const text = document.getElementById('testProgressText');
        
        if (fill && currentTest) {
            const pct = ((currentQuestion + 1) / currentTest.questions.length) * 100;
            fill.style.width = pct + '%';
        }
        if (text && currentTest) {
            text.textContent = (currentQuestion + 1) + ' / ' + currentTest.questions.length;
        }
    }
    
    function updateButtons() {
        const prevBtn = document.getElementById('prevQuestion');
        const nextBtn = document.getElementById('nextQuestion');
        const finishBtn = document.getElementById('finishTest');
        
        if (prevBtn) prevBtn.disabled = currentQuestion === 0;
        
        const isLast = currentQuestion === currentTest.questions.length - 1;
        if (nextBtn) nextBtn.style.display = isLast ? 'none' : '';
        if (finishBtn) finishBtn.style.display = isLast ? '' : 'none';
    }
    
    function nextQuestion() {
        if (currentQuestion < currentTest.questions.length - 1) {
            currentQuestion++;
            renderQuestion();
            updateProgress();
        }
    }
    
    function prevQuestion() {
        if (currentQuestion > 0) {
            currentQuestion--;
            renderQuestion();
            updateProgress();
        }
    }
    
    function finishTest() {
        showingResults = true;
        
        const testInterface = document.getElementById('testInterface');
        const testResults = document.getElementById('testResults');
        
        if (testInterface) testInterface.style.display = 'none';
        if (testResults) testResults.style.display = 'block';
        
        // Вкладки залишаються прихованими на сторінці результатів
        renderResults();
    }
    
    function renderResults() {
        const correct = answers.reduce(function(acc, ans, idx) {
            return acc + (ans === currentTest.questions[idx].correct ? 1 : 0);
        }, 0);
        
        const total = currentTest.questions.length;
        const percent = Math.round((correct / total) * 100);
        
        // Score
        const scoreEl = document.getElementById('resultsScore');
        if (scoreEl) {
            let grade = '';
            if (percent >= 90) grade = 'Відмінно!';
            else if (percent >= 75) grade = 'Добре!';
            else if (percent >= 60) grade = 'Задовільно';
            else grade = 'Потрібно більше практики';
            
            scoreEl.innerHTML = `Правильних відповідей: <strong>${correct}</strong> з ${total}. ${grade}`;
        }
        
        // Test name
        const nameEl = document.getElementById('resultsTestName');
        if (nameEl) nameEl.textContent = currentTest.title;
        
        // Circle animation
        const circleFill = document.getElementById('resultsCircleFill');
        const percentEl = document.getElementById('resultsPercent');
        
        if (circleFill) {
            const circumference = 2 * Math.PI * 50;
            const offset = circumference - (percent / 100) * circumference;
            setTimeout(function() {
                circleFill.style.strokeDashoffset = offset;
                // Color based on score
                if (percent >= 75) {
                    circleFill.style.stroke = '#10B981';
                } else if (percent >= 60) {
                    circleFill.style.stroke = '#F59E0B';
                } else {
                    circleFill.style.stroke = '#EF4444';
                }
            }, 100);
        }
        
        if (percentEl) {
            let current = 0;
            const interval = setInterval(function() {
                if (current >= percent) {
                    clearInterval(interval);
                    percentEl.textContent = percent + '%';
                } else {
                    current++;
                    percentEl.textContent = current + '%';
                }
            }, 15);
        }
        
        // Breakdown
        const breakdown = document.getElementById('resultsBreakdown');
        if (breakdown) {
            let html = '';
            currentTest.questions.forEach(function(q, idx) {
                const isCorrect = answers[idx] === q.correct;
                const statusClass = isCorrect ? 'correct' : 'incorrect';
                const statusText = isCorrect ? 'Правильно' : 'Неправильно';
                html += `
                    <div class="results-breakdown-item">
                        <span class="results-breakdown-q">${idx + 1}. ${q.question.substring(0, 80)}...</span>
                        <span class="results-breakdown-status ${statusClass}">${statusText}</span>
                    </div>
                `;
            });
            breakdown.innerHTML = html;
        }
    }
    
    function backToTests() {
        const listSection = document.getElementById('testsListSection');
        const testInterface = document.getElementById('testInterface');
        const testResults = document.getElementById('testResults');
        
        if (listSection) listSection.style.display = 'block';
        if (testInterface) testInterface.style.display = 'none';
        if (testResults) testResults.style.display = 'none';
        
        currentTest = null;
        currentQuestion = 0;
        answers = [];
        showingResults = false;
        
        // Показуємо вкладки знову при поверненні до списку тестів
        toggleTabsVisibility(true);
    }
    
    function retryTest() {
        if (currentTest) {
            startTest(currentTest);
        }
    }
    
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    // Initialize
    document.addEventListener('DOMContentLoaded', function() {
        initTabs();
        renderTestsList();
        
        // Button handlers
        const prevBtn = document.getElementById('prevQuestion');
        const nextBtn = document.getElementById('nextQuestion');
        const finishBtn = document.getElementById('finishTest');
        const backBtn = document.getElementById('backToTests');
        const backBtn2 = document.getElementById('backToTests2');
        const retryBtn = document.getElementById('retryTest');
        
        if (prevBtn) prevBtn.addEventListener('click', prevQuestion);
        if (nextBtn) nextBtn.addEventListener('click', nextQuestion);
        if (finishBtn) finishBtn.addEventListener('click', finishTest);
        if (backBtn) backBtn.addEventListener('click', backToTests);
        if (backBtn2) backBtn2.addEventListener('click', backToTests);
        if (retryBtn) retryBtn.addEventListener('click', retryTest);
    });
})();