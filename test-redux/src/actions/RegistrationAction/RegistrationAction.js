import React from 'react';
import axios from 'axios'
export const REGISTRATION = 'REGISTRATION'
export const LOGIN_CHECK = 'LOGIN_CHECK'
export const DUPLICATE_CHECK = 'DUPLICATE_CHECK'

export const userRegistration = (formData,props) => (dispatch, getState) => {

  //   const options   = {
  //     headers: {
  //         'Content-Type': "application/json",
  //         'Accept': "application/json",
  //     }
  // };
    
  //   axios.post('http://localhost/blog6/public/api/product/store',formData, options).then(response => response.data)
  //   .then((data) => {

  //     console.log('user after submit userRegistrationAction',data);
        
  //     dispatch({
      
  //       type: REGISTRATION,
  //       payload: {
  //         registraion_info: data,
  //       }
  //     })
      
  //    })

    console.log('TTTTTTTTTTTTTTTTTT' + JSON.stringify(formData))

    fetch('http://localhost/blog6/public/api/product/store', {
            method: 'POST',
            body: new FormData(formData),
        });


  //   const options   = {
  //     headers: {
  //         'Content-Type': "application/json",
  //         'Accept': "application/json",
  //     }
  // };

  // axios.post(`http://localhost/blog6/public/api/product/store`, formData, options )
  // .then((res) => {
  //   dispatch({
      
  //     type: REGISTRATION,
  //     payload: {
  //       registraion_info: res.data,
  //     }
  //   })
  //     console.log(res.data);
  //     console.log(res.status);
  //     console.log(res.statusText);
  //     console.log(res.headers);
  //     console.log(res.config);
  //   }, (error) => {
  //     console.log(error);
  //   });
     
     
    

      // dispatch({
      
      //   type: REGISTRATION,
      //   payload: {
      //       message:'before register',
      //       data:{
      //           name:'Talha',
      //           email:'talha@gmail.com'
      //       }
    
      //   ,
      //   }
      // })
      
     

    //  props.history.push('/login')

     console.log('userRegistrationActionZZZZ',props);

   
  }

//   export const loginCheck = (formData) => (dispatch, getState) => {

//      axios.post('http://localhost:8000/api/loginTalha',formData).then(response => response.data)
//     .then((data) => {


//       if(data.token){
        
//         localStorage.setItem('token',data.token)
//         localStorage.setItem('username',data.user.name)
//         localStorage.setItem('user_id',data.user.id)
//         console.log('token set');
//       }else{
//         console.log('login response from userRegistrationAction',data);
//       }

      
        
//       dispatch({
      
//         type: LOGIN_CHECK,
//         payload: {
//           'login_check': data,
//         }
//       })

     
      
      
      
//      })

     
      
     
        
//   }


//   export const duplicateCheck = (value,callback) => (dispatch, getState) => {

    

//      axios.get('http://localhost:8000/api/duplicateCheck?email='+value).then(response => response.data)
//     .then(  (data) => {

     
      
//        dispatch({
      
//         type: DUPLICATE_CHECK,
//         payload: {
//           duplicate_check: data,
//         }
//       })


//       if (data ==='duplicate') {
//         callback('Email Should be unique');
//       } else {
//         callback();
//       }

     
      
//      })

    
      
// }