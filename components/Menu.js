import React from "react";
import styled from "styled-components";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import { Icon } from "expo";
import MenuItem from "./MenuItems";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
    closeMenu: () =>
      dispatch({
        type: "CLOSE_MENU"
      })
  };
}

const screenHeight = Dimensions.get("window").height;

class Menu extends React.Component {
  state = {
    top: new Animated.Value(screenHeight)
  };

  componentDidMount() {
    this.toggleMenu();
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.spring(this.state.top, {
        toValue: 54
      }).start();
    }

    if (this.props.action == "closeMenu") {
      Animated.spring(this.state.top, {
        toValue: screenHeight
      }).start();
    }
  };

  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <TouchableOpacity
          onPress={this.props.closeMenu}
          style={{
            position: "absolute",
            top: 52,
            left: 12,
            zIndex: 1
          }}
        >
          <CloseView>
            <Icon.Ionicons name="ios-close" size={48} />
          </CloseView>
        </TouchableOpacity>
        <Content>
          <Avatar source={require("../assets/avatar.jpg")} />
          <Cover>
            <Title>Bethany Glasborgen</Title>
            <Location>Amsterdam, Netherlands</Location>
          </Cover>
          {items.map((item, index) => (
            <MenuItem
              key={index}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </Content>
      </AnimatedContainer>
    );
  }
}

// export default Menu;
// This is causing an error:
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);

const Avatar = styled.Image`
  width: 56px;
  height: 56px;
  background: black;
  border-radius: 28px;
  margin-left: 24px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Cover = styled.View`
  margin-left: 96px;
  margin-right: 24px;
  margin-bottom: 32px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 800;
  color: black;
  letter-spacing: 0.5px;
`;

const Location = styled.Text`
  font-size: 14;
  margin-top: 8px;
  color: rgba(0, 0, 0, 0.6);
  letter-spacing: 0.5px;
`;

const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const CloseView = styled.View`
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Content = styled.View`
  height: ${screenHeight};
  position: absolute;
  top: 135px;
`;

const items = [
  {
    title: "Profile"
  },
  {
    title: "Account"
  },
  {
    title: "Settings"
  },
  {
    title: "Privacy"
  },
  {
    title: "Log Out"
  }
];
