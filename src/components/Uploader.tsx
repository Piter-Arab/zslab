"use client"

export default function Uploader() {
  return (
    <input
      className=""
      type="file"
      name='file'
      accept=".zip"
      onChange={async (e) => {
        if (e.target.files) {
          const formData = new FormData();
          Object.values(e.target.files).forEach((file) => {
            formData.append("file", file);
          });

          const response = await fetch("/api/upload", {
            method: "POST",
            body: formData,
          });

          const result = await response.json();
          if (result.success) {
            alert("Upload ok : " + result.name);
          } else {
            alert("Upload failed");
          }
        }
      }}
    />
  )
}
