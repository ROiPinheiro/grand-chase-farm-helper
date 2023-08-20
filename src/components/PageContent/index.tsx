import * as React from "react";

function PageContent({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col w-full gap-2 p-6">{children}</div>;
}

export default PageContent;
