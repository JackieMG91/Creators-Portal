import Link from "next/link";
import { signup } from "@/app/actions";
import Input from "@/components/ui/FormField";
import { Button } from "@/components/ui/button";

export default function SignupForm() {
  return (
    <>
      <h1 className="text-2xl font-semibold text-gray-900">
        Create your account
      </h1>
      <p className="mt-1 text-sm text-gray-600">
        Build your presence and reach your audience from one portal.
      </p>

      <form action={signup} className="mt-6 grid gap-4">
        <Input
          label="Name"
          name="name"
          type="text"
          required
          autoComplete="name"
        />
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
          minLength={8}
          autoComplete="new-password"
        />
        <Button type="submit">Sign up</Button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-sec hover:underline">
          Log in
        </Link>
      </p>
    </>
  );
}