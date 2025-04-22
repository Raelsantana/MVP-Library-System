import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";

type User = {
  id: number;
  name: string;
};

type UserSelectProps = {
  data: User[];
  onChange: (id: number) => void;
};

export default function UserSelect({ data, onChange }: UserSelectProps) {
  return (
    <Select.Root onValueChange={(value) => onChange(Number(value))}>
      <Select.Trigger
        className="flex items-center justify-between w-full h-12 px-4 bg-white border border-[#dde1e6] rounded-md text-[#21272a] focus:outline-none focus:ring-2 focus:ring-[#0f62fe]"
        aria-label="User"
      >
        <Select.Value placeholder="Selecione um usuário" />
        <Select.Icon>
          <ChevronDown className="w-4 h-4 text-[#697077]" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="bg-white border border-[#dde1e6] rounded-md shadow-md">
          <Select.Viewport className="p-2">
            {data.map((user) => (
              <Select.Item
                key={user.id}
                value={user.id.toString()}
                className="flex items-center justify-between px-4 py-2 text-sm text-[#21272a] rounded-md cursor-pointer hover:bg-[#f2f4f8] focus:bg-[#f2f4f8] focus:outline-none"
              >
                <Select.ItemText>{user.name}</Select.ItemText>
                <Select.ItemIndicator>
                  <Check className="w-4 h-4 text-[#0f62fe]" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}