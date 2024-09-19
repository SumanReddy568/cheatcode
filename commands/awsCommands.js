window.awsCommands = [
    { command: 'aws configure', description: 'Sets up AWS CLI with access keys, default region, and output format' },
    { command: 'aws s3 ls', description: 'Lists all buckets in S3 or the contents of a specific bucket' },
    { command: 'aws s3 cp', description: 'Copies files to or from S3' },
    { command: 'aws s3 rm', description: 'Deletes files or objects from an S3 bucket' },
    { command: 'aws ec2 describe-instances', description: 'Lists all running EC2 instances' },
    { command: 'aws ec2 start-instances --instance-ids <instance_id>', description: 'Starts an EC2 instance' },
    { command: 'aws ec2 stop-instances --instance-ids <instance_id>', description: 'Stops an EC2 instance' },
    { command: 'aws ec2 reboot-instances --instance-ids <instance_id>', description: 'Reboots an EC2 instance' },
    { command: 'aws ec2 terminate-instances --instance-ids <instance_id>', description: 'Terminates an EC2 instance' },
    { command: 'aws ec2 create-key-pair --key-name <key_name>', description: 'Creates a new key pair for EC2 instances' },
    { command: 'aws iam list-users', description: 'Lists all IAM users' },
    { command: 'aws iam create-user --user-name <username>', description: 'Creates a new IAM user' },
    { command: 'aws iam attach-user-policy --user-name <username> --policy-arn <policy_arn>', description: 'Attaches a policy to an IAM user' },
    { command: 'aws rds describe-db-instances', description: 'Lists all RDS database instances' },
    { command: 'aws rds start-db-instance --db-instance-identifier <db_instance_id>', description: 'Starts an RDS database instance' },
    { command: 'aws rds stop-db-instance --db-instance-identifier <db_instance_id>', description: 'Stops an RDS database instance' },
    { command: 'aws rds create-db-instance', description: 'Creates a new RDS database instance' },
    { command: 'aws dynamodb list-tables', description: 'Lists all DynamoDB tables' },
    { command: 'aws dynamodb create-table --table-name <table_name>', description: 'Creates a new DynamoDB table' },
    { command: 'aws lambda list-functions', description: 'Lists all Lambda functions' },
    { command: 'aws lambda create-function', description: 'Creates a new Lambda function' },
    { command: 'aws cloudwatch describe-alarms', description: 'Lists all CloudWatch alarms' },
    { command: 'aws cloudformation describe-stacks', description: 'Lists all CloudFormation stacks' },
    { command: 'aws cloudformation create-stack', description: 'Creates a new CloudFormation stack' },
    { command: 'aws autoscaling describe-auto-scaling-groups', description: 'Lists all Auto Scaling groups' },
    { command: 'aws ecs list-clusters', description: 'Lists all ECS clusters' },
    { command: 'aws eks list-clusters', description: 'Lists all EKS clusters' },
    { command: 'aws elb describe-load-balancers', description: 'Lists all Elastic Load Balancers' },
    { command: 'aws route53 list-hosted-zones', description: 'Lists all Route 53 hosted zones' },
    { command: 'aws route53 create-hosted-zone', description: 'Creates a new Route 53 hosted zone' },
    { command: 'aws cloudfront list-distributions', description: 'Lists all CloudFront distributions' },
    { command: 'aws cloudfront create-distribution', description: 'Creates a new CloudFront distribution' },
    { command: 'aws sns list-topics', description: 'Lists all SNS topics' },
    { command: 'aws sns create-topic --name <topic_name>', description: 'Creates a new SNS topic' },
    { command: 'aws sqs list-queues', description: 'Lists all SQS queues' },
    { command: 'aws sqs create-queue --queue-name <queue_name>', description: 'Creates a new SQS queue' }
];