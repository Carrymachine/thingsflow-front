import axios from 'axios';
import {issuesResponse} from '../types/issuesResponse';

export const getIssues = async ({
  page = 1,
}: {
  page?: number;
}): Promise<issuesResponse[]> => {
  const response = await axios.get(
    `https://api.github.com/repos/angular/angular-cli/issues?page=${page}`,
  );

  return response.data;
};
