import React from "react";
import { Button, Image, StyleSheet, Text, View, FlatList } from "react-native";

let event_details = {
  username: "",
  website_list: [""]
};

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

function testEvent() {
  return (
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
  );
}

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
  }
});

export default testEvent;
