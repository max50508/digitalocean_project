import { S3Client } from '@aws-sdk/client-s3';

export const s3Client = new S3Client({
  endpoint: 'https://sgp1.digitaloceanspaces.com',
  region: 'us-east-1',
  credentials: {
    accessKeyId: 'EZDKOWPA2IBSN5TQZEZO',
    secretAccessKey: '1QVHH9cB7/uOdsgTgryZ4C3PSu+Mk0AH5QNHNO31FzQ',
  },
});
