import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../../components/dashboard-layout';
import { ServiceCreateForm } from 'src/components/services/service-create-form';

const ServiceCreate = ({clients}) => (
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
          <ServiceCreateForm clients={clients} />
        </Box>
      </Container>
    </Box>
  </>
);
ServiceCreate.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default ServiceCreate;

export async function getServerSideProps() {

  const res = await fetch(`http://localhost:5000/client`)

  const json = await res.json()

  return {
    props: {
      clients: json
    }
  }

}