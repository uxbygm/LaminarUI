import * as React from 'react';
import { Menu, MenuItem, IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DragHandleIcon from '@mui/icons-material/DragHandle';

export default function PeopleCardMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MoreHorizIcon fontSize='small' />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'right',
                }}
            >
                <MenuItem dense onClick={handleClose}>
                    <DragHandleIcon fontSize='small' /> Menu Item 1
                </MenuItem>
                <MenuItem dense onClick={handleClose}>
                    <DragHandleIcon fontSize='small' />My account
                </MenuItem>
                <MenuItem dense onClick={handleClose}>
                    <DragHandleIcon fontSize='small' />Logout
                </MenuItem>
            </Menu>
        </>
    );
}
