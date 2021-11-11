import React from 'react';
import axios from 'axios';
import { FormData } from 'react-native';

export const INSERT_DATA = 'INSERT_DATA';


export const insertData = (formData,props) => (dispatch, getState) => {

    console.log('TTTTTTTTTTTTTTTTTT' + JSON.stringify(formData))
  
    // NOT DATA INSERTED
    // fetch('http://localhost/blog6/public/api/product/store', {
    //     method: 'POST',
    //     body: formData
    // });

  
    const options = {
        headers: {
            'Content-Type': "application/json",
            'Accept': "application/json",
        }
    };
  
    axios.post(`http://192.168.100.83/blog6/public/api/product/store`, formData, options )
        .then((res) => {
            dispatch({
                type: INSERT_DATA,
                payload: {
                    insert_data_info: res,
                }
            })
            console.log(res.data);
            console.log(res.status);
            console.log(res.statusText);
            console.log(res.headers);
            console.log(res.config);
        }, (error) => {
            console.log(error);
        });
}