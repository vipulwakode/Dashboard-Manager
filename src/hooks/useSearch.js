import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm } from '../store/dashboardSlice';

const useSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(state => state.dashboard.searchTerm);
  console.log(searchTerm, "search term from redux store");

  const handleSearch = (term) => {
    dispatch(setSearchTerm(term));
  };

  return {
    searchTerm,
    handleSearch
  };
};

export default useSearch;