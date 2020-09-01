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
import {
    V1ContainerState,
    V1ContainerStateFromJSON,
    V1ContainerStateFromJSONTyped,
    V1ContainerStateToJSON,
} from './';

/**
 * ContainerStatus contains details for the current status of this container.
 * @export
 * @interface V1ContainerStatus
 */
export interface V1ContainerStatus {
    /**
     * Container's ID in the format 'docker://<container_id>'.
     * @type {string}
     * @memberof V1ContainerStatus
     */
    containerID?: string;
    /**
     * The image the container is running. More info: https://kubernetes.io/docs/concepts/containers/images
     * @type {string}
     * @memberof V1ContainerStatus
     */
    image: string;
    /**
     * ImageID of the container's image.
     * @type {string}
     * @memberof V1ContainerStatus
     */
    imageID: string;
    /**
     * 
     * @type {V1ContainerState}
     * @memberof V1ContainerStatus
     */
    lastState?: V1ContainerState;
    /**
     * This must be a DNS_LABEL. Each container in a pod must have a unique name. Cannot be updated.
     * @type {string}
     * @memberof V1ContainerStatus
     */
    name: string;
    /**
     * Specifies whether the container has passed its readiness probe.
     * @type {boolean}
     * @memberof V1ContainerStatus
     */
    ready: boolean;
    /**
     * The number of times the container has been restarted, currently based on the number of dead containers that have not yet been removed. Note that this is calculated from dead containers. But those containers are subject to garbage collection. This value will get capped at 5 by GC.
     * @type {number}
     * @memberof V1ContainerStatus
     */
    restartCount: number;
    /**
     * Specifies whether the container has passed its startup probe. Initialized as false, becomes true after startupProbe is considered successful. Resets to false when the container is restarted, or if kubelet loses state temporarily. Is always true when no startupProbe is defined.
     * @type {boolean}
     * @memberof V1ContainerStatus
     */
    started?: boolean;
    /**
     * 
     * @type {V1ContainerState}
     * @memberof V1ContainerStatus
     */
    state?: V1ContainerState;
}

export function V1ContainerStatusFromJSON(json: any): V1ContainerStatus {
    return V1ContainerStatusFromJSONTyped(json, false);
}

export function V1ContainerStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ContainerStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'containerID': !exists(json, 'containerID') ? undefined : json['containerID'],
        'image': json['image'],
        'imageID': json['imageID'],
        'lastState': !exists(json, 'lastState') ? undefined : V1ContainerStateFromJSON(json['lastState']),
        'name': json['name'],
        'ready': json['ready'],
        'restartCount': json['restartCount'],
        'started': !exists(json, 'started') ? undefined : json['started'],
        'state': !exists(json, 'state') ? undefined : V1ContainerStateFromJSON(json['state']),
    };
}

export function V1ContainerStatusToJSON(value?: V1ContainerStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'containerID': value.containerID,
        'image': value.image,
        'imageID': value.imageID,
        'lastState': V1ContainerStateToJSON(value.lastState),
        'name': value.name,
        'ready': value.ready,
        'restartCount': value.restartCount,
        'started': value.started,
        'state': V1ContainerStateToJSON(value.state),
    };
}


