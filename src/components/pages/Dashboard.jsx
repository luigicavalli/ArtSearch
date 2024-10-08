import { useHandleLogout } from '../customHooks/useHandleLogout';
import { Button } from '../global/Button';
import { Link } from 'react-router-dom';

export function Dashboard() {
  const userData = localStorage.getItem('userData'); // Recupero i dati precedentemente salvati in local storage;

  const user = userData ? JSON.parse(userData) : null;

  const { handleLogout } = useHandleLogout();

  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full min-h-screen custom-bg">
      <div className="fixed w-full border-b-4 border-sky-900 bg-slate-100">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-8 lg:px-8">
          <div className="flex items-center justify-between gap-4 md:flex-row md:items-center md:justify-between">
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
            <div className="flex gap-4">
              <Button
                type="button"
                width={'150px'}
                text={'Home'}
                to={'/home'}
              />
              <button
                type="button"
                onClick={handleLogout}
                className="border-2 border-red-700 rounded-lg w-[150px] p-3 font-bold text-slate-100 bg-red-700 hover:bg-slate-100 hover:text-red-700 transition-all active:bg-red-700 active:text-slate-100"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 pt-[175px] mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <h1 className="border-4 border-sky-900 rounded-lg text-center bg-slate-100 p-4 text-2xl font-bold">
          Bentornato, {user.name}!
        </h1>
        <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row justify-between p-4 sm:p-6 lg:p-8 border-4 rounded-lg border-sky-900 bg-slate-100">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg underline font-bold">
              Informazioni Account
            </h3>
            <div className="flex flex-col gap-2">
              <p className="text-sky-900 font-bold">
                Nome: <span className="text-[#111827]">{user.name}</span>
              </p>
              <p className="text-sky-900 font-bold">
                Cognome: <span className="text-[#111827]">{user.surname}</span>
              </p>
              <p className="text-sky-900 font-bold">
                Email: <span className="text-[#111827]">{user.email}</span>
              </p>
              <p className="text-sky-900 font-bold">
                Password:{' '}
                <Link className="text-[#111827] font-bold underline hover:text-sky-900 active:text-gray-900">
                  Modifica password
                </Link>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg underline font-bold">
              Collega i tuoi social
            </h3>
            <div className="flex flex-col gap-2">
              <Link className="flex gap-2 items-center text-[#111827] font-bold underline">
                <svg
                  fill="#0c4a6e"
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 310 310"
                  xmlSpace="preserve"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <g id="XMLID_834_">
                      {' '}
                      <path
                        id="XMLID_835_"
                        d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064 c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996 V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545 C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703 c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"
                      ></path>{' '}
                    </g>{' '}
                  </g>
                </svg>
                <span className="hover:text-sky-900 active:text-gray-900">
                  Facebook
                </span>
              </Link>
              <Link className="flex gap-2 items-center text-[#111827] font-bold underline">
                <svg
                  className="w-[20px] h-[20px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#0c4a6e"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                      fill="#0c4a6e"
                    ></path>{' '}
                    <path
                      d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                      fill="#0c4a6e"
                    ></path>{' '}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                      fill="#0c4a6e"
                    ></path>{' '}
                  </g>
                </svg>
                <span className="hover:text-sky-900 active:text-gray-900">
                  Instagram
                </span>
              </Link>
              <Link className="flex gap-2 items-center text-[#111827] font-bold underline">
                <svg
                  className="w-[20px] h-[20px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.7828 3.91825C20.1313 3.83565 20.3743 3.75444 20.5734 3.66915C20.8524 3.54961 21.0837 3.40641 21.4492 3.16524C21.7563 2.96255 22.1499 2.9449 22.4739 3.11928C22.7979 3.29366 23 3.6319 23 3.99986C23 5.08079 22.8653 5.96673 22.5535 6.7464C22.2911 7.40221 21.9225 7.93487 21.4816 8.41968C21.2954 11.7828 20.3219 14.4239 18.8336 16.4248C17.291 18.4987 15.2386 19.8268 13.0751 20.5706C10.9179 21.3121 8.63863 21.4778 6.5967 21.2267C4.56816 20.9773 2.69304 20.3057 1.38605 19.2892C1.02813 19.0108 0.902313 18.5264 1.07951 18.109C1.25671 17.6916 1.69256 17.4457 2.14144 17.5099C3.42741 17.6936 4.6653 17.4012 5.6832 16.9832C5.48282 16.8742 5.29389 16.7562 5.11828 16.6346C4.19075 15.9925 3.4424 15.1208 3.10557 14.4471C2.96618 14.1684 2.96474 13.8405 3.10168 13.5606C3.17232 13.4161 3.27562 13.293 3.40104 13.1991C2.04677 12.0814 1.49999 10.5355 1.49999 9.49986C1.49999 9.19192 1.64187 8.90115 1.88459 8.71165C1.98665 8.63197 2.10175 8.57392 2.22308 8.53896C2.12174 8.24222 2.0431 7.94241 1.98316 7.65216C1.71739 6.3653 1.74098 4.91284 2.02985 3.75733C2.1287 3.36191 2.45764 3.06606 2.86129 3.00952C3.26493 2.95299 3.6625 3.14709 3.86618 3.50014C4.94369 5.36782 6.93116 6.50943 8.78086 7.18568C9.6505 7.50362 10.4559 7.70622 11.0596 7.83078C11.1899 6.61019 11.5307 5.6036 12.0538 4.80411C12.7439 3.74932 13.7064 3.12525 14.74 2.84698C16.5227 2.36708 18.5008 2.91382 19.7828 3.91825ZM10.7484 9.80845C10.0633 9.67087 9.12171 9.43976 8.09412 9.06408C6.7369 8.56789 5.16088 7.79418 3.84072 6.59571C3.86435 6.81625 3.89789 7.03492 3.94183 7.24766C4.16308 8.31899 4.5742 8.91899 4.94721 9.10549C5.40342 9.3336 5.61484 9.8685 5.43787 10.3469C5.19827 10.9946 4.56809 11.0477 3.99551 10.9046C4.45603 11.595 5.28377 12.2834 6.66439 12.5135C7.14057 12.5929 7.49208 13.0011 7.49986 13.4838C7.50765 13.9665 7.16949 14.3858 6.69611 14.4805L5.82565 14.6546C5.95881 14.7703 6.103 14.8838 6.2567 14.9902C6.95362 15.4727 7.65336 15.6808 8.25746 15.5298C8.70991 15.4167 9.18047 15.6313 9.39163 16.0472C9.60278 16.463 9.49846 16.9696 9.14018 17.2681C8.49626 17.8041 7.74425 18.2342 6.99057 18.5911C6.63675 18.7587 6.24134 18.9241 5.8119 19.0697C6.14218 19.1402 6.48586 19.198 6.84078 19.2417C8.61136 19.4594 10.5821 19.3126 12.4249 18.6792C14.2614 18.0479 15.9589 16.9385 17.2289 15.2312C18.497 13.5262 19.382 11.1667 19.5007 7.96291C19.51 7.71067 19.6144 7.47129 19.7929 7.29281C20.2425 6.84316 20.6141 6.32777 20.7969 5.7143C20.477 5.81403 20.1168 5.90035 19.6878 5.98237C19.3623 6.04459 19.0272 5.94156 18.7929 5.70727C18.0284 4.94274 16.5164 4.43998 15.2599 4.77822C14.6686 4.93741 14.1311 5.28203 13.7274 5.89906C13.3153 6.52904 13 7.51045 13 8.9999C13 9.28288 12.8801 9.5526 12.6701 9.74221C12.1721 10.1917 11.334 9.92603 10.7484 9.80845Z"
                      fill="#0c4a6e"
                    ></path>{' '}
                  </g>
                </svg>
                <span className="hover:text-sky-900 active:text-gray-900">
                  Twitter
                </span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Button
              type="button"
              width={'200px'}
              text={'Modifica i dati'}
              to={'/update-user'}
            />
            <button
              type="button"
              className="border-2 border-red-700 rounded-lg w-[200px] p-3 font-bold text-slate-100 bg-red-700 hover:bg-slate-100 hover:text-red-700 transition-all active:bg-red-700 active:text-slate-100"
            >
              Elimina account
            </button>
          </div>
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
