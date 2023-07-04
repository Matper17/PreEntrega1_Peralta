import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const ProductCard = ({Data}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt= {Data.marca}
          height="140"
          image= {Data.img}
        
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Data.marca}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${Data.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard; 