import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const globalStore = (set) => ({
  isLoginCheck: false,
  // setter
  setLoginCheck: (isLoginCheck)=> set({isLoginCheck}),
});

const useGlobalStore = create(
  process.env.NODE_ENV === 'production' ?
  globalStore : devtools(globalStore) 
);

export default useGlobalStore;