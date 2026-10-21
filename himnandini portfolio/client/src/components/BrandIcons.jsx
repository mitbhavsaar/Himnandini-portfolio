import React from 'react';

// Authentic Brand Icons as reusable SVG components
export const OdooIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="46" fill="#714B67" />
    <circle cx="50" cy="50" r="26" fill="#ffffff" />
    <circle cx="50" cy="50" r="14" fill="#714B67" />
  </svg>
);

export const PythonIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <path fill="#387EB8" d="M63.8 5c-15.6 0-25 6.8-25 15.6v11.4h25.4v3.8H25.3C11 35.8 0 46.8 0 63.8c0 14.8 12.3 24.3 27.2 24.3h8.3V74.6c0-9.8 8.4-17.9 18.2-17.9h25.5c8.2 0 14.9-6.9 14.9-15.1V20.6C94.1 11.8 84.7 5 63.8 5zm-13.6 8.3c2.7 0 4.8 2.2 4.8 4.8s-2.2 4.8-4.8 4.8-4.8-2.2-4.8-4.8 2.2-4.8 4.8-4.8z" />
    <path fill="#FFE052" d="M64.2 123c15.6 0 25-6.8 25-15.6V96H63.8v-3.8h38.9c14.3 0 25.3-11 25.3-28 0-14.8-12.3-24.3-27.2-24.3h-8.3v13.5c0 9.8-8.4 17.9-18.2 17.9H48.9c-8.2 0-14.9 6.9-14.9 15.1v21.1c0 8.8 9.4 15.6 30.2 15.6zm13.6-8.3c-2.7 0-4.8-2.2-4.8-4.8s2.2-4.8 4.8-4.8 4.8 2.2 4.8 4.8-2.1 4.8-4.8 4.8z" />
  </svg>
);

export const OwlIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2c3.5 0 6 2.5 6 6 0 2.5-1 4.5-2.5 6l1.5 6-5-2-5 2 1.5-6C6.5 12.5 5.5 10.5 5.5 8c0-3.5 2.5-6 6.5-6z" fill="#9333ea" stroke="#7e22ce" />
    <circle cx="9.5" cy="8.5" r="1.5" fill="#ffffff" />
    <circle cx="14.5" cy="8.5" r="1.5" fill="#ffffff" />
    <path d="M12 11l-1 2h2z" fill="#facc15" stroke="none" />
  </svg>
);

export const PostgresIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <path fill="#336791" d="M64 12C36.4 12 14 34.4 14 62c0 23.6 16.3 43.3 38.3 48.5 2.5.5 3.4-1.1 3.4-2.4 0-1.2-.1-5.1-.1-9.4-14.7 3.2-17.8-6.3-17.8-6.3-2.6-6.6-6.3-8.3-6.3-8.3-5.1-3.5.4-3.4.4-3.4 5.6.4 8.6 5.8 8.6 5.8 5 8.6 13.2 6.1 16.4 4.7.5-3.6 2-6.1 3.6-7.5-11.7-1.3-24-5.9-24-26.1 0-5.8 2.1-10.5 5.4-14.2-.6-1.3-2.3-6.7.5-14 0 0 4.4-1.4 14.5 5.4 4.2-1.2 8.7-1.8 13.2-1.8s9 0.6 13.2 1.8c10.1-6.8 14.5-5.4 14.5-5.4 2.8 7.3 1.1 12.7.5 14 3.4 3.7 5.4 8.4 5.4 14.2 0 20.3-12.3 24.7-24.1 26 2 1.7 3.7 5.1 3.7 10.3 0 7.4-.1 13.4-.1 15.2 0 1.3 0.9 2.9 3.4 2.4C99.7 105.3 116 85.6 116 62c0-27.6-22.4-50-52-50z" />
  </svg>
);

export const AzureIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M57.48 10L32.74 54.49 14 86h24.77l18.71-31.51L57.48 10z" fill="#0078D4" />
    <path d="M57.48 10L37.89 44.82 56.63 76.3 82 86l-24.52-76z" fill="#005BA1" />
    <path d="M37.89 44.82L14 86h57.41L56.63 76.3 37.89 44.82z" fill="#008AD7" />
  </svg>
);

export const AwsIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#FF9900" />
    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const NginxIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L21.5 7.5v11L12 24 2.5 18.5v-11L12 2z" fill="#009639" />
    <path d="M8 7v10l8-10v10" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PowerBiIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="12" width="4" height="9" rx="1" fill="#F2C811" />
    <rect x="10" y="7" width="4" height="14" rx="1" fill="#F2C811" />
    <rect x="17" y="3" width="4" height="18" rx="1" fill="#E89B16" />
  </svg>
);

export const JavascriptIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="3" fill="#F7DF1E" />
    <path d="M8.5 12v5c0 1.5-.8 2-2 2-.7 0-1.4-.2-1.9-.6l.5-1.5c.3.2.7.4 1.1.4.6 0 .9-.3.9-.9v-4.4h1.4zm7.3 3.4c-.4-.5-1-.9-1.8-1.2l-.4-.2c-.7-.3-1.1-.6-1.1-1.1 0-.6.5-1 1.2-1 .7 0 1.2.3 1.6.7l.9-1.2c-.6-.7-1.4-1.1-2.5-1.1-1.7 0-2.8 1.1-2.8 2.6 0 1 .6 1.8 1.6 2.3l.5.2c.8.4 1.2.7 1.2 1.3 0 .7-.6 1.2-1.5 1.2-.9 0-1.6-.4-2.1-1l-1 1.2c.7.8 1.8 1.4 3.1 1.4 1.9 0 3.1-1.1 3.1-2.7-.1-.9-.4-1.3-.7-1.5z" fill="#000000" />
  </svg>
);

export const Html5Icon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 2l1.6 18 6.4 2 6.4-2L20 2H4z" fill="#E44D26" />
    <path d="M12 3.8v16.3l4.8-1.5 1.3-14.8H12z" fill="#F16529" />
    <path d="M8 7h8l-.3 3H9.2l.2 2.5h6l-.6 6-2.8.9-2.8-.9-.2-2H7.2l.3 3.6 4.5 1.4 4.5-1.4.9-9.5H8.3L8 7z" fill="#ffffff" />
  </svg>
);

export const Css3Icon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 2l1.6 18 6.4 2 6.4-2L20 2H4z" fill="#1572B6" />
    <path d="M12 3.8v16.3l4.8-1.5 1.3-14.8H12z" fill="#33A9DC" />
    <path d="M8 7h8l-.3 3H9.2l.2 2.5h6l-.6 6-2.8.9-2.8-.9-.2-2H7.2l.3 3.6 4.5 1.4 4.5-1.4.9-9.5H8.3L8 7z" fill="#ffffff" />
  </svg>
);

export const TailwindIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#38BDF8" />
  </svg>
);

// Social Media SVGs
export const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

export const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

export const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export const GitIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.9 10.87L13.13 2.1a2.25 2.25 0 0 0-3.18 0l-1.6 1.6 3.03 3.03a2.6 2.6 0 0 1 3.28 3.32l2.92 2.92a2.6 2.6 0 0 1 1.74-.2 2.6 2.6 0 0 1 2.58 2.58 2.6 2.6 0 0 1-2.02 2.52 2.6 2.6 0 0 1-3.08-3.08l-2.8-2.8v4.9a2.6 2.6 0 1 1-2 0V9.45a2.6 2.6 0 0 1-1.39-2.27c0-.98.54-1.84 1.34-2.29L6.96 2.9 2.1 7.76a2.25 2.25 0 0 0 0 3.18l8.77 8.77a2.25 2.25 0 0 0 3.18 0l7.85-7.85a2.25 2.25 0 0 0 0-3.19z" fill="#F05032" />
  </svg>
);

export const DockerIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#2496ED" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.98 11.08h-2.1V8.98h2.1v2.1zm-2.48 0H9.4V8.98h2.1v2.1zm4.96 0h-2.1V8.98h2.1v2.1zm-7.44 0H6.92V8.98h2.1v2.1zm4.96-2.48h-2.1V6.5h2.1v2.1zm-2.48 0H9.4V6.5h2.1v2.1zm4.96 0h-2.1V6.5h2.1v2.1zm2.48 2.48h2.1v2.1h-2.1v-2.1zm7.84 1.83c-.45-.33-1.42-.4-2.19-.18-.21-.83-.78-1.55-1.52-1.99l-.49-.29-.33.46c-.44.62-.64 1.39-.56 2.16-.9.46-2.05.57-2.05.57H2.22c-.28 1.48.06 3.82 1.38 5.48 1.57 1.98 4.14 2.87 7.64 2.65 4.67-.3 7.82-2.73 9.42-6.53 1.13.06 2.92-.23 3.65-2.06l.16-.38-.49-.09z"/>
  </svg>
);

export const LinuxIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C9.5 2 8 4 8 7c0 1.5.3 3 .8 4.2C7 12 5.5 13.5 5 15.5c-.8 3 1.5 5.5 4 5.5h6c2.5 0 4.8-2.5 4-5.5-.5-2-2-3.5-3.8-4.3.5-1.2.8-2.7.8-4.2 0-3-1.5-5-4-5z" fill="#FCC624" />
    <path d="M12 3c-1.8 0-3 1.5-3 4 0 1.2.3 2.5.7 3.5.7-.3 1.5-.5 2.3-.5s1.6.2 2.3.5c.4-1 .7-2.3.7-3.5 0-2.5-1.2-4-3-4z" fill="#000000" />
    <circle cx="10.5" cy="6.5" r="1" fill="#fff" />
    <circle cx="13.5" cy="6.5" r="1" fill="#fff" />
    <circle cx="10.7" cy="6.7" r=".5" fill="#000" />
    <circle cx="13.7" cy="6.7" r=".5" fill="#000" />
    <path d="M12 8.5c-.8 0-1.2.5-1.2.8s.5.7 1.2.7 1.2-.4 1.2-.7-.4-.8-1.2-.8z" fill="#FFA500" />
    <path d="M12 12c-2.5 0-4 2-4 5s1.5 4 4 4 4-1 4-4-1.5-5-4-5z" fill="#ffffff" />
  </svg>
);

export const VsCodeIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5 2.5L7.2 10.3 3 7.2l-1.5.9v7.8l1.5.9 4.2-3.1 10.3 7.8 4-1.9V4.4l-4-1.9zm0 4.6v9.8l-6.3-4.9 6.3-4.9z" fill="#007ACC" />
  </svg>
);

export const PostmanIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#FF6C37" />
    <path d="M7 13.5l4-4 3 2 4-4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="18" cy="7.5" r="1.5" fill="#ffffff" />
  </svg>
);

export const FigmaIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 2h4v4H8z" fill="#F24E1E" />
    <path d="M12 2h4a4 4 0 0 1 0 8h-4V2z" fill="#FF7262" />
    <path d="M12 10h4a4 4 0 0 1 0 8h-4v-8z" fill="#1ABCFE" />
    <path d="M8 10h4v4H8z" fill="#A259FF" />
    <path d="M8 14h4v4a4 4 0 0 1-4-4z" fill="#0ACF83" />
  </svg>
);
