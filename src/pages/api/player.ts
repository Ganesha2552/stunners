import type { NextApiRequest, NextApiResponse } from 'next';

import connectDB from '../../lib/db';
import Player from '../../model/Player';

// Connect to the database

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        // Retrieve all players
        const players = await Player.find();
        res.status(200).json(players);
      } catch (error) {
        res.status(500).json({ message: 'Failed to fetch players' });
      }
      break;

    case 'POST':
      try {
        // Create a new player
        const player = new Player(req.body);
        await player.save();
        res.status(201).json(player);
      } catch (error) {
        res.status(500).json({ message: 'Failed to create player' });
      }
      break;

    case 'PUT':
      try {
        const { playerId } = req.query;

        // Update player details
        const updatedPlayer = await Player.findByIdAndUpdate(
          playerId,
          req.body,
          { new: true },
        );

        if (!updatedPlayer) {
          res.status(404).json({ message: 'Player not found' });
          return;
        }

        res.status(200).json(updatedPlayer);
      } catch (error) {
        res.status(500).json({ message: 'Failed to update player' });
      }
      break;

    default:
      res.status(405).json({ message: 'Method Not Allowed' });
      break;
  }
};
export default connectDB(handler);
