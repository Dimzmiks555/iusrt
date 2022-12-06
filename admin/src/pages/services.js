import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { CustomerListResults } from '../components/customer/customer-list-results';
import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';
import { ServiceListToolbar } from 'src/components/services/service-list-toolbar';
import { ServiceListResults } from 'src/components/services/service-list-results';

const Services = ({data}) => (
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
        <ServiceListToolbar />
        <Box sx={{ mt: 3 }}>
          <ServiceListResults services={data} />
        </Box>
      </Container>
    </Box>
  </>
);
Services.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Services;

export async function getServerSideProps() {

  const res = await fetch(`http://localhost:5000/service`)

  const json = await res.json()

  return {
    props: {
      data: json
    }
  }

}