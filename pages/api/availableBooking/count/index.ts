// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { dataManagerInstance, LIMIT_PER_PAGE } from '../../data/dummyCars'

type Data = {
  count: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    res.status(200).json({ count: Math.floor((dataManagerInstance.getInstance().getAvailableCars().length + LIMIT_PER_PAGE - 1 ) / LIMIT_PER_PAGE)})
}
