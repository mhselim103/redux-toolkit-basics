const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfIcecreams: 18,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--;
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload;
    },
  },
  extraReducers: {
    ["cake/ordered"]: (state, action) => {
      state.numOfIcecreams--;
    },
  },
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
