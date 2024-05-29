import { getMembers, getPosts } from "@/server/actions";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import Banner from "@/components/banner";
import MainContentPage from "@/components/main-content";
import Footer from "@/components/footer";

const RootPage = async () => {
  // const queryClient = new QueryClient();

  // await Promise.all([
  //   queryClient.prefetchQuery({
  //     queryKey: ["members"],
  //     queryFn: getMembers,
  //   }),
  //   queryClient.prefetchQuery({
  //     queryKey: ["posts"],
  //     queryFn: getPosts,
  //   }),
  // ]);

  // const dehydratedState = dehydrate(queryClient);

  return (
    <div className="pt-12 sm:pt-16">
      <Banner />
      {/* <HydrationBoundary state={dehydratedState}> */}
      <MainContentPage />
      <Footer />
      {/* </HydrationBoundary> */}
    </div>
  );
};

export default RootPage;
