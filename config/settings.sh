# GitHub username/organization to clone kubernetes repo from.
export USERNAME=kubernetes

# Kubernetes branch/tag to get the OpenAPI spec from.
export KUBERNETES_BRANCH="v1.18.0"

# client version for packaging and releasing. It can
# be different than SPEC_VERSION.
export CLIENT_VERSION="0.0.3"

# Name of the release package
export PACKAGE_NAME="@modoki-paas/kubernetes-fetch-client"

export OPENAPI_GENERATOR_COMMIT=v4.3.1