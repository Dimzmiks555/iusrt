import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Chip
} from '@mui/material';
import { getInitials } from '../../utils/get-initials';
import Link from 'next/link';

export const ReceiptListResults = ({ receipts, ...rest }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = receipts?.rows?.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === receipts?.rows?.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0
                      && selectedCustomerIds.length < customers.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Номер
                </TableCell>
                <TableCell>
                  Клиент
                </TableCell>
                <TableCell>
                  Сумма
                </TableCell>
                <TableCell>
                  Статус
                </TableCell>
                <TableCell>
                  Квитанций
                </TableCell>
                <TableCell>
                  Чеков
                </TableCell>
                <TableCell>
                  Дата
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {receipts?.rows?.map((customer) => (
                <TableRow
                  hover
                  key={customer.id}
                  selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(customer.id) !== -1}
                      onChange={(event) => handleSelectOne(event, customer.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    {console.log(customer)}
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        <Link href={`/receipts/${customer.id}`}><a>Пакет квитанций № {customer.id}</a></Link>
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                  {customer.client?.sur_name} {customer.client?.first_name} {customer.client?.last_name}
                  </TableCell>
                  <TableCell>
                    {customer.summ}
                  </TableCell>
                  <TableCell>
                    {
                      customer.status == 'need_payment' ? (
                        <Chip color="error" label="Не оплачено"></Chip>
                      ) : customer.status == 'success' ? (
                        <Chip color="success" label="Оплачено"></Chip>
                      ) : (
                        <Chip color="default" label="Отменен"></Chip>
                      )
                    }
                  </TableCell>
                  <TableCell>
                    {customer.files?.length} квитанций
                  </TableCell>
                  <TableCell>
                    {customer?.confirmation_documents?.length} плат. документов
                  </TableCell>
                  <TableCell>
                    {new Date(customer.createdAt)?.toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={receipts?.count}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

