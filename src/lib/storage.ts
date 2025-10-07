import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: process.env.AWS_REGION || "us-east-1",
  endpoint: process.env.S3_ENDPOINT,
  forcePathStyle: !!process.env.S3_ENDPOINT,
  credentials: process.env.AWS_ACCESS_KEY_ID
    ? { accessKeyId: process.env.AWS_ACCESS_KEY_ID!, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY! }
    : undefined,
});

export async function uploadCertificate(
  key: string,
  bytes: Buffer,
  contentType = "application/pdf"
) {
  const bucket = process.env.S3_BUCKET!;
  await s3.send(
    new PutObjectCommand({ Bucket: bucket, Key: key, Body: bytes, ContentType: contentType })
  );
  const endpoint = process.env.PUBLIC_S3_BASE_URL || `https://${bucket}.s3.amazonaws.com`;
  return `${endpoint}/${key}`;
}


