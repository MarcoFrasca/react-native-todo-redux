import React from "react";
import PropTypes from "prop-types";
import { FlatList } from "react-native";
import Todo from "../Todo";

const TodoList = ({ todos, onTodoPress }) => {
  return (
    <FlatList
      data={todos}
      keyExtractor={item => item.id}
      renderItem={todo => {
        return (
          <Todo
            key={todo.item.id}
            {...todo.item}
            onPress={() => onTodoPress(todo.index)}
          />
        );
      }}
    />
  );
};

TodoList.propTypes = {
  onTodoPress: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default TodoList;
