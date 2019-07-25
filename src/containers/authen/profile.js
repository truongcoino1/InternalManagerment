import React from 'react';

import Layout from '../../common/layout';
import './profile.scss'

import { Upload, Icon, message } from 'antd';

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
      message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
  }
  
export class Profile extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                loading: false,
                data: [
                    {title: 'ID', content: 'User001', editable: 'true'},
                    {title: 'Fullname', content: 'Ahihi Nguyen', editable: 'true'},
                    {title: 'Date of birth', content: '01/01/2000', editable: 'false'},
                    {title: 'Position', content: 'Developer', editable: 'true'},
                    {title: 'Phone number', content: '0912 345 678', editable: 'true'},
                    {title: 'Email', content: 'ahihi@gmail.com', editable: 'false'},
                    {title: 'Start date', content: '01/01/2019', editable: 'false'},
                ]
            }
        };
      
        handleChange = info => {
          if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
          }
          if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
              this.setState({
                imageUrl,
                loading: false,
              }),
            );
          }
        };

    render(){
        const uploadButton = (
            <div>
              <Icon type={this.state.loading ? 'loading' : 'plus'} />
              <div className="ant-upload-text">Upload</div>
            </div>
          );
        const { imageUrl, data } = this.state;
        return(
            <Layout>
                <div className="user-profile">
                    <div className="row">
                        <div className="col-left">
                            <span>Avatar:</span>
                        </div>
                        <div className="col-right">
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={this.handleChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
                        </Upload>
                        </div>
                    </div>
                    {data.map( (item, i) => {
                        return(
                            <div key={i} className="row">
                                <div className="col-left">
                                    <span>{item.title}</span>
                                </div>
                                <div className="col-right">
                                    <span>{item.content}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Layout>
        );
    }
}