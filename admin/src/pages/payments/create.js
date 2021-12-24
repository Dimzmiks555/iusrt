import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../../components/dashboard-layout';
import { ReceiptCreateForm } from 'src/components/receipts/receipt-create-form';
import { PaymentCreateForm } from 'src/components/payments/payment-create-form';

const PaymentCreate = ({clients}) => (
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
          <PaymentCreateForm clients={clients} />
        </Box>
      </Container>
    </Box>
  </>
);
PaymentCreate.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default PaymentCreate;

export async function getServerSideProps() {

  const res = await fetch(`http://localhost:5000/client`)

  const json = await res.json()

  return {
    props: {
      clients: json
    }
  }

}