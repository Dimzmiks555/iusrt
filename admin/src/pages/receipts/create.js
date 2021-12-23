import Head from 'next/head';
import { Box, Container } from '@mui/material';
// import { CustomerListResults } from '../components/customer/customer-list-results';
// import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
import { DashboardLayout } from '../../components/dashboard-layout';
// import { customers } from '../__mocks__/customers';
import { CustomerCreateToolbar } from '../../components/customer/customer-create-toolbar';
import { CustomerCreateForm } from 'src/components/customer/customer-create-form';
import { ReceiptCreateForm } from 'src/components/receipts/receipt-create-form';

const ReceiptCreate = () => (
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
          <ReceiptCreateForm />
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
