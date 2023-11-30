"use client"
import Link from "next/link"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/landing')
  }, [])

  return (
    <>
      <h1>HOME</h1>

    </>
  )
}
