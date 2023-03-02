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
function makeRequest(payload) {
  axios
    .post("https://backend.gofloww.co/api/v1/integration/get-auth/", payload)
    .then(function (response) {
      let responseData = JSON.parse(response.data);
      console.log(responseData);
      formdiv.innerHTML = `
      <div id="floww-success-div">
        <img id="floww-success-image" src="./Icons/success_celebration3.gif" width="100%"/>
        <br/>
        <h4>
          Thank you !! We Will get back to it as soon as possible
        </h4>
      </div>`;
    })
    .catch(function (error) {
      console.log(error);
    });
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
