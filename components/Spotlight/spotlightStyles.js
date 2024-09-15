import styled from "styled-components";

const spotlightStyles = {
  container: {
    display: "flex",
    flexDirection: "column", // Arrange items vertically
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Adjust the height as necessary
    padding: "20px",
    // fontFamily: "Arial, sans-serif", // Choose your desired font
    // fontSize: "1.2rem", // Adjust the font size as needed
  },
  image: {
    maxWidth: "80%", // Limit the image size to avoid overflow
    height: "auto",
    border: "1.5rem solid #2A324B",
    boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.3)", // Deeper, more realistic shadow
    borderRadius: "0.5rem", // Slightly rounded corners
    padding: "1rem",
    backgroundColor: "#F5F5DC",
  },
};

export default spotlightStyles;
