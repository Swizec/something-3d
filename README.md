This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# An experiment in compositional Three.js

2 spinning cubes

![2 spinning cubes](https://raw.githubusercontent.com/Swizec/something-3d/master/compositional-threejs.gif)

Made from a normal React component tree.

```javascript
class App extends Component {
    state = {
        rotation1: { x: 0, y: 0, z: 0 },
        rotation2: { x: 0, y: 0, z: 0 }
    }

    componentDidMount() {
        this.gameLoop();
    }


    gameLoop = () => {
        requestAnimationFrame(this.gameLoop);

        const { rotation1, rotation2 } = this.state;

        this.setState({
            rotation1: { x: rotation1.x + 0.03,
                         y: rotation1.y + 0.03, },
            rotation2: { x: rotation2.x - 0.06,
                         y: rotation2.y - 0.06 }
        });
    }


    render() {
        const { rotation1, rotation2 } = this.state;

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <div className="App-intro">
                    <ThreeScene width={800} height={600}
                                style={{margin: '0 auto' }}>
                        <PerspectiveCamera fov={75}
                                           aspect={800/600}
                                           near={0.1}
                                           far={1000}
                                           position={{x: 0, y: 0, z: 30}}>

                            <Cube rotation={rotation1}
                                  position={{x: 2, y: 0, z: 25}}  />
                            <Cube rotation={rotation2}
                                  position={{x: -10, y: 5, z: 10 }} />

                        </PerspectiveCamera>
                    </ThreeScene>
                </div>
            </div>
        );
    }
}

```

Excellent.
