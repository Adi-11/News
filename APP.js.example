import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated,
  PanResponder,
} from "react-native";

const ARTICLES = [
  { id: "1", uri: require("./assets/1.png") },
  { id: "2", uri: require("./assets/1.png") },
  { id: "3", uri: require("./assets/1.png") },
  { id: "4", uri: require("./assets/1.png") },
  { id: "5", uri: require("./assets/1.png") },
];

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

class App extends Component {
  constructor(props) {
    super(props);
    this.position = new Animated.ValueXY();
    this.state = {
      currentIndex: 0,
    };
  }

  componentDidMount() {
    this.PanResponder = PanResponder.create({
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,
      onPanResponderMove: (evt, gestureState) => {
        console.log(gestureState);
        this.position.setValue({ x: 0, y: gestureState.dy });
        return false;
      },
      onPanResponderRelease: (evt, gestureState) => {
        console.log(gestureState);
        return true;
      },
      onPanResponderEnd: (e, gestureState) => {
        console.log(gestureState);
        return true;
      },
      onPanResponderTerminationRequest: () => true,
    });
  }
  renderArticles = () => {
    return ARTICLES.map((item, i) => {
      if (i === this.state.currentIndex) {
        return this.PanResponder ? (
          <Animated.View
            key={item.id}
            style={[
              this.position.getLayout(),
              { backgroundColor: "rgba(255,255,255,0.01)" },
            ]}
            {...this.PanResponder.panHandlers}
            collapsable={false}
          >
            <View
              style={{
                flex: 1,
                position: "absolute",
                height: SCREEN_HEIGHT,
                width: SCREEN_WIDTH,
                backgroundColor: "white",
              }}
            >
              <View style={{ flex: 1, backgroundColor: "gray" }}>
                <Image
                  source={ARTICLES[i].uri}
                  style={{
                    flex: 1,
                    resizeMode: "center",
                    height: null,
                    width: null,
                  }}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  This algorithm is a member of the ant colony algorithms
                  family, in swarm intelligence methods, and it constitutes some
                  metaheuristic optimizations. Initially proposed by Marco
                  Dorigo in 1992 in his PhD thesis,the first algorithm was
                  aiming to search for an optimal path in a graph, based on the
                  behavior of ants seeking a path between their colony and a
                  source of food. The original idea has since diversified to
                  solve a wider class of numerical problems, and as a result,
                  several problems have emerged, drawing on various aspects of
                  the behavior of ants. From a broader perspective, ACO performs
                  a model-based search[7] and shares some similarities with
                  estimation of distribution algorithms This algorithm is a
                  member of the ant colony algorithms family, in swarm
                  intelligence methods, and it constitutes some metaheuristic
                  optimizations. Initially proposed by Marco Dorigo in 1992 in
                  his PhD thesis,the first algorithm was aiming to search for an
                  optimal path in a graph, based on the behavior of ants seeking
                  a path between their colony and a source of food. The original
                  idea has since diversified to solve a wider class of numerical
                  problems, and as a result, several problems have emerged,
                  drawing on various aspects of the behavior of ants. From a
                  broader perspective, ACO performs a model-based search[7] and
                  shares some similarities with estimation of distribution a
                  path between their colony and a source of food.
                </Text>
              </View>
            </View>
          </Animated.View>
        ) : null;
      } else {
        return (
          <Animated.View
            key={item.id}
            style={{ backgroundColor: "rgba(255,255,255,0.01)" }}
            collapsable={false}
          >
            <View
              style={{
                flex: 1,
                position: "absolute",
                height: SCREEN_HEIGHT,
                width: SCREEN_WIDTH,
                backgroundColor: "white",
              }}
            >
              <View style={{ flex: 1, backgroundColor: "gray" }}>
                <Image
                  source={ARTICLES[i].uri}
                  style={{
                    flex: 1,
                    resizeMode: "center",
                    height: null,
                    width: null,
                  }}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  This algorithm is a member of the ant colony algorithms
                  family, in swarm intelligence methods, and it constitutes some
                  metaheuristic optimizations. Initially proposed by Marco
                  Dorigo in 1992 in his PhD thesis,the first algorithm was
                  aiming to search for an optimal path in a graph, based on the
                  behavior of ants seeking a path between their colony and a
                  source of food. The original idea has since diversified to
                  solve a wider class of numerical problems, and as a result,
                  several problems have emerged, drawing on various aspects of
                  the behavior of ants. From a broader perspective, ACO performs
                  a model-based search[7] and shares some similarities with
                  estimation of distribution algorithms This algorithm is a
                  member of the ant colony algorithms family, in swarm
                  intelligence methods, and it constitutes some metaheuristic
                  optimizations. Initially proposed by Marco Dorigo in 1992 in
                  his PhD thesis,the first algorithm was aiming to search for an
                  optimal path in a graph, based on the behavior of ants seeking
                  a path between their colony and a source of food. The original
                  idea has since diversified to solve a wider class of numerical
                  problems, and as a result, several problems have emerged,
                  drawing on various aspects of the behavior of ants. From a
                  broader perspective, ACO performs a model-based search[7] and
                  shares some similarities with estimation of distribution
                  algorithms a path between their colony and a source of food.
                </Text>
              </View>
            </View>
          </Animated.View>
        );
      }
    }).reverse();
  };

  render() {
    return <View style={{ flex: 1 }}>{this.renderArticles()}</View>;
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
