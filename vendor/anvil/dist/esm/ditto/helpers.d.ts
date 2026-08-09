import { DittoConnectionValues } from './types';
/** Function used for converting a Ditto instance configuration into a unique hash.
 * This allows us to index different configurations uniquely and to be able to create
 * new Ditto instances for the same apps using different configurations.
 */
export declare const configurationHash: (configuration: DittoConnectionValues) => string;
