import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

export interface ServiceFeature {
  title: string
  description: string
}

export interface ServiceCityPageProps {
  serviceName: string
  cityName: string
  heroTitle: string
  heroDescription: string
  introTitle: string
  introContent: string[]
  features: ServiceFeature[]
  whyChooseUsContent: string[]
  ctaTitle: string
  ctaDescription: string
  heroImage: string
  secondaryImage: string
}

export function ServiceCityPage({
  serviceName,
  cityName,
  heroTitle,
  heroDescription,
  introTitle,
  introContent,
  features,
  whyChooseUsContent,
  ctaTitle,
  ctaDescription,
  heroImage = "/service-bathroom-1.webp",
  secondaryImage = "/service-bathroom-2.webp",
}: ServiceCityPageProps) {
  return (
    <main className="min-h-screen bg-zinc-900 text-white pt-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              {heroTitle}
              <span className="text-orange-500">.</span>
            </h1>
            <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
              {heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md transition-colors text-center"
              >
                Begär offert
              </Link>
              <Link
                href="tel:073 181 89 08"
                className="bg-transparent hover:bg-zinc-800 text-white font-bold py-3 px-8 border border-zinc-600 hover:border-zinc-500 rounded-md transition-colors text-center"
              >
                Ring 073 181 89 08
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <Image
              src={heroImage || "/placeholder.svg"}
              alt={`${serviceName} i ${cityName}`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-zinc-950 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {introTitle}
              <span className="text-orange-500">.</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mb-8"></div>
            <div className="space-y-4 text-zinc-300 leading-relaxed">
              {introContent.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features/Services Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-8">
              Våra tjänster inom {serviceName.toLowerCase()}
              <span className="text-orange-500">.</span>
            </h2>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-zinc-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
            <Image
              src={secondaryImage || "/placeholder.svg"}
              alt={`Professionell ${serviceName.toLowerCase()} i ${cityName}`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-zinc-950 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Varför välja oss för {serviceName.toLowerCase()} i {cityName}?
              <span className="text-orange-500">.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {whyChooseUsContent.map((item, index) => (
                <div key={index} className="bg-zinc-800 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-xl font-bold">
                      {index + 1}
                    </div>
                    <p className="text-zinc-300 leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-zinc-800 rounded-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Behörighet & Kvalitet
            <span className="text-orange-500">.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-3 text-orange-500">Behörig Våtrum</h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Vi uppfyller alla de krav som Byggkeramikrådet tillsammans med Säker Vatten ställer för att få bygga behöriga våtrum. Vi har plattsättning som etablerad och fortlöpande verksamhet och kan därför garantera våra kunder att alla plattsättare har den utbildning och erfarenhet som krävs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3 text-orange-500">Lång Erfarenhet</h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Med över 20 års erfarenhet i byggbranschen är vi din pålitliga partner för alla typer av bygg- och renoveringsprojekt i {cityName}. Vi levererar alltid högsta kvalitet och arbetar enligt branschens normer och föreskrifter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {ctaTitle}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="bg-white hover:bg-zinc-100 text-zinc-900 font-bold py-3 px-8 rounded-md transition-colors"
            >
              Begär offert
            </Link>
            <Link
              href="tel:073 181 89 08"
              className="bg-transparent hover:bg-orange-600 text-white font-bold py-3 px-8 border-2 border-white rounded-md transition-colors"
            >
              Ring 073 181 89 08
            </Link>
          </div>
        </div>
      </section>

      {/* Other Cities Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Vi erbjuder {serviceName.toLowerCase()} i fler städer
          <span className="text-orange-500">.</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {[
            { name: "Eskilstuna", slug: "eskilstuna" },
            { name: "Strängnäs", slug: "strangnas" },
            { name: "Västerås", slug: "vasteras" },
            { name: "Katrineholm", slug: "katrineholm" },
            { name: "Torshälla", slug: "torshalla" },
            { name: "Köping", slug: "koping" },
            { name: "Arboga", slug: "arboga" },
          ].map((city) => {
            // Map service names to URL slugs
            const serviceSlugMap: Record<string, string> = {
              "Badrumsrenovering": "badrumsrenovering",
              "Plattsättning": "plattsattning",
              "Köksrenovering": "koksrenovering",
              "Bygg & Snickeri": "bygg-snickeri",
            }
            const serviceSlug = serviceSlugMap[serviceName] || serviceName.toLowerCase()
            
            return (
              <Link
                key={city.slug}
                href={`/${serviceSlug}/${city.slug}`}
                className={`px-4 py-2 rounded-md transition-colors ${
                  city.name === cityName
                    ? "bg-orange-500 text-white"
                    : "bg-zinc-800 hover:bg-zinc-700 text-white"
                }`}
              >
                {city.name}
              </Link>
            )
          })}
        </div>
      </section>
    </main>
  )
}
