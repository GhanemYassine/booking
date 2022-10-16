// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Car } from '../../../types/Car'
import { dataManagerInstance, LIMIT_PER_PAGE } from '../data/dummyCars'

type Data = {
  cars: Car[]
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { page , from , to } = req.query;

  const startIndex = parseInt(page as string) * LIMIT_PER_PAGE  

  

  const cars = dataManagerInstance.getInstance()
                                  .getPastCarsBooking()
                                  .filter((e)=>(e.from! >= String(from) && e.to! <= String(to)))
                                  .slice(startIndex,startIndex + LIMIT_PER_PAGE)
  res.status(200).json({cars})
}
