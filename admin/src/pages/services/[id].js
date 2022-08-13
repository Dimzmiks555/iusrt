import Head from 'next/head';
import { Box, Container } from '@mui/material';
// import { CustomerListResults } from '../components/customer/customer-list-results';
// import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
import { DashboardLayout } from '../../components/dashboard-layout';
import { CustomerPage } from 'src/components/customer/customer-page';
import { ReceiptEditForm } from 'src/components/receipts/receipt-edit-form';

const ServiceEdit = ({data}) => (
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
          <ReceiptEditForm data={data} />
        </Box>
      </Container>
    </Box>
  </>
);
ServiceEdit.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default ServiceEdit;

export async function getServerSideProps({params}) {

    const res = await fetch(`http://localhost:5000/receipt/${params.id}`)

    const json = await res.json()

    return {
      props: {
        data: json
      }
    }

}