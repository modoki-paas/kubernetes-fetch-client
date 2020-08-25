/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.18.0
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
    V1beta1TokenReview,
    V1beta1TokenReviewFromJSON,
    V1beta1TokenReviewToJSON,
} from '../models';

export interface CreateTokenReviewRequest {
    body: V1beta1TokenReview;
    dryRun?: string;
    fieldManager?: string;
    pretty?: string;
}

/**
 * 
 */
export class AuthenticationV1beta1Api extends runtime.BaseAPI {

    /**
     * create a TokenReview
     */
    async createTokenReviewRaw(requestParameters: CreateTokenReviewRequest): Promise<runtime.ApiResponse<V1beta1TokenReview>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createTokenReview.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/authentication.k8s.io/v1beta1/tokenreviews`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1beta1TokenReviewToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1beta1TokenReviewFromJSON(jsonValue));
    }

    /**
     * create a TokenReview
     */
    async createTokenReview(requestParameters: CreateTokenReviewRequest): Promise<V1beta1TokenReview> {
        const response = await this.createTokenReviewRaw(requestParameters);
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
            path: `/apis/authentication.k8s.io/v1beta1/`,
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

}