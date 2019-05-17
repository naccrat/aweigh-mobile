import React from "react";
import styled from "styled-components";

const Card = props => (
  <Container>
    <Cover>
      <Image source={props.image} />
      <Wrapper>
        <Title>{props.title}</Title>
        <Date>{props.date}</Date>
        <Stats>{props.stats}</Stats>
      </Wrapper>
    </Cover>
  </Container>
);

export default Card;

const Container = styled.View`
  background: white;
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;
const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-radius: 5px;
  overflow: hidden;
`;
const Wrapper = styled.View`
  margin-left: 16px;
  margin-right: 16px;
  position: absolute;
  bottom: 24px;
`;
const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
`;
const Date = styled.Text`
  color: #f2f2f2;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  margin-top: 8px;
`;
const Stats = styled.Text`
  font-size: 14px;
  line-height: 24px;
  color: #f2f2f2;
  margin-top: 6px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
