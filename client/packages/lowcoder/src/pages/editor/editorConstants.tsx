import { UICompType } from "comps/uiCompRegistry";
import {
  LeftAudio,
  LeftButton,
  LeftChart,
  LeftCheckbox,
  LeftCommon,
  LeftContainer,
  LeftDate,
  LeftDivider,
  LeftDrawer,
  LeftFile,
  LeftFileViewer,
  LeftForm,
  LeftIframe,
  LeftImage,
  LeftInput,
  LeftJsonEditor,
  LeftLink,
  LeftListView,
  LeftModal,
  LeftNavigation,
  LeftNumberInput,
  LeftPassword,
  LeftProgress,
  LeftQrCode,
  LeftRadio,
  LeftRating,
  LeftSegmentedControl,
  LeftSelect,
  LeftSlider,
  LeftSwitch,
  LeftTable,
  LeftText,
  LeftTime,
  LeftTree,
  LeftVideo,
  LeftSignature,
  TimeLineIcon,
  MentionIcon,
  AutoCompleteCompIcon,
  CommentIcon,
  IconCompIcon,
  WeekPickerIcon,
  MonthPickerIcon,
  QuarterPickerIcon,
  YearPickerIcon,
  AmapIcon,
} from "lowcoder-design";

export const CompStateIcon: {
  [key in UICompType]: JSX.Element;
} = {
  input: <LeftInput />,
  module: <LeftCommon />,
  moduleContainer: <LeftCommon />,
  textArea: <LeftText />,
  password: <LeftPassword />,
  richTextEditor: <LeftText />,
  numberInput: <LeftNumberInput />,
  slider: <LeftSlider />,
  rangeSlider: <LeftSlider />,
  rating: <LeftRating />,
  switch: <LeftSwitch />,
  select: <LeftSelect />,
  multiSelect: <LeftSelect />,
  cascader: <LeftSelect />,
  checkbox: <LeftCheckbox />,
  radio: <LeftRadio />,
  segmentedControl: <LeftSegmentedControl />,
  file: <LeftFile />,
  date: <LeftDate />,
  dateRange: <LeftDate />,
  time: <LeftTime />,
  timeRange: <LeftTime />,
  button: <LeftButton />,
  link: <LeftLink />,
  scanner: <LeftQrCode />,
  dropdown: <LeftButton />,
  text: <LeftText />,
  table: <LeftTable />,
  image: <LeftImage />,
  progress: <LeftProgress />,
  progressCircle: <LeftProgress />,
  chart: <LeftChart />,
  fileViewer: <LeftFileViewer />,
  divider: <LeftDivider />,
  qrCode: <LeftQrCode />,
  form: <LeftForm />,
  jsonSchemaForm: <LeftJsonEditor />,
  container: <LeftContainer />,
  tabbedContainer: <LeftContainer />,
  modal: <LeftModal />,
  listView: <LeftListView />,
  grid: <LeftListView />,
  navigation: <LeftNavigation />,
  iframe: <LeftIframe />,
  custom: <LeftCommon />,
  jsonExplorer: <LeftJsonEditor />,
  jsonEditor: <LeftJsonEditor />,
  tree: <LeftTree />,
  treeSelect: <LeftSelect />,
  audio: <LeftAudio />,
  video: <LeftVideo />,
  drawer: <LeftDrawer />,
  carousel: <LeftImage />,
  toggleButton: <LeftButton />,
  imageEditor: <LeftImage />,
  collapsibleContainer: <LeftContainer />,
  npmPlugin: <LeftCommon />,
  calendar: <LeftDate />,
  signature: <LeftSignature />,
  jsonLottie: <LeftJsonEditor />, //Added By Aqib Mirza
  timeline: <TimeLineIcon />,
  mention: <MentionIcon/>,
  autocomplete: <AutoCompleteCompIcon />,
  comment: <CommentIcon />,
  icon: <IconCompIcon />,
  weekPicker: <WeekPickerIcon />,
  monthPicker: <MonthPickerIcon />,
  quarterPicker: <QuarterPickerIcon />,
  yearPicker: <YearPickerIcon />,
  amap: <AmapIcon />,
};
