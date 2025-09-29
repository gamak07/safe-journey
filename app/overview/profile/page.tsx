import AccountManagement from "../../../features/profile_page/AccountManagement";
import AppPreferences from "../../../features/profile_page/AppPreferences";
import EmergencyContact from "../../../features/profile_page/EmergencyContact";
import Header from "../../../features/profile_page/Header";
import NotificationPreferences from "../../../features/profile_page/NotificationPreferences";
import PersonalInformation from "../../../features/profile_page/PeronalInformation";
import SecuritySettings from "../../../features/profile_page/SecuritySettings";
import UserInformation from "../../../features/profile_page/UserInformation";

export default function ProfilePage() {
  return <main>
    <Header />
    <section className="p-6">
      <UserInformation />
      <PersonalInformation />
      <EmergencyContact />
      <AppPreferences />
      <SecuritySettings />
      <NotificationPreferences />
      <AccountManagement />
    </section>
  </main>;
}