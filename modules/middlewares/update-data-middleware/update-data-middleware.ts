import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class UpdateDataMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const username = req.body.username;
    if (!username) {
      res.send("Please enter a valid username");
    }


    next();
  }
}
