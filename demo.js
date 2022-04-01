const https = require("https");
const url =
  "https://gist.githubusercontent.com/azat-co/a3b93807d89fd5f98ba7829f0557e266/raw/43adc16c256ec52264c2d0bc0251369faf02a3e2/gistfile1.txt"; //JSON  text
https.get(url, (response) => {
  let rawData = "";
  response.on("data", (chunk) => {
    rawData += chunk;
  });
  response.on("end", () => {
    //when request completes,
    try {
    //   const parsedData = JSON.parse(rawData); //function for parsing data
      let parsedData = data.split(",")
        .filter((data) => !data.indexOf(" age="))
        .map((data) => data.replace(" age=", ""))
        .map((data) => parseInt(data))
        .filter((data) => data >= 50).length;
      console.log(parsedData);
    } catch (e) {
      console.error(e.message); //print out error
    }
  });
});
