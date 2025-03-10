import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, User } from "lucide-react";

export default function GNB() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Left: Logo & Menu Button */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Menu className="w-6 h-6" />
        </Button>
        <span className="text-lg font-semibold">하랑이랑</span>
        {/* Center: Navigation Links */}
        <div className="gap-4">
          <Button variant="ghost">봉사자</Button>
          <Button variant="ghost">프로그램</Button>
          <Button variant="ghost">공지사항</Button>
        </div>
      </div>

      {/* Right: User Profile Dropdown */}
      <div className="flex gap-4">
        <Button variant="ghost">찜</Button>
        <Button variant="ghost">알림</Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/avatar.png" alt="User" />
                <AvatarFallback>
                  <User className="w-6 h-6" />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
