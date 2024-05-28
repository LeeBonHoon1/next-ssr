"use server";
import axios from "axios";
import { Member } from "@/types";

const getMembers = async (memberId: string) => {
  try {
    const response = await axios.get<Member>(
      `http://localhost:8080/members/${memberId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching members:", error);
    throw new Error(
      "Failed to fetch members. Please check the server endpoint."
    );
  }
};

export default getMembers;
