var getRandomColor = require('./ColorWheel');
var getRandomFact = require('./FactBook');

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} = React;

module.exports = React.createClass({
  getInitialState() {
    return {
      color: '#51b46d',
      fact: 'Ants stretch when they wake up in the morning.'
    }
  },
  setBackgroundColor() {
    return { backgroundColor: this.state.color }
  },
  setTextColor() {
    return { color: this.state.color }
  },
  showFunFact() {
    var color = getRandomColor();
    var fact = getRandomFact();

    this.setState({color, fact});
  },
  render() {
    return (
      <View style={[styles.container, this.setBackgroundColor()]}>

        <View style={styles.header}>
          <Text style={styles.headerText}>
            Did you know?
          </Text>
        </View>

        <View style={styles.main}>
          <Text style={styles.mainText}>
            {this.state.fact}
          </Text>
        </View>

        <View style={styles.footer}>
          <TouchableHighlight
            style={styles.button}
            underlayColor={'#CCC'}
            onPress={this.showFunFact}
            >
            <Text style={this.setTextColor()}>
              SHOW ANOTHER FUN FACT
            </Text>
          </TouchableHighlight>
        </View>

      </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  headerText: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 24
  },
  main: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainText: {
    color: '#FFF',
    fontSize: 24
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  button: {
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  }
});
