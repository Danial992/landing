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
      },
    },
  },
  plugins: [],
};
