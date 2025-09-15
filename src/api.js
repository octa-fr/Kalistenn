const API_URL = "http://localhost:8000/api";

export async function login(form) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
  return res.json();
}

export async function register(form) {
  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
  return res.json();
}

// // ===== CATEGORY CRUD =====
// export async function getCategories() {
//   const res = await fetch(`${API_URL}/categories`);
//   return res.json();
// }

// export async function addCategory(category) {
//   const res = await fetch(`${API_URL}/categories`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(category),
//   });
//   return res.json();
// }

// export async function deleteCategory(id) {
//   const res = await fetch(`${API_URL}/categories/${id}`, {
//     method: "DELETE",
//   });
//   return res.json();
// }
