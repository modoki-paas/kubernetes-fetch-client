/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.18.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    V1APIResourceList,
    V1APIResourceListFromJSON,
    V1APIResourceListToJSON,
    V1DeleteOptions,
    V1DeleteOptionsFromJSON,
    V1DeleteOptionsToJSON,
    V1Job,
    V1JobFromJSON,
    V1JobToJSON,
    V1JobList,
    V1JobListFromJSON,
    V1JobListToJSON,
    V1Status,
    V1StatusFromJSON,
    V1StatusToJSON,
} from '../models';

export interface CreateNamespacedJobRequest {
    namespace: string;
    body: V1Job;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
}

export interface DeleteCollectionNamespacedJobRequest {
    namespace: string;
    pretty?: string;
    _continue?: string;
    dryRun?: string;
    fieldSelector?: string;
    gracePeriodSeconds?: number;
    labelSelector?: string;
    limit?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    resourceVersion?: string;
    timeoutSeconds?: number;
    body?: V1DeleteOptions;
}

export interface DeleteNamespacedJobRequest {
    name: string;
    namespace: string;
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    body?: V1DeleteOptions;
}

export interface ListJobForAllNamespacesRequest {
    allowWatchBookmarks?: boolean;
    _continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    timeoutSeconds?: number;
    watch?: boolean;
}

export interface ListNamespacedJobRequest {
    namespace: string;
    pretty?: string;
    allowWatchBookmarks?: boolean;
    _continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    resourceVersion?: string;
    timeoutSeconds?: number;
    watch?: boolean;
}

export interface PatchNamespacedJobRequest {
    name: string;
    namespace: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
}

export interface PatchNamespacedJobStatusRequest {
    name: string;
    namespace: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
}

export interface ReadNamespacedJobRequest {
    name: string;
    namespace: string;
    pretty?: string;
    exact?: boolean;
    _export?: boolean;
}

export interface ReadNamespacedJobStatusRequest {
    name: string;
    namespace: string;
    pretty?: string;
}

export interface ReplaceNamespacedJobRequest {
    name: string;
    namespace: string;
    body: V1Job;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
}

export interface ReplaceNamespacedJobStatusRequest {
    name: string;
    namespace: string;
    body: V1Job;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
}

/**
 * 
 */
export class BatchV1Api extends runtime.BaseAPI {

    /**
     * create a Job
     */
    async createNamespacedJobRaw(requestParameters: CreateNamespacedJobRequest): Promise<runtime.ApiResponse<V1Job>> {
        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling createNamespacedJob.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createNamespacedJob.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/batch/v1/namespaces/{namespace}/jobs`.replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1JobToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1JobFromJSON(jsonValue));
    }

    /**
     * create a Job
     */
    async createNamespacedJob(requestParameters: CreateNamespacedJobRequest): Promise<V1Job> {
        const response = await this.createNamespacedJobRaw(requestParameters);
        return await response.value();
    }

    /**
     * delete collection of Job
     */
    async deleteCollectionNamespacedJobRaw(requestParameters: DeleteCollectionNamespacedJobRequest): Promise<runtime.ApiResponse<V1Status>> {
        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling deleteCollectionNamespacedJob.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters._continue !== undefined) {
            queryParameters['continue'] = requestParameters._continue;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldSelector !== undefined) {
            queryParameters['fieldSelector'] = requestParameters.fieldSelector;
        }

        if (requestParameters.gracePeriodSeconds !== undefined) {
            queryParameters['gracePeriodSeconds'] = requestParameters.gracePeriodSeconds;
        }

        if (requestParameters.labelSelector !== undefined) {
            queryParameters['labelSelector'] = requestParameters.labelSelector;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.orphanDependents !== undefined) {
            queryParameters['orphanDependents'] = requestParameters.orphanDependents;
        }

        if (requestParameters.propagationPolicy !== undefined) {
            queryParameters['propagationPolicy'] = requestParameters.propagationPolicy;
        }

        if (requestParameters.resourceVersion !== undefined) {
            queryParameters['resourceVersion'] = requestParameters.resourceVersion;
        }

        if (requestParameters.timeoutSeconds !== undefined) {
            queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/batch/v1/namespaces/{namespace}/jobs`.replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: V1DeleteOptionsToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1StatusFromJSON(jsonValue));
    }

    /**
     * delete collection of Job
     */
    async deleteCollectionNamespacedJob(requestParameters: DeleteCollectionNamespacedJobRequest): Promise<V1Status> {
        const response = await this.deleteCollectionNamespacedJobRaw(requestParameters);
        return await response.value();
    }

    /**
     * delete a Job
     */
    async deleteNamespacedJobRaw(requestParameters: DeleteNamespacedJobRequest): Promise<runtime.ApiResponse<V1Status>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling deleteNamespacedJob.');
        }

        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling deleteNamespacedJob.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.gracePeriodSeconds !== undefined) {
            queryParameters['gracePeriodSeconds'] = requestParameters.gracePeriodSeconds;
        }

        if (requestParameters.orphanDependents !== undefined) {
            queryParameters['orphanDependents'] = requestParameters.orphanDependents;
        }

        if (requestParameters.propagationPolicy !== undefined) {
            queryParameters['propagationPolicy'] = requestParameters.propagationPolicy;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/batch/v1/namespaces/{namespace}/jobs/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: V1DeleteOptionsToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1StatusFromJSON(jsonValue));
    }

    /**
     * delete a Job
     */
    async deleteNamespacedJob(requestParameters: DeleteNamespacedJobRequest): Promise<V1Status> {
        const response = await this.deleteNamespacedJobRaw(requestParameters);
        return await response.value();
    }

    /**
     * get available resources
     */
    async getAPIResourcesRaw(): Promise<runtime.ApiResponse<V1APIResourceList>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/batch/v1/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1APIResourceListFromJSON(jsonValue));
    }

    /**
     * get available resources
     */
    async getAPIResources(): Promise<V1APIResourceList> {
        const response = await this.getAPIResourcesRaw();
        return await response.value();
    }

    /**
     * list or watch objects of kind Job
     */
    async listJobForAllNamespacesRaw(requestParameters: ListJobForAllNamespacesRequest): Promise<runtime.ApiResponse<V1JobList>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.allowWatchBookmarks !== undefined) {
            queryParameters['allowWatchBookmarks'] = requestParameters.allowWatchBookmarks;
        }

        if (requestParameters._continue !== undefined) {
            queryParameters['continue'] = requestParameters._continue;
        }

        if (requestParameters.fieldSelector !== undefined) {
            queryParameters['fieldSelector'] = requestParameters.fieldSelector;
        }

        if (requestParameters.labelSelector !== undefined) {
            queryParameters['labelSelector'] = requestParameters.labelSelector;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.resourceVersion !== undefined) {
            queryParameters['resourceVersion'] = requestParameters.resourceVersion;
        }

        if (requestParameters.timeoutSeconds !== undefined) {
            queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds;
        }

        if (requestParameters.watch !== undefined) {
            queryParameters['watch'] = requestParameters.watch;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/batch/v1/jobs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1JobListFromJSON(jsonValue));
    }

    /**
     * list or watch objects of kind Job
     */
    async listJobForAllNamespaces(requestParameters: ListJobForAllNamespacesRequest): Promise<V1JobList> {
        const response = await this.listJobForAllNamespacesRaw(requestParameters);
        return await response.value();
    }

    /**
     * list or watch objects of kind Job
     */
    async listNamespacedJobRaw(requestParameters: ListNamespacedJobRequest): Promise<runtime.ApiResponse<V1JobList>> {
        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling listNamespacedJob.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.allowWatchBookmarks !== undefined) {
            queryParameters['allowWatchBookmarks'] = requestParameters.allowWatchBookmarks;
        }

        if (requestParameters._continue !== undefined) {
            queryParameters['continue'] = requestParameters._continue;
        }

        if (requestParameters.fieldSelector !== undefined) {
            queryParameters['fieldSelector'] = requestParameters.fieldSelector;
        }

        if (requestParameters.labelSelector !== undefined) {
            queryParameters['labelSelector'] = requestParameters.labelSelector;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.resourceVersion !== undefined) {
            queryParameters['resourceVersion'] = requestParameters.resourceVersion;
        }

        if (requestParameters.timeoutSeconds !== undefined) {
            queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds;
        }

        if (requestParameters.watch !== undefined) {
            queryParameters['watch'] = requestParameters.watch;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/batch/v1/namespaces/{namespace}/jobs`.replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1JobListFromJSON(jsonValue));
    }

    /**
     * list or watch objects of kind Job
     */
    async listNamespacedJob(requestParameters: ListNamespacedJobRequest): Promise<V1JobList> {
        const response = await this.listNamespacedJobRaw(requestParameters);
        return await response.value();
    }

    /**
     * partially update the specified Job
     */
    async patchNamespacedJobRaw(requestParameters: PatchNamespacedJobRequest): Promise<runtime.ApiResponse<V1Job>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling patchNamespacedJob.');
        }

        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling patchNamespacedJob.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchNamespacedJob.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        if (requestParameters.force !== undefined) {
            queryParameters['force'] = requestParameters.force;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/batch/v1/namespaces/{namespace}/jobs/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1JobFromJSON(jsonValue));
    }

    /**
     * partially update the specified Job
     */
    async patchNamespacedJob(requestParameters: PatchNamespacedJobRequest): Promise<V1Job> {
        const response = await this.patchNamespacedJobRaw(requestParameters);
        return await response.value();
    }

    /**
     * partially update status of the specified Job
     */
    async patchNamespacedJobStatusRaw(requestParameters: PatchNamespacedJobStatusRequest): Promise<runtime.ApiResponse<V1Job>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling patchNamespacedJobStatus.');
        }

        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling patchNamespacedJobStatus.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchNamespacedJobStatus.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        if (requestParameters.force !== undefined) {
            queryParameters['force'] = requestParameters.force;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/batch/v1/namespaces/{namespace}/jobs/{name}/status`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1JobFromJSON(jsonValue));
    }

    /**
     * partially update status of the specified Job
     */
    async patchNamespacedJobStatus(requestParameters: PatchNamespacedJobStatusRequest): Promise<V1Job> {
        const response = await this.patchNamespacedJobStatusRaw(requestParameters);
        return await response.value();
    }

    /**
     * read the specified Job
     */
    async readNamespacedJobRaw(requestParameters: ReadNamespacedJobRequest): Promise<runtime.ApiResponse<V1Job>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling readNamespacedJob.');
        }

        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling readNamespacedJob.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.exact !== undefined) {
            queryParameters['exact'] = requestParameters.exact;
        }

        if (requestParameters._export !== undefined) {
            queryParameters['export'] = requestParameters._export;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/batch/v1/namespaces/{namespace}/jobs/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1JobFromJSON(jsonValue));
    }

    /**
     * read the specified Job
     */
    async readNamespacedJob(requestParameters: ReadNamespacedJobRequest): Promise<V1Job> {
        const response = await this.readNamespacedJobRaw(requestParameters);
        return await response.value();
    }

    /**
     * read status of the specified Job
     */
    async readNamespacedJobStatusRaw(requestParameters: ReadNamespacedJobStatusRequest): Promise<runtime.ApiResponse<V1Job>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling readNamespacedJobStatus.');
        }

        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling readNamespacedJobStatus.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/batch/v1/namespaces/{namespace}/jobs/{name}/status`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1JobFromJSON(jsonValue));
    }

    /**
     * read status of the specified Job
     */
    async readNamespacedJobStatus(requestParameters: ReadNamespacedJobStatusRequest): Promise<V1Job> {
        const response = await this.readNamespacedJobStatusRaw(requestParameters);
        return await response.value();
    }

    /**
     * replace the specified Job
     */
    async replaceNamespacedJobRaw(requestParameters: ReplaceNamespacedJobRequest): Promise<runtime.ApiResponse<V1Job>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling replaceNamespacedJob.');
        }

        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling replaceNamespacedJob.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling replaceNamespacedJob.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/batch/v1/namespaces/{namespace}/jobs/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1JobToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1JobFromJSON(jsonValue));
    }

    /**
     * replace the specified Job
     */
    async replaceNamespacedJob(requestParameters: ReplaceNamespacedJobRequest): Promise<V1Job> {
        const response = await this.replaceNamespacedJobRaw(requestParameters);
        return await response.value();
    }

    /**
     * replace status of the specified Job
     */
    async replaceNamespacedJobStatusRaw(requestParameters: ReplaceNamespacedJobStatusRequest): Promise<runtime.ApiResponse<V1Job>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling replaceNamespacedJobStatus.');
        }

        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling replaceNamespacedJobStatus.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling replaceNamespacedJobStatus.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/batch/v1/namespaces/{namespace}/jobs/{name}/status`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1JobToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1JobFromJSON(jsonValue));
    }

    /**
     * replace status of the specified Job
     */
    async replaceNamespacedJobStatus(requestParameters: ReplaceNamespacedJobStatusRequest): Promise<V1Job> {
        const response = await this.replaceNamespacedJobStatusRaw(requestParameters);
        return await response.value();
    }

}
