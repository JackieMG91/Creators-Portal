export default function OnboardingLayout({ children }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md">
        <p className="mb-6 text-center text-xl font-bold text-prime">
          Creators Portal
        </p>
        {children}
      </div>
    </div>
  );
}