import { Button } from '../global/Button';
import { Checkbox } from '../global/Checkbox';
import { Textbox } from '../global/Textbox';
import { useHandleEditData } from '../customHooks/useHandleEditData';

export function EditData() {
    
  const { handleEditData, toggleShowPassword, handleChange, showPassword, formData } = useHandleEditData();

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen custom-bg">
      <div className="flex flex-col p-8 justify-center items-center border-2 rounded-lg border-sky-900 bg-slate-100">
        <h3 className="mb-[60px] font-bold text-3xl">Modifica i dati</h3>
        <form onSubmit={handleEditData} className="flex flex-col gap-5">
          <Textbox
            type="text"
            name="name"
            value={formData.name || ''}
            onChange={handleChange}
            placeholder={'Nome'}
          />
          <Textbox
            type="text"
            name="surname"
            value={formData.surname || ''}
            onChange={handleChange}
            placeholder={'Cognome'}
          />
          <Textbox
            type="email"
            name="email"
            value={formData.email || ''}
            onChange={handleChange}
            placeholder={'Email'}
          />
          <Textbox
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password || ''}
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
    </div>
  );
}
