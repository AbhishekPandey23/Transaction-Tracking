'use client'; // Important for using Redux in App Router

import { Provider } from 'react-redux';
import store from './store'; // Adjust the import if needed

export default function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
