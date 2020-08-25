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
/**
 * LeaseSpec is a specification of a Lease.
 * @export
 * @interface V1beta1LeaseSpec
 */
export interface V1beta1LeaseSpec {
    /**
     * acquireTime is a time when the current lease was acquired.
     * @type {Date}
     * @memberof V1beta1LeaseSpec
     */
    acquireTime?: Date;
    /**
     * holderIdentity contains the identity of the holder of a current lease.
     * @type {string}
     * @memberof V1beta1LeaseSpec
     */
    holderIdentity?: string;
    /**
     * leaseDurationSeconds is a duration that candidates for a lease need to wait to force acquire it. This is measure against time of last observed RenewTime.
     * @type {number}
     * @memberof V1beta1LeaseSpec
     */
    leaseDurationSeconds?: number;
    /**
     * leaseTransitions is the number of transitions of a lease between holders.
     * @type {number}
     * @memberof V1beta1LeaseSpec
     */
    leaseTransitions?: number;
    /**
     * renewTime is a time when the current holder of a lease has last updated the lease.
     * @type {Date}
     * @memberof V1beta1LeaseSpec
     */
    renewTime?: Date;
}

export function V1beta1LeaseSpecFromJSON(json: any): V1beta1LeaseSpec {
    return V1beta1LeaseSpecFromJSONTyped(json, false);
}

export function V1beta1LeaseSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1LeaseSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'acquireTime': !exists(json, 'acquireTime') ? undefined : (new Date(json['acquireTime'])),
        'holderIdentity': !exists(json, 'holderIdentity') ? undefined : json['holderIdentity'],
        'leaseDurationSeconds': !exists(json, 'leaseDurationSeconds') ? undefined : json['leaseDurationSeconds'],
        'leaseTransitions': !exists(json, 'leaseTransitions') ? undefined : json['leaseTransitions'],
        'renewTime': !exists(json, 'renewTime') ? undefined : (new Date(json['renewTime'])),
    };
}

export function V1beta1LeaseSpecToJSON(value?: V1beta1LeaseSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'acquireTime': value.acquireTime === undefined ? undefined : (value.acquireTime.toISOString()),
        'holderIdentity': value.holderIdentity,
        'leaseDurationSeconds': value.leaseDurationSeconds,
        'leaseTransitions': value.leaseTransitions,
        'renewTime': value.renewTime === undefined ? undefined : (value.renewTime.toISOString()),
    };
}


