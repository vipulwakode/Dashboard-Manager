import { createSlice } from '@reduxjs/toolkit';
import { initialData } from '../data/initialData';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    categories: initialData.categories,
    searchTerm: '',
  },
  reducers: {
    addCategory: (state, action) => {
        const { categoryId, categoryName } = action.payload;
        state.categories.push({
          categoryId,
          categoryName,
          widgets: [],
        });
      },
    addWidget: (state, action) => {
      const { categoryId, widgetName, widgetContent } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      
      if (category) {
        const newWidget = {
          id: `wid${Date.now()}`,
          name: widgetName,
          content: widgetContent
        };
        category.widgets.push(newWidget);
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      
      if (category) {
        category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
      }
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    }
  }
});

export const { addCategory,addWidget, removeWidget, setSearchTerm } = dashboardSlice.actions;
export default dashboardSlice.reducer;
