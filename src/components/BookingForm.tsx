import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm: React.FC = () => {
    const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS" | "ERROR">("IDLE");

    // Helper to encode form data for Netlify
    const encode = (data: any) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("SENDING");

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data: any = {};
        formData.forEach((value, key) => (data[key] = value));

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "booking", ...data })
        })
        .then(() => {
            setStatus("SUCCESS");
            form.reset();
        })
        .catch(() => setStatus("ERROR"));
    };

    if (status === "SUCCESS") {
        return (
            <div className="confirmation-card">
                <div className="success-icon">✅</div>
                <h2>Booking Received!</h2>
                <p>Thank you for choosing FixMyAc. We will contact you shortly to confirm your slot.</p>
                <button onClick={() => setStatus("IDLE")} className="btn-primary">Book Another Slot</button>
            </div>
        );
    }

    return (
        /* The 'data-netlify="true"' is the magic part for Netlify */
        <form 
            className="booking-form" 
            name="booking" 
            method="POST" 
            data-netlify="true"
            onSubmit={handleSubmit}
        >
            {/* This hidden input is required for React forms on Netlify */}
            <input type="hidden" name="form-name" value="booking" />

            <h2 className="form-title">Book Your Service</h2>
            <p className="form-subtitle">Submit details to book your AC technician.</p>
            
            <div className="form-group">
                <label>Your Name</label>
                <input type="text" name="name" placeholder="E.g., Rajesh" required />
            </div>
            
            <div className="form-group">
                <label>Contact Number</label>
                <input type="tel" name="phone" defaultValue="+91" required />
            </div>

            <div className="form-group">
                <label>Select Service</label>
                <select name="service">
                    <option>AC Deep Cleaning</option>
                    <option>Routine AC Service</option>
                    <option>AC Repair</option>
                    <option>AC Installation</option>
                </select>
            </div>

            <div className="form-group">
                <label>Preferred Date/Time</label>
                <input type="datetime-local" name="dateTime" />
            </div>

            <div className="form-group">
                <label>Notes (Model/Location)</label>
                <textarea name="message" rows={3} placeholder="Tell us more..."></textarea>
            </div>

            <button type="submit" className="btn-primary form-submit-btn" disabled={status === "SENDING"}>
                {status === "SENDING" ? "Processing..." : "CONFIRM BOOKING"}
            </button>

            {status === "ERROR" && <p className="error-msg">Error sending booking. Please check your internet.</p>}
        </form>
    );
};

export default BookingForm;