import styled from "styled-components";
import {TbTruckDelivery} from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return  <Wrapper>
    <div className="contaienr">
        <div className="grid grid-three-column">
            <div className="services-1">
                <div>
                    <TbTruckDelivery className="icon"/>
                    <h3>Faster Delivery</h3>
                </div>
            </div>
            <div className="services-2">
                <div className="services-column-2">
                    <div>
                    <MdSecurity className="icon"/>
                    <h3>Non-contact Shipping</h3>
                    </div>                    
                </div>
                <div className="services-column-2">
                <div>
                <GiReceiveMoney className="icon" />
                <h3>Money-back Guaranteed</h3>
              </div>
                </div>
            </div>
            <div className="services-3">
            <div>
              <RiSecurePaymentLine className="icon" />
              <h3>Super Secure Payment System</h3>
            </div>
            </div>

        </div>
    </div>
  </Wrapper>
};

const Wrapper = styled.section`
  padding: 9rem ;
  .grid {
    gap: 4.8rem;
  }
  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background: ${({ theme }) => theme.colors.bg};
    text-align: center;
    border-radius: 2rem;
    box-shadow: 0 0 5px  teal ;
    
  }


  
  .services-2 {
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;
    .services-column-2 {
        
      background: whitesmoke;
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: 0 0 5px teal ;
      

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
    

  }
  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
  }
  .icon {
    /* font-size: rem; */
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: teal;
  }
`;

export default Services;