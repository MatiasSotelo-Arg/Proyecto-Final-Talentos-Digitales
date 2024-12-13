import { useSelector } from 'react-redux';

const CourseVideo = () => {
  // Obtener la playlist seleccionada desde el estado global
  const playListSelected = useSelector((state) => state.playListCourse.selectedPlaylist);

  // Obtener la URL del video seleccionado
  const videoUrl = playListSelected?.url || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAdVBMVEUAAAAVFRUrKytAQEBVVVVqamqVlZWqqqq/v7+AgIDU1NTq6upYWFgQEBCZmZkeHh7Gxsbb29uwsLAKCgrz8/MmJiYzMzNeXl56enpQUFCHh4dvb28jIyM0NDRFRUVoaGg7Ozu4uLiPj4/Ozs6GhoagoKDi4uKTn9M1AAAE70lEQVR4nO3c6XaqMBQFYJkElKkikyhah/v+j3ghgOR4WwfkNpTs71dLrStrr5NDEmxnMwAAAAAAAAAAAAAAAAAAAAAAAAAAAPi9MsNwQtGD+BXCjRVU5lvRIxm/+DOwmMDKRI9l7FyrE2j8D4pCETaqkfICLq3V9fLe+ihZqcCRjc+Oz8oKkuby58eC+bBQXZ2UhGV59dWgyap0csUOUDC1KHbXb+YkK8tkF70uq8WHKWqcI+BcViUzbZZVHg2LNa2Iy6pMS7v3dpM2X5nMyqwzOAb/VpZNw5oLHbBAXpNVFRebi3va4M/VNXNBfIodsjB5l5VpXtglUljBobq0omFZIkcsEJ+VuXKqSzlXWkE941BZFZ2GdWQXu1Vp0KxJN7RneQJHLFBKwjKbRcEmqOMK2lRiGpakO0abhtVubg7HT8v69LpQTH6dtfr6vSYvp2Fdup8odFdz4iqrObg5pPOj84NjFS6jPWvz7Qt9q90bnmJ2QT+tK8vjTw11BOgsvNeM0lN16nBq8jyul7X14kfGOQp7vrQe3OWiJFGbL89tVnKlteHSevoUedtlVaYl0e7HXtVxrS7q4xc3LnxYy+V/HN3YFMfq1OGyf+FX/pCs1snj3/jNoiRNU+d6irdVX3rsFS5pWN/fRCfATS8e80o1cXw6C9dTXj5s59685p37vcNNZdnDjm9Ujm1WZVr9HtacaFiHYcc3JvsuqzKtos9bpGQenoYe4YjMeV6/KbTgC0sfeIAjsvNIWvNeH/+IJGnvGQ3Le34pylNP9UxcLyf9iFofJKzZLLf+rJeLiz/o4MbmdhrK/Xz5kSEavDSM95cO8gj5RSkK6wG12+5Megs8DMWu99FeLnokv0K8T+00mfZtHwBAPsU+z/MMHzp+gmaf7dL5POFjqKFkLCoWV8/HFfKIr1mVaUn1GZgeUptzxqr0nt2ZhIXSukcnYdnYG96TkKzsSZ+fvw1hvSDDNHxeRBu8pJ/RflZOKgt/X3+Xzy9K339YEbquG0438via1ebtSegqjSEGNkp+fj5X++h09/i19ymd6RZXlCWJHr/9Ni4X1nRraxghn5WCDwHcRQoLpXUfzWrCXaviFomR753evUumsHZGLU/6zaBQorC03Gjt+zVnecKKuqwMo99fk8jT4BMuKyPvtTyVZung84U1SGkNPMAxOdCwjH7vIkfHmmk0K6PnJAqnPwdn5F7Yo7K4M5mJH9EwKg3rlUfTSqSWttMuJooW1vOHgCGLqiLR89mCL6386TIJ1Y5E/8OUW2jlh+aaEkUP2k/EhaVOeblwI2lrK2/+Kd1Od0rZvY21ohI/Ms5x0PZ5Xu2jI/adkjk642TfV9eWhiVRaZWTSisOTZ929Q59jsEvDGhWMvV4onC6sJzu5ujHWiluSwhhVXwuqzKtNpy40JiiaU8Iq3KgYTWnEAetVdRtX+ae1cl0op6HscZhtwF574a8r8JyNYK9jqyzJJ2FX4al0rDYgt3lsorEDlmcm57FOtSBhlV3LRdZ3d4N2V7xJqz26Nmvo5K0uTNknVX3py8rq1IdYYka5yiEXNdqVvAxDUvWe99XwuvesF2/+zQsmU77Hoszx3H0rKsgMg/f/jDX1IS+zzcjhQ9L7i71BB+T8AVhjOb+Cn+7lXVbAwAAAAAAAAAAAAAAAAAAAAAAAAAAMA1/AVxOVvG6/LWYAAAAAElFTkSuQmCC";
  

  console.log(videoUrl)
  return (
    <iframe
      className="with-desktop"
      max-width="753px"
      height="400"
      src={`https://www.youtube.com/embed/${videoUrl}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};

export default CourseVideo;
