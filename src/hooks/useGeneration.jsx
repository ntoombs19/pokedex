import { setGeneration, setPageNumber } from '../redux/slices';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export default function useGeneration() {
    const dispatch = useDispatch();
    const handleClick = useCallback(
        (number) => {
            dispatch(setGeneration(number));
            dispatch(setPageNumber(1));
        },
        [dispatch],
    );

    return {
        handleClick,
    };
}
