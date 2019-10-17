import React, { PureComponent} from 'react';
import Proptypes from 'prop-types';
import './media.css';

class Media extends PureComponent {
    state = {
        author: 'Leonidas Esteban'
    }
     /* constructor(props){
        super(props)
        this.state = {
            author: props.author
        }
    }  */


    handleClick = (event) => {
        console.log(this.props.image)
        this.setState({
            author: 'Ricardo Celis',
        })
    }
    render(){
        const styles = {
            container:{
                color: '#44546b',
                cursor: 'pointer',
                width: 260,
                border: '1px solid red'
            }
        }
        return (
            <div className="Media" onClick={this.handleClick}>
                <div>
                    <img 
                        src={this.props.cover} 
                        alt=""
                        width={260}
                        height={160}
                    />
                    <h3>{this.props.title}</h3>
                    <p>{this.props.author}</p>
                </div>                  
            </div>
    
        )
    }
}

Media.propTypes = {
    cover : Proptypes.string,
    title: Proptypes.string.isRequired,
    author: Proptypes.string,
    type: Proptypes.oneOf(['video','audio'])
}

export default Media;