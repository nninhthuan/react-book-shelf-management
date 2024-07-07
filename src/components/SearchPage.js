import { Link } from "react-router-dom";
import './../utils/search-page.css';
import Arrow from './../assets/icon.js';

const SearchPage = () => {
  return (
    <div className="dashboard-page-route">
      <Link to="/" className="move-dashboard-page">
        <Arrow />
      </Link>
    </div>
  );
}

export default SearchPage;