import { generateBoard } from "./generateBoard";
import React from "react";
import { View, StyleSheet, Pressable, Image } from "react-native";

const Board = ({ width, height, numBombs, manX, manY }) => {
  const board = generateBoard(width, height, numBombs);
  return (
    <View style={styles.board}>
      {board.map((row, rowIndex) => (
        <View style={styles.row} key={`${rowIndex}`}>
          {row.map((cell, columnIndex) => (
            <Pressable
              style={styles.cell}
              key={`${rowIndex}-${columnIndex}`}
              onPress={() => {
                console.log("cell pressed", rowIndex, columnIndex);
              }}
            >
              <Littleman />
            </Pressable>
          ))}
        </View>
      ))}
    </View>
  );
};

const Littleman = () => {
  return (
    <View style={styles.littleman}>
      <Image
        source={require("./assets/Littleman.jpg")}
        style={styles.littlemanImage}
      />
    </View>
  );
};

export default Board;

const styles = StyleSheet.create({
  board: {
    flexDirection: "column",
    alignSelf: "center",
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    backgroundColor: "#c0c0c0",
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: "#808080",
  },
  littleman: {
    width: 30,
    height: 30,
  },
  littlemanImage: {
    width: "100%",
    height: "100%",
  },
});
