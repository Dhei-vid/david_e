import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface CardXProps {
  children?: ReactNode;
  className?: string;
  cardcolor?: string;
}

const CardX = ({ children, className, cardcolor }: CardXProps) => {
  return (
    <div className={"bg-glass-500 dark:bg-gray-900/50 rounded-4xl p-2"}>
      <Card className={cn(cardcolor, "!py-0")}>
        <CardContent className={cn(className)}>{children}</CardContent>
      </Card>
    </div>
  );
};

export default CardX;
