import React from "react";
import Horned from "./horned";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
    render() {
        return (
            <Row xs={1} md={3} className="g-4">
                {
                    this.props.dataBeast.map(item =>
                        <Col>
                            <Horned title={item.title} img_Url={item.image_url} discription={item.description} passModal={this.props.passModal} data={item} />
                        </Col>
                    )
                }

            </Row >
        )
    }
}

export default Main;