export const signup = async (
  fullname: string,
  email: string,
  phone: string,
  password: string,
  conPassword: string,
) => {
  const res = await fetch("/api/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fullname, email, phone, password, conPassword }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || "Signup failed");
  return data;
};
