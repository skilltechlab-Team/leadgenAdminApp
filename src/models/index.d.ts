import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ExecutiveMasterMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PaymentMasterMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VendorMasterMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ExamStatusMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ExamMasterMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LeadMasterMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class ExecutiveMaster {
  readonly id: string;
  readonly name?: string;
  readonly phone?: string;
  readonly email?: string;
  readonly imageURI?: string;
  readonly filename?: string;
  readonly status?: string;
  readonly username?: string;
  readonly gender?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ExecutiveMaster, ExecutiveMasterMetaData>);
  static copyOf(source: ExecutiveMaster, mutator: (draft: MutableModel<ExecutiveMaster, ExecutiveMasterMetaData>) => MutableModel<ExecutiveMaster, ExecutiveMasterMetaData> | void): ExecutiveMaster;
}

export declare class PaymentMaster {
  readonly id: string;
  readonly status?: string;
  readonly lead_ID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<PaymentMaster, PaymentMasterMetaData>);
  static copyOf(source: PaymentMaster, mutator: (draft: MutableModel<PaymentMaster, PaymentMasterMetaData>) => MutableModel<PaymentMaster, PaymentMasterMetaData> | void): PaymentMaster;
}

export declare class VendorMaster {
  readonly id: string;
  readonly vendor_Name?: string;
  readonly vendor_Code?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<VendorMaster, VendorMasterMetaData>);
  static copyOf(source: VendorMaster, mutator: (draft: MutableModel<VendorMaster, VendorMasterMetaData>) => MutableModel<VendorMaster, VendorMasterMetaData> | void): VendorMaster;
}

export declare class ExamStatus {
  readonly id: string;
  readonly lead_Id?: string;
  readonly status?: string;
  readonly examID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ExamStatus, ExamStatusMetaData>);
  static copyOf(source: ExamStatus, mutator: (draft: MutableModel<ExamStatus, ExamStatusMetaData>) => MutableModel<ExamStatus, ExamStatusMetaData> | void): ExamStatus;
}

export declare class ExamMaster {
  readonly id: string;
  readonly exam_name?: string;
  readonly exam_code?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ExamMaster, ExamMasterMetaData>);
  static copyOf(source: ExamMaster, mutator: (draft: MutableModel<ExamMaster, ExamMasterMetaData>) => MutableModel<ExamMaster, ExamMasterMetaData> | void): ExamMaster;
}

export declare class LeadMaster {
  readonly id: string;
  readonly name?: string;
  readonly email?: string;
  readonly country_code?: string;
  readonly phone?: string;
  readonly exam_Id?: string;
  readonly vendor_Id?: string;
  readonly payment_id?: string;
  readonly trainer_charges?: string;
  readonly net_profit?: string;
  readonly total_fees?: string;
  readonly executiveID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<LeadMaster, LeadMasterMetaData>);
  static copyOf(source: LeadMaster, mutator: (draft: MutableModel<LeadMaster, LeadMasterMetaData>) => MutableModel<LeadMaster, LeadMasterMetaData> | void): LeadMaster;
}