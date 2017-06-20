
import React, { Component } from 'react';

import * as three from 'three';

class SpinningCube extends Component {

    componentDidMount() {
        const { width, height } = this.props;

        const scene = new three.Scene(),
              camera = new three.PerspectiveCamera(75, width/height, 0.1, 1000),
              renderer = new three.WebGLRenderer();

        renderer.setSize(width, height);
        this.refs.anchor.appendChild(renderer.domElement);

        const geometry = new three.BoxGeometry(1, 1, 1),
              material = new three.MeshBasicMaterial({ color: 0x00ff00 }),
              cube = new three.Mesh(geometry, material);

        scene.add(cube);

        camera.position.z = 5;

        function gameLoop() {
            requestAnimationFrame(gameLoop);

            cube.rotation.x += 0.03;
            cube.rotation.y += 0.03;

            renderer.render(scene, camera);
        }

        gameLoop();
    }

    render() {
        const { width, height } = this.props;

        return <div ref="anchor" style={{ width, height, margin: '0 auto' }} />
    }
}

export default SpinningCube;
