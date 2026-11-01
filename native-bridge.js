import { Filesystem, Directory } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';
window.NativeRackPlugins = {
  async saveBackup(json, filename) {
    const bytes = new TextEncoder().encode(json);
    let binary = '';
    for (let i = 0; i < bytes.length; i += 0x8000) {
      binary += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
    }
    const base64 = btoa(binary);
    const saved = await Filesystem.writeFile({
      path: filename,
      data: base64,
      directory: Directory.Documents,
      recursive: true
    });
    return saved;
  },
  async shareText(text) {
    return Share.share({
      title: 'Rack Stock Management Report',
      text,
      dialogTitle: 'Share stock report'
    });
  }
};
