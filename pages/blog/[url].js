
import Footer from "../../components/footer";
import Nav from "../../components/nav";
import axios from "axios";
export default function Post() {
  var data = '';
  const UrlFunc = () =>{
    var config = {
      method: 'get',
      url: 'https://aeaf-2a0b-6204-33bb-4a00-cd9d-e6e4-a177-3243.ngrok.io/api/urls/ge',
      data : data
    };
    axios(config)
    .then(function (response) {
      const urlValues = Object.values(response.data)
      console.log(urlValues);
      for ( const i=0; i <=urlValues.length; i++ ){
        console.log(i)
      }
    })
    .catch(function (error) {
      console.log(error);
    });
    return []
  }
  return <><Nav>...</Nav>
      
      <h2 className="row-marginer mt-120 mb-60" onClick={UrlFunc}>Blog</h2>

  
  <Footer></Footer></>;
}
// export async function getStaticPaths() {
  
  
// }
