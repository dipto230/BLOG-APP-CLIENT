import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white px-6">
      <h1 className="text-7xl font-extrabold tracking-tight mb-4">404</h1>

      <h2 className="text-2xl font-semibold mb-2">
        Page Not Found
      </h2>

      <p className="text-slate-400 text-center max-w-md mb-8">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="rounded-2xl bg-white px-6 py-3 text-slate-900 font-medium shadow-lg transition hover:scale-105 hover:bg-slate-200"
      >
        ← Return Home
      </Link>
    </div>
  );
}
