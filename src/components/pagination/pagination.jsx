import { Pagination as MuiPagination } from '@mui/material';
import usePagination from '../../hooks/usePagination';
import styles from './pagination.module.scss';

const Pagination = () => {
    const { pageCount, pageNumber, handleChange } = usePagination();

    return (
        <MuiPagination
            className={styles.pagination}
            count={pageCount}
            size="large"
            page={pageNumber}
            onChange={handleChange}
            sx={{
                background: (theme) => theme.palette.background.default,
                borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            }}
        />
    );
};

export default Pagination;
