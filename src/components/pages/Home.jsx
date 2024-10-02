import { Button } from '../global/Button';
import { Textbox } from '../global/Textbox';
import { useImages } from '../customHooks/useImages';
import { ImageList } from '../ImageList';

export function Home() {
  const { images, handleChange, data, searchTerm } = useImages();

  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full min-h-screen custom-bg">
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
            <div className="flex items-center gap-4">
              <Button
                type="button"
                width={'150px'}
                text={'Login'}
                to={'/login'}
              ></Button>
              <Button
                type="button"
                width={'150px'}
                text={'Registrati'}
                to={'/register'}
              ></Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mx-auto pt-[175px] px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <h2 className=" text-xl font-bold mb-3">
          Cerca un artista e visualizza alcune sue opere*
        </h2>
        <div className="flex items-center justify-center gap-3">
          <Textbox
            type="text"
            value={searchTerm}
            onChange={handleChange}
            name="search"
            placeholder={'Cerca per nome artista'}
          />
          <Button
            type="button"
            width={'100px'}
            text={'Cerca'}
            onClick={images}
          />
        </div>
        <span className="mt-2 mb-10 text-sm">
          *Registrandoti potrai vederle tutte senza alcun limite
        </span>
        <div>
          <ul>
            <ImageList data={data} />
          </ul>
        </div>
      </div>
      <div className="fixed bottom-0 w-full border-t-4 border-sky-900 bg-slate-100">
        <div className="mx-auto text-center max-w-screen-xl px-4 py-5 sm:px-6  lg:px-8">
          <span className="font-bold text-lg ">
            ©{currentYear} ArtSearch - Tutti i diritti riservati
          </span>
        </div>
      </div>
    </div>
  );
}
