import { Input } from "@/components/ui/input";

export default function FormField({ label, ...props }) {
  return (
    <label className="grid gap-1.5 text-sm font-medium">
      {label}
      <Input {...props} />
    </label>
  );
}