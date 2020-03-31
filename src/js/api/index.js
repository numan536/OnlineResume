import axios from "axios";

export async function submitRegisterApi(data) {
  const res = await axios.post("/api/user/register", data);
  return res;
}

export async function submitLoginApi(data) {
  const res = await axios.post("/api/user/login", data);
  return res.data;
}

export async function getRegisterDataApi() {
  const res = await axios.get("/api/user/all");
  return res;
}

export async function getCurrentProfileApi() {
  const token = localStorage.getItem("token");
  const res = await axios.get("/api/profile", {
    headers: {
      Authorization: token
    }
  });
  return res;
}

export async function submitProfileApi(data) {
  const token = localStorage.getItem("token");
  const res = await axios.post("/api/profile", data, {
    headers: {
      Authorization: token
    }
  });
  return res.data;
}

export async function submitExperienceApi(data) {
  const token = localStorage.getItem("token");
  const res = await axios.post("/api/profile/experience", data, {
    headers: {
      Authorization: token
    }
  });
  return res.data;
}

export async function submitEducationApi(data) {
  const token = localStorage.getItem("token");
  const res = await axios.post("/api/profile/education", data, {
    headers: {
      Authorization: token
    }
  });

  return res.data;
}

export async function deleteProfileApi() {
  const token = localStorage.getItem("token");
  const res = await axios.delete("/api/profile", {
    headers: {
      Authorization: token
    }
  });

  return res.data;
}

export async function deleteEducationApi(id) {
  const token = localStorage.getItem("token");
  // const axiosInstance = axios.delete({
  //   baseURL: process.env.REACT_APP_BACKEND_HOST,
  //   headers: { Authorization: token }
  // });
  const res = await axios.delete(`/api/profile/education/${id}`, {
    headers: {
      Authorization: token
    }
  });

  return res.data;
}

export async function deleteExperienceApi(id) {
  const token = localStorage.getItem("token");
  // const axiosInstance = axios.delete({
  //   baseURL: process.env.REACT_APP_BACKEND_HOST,
  //   headers: { Authorization: token }
  // });
  const res = await axios.delete(`/api/profile/experience/${id}`, {
    headers: {
      Authorization: token
    }
  });

  return res.data;
}

export async function getAllProfileApi() {
  const res = await axios.get("/api/profile/all");
  return res;
}

export async function getProfileHandleApi(handle) {
  const res = await axios.get(`/api/profile/handle/${handle}`);
  return res;
}

export async function submitPostApi(data) {
  const token = localStorage.getItem("token");
  const res = await axios.post("/api/post", data, {
    headers: {
      Authorization: token
    }
  });

  return res.data;
}

export async function getPostsApi() {
  const token = localStorage.getItem("token");
  const res = await axios.get("/api/post/all", {
    headers: {
      Authorization: token
    }
  });

  return res.data;
}

export async function deletePostApi(id) {
  const token = localStorage.getItem("token");
  const res = await axios.delete(`/api/post/${id}`, {
    headers: {
      Authorization: token
    }
  });

  return res.data;
}

export async function addLikePostApi(id) {
  const token = localStorage.getItem("token");
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_HOST,
    headers: { Authorization: token }
  });
  const res = await axiosInstance.post(`/api/post/like/${id}`, {
    headers: {
      Authorization: token
    }
  });

  return res.data;
}

export async function removeLikePostApi(id) {
  const token = localStorage.getItem("token");
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_HOST,
    headers: { Authorization: token }
  });
  const res = await axiosInstance.post(`/api/post/dislike/${id}`, {
    headers: {
      Authorization: token
    }
  });

  return res.data;
}

export async function addCommentPostApi(id, data) {
  const token = localStorage.getItem("token");
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_HOST,
    headers: { Authorization: token }
  });
  const res = await axiosInstance.post(`/api/post/comment/${id}`, data, {
    headers: {
      Authorization: token
    }
  });

  return res.data;
}

export async function removeCommentPostApi(id, commentId) {
  const token = localStorage.getItem("token");
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_HOST,
    headers: { Authorization: token }
  });
  const res = await axiosInstance.post(`/api/post/comment/${id}/${commentId}`, {
    headers: {
      Authorization: token
    }
  });

  return res.data;
}

export async function getSinglePostApi(id) {
  const token = localStorage.getItem("token");
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_HOST,
    headers: { Authorization: token }
  });
  const res = await axiosInstance.get(`/api/post/${id}`, {
    headers: {
      Authorization: token
    }
  });

  return res.data;
}
