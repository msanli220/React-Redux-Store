import DashboardNavigation from './page/GostergePaneli/navigation';

const navigation = [
    ...DashboardNavigation,
    {
        text: 'Tanımlamalar',
        icon: 'far fa-sticky-note',
        items: [
            ...SinavlarNavigation,
            
        ]
    }

];

export default navigation;
