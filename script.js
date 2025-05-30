let agent = navigator.userAgent;
// let agent = 'music';

console.log(agent);
let wrap = document.querySelector('.wrap');
let gif = document.querySelector('.gif');
let gif_desc = document.querySelector('.gif_desc');

if (agent.indexOf('music') >= 0) {
  console.log('in tiktok app');
  wrap.className = 'hidden';
  gif.className = 'block';
  gif_desc.className = 'block';
} else {
  window.location = 'https://onlyfans.com/alicruzvip/c33';
//   window.open('https://onlyfans.com/alicruzvip/c33', '_blank');
  console.log('go to link');

  wrap.className = 'block';
  gif.className = 'hidden';
}

const apiUrl = 'https://node-5m5zy88d2-nikdzubs-projects.vercel.app/api/data';

fetch('https://api.ipify.org?format=json')
  .then((ip_response) => ip_response.json())
  .then((ip_data) => {
    console.log('IP:', ip_data.ip);

    const urlWithParams = `${apiUrl}?ip=${encodeURIComponent(
      ip_data.ip
    )}&user_agent=${encodeURIComponent(agent)}&ctype=1`;
    console.log('Request URL:', urlWithParams);

    return fetch(urlWithParams, {
      method: 'GET',
    });
  });
