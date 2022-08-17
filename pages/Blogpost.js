import React from "react";
import Nav from "../components/nav";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import Footer from "../components/footer";
import { useForm } from "react-hook-form";
import axios from "axios";

const Blogpost = () => {
  const { register, handleSubmit, getValues } = useForm();

  const onSubmit = data => {
    // let testData = getValues();
    console.log(data);
    // var config = {
    //   method: "POST",
    //   url: "https://3e4c-188-169-132-246.ngrok.io/api/blog",
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    // Authorization: "Basic YXBhcnRfdXNlcm5hbWU6YXBhcnRfcGFzc3dvcmRfYnJhZ3p5",
    //     "Content-Type": "application/json",
    //   },
    //   data: testData,
    // };

    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.testData));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    axios.post("https://cbab-188-169-132-246.ngrok.io/api/blog", data, {
      Authorization: "YXBhcnRfdXNlcm5hbWU6YXBhcnRfcGFzc3dvcmRfYnJhZ3p5",
    });
  };

  return (
    <div>
      <Nav />
      <Container>
        <Col>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <Select name="gender" options={["female", "male", "other"]} /> */}
            <select {...register("lang")}>
              <option value="ge">GE</option>
              <option value="en">EN</option>
              <option value="ru">RU</option>
            </select>
            <input {...register("mainImage")} />
            <input {...register("title")} />
            <input {...register("callonicalUrl")} />
            <textarea {...register("text")} />
            <textarea {...register("url")} />
            <input type="submit" />
          </form>
          {/* <Form onSubmit={onSubmit}>
          <Input name="firstName" />
          <Input name="lastName" />
          <Select name="gender" options={["female", "male", "other"]} />

          <Input type="submit" value="Submit" />
        </Form> */}
        </Col>
      </Container>
      <Footer />
    </div>
  );
};

// export function Input({ register, name, ...rest }) {
//   return <input {...register(name)} {...rest} />;
// }

// export function Select({ register, options, name, ...rest }) {
//   return (
//     <select {...register(name)} {...rest}>
//       {options.map(value => (
//         <option key={value} value={value}>
//           {value}
//         </option>
//       ))}
//     </select>
//   );
// }
export default Blogpost;
