function hello (error, delay) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
           reject (error);     
    },delay);
});
}