import { desktopCapturer, ipcMain } from 'electron';

ipcMain.handle('shortcut', (ev, key: string) => {
  console.log('shortcut', key);
  if (key === 'f5') {
    ev.sender.reload();
  }
  if (key === 'f12') {
    ev.sender.openDevTools();
  }
});

ipcMain.handle('desktopCapturerSources', (ev, options: {
  types: string[];
  thumbnailSize?: { width: number; height: number };
  fetchWindowIcons?: boolean;
}) => {
  return (async () => {
    return (await desktopCapturer.getSources(options)).map(x => ({
      name: x.name,
      id: x.id,
      appIcon: x.appIcon ? x.appIcon.toDataURL() : undefined,
      thumbnail: x.thumbnail ? x.thumbnail.toDataURL() : undefined,
    }));
  })();
});
