import { Search } from "lucide-react";
import SeachFormReset from "./SeachFormReset";
import { Button } from "./ui/button";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <form action="/" className="search-form">
      <input
        type="text"
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Startups"
      />
      <div className="flex gap-2">
        {query && <SeachFormReset />}
        <Button type="submit" className="search-btn text-white">
          <Search className="size-5" />
        </Button>
      </div>
    </form>
  );
};

export default SearchForm;
