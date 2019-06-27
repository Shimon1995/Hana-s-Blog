const { Router } = require('express');

const router = Router();

const obj = [
  {
    name: 'Suka',
    text: 'Skiree vsego skoro sdohnu',
    img: '/images/portfolio/image1.jpg'
  },
  {
    name: 'Bliat\'',
    test: 'A mojet i niet',
    img: '/images/portfolio/image2.jpg'
  },
  {
    name: 'Bliat\'',
    test: 'A mojet i niet',
    img: '/images/portfolio/image3.jpg'
  }
];

/* GET index page. */
router.get('/', (req, res) => {
  res.status(200).render('index', {
    title: 'Blog',
    intro: {
      header: 'Lorem Ipsum',
      intro: "ipLigula scelerisque justo sem accumsan diam quis vitae natoque dictum sollicitudin elementum...."
    },
    images: obj,
    port_preview: 'lorem ipsum t diam magnis pretium accumsan etiam id urna. Ridiculus ultricies curae quis et rhoncus velit.',
    image: '/images/ava.jpg',
    contact: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    about: 'Tincidunt eu eu elit diam magnis pretium accumsan etiam id urna. Ridiculus ultricies curae quis et rhoncus velit. Lobortis elementum aliquet nec vitae laoreet eget cubilia quam non etiam odio tincidunt montes. Elementum sem parturient nulla quam placerat viverra mauris non cum elit tempus ullamcorper dolor. Libero rutrum ut lacinia donec curae mus vel quisque sociis nec ornare iaculis.',
  });
});

module.exports = router;
