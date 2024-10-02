import { Button } from './Button';

export function Home() {
  return (
    <div className="border-b border-gray-600 bg-slate-300">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-center md:text-start text-gray-900 sm:text-3xl">
              My website
            </h1>
            <p className="mt-1.5 text-sm text-center md:text-start text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
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
  );
}
