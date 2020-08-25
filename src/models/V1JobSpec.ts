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
 * JobSpec describes how the job execution will look like.
 * @export
 * @interface V1JobSpec
 */
export interface V1JobSpec {
    /**
     * Specifies the duration in seconds relative to the startTime that the job may be active before the system tries to terminate it; value must be positive integer
     * @type {number}
     * @memberof V1JobSpec
     */
    activeDeadlineSeconds?: number;
    /**
     * Specifies the number of retries before marking this job failed. Defaults to 6
     * @type {number}
     * @memberof V1JobSpec
     */
    backoffLimit?: number;
    /**
     * Specifies the desired number of successfully finished pods the job should be run with.  Setting to nil means that the success of any pod signals the success of all pods, and allows parallelism to have any positive value.  Setting to 1 means that parallelism is limited to 1 and the success of that pod signals the success of the job. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
     * @type {number}
     * @memberof V1JobSpec
     */
    completions?: number;
    /**
     * manualSelector controls generation of pod labels and pod selectors. Leave `manualSelector` unset unless you are certain what you are doing. When false or unset, the system pick labels unique to this job and appends those labels to the pod template.  When true, the user is responsible for picking unique labels and specifying the selector.  Failure to pick a unique label may cause this and other jobs to not function correctly.  However, You may see `manualSelector=true` in jobs that were created with the old `extensions/v1beta1` API. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/#specifying-your-own-pod-selector
     * @type {boolean}
     * @memberof V1JobSpec
     */
    manualSelector?: boolean;
    /**
     * Specifies the maximum desired number of pods the job should run at any given time. The actual number of pods running in steady state will be less than this number when ((.spec.completions - .status.successful) < .spec.parallelism), i.e. when the work left to do is less than max parallelism. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
     * @type {number}
     * @memberof V1JobSpec
     */
    parallelism?: number;
    /**
     * 
     * @type {V1LabelSelector}
     * @memberof V1JobSpec
     */
    selector?: V1LabelSelector;
    /**
     * 
     * @type {V1PodTemplateSpec}
     * @memberof V1JobSpec
     */
    template: V1PodTemplateSpec;
    /**
     * ttlSecondsAfterFinished limits the lifetime of a Job that has finished execution (either Complete or Failed). If this field is set, ttlSecondsAfterFinished after the Job finishes, it is eligible to be automatically deleted. When the Job is being deleted, its lifecycle guarantees (e.g. finalizers) will be honored. If this field is unset, the Job won't be automatically deleted. If this field is set to zero, the Job becomes eligible to be deleted immediately after it finishes. This field is alpha-level and is only honored by servers that enable the TTLAfterFinished feature.
     * @type {number}
     * @memberof V1JobSpec
     */
    ttlSecondsAfterFinished?: number;
}

export function V1JobSpecFromJSON(json: any): V1JobSpec {
    return V1JobSpecFromJSONTyped(json, false);
}

export function V1JobSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1JobSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'activeDeadlineSeconds': !exists(json, 'activeDeadlineSeconds') ? undefined : json['activeDeadlineSeconds'],
        'backoffLimit': !exists(json, 'backoffLimit') ? undefined : json['backoffLimit'],
        'completions': !exists(json, 'completions') ? undefined : json['completions'],
        'manualSelector': !exists(json, 'manualSelector') ? undefined : json['manualSelector'],
        'parallelism': !exists(json, 'parallelism') ? undefined : json['parallelism'],
        'selector': !exists(json, 'selector') ? undefined : V1LabelSelectorFromJSON(json['selector']),
        'template': V1PodTemplateSpecFromJSON(json['template']),
        'ttlSecondsAfterFinished': !exists(json, 'ttlSecondsAfterFinished') ? undefined : json['ttlSecondsAfterFinished'],
    };
}

export function V1JobSpecToJSON(value?: V1JobSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'activeDeadlineSeconds': value.activeDeadlineSeconds,
        'backoffLimit': value.backoffLimit,
        'completions': value.completions,
        'manualSelector': value.manualSelector,
        'parallelism': value.parallelism,
        'selector': V1LabelSelectorToJSON(value.selector),
        'template': V1PodTemplateSpecToJSON(value.template),
        'ttlSecondsAfterFinished': value.ttlSecondsAfterFinished,
    };
}


