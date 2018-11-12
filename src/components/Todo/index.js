import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text } from "react-native";

const Todo = ({ onPress, completed, text }) => (
  <TouchableOpacity onPress={onPress}>
    <Text
      style={{
        textDecorationLine: completed ? "line-through" : "none",
        fontSize: 24
      }}
    >
      {text}
    </Text>
  </TouchableOpacity>
);

Todo.propTypes = {
  onPress: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
