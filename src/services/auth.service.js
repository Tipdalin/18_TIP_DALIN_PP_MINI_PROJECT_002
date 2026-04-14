export async function loginService(request) {
  const { email, password } = request;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auths/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const loggedUser = await res.json();
    if (!res.ok) throw new Error(loggedUser.message || "Unauthorized");
    return loggedUser;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}

export async function registerService(request) {
  console.log("Fetching to:", `${process.env.NEXT_PUBLIC_BASE_URL}/auths/register`);
  try {
    const fullName = request.name || "";
    const nameParts = fullName.trim().split(" ");

    const user = {
      firstName: nameParts[0] || "",
      lastName: nameParts.slice(1).join(" ") || "",
      email: request.email,
      password: request.password,
      birthDate: request.birthdate,
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auths/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    const registeredUser = await res.json();
    if (!res.ok) throw new Error(registeredUser.message || "Registration failed");

    return registeredUser;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
}