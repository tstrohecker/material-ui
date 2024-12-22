import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router';
const theaterEvents = [
  {
    title: "Come From Away",
    description: "Come From Away - A musical show in Philadelphia. This event also comes along with a dinner. Kids will be watched by grandparents while we endulge in theater and food.",
    cardImage: "https://res.cloudinary.com/dwjhoulgv/image/upload/c_fill,g_auto,h_246,w_410/f_auto/q_auto/v1718901264/Salma%20Qarnain-%20Rowan%20Magee%20-%20Celia%20Mei%20Rubin%20%20-%20by%20Matthew%20Murphy-Evan%20Zimmerman%20for%20MurphyMade?_a=BAACwmDQ",
    calendarLink: "https://calendar.app.google/fdAAWhb7ykMYyJu8A",
    learnMoreLink: "https://www.ensembleartsphilly.org/series-and-subscriptions/broadway-series/come-from-away",
    dateDescription: "February 8th, 2025 1:30pm"
  },
  {
    title: "& Juliet",
    description: "& Juliet - A musical show in Philadelphia. This event also comes along with a dinner. Kids will be watched by grandparents while we endulge in theater and food.",
    cardImage: "https://res.cloudinary.com/dwjhoulgv/image/upload/c_fill,g_auto,h_246,w_410/f_auto/q_auto/v1728420252/Rachel_Simone_Webb_and_the_company_of_the_North_American_Tour_of_JULIET_-_Photo_Credit_Matthew_Murphy_3?_a=BAACwmDQ",
    calendarLink: "https://calendar.app.google/KYcinsMtK8kTHikT9",
    learnMoreLink: "https://www.ensembleartsphilly.org/series-and-subscriptions/broadway-series/and-juliet",
    dateDescription: "March 29th, 2025 1:30pm"
  },
  {
    title: "The Wiz",
    description: " The Wiz - A musical show in Philadelphia. This event also comes along with a dinner. Kids will be watched by grandparents while we endulge in theater and food.",
    cardImage: "https://res.cloudinary.com/dwjhoulgv/image/upload/c_fill,g_south,h_246,w_410/f_auto/q_auto/v1711039033/pattern-library/the-whiz?_a=BAACwmDQ",
    calendarLink: "https://calendar.app.google/hwp4xbRA2CxuWUMPA",
    learnMoreLink: "https://www.ensembleartsphilly.org/series-and-subscriptions/broadway-series/the-wiz",
    dateDescription: "June 14th, 2025 1:30pm"
  }

]
const philliesEvents = [
  {
    title: "Phillies Game",
    description: " The tickets have not been purchased yet, a gift card has been purchased however. The date is reserved, and again, children will be watched by the grandparents.",
    cardImage: "https://www.visitphilly.com/wp-content/uploads/2022/10/crtsy-phillies-bryce-harper-2022-2200x1237px.jpg",
    calendarLink: "https://calendar.app.google/crLvYRTXgBgrkGvd9",
    learnMoreLink: "https://www.mlb.com/gameday/marlins-vs-phillies/2025/04/19/778252/preview",
    dateDescription: "April 19th, 2025 1:05pm"
  },
  {
    title: "Phillies Game",
    description: " The tickets have not been purchased yet, a gift card has been purchased however. The date is reserved, and again, children will be watched by the grandparents.",
    cardImage: "https://www.visitphilly.com/wp-content/uploads/2022/10/crtsy-phillies-bryce-harper-2022-2200x1237px.jpg",
    calendarLink: "https://calendar.app.google/Y5T1hJCspgbL7bnk7",
    learnMoreLink: "https://www.nytimes.com/athletic/mlb/game/philadelphia-phillies-vs-pittsburgh-pirates/t4gv36l03bMOhI2G/",
    dateDescription: "May 17th, 2025 6:00pm"
  }
]

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App events={theaterEvents} />} />
          <Route path="/part2" element={<App events={philliesEvents} />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
