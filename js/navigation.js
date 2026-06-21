// ============================================
// Navigation & Side Menu
// ============================================

(function() {
    'use strict';
    
    let currentCourse = 'cpp';
    
    function setCurrentCourse(course) {
        currentCourse = course;
    }
    
    function getCurrentCourse() {
        return currentCourse;
    }
    
    // Build side menu navigation
    function buildSideMenu() {
        const menuNav = document.getElementById('sideMenuNav');
        if (!menuNav) return;
        
        menuNav.innerHTML = '';
        
        // C++ Lectures Group
        const cppGroup = createMenuGroup('Лекції C++', 'cpp-lectures', true);
        const cppItems = document.createElement('ul');
        cppItems.className = 'menu-group-items';
        
        window.CPP_Modules.forEach(mod => {
            const modLectures = window.CPP_Lectures.filter(l => l.module === mod.id);
            if (modLectures.length === 0) return;
            
            const modHeader = document.createElement('div');
            modHeader.className = 'menu-group-title';
            modHeader.textContent = mod.name;
            modHeader.style.paddingLeft = '32px';
            modHeader.style.fontSize = '12px';
            modHeader.style.textTransform = 'none';
            modHeader.style.letterSpacing = '0';
            modHeader.style.color = 'var(--text-muted)';
            cppItems.appendChild(modHeader);
            
            modLectures.forEach(lec => {
                const item = document.createElement('button');
                item.className = 'menu-item';
                item.textContent = `${lec.id}. ${lec.title}`;
                item.addEventListener('click', function() {
                    navigateToLecture('cpp', lec.id);
                });
                cppItems.appendChild(item);
            });
        });
        
        cppGroup.querySelector('.menu-group-items').appendChild(cppItems);
        menuNav.appendChild(cppGroup);
        
        // Windows Forms Lectures Group
        const wfGroup = createMenuGroup('Windows Forms', 'wf-lectures', false);
        const wfItems = document.createElement('ul');
        wfItems.className = 'menu-group-items';
        
        window.WF_Modules.forEach(mod => {
            const modLectures = window.WF_Lectures.filter(l => l.module === mod.id);
            if (modLectures.length === 0) return;
            
            const modHeader = document.createElement('div');
            modHeader.className = 'menu-group-title';
            modHeader.textContent = mod.name;
            modHeader.style.paddingLeft = '32px';
            modHeader.style.fontSize = '12px';
            modHeader.style.textTransform = 'none';
            modHeader.style.letterSpacing = '0';
            modHeader.style.color = 'var(--text-muted)';
            wfItems.appendChild(modHeader);
            
            modLectures.forEach(lec => {
                const item = document.createElement('button');
                item.className = 'menu-item';
                item.textContent = `${lec.id}. ${lec.title}`;
                item.addEventListener('click', function() {
                    navigateToLecture('wf', lec.id);
                });
                wfItems.appendChild(item);
            });
        });
        
        wfGroup.querySelector('.menu-group-items').appendChild(wfItems);
        menuNav.appendChild(wfGroup);
        
        // Tests Group
        const testGroup = createMenuGroup('Тести', 'tests', false);
        const testItems = testGroup.querySelector('.menu-group-items');
        
        const cppTestItem = document.createElement('button');
        cppTestItem.className = 'menu-item';
        cppTestItem.textContent = 'Тести з C++';
        cppTestItem.addEventListener('click', function() {
            window.location.href = 'tests.html?tab=cpp';
        });
        testItems.appendChild(cppTestItem);
        
        const wfTestItem = document.createElement('button');
        wfTestItem.className = 'menu-item';
        wfTestItem.textContent = 'Тести з Windows Forms';
        wfTestItem.addEventListener('click', function() {
            window.location.href = 'tests.html?tab=wf';
        });
        testItems.appendChild(wfTestItem);
        
        menuNav.appendChild(testGroup);
        
        // Tasks Group
        const taskGroup = createMenuGroup('Завдання', 'tasks', false);
        const taskItems = taskGroup.querySelector('.menu-group-items');
        
        const cppTaskItem = document.createElement('button');
        cppTaskItem.className = 'menu-item';
        cppTaskItem.textContent = 'Завдання з C++';
        cppTaskItem.addEventListener('click', function() {
            window.location.href = 'tasks.html?tab=cpp';
        });
        taskItems.appendChild(cppTaskItem);
        
        const wfTaskItem = document.createElement('button');
        wfTaskItem.className = 'menu-item';
        wfTaskItem.textContent = 'Завдання з Windows Forms';
        wfTaskItem.addEventListener('click', function() {
            window.location.href = 'tasks.html?tab=wf';
        });
        taskItems.appendChild(wfTaskItem);
        
        menuNav.appendChild(taskGroup);
    }
    
    function createMenuGroup(title, id, expanded) {
        const group = document.createElement('div');
        group.className = 'menu-group' + (expanded ? ' expanded' : '');
        group.dataset.groupId = id;
        
        const groupTitle = document.createElement('button');
        groupTitle.className = 'menu-group-title';
        groupTitle.innerHTML = title + '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';
        groupTitle.addEventListener('click', function() {
            group.classList.toggle('expanded');
        });
        
        const items = document.createElement('div');
        items.className = 'menu-group-items';
        
        group.appendChild(groupTitle);
        group.appendChild(items);
        
        return group;
    }
    
    function navigateToLecture(course, lectureId) {
        const page = course === 'cpp' ? 'lectures.html' : 'windows-forms.html';
        window.location.href = `${page}?lecture=${lectureId}`;
    }
    
    // Mobile menu toggle
    function initMobileMenu() {
        const menuToggle = document.getElementById('menuToggle');
        const sideMenu = document.getElementById('sideMenu');
        const mobileOverlay = document.getElementById('mobileOverlay');
        const sideMenuClose = document.getElementById('sideMenuClose');
        
        if (!menuToggle || !sideMenu) return;
        
        function openMenu() {
            sideMenu.classList.add('active');
            if (mobileOverlay) mobileOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        function closeMenu() {
            sideMenu.classList.remove('active');
            if (mobileOverlay) mobileOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        menuToggle.addEventListener('click', openMenu);
        
        if (sideMenuClose) {
            sideMenuClose.addEventListener('click', closeMenu);
        }
        
        if (mobileOverlay) {
            mobileOverlay.addEventListener('click', closeMenu);
        }
        
        // Close on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') closeMenu();
        });
    }
    
    // Menu search
    function initMenuSearch() {
        const searchInput = document.getElementById('menuSearch');
        if (!searchInput) return;
        
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            const items = document.querySelectorAll('.menu-item');
            const groups = document.querySelectorAll('.menu-group');
            
            items.forEach(function(item) {
                const text = item.textContent.toLowerCase();
                if (query === '' || text.includes(query)) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
            
            // Expand all groups when searching
            groups.forEach(function(group) {
                if (query !== '') {
                    group.classList.add('expanded');
                }
            });
        });
    }
    
    // Initialize on DOM ready
    document.addEventListener('DOMContentLoaded', function() {
        buildSideMenu();
        initMobileMenu();
        initMenuSearch();
    });
    
    // Expose
    window.Navigation = {
        setCurrentCourse: setCurrentCourse,
        getCurrentCourse: getCurrentCourse,
        navigateToLecture: navigateToLecture
    };
})();
