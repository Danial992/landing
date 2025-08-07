/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkTeal: '#143A41',      // Темно-бирюзовый
        mediumTeal: '#38747E',    // Средне-бирюзовый
        lightTeal: '#53A4B1',     // Светло-бирюзовый
        mutedTeal: '#306770',     // Приглушенно-бирюзовый

        // Алиасы
        primary: '#143A41',       // darkTeal
        'primary-dark': '#38747E',// mediumTeal
        accent: '#53A4B1',        // lightTeal
        muted: '#306770',         // mutedTeal
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        arial: ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
