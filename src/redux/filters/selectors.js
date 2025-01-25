// export const selectStatusFilter = state => state.filters.filters;
export const selectStatusFilter = state => state.filters || { filters: {} };
