  export const displayFile = async (cid) => {
    const prefix = 'https://';
    const suffix = '.ipfs.w3s.link';
    return `${prefix}${cid}${suffix}`;
  };