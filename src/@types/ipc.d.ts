export interface ElectronRendererIPC {
  shortcut: (key: 'f5' | 'f12') => Promise<void>;
  desktopCapturerSources: (options: {
    types: string[];
    thumbnailSize?: { width: number; height: number };
    fetchWindowIcons?: boolean;
  }) => Promise<{
    name: string;
    id: string;
    appIcon: string;
    thumbnail: string;
  }[]>;
}

declare global {
  interface Window {
    electronRenderer: ElectronRendererIPC;
  }
}
