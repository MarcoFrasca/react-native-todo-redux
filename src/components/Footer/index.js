import React from "react";
import FilterLink from "../../containers/FilterLink";
import { View, Text } from "react-native";
import { visibilityFilters } from "../../actions";

const Footer = () => (
  <View>
    <Text>Show:</Text>
    <FilterLink filter={visibilityFilters.SHOW_ALL}>
      <Text>All</Text>
    </FilterLink>
    <FilterLink filter={visibilityFilters.SHOW_ACTIVE}>
      <Text>Active</Text>
    </FilterLink>
    <FilterLink filter={visibilityFilters.SHOW_COMPLETED}>
      <Text>Completed</Text>
    </FilterLink>
  </View>
);

export default Footer;
