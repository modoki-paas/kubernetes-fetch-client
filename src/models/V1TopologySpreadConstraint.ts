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
} from './';

/**
 * TopologySpreadConstraint specifies how to spread matching pods among the given topology.
 * @export
 * @interface V1TopologySpreadConstraint
 */
export interface V1TopologySpreadConstraint {
    /**
     * 
     * @type {V1LabelSelector}
     * @memberof V1TopologySpreadConstraint
     */
    labelSelector?: V1LabelSelector;
    /**
     * MaxSkew describes the degree to which pods may be unevenly distributed. It's the maximum permitted difference between the number of matching pods in any two topology domains of a given topology type. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 1/1/0: | zone1 | zone2 | zone3 | |   P   |   P   |       | - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 1/1/1; scheduling it onto zone1(zone2) would make the ActualSkew(2-0) on zone1(zone2) violate MaxSkew(1). - if MaxSkew is 2, incoming pod can be scheduled onto any zone. It's a required field. Default value is 1 and 0 is not allowed.
     * @type {number}
     * @memberof V1TopologySpreadConstraint
     */
    maxSkew: number;
    /**
     * TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a "bucket", and try to put balanced number of pods into each bucket. It's a required field.
     * @type {string}
     * @memberof V1TopologySpreadConstraint
     */
    topologyKey: string;
    /**
     * WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it - ScheduleAnyway tells the scheduler to still schedule it It's considered as "Unsatisfiable" if and only if placing incoming pod on any topology violates "MaxSkew". For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1: | zone1 | zone2 | zone3 | | P P P |   P   |   P   | If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler won't make it *more* imbalanced. It's a required field.
     * @type {string}
     * @memberof V1TopologySpreadConstraint
     */
    whenUnsatisfiable: string;
}

export function V1TopologySpreadConstraintFromJSON(json: any): V1TopologySpreadConstraint {
    return V1TopologySpreadConstraintFromJSONTyped(json, false);
}

export function V1TopologySpreadConstraintFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1TopologySpreadConstraint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'labelSelector': !exists(json, 'labelSelector') ? undefined : V1LabelSelectorFromJSON(json['labelSelector']),
        'maxSkew': json['maxSkew'],
        'topologyKey': json['topologyKey'],
        'whenUnsatisfiable': json['whenUnsatisfiable'],
    };
}

export function V1TopologySpreadConstraintToJSON(value?: V1TopologySpreadConstraint | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'labelSelector': V1LabelSelectorToJSON(value.labelSelector),
        'maxSkew': value.maxSkew,
        'topologyKey': value.topologyKey,
        'whenUnsatisfiable': value.whenUnsatisfiable,
    };
}


