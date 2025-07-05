import { CookingPot, HandPlatter, Sofa, TreePine } from "lucide-react"

export const features = [
  {
    icon: (
      <div
        style={{
          background: "rgba(204, 8, 233, 0.1)",
          color: "#CC08E9",
        }}
        className="rounded-large  p-4 duration-300 hover:scale-110"
      >
        <TreePine size={28} />
      </div>
    ),
    title: "موقع طبيعي بإطلالات خلابة",
    des: "تقع شاليهاتنا في موقع هادئ يلامس جمال الطبيعة ويمنحك شعورًا بالاسترخاء، مع سهولة الوصول إلى الشارع الرئيسي والخدمات الأساسية. حيث تجمع بين الراحة والخصوصية في وسط الطبيعة الساحرة.",
  },
  {
    icon: (
      <div
        style={{
          background: "rgba(140, 67, 255, 0.1)",
          color: "#8C43FF",
        }}
        className="rounded-large  p-4 duration-300 hover:scale-110"
      >
        <HandPlatter size={28} />
      </div>
    ),
    title: "شاليهات بمسابح خاصة وإطلالات مميزة",
    des: "نقدم لك وحدات سكنية مصممة بعناية، مزوّدة بمسابح خاصة وإطلالات رائعة تمنحك تجربة إقامة فاخرة تنسجم مع الطبيعة وتلبي تطلعاتك للراحة والخصوصية.",
  },
  {
    icon: (
      <div
        style={{
          background: "rgba(40, 213, 167, 0.1)",
          color: "#28d5a7",
        }}
        className="rounded-large  p-4 duration-300 hover:scale-110"
      >
        <Sofa size={28} />
      </div>
    ),
    title: "خدمة راقية تُعنى بكافة التفاصيل",
    des: "نحرص على أن تكون تجربتك متكاملة من لحظة الحجز حتى نهاية الإقامة. نُجهّز الشاليه بكل ما تحتاجه، ونولي عناية خاصة بالنظافة وجودة التجهيزات لضمان راحتك ورضاك.",
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
