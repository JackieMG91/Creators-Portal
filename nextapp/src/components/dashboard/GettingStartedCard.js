import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getAnswers } from "@/lib/answers";

export default async function GettingStartedCard() {
  const answers = await getAnswers();

  const steps = [
    { label: "Create your account", done: true },
    { label: "Tell us about you", done: Boolean(answers) },
    { label: "Set up your first service", done: false },
    { label: "Invite your team", done: false },
  ];
  const doneCount = steps.filter((s) => s.done).length;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Getting started</CardTitle>
        <CardDescription>
          {doneCount} of {steps.length} steps complete
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3">
        <Progress value={(doneCount / steps.length) * 100} />
        <ul className="mt-2 grid gap-2">
          {steps.map((step) => (
            <li key={step.label} className="flex items-center gap-2 text-sm">
              <span
                className={`flex size-5 items-center justify-center rounded-full ${
                  step.done
                    ? "bg-primary text-primary-foreground"
                    : "border border-input"
                }`}
              >
                {step.done && <Check className="size-3" />}
              </span>
              <span className={step.done ? "text-muted-foreground" : ""}>
                {step.label}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}