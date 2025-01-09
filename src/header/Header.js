import React, { useState } from 'react';
import '@fontsource/inter';
import Badge from '@mui/joy/Badge';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

function Header() {
    const [color, setColor] = useState('primary');

    return (
        <Sheet
            variant="solid"
            color={color}
            invertedColors
            sx={{
                display: 'flex',
                alignItems: 'center',
                flexGrow: 1,
                p: 2,
                borderRadius: { xs: 0, sm: 'lg', md: 'xl', lg: 'xxl' },
                minWidth: 'min-content',
                ...(color !== 'warning' && {
                    background: (theme) =>
                        `linear-gradient(to top, ${theme.vars.palette[color][900]}, ${theme.vars.palette[color][300]})`,
                }),
            }}
        >
            <Button
                variant="text"
                color="success"                sx={{ display: { xs: 'none', md: 'flex' } }}
            >
                Contatti
            </Button>
            <Box sx={{ display: 'flex', flexShrink: 0, marginLeft: "auto" }}>
                <Input
                    placeholder="Search"
                    variant="soft"
                    size="sm"
                    endDecorator={
                        <Typography
                            component="span"
                            variant="outlined"
                            level="body-xs"
                            sx={{ bgcolor: 'background.surface', mx: 0 }}
                        >
                            ⌘K
                        </Typography>
                    }
                    sx={{
                        '--Input-paddingInline': '12px',
                        width: 160,
                        display: { lg: 'flex' },
                    }}
                />
            </Box>
        </Sheet>
    );
}

export default Header;
