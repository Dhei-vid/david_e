import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface CardXProps {
  children?: ReactNode;
  className?: string;
}

const CardX = ({ children, className }: CardXProps) => {
  return (
    <div className={"bg-glass dark:bg-gray-900/50 rounded-4xl p-2"}>
      <Card>
        <CardContent className={cn(className)}>{children}</CardContent>
      </Card>
    </div>
  );
};

export default CardX;
