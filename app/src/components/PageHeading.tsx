interface PageHeadingProps {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
}

export default function PageHeading({
  title,
  subtitle,
  icon,
}: PageHeadingProps) {
  return (
    <div className="mb-8 animate-slide-up">
      {icon && <div className="mb-4">{icon}</div>}
      <h1 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-2">
        {title}
      </h1>
      <p className="text-navy-600 dark:text-navy-300 text-base md:text-lg max-w-2xl">
        {subtitle}
      </p>
    </div>
  );
}
