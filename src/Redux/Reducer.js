import { _ADD, _DELETE, _DOWN, _UP } from "../constant/common";

const initialListPlayer = [];
const listPlayer = (state = {}, action) => {
  let newData = [];
  let max = 1;
  switch (action.type) {
    case _ADD:
      const player = {
        id: state.length ? state[state.length - 1].id + 1 : 1,
        name: action.payload,
        point: 0,
      };
      state.push(player);

      return [...state];

    case _DOWN:
      newData = state.map((player) => {
        if (player.id == action.id && player.point > 0) {
          player.point--;
        }
        if (player.point >= max) {
          max = player.point;
        }
        return player;
      });
      newData = state.map((player) => {
        if (max == player.point) {
          player.isTop = true;
        } else {
          player.isTop = false;
        }
        return player;
      });
      return (state = [...newData]);
    case _UP:
      newData = state.forEach((player) => {
        if (player.id == action.id) {
          player.point++;
        }
        if (player.point >= max) {
          max = player.point;
        }
        return player;
      });

      newData = state.map((player) => {
        if (max == player.point) {
          player.isTop = true;
        } else {
          player.isTop = false;
        }
        return player;
      });
      return (state = [...newData]);

    case _DELETE:
      newData = state.filter((player) => player.id !== action.id);
  }
  return (state = [...newData]);
};

export default listPlayer;
