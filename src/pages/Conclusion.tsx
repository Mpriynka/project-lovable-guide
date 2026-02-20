import { motion } from "framer-motion";
import { Trophy, ArrowRight } from "lucide-react";

const fadeIn = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

const futureWork = [
  { title: "Structured Pruning", desc: "Move beyond unstructured pruning to remove entire filters/channels for real hardware speedup." },
  { title: "Advanced FSL Methods", desc: "Apply LTH to meta-learning approaches like MAML, ANIL, and Matching Networks." },
  { title: "Larger Backbones", desc: "Scale experiments to WideResNet, Vision Transformers, and other modern architectures." },
  { title: "Dynamic Pruning", desc: "Explore task-adaptive pruning where different tasks use different subnetworks." },
  { title: "Real Deployment", desc: "Benchmark sparse models on actual edge devices (Jetson Nano, Raspberry Pi, mobile)." },
];

export default function Conclusion() {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-10">
      <header>
        <p className="text-sm font-semibold text-[hsl(var(--doc-blue))] mb-1">Chapter 4</p>
        <h1 className="text-3xl font-bold text-foreground">Conclusion & Future Work</h1>
      </header>

      {/* Hero finding */}
      <div className="rounded-xl border-2 border-[hsl(var(--doc-blue))] bg-[hsl(var(--doc-blue-light))] p-6">
        <div className="flex items-start gap-3">
          <Trophy className="h-6 w-6 text-[hsl(var(--doc-blue))] shrink-0 mt-0.5" />
          <div>
            <h2 className="text-lg font-semibold text-foreground">The Core Finding</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              <strong>Winning lottery tickets exist in few-shot learning models.</strong> At 50% sparsity,
              pruned Conv4+ProtoNet networks not only match but <em>exceed</em> their dense counterparts.
              This means we can build models that are half the size and equally (or more) capable at learning
              from minimal data.
            </p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-foreground">Summary of Findings</h2>
        <ul className="space-y-3 text-sm text-muted-foreground">
          {[
            "Iterative Magnitude Pruning successfully identifies winning tickets within FSL architectures.",
            "Conv4 models show a clear sweet spot at ~50% sparsity with performance improvements over dense baselines.",
            "ResNet-12 demonstrates greater resilience to pruning due to skip connections, maintaining accuracy up to 59% sparsity.",
            "The Pretrain algorithm is more robust to pruning than ProtoNet, especially in deeper architectures.",
            "Cross-domain generalization holds at moderate sparsity but degrades beyond 67% pruning.",
            "Results align with and extend the original LTH findings to the few-shot learning domain.",
          ].map((f, i) => (
            <li key={i} className="flex gap-3">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold shrink-0">
                {i + 1}
              </span>
              {f}
            </li>
          ))}
        </ul>
      </section>

      {/* Future work */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Future Directions</h2>
        <div className="space-y-3">
          {futureWork.map((fw, i) => (
            <motion.div
              key={fw.title}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-3 rounded-lg border border-border p-4"
            >
              <ArrowRight className="h-4 w-4 text-[hsl(var(--doc-blue))] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-foreground">{fw.title}</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{fw.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
