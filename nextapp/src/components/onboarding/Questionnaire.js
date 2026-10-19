"use client";

import { useState, useTransition } from "react";
import { saveQuestionnaire } from "@/app/actions";
import { Button } from "@/components/ui/button";
import ChoiceList from "@/components/ui/ChoiceList";
import {
  ACCOUNT_TYPES,
  ORG_TYPES,
  SELF_TYPES,
  SERVICES,
  TEAM_SIZES,
} from "@/config/questionnaire";

// Every path has exactly 4 questions (the middle one depends on step 1)
const TOTAL_STEPS = 4;

const INITIAL_ANSWERS = {
  accountType: "",
  orgTypes: [],
  selfTypes: [],
  services: [],
  teamSize: "",
};

function buildSteps(accountType) {
  const steps = [
    {
      key: "accountType",
      title: "Who are you signing up for?",
      options: ACCOUNT_TYPES,
      multiple: false,
    },
  ];

  if (accountType === "organization") {
    steps.push({
      key: "orgTypes",
      title: "What type of organization is it?",
      hint: "Select all that apply.",
      options: ORG_TYPES,
      multiple: true,
    });
  }

  if (accountType === "self") {
    steps.push({
      key: "selfTypes",
      title: "What best describes you?",
      hint: "Select all that apply.",
      options: SELF_TYPES,
      multiple: true,
    });
  }

  steps.push(
    {
      key: "services",
      title: "Which services do you want to use?",
      hint: "Select all that apply.",
      options: SERVICES,
      multiple: true,
    },
    {
      key: "teamSize",
      title: "About how many users will you have?",
      options: TEAM_SIZES,
      multiple: false,
    }
  );

  return steps;
}

export default function Questionnaire() {
  const [answers, setAnswers] = useState(INITIAL_ANSWERS);
  const [stepIndex, setStepIndex] = useState(0);
  const [isPending, startTransition] = useTransition();

  const steps = buildSteps(answers.accountType);
  const step = steps[stepIndex];
  const current = answers[step.key];
  const hasAnswer = step.multiple ? current.length > 0 : current !== "";
  const isLast = stepIndex === steps.length - 1;

  function handleChange(newValue) {
    setAnswers((prev) => ({ ...prev, [step.key]: newValue }));
  }

  function handleNext() {
    if (!isLast) {
      setStepIndex((i) => i + 1);
      return;
    }

    // Only send the answers that belong to the chosen path
    const payload = {
      accountType: answers.accountType,
      types:
        answers.accountType === "organization"
          ? answers.orgTypes
          : answers.selfTypes,
      services: answers.services,
      teamSize: answers.teamSize,
    };

    startTransition(async () => {
      await saveQuestionnaire(payload);
    });
  }

  return (
    <>
      <p className="text-sm text-gray-500">
        Question {stepIndex + 1} of {TOTAL_STEPS}
      </p>
      <h1 className="mt-1 text-2xl font-semibold text-gray-900">
        {step.title}
      </h1>
      {step.hint && <p className="mt-1 text-sm text-gray-600">{step.hint}</p>}

      <div className="mt-6">
        <ChoiceList
          options={step.options}
          multiple={step.multiple}
          value={current}
          onChange={handleChange}
        />
      </div>

      <div className="mt-6 flex items-center justify-between">
        {stepIndex > 0 ? (
          <button
            type="button"
            onClick={() => setStepIndex((i) => i - 1)}
            className="text-sm font-medium text-gray-600 hover:underline"
          >
            Back
          </button>
        ) : (
          <span />
        )}

        <Button
          type="button"
          onClick={handleNext}
          disabled={!hasAnswer || isPending}
        >
          {isLast ? (isPending ? "Saving..." : "Finish") : "Continue"}
        </Button>
      </div>
    </>
  );
}