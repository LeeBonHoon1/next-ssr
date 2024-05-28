import { getMembers, getPosts } from "@/server/actions";
import Members from "@/components/members";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const RootPage = async () => {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["members"],
      queryFn: getMembers,
    }),
    queryClient.prefetchQuery({
      queryKey: ["posts"],
      queryFn: getPosts,
    }),
  ]);

  const dehydratedState = dehydrate(queryClient);

  return (
    <div>
      <HydrationBoundary state={dehydratedState}>
        <Members />
      </HydrationBoundary>
    </div>
  );
};

export default RootPage;
