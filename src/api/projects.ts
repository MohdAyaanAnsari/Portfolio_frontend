import api from "./base";

export interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
  github?: string;
  live?: string;
  techStack: string[];
}

export const getProjects = async (): Promise<Project[]> => {
  try {
    const response = await api.get("/projects");
    // console.log(response.data);
    
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};