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

import { exists, mapValues } from '../runtime';
/**
 * GitHubPipeline is the source from GitHub
 * @export
 * @interface DevTsuzuModokiV1alpha1AppPipelineSpecBaseGithub
 */
export interface DevTsuzuModokiV1alpha1AppPipelineSpecBaseGithub {
    /**
     * Owner is the repository's owner
     * @type {string}
     * @memberof DevTsuzuModokiV1alpha1AppPipelineSpecBaseGithub
     */
    owner: string;
    /**
     * Repository is the repository's name
     * @type {string}
     * @memberof DevTsuzuModokiV1alpha1AppPipelineSpecBaseGithub
     */
    repo: string;
    /**
     * SecretName is the name of the Secret resource saving a GitHub token
     * @type {string}
     * @memberof DevTsuzuModokiV1alpha1AppPipelineSpecBaseGithub
     */
    secretName: string;
}

export function DevTsuzuModokiV1alpha1AppPipelineSpecBaseGithubFromJSON(json: any): DevTsuzuModokiV1alpha1AppPipelineSpecBaseGithub {
    return DevTsuzuModokiV1alpha1AppPipelineSpecBaseGithubFromJSONTyped(json, false);
}

export function DevTsuzuModokiV1alpha1AppPipelineSpecBaseGithubFromJSONTyped(json: any, ignoreDiscriminator: boolean): DevTsuzuModokiV1alpha1AppPipelineSpecBaseGithub {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'owner': json['owner'],
        'repo': json['repo'],
        'secretName': json['secretName'],
    };
}

export function DevTsuzuModokiV1alpha1AppPipelineSpecBaseGithubToJSON(value?: DevTsuzuModokiV1alpha1AppPipelineSpecBaseGithub | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'owner': value.owner,
        'repo': value.repo,
        'secretName': value.secretName,
    };
}


