import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <div className='flex flex-col items-center justify-center h-screen dark:bg-neutral-900'>
      <div className='text-5xl font-extrabold text-neutral-100 dark:text-neutral-100'>
        {theme === 'light' ? '☀️' : '🌙'}
      </div>
      <button
        className='mt-8 px-6 py-3 bg-slate-200 rounded-lg shadow-md hover:bg-slate-300 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900 transition duration-300 ease-in-out'
        onClick={handleChangeTheme}>
        {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}

export default App;
