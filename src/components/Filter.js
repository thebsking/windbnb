import React from "react";
import { Box, Drawer, Button, List, Divider, ListItem, ListItemText } from '@mui/material';
const properties = ['Helskink', 'Turku', 'Vaasa', 'Oulu'];

export default function Filter() {

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,

    });

    const toggleFilter = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: 250 }}
            role='presentation'
            onClick={toggleFilter(anchor, false)}
            onKeyDown={toggleFilter(anchor, false)}
        >
            <List>
                <h2>Cities</h2>
                {properties.map((city) => (
                    <ListItem button key={city}>
                        <ListItemText primary={city} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleFilter('left', true)}>FILTER</Button>
            <Drawer
                anchor="left"
                open={state['left']}
                onClose={toggleFilter('left', false)}
                >
                    {list('left')}
                </Drawer>
        </div>
    )



}