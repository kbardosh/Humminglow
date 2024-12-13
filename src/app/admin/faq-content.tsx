"use client";

import { useState } from "react";
import { Button } from "../_components/ui/button";
import { Input } from "../_components/ui/input";
import { Trash2 } from "lucide-react";
import { api } from "../../trpc/react";

export const FAQContent = () => {
  const utils = api.useUtils();
  const query = api.faq.getAll.useQuery();
  const createMutation = api.faq.create.useMutation();
  const deleteMutation = api.faq.delete.useMutation();

  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");

  const handleCreateFAQ = async () => {
    if (!newQuestion || !newAnswer) return;

    createMutation.mutate(
      { question: newQuestion, answer: newAnswer },
      {
        onSuccess: () => {
          utils.faq.invalidate();
          setNewQuestion("");
          setNewAnswer("");
        },
      },
    );
  };

  const handleDeleteFAQ = async (id: number) => {
    deleteMutation.mutate(
      { id },
      {
        onSuccess: () => {
          utils.faq.invalidate();
        },
        onError: (e) => {
          alert(e.message);
        },
      },
    );
  };

  if (query.isLoading || query.isPending) return <p>Loading...</p>;
  if (query.isError)
    return <p className="text-red-400">{query.error.message}</p>;

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-4">
          <Input
            className="text-black-400"
            placeholder="Enter question"
            multiline
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
          />
          <Input
            className="text-black-400"
            multiline
            placeholder="Enter answer"
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
          />
          <Button
            onClick={handleCreateFAQ}
            isLoading={createMutation.isPending}
          >
            Add FAQ
          </Button>
        </div>
      </div>
      <div className="space-y-4">
        {query.data.map((faq) => (
          <div key={faq.id} className="relative rounded-lg border p-4">
            <h3 className="text-lg font-medium">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
            <Button
              isLoading={deleteMutation.isPending}
              variant="destructive"
              size="icon"
              className="absolute right-2 top-2"
              onClick={() => handleDeleteFAQ(faq.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
