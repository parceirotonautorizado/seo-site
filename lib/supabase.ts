import { createClient } from "@supabase/supabase-js"

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function getPage(city: string, neighborhood?: string) {
  const query = supabase.from("pages").select("*")

  if (neighborhood) {
    const { data, error } = await query
      .eq("city", city)
      .eq("neighborhood", neighborhood)
      .single()

    return { data, error }
  }

  const { data, error } = await query
    .eq("city", city)
    .single()

  return { data, error }
}