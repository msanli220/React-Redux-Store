
import DashboardNavigation from './page/Dashboard/navigation';
import UserNavigation from './page/Users/navigation';
import ProductNavigation from './page/Products/navigation'
const navigation = [
    ...DashboardNavigation,
    ...UserNavigation,
    ...ProductNavigation

];

export default navigation;
