import React from "react";
import {
  Footer,
  PaymentMethod,
  Security,
  SecurityAndPayment,
  SocialsRede,
} from "./styles";
import { FaLinkedin, FaGithubSquare, FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";

import Image from "next/image";

export function Footers(): JSX.Element {
  return (
    <Footer>
      <SecurityAndPayment>
        <PaymentMethod>
          <h1>
            <img
              src="https://img.terabyteshop.com.br/cartoes/fpr_mercadopago.png"
              alt="foto"
            />
          </h1>
          <h1>
            <img
              src="https://img.terabyteshop.com.br/cartoes/fpr_pixMP.png"
              alt="foto"
            />
          </h1>
          <h1>
            <img
              src="https://img.terabyteshop.com.br/cartoes/fpr_boleto.png"
              alt="foto"
            />
          </h1>
        </PaymentMethod>
        <Security>
          <h1>
            <img
              src="https://img.terabyteshop.com.br/selos/ra-1000.png"
              alt="foto"
            />
          </h1>
          <h1>
            <img
              src="https://img.terabyteshop.com.br/selos/compre-confie.png"
              alt="foto"
            />
          </h1>
          <h1>
            <img
              src="https://img.terabyteshop.com.br/selos/google-site-seguro.png"
              alt="foto"
            />
          </h1>
        </Security>
      </SecurityAndPayment>

    </Footer>
  );
}
