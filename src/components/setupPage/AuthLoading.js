import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { getUserToken } from '../../actions';

class AuthLoading extends React.Component {
    componentDidMount() {
        this.bootstrapAsync();
    }

    bootstrapAsync = () => {

        this.props.getUserToken().then(() => {
            if (this.props.token !== null) {
              Actions.main();
            } else {
              Actions.setupPage();
            }
        })
            .catch(error => {
                this.setState({ error });
            });
    };

    render() {
      return (
            <View style={styles.container}>
                <ActivityIndicator />
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
};

const mapStateToProps = state => ({
    token: state.token,
});


const mapDispatchToProps = dispatch => ({
    getUserToken: () => dispatch(getUserToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading);
