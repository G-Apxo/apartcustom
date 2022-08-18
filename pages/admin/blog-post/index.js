import { useState } from "react";
import dynamic from "next/dynamic";
import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import styles from "./style.module.css";
import Nav from "../../../components/nav";
import Footer from "../../../components/footer";

const Blogpost = () => {
  const { register, handleSubmit } = useForm();

  const [editorDate, setEditorData] = useState("");

  const QuillNoSSRWrapper = dynamic(import("react-quill"), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  });

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
      ["link", "image"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const onSubmit = values => {
    console.log({ ...values });
  };

  return (
    <div className={styles.pageWrapper}>
      <Nav />

      <Container className={styles.editorWrapper}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Main Image</Form.Label>
            <Form.Control type="file" {...register("mainImage")} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Text" {...register("title")} />
          </Form.Group>

          <QuillNoSSRWrapper
            modules={modules}
            formats={formats}
            theme="snow"
            className={styles.editor}
            // onChange={value => changeEditorState(value)}
          />

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>

      <Footer />
    </div>
  );
};

export default Blogpost;
