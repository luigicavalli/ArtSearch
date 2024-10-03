import { useNavigate } from 'react-router';

export function Dashboard() {
  const userData = localStorage.getItem('userData'); // Recupero i dati precedentemente salvati in local storage;
  const user = userData ? JSON.parse(userData) : null;
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem('userData');
    
    navigate('/');
  };

  return (
    <div>
      <div className="fixed w-full border-b-4 border-sky-900 bg-slate-100">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-8 lg:px-8">
          <div className="flex items-center gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-4">
              <img
                className="w-[70px]"
                src="src/assets/artsearch_logo.svg"
                alt="artsearch-logo"
              />
              <div className="hidden sm:flex flex-col justify-center">
                <h1 className="text-2xl font-serif font-bold text-center md:text-start text-gray-900 sm:text-3xl">
                  ArtSearch
                </h1>
                <p className="text-base text-center md:text-start text-gray-600">
                  Il sito per appassionati d&apos;arte
                </p>
              </div>
            </div>
            <div>
              <button
                type="button"
                onClick={handleClick}
                className="border-2 border-red-700 rounded-lg w-[150px] p-3 font-bold text-slate-100 bg-red-700 hover:bg-slate-100 hover:text-red-700 transition-all active:bg-red-700 active:text-slate-100"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[175px] mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <h1 className="text-2xl font-bold">Benvenuto, {user.name}!</h1>
      </div>
    </div>
  );
}
