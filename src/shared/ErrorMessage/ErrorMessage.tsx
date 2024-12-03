import { Container } from '@/shared/Container';

export default function ErrorMessage() {
  return (
    <Container>
      <div className="flex items-center gap-4 p-4 bg-red-100 border-l-4 border-red-500 rounded-md shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.054 0 1.918-.816 1.995-1.85L21 18.09V5.91c0-1.054-.816-1.918-1.85-1.995L19 4H5c-1.054 0-1.918.816-1.995 1.85L3 5.91v12.18c0 1.054.816 1.918 1.85 1.995L5 20z"
          />
        </svg>
        <div className="text-red-700">
          <p className="font-bold">Error</p>
          <p>Something Went Wrong. Please try again.</p>
        </div>
      </div>
    </Container>
  );
}
