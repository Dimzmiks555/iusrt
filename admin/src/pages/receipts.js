import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { CustomerListResults } from '../components/customer/customer-list-results';
import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';
import { ReceiptListToolbar } from 'src/components/receipts/receipt-list-toolbar';
import { ReceiptListResults } from 'src/components/receipts/receipt-list-results';

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
        <ReceiptListToolbar />
        <Box sx={{ mt: 3 }}>
          <ReceiptListResults receipts={data} />
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

export async function getServerSideProps() {

  const res = await fetch(`http://localhost:5000/receipt`)

  const json = await res.json()

  return {
    props: {
      data: json
    }
  }

}