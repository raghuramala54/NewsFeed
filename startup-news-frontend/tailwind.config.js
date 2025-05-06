/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",   // All Next.js page files
        "./components/**/*.{js,ts,jsx,tsx}", // All custom components
        "./app/**/*.{js,ts,jsx,tsx}",     // (if you're using the new /app dir)
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1E40AF',      // Deep blue
                secondary: '#F97316',    // Vibrant orange
                accent: '#10B981',       // Green for highlights
                muted: '#6B7280',        // Cool gray for text
                background: '#F9FAFB',   // Light gray for background
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
                serif: ['Merriweather', 'ui-serif'],
            },
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'), // beautiful article content
        require('@tailwindcss/line-clamp'), // truncating long text
        require('@tailwindcss/forms'),      // styling forms cleanly
    ],
};
