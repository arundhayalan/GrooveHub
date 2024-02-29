import React, { useEffect, useState } from 'react';
import { Button, Form, Grid, Header, Segment, Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'; 
import './registerpage.css';
import axios from 'axios';

const Registerpage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    
      const [popUp, setPopUp] = useState(false);
      const [registrationSuccess, setRegirstrationSuccess] = useState(false);
      const [errorMessage, setErrorMessage] = useState('');
    
      useEffect(() => {
    
        if (registrationSuccess) {
          setPopUp(true);
          const timer = setTimeout(() => {
            setPopUp(false)
          }, 3000)
          return () => clearTimeout(timer);
        }
    
    
      }, [registrationSuccess])
    
      const handleChange = (e, { name, value }) => {
        setFormData({ ...formData, [name]: value });
    
        setErrorMessage('');
    
        if (name === 'password') {
          if (value.length < 6) {
            setErrorMessage('Password must be at least 6 characters long');
          }
         else {
            setErrorMessage('');
          }
        } else if (name === 'confirmPassword') {
          if (value !== formData.password) {
            setErrorMessage('Passwords do not match');
          } else if( value.length < 6){
            setErrorMessage('Password must be at least 6 characters long');
          } 
          else {
            setErrorMessage('');
          }
        }
      };
    
    
    
      const handleSubmit = async (e) => {
        // You can handle form submission here, for example, sending data to a server
        e.preventDefault();
        if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword || errorMessage) {
          setErrorMessage('Please fill in all fields correctly');
          return;
        }
        try {
          const response = await axios.post('http://localhost:5001/register', formData);
          console.log('Registration successful:', response.data);
          // Clear form data on successful registration
          setFormData({
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
          });
          setRegirstrationSuccess(true);
        } catch (error) {
          console.error('Registration error:', error.response);
          // Check if the error status is 400 (user already exists)
          if (error.response.status === 400) {
            setErrorMessage('The user already exists');
          } else {
            setErrorMessage('An error occurred during registration');
          }
        }
      };
      return (
    
        <div className="registration-form" >
    
          <Grid className="registration-grid" textAlign="center" verticalAlign="middle">
            <Grid.Column className="registration-column">
              <Header as="h2" color="teal" textAlign="center">
                Register
              </Header>
              <Form size="large" onSubmit={handleSubmit} error={!!errorMessage}>
                <Segment stacked>
    
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
    
    
                  />
    
                  <Form.Input
                    fluid
                    icon="mail"
                    iconPosition="left"
                    placeholder="E-mail address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
    
                    required
                  />
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
    
                  />
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
    
                  />
    
                  <Button color="teal" fluid size="large"   >
                    Register
                  </Button>
    
                </Segment>
                {errorMessage && (
                  <Message
                    error
                    header="Registration Error"
                    content={errorMessage}
                    onDismiss={() => setErrorMessage('')}
                  />
                )}
              </Form>
              {popUp && (
                <div style={{ position: 'fixed', bottom: 20, left: '50%', transform: 'translateX(-50%)', zIndex: 9999 }}>
                  <Segment color="green">Successfully Registered</Segment>
                </div>
              )}
    
            </Grid.Column>
          </Grid>
        </div>
    
    
      );
}

export default Registerpage