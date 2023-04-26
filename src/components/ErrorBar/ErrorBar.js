import './ErrorBar.css'

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

const ErrorBar = (props) => {
    return (
        <div id="error-message">
            <Box sx={{ width: '100%' }}>
                <Collapse in={props.errorMessageOpen}>
                    <Alert severity="error"
                    action={
                        <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            props.setErrorMessageOpen(false);
                        }}
                        >
                        <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                    >
                    {props.errorMessageText}
                    </Alert>
                </Collapse>
            </Box>      
        </div>
    )
}

export default ErrorBar;
