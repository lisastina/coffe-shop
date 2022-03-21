import $ from 'jquery';

$(() => {
  const beans = document.querySelectorAll('.bean');

  beans.forEach((bean) => {
    bean.addEventListener('click', (e) => {
      if (bean.querySelector('img')) {
        const url = bean.querySelector('img').src;

        const img = bean.querySelector('img');

        /* if the bean is already broken, replace with whole bean */
        if (url.includes('broken-bean.png')) {
          img.src =
            url.substring(0, url.lastIndexOf('/') + 1) + img.id + '.png';
          bean.classList.add('wiggle');
        } else {
          /* replacing image src with breaking bean gif */
          img.src =
            url.substring(0, url.lastIndexOf('/') + 1) + 'broken-bean-2.gif';
          bean.classList.remove('wiggle');

          /* no looping of gif when clicking other beans */
          setTimeout(() => {
            img.src =
              url.substring(0, url.lastIndexOf('/') + 1) + 'broken-bean.png';
          }, 500);
        }
      }
    });
  });
});
