import { DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from './details.module.scss';

const Title = (props) => {
    const { children, onClose } = props;

    return (
        <DialogTitle
            className={styles.title}
            sx={{ m: 0, p: 2 }}
            id="customized-dialog-title"
        >
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

export default Title;
