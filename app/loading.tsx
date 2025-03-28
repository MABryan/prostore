// create a loading page
// bring in the loader image
// return a div with the loader image with the image component and 
// the source with the loader variable 
// include the height width, alt attribute with the value of "loading"
// add classes in the div style tag for the loader image. 
// export the loading page component


import Image from "next/image";
import loader from "@/public/images/loader.gif";

const LoadingPage = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw" }}>
        <Image src={loader} width={150} height={150} alt="loading" className="loader" />
        </div>
    );
    }

 
export default LoadingPage;

