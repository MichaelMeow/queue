import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import NewTicketForm from './NewTicketForm';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    };
    this.handleNewTicket = this.handleNewTicket.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
    this.updateTicketElapsedWaitTime(),
    5000);
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTicketElapsedWaitTime() {
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.forEach((ticket) =>
    ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true));
    this.setState({masterTicketList: newMasterTicketList})
  }

  handleNewTicket(newTicket) {
    var newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketListArray={this.state.masterTicketList} />} />
          <Route path='/newticket' render={() => <NewTicketControl onCreateNewTicket={this.handleNewTicket} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
