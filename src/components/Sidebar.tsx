import React from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import './Sidebar.scss';

const useNavLinkClass = (path: string) => {
  const match = useMatch(path);
  return match ? 'sidebar__nav-link sidebar__nav-link--active' : 'sidebar__nav-link';
};

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar__nav-list">
        <li className="sidebar__nav-item">
          <NavLink className={useNavLinkClass('/')} to="/">Accueil</NavLink>
        </li>
        <li className="sidebar__nav-item">
          <NavLink className={useNavLinkClass('/news')} to="/news">Actualités</NavLink>
        </li>
        <li className="sidebar__nav-item">
          <NavLink className={useNavLinkClass('/documents')} to="/documents">Documents</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
