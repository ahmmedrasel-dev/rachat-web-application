import React, { useState } from 'react'
import { Container, Loader, Segment, Button, Message, Form, Header, Icon } from 'semantic-ui-react'
import { auth, createUserWithEmailAndPassword, updateProfile } from '../firebaseconfig'


const Registration = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errormsg, seterrormsg] = useState("");
  const [loading, setloading] = useState(false);
  const [successmsg, setsuccessmsg] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    setloading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((users) => {
        updateProfile(auth.currentUser, {
          displayName: username
        }).then(() => {
          setusername("");
          setemail("");
          setpassword("");
          seterrormsg("");
          setloading(false);
          setsuccessmsg("Your Account Created Successfully.")
        })
        console.log(users)
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrormsg(errorMessage);
        setloading(false)
      });

  }

  return (
    <Container style={{ marginTop: "100px" }}>
      <Header as="h2" textAlign='center' icon>
        <Icon name='users' circular />
        RA-Chat Registration Form
      </Header>
      <Segment>
        <Form>
          <Form.Field>
            <label>User Name</label>
            <input type="text" placeholder='First Name' onChange={(e) => { setusername(e.target.value) }} />
          </Form.Field>

          <Form.Field>
            <label>Email Address</label>
            <input type="email" placeholder='Last Name' onChange={(e) => { setemail(e.target.value) }} value={email} />
          </Form.Field>

          <Form.Field>
            <label>Password</label>
            <input type="password" placeholder='Last Name' onChange={(e) => { setpassword(e.target.value) }} value={password} />
          </Form.Field>

          <Form.Field>
            <label>Confirmed Password</label>
            <input type="password" placeholder='Last Name' />
          </Form.Field>

          <Button onClick={handleSubmit} type='submit' className={loading ? "disabled" : ''}>
            {loading ? <Loader active inline size="small" /> : "Sign up"}
          </Button>

        </Form>

        {
          errormsg != "" ? <Message negative><Message.Header>{errormsg}</Message.Header></Message> : ''
        }

        {
          successmsg != "" ? <Message positive><Message.Header>{successmsg}</Message.Header></Message> : ''
        }
      </Segment>
    </Container>
  )
}

export default Registration
