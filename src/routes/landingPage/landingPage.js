import React, { Component } from 'react';

// import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './landingPage.scss';
// import logo from '../../assets/1.jpg';
import logo from '../../assets/alienfriend.webp';

import { IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { message } from 'antd'

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      pass:'',
      hide_ele: true,
    };
  }

  toggleMeet = () => this.setState({hide_ele: !this.state.hide_ele})

  handleUserChange = (e) => this.setState({ url: e.target.value });
  handlePassChange = (e) => this.setState({ pass: e.target.value });

  join = () => {
    var passcheck = this.state.url.charCodeAt(0).toString()+this.state.url.charCodeAt(1).toString()+this.state.url.charCodeAt(2).toString()

    if (passcheck === this.state.pass){
      // var url = this.state.url.split('/');
        this.props.history.push(`/room`,{meet:this.state.url,jurl:window.location.href+"web/"+this.state.url+"/"+this.state.pass });
      // window.location.href = `/${url[url.length - 1]}`;
    }
  };

  create_meet = () => {
    var room_id = Math.random().toString(36).substring(2, 7)
    console.log(room_id)
    this.props.history.push(`/room`,{meet:room_id,jurl:window.location.href+"web/"+room_id+"/"+room_id.charCodeAt(0).toString()+room_id.charCodeAt(1).toString()+room_id.charCodeAt(2).toString() })
    message.success("회의가 생성되었어요!")
    
  }

  render() {
    return (
      <div className='container'>
        <div className='filter'></div>
        <div className='c-body'>
          <h4 className='logo-name'>황태 Meet</h4>
          {/* <img alt='...' src={logo} className='img-logo' /> */}
          <div className={`i-div ${this.state.hide_ele ? 'hidden' : ''}`}>
            <InputGroup className='mb-3'>
              <InputGroup.Prepend>
                <InputGroup.Text id='basic-addon1'>@</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder='회의 ID'
                aria-label='Username'
                aria-describedby='basic-addon1'
                onChange={this.handleUserChange}
              />
            </InputGroup>

            <InputGroup className='mb-3'>
              <FormControl
                placeholder='비밀번호'
                aria-label="Recipient's username"
                aria-describedby='basic-addon2'
                onChange={this.handlePassChange}
              />
              <InputGroup.Append>
                <InputGroup.Text id='basic-addon2'>#</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
            <Button className='b-ui' variant='info' onClick={this.join}>
              참가
            </Button>
            <Button className='b-ui' variant='secondary' onClick={this.toggleMeet}>
              취소
            </Button>
          </div>
          <div className={`i-div ${this.state.hide_ele ? '' : 'hidden'}`}>
            <Button
              className='b-ui'
              variant='outline-dark'
              onClick={this.toggleMeet}
            >
              회의 참가
            </Button>
            <Button
              className='b-ui'
              variant='outline-primary'
              onClick={this.create_meet}
            >
              회의 생성
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
