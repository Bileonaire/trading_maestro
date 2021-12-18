// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { useRouter } from "next/router";

export default function helloAPI(req, res) {
  console.log(req.query) // queryparams
  res.status(200).json({ name: 'John Doe' })
}
