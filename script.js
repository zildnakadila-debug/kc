class ComponentManager {
      static async loadHtml(url, containerId) {
        try {
          const res = await fetch(url);
          if (!res.ok) throw new Error(res.status + ' ' + res.statusText);
          const html = await res.text();
          const container = document.getElementById(containerId);
          if (!container) throw new Error('Container not found: ' + containerId);
          container.innerHTML = html;
          return container.firstElementChild;
        } catch (err) {
          console.error('Component load failed:', url, err);
          return null;
        }
      }
    }
document.addEventListener('DOMContentLoaded', async function() {
      await ComponentManager.loadHtml('components/sidebar.html', 'sidebar-container');
      await ComponentManager.loadHtml('components/header.html', 'header-container');
    });



    document.querySelectorAll('.social-links a').length
