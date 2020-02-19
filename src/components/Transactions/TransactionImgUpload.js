import React from "react";

import axios from 'axios';

class TransactionImgUpload extends React.Component {

    onSubmit = (e) => {
        e.preventDefault();

        let file = document.getElementsByTagName("input")[0].files[0];
        console.log(file);
        const fd = new FormData();
        fd.append("image", file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("/upload", fd, config).then((res) => {
            // document.getElementsByTagName("img")[0].src = res.data.path;
            alert("file uploaded!")
        }).catch((error) => {});
    }; 

    render() {
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>Upload receipt:</label>
                    <input type="file" name="image"/>
                    <button>Submit</button>
                </form>
                <img />
            </div>
        );
    }
}

export default TransactionImgUpload;