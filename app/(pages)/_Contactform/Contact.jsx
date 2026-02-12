"use client";

import {useState} from "react";
import styles from "./Contact.module.scss";

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName:"",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Form Data:", formData); //later replac this w/ API call to send form data to backend

        // Reset form 
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: "", 
        });
      };

      return(
        <section className={styles.container}>
            <h2 className={styles.title}>Let's get in touch!</h2>
            
            <form onSubmit={handleSubmit} classBane={styles.form}>
                <div className={styles.row}>
                    <input 
                        type="text"
                        name="firstName"
                        placeholder="Enter Your First Name Here"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />

                    <input 
                        type="text"
                        name="lastName"
                        placeholder="Enter Your Last Name Here"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />

                    <input 
                        type="email"
                        name="email"
                        placeholder="Enter Your E-Mail Here"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="subject"
                        placeholder="Enter Your Subject Here"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="message"
                        placeholder="Enter Your Message Here"
                        value={formData.subject}
                        onChange={handleChange}
                        required 
                    />

                    <button type ="submit" className={styles.submit}>Send Message</button> 
            </form>
        </section>
     );
    }