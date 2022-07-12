import { useCallback, useMemo } from 'react';
import { setSearch, setPageNumber } from '../redux/slices';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';

export default function useSearch() {
    const dispatch = useDispatch();

    const handleChange = useCallback(
        (event) => {
            dispatch(setSearch(event.target.value));
            // Results may be fewer than what would allow for the current page to be visible so reset to 1
            dispatch(setPageNumber(1));
        },
        [dispatch],
    );

    const debouncedHandleChange = useCallback(debounce(handleChange, 250), [
        handleChange,
    ]);

    return {
        debouncedHandleChange,
    };
}
