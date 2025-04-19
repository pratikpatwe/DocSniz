'use client'

import UploadFormInput from "@/components/upload/upload-form-input";
import { z } from "zod";
import { useUploadThing } from "@/utils/uploadthing";
import { toast } from 'sonner';
import { generatePdfSummary } from "@/actions/upload-actions";


const schema = z.object({
  file: z
    .instanceof(File, { message: "Invalid file" })
    .refine((file) => file.size <= 20 * 1024 * 1024, {
      message: "File size must be less than 20MB",
    })
    .refine((file) => file.type.startsWith('application/pdf'))
});

export default function UplaodForm() {

  const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      console.log("uploaded successfully!");
    },
    onUploadError: (err) => {
      console.error("error occurred while uploading", err);

      toast(
        'Error uploading file',
        {
          description: 'Please try again',
        });

    },
    onUploadBegin: ({ file }) => {
      console.log("upload has begun for", file);
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;

    //validating the fields
    const validatedFields = schema.safeParse({ file });

    console.log(validatedFields);

    if (!validatedFields.success) {
      toast(
        '❌ Something went wrong',
        {
          description: validatedFields.error.flatten().fieldErrors.file?.[0] ?? 'Invalid file',
        });
      return;
    }


    toast(
      '📄 Uploading PDF...',
      {
        description: 'We are uploading your file PDF!',
      });

    //upload the file to uploadthing
    const resp = await startUpload([file]);
    if (!resp) {
      toast('⚠️ Something not good', {
        description: 'Please try uploading a different file.',
      });
      return;
    }


    toast('⚙️ Processing PDF...', {
      description: 'Hang tight! Our AI is working on it. ✨',
    });

    //parse the pdf using langchain
    const summary = await generatePdfSummary(resp);

  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
      <UploadFormInput onSubmit={handleSubmit} />
    </div>
  );
}