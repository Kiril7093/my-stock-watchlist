
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Login = () => {
  return (
    <>
      <div className="services_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Form style={{marginLeft: '5%', marginRight: '15%'}}>

                <Form.Label style={{fontSize: '25px', marginTop: '10px', marginBottom: '10px'}}>Login</Form.Label>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>





                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
            <div className="col-md-4">
              <div>
                <img src="images/img-1.png" className="image_1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
