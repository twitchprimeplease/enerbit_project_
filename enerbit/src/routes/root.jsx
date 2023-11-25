import SidebarComponent from '../components/sidebarComponent/sidebarComponent.js';
import { Outlet } from "react-router-dom";
import '../styles.css';
export default function Root() {
    return (
        <div id='main'>
            <SidebarComponent />
            <div id="detail">
                <Outlet />
            </div>
        </div>
        
    );
  }