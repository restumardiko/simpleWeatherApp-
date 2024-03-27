import Form from "./controlledForm";
import { RecentSearch } from "./recentSearch";
function SearchContainer(props) {
  return (
    <div className="search-container">
      <Form handle={props.fetching} />
      <RecentSearch />
    </div>
  );
}
export default SearchContainer;
