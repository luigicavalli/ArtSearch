import { Button } from './components/global/Button';

function App() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center main-bg">
      <div className="flex flex-col w-[400px] h-[300px] sm:w-[500px] sm:h-[250px] justify-between items-center border-4 border-sky-900 rounded-lg p-8 bg-slate-100">
        <div className="flex gap-4">
          <img
            className="w-[80px]"
            src="src/assets/artsearch_logo.svg"
            alt="artsearch-logo"
          />
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-serif font-bold text-start text-gray-900">
              ArtSearch
            </h1>
            <p className="text-base md:text-start text-gray-600">
              Il sito per appassionati d&apos;arte
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button type="button" width={'150px'} text={'Login'} to={'/Login'} />
          <Button
            type="button"
            width={'150px'}
            text={'Registrati'}
            to={'/register'}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
