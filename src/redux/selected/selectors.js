// export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

import { createSelector } from "@reduxjs/toolkit";

export const selectFilters = state => state.campers.filters;
// export const selectItems = state => state.campers.items;

export const selectItems = state => {
  console.log("До фільтрування (selectItems):", state.campers.items);
  return state.campers.items;
};

export const selectFilteredItems = createSelector(
  [selectItems, selectFilters],
  (items, filters) => {
    console.log("Фільтри:", filters);
    console.log("До фільтрування:", items);

    if (!items || items.length === 0) return [];
    return items.filter(item => {
      return (
        (!filters.name ||
          item.name.toLowerCase().includes(filters.name.toLowerCase())) &&
        (!filters.price || item.price <= filters.price) &&
        (!filters.rating || item.rating >= filters.rating) &&
        (!filters.location || item.location.includes(filters.location))
      );
    });
  }
);
