interface IApiCallParams {
  path: string;
}

export default async function apiCall<T>({ path }: IApiCallParams): Promise<{
  data: T[];
  error?: string;
}> {
  try {
    const res = await fetch(
      `https://api.rawg.io/api${path}?key=${process.env.API_KEY}&page_size=20`
    );
    const data = await res.json();

    return {
      data: data.results,
    };
  } catch (error) {
    return {
      error: `${error}`,
      data: [],
    };
  }
}