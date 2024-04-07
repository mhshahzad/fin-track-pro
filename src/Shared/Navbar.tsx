import * as React from 'react';
import {Box, Card, Chip, Dropdown, IconButton, Menu, MenuButton, MenuItem, Sheet} from '@mui/joy';
import Typography from '@mui/joy/Typography';
import Avatar from '@mui/joy/Avatar';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';

export default function HeaderSection() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                top: 0,
                px: 1.5,
                py: 1,
                zIndex: 10000,
                backgroundColor: 'background.body',
                borderBottom: '1px solid',
                borderColor: 'divider',
                position: 'sticky',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 1.5,
                }}
            >
                <IconButton size="sm" variant="soft">
                    <MapsHomeWorkIcon />
                </IconButton>
                <Typography component="h1" fontWeight="xl">
                    Service
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
                <Box
                    sx={{
                        gap: 1,
                        alignItems: 'center',
                        display: { xs: 'none', sm: 'flex' },
                    }}
                >
                    <Dropdown>
                        <MenuButton
                            slots={{ root: IconButton }}
                            slotProps={{ root: {  color: 'neutral' } }}
                        >
                            <Avatar
                                variant="outlined"
                                size="sm"
                                src=""
                            />
                            <Box sx={{ minWidth: 0, flex: 1 }}>
                                <Typography level="title-sm">Siriwat K.</Typography>
                                <Typography level="body-xs">siriwatk@test.com</Typography>
                            </Box>
                        </MenuButton>
                        <Menu>
                            <MenuItem>Profile</MenuItem>
                            <MenuItem>My account</MenuItem>
                            <MenuItem>Logout</MenuItem>
                        </Menu>
                    </Dropdown>
                   
                </Box>
                    
            </Box>
        </Box>
    );
}