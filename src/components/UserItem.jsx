export function UserItem({ user }) {
  return (
    <li key={user.user_id}>
      <p className="text-sky-900 font-bold">
        <span className="text-[#111827]">Nome: {user.name}</span>
      </p>
      <p className="text-sky-900 font-bold">
        <span className="text-[#111827]">Cognome: {user.surname}</span>
      </p>
      <p className="text-sky-900 font-bold">
        <span className="text-[#111827]">Email: {user.email}</span>
      </p>
      <p className="text-sky-900 font-bold">
        <span className="text-[#111827]">
          Data creazione: {user.created_at}
        </span>
      </p>
    </li>
  );
}
