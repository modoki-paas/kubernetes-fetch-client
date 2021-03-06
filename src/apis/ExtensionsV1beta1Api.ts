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
    ExtensionsV1beta1Ingress,
    ExtensionsV1beta1IngressFromJSON,
    ExtensionsV1beta1IngressToJSON,
    ExtensionsV1beta1IngressList,
    ExtensionsV1beta1IngressListFromJSON,
    ExtensionsV1beta1IngressListToJSON,
    V1APIResourceList,
    V1APIResourceListFromJSON,
    V1APIResourceListToJSON,
    V1DeleteOptions,
    V1DeleteOptionsFromJSON,
    V1DeleteOptionsToJSON,
    V1Status,
    V1StatusFromJSON,
    V1StatusToJSON,
} from '../models';

export interface CreateNamespacedIngressRequest {
    namespace: string;
    body: ExtensionsV1beta1Ingress;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
}

export interface DeleteCollectionNamespacedIngressRequest {
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

export interface DeleteNamespacedIngressRequest {
    name: string;
    namespace: string;
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    body?: V1DeleteOptions;
}

export interface ListIngressForAllNamespacesRequest {
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

export interface ListNamespacedIngressRequest {
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

export interface PatchNamespacedIngressRequest {
    name: string;
    namespace: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
}

export interface PatchNamespacedIngressStatusRequest {
    name: string;
    namespace: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
}

export interface ReadNamespacedIngressRequest {
    name: string;
    namespace: string;
    pretty?: string;
    exact?: boolean;
    _export?: boolean;
}

export interface ReadNamespacedIngressStatusRequest {
    name: string;
    namespace: string;
    pretty?: string;
}

export interface ReplaceNamespacedIngressRequest {
    name: string;
    namespace: string;
    body: ExtensionsV1beta1Ingress;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
}

export interface ReplaceNamespacedIngressStatusRequest {
    name: string;
    namespace: string;
    body: ExtensionsV1beta1Ingress;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
}

/**
 * 
 */
export class ExtensionsV1beta1Api extends runtime.BaseAPI {

    /**
     * create an Ingress
     */
    async createNamespacedIngressRaw(requestParameters: CreateNamespacedIngressRequest): Promise<runtime.ApiResponse<ExtensionsV1beta1Ingress>> {
        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling createNamespacedIngress.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createNamespacedIngress.');
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
            path: `/apis/extensions/v1beta1/namespaces/{namespace}/ingresses`.replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ExtensionsV1beta1IngressToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ExtensionsV1beta1IngressFromJSON(jsonValue));
    }

    /**
     * create an Ingress
     */
    async createNamespacedIngress(requestParameters: CreateNamespacedIngressRequest): Promise<ExtensionsV1beta1Ingress> {
        const response = await this.createNamespacedIngressRaw(requestParameters);
        return await response.value();
    }

    /**
     * delete collection of Ingress
     */
    async deleteCollectionNamespacedIngressRaw(requestParameters: DeleteCollectionNamespacedIngressRequest): Promise<runtime.ApiResponse<V1Status>> {
        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling deleteCollectionNamespacedIngress.');
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
            path: `/apis/extensions/v1beta1/namespaces/{namespace}/ingresses`.replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: V1DeleteOptionsToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1StatusFromJSON(jsonValue));
    }

    /**
     * delete collection of Ingress
     */
    async deleteCollectionNamespacedIngress(requestParameters: DeleteCollectionNamespacedIngressRequest): Promise<V1Status> {
        const response = await this.deleteCollectionNamespacedIngressRaw(requestParameters);
        return await response.value();
    }

    /**
     * delete an Ingress
     */
    async deleteNamespacedIngressRaw(requestParameters: DeleteNamespacedIngressRequest): Promise<runtime.ApiResponse<V1Status>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling deleteNamespacedIngress.');
        }

        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling deleteNamespacedIngress.');
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
            path: `/apis/extensions/v1beta1/namespaces/{namespace}/ingresses/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: V1DeleteOptionsToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1StatusFromJSON(jsonValue));
    }

    /**
     * delete an Ingress
     */
    async deleteNamespacedIngress(requestParameters: DeleteNamespacedIngressRequest): Promise<V1Status> {
        const response = await this.deleteNamespacedIngressRaw(requestParameters);
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
            path: `/apis/extensions/v1beta1/`,
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
     * list or watch objects of kind Ingress
     */
    async listIngressForAllNamespacesRaw(requestParameters: ListIngressForAllNamespacesRequest): Promise<runtime.ApiResponse<ExtensionsV1beta1IngressList>> {
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
            path: `/apis/extensions/v1beta1/ingresses`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ExtensionsV1beta1IngressListFromJSON(jsonValue));
    }

    /**
     * list or watch objects of kind Ingress
     */
    async listIngressForAllNamespaces(requestParameters: ListIngressForAllNamespacesRequest): Promise<ExtensionsV1beta1IngressList> {
        const response = await this.listIngressForAllNamespacesRaw(requestParameters);
        return await response.value();
    }

    /**
     * list or watch objects of kind Ingress
     */
    async listNamespacedIngressRaw(requestParameters: ListNamespacedIngressRequest): Promise<runtime.ApiResponse<ExtensionsV1beta1IngressList>> {
        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling listNamespacedIngress.');
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
            path: `/apis/extensions/v1beta1/namespaces/{namespace}/ingresses`.replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ExtensionsV1beta1IngressListFromJSON(jsonValue));
    }

    /**
     * list or watch objects of kind Ingress
     */
    async listNamespacedIngress(requestParameters: ListNamespacedIngressRequest): Promise<ExtensionsV1beta1IngressList> {
        const response = await this.listNamespacedIngressRaw(requestParameters);
        return await response.value();
    }

    /**
     * partially update the specified Ingress
     */
    async patchNamespacedIngressRaw(requestParameters: PatchNamespacedIngressRequest): Promise<runtime.ApiResponse<ExtensionsV1beta1Ingress>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling patchNamespacedIngress.');
        }

        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling patchNamespacedIngress.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchNamespacedIngress.');
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
            path: `/apis/extensions/v1beta1/namespaces/{namespace}/ingresses/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ExtensionsV1beta1IngressFromJSON(jsonValue));
    }

    /**
     * partially update the specified Ingress
     */
    async patchNamespacedIngress(requestParameters: PatchNamespacedIngressRequest): Promise<ExtensionsV1beta1Ingress> {
        const response = await this.patchNamespacedIngressRaw(requestParameters);
        return await response.value();
    }

    /**
     * partially update status of the specified Ingress
     */
    async patchNamespacedIngressStatusRaw(requestParameters: PatchNamespacedIngressStatusRequest): Promise<runtime.ApiResponse<ExtensionsV1beta1Ingress>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling patchNamespacedIngressStatus.');
        }

        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling patchNamespacedIngressStatus.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchNamespacedIngressStatus.');
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
            path: `/apis/extensions/v1beta1/namespaces/{namespace}/ingresses/{name}/status`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ExtensionsV1beta1IngressFromJSON(jsonValue));
    }

    /**
     * partially update status of the specified Ingress
     */
    async patchNamespacedIngressStatus(requestParameters: PatchNamespacedIngressStatusRequest): Promise<ExtensionsV1beta1Ingress> {
        const response = await this.patchNamespacedIngressStatusRaw(requestParameters);
        return await response.value();
    }

    /**
     * read the specified Ingress
     */
    async readNamespacedIngressRaw(requestParameters: ReadNamespacedIngressRequest): Promise<runtime.ApiResponse<ExtensionsV1beta1Ingress>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling readNamespacedIngress.');
        }

        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling readNamespacedIngress.');
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
            path: `/apis/extensions/v1beta1/namespaces/{namespace}/ingresses/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ExtensionsV1beta1IngressFromJSON(jsonValue));
    }

    /**
     * read the specified Ingress
     */
    async readNamespacedIngress(requestParameters: ReadNamespacedIngressRequest): Promise<ExtensionsV1beta1Ingress> {
        const response = await this.readNamespacedIngressRaw(requestParameters);
        return await response.value();
    }

    /**
     * read status of the specified Ingress
     */
    async readNamespacedIngressStatusRaw(requestParameters: ReadNamespacedIngressStatusRequest): Promise<runtime.ApiResponse<ExtensionsV1beta1Ingress>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling readNamespacedIngressStatus.');
        }

        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling readNamespacedIngressStatus.');
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
            path: `/apis/extensions/v1beta1/namespaces/{namespace}/ingresses/{name}/status`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ExtensionsV1beta1IngressFromJSON(jsonValue));
    }

    /**
     * read status of the specified Ingress
     */
    async readNamespacedIngressStatus(requestParameters: ReadNamespacedIngressStatusRequest): Promise<ExtensionsV1beta1Ingress> {
        const response = await this.readNamespacedIngressStatusRaw(requestParameters);
        return await response.value();
    }

    /**
     * replace the specified Ingress
     */
    async replaceNamespacedIngressRaw(requestParameters: ReplaceNamespacedIngressRequest): Promise<runtime.ApiResponse<ExtensionsV1beta1Ingress>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling replaceNamespacedIngress.');
        }

        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling replaceNamespacedIngress.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling replaceNamespacedIngress.');
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
            path: `/apis/extensions/v1beta1/namespaces/{namespace}/ingresses/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ExtensionsV1beta1IngressToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ExtensionsV1beta1IngressFromJSON(jsonValue));
    }

    /**
     * replace the specified Ingress
     */
    async replaceNamespacedIngress(requestParameters: ReplaceNamespacedIngressRequest): Promise<ExtensionsV1beta1Ingress> {
        const response = await this.replaceNamespacedIngressRaw(requestParameters);
        return await response.value();
    }

    /**
     * replace status of the specified Ingress
     */
    async replaceNamespacedIngressStatusRaw(requestParameters: ReplaceNamespacedIngressStatusRequest): Promise<runtime.ApiResponse<ExtensionsV1beta1Ingress>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling replaceNamespacedIngressStatus.');
        }

        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling replaceNamespacedIngressStatus.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling replaceNamespacedIngressStatus.');
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
            path: `/apis/extensions/v1beta1/namespaces/{namespace}/ingresses/{name}/status`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ExtensionsV1beta1IngressToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ExtensionsV1beta1IngressFromJSON(jsonValue));
    }

    /**
     * replace status of the specified Ingress
     */
    async replaceNamespacedIngressStatus(requestParameters: ReplaceNamespacedIngressStatusRequest): Promise<ExtensionsV1beta1Ingress> {
        const response = await this.replaceNamespacedIngressStatusRaw(requestParameters);
        return await response.value();
    }

}
