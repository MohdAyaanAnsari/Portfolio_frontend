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

    const data = response.data;

    // If API directly returns an array
    if (Array.isArray(data)) {
      return data;
    }

    // If API returns { projects: [...] }
    if (Array.isArray(data?.projects)) {
      return data.projects;
    }

    // If API returns { data: [...] }
    if (Array.isArray(data?.data)) {
      return data.data;
    }

    console.error("Unexpected projects API response:", data);

    return projectsData as Project[];
  } catch (error) {
    console.error("API failed, loading local JSON data:", error);

    return projectsData as Project[];
  }
};
