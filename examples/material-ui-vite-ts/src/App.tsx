import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import CardMedia from '@mui/material/CardMedia'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { EditCalendar, Event } from '@mui/icons-material';
import { Paper, Stack } from '@mui/material';
import { AddToCalendarButton } from 'add-to-calendar-button-react';


export interface AppProps {
  events:{
  title: string;
  description: string;
  cardImage: string;
  calendarLink: string;
  learnMoreLink: string;
  dateDescription: string;
  }[];
}
export default function App({ events }: AppProps) {
  return (
    <Paper color="primary">
      <Container maxWidth="sm">
        <Stack sx={{ paddingBottom: "20px" }} spacing={2}>
          <Typography variant="h3" sx={{paddingTop:"20px"}} component="h2">
            Merry Christmas Stacy
          </Typography>
          {events.map(x =>
            <Card variant='outlined'>
              <CardMedia
                component="img"
                title={x.title}
                image={x.cardImage} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {x.title}
                </Typography>
                <Typography gutterBottom component="div" variant='subtitle2'>
                  {x.dateDescription}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {x.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={x.calendarLink} startIcon={<EditCalendar />}>Add To Calendar</Button>
                <Button href={x.learnMoreLink}>Learn More</Button>
              </CardActions>
            </Card>
          )}
        </Stack>
      </Container>

    </Paper>
  );
}
