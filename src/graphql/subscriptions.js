/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateExecutiveMaster = /* GraphQL */ `
  subscription OnCreateExecutiveMaster($owner: String) {
    onCreateExecutiveMaster(owner: $owner) {
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
export const onUpdateExecutiveMaster = /* GraphQL */ `
  subscription OnUpdateExecutiveMaster($owner: String) {
    onUpdateExecutiveMaster(owner: $owner) {
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
export const onDeleteExecutiveMaster = /* GraphQL */ `
  subscription OnDeleteExecutiveMaster($owner: String) {
    onDeleteExecutiveMaster(owner: $owner) {
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
export const onCreatePaymentMaster = /* GraphQL */ `
  subscription OnCreatePaymentMaster($owner: String) {
    onCreatePaymentMaster(owner: $owner) {
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
export const onUpdatePaymentMaster = /* GraphQL */ `
  subscription OnUpdatePaymentMaster($owner: String) {
    onUpdatePaymentMaster(owner: $owner) {
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
export const onDeletePaymentMaster = /* GraphQL */ `
  subscription OnDeletePaymentMaster($owner: String) {
    onDeletePaymentMaster(owner: $owner) {
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
export const onCreateVendorMaster = /* GraphQL */ `
  subscription OnCreateVendorMaster($owner: String) {
    onCreateVendorMaster(owner: $owner) {
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
export const onUpdateVendorMaster = /* GraphQL */ `
  subscription OnUpdateVendorMaster($owner: String) {
    onUpdateVendorMaster(owner: $owner) {
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
export const onDeleteVendorMaster = /* GraphQL */ `
  subscription OnDeleteVendorMaster($owner: String) {
    onDeleteVendorMaster(owner: $owner) {
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
export const onCreateExamStatus = /* GraphQL */ `
  subscription OnCreateExamStatus($owner: String) {
    onCreateExamStatus(owner: $owner) {
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
export const onUpdateExamStatus = /* GraphQL */ `
  subscription OnUpdateExamStatus($owner: String) {
    onUpdateExamStatus(owner: $owner) {
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
export const onDeleteExamStatus = /* GraphQL */ `
  subscription OnDeleteExamStatus($owner: String) {
    onDeleteExamStatus(owner: $owner) {
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
export const onCreateExamMaster = /* GraphQL */ `
  subscription OnCreateExamMaster($owner: String) {
    onCreateExamMaster(owner: $owner) {
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
export const onUpdateExamMaster = /* GraphQL */ `
  subscription OnUpdateExamMaster($owner: String) {
    onUpdateExamMaster(owner: $owner) {
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
export const onDeleteExamMaster = /* GraphQL */ `
  subscription OnDeleteExamMaster($owner: String) {
    onDeleteExamMaster(owner: $owner) {
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
export const onCreateLeadMaster = /* GraphQL */ `
  subscription OnCreateLeadMaster($owner: String) {
    onCreateLeadMaster(owner: $owner) {
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
export const onUpdateLeadMaster = /* GraphQL */ `
  subscription OnUpdateLeadMaster($owner: String) {
    onUpdateLeadMaster(owner: $owner) {
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
export const onDeleteLeadMaster = /* GraphQL */ `
  subscription OnDeleteLeadMaster($owner: String) {
    onDeleteLeadMaster(owner: $owner) {
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
