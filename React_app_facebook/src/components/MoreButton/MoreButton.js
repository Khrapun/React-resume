import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { tada } from 'react-animations';
import './MoreButton.css';
import links from '../../constans/links';

const Tada = styled.div`animation: 2s ${keyframes`${tada}`} infinite`;

export default class ReactAnimations extends Component {
    render() {
        return (
            <Tada><a href={links.gitHubRepositoriesLink} className="githubLink"><h2>More samples</h2></a></Tada>
        );
    }
}