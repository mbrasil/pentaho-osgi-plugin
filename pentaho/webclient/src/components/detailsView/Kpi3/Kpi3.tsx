import { FC, ReactNode } from "react";
import { HvCard, HvTypography } from "@hitachivantara/uikit-react-core";
import { theme } from "@hitachivantara/uikit-styles";

export type Kpi3Props = {
  title: string;
  children: ReactNode;
};

export const Kpi3: FC<Kpi3Props> = ({ children, title }) => {
  return (
    <HvCard
      bgcolor="transparent"
      style={{ outline: "none", marginBottom: theme.space.md }}
    >
      <div style={{ padding: theme.space.sm }}>
        <HvTypography variant="label">{title}</HvTypography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: theme.space.sm,
          }}
        >
          {children}
        </div>
      </div>
    </HvCard>
  );
};
