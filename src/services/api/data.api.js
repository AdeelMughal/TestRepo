import axios from 'axios';

export const GetDataAPI = async () => {
  const url = `https://randomuser.me/api?results=100`;

  await axios({
    method: 'get',
    url: url,
  })
    .then(async response => {
      console.log('response of dummy API: ', response.data);
      //   if (response.status == 200) {
      //     setBoardsResponse(response.data);
      //   }
      //   return response.data;
      // let data = {name: 'Adee;'};
      // sendResponse(response.data.results);
    })
    .catch(function (error) {
      //   setLoading(false);
      //   store.dispatch(endFetchTeamWithError());
      //   loading(false);
    });
};
