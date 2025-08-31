export function generateBoard(width, height, numBombs) {
  const board = Array.from({ length: height }, () =>
    Array(width).fill({
      hasBomb: false,
      isRevealed: false,
      numAdjacentBombs: 0,
      isFlagged: false,
    })
  );
  return board;
}
