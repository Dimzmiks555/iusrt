import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../../components/dashboard-layout';
import { ReceiptCreateForm } from 'src/components/receipts/receipt-create-form';

const ReceiptCreate = ({clients}) => (
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
          <ReceiptCreateForm clients={clients} />
        </Box>
      </Container>
    </Box>
  </>
);
ReceiptCreate.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default ReceiptCreate;

export async function getServerSideProps() {

  const res = await fetch(`http://localhost:5000/client`)

  const json = await res.json()

  return {
    props: {
      clients: json
    }
  }

}