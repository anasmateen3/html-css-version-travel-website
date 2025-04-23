import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, User, Tag, ArrowLeft } from "lucide-react"

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // This would typically come from a database or API
  const blogPosts = {
    "1": {
      title: "Top 10 Hidden Gems in Southeast Asia",
      excerpt: "Discover the lesser-known destinations that offer authentic experiences away from the tourist crowds.",
      content: `
        <p>Southeast Asia has long been a favorite destination for travelers seeking exotic cultures, beautiful landscapes, and affordable adventures. While places like Bangkok, Bali, and Angkor Wat attract millions of visitors each year, the region is home to countless hidden gems that offer equally amazing experiences without the crowds.</p>
        
        <h2>1. Kampot, Cambodia</h2>
        <p>This sleepy riverside town offers a refreshing contrast to the busy streets of Phnom Penh and Siem Reap. Famous for its pepper plantations, colonial architecture, and the nearby Bokor National Park, Kampot is the perfect place to slow down and experience authentic Cambodian life.</p>
        
        <h2>2. Pai, Thailand</h2>
        <p>Nestled in the mountains of northern Thailand, Pai is a bohemian paradise with hot springs, waterfalls, and a laid-back atmosphere. The journey from Chiang Mai involves 762 curves through the mountains, but the destination is well worth the trip.</p>
        
        <h2>3. Hpa-An, Myanmar</h2>
        <p>Surrounded by karst mountains and caves, Hpa-An offers some of the most spectacular landscapes in Southeast Asia. Don't miss the climb up Mt. Zwegabin for sunrise or the boat trip to Sadan Cave.</p>
        
        <h2>4. Con Dao Islands, Vietnam</h2>
        <p>While most travelers head to Phu Quoc or Nha Trang for beach time, the Con Dao archipelago remains relatively untouched. With pristine beaches, coral reefs, and a fascinating history, these islands offer both natural beauty and cultural significance.</p>
        
        <h2>5. Balabac, Philippines</h2>
        <p>Located at the southernmost tip of Palawan, Balabac is home to some of the most beautiful beaches in the Philippines. The journey is challenging, but you'll be rewarded with powdery white sand and crystal-clear waters that you might have entirely to yourself.</p>
        
        <h2>6. Sidemen Valley, Bali, Indonesia</h2>
        <p>While tourists flock to Ubud and the southern beaches, Sidemen Valley offers a glimpse of traditional Balinese life among terraced rice fields and with views of Mount Agung. It's the Bali of decades past, before mass tourism transformed the island.</p>
        
        <h2>7. Hsipaw, Myanmar</h2>
        <p>This small town in Shan State is the starting point for treks into the highlands, where you can stay with local families and experience rural life. The train journey from Mandalay to Hsipaw is an attraction in itself, crossing the famous Gokteik Viaduct.</p>
        
        <h2>8. Phong Nha-Ke Bang National Park, Vietnam</h2>
        <p>Home to the world's largest cave, Son Doong, this national park features an extensive network of caves, underground rivers, and lush forests. While Son Doong requires advance booking and a significant budget, there are many other spectacular caves to explore.</p>
        
        <h2>9. Siquijor, Philippines</h2>
        <p>Known for legends of witchcraft and healing, this small island offers beautiful beaches, waterfalls, and a mystical atmosphere. Don't miss the century-old balete tree or the healing rituals performed by local healers.</p>
        
        <h2>10. Koh Rong Samloem, Cambodia</h2>
        <p>The lesser-known neighbor of Koh Rong, this island paradise features pristine beaches, bioluminescent plankton, and a peaceful atmosphere. With limited development and electricity only available during certain hours, it's a place to truly disconnect.</p>
        
        <p>These hidden gems offer authentic experiences that connect travelers with local cultures, stunning natural landscapes, and the true spirit of Southeast Asia. By venturing beyond the well-trodden tourist path, you'll create memories that last a lifetime and stories that few others can share.</p>
      `,
      image: "/images/blog-post-1.png",
      date: "April 15, 2025",
      author: "Sarah Johnson",
      category: "Travel Tips",
      tags: ["Southeast Asia", "Hidden Gems", "Off the Beaten Path", "Adventure Travel"],
    },
    "2": {
      title: "How to Pack for a Long-Term Adventure",
      excerpt: "Essential packing tips and tricks for those planning extended trips around the world.",
      content: `
        <p>Packing for a long-term adventure is fundamentally different from preparing for a short vacation. When you're going to be on the road for months, every item needs to earn its place in your bag. Here's a comprehensive guide to help you pack efficiently for your extended journey.</p>
        
        <h2>Start with the Right Luggage</h2>
        <p>For long-term travel, a backpack is often more practical than a suitcase. Look for one with a capacity between 40-60 liters, depending on your needs and physical capabilities. Make sure it has a good hip belt to distribute weight, multiple compartments for organization, and is made of durable, water-resistant material.</p>
        
        <h2>Clothing Strategy: Less is More</h2>
        <p>The secret to packing clothing for long-term travel is to bring items that are versatile, durable, and easy to layer. Aim for clothes that:</p>
        <ul>
          <li>Can be mixed and matched to create different outfits</li>
          <li>Are made of quick-drying, wrinkle-resistant fabrics</li>
          <li>Are appropriate for various weather conditions</li>
          <li>Can be dressed up or down depending on the occasion</li>
        </ul>
        
        <p>A good rule of thumb is to pack for one week, regardless of how long you'll be traveling. You'll be washing clothes along the way.</p>
        
        <h2>Essential Clothing Items</h2>
        <ul>
          <li>4-5 t-shirts/tops</li>
          <li>1-2 long-sleeve shirts</li>
          <li>1 light jacket or fleece</li>
          <li>1 rain jacket or poncho</li>
          <li>2 pairs of pants (one lightweight, one heavier)</li>
          <li>1 pair of shorts</li>
          <li>1 dress or nice outfit for special occasions</li>
          <li>5-7 pairs of underwear</li>
          <li>3-5 pairs of socks</li>
          <li>1 swimsuit</li>
          <li>1 hat for sun protection</li>
          <li>Comfortable walking shoes</li>
          <li>Sandals or flip-flops</li>
        </ul>
        
        <h2>Toiletries and Health Items</h2>
        <p>Pack travel-sized toiletries that can be replenished along the way. Don't forget:</p>
        <ul>
          <li>Toothbrush and toothpaste</li>
          <li>Shampoo and conditioner (solid bars save space and last longer)</li>
          <li>Soap or body wash</li>
          <li>Deodorant</li>
          <li>Sunscreen</li>
          <li>Insect repellent</li>
          <li>Basic first-aid kit</li>
          <li>Personal medications</li>
          <li>Hand sanitizer</li>
          <li>Menstrual products if needed</li>
        </ul>
        
        <h2>Technology and Electronics</h2>
        <p>Be selective with electronics to avoid carrying unnecessary weight:</p>
        <ul>
          <li>Smartphone (with local SIM cards or international plan)</li>
          <li>Camera (if your phone camera isn't sufficient)</li>
          <li>E-reader (saves space compared to physical books)</li>
          <li>Laptop or tablet (if necessary for work)</li>
          <li>Universal power adapter</li>
          <li>Portable charger/power bank</li>
          <li>Necessary cables</li>
          <li>Headphones</li>
        </ul>
        
        <h2>Important Documents and Money</h2>
        <ul>
          <li>Passport and visa documents</li>
          <li>Driver's license or international driving permit</li>
          <li>Travel insurance information</li>
          <li>Vaccination records</li>
          <li>Credit and debit cards (from different networks)</li>
          <li>Some local currency and emergency USD</li>
          <li>Digital and physical copies of important documents</li>
        </ul>
        
        <h2>Miscellaneous Essentials</h2>
        <ul>
          <li>Microfiber towel (quick-drying and compact)</li>
          <li>Sleep mask and earplugs</li>
          <li>Padlock for hostel lockers</li>
          <li>Reusable water bottle</li>
          <li>Packing cubes for organization</li>
          <li>Laundry bag and travel detergent</li>
          <li>Notebook and pen</li>
          <li>Basic sewing kit for repairs</li>
        </ul>
        
        <h2>Packing Tips and Tricks</h2>
        <ul>
          <li>Roll clothes instead of folding to save space and reduce wrinkles</li>
          <li>Use packing cubes to keep items organized and compressed</li>
          <li>Store liquids in leak-proof containers and place them in a sealed bag</li>
          <li>Wear your bulkiest items during transit to save space in your bag</li>
          <li>Pack heavier items closer to your back for better weight distribution</li>
          <li>Leave some empty space for souvenirs and items you'll acquire along the way</li>
        </ul>
        
        <h2>What to Leave Behind</h2>
        <p>Sometimes what you don't pack is as important as what you do:</p>
        <ul>
          <li>Multiple pairs of jeans (heavy, slow to dry)</li>
          <li>Excessive toiletries (most can be purchased anywhere)</li>
          <li>Too many shoes</li>
          <li>Valuable jewelry or sentimental items</li>
          <li>Full-sized towels</li>
          <li>Physical books (except perhaps a guidebook)</li>
        </ul>
        
        <p>Remember, the key to successful long-term travel is mobility and adaptability. You can always purchase items you need along the way, and you'll likely find that you need less than you think. Happy travels!</p>
      `,
      image: "/images/blog-post-2.png",
      date: "April 10, 2025",
      author: "Michael Chen",
      category: "Travel Tips",
      tags: ["Packing Tips", "Long-Term Travel", "Backpacking", "Travel Gear"],
    },
    "3": {
      title: "Sustainable Travel: Reducing Your Carbon Footprint",
      excerpt: "Practical ways to make your travels more environmentally friendly without sacrificing experiences.",
      content: `
        <p>As awareness of climate change and environmental issues grows, many travelers are looking for ways to explore the world while minimizing their negative impact. Sustainable travel isn't about giving up the joy of discovery—it's about making thoughtful choices that preserve destinations for future generations. Here's how you can reduce your carbon footprint while still enjoying meaningful travel experiences.</p>
        
        <h2>Choose Eco-Friendly Transportation</h2>
        <p>Transportation typically accounts for the largest portion of a trip's carbon footprint, especially air travel. Consider these alternatives:</p>
        <ul>
          <li><strong>Take fewer, longer trips</strong> instead of multiple short getaways to reduce the number of flights you take annually.</li>
          <li><strong>Travel by train</strong> when possible, as trains generally produce significantly fewer emissions than planes.</li>
          <li><strong>Consider direct flights</strong>, as takeoffs and landings create the most emissions.</li>
          <li><strong>Use public transportation, bike, or walk</strong> at your destination rather than renting a car or taking taxis.</li>
          <li><strong>If you must fly</strong>, consider purchasing carbon offsets from reputable organizations that fund renewable energy or reforestation projects.</li>
        </ul>
        
        <h2>Select Sustainable Accommodations</h2>
        <p>Where you stay can make a significant difference in your environmental impact:</p>
        <ul>
          <li><strong>Look for eco-certified hotels</strong> that have implemented water and energy conservation measures.</li>
          <li><strong>Stay in locally-owned accommodations</strong> to ensure your money benefits the local economy.</li>
          <li><strong>Consider alternative lodging options</strong> like homestays, which often have a lower environmental impact than large resorts.</li>
          <li><strong>Reuse towels and linens</strong> during your stay, and turn off lights, air conditioning, and heating when you leave your room.</li>
        </ul>
        
        <h2>Minimize Waste While Traveling</h2>
        <p>Reducing waste is one of the simplest ways to travel more sustainably:</p>
        <ul>
          <li><strong>Pack a reusable water bottle</strong> and water purification method to avoid buying plastic bottles.</li>
          <li><strong>Bring your own toiletries</strong> in reusable containers rather than using hotel mini bottles.</li>
          <li><strong>Carry a reusable shopping bag, utensils, and food containers</strong> for takeaway meals and market purchases.</li>
          <li><strong>Decline unnecessary single-use items</strong> like straws, bags, and excessive packaging.</li>
          <li><strong>Learn local recycling practices</strong> and dispose of waste appropriately.</li>
        </ul>
        
        <h2>Eat Sustainably</h2>
        <p>Food choices can significantly impact your carbon footprint and support local communities:</p>
        <ul>
          <li><strong>Choose locally-owned restaurants</strong> that source ingredients from nearby farms and markets.</li>
          <li><strong>Try plant-based meals</strong> more often, as meat production generally has a higher environmental impact.</li>
          <li><strong>Visit farmers' markets</strong> to purchase local, seasonal produce directly from growers.</li>
          <li><strong>Be mindful of food waste</strong> by ordering only what you can eat or saving leftovers for later.</li>
          <li><strong>Avoid over-packaged foods</strong> and opt for fresh, unprocessed options when possible.</li>
        </ul>
        
        <h2>Support Conservation Through Activities</h2>
        <p>The activities you choose can either harm or help local environments:</p>
        <ul>
          <li><strong>Research tour operators</strong> to ensure they follow ethical and sustainable practices.</li>
          <li><strong>Participate in conservation activities</strong> like beach cleanups or wildlife monitoring programs.</li>
          <li><strong>Choose activities that have minimal environmental impact</strong>, such as hiking, snorkeling, or cultural experiences.</li>
          <li><strong>Avoid attractions that exploit animals</strong> or damage natural habitats.</li>
          <li><strong>Stay on designated trails</strong> when hiking to prevent erosion and habitat destruction.</li>
        </ul>
        
        <h2>Respect Local Communities</h2>
        <p>Sustainable travel isn't just about the environment—it's also about respecting the people who call your destination home:</p>
        <ul>
          <li><strong>Learn about local customs and traditions</strong> before you arrive, and follow cultural norms regarding dress and behavior.</li>
          <li><strong>Ask permission before taking photos</strong> of people, especially in more traditional communities.</li>
          <li><strong>Learn a few phrases in the local language</strong> to show respect and enhance your interactions.</li>
          <li><strong>Support local artisans and businesses</strong> by purchasing souvenirs and services directly from them rather than from large chains or importers.</li>
          <li><strong>Be mindful of your resource consumption</strong> in places where water or electricity may be scarce for local residents.</li>
        </ul>
        
        <h2>Travel with Intention</h2>
        <p>Perhaps the most important aspect of sustainable travel is approaching it with mindfulness and purpose:</p>
        <ul>
          <li><strong>Quality over quantity</strong> - focus on deeper experiences in fewer places rather than rushing through a checklist of destinations.</li>
          <li><strong>Research and plan ahead</strong> to make informed choices about transportation, accommodation, and activities.</li>
          <li><strong>Travel during shoulder seasons</strong> to reduce the strain of overtourism on popular destinations.</li>
          <li><strong>Share your sustainable travel experiences</strong> to inspire others to make more environmentally conscious choices.</li>
        </ul>
        
        <p>Remember that sustainable travel is not about perfection—it's about making better choices where you can. Even small changes in how you travel can collectively make a significant positive impact on our planet and its communities. By traveling more sustainably, you're helping to ensure that the beautiful destinations we love today will be there for future generations to enjoy.</p>
      `,
      image: "/images/blog-post-3.png",
      date: "April 5, 2025",
      author: "Emma Rodriguez",
      category: "Sustainable Travel",
      tags: ["Eco-Friendly Travel", "Carbon Footprint", "Responsible Tourism", "Green Travel"],
    },
  }

  const post = blogPosts[params.id as keyof typeof blogPosts]

  if (!post) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="mb-6">The blog post you're looking for doesn't exist.</p>
        <Button asChild className="rounded-full bg-orange-500 hover:bg-orange-600">
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container py-12">
        <Link href="/blog" className="flex items-center gap-2 text-orange-500 hover:underline mb-8">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to all articles</span>
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Tag className="h-4 w-4" />
                <span>{post.category}</span>
              </div>
            </div>
          </div>

          <div className="mb-8 rounded-2xl overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg?height=500&width=1000"}
              alt={post.title}
              width={1000}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-bold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-bold mb-4">Share this article</h3>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" className="rounded-full">
                Facebook
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                Twitter
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                LinkedIn
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
