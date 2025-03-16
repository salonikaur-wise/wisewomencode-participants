import Calculator from "@/components/calculator/Calculator";
import CenteredComponent from "@/components/CenteredComponent";
import ResponsiveAppBar from "@/components/ResponsiveAppBar";
import * as React from 'react';

export default function CalculatorPage() {
  return (
    <>
      <ResponsiveAppBar />
      <CenteredComponent>
        <Calculator />
      </CenteredComponent>
    </>
  );
}