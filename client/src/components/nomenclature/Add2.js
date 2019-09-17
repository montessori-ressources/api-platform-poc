import React, {useState} from 'react';
import {useDropzone} from 'react-dropzone';
import "./Add.css";
import { Container, Columns } from 'react-bulma-components/full';


function Basic(props) {
  const [success, setSuccess] = useState(true)
  const [uploadProgress, setUploadProgress] =useState({})

  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

  const files = acceptedFiles.map(file => (
    <div key={file.name} className="Row">
      <span className="Filename">{file.name}</span>
    </div>
  ));

  const renderActions = () => {
  if (!success) {
    return (
      <button
        onClick={() => setSuccess(!success)}
      >
        Clear
      </button>
    );
  } else {
    return (
      <button
        disabled={acceptedFiles.length < 0}
        onClick={uploadFiles}
      >
        Upload
      </button>
    );
  }
}

const uploadFiles = async() => {
  //this.setState({ uploadProgress: {}, uploading: true });
  const promises = [];
  acceptedFiles.forEach(file => {
    promises.push(sendRequest(file));
  });
  try {
    await Promise.all(promises);

    //this.setState({ successfullUploaded: true, uploading: false });
  } catch (e) {
    // Not Production ready! Do some error handling here instead...
    //this.setState({ successfullUploaded: true, uploading: false });
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


  return (
    <Container>
      <Columns>
        <Columns.Column narrow>
        <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        </div>

        </Columns.Column>
        <Columns.Column>
        <h4>Files</h4>
        <div className="Files">
        {files}
        </div>
        <div className="Actions">{renderActions()}</div>
        </Columns.Column>
      </Columns>
    </Container>



  );
}

export default Basic
