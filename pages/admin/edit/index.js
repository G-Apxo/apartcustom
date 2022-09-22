import { useState, setState } from "react";
import dynamic from "next/dynamic";
import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import Nav from "../../../components/nav";
import Footer from "../../../components/footer";
import Image from "react-bootstrap";
import { Link } from "react-bootstrap-icons";
import { useRouter } from "next/router";

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

const Blogpost = blog => {
  const { query } = useRouter();

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
  const [callonicalUrl1, setcallonicalUrl] = useState("");
  const handleChangecallonicalUrl = event => {
    setcallonicalUrl(event.target.value);
    callonicalUrl1 = event.target.value;
  };

  const [customurl, setURl] = useState("");
  const handleChangeURl = event => {
    setURl(event.target.value);
    customurl = event.target.value;
  };
  const [title1, setTitle] = useState("");
  const handleChangeTitle = event => {
    setTitle(event.target.value);
    title1 = event.target.value;
  };
  const [language, setLang] = useState(" ");
  const handeLanguageSelector = event => {
    setLang(event.target.value);
    language = event.target.value;
    lang = language;
  };
  const [base64img, setBase64img] = useState(" ");
  const handleChangeimg = async event => {
    const file = event.target.files[0];
    const base64img = await convertBase64(file);
    mainImgBase64 = base64img;
  };

  const [blogContent, setBlogContent] = useState(" ");

  const data = [];

  const getBlog = () => {
    var config = {
      method: "get",
      url: `https://efd2-2a0b-6204-33bb-4a00-8166-c098-5628-a4b4.ngrok.io/api/blogOnly/${query.lang}/${query.url}`,
      headers: {
        Authorization: "Basic YXBhcnRfdXNlcm5hbWU6YXBhcnRfcGFzc3dvcmRfYnJhZ3p5",
        "Access-Control-Request-Origin": "*",
      },
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        data = response.data[0];
        const createdAtFormated = data.createdAt.split("T")[0];
        // setCreateDate(createdAtFormated);
        setLang(data.lang);
        setURl(data.url);
        setTitle(data.title);
        setcallonicalUrl(data.callonicalUrl);
        setBlogContent(data.blogContent);
        setBase64img(data.mainImage);
      })
      .catch(function (error) {
        // console.log(error);
      });
  };
  getBlog();
  const editBlog = () => {
    var data = JSON.stringify({
      lang: language,
      mainImage: base64img,
      title: title1,
      url: customurl,
      blogContent: blogContent,
      callonicalUrl: callonicalUrl1,
    });

    var config = {
      method: "put",
      url: `https://efd2-2a0b-6204-33bb-4a00-8166-c098-5628-a4b4.ngrok.io/api/blog/${query.lang}/${query.url}`,
      headers: {
        Authorization: "Basic YXBhcnRfdXNlcm5hbWU6YXBhcnRfcGFzc3dvcmRfYnJhZ3p5",
        "Content-Type": "application/json",
        "Access-Control-Request-Origin": "*",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // console.log(error);
      });
    console.log(blog.url);
  };
  return (
    <div>
      <Container>
        <a href="/admin">
          <h1>go back</h1>
        </a>
        <p>{query.url}</p>
        <Form className="mt-120">
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload image</Form.Label>
            <Form.Control type="file" onChange={handleChangeimg} />
            <img src={base64img} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>callonicalUrl</Form.Label>
            <Form.Control
              type="text"
              placeholder={callonicalUrl1}
              value={callonicalUrl1}
              onChange={handleChangecallonicalUrl}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>URL</Form.Label>
            <Form.Control
              type="text"
              placeholder={customurl}
              //   value={customurl}
              onChange={handleChangeURl}
            />
          </Form.Group>

          <Form.Select aria-label="Default select example" onChange={handeLanguageSelector}>
            <option>{language}</option>
            <option value="ge">ge</option>
            <option value="en">en</option>
            <option value="ru">ru</option>
          </Form.Select>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder={title1}
              //   value={title}
              onChange={handleChangeTitle}
            />
          </Form.Group>

          <QuillNoSSRWrapper
            modules={modules}
            formats={formats}
            value={blogContent}
            theme="snow"
            onChange={value => (blogContent = value)}
          ></QuillNoSSRWrapper>

          <Button variant="success" onClick={editBlog}>
            update
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Blogpost;
