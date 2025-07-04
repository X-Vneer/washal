import { CookingPot, HandPlatter, Sofa, TreePine } from "lucide-react"

export const features = [
  {
    icon: (
      <div
        style={{
          background: "rgba(204, 8, 233, 0.1)",
          color: "#CC08E9",
        }}
        className="rounded-large  p-4 duration-300 hover:scale-110">
        <Sofa size={28} />
      </div>
    ),
    title: "موقع استراتيجي في قلب المدينة",
    des: "موقعنا يخلّيك قريب من كل شي: أماكن سياحية، كافيهات، ومولات… ولا تشيل هم المشاوير أبدًا."
    
  },
  {
    icon: (
      <div
        style={{
          background: "rgba(140, 67, 255, 0.1)",
          color: "#8C43FF",
        }}
        className="rounded-large  p-4 duration-300 hover:scale-110">
        <HandPlatter size={28} />
      </div>
    ),
    title: "خدمة استثنائية تلبي جميع احتياجاتك",
    des: "من أول ما تدخل لين تطلع، كل شي مدروس ومتعوب عليه... خدمة سعودية أصيلة تهتم بأدق التفاصيل علشان تجربتك تكون مثل ما تحب وأكثر."
    
  },
  {
    icon: (
      <div
        style={{
          background: "rgba(40, 213, 167, 0.1)",
          color: "#28d5a7",
        }}
        className="rounded-large  p-4 duration-300 hover:scale-110">
        <TreePine size={28} />
      </div>
    ),
    title: "تجربة ترفيهية شاملة لكافة الأعمار",
    des: "ما راح تمل أبد، مرافق وأنشطة ترفيهية تناسب كل الأعمار، من اللعب للراحة… كل عائلتك بتنبسط"
    
  },
  // {
  //   icon: (
  //     <div
  //       style={{
  //         background: "rgba(249, 184, 81, 0.1)",
  //         color: "#f9b851",
  //       }}
  //       className="rounded-large  p-4 duration-300 hover:scale-110">
  //       <CookingPot size={28} />
  //     </div>
  //   ),
  //   title: "تناول أشهى الأطباق من مختلف أنحاء العالم",
  //   des: "استمتع بتجربة تذوق فريدة مع مجموعة متنوعة من المطاعم والمطابخ العالمية المتوفرة داخل الفندق.",
  // },
]
