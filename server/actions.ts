"use server";

import { HANTEO_MAMBER, Posts } from "@/types";
import axios from "axios";

export const getMembers = async (): Promise<HANTEO_MAMBER[]> => {
  try {
    const response = await axios.get<HANTEO_MAMBER[]>(
      "http://192.168.2.94:8080/members"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching members:", error);
    throw new Error("Failed to fetch members");
  }
};

export const getPosts = async (): Promise<Posts[]> => {
  try {
    const posts = await axios.get<Posts[]>("http://192.168.2.94:8080/news");
    return posts.data;
  } catch (error) {
    console.error("Error fetching members:", error);
    throw new Error("Failed to fetch members");
  }
};
