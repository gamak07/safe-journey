"use client";

import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface PortalProps {
  children: React.ReactNode;
}

export default function Portal({ children }: PortalProps) {
  const [mounted, setMounted] = useState(false);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
    setPortalRoot(document.getElementById("portal-root"));
  }, []);

  if (!mounted || !portalRoot) return null;

  return ReactDOM.createPortal(children, portalRoot);
}
