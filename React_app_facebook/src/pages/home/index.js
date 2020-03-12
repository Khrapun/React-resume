import React from 'react';

import About from '../../components/About/About';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';
import MoreButton from '../../components/MoreButton/MoreButton';
import MailForm from '../../components/MailForm/MailForm';
import works from '../../works';

class HomePage extends React.Component {
    state = {
        closed: true,
    };

    openForm() {
        this.setState({
            closed: false,
        });
    }

    closeForm() {
        this.setState({
            closed: true,
        });
    }

    render() {

        return (
            <div>
                <About title='My React-Portfolio'>
                    <p>
                        Hello my name is Pasha
                        <br />
                        I'm Front-end developer
                    </p>
                </About>
                <div className='portfolio'>

                    <div className='container'>
                        {works.map((work) => (
                            <PortfolioItem key={work.id} work={work} />
                        ))}
                    </div>
                    <MoreButton />
                </div>

                <div className='contacts'>
                    <div className='container'>
                        {this.state.closed ? (
                            <button
                                className='button'
                                onClick={() => this.openForm()}
                            >
                                Send me a message
                            </button>
                        ) : (
                            <div>
                                <hr />
                                <MailForm  onSubmit={() => this.closeForm()}/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
