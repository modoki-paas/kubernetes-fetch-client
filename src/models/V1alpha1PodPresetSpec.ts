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
    V1EnvFromSource,
    V1EnvFromSourceFromJSON,
    V1EnvFromSourceFromJSONTyped,
    V1EnvFromSourceToJSON,
    V1EnvVar,
    V1EnvVarFromJSON,
    V1EnvVarFromJSONTyped,
    V1EnvVarToJSON,
    V1LabelSelector,
    V1LabelSelectorFromJSON,
    V1LabelSelectorFromJSONTyped,
    V1LabelSelectorToJSON,
    V1Volume,
    V1VolumeFromJSON,
    V1VolumeFromJSONTyped,
    V1VolumeToJSON,
    V1VolumeMount,
    V1VolumeMountFromJSON,
    V1VolumeMountFromJSONTyped,
    V1VolumeMountToJSON,
} from './';

/**
 * PodPresetSpec is a description of a pod preset.
 * @export
 * @interface V1alpha1PodPresetSpec
 */
export interface V1alpha1PodPresetSpec {
    /**
     * Env defines the collection of EnvVar to inject into containers.
     * @type {Array<V1EnvVar>}
     * @memberof V1alpha1PodPresetSpec
     */
    env?: Array<V1EnvVar>;
    /**
     * EnvFrom defines the collection of EnvFromSource to inject into containers.
     * @type {Array<V1EnvFromSource>}
     * @memberof V1alpha1PodPresetSpec
     */
    envFrom?: Array<V1EnvFromSource>;
    /**
     * 
     * @type {V1LabelSelector}
     * @memberof V1alpha1PodPresetSpec
     */
    selector?: V1LabelSelector;
    /**
     * VolumeMounts defines the collection of VolumeMount to inject into containers.
     * @type {Array<V1VolumeMount>}
     * @memberof V1alpha1PodPresetSpec
     */
    volumeMounts?: Array<V1VolumeMount>;
    /**
     * Volumes defines the collection of Volume to inject into the pod.
     * @type {Array<V1Volume>}
     * @memberof V1alpha1PodPresetSpec
     */
    volumes?: Array<V1Volume>;
}

export function V1alpha1PodPresetSpecFromJSON(json: any): V1alpha1PodPresetSpec {
    return V1alpha1PodPresetSpecFromJSONTyped(json, false);
}

export function V1alpha1PodPresetSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1PodPresetSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'env': !exists(json, 'env') ? undefined : ((json['env'] as Array<any>).map(V1EnvVarFromJSON)),
        'envFrom': !exists(json, 'envFrom') ? undefined : ((json['envFrom'] as Array<any>).map(V1EnvFromSourceFromJSON)),
        'selector': !exists(json, 'selector') ? undefined : V1LabelSelectorFromJSON(json['selector']),
        'volumeMounts': !exists(json, 'volumeMounts') ? undefined : ((json['volumeMounts'] as Array<any>).map(V1VolumeMountFromJSON)),
        'volumes': !exists(json, 'volumes') ? undefined : ((json['volumes'] as Array<any>).map(V1VolumeFromJSON)),
    };
}

export function V1alpha1PodPresetSpecToJSON(value?: V1alpha1PodPresetSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'env': value.env === undefined ? undefined : ((value.env as Array<any>).map(V1EnvVarToJSON)),
        'envFrom': value.envFrom === undefined ? undefined : ((value.envFrom as Array<any>).map(V1EnvFromSourceToJSON)),
        'selector': V1LabelSelectorToJSON(value.selector),
        'volumeMounts': value.volumeMounts === undefined ? undefined : ((value.volumeMounts as Array<any>).map(V1VolumeMountToJSON)),
        'volumes': value.volumes === undefined ? undefined : ((value.volumes as Array<any>).map(V1VolumeToJSON)),
    };
}


