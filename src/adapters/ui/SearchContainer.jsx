import Form from "./form";
import { RecentSearch } from "./recentSearch";
function SearchContainer({ handleSearch }) {
  return (
    <div className="search-container">
      <Form handleSearch={handleSearch} />
      <RecentSearch />
    </div>
  );
}
export default SearchContainer;
