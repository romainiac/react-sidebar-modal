import logo from './logo.svg';
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';
import { useGlobalContext } from './context';
const SideBar = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();

  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className="sidebar-header">
        <img src={logo} className="logo" alt="coding addict" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link, key) => {
          const { id, url, text, icon } = link;
          return (
            <li key={key}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((link, key) => {
          const { url, icon } = link;
          return (
            <li key={key}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default SideBar;
