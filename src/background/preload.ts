import { contextBridge, ipcRenderer } from 'electron';

const exposeInMainWorld = (channel: string, keys: string[]) => contextBridge.exposeInMainWorld(channel, keys.reduce((p, c) => Object.assign(p, { [c]: (...args: unknown[]) => ipcRenderer.invoke(c, ...args) }), {}));

exposeInMainWorld('electronRenderer', [
  'shortcut',
  'desktopCapturerSources',
]);
