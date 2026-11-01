import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';
window.NativeRackPlugins = {
  async saveAndShareBackup(json, filename) {
    const saved = await Filesystem.writeFile({
      path: filename,
      data: json,
      directory: Directory.Cache,
      encoding: Encoding.UTF8,
      recursive: true
    });
    const file = await Filesystem.getUri({ directory: Directory.Cache, path: filename });
    await Share.share({
      title: 'Save Rack Stock Backup',
      text: 'Choose Files or Save to device to keep this backup on your phone.',
      url: file.uri,
      dialogTitle: 'Save Rack Stock Backup'
    });
    return { uri: file.uri, saved: saved.uri };
  },
  async shareText(text) {
    return Share.share({ title: 'Rack Stock Management Report', text, dialogTitle: 'Share stock report' });
  }
};
