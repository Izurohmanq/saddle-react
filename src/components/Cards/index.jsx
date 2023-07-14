import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({image, judul, bahan, harga}) {
  return (
    <Card sx={{ maxWidth: 345 }} className='mb-10 md:me-10'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={judul}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {judul}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {bahan}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {harga}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}