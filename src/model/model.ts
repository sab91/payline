import * as path from "path";

export const enum Environment {
    homologation = "homologation",
    production = "production"
}
export const enum Operation {
    webPayment = "webPayment",
    directPayment = "directPayment",
    extended = "extended"
}

export type EnvironmentsProperty<T> = { [key in Environment]: T };
export type OperationsProperty<T> = { [key in Operation]: T };

export enum CURRENCIES {
    EUR = 978,
    USD = 840,
    GBP = 826
}

export enum ACTIONS {
    AUTHORIZATION = 100,
    PAYMENT = 101, // AUTH_CAPTURE = validation + payment
    VALIDATION = 201, // CAPTURE
    ACCOUNT_VERIF = 108,
    TOKEN_PAN = 109,
    AUTH_WITHOUT_CVX = 120,
    AUTH_CAP_WITHOUT_CVX = 121,
    AUTH_COF = 122, // COF (CARD ON FILE)
    AUTH_CAPTURE_COF = 123,
    AUTH_NX = 124,
    AUTH_CAPTURE_NX = 125,
    AUTHOR_OTHER_COF = 128,
    AUTHOR_CAPTURE_OTHER_COF = 129,
    ACCOUNT_VERIF_SHARE_PAYMENT = 148,
    SCT = 150, // SEPA Credit Transfert
    REAUTHORIZATION = 202,
    DEBIT = 204,
    REFUND = 421,
    CREDIT = 422
}

export enum MODE {
    CPT = "CPT",
    DIF = "Deferred",
    NX = "N installments",
    REC = "Recurring"
}

export enum METHOD {
    CB = "CB",
    GOOGLE_PAY = "GOOGLE_PAY",
    FNAC = "FNAC",
    LYDIA = "LYDIA",
    MAESTRO = "MAESTRO",
    MASTERCARD = "MASTERCARD",
    MASTERPASS = "MASTERPASS",
    ONEY = "ONEY",
    PAYLIB = "PAYLIB",
    PAYPAL = "PAYPAL",
    PRESTO = "PRESTO",
    SAMSUNG_PAY = "SAMSUNG_PAY",
    SOFINCO = "SOFINCO",
    SOFINCO_3XCB = "SOFINCO_3XCB",
    SOFINCO_4XCB = "SOFINCO_4XCB",
    TOTALGR = "TOTALGR",
    TRD = "TRD",
    VISA = "VISA"
}

export enum CBRAND {
    CB = "CB",
    VISA = "VISA",
    MASTERCARD = "MASTERCARD",
    MAESTRO = "MAESTRO",
    BCMC = "BCMC"
}

export enum COUNTRY {
    FR = "FR",
    GB = "GB",
    ES = "ES",
    IT = "IT",
    BE = "BE",
    DE = "DE",
    NL = "NL",
    PT = "PT"
}

export enum DELIVERY_TIME {
    EXPRESS = 1,
    STANDARD = 2,
    ELECTRONIC = 3, // 3DSV2 Only
    SAME_DAY = 4, // 3DSV2 Only
    OVERNIGHT = 5, // 3DSV2 Only
    TWO_DAYS_AND_MORE = 6 // 3DSV2 Only
}

export enum DELIVERY_MODE {
    COLLECT = 1,
    PICKUP_POINT = 2,
    COLLECT_FROM_POI = 3,
    MAIL = 4,
    ELECTRONIC_TICKET = 5,
    SHIP_TO_BILLING_ADDRESS = 6, // 3DSV2 Only
    SHIP_TO_VERIFIED_ADDRESS = 7, // 3DSV2 Only
    SHIP_TO_OTHER_ADDRESS = 8, // 3DSV2 Only
    EVENT_OR_TRAVEL_TICKET = 9, // 3DSV2 Only
    LOCKER = 10, // 3DSV2 Only
    OTHER = 999 // 3DSV2 Only
}

export interface Wallet {
    walletId: string;
    card: Card;
    lastName?: string;
    firstName?: string;
    email?: string;
    shippingAddress?: string;
    comment?: string;
    default?: string;
    cardStatus?: string;
    cardBrand?: string;
}

export interface PaymentData {
    transactionID: string;
    network: string;
    tokenData: string;
}

export interface Card {
    number: string;
    type?: string;
    expirationDate: Date;
    cvx: string;
    encryptedData?: string;
    encryptionKeyId?: string;
    ownerBirthdayDate?: string;
    password?: string;
    cardPresent?: string;
    cardholder?: string;
    token?: string;
    paymentData?: PaymentData;
}

export interface Payment {
    amount: number;
    currency: CURRENCIES;
    action: ACTIONS;
    mode: MODE;
    contractNumber?: string;
    differedActionDate?: Date; // Required if DIF ACTION selected / Format dd/mm/yy
    method?: METHOD;
    softDescriptor?: string;
    cardBrand?: CBRAND;
    registrationToken?: string;
    cumulatedAmount?: string;
}

export interface Order {
    ref?: string;
    origin?: string; // MO (mail), TO (telephone) or Empty
    country?: COUNTRY;
    taxes?: string; // Taxes to add
    amount?: number;
    currency?: CURRENCIES;
    date?: Date; // Format : dd / mm / yyyy HH24: MI
    details?: any;
    deliveryTime?: DELIVERY_TIME;
    deliveryMode?: DELIVERY_MODE;
    deliveryCharge?: number;
    deliveryExpectedDate?: Date; // Format: dd/mm/yyyy
    deliveryExpectedDelay?: number; // In days
    discountAmount?: number;
    OTAPackageType?: any; // 1, 2, 3, 99
    OTADestinationCountry?: any; // FR, DE, GB, ES, IT, PT
    bookingReference?: string;
    orderDetail?: any; // Only for origin = MO or TO
    orderExtended?: any;
    orderOTA?: any;
}

export interface OrderDetails {
    ref?: string;
    price?: number;
    quantity?: number;
    comment?: string;
    category?: any;
    brand?: string;
    subcategory1?: string;
    subcategory2?: string;
    additionalData?: any;
    taxRate?: number; // 2000 for 20%
    seller?: string;
    sellerType?: number; // Professional (1) or Private seller (2)
}

/**
 * ISO 3166-1 Standard
 */
export interface Countries {
    FR: "FR";
    DE: "DE";
    GB: "GB";
    ES: "ES";
    IT: "IT";
    PT: "PT";
    [country: string]: string;
}

export interface Address {
    title?: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    street1?: string;
    street2?: string;
    cityName?: string;
    zipCode?: string;
    country?: Countries; // 2 letter country code
    phone?: string;
    phoneType?: string;
    state?: string;
}

export interface AddressOwner {
    street?: string;
    cityName?: string;
    zipCode?: string;
    country?: Countries; // 2 letter country code
    phone?: string;
}

export interface Owner {
    lastName?: string;
    firstName?: string;
    billingAddress?: AddressOwner;
    issueCardDate?: Date;
}

export interface Buyer {
    title?: string; // special code between 1 and 12
    lastName?: string;
    firstName?: string;
    email?: string;
    shippingAddress?: Address;
    billingAddress?: Address;
    issueCardDate?: Date;
}

export interface RawResult {
    raw: any;
}

export interface TransactionResult extends RawResult {
    id: string;
}

export interface UrlResult extends RawResult {
    url: string;
}

export interface SuccessResult extends RawResult {
    success: boolean;
}

export interface ValidationResult extends SuccessResult {
    raw: {
        authorization: TransactionResult | null;
        reset: TransactionResult | null;
    };
}

export interface WalletResult extends RawResult {
    wallet: Wallet;
}

export const DEFAULT_ENDPOINTS_PREFIX: EnvironmentsProperty<string> = {
    homologation: "https://homologation.payline.com/V4/services/",
    production: "https://services.payline.com/V4/services/"
};

export const DEFAULT_WSDLS_PREFIX: EnvironmentsProperty<string> = {
    homologation: path.join(__dirname, "wsdl/homologation/"),
    production: path.join(__dirname, "wsdl/production/")
};

export const DEFAULT_WSDLS_NAME: OperationsProperty<string> = {
    webPayment: "WebPaymentAPI.wsdl",
    directPayment: "DirectPaymentAPI.wsdl",
    extended: "ExtendedAPI.wsdl"
};

export const MIN_AMOUNT = 1;
