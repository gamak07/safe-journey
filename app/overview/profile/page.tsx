import AccountManagement from "../../../features/profile_page/AccountManagement";
import AppPreferences from "../../../features/profile_page/AppPreferences";
import EmergencyContact from "../../../features/profile_page/EmergencyContact";
import Header from "../../../features/profile_page/Header";
import NotificationPreferences from "../../../features/profile_page/NotificationPreferences";
import PersonalInformation from "../../../features/profile_page/PeronalInformation";
import SecuritySettings from "../../../features/profile_page/SecuritySettings";
import UserInformation from "../../../features/profile_page/UserInformation";
import { getAuthenticatedUser } from "../../../lib/auth";

export default async function ProfilePage() {
  let user = null; 
  let error = null

  

  
    try {
      user = await getAuthenticatedUser();
    } catch (err:unknown) {
      console.error(err instanceof Error ? err.message : "Unknown error");
      error= err instanceof Error ? err.message : "Unknown error";
    }


    console.log(user);
    

  return <main>
    <Header />
    <section className="p-6">
      <UserInformation user={user} />
      <PersonalInformation user={user} />
      <EmergencyContact />
      <AppPreferences />
      <SecuritySettings />
      <NotificationPreferences />
      <AccountManagement />
    </section>
  </main>;
}