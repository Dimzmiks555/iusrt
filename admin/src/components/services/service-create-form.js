import { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { format } from "date-fns";
import router from "next/router";
import { Document, Outline, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
// import './PDFcanvas.css'
import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { getInitials } from "../../utils/get-initials";

import { useDropzone } from "react-dropzone";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: "23%",
  height: "auto",
  wordWrap: "break-word",
  padding: 10,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
};

const img = {
  display: "block",

  width: "auto",
  height: 100,
  marginBottom: 10,
};

const pdf_wrapper = {
  canvas: {
    width: "1000px !important",
    height: "100% !important",
  },
};

export const ServiceCreateForm = ({ clients, ...rest }) => {
  const [files, setFiles] = useState([]);
  const [clientID, setClientID] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "application/pdf",
    onDrop: (acceptedFiles) => {
      let reader = new FileReader();
      reader.readAsText(acceptedFiles[0]);
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img style={img} src="/pdf_icon.png"></img>
        <p style={{ wordBreak: "break-word" }}>{file.name}</p>
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    let formdata = new FormData();

    files.forEach((file) => {
      formdata.append("files", file);
    });

    formdata.append("client_id", clientID);
    formdata.append("summ", data.summ);
    formdata.append("comment", data.comment);
    formdata.append("subtitle", data.subtitle);

    fetch(`http://localhost:5000/service`, {
      method: "POST",
      body: formdata,
    })
      .then((res) => {
        res.json();
      })
      .then((json) => {
        console.log(json);
        // router.push("/receipts");
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            mb: 2,
          }}
        >
          <Typography sx={{ m: 1 }} variant="h4">
            Выставление пакета услуг
          </Typography>
          <Box sx={{ m: 1 }}>
            {/* <Button
                startIcon={(<UploadIcon fontSize="small" />)}
                sx={{ mr: 1 }}
            >
                Import
            </Button>
            <Button
                startIcon={(<DownloadIcon fontSize="small" />)}
                sx={{ mr: 1 }}
            >
                Export
            </Button> */}
          </Box>
        </Box>
      </Box>
      <Card {...rest}>
        <PerfectScrollbar>
          <Box sx={{ minWidth: 1050, p: 4, display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ mb: 2, width: "30%" }}>
              <h2>Основная информация</h2>
              <Box sx={{ mt: 2 }}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={clients?.rows?.map((item) => {
                    return {
                      label: `${item?.sur_name} ${item?.first_name} ${item?.last_name}`,
                      id: item.id,
                    };
                  })}
                  sx={{ width: 400, mb: 2 }}
                  onChange={(e, value) => {
                    setClientID(value.id);
                  }}
                  renderInput={(params) => <TextField {...params} label="Клиент" />}
                />
                <TextField
                  label="Сумма"
                  type="number"
                  {...register("summ")}
                  sx={{ mr: 2, mb: 2 }}
                ></TextField>

                <section className="container">
                  <div
                    {...getRootProps({
                      className: "dropzone",
                      style: {
                        border: "2px dashed #ccc",
                        padding: 20,
                        height: 200,
                        cursor: "pointer",
                      },
                    })}
                  >
                    <input {...getInputProps()} />
                    <p>Перебросьте сюда файлы для загрузки...</p>
                  </div>
                </section>

                <Button color="primary" variant="contained" type="submit" sx={{ mt: 4 }}>
                  Сохранить
                </Button>
              </Box>
            </Box>
            <Box sx={{ mb: 2, p: 2, width: "30%", borderRadius: "20px" }} className="pdf_canvas">
              {/* <h2>Предварительный просмотр</h2> */}
              <FormControl fullWidth sx={{ mt: 2 }}>
                <InputLabel id="demo-simple-select-label">Выбрать тип</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Выбрать тип"
                >
                  <MenuItem value={"Оформление НДФЛ"}>Оформление НДФЛ</MenuItem>
                </Select>
              </FormControl>
              или
              <TextField sx={{ mb: 2 }} {...register("subtitle")} label="Написать тип" fullWidth></TextField>
              <TextField label="Комментарий" {...register("comment")} multiline rows={5} fullWidth></TextField>
            </Box>
            <Box sx={{ mb: 2, p: 2, width: "30%", borderRadius: "20px" }} className="pdf_canvas">
              {/* <h2>Предварительный просмотр</h2> */}
              <h2>Файлы</h2>
              <Box sx={{ mt: 2 }}>
                <aside style={thumbsContainer}>{thumbs}</aside>
                {/* <Document file={files[0]?.preview}>
                                <Page pageNumber={1}></Page>
                            </Document> */}
              </Box>
            </Box>
          </Box>
        </PerfectScrollbar>
      </Card>
    </form>
  );
};
