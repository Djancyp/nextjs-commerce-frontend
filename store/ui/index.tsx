import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store/index";
interface Ui {
  sidebar: boolean;
  overlay: boolean;
  sidebarId: string;
  notifications: Notification[];
  megamenu: string;
}
enum NotificationType {
  success = "success",
  error = "error",
  info = "info",
  warning = "warning",
}
interface Notification {
  id: number;
  message: string;
  timeout: number;
  type?: NotificationType;
}
const initialState: Ui = {
  sidebar: false,
  overlay: false,
  sidebarId: "",
  notifications: [],
  megamenu: "",
};

export const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    toggleSidebar: (state, action: PayloadAction<string>) => {
      state.sidebar = !state.sidebar;
      state.overlay = state.sidebar;
      state.sidebarId = action.payload;
      if (state.sidebar) {
        document.body.style.overflowY = "hidden";
        document.body.style.height = "100vh";
      } else {
        document.body.style.overflowY = "inherit";
        document.body.style.height = "100%";
      }
    },
    setNotification: (state, action: PayloadAction<Notification>) => {
      console.log(action.payload);
      console.log(state.notifications);
      action.payload.id = state.notifications.length;
      state.notifications.push(action.payload);
    },
    removeNotification: (state, action: PayloadAction<number>) => {
      console.log(action.payload);
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload
      );
    },
    toggleOverlay: (state) => {
      state.overlay = !state.overlay;
    },
    setMegaMenu: (state, action: PayloadAction<string>) => {
      state.megamenu = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  toggleSidebar,
  setNotification,
  removeNotification,
  toggleOverlay,
  setMegaMenu,
} = uiSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSidebar = (state: RootState) => state.ui.sidebar;

export default uiSlice.reducer;
