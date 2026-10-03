import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "light";

const styles: Record<Variant, string> = {
  solid: "bg-primary text-primary-foreground hover:bg-cocoa",
  outline: "border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground",
  light: "bg-cream text-cocoa hover:bg-gold",
};

export function WhatsAppButton({
  product,
  label = "Order on WhatsApp",
  variant = "solid",
  className,
}: {
  product?: string;
  label?: string;
  variant?: Variant;
  className?: string;
}) {
  const href = whatsappLink(product);
  const base = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300",
    styles[variant],
    className,
  );
  if (!href) {
    return (
      <span
        className={cn(base, "cursor-not-allowed opacity-80")}
        title="WhatsApp number to be added by the owner"
        aria-disabled="true"
      >
        <MessageCircle className="h-4 w-4" aria-hidden />
        {label}
        <span className="rounded-full bg-gold/30 px-2 py-0.5 text-[10px] uppercase tracking-wider">
          Number pending
        </span>
      </span>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
      <MessageCircle className="h-4 w-4" aria-hidden />
      {label}
    </a>
  );
}
