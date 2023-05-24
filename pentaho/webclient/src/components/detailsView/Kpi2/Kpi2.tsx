import { FC } from "react";
import { HvCard, HvTypography } from "@hitachivantara/uikit-react-core";
import { theme } from "@hitachivantara/uikit-styles";

export type Kpi2Props = {
  title: string;
  value: string;
};

export const Kpi2: FC<Kpi2Props> = ({ title, value }) => {
  return (
    <HvCard bgcolor="transparent" style={{ outline: "none" }}>
      <div style={{ padding: theme.space.sm }}>
        <HvTypography variant="label">{title}</HvTypography>
        <div style={{ display: "flex", alignItems: "center" }}>
          <HvTypography variant="caption1">{value}</HvTypography>
        </div>
      </div>
    </HvCard>
  );
};
