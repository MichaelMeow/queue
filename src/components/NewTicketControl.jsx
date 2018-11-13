import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTicketForm from './NewTicketForm';
import PropTypes from 'prop-types';

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false
    };
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleConfirm(){
    this.setState({formVisible: true});
  }

  render () {
    let currentContent = null;
    if (this.state.formVisible) {
      currentContent = <NewTicketForm onCreateNewTicket={this.props.onCreateNewTicket}/>;
    } else {
      currentContent = <ConfirmationQuestions onHandleConfirm={this.handleConfirm}/>;
    }
    return (
      <div>
        {currentContent}
      </div>
    );
  }
}

NewTicketControl.propTypes = {
  onCreateNewTicket: PropTypes.func
};

export default NewTicketControl;
