import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface NavLink {
  label: string;
  to: string;
}

export const NavigationLinks: React.FC = () => {
  const [t] = useTranslation();
  const location = useLocation();
  console.log(`${location.pathname}${location.hash}`);
  

  const links: NavLink[] = [
    { label: t('Home'),  to: '/' },
    { label: t('Doctors'), to: '/doctors' },
    { label: t('Services'), to: '/#Services' },
    { label: t('Blog'), to: '/#Update' },
    { label: t('Reviews'), to: '/#Reviews' },
    { label: t('Hire Us'), to: '/#HireUs' },
  ];

  const renderNavLinks = (links: NavLink[]) => (
    <ul className='Links'>
      {links.map((link, index) => (
        <li key={index} className={`${location.pathname}${location.hash}` === link.to ? 'active' : ''}>
        <Link to={link.to}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );

  return renderNavLinks(links);
};
