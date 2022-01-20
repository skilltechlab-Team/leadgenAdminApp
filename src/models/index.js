// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ExecutiveMaster, PaymentMaster, VendorMaster, ExamStatus, ExamMaster, LeadMaster } = initSchema(schema);

export {
  ExecutiveMaster,
  PaymentMaster,
  VendorMaster,
  ExamStatus,
  ExamMaster,
  LeadMaster
};