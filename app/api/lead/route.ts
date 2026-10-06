import { NextResponse } 
from "next/server"

export async function 
POST(request: Request) {
  try {
    const body = await 
request.json()

    await fetch(
      
"https://script.google.com/macros/s/AKfycbxOuS8bVklQwtXgvdc1ewqptyeBTfv_uYUZxJGPnKVXKbaCYR9kVwXHXU9rbpO-sF8X/exec",
      {
        method: "POST",

        headers: {
          "Content-Type":
            
"application/json",
        },

        body: 
JSON.stringify(body),
      }
    )

    return 
NextResponse.json({
      success: true,
    })
  } catch (error) {
    console.error(error)

    return 
NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    )
  }
}
