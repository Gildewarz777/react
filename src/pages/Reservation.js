import React from "react";

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmed:false,
            firstname: '',
            lastname:'',
            date:'',
            phone:'',
            email:'', 
            type:'cut',
            hairlength:'long',
            price:''
        };

        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeType = this.handleChangeType.bind(this);
        this.handleChangeHairLength = this.handleChangeHairLength.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeFirstName(event) {
        this.setState({firstname: event.target.value});
    }
    handleChangeLastName(event) {
        this.setState({lastname: event.target.value});
    }
    handleChangeDate(event) {
        this.setState({date: event.target.value});
    }
    handleChangePhone(event) {
        this.setState({phone: event.target.value});
    }
    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }
    handleChangeType(event) {
        this.setState({type: event.target.value});
    }
    handleChangeHairLength(event) {
        this.setState({hairlength: event.target.value});
    }
    handleSubmit(event) {
        this.setState({confirmed: true});
        event.preventDefault();

        switch(this.state.type){
            case 'cut':
                this.setState({price: 15});
                break;
            case 'bath':
                if(this.state.hairlength === 'long'){
                    this.setState({price: 70});
                }
                else{
                    this.setState({price: 50});
                }
                break;
            case 'nails':
                this.setState({price: 25});
                break;
            case 'massage':
                this.setState({price: 30});
                break;
            default:
                alert("Error in type");
                break;
        }
    }
    render() {
        if(this.state.confirmed){
            return(
                <div>
                    <div className="card border-dark thank">
                        <div className="card-body text-dark">
                            <h3 className="card-title">Thank you for reservation</h3>
                            <p className="card-text">
                                You booked for the : {this.state.date} and it will cost you : {this.state.price} €
                            </p>
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return (
                <div className="container">
                    <div className="reservation-top">
                        <h2>Wanna make a reservation?</h2>
                    </div>
                    <p>Complete the form</p>
        
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstname">First name:</label>
                            <input className="form-control" type="text" name="firstname" value={this.state.firstname} onChange={this.handleChangeFirstName} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname">Last name:</label>
                            <input className="form-control" type="text" name="lastname" value={this.state.lastname} onChange={this.handleChangeLastName} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Date:</label>
                            <input className="form-control" type="date" name="date" value={this.state.date} onChange={this.handleChangeDate} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone number:</label>
                            <input className="form-control" type="tel" name="phone" value={this.state.phone} onChange={this.handleChangePhone} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email adress:</label>
                            <input className="form-control" type="email" name="email" value={this.state.email} onChange={this.handleChangeEmail} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="choice_service">What do you want to do?:</label>
                            <select className="form-control" id="choice_service" value={this.state.type} onChange={this.handleChangeType} required>
                                <option value="cut">Cut nails</option>
                                <option value="bath">Bath</option>
                                <option value="nails">Nails</option>
                                <option value="massage">massage</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="hair">How long are the hairs?:</label>
                            <select className="form-control" id="hair" value={this.state.hairlength} onChange={this.handleChangeHairLength} required>
                                <option value="long">Long</option>
                                <option value="short">Short</option>
                            </select>
                        </div>
                        <input className="btn btn-primary" type="submit" value="Submit" />
                    </form>
                </div>
            );
        }
    }
}

export default Reservation