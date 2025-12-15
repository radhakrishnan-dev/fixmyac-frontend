// src/components/BookingForm.tsx (UPDATED for +91 Prefix)
import React, { useState, FormEvent } from 'react';
import './BookingForm.css';

// Define the initial state structure for the form
interface FormState {
    name: string;
    whatsapp: string;
    service: string;
    dateTime: string;
    issue: string;
}

// Set the initial whatsapp state to the mandatory '+91' prefix
const initialFormState: FormState = {
    name: '',
    whatsapp: '+91', // Start with the fixed prefix
    service: 'AC Deep Cleaning', 
    dateTime: '',
    issue: '',
};

// Mock list of services for the dropdown
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
        
        if (name === 'whatsapp') {
            // Logic to ensure '+91' is always the prefix and prevent removal
            let updatedValue = value;

            if (!updatedValue.startsWith('+91')) {
                // If user somehow deletes '+91', re-add it immediately
                updatedValue = '+91' + updatedValue.replace(/[^0-9]/g, ''); 
                
                // If they backspace over the '1', and the value is '+9', correct it to '+91'
                if (updatedValue === '+9') {
                    updatedValue = '+91';
                }
            }
            // Update state with the enforced prefix
            setFormData(prev => ({ ...prev, [name]: updatedValue }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    /**
     * Cleans the WhatsApp number (removes +91 and any non-digit chars) for use in the message body.
     * The full number (including +91) is needed for the WhatsApp URL.
     * @returns {string} Cleaned number for message display.
     */
    const cleanWhatsAppNumber = (number: string): string => {
        // Remove '+91' prefix if present, and remove any non-digit characters.
        return number.replace(/^\+91/, '').replace(/[^0-9]/g, '');
    };


    const generateWhatsAppMessage = (): string => {
        // Get the cleaned number for display in the message body
        const displayedNumber = cleanWhatsAppNumber(formData.whatsapp);
        
        const preferredDateTime = formData.dateTime.trim() || 'Not specified';
        const additionalNotes = formData.issue.trim() || 'No additional notes provided.';

        const messageText = `
--- FIXMYAC SERVICE REQUEST ---
Dear Admin,
I would like to book an AC service slot.

1. Customer Name: ${formData.name}
2. Contact (WhatsApp): +91${displayedNumber}
3. Service Required: ${formData.service}
4. Preferred Date/Time: ${preferredDateTime}
5. Additional Notes: ${additionalNotes}

Please confirm the slot and share the technician details. Thank you!
        `.trim();

        return encodeURIComponent(messageText);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // Validation: Ensure number is more than just '+91' (i.e., has actual digits)
        if (!formData.name || formData.whatsapp.length <= 3 || !formData.service) {
            alert("Please fill in your Name, WhatsApp Number (must include 10 digits), and Service Required.");
            return;
        }

        // Use the full number (including +91) for the WhatsApp URL
        const businessNumber = '919787207758'; 
        const message = generateWhatsAppMessage();
        
        // Ensure the URL uses only digits for the contact part
        const whatsappUrl = `https://wa.me/${businessNumber}?text=${message}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <h2 className="form-title">Book Your AC Service Slot Now!</h2>
            <p className="form-subtitle">Confirm your details to book instantly via WhatsApp.</p>
            
            {/* Input: Your Name */}
            <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="E.g., John Doe"
                    required
                />
            </div>
            
            {/* Input: WhatsApp Number (Fixed to +91) */}
            <div className="form-group">
                <label htmlFor="whatsapp">WhatsApp Number (Indian Only)</label>
                <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    // Updated placeholder for clarity
                    placeholder="+91XXXXXXXXXX" 
                    required
                />
            </div>

            {/* Select: Service Required */}
            <div className="form-group">
                <label htmlFor="service">Select Service</label>
                <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                >
                    {serviceOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>

            {/* Input: Preferred Date & Time */}
            <div className="form-group">
                <label htmlFor="dateTime">Preferred Date & Time (Optional)</label>
                <input
                    type="datetime-local"
                    id="dateTime"
                    name="dateTime"
                    value={formData.dateTime}
                    onChange={handleChange}
                />
            </div>

            {/* Input: Model, Location, or Specific Issue (Using textarea) */}
            <div className="form-group">
                <label htmlFor="issue">Model, Location, or Specific Issue (Optional)</label>
                <textarea
                    id="issue"
                    name="issue"
                    rows={3}
                    value={formData.issue}
                    onChange={handleChange}
                    placeholder="E.g., LG Split AC, not cooling, near Gandhipuram."
                ></textarea>
            </div>

            <button type="submit" className="btn-primary form-submit-btn">
                BOOK VIA WHATSAPP & SEND DETAILS
            </button>
            <p className="contact-confirmation">We will contact you via WhatsApp for confirmation.</p>
        </form>
    );
};

export default BookingForm;