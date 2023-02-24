//Query selector for form
const form = document.querySelector("#floww-form");
const formdiv = document.querySelector(".floww-form-wrapper");
form.addEventListener("submit", formsubmit);
//form submit function
function formsubmit(e) {
  e.preventDefault();
  if (form) {
    const inputs = form.querySelectorAll("select,input");
    var values = {};
    for (const input of inputs) {
      values[input.name] = input.value;
    }
    console.log(values);
    makeRequest(values);
    // form.reset();
  } else {
    console.error("Form not found.");
  }
}
async function makeRequest(object) {
  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify(object);

  let reqOptions = {
    url: "https://backend.gofloww.co/api/v1/integration/get-auth/",
    method: "POST",
    headers: headersList,
    data: bodyContent,
  };

  let response = await axios.request(reqOptions);
  console.log(response);
  formdiv.innerHTML = `
      <div id="floww-success-div">
        <img id="floww-success-image" src="./Icons/success_celebration3.gif" width="100%"/>
        <br/>
        <h4>
          Thank you !! We Will get back to it as soon as possible
        </h4>
      </div>`;
}
/*
let object = {
  name: "Abhishek Upadhyay",
  phone: "09637162370",
  email: "eve.holt@reqres.in",
  Company_name: "gofloww",
  Companywebsite: "http://127.0.0.1:5500/index.html",
  flow_business_type: "registered",
  Monthly_Order_Volume: "10-100",
  Website_Hoisting: "Instagram",
};
*/
