
import React, { Component } from 'react';
import * as THREE from 'three';
import PropTypes from 'prop-types';

class PerspectiveCamera extends Component {
    constructor(props) {
        super(props);

        this.updateThree(props);
    }
    componentDidUpdate() {
        this.updateThree(this.props);
        this._render();
    }

    updateThree(props) {
        const { fov, aspect, near, far, position } = this.props;

        this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        this.camera.position.x = position.x;
        this.camera.position.y = position.y;
        this.camera.position.z = position.z;
    }

    componentDidMount() {
        this._render();
    }

    _render() {
        this.context.renderer.render(this.context.scene, this.camera);
    }

    render() {
        return <div>{this.props.children}</div>;
    }
}

PerspectiveCamera.contextTypes = {
    scene: PropTypes.object,
    renderer: PropTypes.object
}

export default PerspectiveCamera;
