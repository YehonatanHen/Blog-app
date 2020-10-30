import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';


class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            email: ''
        }

        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsername(event) {
        this.setState({username: event.target.value});
    }

    handlePassword(event) {
        this.setState({password: event.target.value}); 
    }

    handleEmail(event) {
        this.setState({email: event.target.value});
    }
    
    handleSubmit(event) {
        fetch(`/login/${this.state.username}`)
        .then(res => res.json())
        .then(result => {
                this.setState({
                  password: result.password,
                  email: result.email
                });
                console.log(this.state)
            }
        )
        alert(`name: ${this.state.username}, password: ${this.state.password}, email: ${this.state.email}`);
        event.preventDefault();
    }
    

    render () {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="user-username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" value={this.state.username} onChange={this.handleUsername}/>
                    </Form.Group>
                    <Form.Group controlId="user-email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="user-password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button >
                </Form>
            </Container>
        );
    };
};

export default SignIn

/*value={this.state.email} onChange={this.handleEmail}
value={this.state.password} onChange={this.handlePassword}*/