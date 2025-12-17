// src/components/BookingForm.tsx (UPDATED for Email)
import React, { useState, FormEvent } from 'react';
import './BookingForm.css';

interface FormState {
    name: string;
    whatsapp: string; // Keep variable name or change to phone
    service: string;
    dateTime: string;
    issue: string;
}

const initialFormState: FormState = {
    name: '',
    whatsapp: '+91', 
    service: 'AC Deep Cleaning', 
    dateTime: '',
    issue: '',
};

const serviceOptions = [
    'AC Deep Cleaning',
    'Routine AC Service & Maintenance',
    'AC Repair & Troubleshooting',
    'AC Gas Refilling / Leak Repair',
    'Major Component Replacement',
];

const BookingForm: React.FC = () => {
    const [formData, setFormData] = useState<FormState>(initialFormState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!formData.name || formData.whatsapp.length <= 3) {
            alert("Please fill in your Name and Contact Number.");
            return;
        }

        // --- EMAIL LOGIC ---
        const adminEmail = "fixmyaccoimbatore@gmail.com";
        const subject = encodeURIComponent(`New AC Service Request from ${formData.name}`);
        
        const body = encodeURIComponent(
`--- FIXMYAC SERVICE REQUEST ---
Dear Admin,

I would like to book an AC service slot.

1. Customer Name: ${formData.name}
2. Contact Number: ${formData.whatsapp}
3. Service Required: ${formData.service}
4. Preferred Date/Time: ${formData.dateTime || 'Not specified'}
5. Additional Notes: ${formData.issue || 'No additional notes'}

Please confirm the slot. Thank you!`
        );

        // This opens the user's Mail app (Outlook, Gmail app, etc.)
        window.location.href = `mailto:${adminEmail}?subject=${subject}&body=${body}`;
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <h2 className="form-title">Book Your Service</h2>
            <p className="form-subtitle">Fill the details to send us an Email booking.</p>
            
            <div className="form-group">
                <label>Your Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            
            <div className="form-group">
                <label>Contact Number</label>
                <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required />
            </div>

            <div className="form-group">
                <label>Select Service</label>
                <select name="service" value={formData.service} onChange={handleChange}>
                    {serviceOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
            </div>

            <div className="form-group">
                <label>Preferred Date/Time</label>
                <input type="datetime-local" name="dateTime" value={formData.dateTime} onChange={handleChange} />
            </div>

            <div className="form-group">
                <label>Notes (Model/Location)</label>
                <textarea name="issue" rows={3} value={formData.issue} onChange={handleChange}></textarea>
            </div>

            <button type="submit" className="btn-primary form-submit-btn">
                SEND BOOKING EMAIL
            </button>
        </form>
    );
};

export default BookingForm;