import { iamDownloadVersion } from './packageVersion.js'

const defaultConfig = `
{
  "iamDownloadVersion": "0.0.0",

  // Default storage is on the file system.
  "storage": {
    "type": "file",
    //If this starts with a '.', it is relative to the config file, otherwise it is an absolute path.
    "rootPath": "./"
  }

  /*
  You can also use S3 storage instead of the default file storage.
  "storage": {
    "type": "s3",
    "bucket": "my-bucket",
    "prefix": "iam-data/",
    "region": "us-west-2",
    "endpoint": "https://s3.us-west-2.amazonaws.com", // Optional endpoint if using a specific VPC endpoint
    //Optional auth configuration, see https://github.com/cloud-copilot/iam-download/docs/Authentication.md
    "auth": {
      //The type of authentication to use
    }
  },
  */

  // Optional block, by default all regions returned by ec2:DescribeRegions with 'opt-in-not-required' or 'opted-in' are included
  // "regions": {
  //Optional regions to include, if empty all regions are included
  // "included": ["us-east-1", "us-west-1"],
  //Optional regions to exclude, if empty no regions are excluded. You can use it with included, but that wouldn't make much sense.
  // "excluded": ["us-west-2"]
  // },

  // Optional block, by default all supported services are included
  // "services": {
  //Optional services to include, if empty all supported services are included
  // "included": ["s3", "ec2"],
  //Optional services to exclude, if empty no services are excluded. You can use it with included, but that wouldn't make much sense.
  // "excluded": ["iam"]
  // },

  // Optional block for authentication, see , see https://github.com/cloud-copilot/iam-download/docs/Authentication.md
  // "auth": {
  //  //The type of authentication to use
  // }
}
`

export function getDefaultConfig(): string {
  return defaultConfig.replace('0.0.0', iamDownloadVersion())
}