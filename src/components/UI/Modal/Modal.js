import React from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children
  };
  
  render() {
    return (
      <React.Fragment>
        <Backdrop
          clicked={this.props.modalClosed}
          show={this.props.show}/>
        <div
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
          className={classes.Modal}>
          {this.props.children}
        </div>
      </React.Fragment>
    )
  }
}

export default Modal;