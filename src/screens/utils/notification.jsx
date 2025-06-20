import notifee, { AndroidImportance } from '@notifee/react-native';

export async function displayNotification(title, body) {
  const settings = await notifee.requestPermission();

  if (settings.authorizationStatus >= 1) {
    console.log('Izin notifikasi diberikan');
  } else {
    console.log('Izin notifikasi ditolak');
    return;
  }

  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
    importance: AndroidImportance.HIGH,
  });

  await notifee.displayNotification({
    title,
    body,
    android: {
      channelId,
      smallIcon: 'ic_launcher',
      pressAction: {
        id: 'default',
      },
    },
  });
}
