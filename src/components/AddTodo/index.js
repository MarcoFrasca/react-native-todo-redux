import React, { Component } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { connect } from "react-redux";
import { addTodo } from "../../actions";

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ""
    };
  }

  addNewTodo = () => {
    const { inputValue } = this.state;
    const { dispatch } = this.props;
    this.setState({ inputValue: "" });
    dispatch(addTodo(inputValue));
  };

  render() {
    const { inputValue } = this.state;

    return (
      <View>
        <Text style={{ height: 40, fontSize: 25 }}>Add Todo:</Text>
        <View>
          <TextInput
            style={{ height: 40, fontSize: 25 }}
            onChangeText={text => this.setState({ inputValue: text })}
            value={inputValue}
          />
          <Button title="Add" onPress={() => this.addNewTodo()} />
        </View>
      </View>
    );
  }
}

export default connect()(AddTodo);
