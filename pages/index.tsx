import { Container, Grid, Paper  } from '@mui/material'
import type { NextPage } from 'next'
import { CarsList } from '../components/cars/PageCarsList'
import { NavBar } from '../components/NavBar'
import { PaginationFooter } from '../components/pagination/Pagination'
import { CarTabs } from '../components/tabs/CarTabs'
import { styled } from '@mui/material/styles';
import { BookCarModal } from '../components/cars/BookCarModal'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Home: NextPage = () => {
  return (
    <>
    <NavBar />
    <Container>
      <CarTabs/>
      <br/>
      <br/>
      <CarsList />
      <br/>

      <Grid container spacing={3}>
        <Grid item xs />
        <Grid item xs={6}>
          <Item>
            <PaginationFooter />
          </Item>
        </Grid>
        <Grid item xs />
      </Grid>
      <BookCarModal/>
    </Container>
      
    </>
  )
}

export default Home
