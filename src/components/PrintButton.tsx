"use client";

import { Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <button className="button button-primary print-button" type="button" onClick={() => window.print()}>
      <Printer size={18} aria-hidden="true" /> Print or save as PDF
    </button>
  );
}
