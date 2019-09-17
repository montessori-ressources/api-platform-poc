import React, {useCallback, Component} from 'react'
import Dropzone, {useDropzone} from 'react-dropzone'
import "./Add.css";
import Upload from './upload/Upload'


class Add extends Component {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})


  render() {
    return (
      <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
        {({getRootProps, getInputProps}) => (
          <section>
            <div className="Dropzone" {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </section>
        )}
      </Dropzone>
      // <div className="Card">
      //   <Upload />
      // </div>
    )
  }
}

export default Add
