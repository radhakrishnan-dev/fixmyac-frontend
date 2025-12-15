// src/data/mockServices.ts (FINAL CODE WITH IMAGE PATHS & DATA)

// 1. IMPORT YOUR SERVICE IMAGES HERE
import imgServiceRoutine from '../assets/ac-cleaning.jpeg';
import imgServiceRepair from '../assets/ac-repair.jpeg';
import imgServiceGas from '../assets/gas-refill.jpeg';
import imgServiceComponent from '../assets/component-replace.jpeg';
import imgServiceInstall from '../assets/ac-install.jpeg';
import imgServiceAMC from '../assets/amc-contract.jpeg';


export interface Service {
    id: number;
    // CRITICAL: The type of icon is now a string path/URL, not an emoji
    icon: string; 
    title: string;
    priceEstimate: string;
    description: string;
}

export const mockServices: Service[] = [
    { 
        id: 1, 
        // 2. USE THE IMPORTED IMAGE VARIABLE HERE
        icon: imgServiceRoutine, 
        title: 'Routine AC Service & Maintenance', 
        priceEstimate: '₹ 599 onwards', 
        description: 'Comprehensive unit cleaning to ensure peak efficiency. Includes thorough AC Filter Cleaning and AC Coil Cleaning to prevent dust build-up and improve air quality.' 
    },
    { 
        id: 2, 
        icon: imgServiceRepair, 
        title: 'AC Repair & Troubleshooting', 
        priceEstimate: '₹ 350 (Inspection)', 
        description: 'Diagnosis and fixing of all common and complex AC issues: low cooling, strange noises, water leakage, and power trip issues across all AC types.' 
    },
    { 
        id: 3, 
        icon: imgServiceGas, 
        title: 'AC Gas Refilling / Leak Repair', 
        priceEstimate: '₹ 2200 onwards', 
        description: 'Professional identification of refrigerant leaks and complete gas refilling as per manufacturer specifications to restore cooling performance and unit efficiency.' 
    },
    { 
        id: 4, 
        icon: imgServiceComponent, 
        title: 'Major Component Replacement', 
        priceEstimate: 'Variable', 
        description: 'Expert repair and replacement services for critical parts, including AC Compressor, PCB, Condenser, and Fan Motor/Blower Repair.' 
    },
    { 
        id: 5, 
        icon: imgServiceInstall, 
        title: 'AC Installation & Uninstallation', 
        priceEstimate: '₹ 1500 onwards', 
        description: 'Professional, safe, and efficient installation of new AC units (Split, Window, Cassette). We also handle careful uninstallation and shifting.' 
    },
    { 
        id: 6, 
        icon: imgServiceAMC, 
        title: 'Annual Maintenance Contract (AMC)', 
        priceEstimate: '₹ 4500/year', 
        description: 'Secure year-round comfort with our customized AMC plans. Includes scheduled services, priority support, and discounted repairs to keep your AC running smoothly all 365 days.' 
    }
];

// Brands list used on Home and Brands page
export const majorBrands = [
    'Daikin',
    'Samsung',
    'LG',
    'Voltas',
    'Hitachi',
    'Blue Star',
    'Whirlpool',
    'Haier',
    'Carrier',
    'Godrej',
    'Lloyd',
    'Mitsubishi',
    'Toshiba',
    'Panasonic',
    'O General'
];