import React, { Component } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import VisibleTodoList from "./src/containers/VisibleTodoList";
import AddTodo from "./src/components/AddTodo";
import Footer from "./src/components/Footer";

import store from "./src/store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView>
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </SafeAreaView>
      </Provider>
    );
  }
}
