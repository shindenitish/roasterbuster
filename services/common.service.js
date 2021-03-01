import { faHome, faPaste, faPlane, faRoute, faSuitcase } from '@fortawesome/free-solid-svg-icons';

export const getIcon = (dutyId) => {
    switch (dutyId) {
        case 'DO': return faHome;
        case 'FLT': return faPlane;
        case 'POS': return faRoute;
        case 'SBY': return faPaste;
        case 'OFD': return faSuitcase;
        default: return null;
    }
}

export const getDutyStatus = (dutyId) => {
    switch (dutyId) {
        case 'DO': return 'Off Duty';
        case 'FLT': return 'Flight';
        case 'SBY': return 'Standby';
        case 'OFD': return 'Layover';
        case 'POS': return 'Positioning';
        default: return 'NA';
    }
}