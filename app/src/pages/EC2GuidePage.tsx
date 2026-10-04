import { Cloud, CheckCircle2, Circle, RotateCcw, ExternalLink } from "lucide-react";
import PageHeading from "@/components/PageHeading";
import TerminalBlock from "@/components/TerminalBlock";
import { ec2Checklist } from "@/data/troubleshooting";
import { useEC2Checklist } from "@/hooks/useEC2Checklist";

export default function EC2GuidePage() {
  const { checked, toggle, reset } = useEC2Checklist();
  const completedCount = checked.length;
  const totalCount = ec2Checklist.length;
  const percentage = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="animate-fade-in">
      <PageHeading
        title="AWS EC2 Setup Guide"
        subtitle="A beginner-friendly checklist to launch an Ubuntu EC2 instance, install Docker and deploy FluxOps to the cloud."
        icon={
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-md">
            <Cloud className="w-6 h-6 text-white" />
          </div>
        }
      />

      {/* Progress overview */}
      <div className="card p-6 mb-8">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-navy-900 dark:text-white">
            Setup Progress
          </h3>
          <span className="text-sm text-navy-500 dark:text-navy-400">
            {completedCount} / {totalCount} completed · {percentage}%
          </span>
        </div>
        <div className="h-2.5 bg-navy-200 dark:bg-navy-800 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <button
          onClick={reset}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-navy-500 hover:text-red-500 dark:text-navy-400 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset checklist
        </button>
      </div>

      {/* Checklist */}
      <div className="space-y-3 mb-8">
        {ec2Checklist.map((item) => {
          const isChecked = checked.includes(item.id);
          return (
            <div key={item.id} className="card p-4 animate-fade-in">
              <button
                onClick={() => toggle(item.id)}
                className="flex items-start gap-3 w-full text-left"
              >
                {isChecked ? (
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                ) : (
                  <Circle className="w-5 h-5 text-navy-300 dark:text-navy-600 flex-shrink-0 mt-0.5" />
                )}
                <div className="flex-1 min-w-0">
                  <span
                    className={`text-sm font-medium block ${
                      isChecked
                        ? "text-navy-400 dark:text-navy-500 line-through"
                        : "text-navy-900 dark:text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              </button>
              {item.command && (
                <div className="mt-3 pl-8">
                  <TerminalBlock command={item.command} label="terminal" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Final URL */}
      <div className="card p-6 bg-gradient-to-br from-emerald-500/5 to-teal-600/5 dark:from-emerald-500/10 dark:to-teal-600/10">
        <h3 className="font-semibold text-navy-900 dark:text-white mb-2">
          Final Application URL
        </h3>
        <p className="text-sm text-navy-600 dark:text-navy-300 mb-4">
          Once your container is running and port 80 is open in your security
          group, open your application in a browser using the public IPv4
          address of your EC2 instance.
        </p>
        <TerminalBlock command="http://YOUR_EC2_PUBLIC_IP" label="browser" showPrompt={false} />
        <div className="mt-4 flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
          <ExternalLink className="w-4 h-4" />
          <span>Replace YOUR_EC2_PUBLIC_IP with your actual EC2 public IPv4 address.</span>
        </div>
      </div>
    </div>
  );
}
