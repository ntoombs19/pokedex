import {
    DialogContent,
    Skeleton,
    Table,
    TableBody,
    TableCell,
    TableRow,
} from '@mui/material';
import styles from './details.module.scss';

const ContentLoading = () => {
    return (
        <DialogContent dividers className={styles.content}>
            <Skeleton variant="rectangular" height={300} width={300} />
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell variant="head">
                            <Skeleton variant="text" />
                        </TableCell>
                        <TableCell>
                            <Skeleton variant="text" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell variant="head">
                            <Skeleton variant="text" />
                        </TableCell>
                        <TableCell>
                            <Skeleton variant="text" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell variant="head">
                            <Skeleton variant="text" />
                        </TableCell>
                        <TableCell>
                            <Skeleton variant="text" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell variant="head">
                            <Skeleton variant="text" />
                        </TableCell>
                        <TableCell>
                            <Skeleton variant="text" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell variant="head">
                            <Skeleton variant="text" />
                        </TableCell>
                        <TableCell>
                            <Skeleton variant="text" />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </DialogContent>
    );
};

export default ContentLoading;
