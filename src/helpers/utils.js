export function getCSSName(themeName) {
  const themes = {
    blue: 'styles.css',
    green: 'styles-3.css',
    purple: 'styles-4.css',
    orange: 'styles-5.css',
    grey: 'styles-6.css'
  };
  return themes[themeName] || 'styles.css';
}

export default getCSSName;
