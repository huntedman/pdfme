import {
  PDFME_VERSION,
  MM_TO_PT_RATIO,
  PT_TO_MM_RATIO,
  PT_TO_PX_RATIO,
  BLANK_PDF,
  ZOOM,
  DEFAULT_FONT_NAME,
} from './constants.js';
import type {
  ChangeSchemaItem,
  ChangeSchemas,
  PropPanel,
  PropPanelSchema,
  PropPanelWidgetProps,
  PDFRenderProps,
  Mode,
  UIRenderProps,
  Plugin,
  Lang,
  Dict,
  Size,
  Schema,
  SchemaForUI,
  Font,
  ColorType,
  BasePdf,
  BlankPdf,
  Template,
  CommonOptions,
  GeneratorOptions,
  Plugins,
  GenerateProps,
  UIOptions,
  UIProps,
  PreviewProps,
  DesignerProps,
} from './types.js';
import {
  cloneDeep,
  getFallbackFontName,
  getDefaultFont,
  getB64BasePdf,
  b64toUint8Array,
  checkFont,
  checkInputs,
  checkUIOptions,
  checkTemplate,
  checkUIProps,
  checkPreviewProps,
  checkDesignerProps,
  checkGenerateProps,
  mm2pt,
  pt2mm,
  pt2px,
  px2mm,
  isHexValid,
  getInputFromTemplate,
  isBlankPdf,
  getDynamicTemplate,
} from './helper.js';

export {
  PDFME_VERSION,
  MM_TO_PT_RATIO,
  PT_TO_MM_RATIO,
  PT_TO_PX_RATIO,
  BLANK_PDF,
  ZOOM,
  DEFAULT_FONT_NAME,
  cloneDeep,
  getFallbackFontName,
  getDefaultFont,
  getB64BasePdf,
  b64toUint8Array,
  mm2pt,
  pt2mm,
  pt2px,
  px2mm,
  isHexValid,
  getInputFromTemplate,
  isBlankPdf,
  getDynamicTemplate,
  checkFont,
  checkInputs,
  checkUIOptions,
  checkTemplate,
  checkUIProps,
  checkPreviewProps,
  checkDesignerProps,
  checkGenerateProps,
};

export type {
  Lang,
  Dict,
  Size,
  Schema,
  SchemaForUI,
  Font,
  ColorType,
  BasePdf,
  BlankPdf,
  Template,
  CommonOptions,
  GeneratorOptions,
  Plugins,
  GenerateProps,
  UIOptions,
  UIProps,
  PreviewProps,
  DesignerProps,
  ChangeSchemaItem,
  ChangeSchemas,
  PropPanel,
  PropPanelSchema,
  PropPanelWidgetProps,
  PDFRenderProps,
  UIRenderProps,
  Mode,
  Plugin,
};
