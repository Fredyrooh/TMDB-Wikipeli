import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Header = () => {

    // const user = useSelector((state) => state.user);
    // const dispatch = useDispatch();
  
    // const handleLoginClick = () => {
    //   dispatch(sendLoginRequest())
    //     .then(({ payload }) =>
    //       message.success(`Success login: welcome back ${payload.name}`)
    //     )
    //     .catch((err) => message.error(`Failed login: ${err.message}`, 5));
    // };
  
    return (
      <header>
       <Link to ={"/"}><h3>PROYECTO FREDY TMDB</h3></Link>
        {/* {user.id ? (
          <div className={s.user}>
            <p>Welcome {user.name}!</p>
            <Avatar src={<Image src={user.img} />} />
          </div>
        ) : (
          <Button type="primary" size="large" onClick={handleLoginClick}>
            Login
          </Button>
        )}*/}
        <Link to={"/login"}>LOGIN</Link> 
        <Link to={"/register"}>REGISTER</Link>
      </header>
    );
  }
  export default Header