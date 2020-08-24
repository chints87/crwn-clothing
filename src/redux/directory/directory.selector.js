import { createSelector } from 'reselect';

const directory = (state) => state.directory;

export const directorySections = createSelector(
   [directory],
   (directory => directory.sections)
)