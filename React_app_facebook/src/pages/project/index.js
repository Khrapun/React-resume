import React from 'react';
import works from '../../works';
import LoadIndicator from '../../components/LoadIndicator/LoadIndicator';

import './index.css';

class ProjectPage extends React.Component {
    state = {
        project: null,
        error: false
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        setTimeout(() => {
            const project = works.find(work => work.id === id);

            this.setState({
                project: project,
                error: !project
            });
        }, 3000);
    }

    render() {
        const { project, error } = this.state;

        if (error)
            return <div className='container container__load'>Что-то пошло не так...</div>;

        if (!project) return <div className='container container__load'><LoadIndicator /></div>;

        return (
            <div className='project'>
                <div className='container'>
                    <img
                        className='project__screenshot'
                        src={project.screenshot}
                        alt={project.title}
                    />

                    <h1 className='project__title'>{project.title}</h1>

                    <p className='project__description'>
                        {project.description}
                    </p>

                    <div>
                        <a href={project.link} className='project__link'>
                            Project link
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectPage;
