import listUser from './listUser'
import { drizzleConnect } from 'drizzle-react'

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    ReliefERC20: state.contracts.ReliefERC20,
    drizzleStatus: state.drizzleStatus
  }
}

const listUserContainer = drizzleConnect(listUser, mapStateToProps);

export default listUserContainer
