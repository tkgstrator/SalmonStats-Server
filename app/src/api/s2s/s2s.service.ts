import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { createHash } from 'crypto';
import { S2SResultDTO } from './s2s.dto';

function integer(value?: number): number {
  return value | 0;
}

@Injectable()
export class S2SService {
  async create(naIdToken: string, timestamp: number): Promise<S2SResultDTO> {
    let hashBase: Array<string> = naIdToken.split('');
    hashBase[timestamp % 4] = hashBase[timestamp % 5];
    hashBase[(integer(timestamp / 8) % 6) + 2] = hashBase[(timestamp % 3) * 2];
    hashBase[integer(timestamp / 5) % 8] =
      hashBase[integer(timestamp / 30 + 5) % 5];

    const hashString = Buffer.from(hashBase.join(''), 'utf-8');
    const shasum = createHash('sha1');
    const hash = shasum.update(hashString).digest('base64');

    let response: S2SResultDTO = new S2SResultDTO();
    response.hash = hash;
    response.naIdToken = naIdToken;
    response.timestamp = timestamp;
    return response;
  }

  async throw() {
    throw new HttpException(
      'Method Not Allowed',
      HttpStatus.METHOD_NOT_ALLOWED,
    );
  }
}
