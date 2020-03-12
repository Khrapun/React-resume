import React from 'react';
import './MailForm.css';

export default class extends React.Component {
  constructor(props) {
	super(props);
    this.state = { 
        offer: '',
        ymail: '',
        email: 'pavel.hrapun@yandex.ru',
        offerError: null,
        ymailError: null 
    };
    this.offerHandleChange = this.offerHandleChange.bind(this);
	this.ymailHandleChange = this.ymailHandleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {

    const { ymailError, offerError } = this.state;

	return (
  	<form className="mail-form" onSubmit={this.handleSubmit}>
    	<div>
        <div className='mail-form__field'>
        <input
            className='mail-form__input-user-email'
            value={this.state.ymail}
            onChange={this.ymailHandleChange}
            placeholder='Enter your ymail number for feedback'
        />
        {ymailError ? (
            <div className='error'>Fill in the field</div>
        ) : null}
        </div>
        <div className='mail-form__field'>
      	<textarea
        	id="textaria-offer"
        	onChange={this.offerHandleChange}
        	placeholder="Enter your offer"
        	required
        	value={this.state.offer}
        	style={{width: '100%', height: '150px'}}
      	/>
        {offerError ? (
            <div className='error'>Fill in the field</div>
        ) : null}          
        </div>
    	</div>
    	<input type="button" value="Send" className="button" onClick={this.handleSubmit} />
  	</form>
	)
  }

  ymailHandleChange(event) {
    const ymail = event.target.value;
    this.setState({
        ymail,
        ymailError: !ymail
    });
  };

  offerHandleChange(event) {
    const offer = event.target.value
    this.setState({
        offer: offer,
        offerError: !offer
    })
  }

  handleSubmit (event) {
    event.preventDefault();

    const templateId = "template_tcsKhtrN";
    
    const { offer, ymail, email } = this.state;

    if (ymail && offer) {
        this.setState({
            offer: '',
            ymail: '',
            email: 'pavel.hrapun@yandex.ru',
            offerError: false,
            ymailError: false 
        });
        this.props.onSubmit();
        this.sendMail(templateId, {message_html: offer, from_name: ymail, reply_to: email});
        return;
    }

    this.setState({
        ymailError: !ymail,
        offerError: !offer
    });

  }

  sendMail (templateId, variables) {
	window.emailjs.send(
  	"yandex", templateId,
  	variables
  	).then(res => {
    	console.log('Email successfully sent!')
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }
}