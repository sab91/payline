import {default as Payline} from "./src/payline";
import {CURRENCIES, Environment} from "./src/model";

// Handler for serverless framework exposing all the functions with the serverless provider

// config
const merchantId: string = process.env.MERCHANT_ID || "XXX";
const accessKey: string = process.env.ACCESS_KEY ||"XXX";
const contractId: string = process.env.CONTRACT_ID || "1234567";
const environment: Environment = (process.env.ENVIRONMENT || "") === Environment.production ?
    Environment.production : Environment.homologation;
const currency: CURRENCIES = CURRENCIES[process.env.CURRENCY || ""] || CURRENCIES.USD;

// instances
const payline = (event): Payline => {
    const instance: Payline = new Payline(event.merchantId || merchantId,
        event.accessKey || accessKey,
        event.contractId || contractId,
        event.environment || environment);
    instance.defaultCurrency = event.currency || currency;
    return instance;
};

// can encode data (ex. adding custom result code)
const handler = async (event, callback, funName: string, args: any[] = []) => {
    try {
        const results = await payline(event)[funName](...args);
        callback(null, results);
        // force to exit the process so no waiting for timeout
        //process.exit(0);
    } catch (err) {
        err.status = err.status || false;
        err.errorType = err.errorType || "Error";
        err.statusCode = err.statusCode || 500;
        err.stackTrace = err.stackTrace || [];
        err.body = err.body || err.message || err.msg || err.errorMessage;
        err.message = err.message || err.msg || err.errorMessage;
        if (err.message && typeof err.message !== "string") {
            try {
                err.message = JSON.stringify(err.message);
            } catch (parseErr) {
                console.log("err.message is not a string or JSON");
                console.log(parseErr);
            }
        }
        callback(err);
        //throw err;
        console.log(err);
        // force to exit the process so no waiting for timeout
        process.exit(-1);
    }
};

// functions
export const createWallet = async (event, context, callback) => {
    handler(event, callback, "createWallet", [event.walletId, event.card]);
};

export const getWallet = async (event, context, callback) => {
    handler(event, callback, "getWallet", [event.walletId]);
};

export const updateWallet = async (event, context, callback) => {
    handler(event, callback, "updateWallet", [event.walletId, event.card, event.owner]);
};

export const disableWallet = async (event, context, callback) => {
    handler(event, callback, "disableWallet", [event.walletId]);
};

export const doWebPayment = async (event, context, callback) => {
    handler(event, callback, "doWebPayment", [event.payment, event.returnUrl, event.cancelUrl, event.buyer,
        event.selectedContractList, event.referencePrefix, event.currency, event.order]);
};

export const doCapture = async (event, context, callback) => {
    handler(event, callback, "doCapture", [event.transactionId, event.payment, event.currency]);
};

export const doRefund = async (event, context, callback) => {
    handler(event, callback, "doRefund", [event.transactionId, event.payment, event.comment]);
};

export const scheduleWalletPayment = async (event, context, callback) => {
    handler(event, callback, "scheduleWalletPayment", [event.walletId, event.payment, event.scheduledDate,
        event.referencePrefix, event.currency, event.order]);
};

export const validateCard = async (event, context, callback) => {
    handler(event, callback, "validateCard", [event.payment, event.card,
        event.referencePrefix, event.currency, event.order]);
};

export const doReset = async (event, context, callback) => {
    handler(event, callback, "doReset", [event.transactionId, event.comment]);
};

export const doAuthorization = async (event, context, callback) => {
    handler(event, callback, "doAuthorization", [event.payment, event.card,
        event.referencePrefix, event.currency, event.order]);
};

export const doReAuthorization = async (event, context, callback) => {
    handler(event, callback, "doReAuthorization", [event.transactionId, event.payment,
        event.referencePrefix, event.currency, event.order]);
};

export const doWalletPayment = async (event, context, callback) => {
    handler(event, callback, "doWalletPayment", [event.walletId, event.payment,
        event.referencePrefix, event.currency, event.order]);
};

export const doPayment = async (event, context, callback) => {
    handler(event, callback, "doPayment", [event.payment, event.card,
        event.referencePrefix, event.currency, event.order]);
};

export const transactionDetail = async (event, context, callback) => {
    handler(event, callback, "transactionDetail", [event.transactionId]);
};

export const runAction = async (event, context, callback) => {
    handler(event, callback, "runAction", [event.action, event.args]);
};
