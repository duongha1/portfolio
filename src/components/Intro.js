import React, { Component } from 'react'
import {Row, Col} from 'reactstrap'
import axios from 'axios'


export default class Intro extends Component {
    state={
        img:[],
        index: 0
    }
    componentDidMount(){
        axios.get('https://5f57af681a07d600167e72d2.mockapi.io/portfolio')
        .then(res=>{
            const data = res.data;
            this.setState({
                img: data[0].img
            })
            console.log(this.state.img)
        })
    }
    changeImg=()=>{
        if(this.state.index >= this.state.img.length-1){
            this.setState({
                index: 0
            })
        }else{
            this.setState({
                index: this.state.index + 1
            })
        }
        
    }
    render() {
        return (
            <div id="intro">
                <Row>
                    <Col md={6}>
                        <h2>About me</h2>
                        <p>
                            Personally, I am completing my bachelor's degree at Vaasa University of Applied Sciences, Information Technology. 
                        I am a passionate web developer with experience in HTML, CSS, SCSS, JavaScript, 
                        and some other frameworks and libraries (Bootstrap, Reactstrap, JQuery, React, Redux).<br/>
                        The other hobbies that I would love to do are dancing, drawing, and editing images by Photoshop
                        </p>
                        <button className="btn btn-custom" onClick={()=>this.changeImg()}><p>my images</p></button>
                    </Col>
                    <Col md={6}>
                        <div className="intro-pic">
                            <img src={this.state.img[this.state.index]}/>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
