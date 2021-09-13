import {
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  PermissionsAndroid,
  Platform,
} from 'react-native';
//Import RNFetchBlob for the file download
import RNFetchBlob from 'rn-fetch-blob';
// import {downloadFileTest} from './downloadFile';
import Toast from 'react-native-simple-toast';
import FileViewer from 'react-native-file-viewer';

import RNFS from 'react-native-fs';

// Sort Contacts
export const sortContacts = data => {
  data.sort(function (a, b) {
    if (a.first_name < b.first_name) {
      return -1;
    }
    if (a.first_name > b.first_name) {
      return 1;
    }
    return 0;
  });
};

// Get Comma Separated Tags
export const getCommaSeparatedTags = tags => {
  let string = '';
  tags.map((item, index) => {
    if (index == tags.length - 1) {
      string = string + item.name;
    } else {
      string = string + item.name + ', ';
    }
  });
  return string;
};

// Get time in hours, minutes and seconds
export function secondsToTime(secs) {
  var hours = Math.floor(secs / (60 * 60));

  var divisor_for_minutes = secs % (60 * 60);
  var minutes = Math.floor(divisor_for_minutes / 60);

  var divisor_for_seconds = divisor_for_minutes % 60;
  var seconds = Math.ceil(divisor_for_seconds);

  var obj = {
    h: hours,
    m: minutes,
    s: seconds,
  };
  return obj;
}

export const checkPermission = async (imageUrl, type) => {
  //Function to check the platform
  //If iOS the start downloading
  //If Android then ask for runtime permission

  if (Platform.OS === 'ios') {
    downloadImage(imageUrl);
  } else {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission Required',
          message: 'This app needs access to your storage to download Photos',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //Once user grant the permission start downloading
        console.log('Storage Permission Granted.');
        type == 1 ? downloadImage(imageUrl) : downloadVideo(imageUrl);
      } else {
        //If permission denied then show alert 'Storage Permission Not Granted'
        Toast.show('Storage Permission Not Granted', {
          duration: Toast.durations.SHORT,
          backgroundColor: '#000',
          textColor: '#FFF',
        });
      }
    } catch (err) {
      //To handle permission related issue
      // console.warn(err);
    }
  }
};

const downloadImage = url => {
  //Main function to download the image
  let date = new Date(); //To add the time suffix in filename
  //Getting the extention of the file
  let ext = getExtention(url);
  ext = ext[0];

  const localFile = `${RNFS.DocumentDirectoryPath}/${Math.floor(
    date.getTime(),
  )}.${ext}`;

  const options = {
    fromUrl: url,
    toFile: localFile,
    begin: () =>
      Toast.show('Downloading Started...', {
        duration: Toast.durations.SHORT,
        backgroundColor: '#000',
        textColor: '#FFF',
      }),
  };
  RNFS.downloadFile(options)
    .promise.then(() => FileViewer.open(localFile))
    .then(() => {
      Toast.show('File is ready to be saved.', {
        duration: Toast.durations.SHORT,
        backgroundColor: '#000',
        textColor: '#FFF',
      });
      // success
    })
    .catch(error => {
      // error
      Toast.show('File not downloaded Successfully', {
        duration: Toast.durations.SHORT,
        backgroundColor: '#000',
        textColor: '#FFF',
      });
    });
};

// export const downloadImage = image_URL => {
//   //Main function to download the image
//   let date = new Date(); //To add the time suffix in filename
//   //Image URL which we want to download
//   // let image_URL =
//   //   'https://raw.githubusercontent.com/AboutReact/sampleresource/master/gift.png';
//   //Getting the extention of the file
//   let ext = getExtention(image_URL);
//   ext = ext[0];

//   //Get config and fs from RNFetchBlob
//   //config: To pass the downloading related options
//   //fs: To get the directory path in which we want our image to download
//   const {config, fs} = RNFetchBlob;
//   // let dirs = RNFetchBlob.fs.dirs;
//   const PATH_TO_CREATE = `${fs.dirs.DocumentDir}`;
//   const localPath = PATH_TO_CREATE + '/' + Math.floor(date.getTime());
//   let PictureDir = fs.dirs.PictureDir;

//   let options = {
//     fileCache: true,
//     appendExt: ext,
//     path: localPath,
//     // path: PictureDir + '/Images/image_' + Math.floor(date.getTime()),
//     addAndroidDownloads: {
//       //Related to the Android only
//       useDownloadManager: true,
//       notification: true,
//       path:
//         PictureDir +
//         '/image_' +
//         Math.floor(date.getTime() + date.getSeconds() / 2) +
//         ext,
//       description: 'Image',
//     },
//   };
//   Toast.show('Downloading Started...', {
//     duration: Toast.durations.SHORT,
//     backgroundColor: '#000',
//     textColor: '#FFF',
//   });
//   config(options)
//     .fetch('GET', image_URL)
//     .then(res => {
//       //Showing alert after successful downloading
//       FileViewer.open(localPath);
//       console.log('res file downloaded at -> ', res.path());
//       // alert('Image Downloaded Successfully.');
//       Toast.show('File Downloaded Successfully.', {
//         duration: Toast.durations.SHORT,
//         backgroundColor: '#000',
//         textColor: '#FFF',
//       });
//       return true;
//     });
// };

export const downloadVideo = image_URL => {
  //Main function to download the image
  let date = new Date(); //To add the time suffix in filename
  //Image URL which we want to download
  // let image_URL =
  //   'https://raw.githubusercontent.com/AboutReact/sampleresource/master/gift.png';
  //Getting the extention of the file
  let ext = getExtention(image_URL);
  ext = '.' + ext[0];

  //Get config and fs from RNFetchBlob
  //config: To pass the downloading related options
  //fs: To get the directory path in which we want our image to download
  const {config, fs} = RNFetchBlob;
  let PictureDir = fs.dirs.PictureDir;
  let options = {
    fileCache: true,
    addAndroidDownloads: {
      //Related to the Android only
      useDownloadManager: true,
      notification: true,
      path:
        PictureDir +
        '/video_' +
        Math.floor(date.getTime() + date.getSeconds() / 2) +
        ext,
      description: 'Video',
    },
  };
  Toast.show('Downloading Started...', {
    duration: Toast.durations.SHORT,
    backgroundColor: '#000',
    textColor: '#FFF',
  });
  config(options)
    .fetch('GET', image_URL)
    .then(res => {
      //Showing alert after successful downloading
      console.log('res -> ', JSON.stringify(res));
      // alert('Image Downloaded Successfully.');
      Toast.show('File Downloaded Successfully.', {
        duration: Toast.durations.SHORT,
        backgroundColor: '#000',
        textColor: '#FFF',
      });
      return true;
    });
};

export const getExtention = filename => {
  //To get the file extension
  return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
};
export const messagePlaceholder = (name, message, placeholders) => {
  msg = message;

  if (placeholders) {
    Object.keys(placeholders).map(function (key, index) {
      console.log('[' + key + ']');
      console.log(placeholders[key]);
      if (
        placeholders[key] == undefined ||
        placeholders[key] == '' ||
        placeholders[key] == null
      ) {
        msg = msg.replace('[' + key + ']', '');
      } else {
        msg = msg.replace('[' + key + ']', placeholders[key]);
      }
    });
  }

  const replaceEl = '::name::';
  return msg.replace(replaceEl, name);
};
