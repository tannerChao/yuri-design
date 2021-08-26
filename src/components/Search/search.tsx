import React from 'react';
import { Input, InputProps, Box, BoxProps } from '@material-ui/core';

// export interface SearchProps<T> extends InputProps {
//   boxProps?: T;
// }

export type SearchProps<T> = T & InputProps & BoxProps;

const Search: React.FC<SearchProps<any>> = (props) => (
  <Box>
    <Input {...props} />
  </Box>
);

export default Search;
