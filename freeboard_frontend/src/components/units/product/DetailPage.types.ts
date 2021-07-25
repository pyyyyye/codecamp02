export interface IDetailPageUIProps {
  onClickMoveToList: () => void;
  onClickMoveToEdit: () => void;
  //   onClickDelete: () => void;
  //   onDetail: () => void;
  placement: string;
  isEdit?: boolean;
  data: any;
}
