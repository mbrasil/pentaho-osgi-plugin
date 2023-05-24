import { HvGlobalActions, HvGrid } from "@hitachivantara/uikit-react-core";

import { KPIs } from "components/detailsView/KPIs";
import { Properties } from "components/detailsView/Properties";
import { Table } from "components/detailsView/Table";

const DetailsView = () => {
  return (
    <>
      <HvGlobalActions title="Deploy" />
      <HvGrid container>
        <HvGrid item xs={12}>
          <KPIs />
        </HvGrid>
        <HvGrid item xs={12}>
          <Properties />
        </HvGrid>
        <HvGrid item xs={12}>
          <Table />
        </HvGrid>
      </HvGrid>
    </>
  );
};

export default DetailsView;
