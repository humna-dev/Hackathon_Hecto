import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./contact.module.css";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.header}>
        <div className={styles.titleContainer}>
          <h1 className="text-5xl font-bold text-center">We’d Love to Hear from You!</h1>
          <p className="text-xl text-center mt-2">
            Your inquiries are important to us. Reach out and we’ll get back to you shortly.
          </p>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className="bg-lightgray text-darkgray">
          <div className="container mx-auto px-6 py-20">
            {/* Introduction Section */}
            <div className="lg:flex justify-between gap-10">
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-primary mb-6">Who We Are</h2>
                <p className="text-lg text-muted">
                  We are a passionate team dedicated to providing top-notch services. Whether you're
                  looking for assistance or information, we're here to help.
                </p>
                <div className="flex gap-6 mt-6">
                  <span className="w-5 h-5 rounded-full bg-indigo-500"></span>
                  <span className="w-5 h-5 rounded-full bg-teal-500"></span>
                  <span className="w-5 h-5 rounded-full bg-yellow-500"></span>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-primary mb-6">Our Contact Information</h2>
                <ul className="space-y-5 text-lg text-muted">
                  <li>
                    <span className="font-semibold">Phone:</span> +92-340-12345-67
                  </li>
                  <li>
                    <span className="font-semibold">Email:</span> contact@oursite.com
                  </li>
                  <li>
                    <span className="font-semibold">Location:</span> 123 Main St, Karachi, Pakistan
                  </li>
                  <li>
                    <span className="font-semibold">Support:</span> Complimentary shipping on all orders.
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="grid md:grid-cols-2 gap-12 mt-20">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Get In Touch</h2>
                <p className="text-lg text-muted mb-6">
                  Feel free to send us a message! We respond as quickly as possible to all inquiries.
                </p>
                <form className="space-y-7">
                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-5 py-3 border border-lightgray rounded-md"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      className="w-full px-5 py-3 border border-lightgray rounded-md"
                      required
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-5 py-3 border border-lightgray rounded-md"
                    required
                  />
                  <textarea
                    placeholder="Message"
                    rows={6}
                    className="w-full px-5 py-3 border border-lightgray rounded-md"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-teal-500 text-white px-8 py-3 rounded-md hover:bg-teal-600"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div className="hidden md:block">
                <Image
                  src="/images/about/contactus.png"
                  alt="Illustration"
                  width={450}
                  height={350}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
