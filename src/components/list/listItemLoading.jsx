import {
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Chip,
    Grid,
    Skeleton,
} from '@mui/material';
import styles from './listItem.module.scss';

const ListItemLoading = () => (
    <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
            <CardHeader
                title={
                    <Skeleton
                        variant="rectangular"
                        width={'100%'}
                        height={32}
                    />
                }
            />
            <CardMedia
                height={'200px'}
                /* eslint-disable-next-line react/no-children-prop */
                children={<Skeleton variant="rectangular" height={200} />}
            />
            <CardContent className={styles.content}>
                <Skeleton
                    className={styles.chipLoading}
                    variant={'rectangular'}
                    height={32}
                    width={80}
                />
                <Skeleton
                    className={styles.chipLoading}
                    variant={'rectangular'}
                    height={32}
                    width={80}
                />
                <Skeleton
                    className={styles.chipLoading}
                    variant={'rectangular'}
                    height={32}
                    width={80}
                />
            </CardContent>
        </Card>
    </Grid>
);

export default ListItemLoading;
