
import React, { Component } from 'react';
import * as THREE from 'three';
import PropTypes from 'prop-types';

class ThreeScene extends Component {
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer();

    componentDidMount() {
        this.updateThree(this.props);

        this.refs.anchor.appendChild(this.renderer.domElement);
    }
    componentDidUpdate() {
        this.updateThree(this.props);
    }

    updateThree(props) {
        const { width, height } = props;

        this.renderer.setSize(width, height);
    }

    getChildContext() {
        return {
            scene: this.scene,
            renderer: this.renderer
        }
    }

    render() {
        const { width, height, style } = this.props;

        return (
            <div ref="anchor" style={[{width, height}, style]}>
                 {this.props.children}
            </div>
        )
    }
}

ThreeScene.childContextTypes = {
    scene: PropTypes.object,
    renderer: PropTypes.object
}

export default ThreeScene;
