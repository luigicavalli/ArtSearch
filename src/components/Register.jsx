import { Textbox } from './Textbox';
import { Checkbox } from './Checkbox';
import { useHandleSignUp } from './useHandleSignUp';
import { Button } from './Button';

export function Register() {
  const {
    handleSubmit,
    toggleShowPassword,
    handleChange,
    showPassword,
    formData,
  } = useHandleSignUp();

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-slate-300">
      <h3 className="relative top-[-60px] font-bold text-3xl">Registrati</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <Textbox
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={'Nome'}
        />
        <Textbox
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
          placeholder={'Cognome'}
        />
        <Textbox
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={'Email'}
        />
        <Textbox
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder={'Password'}
        />
        <div className="flex justify-center gap-2">
          <Checkbox checked={showPassword} onChange={toggleShowPassword} />
          <span>Mostra password</span>
        </div>
        <Button type="submit" text="Invia" />
      </form>
    </div>
  );
}
