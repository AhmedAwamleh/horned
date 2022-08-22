import React from "react";

import Card from 'react-bootstrap/Card';

class Horned extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fav: 0
        }
    }
    favClick = () => {
        this.setState({ fav: this.state.fav + 1 });
        this.props.passModal(this.props.data)
    }


    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.img_Url} alt={this.props.title} onClick={this.favClick} />
                    <Card.Body>
                        <Card.Title>{this.props.title}👍{this.state.fav}</Card.Title>
                        <Card.Text>{this.props.discription}  </Card.Text>

                    </Card.Body>
                </Card>

            </>
        )
    }
}

export default Horned;