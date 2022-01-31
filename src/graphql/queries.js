/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getExecutiveMaster = /* GraphQL */ `
  query GetExecutiveMaster($id: ID!) {
    getExecutiveMaster(id: $id) {
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
export const listExecutiveMasters = /* GraphQL */ `
  query ListExecutiveMasters(
    $filter: ModelExecutiveMasterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExecutiveMasters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncExecutiveMasters = /* GraphQL */ `
  query SyncExecutiveMasters(
    $filter: ModelExecutiveMasterFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncExecutiveMasters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getPaymentMaster = /* GraphQL */ `
  query GetPaymentMaster($id: ID!) {
    getPaymentMaster(id: $id) {
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
export const listPaymentMasters = /* GraphQL */ `
  query ListPaymentMasters(
    $filter: ModelPaymentMasterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPaymentMasters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        leadMasterID
        confirmation_number
        paid_amount
        due_amount
        trainer_charges
        net_profit
        total_fees
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPaymentMasters = /* GraphQL */ `
  query SyncPaymentMasters(
    $filter: ModelPaymentMasterFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPaymentMasters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getVendorMaster = /* GraphQL */ `
  query GetVendorMaster($id: ID!) {
    getVendorMaster(id: $id) {
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
export const listVendorMasters = /* GraphQL */ `
  query ListVendorMasters(
    $filter: ModelVendorMasterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVendorMasters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncVendorMasters = /* GraphQL */ `
  query SyncVendorMasters(
    $filter: ModelVendorMasterFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVendorMasters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getExamStatus = /* GraphQL */ `
  query GetExamStatus($id: ID!) {
    getExamStatus(id: $id) {
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
export const listExamStatuses = /* GraphQL */ `
  query ListExamStatuses(
    $filter: ModelExamStatusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExamStatuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        examID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncExamStatuses = /* GraphQL */ `
  query SyncExamStatuses(
    $filter: ModelExamStatusFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncExamStatuses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getExamMaster = /* GraphQL */ `
  query GetExamMaster($id: ID!) {
    getExamMaster(id: $id) {
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
export const listExamMasters = /* GraphQL */ `
  query ListExamMasters(
    $filter: ModelExamMasterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExamMasters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncExamMasters = /* GraphQL */ `
  query SyncExamMasters(
    $filter: ModelExamMasterFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncExamMasters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getLeadMaster = /* GraphQL */ `
  query GetLeadMaster($id: ID!) {
    getLeadMaster(id: $id) {
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
export const listLeadMasters = /* GraphQL */ `
  query ListLeadMasters(
    $filter: ModelLeadMasterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLeadMasters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncLeadMasters = /* GraphQL */ `
  query SyncLeadMasters(
    $filter: ModelLeadMasterFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLeadMasters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
