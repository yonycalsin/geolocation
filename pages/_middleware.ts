import { NextResponse } from 'next/server'
import countries from '~/assets/data/countries.json'

export async function middleware(req: any) {
  const { nextUrl: url, geo } = req

  const forwardedForIp = req.headers.get('x-forwarded-for')?.split(',')[0]

  const realIp = req.headers.get('x-forwarded-for') ? req.headers.get('x-forwarded-for')!.split(',')[0] : '127.0.0.1'

  const ip = forwardedForIp || realIp

  const country = geo.country || 'US'

  const city = geo.city || 'San Francisco'

  const region = geo.region || 'CA'

  const countryInfo = countries.find(x => x.cca2 === country) as any

  const currencyCode = Object.keys(countryInfo.currencies)[0]

  const currency = countryInfo.currencies[currencyCode]

  const languages = Object.values(countryInfo.languages).join(', ')

  url.searchParams.set('country', country)

  url.searchParams.set('city', city)

  url.searchParams.set('region', region)

  url.searchParams.set('currencyCode', currencyCode)

  url.searchParams.set('currencySymbol', currency.symbol)

  url.searchParams.set('name', currency.name)

  url.searchParams.set('languages', languages)

  url.searchParams.set('ip', ip)

  return NextResponse.rewrite(url)
}
