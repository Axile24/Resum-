// export const getImageUrl=(path)=>{

//     return new URL(`/assets/${path}`,import.meta.url).href;

// };

// export const getImageUrl = (path) => {
//     console.log('Received path:', path); // Debugging line
//     if (!path) {
//       console.error('Error: Path is undefined or empty');
//       return '';
//     }
//     return new URL(`/assets/${path}`, import.meta.url).href;
//   };
  
  export const getImageUrl = (path) => {
    if (!path) {
      console.error('Error: Path is undefined or empty');
      return '';
    }
    console.log('Generated URL:', `/assets/${path}`);
    return `/assets/${path}`; // Static URL resolution
  };
  