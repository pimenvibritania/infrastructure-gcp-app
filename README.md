# SRE

## Provisioning Infrastructure
Please refer [this Repository](https://gitlab.com/pimenvibritania/sre-infra) documentation to provisioning infrastructure!


## Branching Model & Pipelines
We will use branching model like this:
![Branching](branching.svg)


| Role | Action     | Trigger                |
| :-------- | :------- | :------------------------- |
| Developer | Merge to `dev` | Will trigger `dev` pipeline |
| Developer | Merge to `main` | - |
| Developer | Push to `dev` | `DENIED` |
| Developer | Push to `main` | `DENIED` |
| Developer | Tagging `PROD_*` | Will trigger `prod` pipeline |
| Developer | Tagging `*` | - |


## Change Credentials (Environment Variable)
We use gitlab [CI/CD variables](https://docs.gitlab.com/ee/ci/variables/) to save the credentials then the pipelines storing it into [K8S Secret](https://kubernetes.io/docs/concepts/configuration/secret/), to change the credentials just:
- Go to repository > CI/CD > Variables
- Change existing environment variable

The available credentials:
| KEY | 
| :-------- |
| DB_HOST_DEV |
| DB_HOST_PROD |
| DB_PASSWORD_DEV |
| DB_PASSWORD_PROD |
| DB_NAME |
| DB_USERNAME |
| DB_PORT |