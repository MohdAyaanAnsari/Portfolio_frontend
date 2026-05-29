import api from "./base";
import projectsData from "../data/projects.json";

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

    return response.data;
  } catch (error) {
    console.error("API failed, loading local JSON data:", error);

    return projectsData as Project[];
  }
};
