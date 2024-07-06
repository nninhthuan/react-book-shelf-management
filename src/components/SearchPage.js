import { Link } from "react-router-dom";
import './../utils/search-page.css';

const SearchPage = () => {
  const backIcon = "./logo.svg";
  return (
    <div className="dashboard-page-route">
      <Link to="/" className="move-dashboard-page">
        {/* Can not import svg. How ? */}
        <img src={backIcon} alt="back to the dashboard page icon"/>
      </Link>
    </div>
  );
}

export default SearchPage;