import { contractABI } from "./EvidenceManagerContractABI";
import { getContract } from 'viem';

const contractAddress = "0xd521425a7aC6FaDb22ff2755465B80781dbaAc72";
const account = "0x1cdcf7daf59D41d80339f1AdD616cEe3892E94eF";



export const createCaseFolder = async (publicClient, walletClient, caseName, caseDetails) => {

    const contract = getContract({
        address: contractAddress,
        abi: contractABI,
        publicClient,
        walletClient,
      });

    //   await walletClient.writeContract({
    //     address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
    //     abi: wagmiAbi,
    //     functionName: 'mint',
    //     args: [69420]
    //   })

    //   contract.wr
      await contract.write.createCaseFolder([caseName, caseDetails]);
};