import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  { label: "Dense Training", desc: "Train the full network to convergence", color: "bg-[hsl(var(--doc-blue-light))] border-[hsl(var(--doc-blue))]" },
  { label: "Pruning", desc: "Remove lowest-magnitude weights (20%)", color: "bg-[hsl(var(--doc-orange-light))] border-[hsl(var(--doc-orange))]" },
  { label: "Rewinding", desc: "Reset surviving weights to initial values", color: "bg-[hsl(var(--doc-purple-light))] border-[hsl(var(--doc-purple))]" },
  { label: "Evaluation", desc: "Test the sparse subnetwork on FSL tasks", color: "bg-[hsl(var(--doc-green-light))] border-[hsl(var(--doc-green))]" },
];

export function PipelineDiagram() {
  return (
    <div className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-0">
      {steps.map((step, i) => (
        <div key={step.label} className="flex items-center flex-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15, duration: 0.4 }}
            className={`flex-1 rounded-lg border-l-4 p-4 ${step.color}`}
          >
            <p className="text-xs font-semibold text-muted-foreground">Step {i + 1}</p>
            <p className="text-sm font-semibold text-foreground mt-1">{step.label}</p>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{step.desc}</p>
          </motion.div>
          {i < steps.length - 1 && (
            <ArrowRight className="hidden sm:block h-4 w-4 text-muted-foreground mx-1 shrink-0" />
          )}
        </div>
      ))}
    </div>
  );
}
