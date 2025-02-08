// export const testimonials = [
//   {
//     src: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
//     rate: 5,
//     name: "منير مزيد",
//     content:
//       "        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit praesentium nostrum officia porro est qui quidem facere distinctio repellat dignissimos totam placeat, facilis nemo dolor ut optio a laboriosam quae? ",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
//     rate: 5,
//     name: "منير مزيد",
//     content:
//       "        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit praesentium nostrum officia porro est qui quidem facere distinctio repellat dignissimos totam placeat, facilis nemo dolor ut optio a laboriosam quae? ",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
//     rate: 4,
//     name: "منير مزيد",
//     content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo modi aut suscipit voluptas? Assumenda nemo id quae rem perferendis beatae cupiditate corporis eos dicta porro, libero quibusdam corrupti tempore quo fugit, ipsam cum quasi illum nisi non vitae praesentium. Exercitationem! `,
//   },
//   {
//     src: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
//     rate: 5,
//     name: "منير مزيد",
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, perferendis!",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
//     rate: 5,
//     name: "منير مزيد",
//     content:
//       "   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos nostrum, animi, incidunt non cupiditate quis autem obcaecati eaque nulla pariatur vel eligendi enim aspernatur! Adipisci natus, odio sed, quis ad deserunt maxime tenetur sapiente quaerat veniam facilis sunt perferendis accusantium! Non vero, rem enim eius omnis error consequatur earum? Fugiat blanditiis doloremque facere veniam cupiditate aperiam minus quibusdam, inventore odio non reiciendis accusantium iusto illum dignissimos dolores nam doloribus modi repellendus beatae qui error tempora placeat excepturi! Minus animi libero praesentium ut omnis nemo autem dolores aut! Dicta illo, aperiam deserunt voluptatibus assumenda earum aliquid autem, dignissimos nesciunt amet quod! ",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
//     rate: 2,
//     name: "منير مزيد",
//     content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo modi aut suscipit voluptas? Assumenda nemo id quae rem perferendis beatae cupiditate corporis eos dicta porro, libero quibusdam corrupti tempore quo fugit, ipsam cum quasi illum nisi non vitae praesentium. Exercitationem! `,
//   },
//   {
//     src: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
//     rate: 5,
//     name: "منير مزيد",
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, perferendis, adipisicing elit. Alias, perferendis!",
//   },
// ]

import getUnitsData from "@/api/services/get-units-data";

export const testimonials = getUnitsData().flatMap((item) =>
  item.ratings.slice(0, 2).map((rating) => rating),
)