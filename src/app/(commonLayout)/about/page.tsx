
import React from 'react'
export const dynamic = 'force-dynamic'

export default async function AboutPage() {

  //for simulating load time
await new Promise((resolve)=> setTimeout(resolve,4000))

//for simulating error
//throw new error("something went wrong")
  return (
    <div>This is AboutPage coming from app</div>
  )
}
