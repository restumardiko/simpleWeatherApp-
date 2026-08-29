import Form from "./form.js";
import { RecentSearch } from "./recentSearch.js";

type SearchContainerProps = {
  handleSearch: (query: string) => void;
};

export function SearchContainer({ handleSearch }: SearchContainerProps) {
  return (
    <div className="search-container">
      <Form handleSearch={handleSearch} />
      <RecentSearch />
    </div>
  );
}

export default SearchContainer;
