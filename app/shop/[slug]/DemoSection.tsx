"use client";

const DemoSection = ({
  demos,
}: {
  demos: {
    url?: string;
    title?: string;
    note?: string;
  }[];
}) => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Demos</h2>
      <div className="space-y-4">
        {demos.map((demo, idx) => (
          <div key={idx} className="bg-secondary p-4 rounded-md">
            <h3 className="text-lg font-semibold">{demo.title}</h3>
            {demo.url && (
              <a
                href={demo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                View Demo
              </a>
            )}
            {demo.note && <p className="text-muted-foreground">{demo.note}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default DemoSection;
