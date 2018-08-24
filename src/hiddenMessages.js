import React, {Component} from 'react'
import propTypes from 'prop-types'

class HiddenMessages extends Component{
    constructor(props){
        super(props)
        this.state = {
            messages: [
                "the crow crows after midnight",
                "Bring a watch and clothes",
                "love u"
            ],
            showing: -1
        }
    }

    componentWillMount(){
        this.interval = setInterval(() => {
            let {showing, messages} = this.state;
            showing  = (++showing >= messages.length) ? -1 : showing;
            this.setState({showing})
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval()
    }

    render(){
        const {showing, messages} = this.state;
        console.log(showing)
        return(
            <div className="hidden-messages">
                <HiddenMessages>{messages[0]}</HiddenMessages>
            </div>
        )
    }
}

export default HiddenMessages