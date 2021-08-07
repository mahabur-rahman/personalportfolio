import cardImg1 from "../images/testimonial1.svg";
import cardImgTwo from "../images/testimonial2.svg";
import cardImgThree from "../images/testimonial3.svg";
import { FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const mainHeading = "Testimonial";

const TestData = [{
        id: 1,
        imgSrc: cardImg1,
        text: "An enthusiast marketer. Apart from writing on Business, Management & Tech, prefers to share his views on positive aspects of Life.",
        icon: < FaTwitter / > ,
        name: "Tom Durden",
        title: "Web Developer",
        visit: "https://twitter.com/",
    },
    {
        id: 2,
        imgSrc: cardImgTwo,
        text: "An enthusiast marketer. Apart from writing on Business, Management & Tech, prefers to share his views on positive aspects of Life.",
        icon: < FaYoutube / > ,
        name: "Lisa Sumya",
        title: "CEO of Albi",
        visit: "https://www.youtube.com/",
        featured: true,
    },
    {
        id: 3,
        imgSrc: cardImgThree,
        text: "An enthusiast marketer. Apart from writing on Business, Management & Tech, prefers to share his views on positive aspects of Life.",
        icon: < FaLinkedinIn / > ,
        name: "Jackson M",
        title: "Co Founder of Delka",
        visit: "https://www.linkedin.com/",
    },
];

export default TestData;
export { mainHeading };