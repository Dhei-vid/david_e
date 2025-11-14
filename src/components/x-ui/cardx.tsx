import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

import { motion } from "framer-motion";

interface CardXProps {
  children?: ReactNode;
  className?: string;
  cardcolor?: string;
}

const CardX = ({ children, className, cardcolor }: CardXProps) => {
  return (
    <motion.div
      layout
      className={"bg-glass-500 dark:bg-gray-900/50 rounded-4xl p-2"}
    >
      <Card className={cn(cardcolor, "!py-0")}>
        <CardContent className={cn(className)}>{children}</CardContent>
      </Card>
    </motion.div>
  );
};

export default CardX;
