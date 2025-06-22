import PageHeader from "../../components/PageHeader";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

const Resume = ({ brand,  name, color }) => {
  const handleDownload = async () => {
    try {
      const response = await fetch("/SaugatGautamResume.pdf");

      if (!response.ok) {
        throw new Error("Failed to fetch the PDF file.");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "SaugatGautamResume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading the resume:", error);
    }
  };

  return (
    <section className="resume container">
      <PageHeader title="Resume" description="Uncover my expertise" />
      <p className="brand">{brand}</p>
      <div className="formGroup formSubmit">
           

        <motion.button
          onClick={handleDownload}
          className="download-button btn" // Apply scale animation on hover
          whileHover={{ scale: 1.05 }}
          // Apply scale animation on tap
          whileTap={{ scale: 0.99 }}
          style={{ backgroundColor: color }}
        >
          Download Resume
          <div>
            {/* Display the arrow icon */}
            <FiArrowUpRight className="arrow-icon" />
          </div>
        </motion.button>
        
      </div>
    </section>
  );
};

export default Resume;
