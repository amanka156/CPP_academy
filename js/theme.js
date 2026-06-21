// ============================================
// Theme Toggle
// ============================================

(function() {
    'use strict';
    
    const THEME_KEY = 'cpp-academy-theme';
    
    function getStoredTheme() {
        return localStorage.getItem(THEME_KEY);
    }
    
    function setStoredTheme(theme) {
        localStorage.setItem(THEME_KEY, theme);
    }
    
    function getSystemTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    function getTheme() {
        return getStoredTheme() || getSystemTheme();
    }
    
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        setStoredTheme(theme);
    }
    
    function toggleTheme() {
        const current = getTheme();
        const next = current === 'dark' ? 'light' : 'dark';
        setTheme(next);
    }
    
    // Initialize theme
    setTheme(getTheme());
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (!getStoredTheme()) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
    
    // Expose to global scope
    window.ThemeManager = {
        get: getTheme,
        set: setTheme,
        toggle: toggleTheme
    };
    
    // Initialize on DOM ready
    document.addEventListener('DOMContentLoaded', function() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        }
    });
})();
