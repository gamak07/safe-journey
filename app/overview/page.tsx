import ActivityOverview from "../../features/homepage/ActivityOverview";
import Header from "../../features/homepage/Header";
import { getUser } from "../../hooks/useUser";
import { getAuthenticatedUser } from "../../lib/auth";

export default async function HomePage() {
  let user = null;
  let error = null;

  try {
    user = await getAuthenticatedUser();
  } catch (err:unknown) {
    console.error(err instanceof Error ? err.message : "Unknown error");
    error= err instanceof Error ? err.message : "Unknown error";
  }
  return (
    <main>
      <Header user={user} />
      <ActivityOverview />
    </main>
  );
}
