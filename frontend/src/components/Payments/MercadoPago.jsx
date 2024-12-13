import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { useState } from "react";

import { Button } from "react-bootstrap";

const MercadoPago = ({ cart }) => {
  initMercadoPago(import.meta.env.VITE_MERCADOPAGO_PUBLIC_KEY, {
    local: "es-AR",
  });
  const [preferenceId, setPreferenceId] = useState(null);
  const createPreference = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}api/payments/create_preference`,
        cart
      );
      const { id } = response.data;
      return id;
    } catch (error) {
      console.error(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    id && setPreferenceId(id);
  };

  return (
    <>
      <Button variant="primary" onClick={handleBuy}>
        Pagar
      </Button>
      {preferenceId && (
        <Wallet
          initialization={{
            preferenceId: preferenceId,
            redirectMode: "blank",
          }}
        />
      )}
    </>
  );
};

export default MercadoPago;
