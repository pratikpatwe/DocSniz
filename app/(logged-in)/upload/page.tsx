import UploadHeader from "@/components/upload/upload-header";
import UplaodForm from "@/components/upload/upload-form";
import BgGradient from "@/components/common/bg-gradient";

export default function Page() {
  return (
    <section className="min-h-screen">
      <BgGradient />
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <UploadHeader />
          <UplaodForm />
        </div>
      </div>
    </section>
  );
}