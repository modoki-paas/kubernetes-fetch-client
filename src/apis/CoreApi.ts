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
    V1APIVersions,
    V1APIVersionsFromJSON,
    V1APIVersionsToJSON,
} from '../models';

/**
 * 
 */
export class CoreApi extends runtime.BaseAPI {

    /**
     * get available API versions
     */
    async getAPIVersionsRaw(): Promise<runtime.ApiResponse<V1APIVersions>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/api/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1APIVersionsFromJSON(jsonValue));
    }

    /**
     * get available API versions
     */
    async getAPIVersions(): Promise<V1APIVersions> {
        const response = await this.getAPIVersionsRaw();
        return await response.value();
    }

}
