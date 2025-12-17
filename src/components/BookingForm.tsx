// src/components/BookingForm.tsx
import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm: React.FC = () => {
    const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS" | "ERROR">("IDLE");
    
    // Replace this with YOUR Formspree Endpoint
    const FORMSPREE_URL = "https://formspree.io/f/mojaaavn";

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("SENDING");

        const form = e.currentTarget;
        const data = new FormData(form);

        const response = await fetch(FORMSPREE_URL, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            setStatus("SUCCESS");
            form.reset();
        } else {
            setStatus("ERROR");
        }
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
        <form className="booking-form" onSubmit={handleSubmit}>
            <h2 className="form-title">Book Your Service</h2>
            <p className="form-subtitle">Fill the details to send us an Email booking.</p>
            
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
                {status === "SENDING" ? "Sending..." : "CONFIRM BOOKING"}
            </button>

            {status === "ERROR" && <p style={{color: 'red', marginTop: '10px'}}>Something went wrong. Please try again.</p>}
        </form>
    );
};

export default BookingForm;