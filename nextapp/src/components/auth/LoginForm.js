import Link from "next/link";
import { login } from "@/app/actions";
import Input from "@/components/ui/FormField";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
  return (
    <>
      <h1 className="text-2xl font-semibold text-gray-900">Welcome back</h1>
      <p className="mt-1 text-sm text-gray-600">
        Log in to manage your music business.
      </p>

      <form action={login} className="mt-6 grid gap-4">
        <Input
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
        <Input
          label="Password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
        />
        <Button type="submit">Log in</Button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        New here?{" "}
        <Link href="/signup" className="font-medium text-sec hover:underline">
          Create an account
        </Link>
      </p>
    </>
  );
}