import { setGeneration, setPageNumber } from '../redux/slices';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export default function useGeneration() {
    const dispatch = useDispatch();
    const handleClick = (event, number) => {
        if (event.code && event.key !== 'Enter' && event.code !== 'Space')
            return;

        dispatch(setGeneration(number));
        dispatch(setPageNumber(1));
    };

    return {
        handleClick,
    };
}
