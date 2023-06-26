import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';

import { AppConfig } from '@/utils/AppConfig';

const connectDB =
  (handler: any) => async (req: NextApiRequest, res: NextApiResponse) => {
    if (mongoose.connections[0]?.readyState) {
      return handler(req, res);
    }

    await mongoose.connect(`${AppConfig.MongoUrl}`);
    return handler(req, res);
  };

export default connectDB;
