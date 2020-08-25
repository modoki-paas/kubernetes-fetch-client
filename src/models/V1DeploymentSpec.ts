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

import { exists, mapValues } from '../runtime';
import {
    V1DeploymentStrategy,
    V1DeploymentStrategyFromJSON,
    V1DeploymentStrategyFromJSONTyped,
    V1DeploymentStrategyToJSON,
    V1LabelSelector,
    V1LabelSelectorFromJSON,
    V1LabelSelectorFromJSONTyped,
    V1LabelSelectorToJSON,
    V1PodTemplateSpec,
    V1PodTemplateSpecFromJSON,
    V1PodTemplateSpecFromJSONTyped,
    V1PodTemplateSpecToJSON,
} from './';

/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 * @export
 * @interface V1DeploymentSpec
 */
export interface V1DeploymentSpec {
    /**
     * Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
     * @type {number}
     * @memberof V1DeploymentSpec
     */
    minReadySeconds?: number;
    /**
     * Indicates that the deployment is paused.
     * @type {boolean}
     * @memberof V1DeploymentSpec
     */
    paused?: boolean;
    /**
     * The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. Defaults to 600s.
     * @type {number}
     * @memberof V1DeploymentSpec
     */
    progressDeadlineSeconds?: number;
    /**
     * Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
     * @type {number}
     * @memberof V1DeploymentSpec
     */
    replicas?: number;
    /**
     * The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
     * @type {number}
     * @memberof V1DeploymentSpec
     */
    revisionHistoryLimit?: number;
    /**
     * 
     * @type {V1LabelSelector}
     * @memberof V1DeploymentSpec
     */
    selector: V1LabelSelector;
    /**
     * 
     * @type {V1DeploymentStrategy}
     * @memberof V1DeploymentSpec
     */
    strategy?: V1DeploymentStrategy;
    /**
     * 
     * @type {V1PodTemplateSpec}
     * @memberof V1DeploymentSpec
     */
    template: V1PodTemplateSpec;
}

export function V1DeploymentSpecFromJSON(json: any): V1DeploymentSpec {
    return V1DeploymentSpecFromJSONTyped(json, false);
}

export function V1DeploymentSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DeploymentSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'minReadySeconds': !exists(json, 'minReadySeconds') ? undefined : json['minReadySeconds'],
        'paused': !exists(json, 'paused') ? undefined : json['paused'],
        'progressDeadlineSeconds': !exists(json, 'progressDeadlineSeconds') ? undefined : json['progressDeadlineSeconds'],
        'replicas': !exists(json, 'replicas') ? undefined : json['replicas'],
        'revisionHistoryLimit': !exists(json, 'revisionHistoryLimit') ? undefined : json['revisionHistoryLimit'],
        'selector': V1LabelSelectorFromJSON(json['selector']),
        'strategy': !exists(json, 'strategy') ? undefined : V1DeploymentStrategyFromJSON(json['strategy']),
        'template': V1PodTemplateSpecFromJSON(json['template']),
    };
}

export function V1DeploymentSpecToJSON(value?: V1DeploymentSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'minReadySeconds': value.minReadySeconds,
        'paused': value.paused,
        'progressDeadlineSeconds': value.progressDeadlineSeconds,
        'replicas': value.replicas,
        'revisionHistoryLimit': value.revisionHistoryLimit,
        'selector': V1LabelSelectorToJSON(value.selector),
        'strategy': V1DeploymentStrategyToJSON(value.strategy),
        'template': V1PodTemplateSpecToJSON(value.template),
    };
}


