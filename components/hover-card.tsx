"use client";

import Link from "next/link";

import { TypeIcon, Phone, Mail, Cat, Linkedin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useCopyToClipboard } from "react-use";
import { HANTEO_MAMBER } from "@/types";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

const MemberInfoHoverCard = ({ member }: { member: HANTEO_MAMBER }) => {
  const { toast } = useToast();
  const [phoneClipboard, setPhoneClipboard] = useCopyToClipboard();
  const [emailClipboard, setEmailClipboard] = useCopyToClipboard();

  const clipboardHandler = (type: "phone" | "email", value: string) => {
    const setClipboard =
      type === "phone" ? setPhoneClipboard : setEmailClipboard;
    setClipboard(value);

    if (phoneClipboard.error || emailClipboard.error) {
      toast({ description: "잠시 후 다시 시도해주세요!" });
    } else {
      toast({ description: "클립보드에 복사되었어요!" });
    }
  };

  const renderHoverCard = (
    Icon: typeof TypeIcon,
    label: string,
    value: string,
    handler: () => void
  ) => (
    <Popover>
      <PopoverTrigger asChild>
        <Icon />
      </PopoverTrigger>
      <PopoverContent className="hover:underline text-sm">
        <div onClick={handler}>{value}</div>
      </PopoverContent>
    </Popover>
  );

  return (
    <div className="flex gap-3 pt-3 justify-end">
      {renderHoverCard(Phone, "phone", member.phone, () =>
        clipboardHandler("phone", member.phone)
      )}
      {renderHoverCard(Mail, "email", member.email, () =>
        clipboardHandler("email", member.email)
      )}
      {member.github && (
        <Popover>
          <PopoverTrigger asChild>
            <Cat />
          </PopoverTrigger>
          <PopoverContent className="hover:underline text-sm">
            <Link href={member.github} target="_blank">
              {member.github}
            </Link>
          </PopoverContent>
        </Popover>
      )}
      {member.linkedIn && (
        <Popover>
          <PopoverTrigger asChild>
            <Linkedin />
          </PopoverTrigger>
          <PopoverContent className="hover:underline text-sm">
            <Link href={member.linkedIn} target="_blank">
              {member.linkedIn}
            </Link>
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
};

export default MemberInfoHoverCard;
