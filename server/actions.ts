"use server";

import { ContentResponse, HANTEO_MAMBER, Posts, Tech } from "@/types";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export const getMembers = async () => {
  try {
    const response = await axios.get<HANTEO_MAMBER[]>(
      "http://localhost:8080/members"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching members:", error);
    throw new Error("Failed to fetch members");
  }
};

export const getPosts = async () => {
  try {
    const posts = await axios.get<Posts[]>("http://localhost:8080/news");
    return posts.data;
  } catch (error) {
    console.error("Error fetching members:", error);
    throw new Error("Failed to fetch members");
  }
};

export const getTech = async () => {
  try {
    const tech = await axios.get<Tech[]>("http://localhost:8080/tech");
    return tech.data;
  } catch (error) {
    console.error("Error fetching members:", error);
    throw new Error("Failed to fetch members");
  }
};

export const getContent = async () => {
  try {
    const content = await axiosInstance.get<ContentResponse>(
      `/board/1/contents`
    );
    return content.data;
  } catch (error) {
    console.error("Error fetching content:", error);
    throw new Error("Failed to content fetch");
  }
};
