variable "region" {
  description = "The AWS region where resources will be created."
  type        = string
  default     = "us-east-1"
}

variable "bucket_name" {
  description = "The name of the S3 bucket for the React app."
  type        = string
  default     = "ndc-demo-live"
}

variable "index_document" {
  description = "The name of the index document for the website."
  default     = "index.html"
}

variable "error_document" {
  description = "The name of the error document for the website."
  default     = "error.html"
}
