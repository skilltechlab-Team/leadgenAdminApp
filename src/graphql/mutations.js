/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createExecutiveMaster = /* GraphQL */ `
  mutation CreateExecutiveMaster(
    $input: CreateExecutiveMasterInput!
    $condition: ModelExecutiveMasterConditionInput
  ) {
    createExecutiveMaster(input: $input, condition: $condition) {
      id
      name
      phone
      email
      imageURI
      filename
      status
      username
      gender
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateExecutiveMaster = /* GraphQL */ `
  mutation UpdateExecutiveMaster(
    $input: UpdateExecutiveMasterInput!
    $condition: ModelExecutiveMasterConditionInput
  ) {
    updateExecutiveMaster(input: $input, condition: $condition) {
      id
      name
      phone
      email
      imageURI
      filename
      status
      username
      gender
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteExecutiveMaster = /* GraphQL */ `
  mutation DeleteExecutiveMaster(
    $input: DeleteExecutiveMasterInput!
    $condition: ModelExecutiveMasterConditionInput
  ) {
    deleteExecutiveMaster(input: $input, condition: $condition) {
      id
      name
      phone
      email
      imageURI
      filename
      status
      username
      gender
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createPaymentMaster = /* GraphQL */ `
  mutation CreatePaymentMaster(
    $input: CreatePaymentMasterInput!
    $condition: ModelPaymentMasterConditionInput
  ) {
    createPaymentMaster(input: $input, condition: $condition) {
      id
      status
      lead_ID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updatePaymentMaster = /* GraphQL */ `
  mutation UpdatePaymentMaster(
    $input: UpdatePaymentMasterInput!
    $condition: ModelPaymentMasterConditionInput
  ) {
    updatePaymentMaster(input: $input, condition: $condition) {
      id
      status
      lead_ID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deletePaymentMaster = /* GraphQL */ `
  mutation DeletePaymentMaster(
    $input: DeletePaymentMasterInput!
    $condition: ModelPaymentMasterConditionInput
  ) {
    deletePaymentMaster(input: $input, condition: $condition) {
      id
      status
      lead_ID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createVendorMaster = /* GraphQL */ `
  mutation CreateVendorMaster(
    $input: CreateVendorMasterInput!
    $condition: ModelVendorMasterConditionInput
  ) {
    createVendorMaster(input: $input, condition: $condition) {
      id
      vendor_Name
      vendor_Code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateVendorMaster = /* GraphQL */ `
  mutation UpdateVendorMaster(
    $input: UpdateVendorMasterInput!
    $condition: ModelVendorMasterConditionInput
  ) {
    updateVendorMaster(input: $input, condition: $condition) {
      id
      vendor_Name
      vendor_Code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteVendorMaster = /* GraphQL */ `
  mutation DeleteVendorMaster(
    $input: DeleteVendorMasterInput!
    $condition: ModelVendorMasterConditionInput
  ) {
    deleteVendorMaster(input: $input, condition: $condition) {
      id
      vendor_Name
      vendor_Code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createExamStatus = /* GraphQL */ `
  mutation CreateExamStatus(
    $input: CreateExamStatusInput!
    $condition: ModelExamStatusConditionInput
  ) {
    createExamStatus(input: $input, condition: $condition) {
      id
      lead_Id
      status
      examID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateExamStatus = /* GraphQL */ `
  mutation UpdateExamStatus(
    $input: UpdateExamStatusInput!
    $condition: ModelExamStatusConditionInput
  ) {
    updateExamStatus(input: $input, condition: $condition) {
      id
      lead_Id
      status
      examID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteExamStatus = /* GraphQL */ `
  mutation DeleteExamStatus(
    $input: DeleteExamStatusInput!
    $condition: ModelExamStatusConditionInput
  ) {
    deleteExamStatus(input: $input, condition: $condition) {
      id
      lead_Id
      status
      examID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createExamMaster = /* GraphQL */ `
  mutation CreateExamMaster(
    $input: CreateExamMasterInput!
    $condition: ModelExamMasterConditionInput
  ) {
    createExamMaster(input: $input, condition: $condition) {
      id
      exam_name
      exam_code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateExamMaster = /* GraphQL */ `
  mutation UpdateExamMaster(
    $input: UpdateExamMasterInput!
    $condition: ModelExamMasterConditionInput
  ) {
    updateExamMaster(input: $input, condition: $condition) {
      id
      exam_name
      exam_code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteExamMaster = /* GraphQL */ `
  mutation DeleteExamMaster(
    $input: DeleteExamMasterInput!
    $condition: ModelExamMasterConditionInput
  ) {
    deleteExamMaster(input: $input, condition: $condition) {
      id
      exam_name
      exam_code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createLeadMaster = /* GraphQL */ `
  mutation CreateLeadMaster(
    $input: CreateLeadMasterInput!
    $condition: ModelLeadMasterConditionInput
  ) {
    createLeadMaster(input: $input, condition: $condition) {
      id
      name
      email
      country_code
      phone
      exam_Id
      vendor_Id
      payment_id
      trainer_charges
      net_profit
      total_fees
      executiveID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateLeadMaster = /* GraphQL */ `
  mutation UpdateLeadMaster(
    $input: UpdateLeadMasterInput!
    $condition: ModelLeadMasterConditionInput
  ) {
    updateLeadMaster(input: $input, condition: $condition) {
      id
      name
      email
      country_code
      phone
      exam_Id
      vendor_Id
      payment_id
      trainer_charges
      net_profit
      total_fees
      executiveID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteLeadMaster = /* GraphQL */ `
  mutation DeleteLeadMaster(
    $input: DeleteLeadMasterInput!
    $condition: ModelLeadMasterConditionInput
  ) {
    deleteLeadMaster(input: $input, condition: $condition) {
      id
      name
      email
      country_code
      phone
      exam_Id
      vendor_Id
      payment_id
      trainer_charges
      net_profit
      total_fees
      executiveID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
