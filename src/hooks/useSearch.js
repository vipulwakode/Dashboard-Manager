import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm } from '../store/dashboardSlice';

const useSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(state => state.dashboard.searchTerm);

  const handleSearch = (term) => {
    dispatch(setSearchTerm(term));
  };

  return {
    searchTerm,
    handleSearch
  };
};

export default useSearch;