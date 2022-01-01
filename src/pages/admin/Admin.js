import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/button/Button";
import styles from "./Admin.module.css";

const Admin = () => {
  return (
    <div className={styles.adminWrapper}>
      <h2>Admin Panel</h2>
      <div className={styles.product}>
        <Link to="/admin/add-product">
          <CustomButton
            label="Add Product"
            primary={true}
            color="white"
          />
        </Link>
        <Link to="/admin/products">
          <CustomButton
            label="All Products"
            primary={true}
            color="white"
          />
        </Link>
      </div>
    </div>
  );
};

export default Admin;
