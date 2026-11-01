import { registerPlugin } from '@capacitor/core';
import { Share } from '@capacitor/share';
const BackupSaver = registerPlugin('BackupSaver');
window.NativeRackPlugins = {
  async saveBackup(content, filename) {
    return BackupSaver.save({ content, filename });
  },
  async shareText(text) {
    return Share.share({ title: 'Rack Stock Management Report', text, dialogTitle: 'Share stock report' });
  }
};
