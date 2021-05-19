import { Buyer, Order, Owner, Payment } from "./model";

/**
 * Service - Web Payment
 *
 */

export interface DoWebPaymentRequest {
    version: number | 28;
    payment: Payment;
    order: Order;
    returnURL: string;
    cancelURL: string;
    buyer?: Buyer;
    notificationUrl?: string;
    selectedContractList?: any;
    secondSelectedContractList?: any;
    privateDataList?: any;
    languageCode?: string;
    customPaymentPageCode?: string;
    owner?: Owner;
    securityMode?: string;
    recurring?: any;
    customPaymentTemplateURL?: string;
    contractNumberWalletList?: any;
    merchantName?: string;
    subMerchant?: any;
    miscData?: string;
    asynchronousRetryTimeout?: string;
    threeDSInfo?: any;
    merchantScore?: string;
    skipSmartDisplay?: boolean;
}

export interface GetWebPaymentDetailsRequest {
    version: number | 28;
    token: string;
}

export interface ManageWebWalletRequest {
    version: number | 28;
    contractNumber: string;
    selectedContractList?: any;
    updatePersonalDetails?: string;
    buyer?: Buyer;
    owner?: Owner;
    languageCode?: any;
    customPaymentPageCode?: string;
    securityMode?: string;
    returnURL: string;
    cancelURL?: string;
    notificationURL?: string;
    privateDataList?: any;
    customPaymentTemplateURL?: string;
    contractNumberWalletList?: any;
    merchantName?: string;
    threeDSInfo?: any;
}

export interface GetWebWalletRequest {
    version: number | 28;
    token: string;
}

/**
 * Service - Management Payment
 * TODO
 */

// export interface DoCaptureRequest {
//     // ...
// }

// export interface DoCreditRequest {
//     // ...
// }

// export interface DoDebitRequest {
//     // ...
// }

// export interface DoRefundRequest {
//     // ...
// }

// export interface DoResetRequest {
//     // ...
// }

/**
 * Service - Wallet Management
 * TODO
 */

// export interface CreateWalletRequest {
//     // ...
// }

// export interface DisableWalletRequest {
//     // ...
// }

// export interface DoImmediateWalletPaymentRequest {
//     // ...
// }

// export interface DoRecurrentWalletPaymentRequest {
//     // ...
// }

// export interface DoScheduledWalletPaymentRequest {
//     // ...
// }

// export interface EnableWalletRequest {
//     // ...
// }

// export interface GetWalletRequest {
//     // ...
// }

// export interface UpdateWalletRequest {
//     // ...
// }

/**
 * Service - Direct Payment
 * TODO
 */

// export interface DoAuthorizationRequest {
//     payment: Payment;
//     card: Card;
//     // ...
// }

// export interface DoReAuthorizationRequest {
//     transactionId: string;
//     payment: Payment;
//     // ...
// }

/**
 * Service - Status Request
 * TODO
 */

// export interface GetAlertDetailsRequest {
//     // ...
// }

// export interface GetTransactionDetailsRequest {
//     // ...
// }

// export interface TransactionsSearchRequest {
//     // ...
// }
