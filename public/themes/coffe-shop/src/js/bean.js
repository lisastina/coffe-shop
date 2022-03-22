import $ from 'jquery';

$(() => {
  const beans = document.querySelectorAll('.bean');

  const beanImages = ['broken-bean-1', 'broken-bean-2'];

  beans.forEach((bean) => {
    bean.addEventListener('click', (e) => {
      if (bean.querySelector('img')) {
        const url = bean.querySelector('img').src;

        const img = bean.querySelector('img');

        /* Randomize broken bean gif */
        const randomBean =
          beanImages[Math.floor(Math.random() * beanImages.length)];

        /* if the bean is already broken, replace with whole bean */
        if (url.includes('broken-bean')) {
          img.src =
            url.substring(0, url.lastIndexOf('/') + 1) + img.id + '.png';
          bean.classList.add('wiggle');
          bean.classList.remove('broken');
        } else {
          /* replacing image src with breaking bean gif */
          img.src =
            url.substring(0, url.lastIndexOf('/') + 1) + randomBean + '.gif';
          bean.classList.remove('wiggle');
          bean.classList.add('broken');

          /* no looping of gif when clicking other beans */
          setTimeout(() => {
            img.src =
              url.substring(0, url.lastIndexOf('/') + 1) + randomBean + '.png';
          }, 500);
        }
      }
    });
  });
});
