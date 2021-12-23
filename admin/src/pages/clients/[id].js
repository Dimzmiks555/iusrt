import Head from 'next/head';
import { Box, Container } from '@mui/material';
// import { CustomerListResults } from '../components/customer/customer-list-results';
// import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
import { DashboardLayout } from '../../components/dashboard-layout';
import { CustomerPage } from 'src/components/customer/customer-page';

const Customers = ({data}) => (
  <>
    <Head>
      <title>
        Customers | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Box sx={{ mt: 3 }}>
          <CustomerPage data={data} />
        </Box>
      </Container>
    </Box>
  </>
);
Customers.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Customers;

export async function getServerSideProps({params}) {

    const res = await fetch(`http://localhost:5000/client/${params.id}`)

    const json = await res.json()

    return {
      props: {
        data: json
      }
    }

}