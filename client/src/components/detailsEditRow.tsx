import { Unit } from "convert-units";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { productSearchItem } from "../utilities/interfaces";
import AmountModal from "./AmountModal";
import IngredientSearch from "./IngredientSearch";
import { ingredientList } from "./RecipeDetails";
import UnitModal from "./UnitModal";

type EditRowProps = {
  tempIngredients: ingredientList[] | null | undefined;
  setTempIngredients: React.Dispatch<
    React.SetStateAction<ingredientList[] | null | undefined>
  >;
  fractionize: (argo0: number) => string;
};

type AmountModalState = {
  index: number;
  show: boolean;
  amount: number;
};

type UnitModalState = {
  index: number;
  show: boolean;
  unit: number;
  displayUnit: string | undefined;
};

export interface handleManageEdit {
  index: number;
  action: string;
  amount?: number;
  unit?: number;
}

const DetailsEditRow = ({
  tempIngredients,
  setTempIngredients,
  fractionize,
}: EditRowProps) => {
  const { units } = useAuth();
  const [amountModal, setAmountModal] = useState<AmountModalState>({
    index: 0,
    show: false,
    amount: 0,
  });
  const [unitModal, setUnitModal] = useState<UnitModalState>({
    index: 0,
    show: false,
    unit: 0,
    displayUnit: undefined,
  });
  // add an ingredient
  const handleAddIngredient = (result: productSearchItem) => {
    if (!tempIngredients) return;
    let newItem: ingredientList = {
      product_id: result.product,
      name: result.name,
      amount: 1,
      unit: 0,
      unit_plural: undefined,
      unit_short: undefined,
      unit_singular: undefined,
      editStatus: "new",
    };
    setTempIngredients([...tempIngredients, newItem]);
  };

  const handleManageEdit = ({
    index,
    action,
    amount,
    unit,
  }: handleManageEdit) => {
    if (!tempIngredients) return;
    let newTemp = JSON.parse(JSON.stringify(tempIngredients));
    switch (action) {
      case "delete":
        if (newTemp[index].editStatus === "new") {
          newTemp.splice(index, 1);
        } else {
          newTemp[index].editStatus = "delete";
        }
        setTempIngredients(newTemp);
        break;
      case "update":
        if (newTemp[index].editStatus !== "new") {
          newTemp[index].editStatus = "update";
        }
        if (amount) {
          newTemp[index].amount = amount;
        }
        if (unit) {
          console.log(unit);
          let uDetails = units?.find((u) => u.id === unit);
          newTemp[index].unit = unit;
          newTemp[index].unit_plural = uDetails?.plural;
          newTemp[index].unit_short = uDetails?.short;
          newTemp[index].unit_singular = uDetails?.singular;
        }
        setTempIngredients(newTemp);
      default:
        break;
    }
  };

  return (
    <Container className="me-2">
      {amountModal.show && (
        <AmountModal
          handleManageEdit={handleManageEdit}
          fractionize={fractionize}
          amount={amountModal.amount}
          index={amountModal.index}
          show={amountModal.show}
          handleClose={() => setAmountModal({ ...amountModal, show: false })}
        />
      )}
      {unitModal.show && (
        <UnitModal
          handleManageEdit={handleManageEdit}
          unit={unitModal.unit}
          displayUnit={unitModal.displayUnit}
          index={unitModal.index}
          show={unitModal.show}
          handleClose={() => setUnitModal({ ...unitModal, show: false })}
        />
      )}
      {/* Header Row */}
      {tempIngredients?.length !== 0 ? (
        <Row className="g-0 mb-2" style={{ fontSize: "13px" }}>
          <Col xs={"1"}></Col>
          <Col
            xs={"5"}
            className="px-2 d-flex align-items-center justify-content-start"
          >
            Ingredient
          </Col>
          <Col
            xs={"3"}
            className="d-flex align-items-center justify-content-center"
          >
            Amount
          </Col>

          <Col
            xs={"3"}
            className="d-flex align-items-center justify-content-center"
          >
            Unit
          </Col>
        </Row>
      ) : null}

      {/* {edit ? <IngredientSearch handleAdd={handleAdd}/> : null} */}
      {/* Ingredients */}

      {tempIngredients?.map((g: ingredientList, i) => {
        if (g.editStatus === "delete") return;
        return (
          <Row className="g-0 d-flex mb-1" key={g.product_id}>
            {/* Title */}

            <Col
              xs="1"
              className="d-flex align-items-center justify-content-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-dash-circle bright-fill-pink"
                viewBox="0 0 16 16"
                onClick={() => handleManageEdit({ index: i, action: "delete" })}
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            </Col>

            <Col
              style={{
                gap: "10px",
                padding: "1px 10px",
                background: "#202020",
                border: "#436d92 1.5px solid",
              }}
              className={`text-nowrap shadow-lg h-33 d-flex justify-content-start align-items-center rounded`}
              xs={"5"}
            >
              {g.name}
            </Col>
            {/* Amount */}
            <Col
              xs={"3"}
              className="d-flex align-items-center justify-content-center"
            >
              <div
                style={{
                  width: "70%",
                  background: "",
                }}
                className="px-2 d-flex align-items-center justify-content-center rounded bright-GY"
                onClick={() =>
                  setAmountModal({ show: true, index: i, amount: g.amount })
                }
              >
                {fractionize(g.amount)}
              </div>
            </Col>
            {/* Unit */}
            <Col
              xs={"3"}
              className="d-flex justify-content-center align-items-center"
            >
              <div
                style={{
                  width: "90%",
                  background: "",
                }}
                className="px-2 d-flex align-items-center justify-content-center rounded bright-nb"
                onClick={() =>
                  setUnitModal({
                    show: true,
                    index: i,
                    unit: g.unit,
                    displayUnit: g.unit_short || undefined,
                  })
                }
              >
                {g.unit_short ||
                  (g.amount > 1 ? g.unit_plural : g.unit_singular) ||
                  "-"}
              </div>
            </Col>
          </Row>
        );
      })}

      {/* Search bar - only in edit mode */}
      <IngredientSearch handleAdd={handleAddIngredient} />
    </Container>
  );
};

export default DetailsEditRow;
