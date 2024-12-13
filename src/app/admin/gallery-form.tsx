import { useState } from "react";
import { Button } from "../_components/ui/button";
import { Input } from "../_components/ui/input";
import { api } from "~/trpc/react";
import { UploadButton } from "~/utils/uploadthing";
import { ClientUploadedFileData } from "uploadthing/types";

export const GalleryForm = () => {
  const [file, setFile] = useState<{
    url: string;
    name: string;
    key: string;
  } | null>(null);
  const [description, setDescription] = useState("");

  const utils = api.useUtils();
  const mutation = api.gallery.create.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      alert("File is required.");
      return;
    }

    mutation.mutate(
      {
        file, // Pass the file object containing url, name, and key
        description,
      },
      {
        onSuccess: () => {
          utils.gallery.invalidate();
          setFile(null);
          setDescription("");
        },
        onError: (e) => {
          alert(e.message);
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center gap-4">
        <UploadButton
          endpoint="galleryImage"
          onClientUploadComplete={(files) => {
            const uploadedFile = files?.[0];
            if (uploadedFile) {
              setFile({
                url: uploadedFile.url,
                name: uploadedFile.name,
                key: uploadedFile.key,
              });
            }
          }}
          onUploadError={(error) => {
            alert(`Upload failed: ${error.message}`);
          }}
        />

        <p>{file?.name}</p>
      </div>

      {/* Description input */}
      <Input
        multiline
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter a description for the image (optional)"
        className="w-full rounded border p-2 text-black-400"
      />

      <Button
        type="submit"
        disabled={!Boolean(file)}
        isLoading={mutation.isPending}
      >
        Submit
      </Button>
    </form>
  );
};
