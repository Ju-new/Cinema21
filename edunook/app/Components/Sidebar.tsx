'use client';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Dashboard', href: '/' },
  { name: 'Study Space', href: '/Pages/StudySpace' },
];

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter(); // Hook for navigation

  // Handle navigation on button click
  const handleNavigation = (href: string) => {
    router.push(href);
  };

  return (
    <div className="w-64 h-screen bg-[#f8f9fa] p-14 mr-8">
      <ul className="list-none flex flex-col text-xl">
        {links.map((link) => (
          <li key={link.name} className="my-2">
            <button
              onClick={() => handleNavigation(link.href)} // Handle click to navigate
              className={clsx(
                'w-full text-left cursor-pointer font-bold p-2 rounded transition-colors duration-150',
                {
                  'text-black': pathname !== link.href,
                  'text-[#7d98c3]': pathname === link.href,
                  'bg-[#f0f4f8]': pathname === link.href, // Optional: add background color for active link
                }
              )}
            >
              {link.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
