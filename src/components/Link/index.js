import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";

const Link = ({ active, children, onPress }) => {
  if (active) {
    return children;
  }
  return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired
};

export default Link;
