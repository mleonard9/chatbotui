import { createClient } from "@/lib/supabase/middleware"
import { i18nRouter } from "next-i18n-router"
import { NextResponse, type NextRequest } from "next/server"
import i18nConfig from "./i18nConfig"

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the path is the root or a bare locale root (e.g., /en, /es)
  const isRoot =
    pathname === "/" ||
    i18nConfig.locales.some(
      (locale: string) => pathname === `/${locale}`
    )

  if (isRoot) {
    // Determine locale
    const locale =
      pathname === "/"
        ? i18nConfig.defaultLocale
        : pathname.split("/")[1]

    try {
      const { supabase } = createClient(request)
      const {
        data: { session }
      } = await supabase.auth.getSession()

      if (session) {
        return NextResponse.redirect(
          new URL(`/${locale}/chat`, request.url)
        )
      }
    } catch (e) {
      // If auth check fails, redirect to login as a safe default
    }

    return NextResponse.redirect(
      new URL(`/${locale}/login`, request.url)
    )
  }

  // For all other routes, run i18n routing
  const i18nResult = i18nRouter(request, i18nConfig)
  if (i18nResult) return i18nResult

  return NextResponse.next()
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)"
}

