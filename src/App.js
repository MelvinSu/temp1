import React, { Component } from "react";
import {
  Modal,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  Alert
} from "react-native";
import pokemon from "./pokemonStore";

import testEvent from "./testEvent";
const logoUri = `https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190416-chicken-burger-082-1556204252.jpg?crop=1xw:1xh;center,top&resize=768:*`;
import { BrowserRouter } from "react-router-dom";

const Link = props => (
  <Text
    {...props}
    accessibilityRole="link"
    style={StyleSheet.compose(
      styles.link,
      props.style
    )}
  />
);

function Separator() {
  return <View style={styles.separator} />;
}

class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.header}>
          <Text style={styles.title}>MonDom</Text>
          <Image
            accessibilityLabel="React Logo"
            source={{ uri: logoUri }}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>
        <Text style={styles.text}>
          This project is availible on{" "}
          <Link href="https://codesandbox.io/s/web-eval-hq2o3">
            CodeSandbox.io
          </Link>
        </Text>
        <Separator />
        <Text style={styles.text}>test 🍕😊😊😊😊😊😎🎶😢🤦‍♂️😢🎶😎😎</Text>
        <View style={styles.button_seperator}>
          <Button title="Login" />
        </View>
        <View style={styles.button_seperator}>
          <Button title="Create A New Account" />
        </View>
      </View>
    );
  }
}

/*
class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.header}>
          <Image
            accessibilityLabel="React logo"
            source={{ uri: logoUri }}
            resizeMode="contain"
            style={styles.logo}
          />
          <Text style={styles.title}>React Native for Web</Text>
        </View>
        <Text style={styles.text}>
          This is an example of an app built with{" "}
          <Link href="https://github.com/facebook/create-react-app">
            Create React App
          </Link>{" "}
          and{" "}
          <Link href="https://github.com/necolas/react-native-web">
            React Native for Web
          </Link>
        </Text>
        <Text style={styles.text}>
          To get started, edit{" "}
          <Link href="https://codesandbox.io/s/q4qymyp2l6/" style={styles.code}>
            src/App.js
          </Link>
        </Text>
        <Button onPress={() => {}} title="Example button" />
        <View style={styles.container}>
          <FlatList
            keyExtractor={pokemon => pokemon.number}
            data={pokemon}
            renderItem={({ item }) => <Text>{item.name}</Text>}
          />
        </View>
      </View>
    );
  }
}
*/
const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  button_seperator: {
    marginVertical: 8
  }
});

export default App;
