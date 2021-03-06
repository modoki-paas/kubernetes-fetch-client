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
    V1ServicePort,
    V1ServicePortFromJSON,
    V1ServicePortFromJSONTyped,
    V1ServicePortToJSON,
    V1SessionAffinityConfig,
    V1SessionAffinityConfigFromJSON,
    V1SessionAffinityConfigFromJSONTyped,
    V1SessionAffinityConfigToJSON,
} from './';

/**
 * ServiceSpec describes the attributes that a user creates on a service.
 * @export
 * @interface V1ServiceSpec
 */
export interface V1ServiceSpec {
    /**
     * clusterIP is the IP address of the service and is usually assigned randomly by the master. If an address is specified manually and is not in use by others, it will be allocated to the service; otherwise, creation of the service will fail. This field can not be changed through updates. Valid values are "None", empty string (""), or a valid IP address. "None" can be specified for headless services when proxying is not required. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
     * @type {string}
     * @memberof V1ServiceSpec
     */
    clusterIP?: string;
    /**
     * externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes.  The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.
     * @type {Array<string>}
     * @memberof V1ServiceSpec
     */
    externalIPs?: Array<string>;
    /**
     * externalName is the external reference that kubedns or equivalent will return as a CNAME record for this service. No proxying will be involved. Must be a valid RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires Type to be ExternalName.
     * @type {string}
     * @memberof V1ServiceSpec
     */
    externalName?: string;
    /**
     * externalTrafficPolicy denotes if this Service desires to route external traffic to node-local or cluster-wide endpoints. "Local" preserves the client source IP and avoids a second hop for LoadBalancer and Nodeport type services, but risks potentially imbalanced traffic spreading. "Cluster" obscures the client source IP and may cause a second hop to another node, but should have good overall load-spreading.
     * @type {string}
     * @memberof V1ServiceSpec
     */
    externalTrafficPolicy?: string;
    /**
     * healthCheckNodePort specifies the healthcheck nodePort for the service. If not specified, HealthCheckNodePort is created by the service api backend with the allocated nodePort. Will use user-specified nodePort value if specified by the client. Only effects when Type is set to LoadBalancer and ExternalTrafficPolicy is set to Local.
     * @type {number}
     * @memberof V1ServiceSpec
     */
    healthCheckNodePort?: number;
    /**
     * ipFamily specifies whether this Service has a preference for a particular IP family (e.g. IPv4 vs. IPv6).  If a specific IP family is requested, the clusterIP field will be allocated from that family, if it is available in the cluster.  If no IP family is requested, the cluster's primary IP family will be used. Other IP fields (loadBalancerIP, loadBalancerSourceRanges, externalIPs) and controllers which allocate external load-balancers should use the same IP family.  Endpoints for this Service will be of this family.  This field is immutable after creation. Assigning a ServiceIPFamily not available in the cluster (e.g. IPv6 in IPv4 only cluster) is an error condition and will fail during clusterIP assignment.
     * @type {string}
     * @memberof V1ServiceSpec
     */
    ipFamily?: string;
    /**
     * Only applies to Service Type: LoadBalancer LoadBalancer will get created with the IP specified in this field. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature.
     * @type {string}
     * @memberof V1ServiceSpec
     */
    loadBalancerIP?: string;
    /**
     * If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature." More info: https://kubernetes.io/docs/tasks/access-application-cluster/configure-cloud-provider-firewall/
     * @type {Array<string>}
     * @memberof V1ServiceSpec
     */
    loadBalancerSourceRanges?: Array<string>;
    /**
     * The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
     * @type {Array<V1ServicePort>}
     * @memberof V1ServiceSpec
     */
    ports?: Array<V1ServicePort>;
    /**
     * publishNotReadyAddresses, when set to true, indicates that DNS implementations must publish the notReadyAddresses of subsets for the Endpoints associated with the Service. The default value is false. The primary use case for setting this field is to use a StatefulSet's Headless Service to propagate SRV records for its Pods without respect to their readiness for purpose of peer discovery.
     * @type {boolean}
     * @memberof V1ServiceSpec
     */
    publishNotReadyAddresses?: boolean;
    /**
     * Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/
     * @type {{ [key: string]: string; }}
     * @memberof V1ServiceSpec
     */
    selector?: { [key: string]: string; };
    /**
     * Supports "ClientIP" and "None". Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
     * @type {string}
     * @memberof V1ServiceSpec
     */
    sessionAffinity?: string;
    /**
     * 
     * @type {V1SessionAffinityConfig}
     * @memberof V1ServiceSpec
     */
    sessionAffinityConfig?: V1SessionAffinityConfig;
    /**
     * topologyKeys is a preference-order list of topology keys which implementations of services should use to preferentially sort endpoints when accessing this Service, it can not be used at the same time as externalTrafficPolicy=Local. Topology keys must be valid label keys and at most 16 keys may be specified. Endpoints are chosen based on the first topology key with available backends. If this field is specified and all entries have no backends that match the topology of the client, the service has no backends for that client and connections should fail. The special value "*" may be used to mean "any topology". This catch-all value, if used, only makes sense as the last value in the list. If this is not specified or empty, no topology constraints will be applied.
     * @type {Array<string>}
     * @memberof V1ServiceSpec
     */
    topologyKeys?: Array<string>;
    /**
     * type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. "ExternalName" maps to the specified externalName. "ClusterIP" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object. If clusterIP is "None", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a stable IP. "NodePort" builds on ClusterIP and allocates a port on every node which routes to the clusterIP. "LoadBalancer" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the clusterIP. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
     * @type {string}
     * @memberof V1ServiceSpec
     */
    type?: string;
}

export function V1ServiceSpecFromJSON(json: any): V1ServiceSpec {
    return V1ServiceSpecFromJSONTyped(json, false);
}

export function V1ServiceSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ServiceSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'clusterIP': !exists(json, 'clusterIP') ? undefined : json['clusterIP'],
        'externalIPs': !exists(json, 'externalIPs') ? undefined : json['externalIPs'],
        'externalName': !exists(json, 'externalName') ? undefined : json['externalName'],
        'externalTrafficPolicy': !exists(json, 'externalTrafficPolicy') ? undefined : json['externalTrafficPolicy'],
        'healthCheckNodePort': !exists(json, 'healthCheckNodePort') ? undefined : json['healthCheckNodePort'],
        'ipFamily': !exists(json, 'ipFamily') ? undefined : json['ipFamily'],
        'loadBalancerIP': !exists(json, 'loadBalancerIP') ? undefined : json['loadBalancerIP'],
        'loadBalancerSourceRanges': !exists(json, 'loadBalancerSourceRanges') ? undefined : json['loadBalancerSourceRanges'],
        'ports': !exists(json, 'ports') ? undefined : ((json['ports'] as Array<any>).map(V1ServicePortFromJSON)),
        'publishNotReadyAddresses': !exists(json, 'publishNotReadyAddresses') ? undefined : json['publishNotReadyAddresses'],
        'selector': !exists(json, 'selector') ? undefined : json['selector'],
        'sessionAffinity': !exists(json, 'sessionAffinity') ? undefined : json['sessionAffinity'],
        'sessionAffinityConfig': !exists(json, 'sessionAffinityConfig') ? undefined : V1SessionAffinityConfigFromJSON(json['sessionAffinityConfig']),
        'topologyKeys': !exists(json, 'topologyKeys') ? undefined : json['topologyKeys'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function V1ServiceSpecToJSON(value?: V1ServiceSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'clusterIP': value.clusterIP,
        'externalIPs': value.externalIPs,
        'externalName': value.externalName,
        'externalTrafficPolicy': value.externalTrafficPolicy,
        'healthCheckNodePort': value.healthCheckNodePort,
        'ipFamily': value.ipFamily,
        'loadBalancerIP': value.loadBalancerIP,
        'loadBalancerSourceRanges': value.loadBalancerSourceRanges,
        'ports': value.ports === undefined ? undefined : ((value.ports as Array<any>).map(V1ServicePortToJSON)),
        'publishNotReadyAddresses': value.publishNotReadyAddresses,
        'selector': value.selector,
        'sessionAffinity': value.sessionAffinity,
        'sessionAffinityConfig': V1SessionAffinityConfigToJSON(value.sessionAffinityConfig),
        'topologyKeys': value.topologyKeys,
        'type': value.type,
    };
}


