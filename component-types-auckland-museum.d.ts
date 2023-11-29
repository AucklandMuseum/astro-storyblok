import {StoryblokStory} from 'storyblok-generate-ts'

export interface AmContentSectionStoryblok {
  Setup?: any;
  sectionWidth: "Standard" | "Fullwidth";
  sectionStyle: "Standard" | "Dark" | "Light";
  sectionMarginTop: "Standard" | "None" | "Small" | "Large";
  sectionMarginBottom: "Standard" | "None" | "Small" | "Large";
  contentWidth: "Standard" | "Fullwidth" | "Medium" | "Narrow";
  contentBlocks?: (
    | AmContentSectionStoryblok
    | AmCopyBlockStoryblok
    | AmHeroStoryblok
    | AmHtmlBlockStoryblok
    | AmImageStoryblok
    | AmLinkImageButtonStoryblok
    | AmMenuItemStoryblok
    | AmPageStoryblok
    | AmSiteSectionStoryblok
    | AmTitleBlockStoryblok
    | AmYoutubeVideoStoryblok
  )[];
  _uid: string;
  component: "amContentSection";
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface AmCopyBlockStoryblok {
  content: RichtextStoryblok;
  contentStyle: "Standard" | "Small" | "Large";
  _uid: string;
  component: "amCopyBlock";
  [k: string]: any;
}

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface AmHeroStoryblok {
  name: string;
  image?: AssetStoryblok;
  contentBlocks?: (
    | AmContentSectionStoryblok
    | AmCopyBlockStoryblok
    | AmHeroStoryblok
    | AmHtmlBlockStoryblok
    | AmImageStoryblok
    | AmLinkImageButtonStoryblok
    | AmMenuItemStoryblok
    | AmPageStoryblok
    | AmSiteSectionStoryblok
    | AmTitleBlockStoryblok
    | AmYoutubeVideoStoryblok
    | CopyBlockDsStoryblok
    | HtmlBlockDsStoryblok
    | ImageDsStoryblok
    | ImageLoopStoryblok
    | PanelStoryblok
    | ScreenLayoutStoryblok
    | SharedPanelStoryblok
    | SignageAliasStoryblok
    | VideoLoopStoryblok
    | VideoSourceStoryblok
    | WhatsOnPromoStoryblok
  )[];
  contentAlignment: "Left" | "Right";
  behaviour: "Small" | "Medium" | "Large";
  _uid: string;
  component: "amHero";
  [k: string]: any;
}

export interface AmHtmlBlockStoryblok {
  htmlCode: string;
  _uid: string;
  component: "amHtmlBlock";
  [k: string]: any;
}

export interface AmImageStoryblok {
  Image: AssetStoryblok;
  _uid: string;
  component: "amImage";
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      story?: {
        name: string;
        created_at?: string;
        published_at?: string;
        id: number;
        uuid: string;
        content?: {
          [k: string]: any;
        };
        slug: string;
        full_slug: string;
        sort_by_date?: null | string;
        position?: number;
        tag_list?: string[];
        is_startpage?: boolean;
        parent_id?: null | number;
        meta_data?: null | {
          [k: string]: any;
        };
        group_id?: string;
        first_published_at?: string;
        release_id?: null | number;
        lang?: string;
        path?: null | string;
        alternates?: any[];
        default_full_slug?: null | string;
        translated_slugs?: null | any[];
        [k: string]: any;
      };
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      [k: string]: any;
    };

export interface AmLinkImageButtonStoryblok {
  name?: string;
  linkURL: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  linkText?: number | string;
  linkType?: "link" | "button";
  image?: AssetStoryblok;
  _uid: string;
  component: "amLinkImageButton";
  [k: string]: any;
}

export interface AmMenuItemStoryblok {
  title: string;
  secondaryTitle?: string;
  newWindow?: boolean;
  page?: StoryblokStory<PageStoryblok> | string;
  url?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  image?: AssetStoryblok;
  _uid: string;
  component: "amMenuItem";
  [k: string]: any;
}

export interface AmPageStoryblok {
  body?: (
    | AmContentSectionStoryblok
    | AmCopyBlockStoryblok
    | AmHeroStoryblok
    | AmHtmlBlockStoryblok
    | AmImageStoryblok
    | AmLinkImageButtonStoryblok
    | AmMenuItemStoryblok
    | AmPageStoryblok
    | AmSiteSectionStoryblok
    | AmTitleBlockStoryblok
    | AmYoutubeVideoStoryblok
    | CopyBlockDsStoryblok
    | HtmlBlockDsStoryblok
    | ImageDsStoryblok
    | ImageLoopStoryblok
    | PanelStoryblok
    | ScreenLayoutStoryblok
    | SharedPanelStoryblok
    | SignageAliasStoryblok
    | VideoLoopStoryblok
    | VideoSourceStoryblok
    | WhatsOnPromoStoryblok
  )[];
  redirects?: (
    | AmContentSectionStoryblok
    | AmCopyBlockStoryblok
    | AmHeroStoryblok
    | AmHtmlBlockStoryblok
    | AmImageStoryblok
    | AmLinkImageButtonStoryblok
    | AmMenuItemStoryblok
    | AmPageStoryblok
    | AmSiteSectionStoryblok
    | AmTitleBlockStoryblok
    | AmYoutubeVideoStoryblok
    | CopyBlockDsStoryblok
    | HtmlBlockDsStoryblok
    | ImageDsStoryblok
    | ImageLoopStoryblok
    | PanelStoryblok
    | ScreenLayoutStoryblok
    | SharedPanelStoryblok
    | SignageAliasStoryblok
    | VideoLoopStoryblok
    | VideoSourceStoryblok
    | WhatsOnPromoStoryblok
  )[];
  _uid: string;
  component: "amPage";
  [k: string]: any;
}

export interface AmSiteSectionStoryblok {
  title: string;
  parentSiteSection?: StoryblokStory<SiteSectionStoryblok> | string;
  coreImage: AssetStoryblok;
  logo?: AssetStoryblok;
  defaultPage: StoryblokStory<PageStoryblok> | string;
  titles?: any;
  secondaryTitle?: string;
  alternateTitle?: string;
  metaData?: any;
  metaTitle?: string;
  metaDescription?: string;
  _uid: string;
  component: "amSiteSection";
  [k: string]: any;
}

export interface AmTitleBlockStoryblok {
  behaviour: "" | "Page" | "Hero" | "Event" | "Promo";
  title: string;
  subtitle?: string;
  boldSubtitle?: string;
  _uid: string;
  component: "amTitleBlock";
  [k: string]: any;
}

export interface AmYoutubeVideoStoryblok {
  videoURL: string;
  aspectRatio?: "landscape169" | "landscape43" | "portrait169" | "portrait43" | "square";
  width?: "100" | "50" | "33" | "25";
  autoPlay?: boolean;
  relatedVideos?: boolean;
  _uid: string;
  component: "amYoutubeVideo";
  [k: string]: any;
}

export interface CopyBlockDsStoryblok {
  content?: RichtextStoryblok;
  _uid: string;
  component: "copyBlockDS";
  [k: string]: any;
}

export interface HtmlBlockDsStoryblok {
  htmlCode?: string;
  _uid: string;
  component: "htmlBlockDS";
  [k: string]: any;
}

export interface ImageDsStoryblok {
  asset?: AssetStoryblok;
  width?: string;
  height?: string;
  _uid: string;
  component: "imageDS";
  [k: string]: any;
}

export type MultiassetStoryblok = {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  [k: string]: any;
}[];

export interface ImageLoopStoryblok {
  name?: string;
  timing?: any;
  displayTime?: string;
  fadeTime?: string;
  items?: MultiassetStoryblok;
  _uid: string;
  component: "imageLoop";
  [k: string]: any;
}

export interface PanelStoryblok {
  name?: string;
  size?: any;
  widthNumber?: string;
  heightNumber?: string;
  resolution?: "" | "SD" | "HD" | "FHD" | "UHD";
  orientation?: "" | "horizontal" | "vertical";
  panelFlow?: "column" | "row";
  itemAlignment?: "" | "align-items: center;";
  colours?: any;
  border?: any;
  borderWidth?: "" | "small" | "large";
  content?: (
    | CopyBlockDsStoryblok
    | HtmlBlockDsStoryblok
    | ImageDsStoryblok
    | ImageLoopStoryblok
    | PanelStoryblok
    | ScreenLayoutStoryblok
    | SharedPanelStoryblok
    | SignageAliasStoryblok
    | VideoLoopStoryblok
    | VideoSourceStoryblok
    | WhatsOnPromoStoryblok
  )[];
  _uid: string;
  component: "panel";
  [k: string]: any;
}

export interface ScreenLayoutStoryblok {
  size?: any;
  widthNumber: string;
  heightNumber: string;
  scale?: string;
  resolution?: "" | "SD" | "HD" | "FHD" | "UHD";
  orientation: "" | "horizontal" | "vertical";
  panelFlow?: "column" | "row";
  Colours?: any;
  content?: (
    | CopyBlockDsStoryblok
    | HtmlBlockDsStoryblok
    | ImageDsStoryblok
    | ImageLoopStoryblok
    | PanelStoryblok
    | ScreenLayoutStoryblok
    | SharedPanelStoryblok
    | SignageAliasStoryblok
    | VideoLoopStoryblok
    | VideoSourceStoryblok
    | WhatsOnPromoStoryblok
  )[];
  _uid: string;
  component: "screenLayout";
  [k: string]: any;
}

export interface SharedPanelStoryblok {
  name: string;
  contentLookup?: StoryblokStory<ScreenStoryblok> | StoryblokStory<PanelStoryblok> | string;
  _uid: string;
  component: "sharedPanel";
  [k: string]: any;
}

export interface SignageAliasStoryblok {
  sourceUrl?: StoryblokStory<ScreenLayoutStoryblok> | string;
  _uid: string;
  component: "signageAlias";
  [k: string]: any;
}

export interface VideoLoopStoryblok {
  videoAssets?: VideoSourceStoryblok[];
  _uid: string;
  component: "videoLoop";
  [k: string]: any;
}

export interface VideoSourceStoryblok {
  name?: string;
  videoURL?: string;
  caption?: any;
  folTitle?: RichtextStoryblok;
  eolTitle?: RichtextStoryblok;
  folDescription?: RichtextStoryblok;
  eolDescription?: RichtextStoryblok;
  copyright?: string;
  credit?: string;
  position?: "" | "ds_bottom-left" | "ds_bottom-right" | "ds_top-left" | "ds_top-right";
  textColour?: "" | "ds-caption-light" | "ds-caption-dark";
  backgroundColour?: "" | "ds-caption-bg-light" | "ds-caption-bg-dark";
  _uid: string;
  component: "videoSource";
  [k: string]: any;
}

export interface WhatsOnPromoStoryblok {
  name?: string;
  Colours?: any;
  title?: string;
  description?: RichtextStoryblok;
  image?: AssetStoryblok;
  size?: "small" | "large";
  tessitura?: any;
  tnewKeyword?: string;
  performanceId?: string;
  tnewTitle?: string;
  manualTiming?: string;
  _uid: string;
  component: "whatsOnPromo";
  [k: string]: any;
}
