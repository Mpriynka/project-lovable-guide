import { motion } from "framer-motion";
import { PipelineDiagram } from "@/components/PipelineDiagram";
import { Database, Layers, GitBranch } from "lucide-react";

const fadeIn = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function Methodology() {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-10">
      <header>
        <p className="text-sm font-semibold text-[hsl(var(--doc-blue))] mb-1">Chapter 2</p>
        <h1 className="text-3xl font-bold text-foreground">Methodology</h1>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Our approach applies Iterative Magnitude Pruning to few-shot learning pipelines,
          testing whether sparse subnetworks can match dense models on novel-class recognition.
        </p>
      </header>

      {/* Pipeline */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">IMP Pipeline</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          The Iterative Magnitude Pruning process follows four phases, repeated across pruning rounds
          until the desired sparsity level is reached.
        </p>
        <PipelineDiagram />
        <p className="text-xs text-muted-foreground italic">
          Each round prunes 20% of remaining weights. After 7 rounds, the network retains only ~21% of its original parameters.
        </p>
      </section>

      {/* Backbones */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
          <Layers className="h-5 w-5 text-[hsl(var(--doc-purple))]" /> Backbone Architectures
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-5">
            <h3 className="text-sm font-semibold text-foreground">Conv4</h3>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              A simple 4-layer convolutional network. Each block has a 3×3 conv layer, batch normalization,
              ReLU activation, and 2×2 max pooling. Lightweight and fast — ideal for studying pruning effects in isolation.
            </p>
            <div className="mt-3 flex gap-2 flex-wrap">
              <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">4 conv blocks</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">64 filters each</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">~113K params</span>
            </div>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h3 className="text-sm font-semibold text-foreground">ResNet-12</h3>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              A deeper residual network with 4 residual blocks, each containing 3 conv layers with skip connections.
              Captures more complex features but has significantly more parameters to prune.
            </p>
            <div className="mt-3 flex gap-2 flex-wrap">
              <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">4 residual blocks</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">Skip connections</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">~12.4M params</span>
            </div>
          </div>
        </div>
      </section>

      {/* FSL Algorithms */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
          <GitBranch className="h-5 w-5 text-[hsl(var(--doc-green))]" /> FSL Algorithms
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-5">
            <h3 className="text-sm font-semibold text-foreground">ProtoNet</h3>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Learns an embedding space where classification is done by computing distances to class prototypes
              (mean embeddings of support examples). Simple, elegant, and effective.
            </p>
          </div>
          <div className="rounded-lg border border-border p-5">
            <h3 className="text-sm font-semibold text-foreground">Pretrain + Finetune</h3>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Pre-trains a feature extractor on base classes, then fine-tunes a linear classifier on the
              support set of novel classes. Leverages transfer learning for strong performance.
            </p>
          </div>
        </div>
      </section>

      {/* Datasets */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
          <Database className="h-5 w-5 text-[hsl(var(--doc-orange))]" /> Datasets
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-muted/50">
                <th className="text-left px-4 py-3 font-medium text-foreground">Dataset</th>
                <th className="text-left px-4 py-3 font-medium text-foreground">Domain</th>
                <th className="text-left px-4 py-3 font-medium text-foreground">Classes</th>
                <th className="text-left px-4 py-3 font-medium text-foreground">Images</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-t border-border">
                <td className="px-4 py-3 font-medium text-foreground">MiniImageNet</td>
                <td className="px-4 py-3">General objects</td>
                <td className="px-4 py-3">100 (64/16/20)</td>
                <td className="px-4 py-3">60,000</td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-4 py-3 font-medium text-foreground">CUB-200</td>
                <td className="px-4 py-3">Fine-grained birds</td>
                <td className="px-4 py-3">200 (100/50/50)</td>
                <td className="px-4 py-3">11,788</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground">
          Splits shown as (train/val/test). CUB is also used for cross-domain evaluation
          (trained on MiniImageNet, tested on CUB).
        </p>
      </section>
    </motion.div>
  );
}
