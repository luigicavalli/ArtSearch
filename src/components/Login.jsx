import { Button } from './Button';
import { HandleLogin } from './HandleLogin';
import { Textbox } from './Textbox';

export function Login() {
  const { handleSubmit, handleChange, formData } = HandleLogin();

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-slate-300">
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
        <Textbox
          type="text"
          name="username"
          value={formData.username}
          placeholder="Username"
          onChange={handleChange}
        />
        <Textbox
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
