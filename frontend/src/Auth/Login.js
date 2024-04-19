import React from "react";
import TextInput from "./components/TextInput";
import axios from "axios";
import openNotification from "./components/OpenNotification";
import { withGlobalState } from '../withGlobalState';


// {
//   "email": "hedeb97411@seosnaps.com",
//   "password": "qwertyuiop"
// }

class Login extends React.Component {

    constructor(props) {
        super(props);
    
        const currentYear = new Date().getFullYear();
    
        this.state = {
        email: '',
        password: '',
        errorEmail: false,
        errorPassword: false,
        errorMessage: 'This is a required field',
        currentYear: currentYear,
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    

      handleInputChange(event) {
        const { name, value } = event.target;

        if (name === 'email') {
          this.setState({ 
            [name]: value,
            errorEmail: false
          });
        } else if (name === 'password') {
          this.setState({ 
            [name]: value,
            errorPassword: false
          });
        }
      }
      
      
    
      handleSubmit(event) {
        event.preventDefault();
      
        window.sessionStorage.clear();
        window.localStorage.clear();

        const { globalState } = this.props;
        const API_URL = globalState.api_url;
        const PUBLIC_URL = globalState.public_url;

        const { email, password } = this.state

        // console.log('email, password :>> ', email, password);

        this.setState({
          errorEmail: email.length === 0,
          errorPassword: password.length === 0,
          errorMessage: email.length === 0 || password.length === 0 ? 'This is a required field' : '',
        });
        
        
        if( email.length !== 0 && password.length !== 0 ){
            let body = {
                email, password
            }

            axios.post(`${API_URL}/auth/login`, body)
            .then((response)=>{
                if(response.data.success){
                    // setMessage('Login Successfully')
                    openNotification('topRight', 'success', 'Success', 'Login Successful');
                    console.log('response.data.user :>> ', response.data.user);
                    let token = response.data.token
                    window.sessionStorage.setItem('token', token)

                    this.props.setGlobalState(prevState => ({
                      ...prevState,
                      user: response.data.user,
                      isAuthenticated: true,
                      token: token
                    }));

                    
                  setTimeout(()=>{
                    this.props.navigate(`${process.env.PUBLIC_URL}/login/mfa`);
                  },1000)
                }
            }).catch((error)=>{
                openNotification('topRight', 'error', 'Could not Login to your account', error.response.data.message);
                this.setState({
                  email: '',
                  password: ''
                })
                // setTimeout(()=>{
                //     this.props.navigate(`${process.env.PUBLIC_URL}/login`)
                // },2000)
                console.log('error :>> ', error.response.data.message);
            })
        }
    }




  render() {
    const { globalState } = this.props;

    return (
      
      <div class="nk-app-root">
        <div>
          <div className="nk-main ">
            <div className="nk-wrap nk-wrap-nosidebar">
              <div className="nk-content ">
                <div className="nk-block nk-block-middle nk-auth-body  wide-xs">
                  <div className="brand-logo pb-4 text-center">
                    <a
                      href={`${process.env.PUBLIC_URL}/`}
                      className="logo-link"
                    >
                       <img className="logo-dark logo-img logo-img-lg" src="/assets/images/barterfunds-logo.png"
                                 alt="logo"/>
                    </a>
                  </div>


                  <div className="card card-bordered">
                    <div className="card-inner card-inner-lg">
                      <div className="nk-block-head">
                        <div className="nk-block-head-content">
                          <h4 className="nk-block-title nk-block-des">Sign-In</h4>
                          <div className="nk-block-des">
                            <p>
                              Sign in using your email address and password.
                            </p>
                          </div>
                        </div>
                      </div>
                      <form>


                      <TextInput 
                        placeholder={'Enter your email address'} 
                        label={'Email Address'} 
                        inputname={'email'} 
                        inputtype={'email'} 
                        value={this.state.email}
                        errorState={this.state.errorEmail}
                        errorMessage={this.state.errorMessage}
                        onValueChange={this.handleInputChange}
                        required
                       />


                        <TextInput 
                        placeholder={'Enter your password'} 
                        label={'Password'} 
                        inputname={'password'} 
                        inputtype={'password'} 
                        value={this.state.password}
                        errorState={this.state.errorPassword}
                        errorMessage={this.state.errorMessage}
                        onValueChange={this.handleInputChange}
                        showForgotPassword
                        showEye
                        required
                        />


                        <div className="form-group">
                          <button onClick={this.handleSubmit} className="btn btn-lg btn-primary btn-block">
                            Sign in
                          </button>
                        </div>

                      </form>
                      <div className="form-note-s2 text-center pt-4">
                        New on our platform?
                        <a href={`${process.env.PUBLIC_URL}/signup`}> Create an account</a>
                      </div>



                      {/* <div className="text-center pt-4 pb-3">
                        <h6 className="overline-title overline-title-sap">
                          <span>OR</span>
                        </h6>
                      </div>
                      <ul className="nav justify-center gx-4">
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Facebook
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Google
                          </a>
                        </li>
                      </ul> */}
                    </div>
                  </div>
                </div>



                {/* <div className="nk-footer nk-auth-footer-full">
                  <div className="container wide-lg">
                    <div className="row g-3">
                      <div className="col-lg-6 order-lg-last">
                        <ul className="nav nav-sm justify-content-center justify-content-lg-end">
                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              Terms & Condition
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              Privacy Policy
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              Help
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <div className="nk-block-content text-center text-lg-left">
                          <p className="text-soft">
                            &copy; {this.state.currentYear} Barter Funds. All Rights
                            Reserved.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withGlobalState(Login);