import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { env } from '@/env'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

const API_URL = env.API_URL;
export default function CreateBlogFormServer() {
  const createBlog = async (formData:FormData) => {
    "use server";
    // console.log(formData.get("title"))
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const tags = formData.get("tags") as string;



    const blogData = {
      title,
      content,
      tags:tags.split(",").map((item)=>item.trim()).filter(item=>item!=""), 
    };

    const cookieStore = await cookies()

    // console.log(JSON.stringify(blogData));
    const res = await fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieStore.toString(),
        
      },
      body: JSON.stringify(blogData),
    });
    // console.log(res)
    if (res.status) {
      redirect("/dashboard/create-blog?success");
    }

  }
  return (
    <Card className='max-w-2xl mx-auto'>
      <CardHeader>
        <CardTitle>Create Blog</CardTitle>
        <CardDescription>You Can Write Your Own Blog Here</CardDescription>
      </CardHeader>
      <CardContent>
        <form id='blog-form' action={createBlog}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor='title'>Title</FieldLabel>
              <Input id='title' type='text' name='title' placeholder='Blog Title' required/>
            </Field>

                 <Field>
              <FieldLabel htmlFor='content'>Content</FieldLabel>
              <Textarea
                id='content'
                name='content'
                placeholder='Write your blog'
                required
              />
            </Field>

                 <Field>
              <FieldLabel htmlFor='tags'>Tags</FieldLabel>
              <Input type='text' id='tags' name='tags' placeholder='nextJs, Web'/>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Button form='blog-form' type='submit' className='w-full'>Submit</Button>
      </CardFooter>
    </Card>
  )
}
