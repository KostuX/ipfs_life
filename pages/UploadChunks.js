import { Progress, Button } from "@nextui-org/react";
import React, { useState } from "react";
import axios from "axios";
const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [status, setStatus] = useState("");
  const [progress, setProgress] = useState(0);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleFileUpload = () => {
    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }
    const endpoint = `/api/uploadApi`;
    const chunkSize = 5 * 1024 * 1024;
    const totalChunks = Math.ceil(selectedFile.size / chunkSize);
    const chunkProgress = 100 / totalChunks;
    let chunkNumber = 0;
    let start = 0;
    let end = 0;

    const uploadNextChunk = async () => {
      end = end == 0 ? chunkSize : end;

      if (end <= selectedFile.size) {
        end = start + chunkSize;
        const chunk = selectedFile.slice(start, end);
        const formData = new FormData();
        formData.append("file", chunk);
        formData.append("chunkNumber", chunkNumber);
        formData.append("totalChunks", totalChunks);
        formData.append("originalname", selectedFile.name);

        let response = await axios.post(endpoint, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        const temp = `Chunk ${
          chunkNumber + 1
        }/${totalChunks} uploaded successfully`;
        setStatus(temp);
        setProgress(Number((chunkNumber + 1) * chunkProgress));

        chunkNumber++;
        start = end;

        uploadNextChunk();
      } else {
        setProgress(100);
        setSelectedFile(null);
        setStatus("File upload completed");
      }
    };

    uploadNextChunk();
  };

  return (
    <div>
      <h3>{status}</h3>
      {progress > 0 && <Progress value={progress} />}
      <input type="file" onChange={handleFileChange} />
      <Button onClick={handleFileUpload}>Upload File</Button>
    </div>
  );
};

export default FileUpload;
