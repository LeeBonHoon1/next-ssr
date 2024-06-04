import { Skeleton } from "@/components/ui/skeleton";

const ContentSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="w-full py-12 rounded-xl" />
      <div className="space-y-2"></div>
    </div>
  );
};

export default ContentSkeleton;
