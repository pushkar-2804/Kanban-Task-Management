import { FaEye } from "react-icons/fa";
import "@styles/scss/layout/ShowSidebar.scss";
// import ShowSidebarSvg from '@assets/dashboard/icon-show-sidebar.svg';

const ShowSidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    !showSidebar && (
      <div
        className="kanban__show-sidebar"
        onClick={() => setShowSidebar(true)}
      >
        <FaEye />
      </div>
    )
  );
};
export default ShowSidebar;
