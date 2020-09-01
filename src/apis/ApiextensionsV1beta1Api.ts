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
    V1Status,
    V1StatusFromJSON,
    V1StatusToJSON,
    V1beta1CustomResourceDefinition,
    V1beta1CustomResourceDefinitionFromJSON,
    V1beta1CustomResourceDefinitionToJSON,
    V1beta1CustomResourceDefinitionList,
    V1beta1CustomResourceDefinitionListFromJSON,
    V1beta1CustomResourceDefinitionListToJSON,
} from '../models';

export interface CreateCustomResourceDefinitionRequest {
    body: V1beta1CustomResourceDefinition;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
}

export interface DeleteCollectionCustomResourceDefinitionRequest {
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

export interface DeleteCustomResourceDefinitionRequest {
    name: string;
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    body?: V1DeleteOptions;
}

export interface ListCustomResourceDefinitionRequest {
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

export interface PatchCustomResourceDefinitionRequest {
    name: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
}

export interface PatchCustomResourceDefinitionStatusRequest {
    name: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
}

export interface ReadCustomResourceDefinitionRequest {
    name: string;
    pretty?: string;
    exact?: boolean;
    _export?: boolean;
}

export interface ReadCustomResourceDefinitionStatusRequest {
    name: string;
    pretty?: string;
}

export interface ReplaceCustomResourceDefinitionRequest {
    name: string;
    body: V1beta1CustomResourceDefinition;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
}

export interface ReplaceCustomResourceDefinitionStatusRequest {
    name: string;
    body: V1beta1CustomResourceDefinition;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
}

/**
 * 
 */
export class ApiextensionsV1beta1Api extends runtime.BaseAPI {

    /**
     * create a CustomResourceDefinition
     */
    async createCustomResourceDefinitionRaw(requestParameters: CreateCustomResourceDefinitionRequest): Promise<runtime.ApiResponse<V1beta1CustomResourceDefinition>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createCustomResourceDefinition.');
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
            path: `/apis/apiextensions.k8s.io/v1beta1/customresourcedefinitions`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1beta1CustomResourceDefinitionToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1beta1CustomResourceDefinitionFromJSON(jsonValue));
    }

    /**
     * create a CustomResourceDefinition
     */
    async createCustomResourceDefinition(requestParameters: CreateCustomResourceDefinitionRequest): Promise<V1beta1CustomResourceDefinition> {
        const response = await this.createCustomResourceDefinitionRaw(requestParameters);
        return await response.value();
    }

    /**
     * delete collection of CustomResourceDefinition
     */
    async deleteCollectionCustomResourceDefinitionRaw(requestParameters: DeleteCollectionCustomResourceDefinitionRequest): Promise<runtime.ApiResponse<V1Status>> {
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
            path: `/apis/apiextensions.k8s.io/v1beta1/customresourcedefinitions`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: V1DeleteOptionsToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1StatusFromJSON(jsonValue));
    }

    /**
     * delete collection of CustomResourceDefinition
     */
    async deleteCollectionCustomResourceDefinition(requestParameters: DeleteCollectionCustomResourceDefinitionRequest): Promise<V1Status> {
        const response = await this.deleteCollectionCustomResourceDefinitionRaw(requestParameters);
        return await response.value();
    }

    /**
     * delete a CustomResourceDefinition
     */
    async deleteCustomResourceDefinitionRaw(requestParameters: DeleteCustomResourceDefinitionRequest): Promise<runtime.ApiResponse<V1Status>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling deleteCustomResourceDefinition.');
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
            path: `/apis/apiextensions.k8s.io/v1beta1/customresourcedefinitions/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: V1DeleteOptionsToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1StatusFromJSON(jsonValue));
    }

    /**
     * delete a CustomResourceDefinition
     */
    async deleteCustomResourceDefinition(requestParameters: DeleteCustomResourceDefinitionRequest): Promise<V1Status> {
        const response = await this.deleteCustomResourceDefinitionRaw(requestParameters);
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
            path: `/apis/apiextensions.k8s.io/v1beta1/`,
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
     * list or watch objects of kind CustomResourceDefinition
     */
    async listCustomResourceDefinitionRaw(requestParameters: ListCustomResourceDefinitionRequest): Promise<runtime.ApiResponse<V1beta1CustomResourceDefinitionList>> {
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
            path: `/apis/apiextensions.k8s.io/v1beta1/customresourcedefinitions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1beta1CustomResourceDefinitionListFromJSON(jsonValue));
    }

    /**
     * list or watch objects of kind CustomResourceDefinition
     */
    async listCustomResourceDefinition(requestParameters: ListCustomResourceDefinitionRequest): Promise<V1beta1CustomResourceDefinitionList> {
        const response = await this.listCustomResourceDefinitionRaw(requestParameters);
        return await response.value();
    }

    /**
     * partially update the specified CustomResourceDefinition
     */
    async patchCustomResourceDefinitionRaw(requestParameters: PatchCustomResourceDefinitionRequest): Promise<runtime.ApiResponse<V1beta1CustomResourceDefinition>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling patchCustomResourceDefinition.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchCustomResourceDefinition.');
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
            path: `/apis/apiextensions.k8s.io/v1beta1/customresourcedefinitions/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1beta1CustomResourceDefinitionFromJSON(jsonValue));
    }

    /**
     * partially update the specified CustomResourceDefinition
     */
    async patchCustomResourceDefinition(requestParameters: PatchCustomResourceDefinitionRequest): Promise<V1beta1CustomResourceDefinition> {
        const response = await this.patchCustomResourceDefinitionRaw(requestParameters);
        return await response.value();
    }

    /**
     * partially update status of the specified CustomResourceDefinition
     */
    async patchCustomResourceDefinitionStatusRaw(requestParameters: PatchCustomResourceDefinitionStatusRequest): Promise<runtime.ApiResponse<V1beta1CustomResourceDefinition>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling patchCustomResourceDefinitionStatus.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchCustomResourceDefinitionStatus.');
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
            path: `/apis/apiextensions.k8s.io/v1beta1/customresourcedefinitions/{name}/status`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1beta1CustomResourceDefinitionFromJSON(jsonValue));
    }

    /**
     * partially update status of the specified CustomResourceDefinition
     */
    async patchCustomResourceDefinitionStatus(requestParameters: PatchCustomResourceDefinitionStatusRequest): Promise<V1beta1CustomResourceDefinition> {
        const response = await this.patchCustomResourceDefinitionStatusRaw(requestParameters);
        return await response.value();
    }

    /**
     * read the specified CustomResourceDefinition
     */
    async readCustomResourceDefinitionRaw(requestParameters: ReadCustomResourceDefinitionRequest): Promise<runtime.ApiResponse<V1beta1CustomResourceDefinition>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling readCustomResourceDefinition.');
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
            path: `/apis/apiextensions.k8s.io/v1beta1/customresourcedefinitions/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1beta1CustomResourceDefinitionFromJSON(jsonValue));
    }

    /**
     * read the specified CustomResourceDefinition
     */
    async readCustomResourceDefinition(requestParameters: ReadCustomResourceDefinitionRequest): Promise<V1beta1CustomResourceDefinition> {
        const response = await this.readCustomResourceDefinitionRaw(requestParameters);
        return await response.value();
    }

    /**
     * read status of the specified CustomResourceDefinition
     */
    async readCustomResourceDefinitionStatusRaw(requestParameters: ReadCustomResourceDefinitionStatusRequest): Promise<runtime.ApiResponse<V1beta1CustomResourceDefinition>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling readCustomResourceDefinitionStatus.');
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
            path: `/apis/apiextensions.k8s.io/v1beta1/customresourcedefinitions/{name}/status`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1beta1CustomResourceDefinitionFromJSON(jsonValue));
    }

    /**
     * read status of the specified CustomResourceDefinition
     */
    async readCustomResourceDefinitionStatus(requestParameters: ReadCustomResourceDefinitionStatusRequest): Promise<V1beta1CustomResourceDefinition> {
        const response = await this.readCustomResourceDefinitionStatusRaw(requestParameters);
        return await response.value();
    }

    /**
     * replace the specified CustomResourceDefinition
     */
    async replaceCustomResourceDefinitionRaw(requestParameters: ReplaceCustomResourceDefinitionRequest): Promise<runtime.ApiResponse<V1beta1CustomResourceDefinition>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling replaceCustomResourceDefinition.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling replaceCustomResourceDefinition.');
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
            path: `/apis/apiextensions.k8s.io/v1beta1/customresourcedefinitions/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1beta1CustomResourceDefinitionToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1beta1CustomResourceDefinitionFromJSON(jsonValue));
    }

    /**
     * replace the specified CustomResourceDefinition
     */
    async replaceCustomResourceDefinition(requestParameters: ReplaceCustomResourceDefinitionRequest): Promise<V1beta1CustomResourceDefinition> {
        const response = await this.replaceCustomResourceDefinitionRaw(requestParameters);
        return await response.value();
    }

    /**
     * replace status of the specified CustomResourceDefinition
     */
    async replaceCustomResourceDefinitionStatusRaw(requestParameters: ReplaceCustomResourceDefinitionStatusRequest): Promise<runtime.ApiResponse<V1beta1CustomResourceDefinition>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling replaceCustomResourceDefinitionStatus.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling replaceCustomResourceDefinitionStatus.');
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
            path: `/apis/apiextensions.k8s.io/v1beta1/customresourcedefinitions/{name}/status`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1beta1CustomResourceDefinitionToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1beta1CustomResourceDefinitionFromJSON(jsonValue));
    }

    /**
     * replace status of the specified CustomResourceDefinition
     */
    async replaceCustomResourceDefinitionStatus(requestParameters: ReplaceCustomResourceDefinitionStatusRequest): Promise<V1beta1CustomResourceDefinition> {
        const response = await this.replaceCustomResourceDefinitionStatusRaw(requestParameters);
        return await response.value();
    }

}
