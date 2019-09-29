import React, {useState, useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import "./Add.css";
import { Columns, Heading, Button, Progress, Box } from 'react-bulma-components/full';


function ImageImport(props) {
  const [success, setSuccess] = useState(false)
  const [uploadProgress, setUploadProgress] = useState({})
  const [uploading, setUploading] = useState(false)
  const [myFiles, setMyFiles] = useState([])

  const onDrop = useCallback(acceptedFiles => {
    setMyFiles([...myFiles, ...acceptedFiles])
  })

  const {getRootProps, getInputProps} = useDropzone({
    onDrop
  });

  const renderProgress = (file) => {
    const progress = uploadProgress[file.name];
    if (uploading || success) {
      return (
        <Progress max={100} value={progress ? progress.percentage : 0} color="primary" size="small" />

      );
    }
  }

  const files = myFiles.map(file => (
    <Box key={file.name}>
      {file.name}
      {renderProgress(file)}
    </Box>
  ));

const uploadFiles = async() => {
  setUploading(true)
  setUploadProgress({})
  const promises = [];
  myFiles.forEach(file => {
    promises.push(sendRequest(file));
  });
  try {
    await Promise.all(promises);
    setUploading(false)
    setSuccess(true)
  } catch (e) {
    // Not Production ready! Do some error handling here instead...
    setUploading(false)
    setSuccess(true)
  }
}

const sendRequest = (file) => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();

    req.upload.addEventListener("progress", event => {
      if (event.lengthComputable) {
        const copy = { ... uploadProgress };
        copy[file.name] = {
          state: "pending",
          percentage: (event.loaded / event.total) * 100
        };
        setUploadProgress(copy)
      }
    });

    req.upload.addEventListener("load", event => {
      const copy = { ...uploadProgress };
      copy[file.name] = { state: "done", percentage: 100 };
      setUploadProgress(copy)
      resolve(req.response);
    });

    req.upload.addEventListener("error", event => {
      const copy = { ...uploadProgress };
      copy[file.name] = { state: "error", percentage: 0 };
      setUploadProgress(copy)
      reject(req.response);
    });

    const formData = new FormData();
    formData.append("file", file, file.name);

    req.open("POST", "http://localhost:8080/images");
    req.send(formData);
  });
}

const renderActions = () => {
if (success) {
  return (
    <Button
      onClick={() => {
        setSuccess(!success)
        setMyFiles([])
      }}
    >
      Next
    </Button>
  );
} else {
  return (
    <Button
      disabled={myFiles.length <= 0 || uploading}
      onClick={uploadFiles}
    >
      Upload
    </Button>
  );
}
}

  return (
    <Columns>
      <Columns.Column narrow>
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />

        </div>
        Drop files here or click on me !
      </Columns.Column>
      <Columns.Column>
        <Heading>Select all the pictures for your nomenclature</Heading>
          {files}
          {renderActions()}
      </Columns.Column>
    </Columns>
  );
}

export default ImageImport
