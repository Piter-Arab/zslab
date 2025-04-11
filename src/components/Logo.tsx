import React from 'react';
import Link from 'next/link';

export default function Logo({ link = false }: { link?: boolean }) {
  return link ? (
    <Link href="/">
      <span className="text-primary">Zs</span>
      <span className="text-secondary">Lab</span>
    </Link>
  ) : (
    <div>
      <span className="text-primary">Zs</span>
      <span className="text-secondary">Lab</span>
    </div>
  );
}
