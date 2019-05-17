import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing
} from "react-native";
import { SwitchIcon } from "../components/Icons";
import Menu from "../components/Menu";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: "OPEN_MENU"
      })
  };
}

class HomeScreen extends React.Component {
  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1)
  };

  render() {
    return (
      <Container>
        <Menu />
        <SafeAreaView>
          <ScrollView showsHorizontalScrollIndicator={false}>
            <TitleBar>
              <Title>Your Stories</Title>
              <TouchableOpacity
                onPress={this.props.openMenu}
                style={{ position: "absolute", right: 24, top: 4 }}
              >
                <SwitchIcon />
              </TouchableOpacity>
              <Info>
                8 trips, 43 events, and 73 places. See all your stats.
              </Info>
            </TitleBar>
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                date={card.date}
                stats={card.stats}
                image={card.image}
              />
            ))}
          </ScrollView>
        </SafeAreaView>
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;
const TitleBar = styled.View`
  width: 100%;
  margin-top: 80px;
  margin-bottom: 16px;
  padding-left: 24px;
  padding-right: 24px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: rgba(0, 0, 0, 0.95);
  font-weight: 500;
`;

const Info = styled.Text`
  font-size: 15px;
  line-height: 21px;
  color: rgba(0, 0, 0, 0.95);
  margin-top: 16px;
`;

const cards = [
  {
    title: "Crossing Central and Eastern Europe",
    date: "16 July – 23 August 2018",
    stats: "39 days | 27 events",
    image: require("../assets/background12.jpg")
  },
  {
    title: "Mexico, Guatemala, and Belize",
    date: "16 July – 23 August 2018",
    stats: "39 days | 27 events",
    image: require("../assets/background8.jpg")
  },
  {
    title: "Italia",
    date: "16 July – 23 August 2018",
    stats: "39 days | 27 events",
    image: require("../assets/background4.jpg")
  }
];
