import React, { Component } from 'react';

const buildSceneConfig = (children = []) => {
  const config = {};

  children.forEach(child => {
    config[child.props.name] = { key: child.props.name, component: child.props.component };
  });

  return config;
};

export const Route = () => null;

export class Navigator extends Component {
  constructor(props) {
    super(props);

    const sceneConfig = buildSceneConfig(props.children);
    const initialSceneName = props.children[0].props.name;

    this.state = {
      sceneConfig,
      stack: [sceneConfig[initialSceneName]],
    };
  }

  handlePush = (sceneName) => {
    this.setState(state =>({
      ...state,
      stack: [...state.stack, state.sceneConfig[sceneName]],
    }));
  }

  render() {
    const CurrentScene = this.props.children[0].props.component;
    return (
      <CurrentScene
        navigator={{ push: this.handlePush }}
      />
    );
  }
}
