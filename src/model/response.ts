import { Buyer, Card, Order, Owner, Payment, Wallet } from "./model";

/**
 * Service - Web Payment
 *
 */

export interface DoWebPaymentResponse {
    result: any;
    token?: string;
    redirectURL?: string;
    stepCode?: string;
    reqCode?: string;
    method?: string;
}

export interface GetWebPaymentDetailsResponse {
    result: any;
    transaction: any;
    payment: Payment;
    authorization: any;
    privateDataList?: any;
    paymentRecordId?: number;
    billingRecordList?: any;
    authentication3DSecure?: any;
    card?: any;
    extendedCard?: any;
    order?: Order;
    paymentAdditionalList?: any;
    media?: string;
    numberOfAttempt?: number;
    wallet?: Wallet;
    contractNumberWalletList?: any; // not in widget / version > v29
    contractNumber?: string;
    bankAccountData?: any;
    subMerchant?: any;
    buyer?: Buyer;
    linkedTransactionId?: string;
}

export interface ManageWebWalletResponse {
    result: any;
    token?: string;
    redirectURL?: string;
}

export interface GetWebWalletResponse {
    result: any;
    wallet?: Wallet;
    owner?: Owner;
    privateDataList?: any;
    extendedCard?: any;
    media?: string;
    numberOfAttempt?: number;
    contractNumberWalletList?: any;
}

/**
 * Service - Management Payment
 * TODO
 */

// export interface DoCaptureResponse {
//     // ...
// }

// export interface DoCreditResponse {
//     // ...
// }

// export interface DoDebitResponse {
//     // ...
// }

// export interface DoRefundResponse {
//     // ...
// }

// export interface DoResetResponse {
//     // ...
// }

/**
 * Service - Wallet Management
 * TODO
 */

// export interface CreateWalletResponse {
//     // ...
// }

// export interface DisableWalletResponse {
//     // ...
// }

// export interface DoImmediateWalletPaymentResponse {
//     // ...
// }

// export interface DoRecurrentWalletPaymentResponse {
//     // ...
// }

// export interface DoScheduledWalletPaymentResponse {
//     // ...
// }

// export interface EnableWalletResponse {
//     // ...
// }

// export interface GetWalletResponse {
//     // ...
// }

// export interface UpdateWalletResponse {
//     // ...
// }

/**
 * Service - Direct Payment
 * TODO
 */

// export interface DoAuthorizationResponse {
//     payment: Payment;
//     card: Card;
//     // ...
// }

// export interface DoReAuthorizationResponse {
//     transactionId: string;
//     payment: Payment;
//     // ...
// }

/**
 * Service - Status Request
 * TODO
 */

// export interface GetAlertDetailsResponse {
//     // ...
// }

// export interface GetTransactionDetailsResponse {
//     // ...
// }

// export interface TransactionsSearchResponse {
//     // ...
// }
