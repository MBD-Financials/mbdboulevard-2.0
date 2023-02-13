import React, { useState, useMemo, useCallback, useContext } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";

//INTERNAL IMPORT
import Style from "../styles/account.module.css";
import images from "../img";
import Form from "../AccountPage/Form/Form";
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const account = () => {
  const { user,updateUser,currentAccount, uploadToIPFS } = useContext(
    NFTMarketplaceContext
  );
  const [fileUrl, setFileUrl] = useState(null);
  const onDrop = useCallback(async (acceptedFile) => {
    // const url = await uploadToIPFS(acceptedFile[0]);
    setFileUrl(acceptedFile[0]);
    console.log(acceptedFile[0]);
  }, []);


  // const onDrop = useCallback(async (acceptedFile) => {
  //   const url = await uploadToIPFS(acceptedFile[0]);
  //   setFileUrl(url);
  //   setImage(url);
  //   console.log(url);
  // });

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });

  return (
    <div className={Style.account}>
      <div className={Style.account_info}>
        <h1>Profile settings</h1>
        <p>
          You can set preferred display name, create your profile URL and manage
          other personal settings.
        </p>
      </div>

      <div className={Style.account_box}>
        <div className={Style.account_box_img} {...getRootProps()}>
          <input {...getInputProps()} />
          {/* {(condition)?div:div} */}
          <div>
            <Image
              src={images.user1}
              alt="account upload"
              width={150}
              height={150}
              className={Style.account_box_img_img}
            />
          </div>
          
          <p className={Style.account_box_img_para}>Change Image</p>
        </div>
        <div className={Style.account_box_from}>
          <Form user={user} updateUser={updateUser} currentAccount={currentAccount}/>
        </div>
      </div>
    </div>
  );
};

export default account;
