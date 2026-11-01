import { registerPlugin } from '@capacitor/core';
import { Share } from '@capacitor/share';

const BackupSaver = registerPlugin('BackupSaver');

window.NativeRackPlugins = {
  async saveAndShareBackup(json, filename) {
    return BackupSaver.save({ content: json, filename });
  },
  async shareText(text) {
    return Share.share({
      title: 'Rack Stock Management Report',
      text,
      dialogTitle: 'Share stock report'
    });
  }
};
