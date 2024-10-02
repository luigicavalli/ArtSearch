import { Link } from 'react-router-dom';
import { Button } from '../global/Button';
import { Checkbox } from '../global/Checkbox';
import { useHandleLogin } from '../customHooks/useHandleLogin';
import { Textbox } from '../global/Textbox';

export function Login() {
  const {
    handleSubmit,
    handleChange,
    toggleShowPassword,
    showPassword,
    formData,
  } = useHandleLogin();

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen custom-bg">
      <div className="flex flex-col p-8 justify-center items-center border-2 rounded-lg border-sky-900 bg-slate-100">
        <h3 className="mb-[60px] font-bold text-3xl">Accedi</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Textbox
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
          />
          <Textbox
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleChange}
          />
          <div className="flex justify-center gap-2">
            <Checkbox checked={showPassword} onChange={toggleShowPassword} />
            <span>Mostra password</span>
          </div>
          <Button type="submit" text="Login" />
          <div className="flex gap-1 justify-center items-center">
            <span>Non sei registrato?</span>
            <Link
              className="underline hover:text-sky-900 active:text-gray-900"
              to={'/register'}
            >
              Registrati
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
