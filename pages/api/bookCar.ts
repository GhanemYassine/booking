import type { NextApiRequest, NextApiResponse } from 'next'
import { dataManagerInstance } from './data/dummyCars'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
   from, 
   to, 
   idCar
  } = req.query


  dataManagerInstance.getInstance().bookCar(parseInt(String(idCar)),String(from),String(to))
  
  res.status(200).send({result : "ok"})
}