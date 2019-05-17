import React from "react";
import styled from "styled-components";
import { Icon } from "expo";

const MenuItem = props => (
  <Container>
    <Content>
      <Title>{props.title}</Title>
    </Content>
  </Container>
);

export default MenuItem;

const Container = styled.View`
  margin: 24px 0;
`;

const Content = styled.View`
  padding-left: 24;
`;

const Title = styled.Text`
  color: rgba(0, 0, 0, 0.95);
  font-size: 16;
  font-weight: 400;
`;
