import { getContent, getMembers, getPosts, getTech } from "@/server/actions";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import Banner from "@/components/banner";
import MainContentPage from "@/components/main-content";
import Footer from "@/components/footer";
import Tab from "@/components/tab";

const RootPage = async () => {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["content"],
      queryFn: getContent,
    }),
  ]);

  const dehydratedState = dehydrate(queryClient);

  return (
    <div className="w-full pt-12 sm:pt-16">
      <Banner />
      <HydrationBoundary state={dehydratedState}>
        <Tab />
        <MainContentPage />
        <Footer />
      </HydrationBoundary>
    </div>
  );
};

export default RootPage;
