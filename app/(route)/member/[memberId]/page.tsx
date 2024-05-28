import getMemberDetail from "@/app/(route)/member/[memberId]/actions";

const MemberDetailPage = async ({
  params,
}: {
  params: {
    memberId: string;
  };
}) => {
  const { memberId } = params || {};
  const member = await getMemberDetail(memberId);

  return (
    <>
      <div>{member.source}</div>
      <div>{member.name}</div>
      <div>{member.id}</div>
    </>
  );
};

export default MemberDetailPage;
