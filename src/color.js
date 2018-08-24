import React, {Component} from 'react';
import StarRating from './starRating';
import PropTypes from "prop-types";

class Color extends Component {
    componentWillMount() {
        this.style = {backgroundColor: "#CCC"}
    }
    componentWillUpdate(){
        this.style = null
    }
    shouldComponentUpdate(nP){
        console.log(nP)
        const {rating} = this.props;
        return rating !== nP.rating;
    }
    componentDidUpdate(prevProps){
        const {title, rating} = this.props;
        const status = (rating > prevProps.rating) ? "better" : "worse";
        console.log(status)
    }
    render(){
        const {title, rating, color, onRate} = this.props;
        debugger;
        return (
            <section className="color" style={this.style} >
                <h1>{title}</h1>
                <div className='color' style={{ backgroundColor: color}} ></div>
                <div>
                <StarRating starsSelected={rating} onRate={onRate}/>
                </div>
            </section>
        )
    }
}

Color.propTypes = {
    title: PropTypes.string,
    rating: PropTypes.number,
    color: PropTypes.string,
    onRate: PropTypes.func
}

Color.defaultProps = {
    title: undefined,
    rating: 0,
    color: "#000000",
    onRate: f=>f
}

export default Color;