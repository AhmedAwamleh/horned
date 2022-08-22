import React from "react";
import Horned from "./horned";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
    filterData = (e) => {
        this.props.filterBeast(e)
    }
    render() {
        return (
            <>


                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
                    <Form.Select id="disabledSelect" onChange={this.filterData}>
                        <option value="">ALL</option>
                        <option value="1">one</option>
                        <option value="2">tow</option>
                        <option value="3">three</option>
                        <option value="100">wow</option>

                    </Form.Select>
                </Form.Group>

                <Row xs={1} md={3} className="g-4">
                    {
                        this.props.dataBeast.map(item =>
                            <Col>
                                <Horned title={item.title} img_Url={item.image_url} discription={item.description} passModal={this.props.passModal} data={item} />
                            </Col>
                        )
                    }

                </Row >
            </>
        )
    }
}

export default Main;