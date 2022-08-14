import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [register, setRegister] = useState({});

  console.log("**name***", register);

  const handleChangeRegister = (e) => {
    console.log("esto es E",e);
    setRegister(
      {
        ...register,
        [e.target.name]: e.target.value,
        // [e.target.lastName]: e.target.value,
        // [e.target.age]: e.target.value,
        [e.target.email]: e.target.value,
        [e.target.password]: e.target.value
      },
      {}
    );
  };

const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("api/register/", { ...register })
      .then(() => alert("usuario creado"))
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err.response.data));
    //console.log(err.response.data)   para ver que tipo de error tenemos en el catch
  };

  return (
    <div>
      <h3>New User</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChangeRegister}
          placeholder="Put your name"
        />
        <br />
        {/* <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lasName"
          name="lastName"
          onChange={handleChangeRegister}
          placeholder="Put your last name"
        /> */}
        {/* <br />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          onChange={handleChangeRegister}
          placeholder="Put your age"
        /> */}
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChangeRegister}
          placeholder="Put your email"
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChangeRegister}
          placeholder="Put your password"
        />
        <br />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;


// import React, { useState } from "react";
// import axios from "axios";
// import { useInput } from "../../hooks/useImput"
// import { useNavigate } from "react-router";

//   const navigate = useNavigate
//   const email = useInput("email");
//   const password = useInput("password");
//   const name = useInput("name");

//   const handleSubmit = (e) => {
//     // e.preventDefault();
//       axios.post("/api/register", { 
//         name: name.value,
//         password: password.value,
//         email: email.value
//       })
//       .then(()=>alert("usuario creado"))
//       .then(()=>navigate("/login"))
//     }

//   return (
//     <div >
//       <div>
//         <div>
//           <h2>
//             Create your account
//           </h2>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <input type="hidden" name="remember" value="true" />
//           <div >
//           <div className="-mt-px">
//               <input
//                 aria-label="Name"
//                 type="text"
//                 required
//                 placeholder="Name"
//                 {...name}
//               />
//             </div>
//             <div className="-mt-px">
//               <input
//                 aria-label="Password"
//                 type="password"
//                 required
//                 {...password}
//               />
//             </div>
//             <div>
//               <input
//                 aria-label="Email address"
//                 type="text"
//                 required
//                 placeholder="Email address"
//                 {...email}
//               />
//             </div>
//           </div>

//           <div className="mt-6">
//             <button
//               type="submit"
//               disabled={loading}
//             >ENVIAR
//               {/* {loading ? (
//                 <Spinner />
//               ) : (
//                 <>
//                   <span className="absolute left-0 inset-y-0 flex items-center pl-3">
//                     <svg
//                       className="h-5 w-5 transition ease-in-out duration-150"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </span>
//                   Sign up
//                 </>
//               )} */}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
