/**
 * Inline script that applies the saved theme class before React hydrates,
 * so we never flash the wrong mode on initial load. Defaults to dark.
 */
export function ThemeScript() {
  const source = `(() => {
    try {
      const stored = localStorage.getItem('theme');
      const theme = stored === 'light' || stored === 'dark' ? stored : 'dark';
      const root = document.documentElement;
      root.classList.toggle('dark', theme === 'dark');
      root.classList.toggle('light', theme === 'light');
      root.style.colorScheme = theme;
    } catch (_) {
      document.documentElement.classList.add('dark');
    }
  })();`;

  return <script dangerouslySetInnerHTML={{ __html: source }} />;
}
