/* tslint:disable */
/* eslint-disable */
/**
 * Halo Next API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from "../configuration";
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from "axios";
import globalAxios from "axios";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "../base";
// @ts-ignore
import { Counter } from "../models";
// @ts-ignore
import { CounterList } from "../models";
/**
 * MetricsHaloRunV1alpha1CounterApi - axios parameter creator
 * @export
 */
export const MetricsHaloRunV1alpha1CounterApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Create metrics.halo.run/v1alpha1/Counter
     * @param {Counter} [counter] Fresh counter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createmetricsHaloRunV1alpha1Counter: async (
      counter?: Counter,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/apis/metrics.halo.run/v1alpha1/counters`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        counter,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Delete metrics.halo.run/v1alpha1/Counter
     * @param {string} name Name of counter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletemetricsHaloRunV1alpha1Counter: async (
      name: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists("deletemetricsHaloRunV1alpha1Counter", "name", name);
      const localVarPath =
        `/apis/metrics.halo.run/v1alpha1/counters/{name}`.replace(
          `{${"name"}}`,
          encodeURIComponent(String(name))
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "DELETE",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Get metrics.halo.run/v1alpha1/Counter
     * @param {string} name Name of counter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getmetricsHaloRunV1alpha1Counter: async (
      name: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists("getmetricsHaloRunV1alpha1Counter", "name", name);
      const localVarPath =
        `/apis/metrics.halo.run/v1alpha1/counters/{name}`.replace(
          `{${"name"}}`,
          encodeURIComponent(String(name))
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * List metrics.halo.run/v1alpha1/Counter
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listmetricsHaloRunV1alpha1Counter: async (
      fieldSelector?: Array<string>,
      labelSelector?: Array<string>,
      page?: number,
      size?: number,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/apis/metrics.halo.run/v1alpha1/counters`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (fieldSelector) {
        localVarQueryParameter["fieldSelector"] = fieldSelector;
      }

      if (labelSelector) {
        localVarQueryParameter["labelSelector"] = labelSelector;
      }

      if (page !== undefined) {
        localVarQueryParameter["page"] = page;
      }

      if (size !== undefined) {
        localVarQueryParameter["size"] = size;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Update metrics.halo.run/v1alpha1/Counter
     * @param {string} name Name of counter
     * @param {Counter} [counter] Updated counter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatemetricsHaloRunV1alpha1Counter: async (
      name: string,
      counter?: Counter,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists("updatemetricsHaloRunV1alpha1Counter", "name", name);
      const localVarPath =
        `/apis/metrics.halo.run/v1alpha1/counters/{name}`.replace(
          `{${"name"}}`,
          encodeURIComponent(String(name))
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "PUT",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        counter,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * MetricsHaloRunV1alpha1CounterApi - functional programming interface
 * @export
 */
export const MetricsHaloRunV1alpha1CounterApiFp = function (
  configuration?: Configuration
) {
  const localVarAxiosParamCreator =
    MetricsHaloRunV1alpha1CounterApiAxiosParamCreator(configuration);
  return {
    /**
     * Create metrics.halo.run/v1alpha1/Counter
     * @param {Counter} [counter] Fresh counter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createmetricsHaloRunV1alpha1Counter(
      counter?: Counter,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Counter>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createmetricsHaloRunV1alpha1Counter(
          counter,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Delete metrics.halo.run/v1alpha1/Counter
     * @param {string} name Name of counter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deletemetricsHaloRunV1alpha1Counter(
      name: string,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deletemetricsHaloRunV1alpha1Counter(
          name,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Get metrics.halo.run/v1alpha1/Counter
     * @param {string} name Name of counter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getmetricsHaloRunV1alpha1Counter(
      name: string,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Counter>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getmetricsHaloRunV1alpha1Counter(
          name,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * List metrics.halo.run/v1alpha1/Counter
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listmetricsHaloRunV1alpha1Counter(
      fieldSelector?: Array<string>,
      labelSelector?: Array<string>,
      page?: number,
      size?: number,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<CounterList>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.listmetricsHaloRunV1alpha1Counter(
          fieldSelector,
          labelSelector,
          page,
          size,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Update metrics.halo.run/v1alpha1/Counter
     * @param {string} name Name of counter
     * @param {Counter} [counter] Updated counter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updatemetricsHaloRunV1alpha1Counter(
      name: string,
      counter?: Counter,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Counter>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updatemetricsHaloRunV1alpha1Counter(
          name,
          counter,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

/**
 * MetricsHaloRunV1alpha1CounterApi - factory interface
 * @export
 */
export const MetricsHaloRunV1alpha1CounterApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = MetricsHaloRunV1alpha1CounterApiFp(configuration);
  return {
    /**
     * Create metrics.halo.run/v1alpha1/Counter
     * @param {MetricsHaloRunV1alpha1CounterApiCreatemetricsHaloRunV1alpha1CounterRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createmetricsHaloRunV1alpha1Counter(
      requestParameters: MetricsHaloRunV1alpha1CounterApiCreatemetricsHaloRunV1alpha1CounterRequest = {},
      options?: AxiosRequestConfig
    ): AxiosPromise<Counter> {
      return localVarFp
        .createmetricsHaloRunV1alpha1Counter(requestParameters.counter, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Delete metrics.halo.run/v1alpha1/Counter
     * @param {MetricsHaloRunV1alpha1CounterApiDeletemetricsHaloRunV1alpha1CounterRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletemetricsHaloRunV1alpha1Counter(
      requestParameters: MetricsHaloRunV1alpha1CounterApiDeletemetricsHaloRunV1alpha1CounterRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<void> {
      return localVarFp
        .deletemetricsHaloRunV1alpha1Counter(requestParameters.name, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Get metrics.halo.run/v1alpha1/Counter
     * @param {MetricsHaloRunV1alpha1CounterApiGetmetricsHaloRunV1alpha1CounterRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getmetricsHaloRunV1alpha1Counter(
      requestParameters: MetricsHaloRunV1alpha1CounterApiGetmetricsHaloRunV1alpha1CounterRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<Counter> {
      return localVarFp
        .getmetricsHaloRunV1alpha1Counter(requestParameters.name, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * List metrics.halo.run/v1alpha1/Counter
     * @param {MetricsHaloRunV1alpha1CounterApiListmetricsHaloRunV1alpha1CounterRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listmetricsHaloRunV1alpha1Counter(
      requestParameters: MetricsHaloRunV1alpha1CounterApiListmetricsHaloRunV1alpha1CounterRequest = {},
      options?: AxiosRequestConfig
    ): AxiosPromise<CounterList> {
      return localVarFp
        .listmetricsHaloRunV1alpha1Counter(
          requestParameters.fieldSelector,
          requestParameters.labelSelector,
          requestParameters.page,
          requestParameters.size,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Update metrics.halo.run/v1alpha1/Counter
     * @param {MetricsHaloRunV1alpha1CounterApiUpdatemetricsHaloRunV1alpha1CounterRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatemetricsHaloRunV1alpha1Counter(
      requestParameters: MetricsHaloRunV1alpha1CounterApiUpdatemetricsHaloRunV1alpha1CounterRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<Counter> {
      return localVarFp
        .updatemetricsHaloRunV1alpha1Counter(
          requestParameters.name,
          requestParameters.counter,
          options
        )
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for createmetricsHaloRunV1alpha1Counter operation in MetricsHaloRunV1alpha1CounterApi.
 * @export
 * @interface MetricsHaloRunV1alpha1CounterApiCreatemetricsHaloRunV1alpha1CounterRequest
 */
export interface MetricsHaloRunV1alpha1CounterApiCreatemetricsHaloRunV1alpha1CounterRequest {
  /**
   * Fresh counter
   * @type {Counter}
   * @memberof MetricsHaloRunV1alpha1CounterApiCreatemetricsHaloRunV1alpha1Counter
   */
  readonly counter?: Counter;
}

/**
 * Request parameters for deletemetricsHaloRunV1alpha1Counter operation in MetricsHaloRunV1alpha1CounterApi.
 * @export
 * @interface MetricsHaloRunV1alpha1CounterApiDeletemetricsHaloRunV1alpha1CounterRequest
 */
export interface MetricsHaloRunV1alpha1CounterApiDeletemetricsHaloRunV1alpha1CounterRequest {
  /**
   * Name of counter
   * @type {string}
   * @memberof MetricsHaloRunV1alpha1CounterApiDeletemetricsHaloRunV1alpha1Counter
   */
  readonly name: string;
}

/**
 * Request parameters for getmetricsHaloRunV1alpha1Counter operation in MetricsHaloRunV1alpha1CounterApi.
 * @export
 * @interface MetricsHaloRunV1alpha1CounterApiGetmetricsHaloRunV1alpha1CounterRequest
 */
export interface MetricsHaloRunV1alpha1CounterApiGetmetricsHaloRunV1alpha1CounterRequest {
  /**
   * Name of counter
   * @type {string}
   * @memberof MetricsHaloRunV1alpha1CounterApiGetmetricsHaloRunV1alpha1Counter
   */
  readonly name: string;
}

/**
 * Request parameters for listmetricsHaloRunV1alpha1Counter operation in MetricsHaloRunV1alpha1CounterApi.
 * @export
 * @interface MetricsHaloRunV1alpha1CounterApiListmetricsHaloRunV1alpha1CounterRequest
 */
export interface MetricsHaloRunV1alpha1CounterApiListmetricsHaloRunV1alpha1CounterRequest {
  /**
   * Field selector for filtering.
   * @type {Array<string>}
   * @memberof MetricsHaloRunV1alpha1CounterApiListmetricsHaloRunV1alpha1Counter
   */
  readonly fieldSelector?: Array<string>;

  /**
   * Label selector for filtering.
   * @type {Array<string>}
   * @memberof MetricsHaloRunV1alpha1CounterApiListmetricsHaloRunV1alpha1Counter
   */
  readonly labelSelector?: Array<string>;

  /**
   * The page number. Zero indicates no page.
   * @type {number}
   * @memberof MetricsHaloRunV1alpha1CounterApiListmetricsHaloRunV1alpha1Counter
   */
  readonly page?: number;

  /**
   * Size of one page. Zero indicates no limit.
   * @type {number}
   * @memberof MetricsHaloRunV1alpha1CounterApiListmetricsHaloRunV1alpha1Counter
   */
  readonly size?: number;
}

/**
 * Request parameters for updatemetricsHaloRunV1alpha1Counter operation in MetricsHaloRunV1alpha1CounterApi.
 * @export
 * @interface MetricsHaloRunV1alpha1CounterApiUpdatemetricsHaloRunV1alpha1CounterRequest
 */
export interface MetricsHaloRunV1alpha1CounterApiUpdatemetricsHaloRunV1alpha1CounterRequest {
  /**
   * Name of counter
   * @type {string}
   * @memberof MetricsHaloRunV1alpha1CounterApiUpdatemetricsHaloRunV1alpha1Counter
   */
  readonly name: string;

  /**
   * Updated counter
   * @type {Counter}
   * @memberof MetricsHaloRunV1alpha1CounterApiUpdatemetricsHaloRunV1alpha1Counter
   */
  readonly counter?: Counter;
}

/**
 * MetricsHaloRunV1alpha1CounterApi - object-oriented interface
 * @export
 * @class MetricsHaloRunV1alpha1CounterApi
 * @extends {BaseAPI}
 */
export class MetricsHaloRunV1alpha1CounterApi extends BaseAPI {
  /**
   * Create metrics.halo.run/v1alpha1/Counter
   * @param {MetricsHaloRunV1alpha1CounterApiCreatemetricsHaloRunV1alpha1CounterRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MetricsHaloRunV1alpha1CounterApi
   */
  public createmetricsHaloRunV1alpha1Counter(
    requestParameters: MetricsHaloRunV1alpha1CounterApiCreatemetricsHaloRunV1alpha1CounterRequest = {},
    options?: AxiosRequestConfig
  ) {
    return MetricsHaloRunV1alpha1CounterApiFp(this.configuration)
      .createmetricsHaloRunV1alpha1Counter(requestParameters.counter, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Delete metrics.halo.run/v1alpha1/Counter
   * @param {MetricsHaloRunV1alpha1CounterApiDeletemetricsHaloRunV1alpha1CounterRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MetricsHaloRunV1alpha1CounterApi
   */
  public deletemetricsHaloRunV1alpha1Counter(
    requestParameters: MetricsHaloRunV1alpha1CounterApiDeletemetricsHaloRunV1alpha1CounterRequest,
    options?: AxiosRequestConfig
  ) {
    return MetricsHaloRunV1alpha1CounterApiFp(this.configuration)
      .deletemetricsHaloRunV1alpha1Counter(requestParameters.name, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get metrics.halo.run/v1alpha1/Counter
   * @param {MetricsHaloRunV1alpha1CounterApiGetmetricsHaloRunV1alpha1CounterRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MetricsHaloRunV1alpha1CounterApi
   */
  public getmetricsHaloRunV1alpha1Counter(
    requestParameters: MetricsHaloRunV1alpha1CounterApiGetmetricsHaloRunV1alpha1CounterRequest,
    options?: AxiosRequestConfig
  ) {
    return MetricsHaloRunV1alpha1CounterApiFp(this.configuration)
      .getmetricsHaloRunV1alpha1Counter(requestParameters.name, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * List metrics.halo.run/v1alpha1/Counter
   * @param {MetricsHaloRunV1alpha1CounterApiListmetricsHaloRunV1alpha1CounterRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MetricsHaloRunV1alpha1CounterApi
   */
  public listmetricsHaloRunV1alpha1Counter(
    requestParameters: MetricsHaloRunV1alpha1CounterApiListmetricsHaloRunV1alpha1CounterRequest = {},
    options?: AxiosRequestConfig
  ) {
    return MetricsHaloRunV1alpha1CounterApiFp(this.configuration)
      .listmetricsHaloRunV1alpha1Counter(
        requestParameters.fieldSelector,
        requestParameters.labelSelector,
        requestParameters.page,
        requestParameters.size,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Update metrics.halo.run/v1alpha1/Counter
   * @param {MetricsHaloRunV1alpha1CounterApiUpdatemetricsHaloRunV1alpha1CounterRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MetricsHaloRunV1alpha1CounterApi
   */
  public updatemetricsHaloRunV1alpha1Counter(
    requestParameters: MetricsHaloRunV1alpha1CounterApiUpdatemetricsHaloRunV1alpha1CounterRequest,
    options?: AxiosRequestConfig
  ) {
    return MetricsHaloRunV1alpha1CounterApiFp(this.configuration)
      .updatemetricsHaloRunV1alpha1Counter(
        requestParameters.name,
        requestParameters.counter,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }
}
