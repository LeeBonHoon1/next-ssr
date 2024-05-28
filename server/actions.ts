"use server";

import { Member, Posts } from "@/types";
import axios from "axios";

// Function to fetch member data
export const getMembers = async (): Promise<Member[]> => {
  try {
    const response = await axios.get<Member[]>("http://localhost:8080/members");
    return response.data;
  } catch (error) {
    console.error("Error fetching members:", error);
    throw new Error("Failed to fetch members");
  }
};

export const getPosts = async (): Promise<Posts[]> => {
  try {
    const posts = await axios.get<Posts[]>("http://localhost:8080/news");
    return posts.data;
  } catch (error) {
    console.error("Error fetching members:", error);
    throw new Error("Failed to fetch members");
  }
};
