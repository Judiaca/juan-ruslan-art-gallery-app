// import styled from "styled-components";

const spotlightStyles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Adjust the height as necessary
    padding: "20px",
  },
  image: {
    maxWidth: "80%", // Limit the image size to avoid overflow
    height: "auto",
    border: "10px solid #8B4513", // Brown border for a classic painting frame
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", // Subtle shadow for depth
    borderRadius: "5px", // Rounded edges for a more frame-like appearance
    padding: "10px", // Space between the image and the frame
    backgroundColor: "#fff", // White background inside the frame
  },
};

export default spotlightStyles;
