export type IApiResponseList<T> =
  | {
      results: T[];
    }
  | {
      error: string;
    };

export type IApiResponseDetails<T> =
  | T
  | {
      error: string;
    };
