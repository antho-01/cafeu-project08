import Link from 'next/link'
import React from 'react'

export default function Blog() {
  return (
    <div>
      <Link href="/blog/david">David</Link><br />
      <Link href="/blog/tom">Tom</Link>
    </div>
  )
}
