import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';

// Creo un componente per la sezione Business
function BusinessSection() {
  return (
    <Sheet
      sx={{
        py: 2,
        px: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      <Typography level="h3" sx={{ color: 'text.primary' }}>
        Business
      </Typography>
      <Typography level="body-md" sx={{ color: 'text.secondary' }}>
        Grow your business.
      </Typography>
      <Button variant="contained" color="primary">
        LEARN MORE
      </Button>
    </Sheet>
  );
}

export default BusinessSection;