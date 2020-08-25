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
    V1PersistentVolumeClaim,
    V1PersistentVolumeClaimFromJSON,
    V1PersistentVolumeClaimFromJSONTyped,
    V1PersistentVolumeClaimToJSON,
    V1PodTemplateSpec,
    V1PodTemplateSpecFromJSON,
    V1PodTemplateSpecFromJSONTyped,
    V1PodTemplateSpecToJSON,
    V1StatefulSetUpdateStrategy,
    V1StatefulSetUpdateStrategyFromJSON,
    V1StatefulSetUpdateStrategyFromJSONTyped,
    V1StatefulSetUpdateStrategyToJSON,
} from './';

/**
 * A StatefulSetSpec is the specification of a StatefulSet.
 * @export
 * @interface V1StatefulSetSpec
 */
export interface V1StatefulSetSpec {
    /**
     * podManagementPolicy controls how pods are created during initial scale up, when replacing pods on nodes, or when scaling down. The default policy is `OrderedReady`, where pods are created in increasing order (pod-0, then pod-1, etc) and the controller will wait until each pod is ready before continuing. When scaling down, the pods are removed in the opposite order. The alternative policy is `Parallel` which will create pods in parallel to match the desired scale without waiting, and on scale down will delete all pods at once.
     * @type {string}
     * @memberof V1StatefulSetSpec
     */
    podManagementPolicy?: string;
    /**
     * replicas is the desired number of replicas of the given Template. These are replicas in the sense that they are instantiations of the same Template, but individual replicas also have a consistent identity. If unspecified, defaults to 1.
     * @type {number}
     * @memberof V1StatefulSetSpec
     */
    replicas?: number;
    /**
     * revisionHistoryLimit is the maximum number of revisions that will be maintained in the StatefulSet's revision history. The revision history consists of all revisions not represented by a currently applied StatefulSetSpec version. The default value is 10.
     * @type {number}
     * @memberof V1StatefulSetSpec
     */
    revisionHistoryLimit?: number;
    /**
     * 
     * @type {V1LabelSelector}
     * @memberof V1StatefulSetSpec
     */
    selector: V1LabelSelector;
    /**
     * serviceName is the name of the service that governs this StatefulSet. This service must exist before the StatefulSet, and is responsible for the network identity of the set. Pods get DNS/hostnames that follow the pattern: pod-specific-string.serviceName.default.svc.cluster.local where "pod-specific-string" is managed by the StatefulSet controller.
     * @type {string}
     * @memberof V1StatefulSetSpec
     */
    serviceName: string;
    /**
     * 
     * @type {V1PodTemplateSpec}
     * @memberof V1StatefulSetSpec
     */
    template: V1PodTemplateSpec;
    /**
     * 
     * @type {V1StatefulSetUpdateStrategy}
     * @memberof V1StatefulSetSpec
     */
    updateStrategy?: V1StatefulSetUpdateStrategy;
    /**
     * volumeClaimTemplates is a list of claims that pods are allowed to reference. The StatefulSet controller is responsible for mapping network identities to claims in a way that maintains the identity of a pod. Every claim in this list must have at least one matching (by name) volumeMount in one container in the template. A claim in this list takes precedence over any volumes in the template, with the same name.
     * @type {Array<V1PersistentVolumeClaim>}
     * @memberof V1StatefulSetSpec
     */
    volumeClaimTemplates?: Array<V1PersistentVolumeClaim>;
}

export function V1StatefulSetSpecFromJSON(json: any): V1StatefulSetSpec {
    return V1StatefulSetSpecFromJSONTyped(json, false);
}

export function V1StatefulSetSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1StatefulSetSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'podManagementPolicy': !exists(json, 'podManagementPolicy') ? undefined : json['podManagementPolicy'],
        'replicas': !exists(json, 'replicas') ? undefined : json['replicas'],
        'revisionHistoryLimit': !exists(json, 'revisionHistoryLimit') ? undefined : json['revisionHistoryLimit'],
        'selector': V1LabelSelectorFromJSON(json['selector']),
        'serviceName': json['serviceName'],
        'template': V1PodTemplateSpecFromJSON(json['template']),
        'updateStrategy': !exists(json, 'updateStrategy') ? undefined : V1StatefulSetUpdateStrategyFromJSON(json['updateStrategy']),
        'volumeClaimTemplates': !exists(json, 'volumeClaimTemplates') ? undefined : ((json['volumeClaimTemplates'] as Array<any>).map(V1PersistentVolumeClaimFromJSON)),
    };
}

export function V1StatefulSetSpecToJSON(value?: V1StatefulSetSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'podManagementPolicy': value.podManagementPolicy,
        'replicas': value.replicas,
        'revisionHistoryLimit': value.revisionHistoryLimit,
        'selector': V1LabelSelectorToJSON(value.selector),
        'serviceName': value.serviceName,
        'template': V1PodTemplateSpecToJSON(value.template),
        'updateStrategy': V1StatefulSetUpdateStrategyToJSON(value.updateStrategy),
        'volumeClaimTemplates': value.volumeClaimTemplates === undefined ? undefined : ((value.volumeClaimTemplates as Array<any>).map(V1PersistentVolumeClaimToJSON)),
    };
}


