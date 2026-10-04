import { Container, AlertTriangle, ListChecks } from "lucide-react";
import PageHeading from "@/components/PageHeading";
import TerminalBlock from "@/components/TerminalBlock";
import TroubleshootingAccordion from "@/components/TroubleshootingAccordion";
import { dockerGuideSteps, dockerTroubleshooting } from "@/data/troubleshooting";

export default function DockerGuidePage() {
  return (
    <div className="animate-fade-in">
      <PageHeading
        title="Docker Deployment Guide"
        subtitle="Follow these steps to deploy FluxOps from a GitHub repository to an Ubuntu AWS EC2 instance using Docker and Nginx."
        icon={
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-md">
            <Container className="w-6 h-6 text-white" />
          </div>
        }
      />

      {/* Steps */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <ListChecks className="w-5 h-5 text-blue-500" />
          <h2 className="text-2xl font-bold text-navy-900 dark:text-white">
            Step-by-Step Deployment
          </h2>
        </div>
        <div className="space-y-4">
          {dockerGuideSteps.map((step) => (
            <div
              key={step.number}
              className="card p-5 animate-fade-in"
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">
                  {step.number}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-navy-900 dark:text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-navy-600 dark:text-navy-300 mb-3">
                    {step.description}
                  </p>
                  {step.command && (
                    <TerminalBlock command={step.command} label={`step ${step.number}`} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Troubleshooting */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          <h2 className="text-2xl font-bold text-navy-900 dark:text-white">
            Troubleshooting
          </h2>
        </div>
        <p className="text-sm text-navy-600 dark:text-navy-300 mb-6">
          Common deployment errors and their solutions. Click any item to expand
          it.
        </p>
        <div className="space-y-3">
          {dockerTroubleshooting.map((item) => (
            <TroubleshootingAccordion key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
