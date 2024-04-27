import { APP_ROUTES } from '@/src/config';
import Link from 'next/link';

interface NavProps {}

export const Nav: React.FC<NavProps> = () => {
  const navItems = [
    {
      label: 'Strona główna',
      url: APP_ROUTES.main,
    },
    {
      label: 'Logowanie',
      url: APP_ROUTES.auth.login,
    },
    {
      label: 'Rejestracja',
      url: APP_ROUTES.auth.register,
    },
    {
      label: 'Panel użytkownika',
      url: APP_ROUTES.dashboard,
    },
  ];
  return (
    <nav>
      <ul
        style={{
          display: 'flex',
          gap: 8,
        }}
      >
        {navItems.map(({ url, label }) => (
          <li>
            <Link className="font-bold" href={url}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
