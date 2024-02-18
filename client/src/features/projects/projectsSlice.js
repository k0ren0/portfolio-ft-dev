import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const PORT = process.env.PORT || 3030;
const SERVER = process.env.REACT_APP_SERVER_URL || `http://localhost:${PORT}/api/projects`;

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${SERVER}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default projectsSlice.reducer;




// // projectsSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchProjects = createAsyncThunk(
//   'projects/fetchProjects',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await fetch('http://localhost:5050/api/projects');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const projects = await response.json();
//       return projects;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// const projectsSlice = createSlice({
//   name: 'projects',
//   initialState: {
//     projects: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProjects.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchProjects.fulfilled, (state, action) => {
//         state.loading = false;
//         state.projects = action.payload;
//       })
//       .addCase(fetchProjects.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default projectsSlice.reducer;



