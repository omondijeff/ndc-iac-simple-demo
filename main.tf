provider "aws" {
  region = var.region  # Use the variable for the region
}

resource "aws_s3_bucket" "b" {
  bucket = "ndc-demo-live"
 
}

resource "aws_s3_bucket_website_configuration" "website" {
  bucket = aws_s3_bucket.b.id

  index_document {
    suffix = "index.html"
  }
  
  error_document {
    key = "error.html"
  }
}



