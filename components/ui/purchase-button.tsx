"use client";

import { Button } from "@/components/ui/button";
import { Loader2, Check, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface PurchaseButtonProps {
  status: string;
  onClick: () => void;
  disabled?: boolean;
}

export function PurchaseButton({ status, onClick, disabled }: PurchaseButtonProps) {
  const getButtonContent = () => {
    switch (status) {
      case "APPROVING":
        return (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Approving UCC...
          </>
        );
      case "APPROVED":
        return (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing purchase...
          </>
        );
      case "PURCHASING":
        return (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing purchase...
          </>
        );
      case "CONFIRMED":
        return (
          <>
            <Check className="mr-2 h-4 w-4" />
            Purchase confirmed!
          </>
        );
      case "ERROR":
        return (
          <>
            <AlertCircle className="mr-2 h-4 w-4" />
            Try again
          </>
        );
      default:
        return "Buy $UCC";
    }
  };

  const getButtonVariant = () => {
    switch (status) {
      case "CONFIRMED":
        return "success";
      case "ERROR":
        return "destructive";
      default:
        return "default";
    }
  };

  const getButtonClass = () => {
    return cn(
      "w-full h-12 text-lg font-semibold transition-all duration-200",
      status === "APPROVED" && "bg-green-500 hover:bg-green-600",
      status === "CONFIRMED" && "bg-green-600",
      status === "ERROR" && "bg-red-500 hover:bg-red-600"
    );
  };

  return (
    <Button
      className={getButtonClass()}
      onClick={onClick}
      disabled={disabled || [
        "APPROVING",
        "PURCHASING",
        "CONFIRMED"
      ].includes(status)}
    >
      {getButtonContent()}
    </Button>
  );
}
