import { useState, setState } from "react";
import dynamic from "next/dynamic";
import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import styles from "./style.module.css";
import Nav from "../../../components/nav";
import Footer from "../../../components/footer";

var mainImgBase64 = "";
var lang = "";
var title = "";
var url = "";
var blogContent = "";
var callonicalUrl = "";

const convertBase64 = file => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = error => {
      reject(error);
    };
  });
};

const Blogpost = () => {
  const { register, handleSubmit } = useForm();

  const [callonicalUrl1, setcallonicalUrl] = useState("");
  const handleChangecallonicalUrl = event => {
    setcallonicalUrl(event.target.value);
    callonicalUrl1 = event.target.value;
    callonicalUrl = callonicalUrl1;
  };
  const [customurl, setURl] = useState("");
  const handleChangeURl = event => {
    setURl(event.target.value);
    customurl = event.target.value;
    url = customurl;
  };
  const [title1, setTitle] = useState("");
  const handleChangeTitle = event => {
    setTitle(event.target.value);
    title1 = event.target.value;
    title = title1;
  };

  const [language, setLang] = useState(" ");
  const handeLanguageSelector = event => {
    setLang(event.target.value);
    language = event.target.value;
    lang = language;
  };

  const handleChangeimg = async event => {
    const file = event.target.files[0];
    const base64img = await convertBase64(file);
    mainImgBase64 = base64img;
  };

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

  const testSubmit = values => {
    console.log(data);
    var data = JSON.stringify({
      lang: lang,
      mainImage: mainImgBase64,
      title: title,
      url: url,
      blogContent: blogContent,
      callonicalUrl: callonicalUrl,
    });

    var config = {
      method: "post",
      url: "https://efd2-2a0b-6204-33bb-4a00-8166-c098-5628-a4b4.ngrok.io/api/blog",
      headers: {
        Authorization: "Basic YXBhcnRfdXNlcm5hbWU6YXBhcnRfcGFzc3dvcmRfYnJhZ3p5",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className={styles.pageWrapper}>
      <Container className={styles.editorWrapper}>
        <Form>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Main Image</Form.Label>
            <Form.Control type="file" onChange={handleChangeimg} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>callonicalUrl</Form.Label>
            <Form.Control
              type="text"
              placeholder="Text"
              value={callonicalUrl1}
              onChange={handleChangecallonicalUrl}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>URL</Form.Label>
            <Form.Control type="text" placeholder="Text" value={customurl} onChange={handleChangeURl} />
          </Form.Group>

          <Form.Select aria-label="Default select example" onChange={handeLanguageSelector}>
            <option>Open this select lang</option>
            <option value="ge">ge</option>
            <option value="en">en</option>
            <option value="ru">ru</option>
          </Form.Select>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Text" value={title1} onChange={handleChangeTitle} />
          </Form.Group>

          <QuillNoSSRWrapper
            modules={modules}
            formats={formats}
            theme="snow"
            className={styles.editor}
            onChange={value => (blogContent = value)}
          />

          <Button variant="success" onClick={testSubmit}>
            success
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Blogpost;
