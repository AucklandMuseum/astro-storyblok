import {StoryblokStory} from 'storyblok-generate-ts'

export interface ContentSectionStoryblok {
  Setup?: any;
  sectionWidth: "Standard" | "Fullwidth";
  sectionStyle: "Standard" | "Dark" | "Light";
  sectionMarginTop: "Standard" | "None" | "Small" | "Large";
  sectionMarginBottom: "Standard" | "None" | "Small" | "Large";
  contentWidth: "Standard" | "Fullwidth" | "Medium" | "Narrow";
  contentBlocks?: (
    | ContentSectionStoryblok
    | CopyBlockStoryblok
    | HeroStoryblok
    | HtmlBlockStoryblok
    | ImageStoryblok
    | LinkImageButtonStoryblok
    | TitleBlockStoryblok
    | YoutubeVideoStoryblok
  )[];
  _uid: string;
  component: "contentSection";
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

export interface CopyBlockStoryblok {
  content: RichtextStoryblok;
  contentStyle: "Standard" | "Small" | "Large";
  _uid: string;
  component: "copyBlock";
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

export interface HeroStoryblok {
  name: string;
  image?: AssetStoryblok;
  contentBlocks?: (
    | ContentSectionStoryblok
    | CopyBlockStoryblok
    | HeroStoryblok
    | HtmlBlockStoryblok
    | ImageStoryblok
    | LinkImageButtonStoryblok
    | MenuItemStoryblok
    | PageStoryblok
    | ScreenStoryblok
    | ScreenLayoutStoryblok
    | SharedScreenStoryblok
    | SiteSectionStoryblok
    | TitleBlockStoryblok
    | YoutubeVideoStoryblok
  )[];
  contentAlignment: "Left" | "Right";
  behaviour: "Small" | "Medium" | "Large";
  _uid: string;
  component: "hero";
  [k: string]: any;
}

export interface HtmlBlockStoryblok {
  htmlCode: string;
  _uid: string;
  component: "htmlBlock";
  [k: string]: any;
}

export interface ImageStoryblok {
  Image: AssetStoryblok;
  _uid: string;
  component: "image";
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

export interface LinkImageButtonStoryblok {
  name?: string;
  linkURL: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  linkText?: number | string;
  linkType?: "link" | "button";
  image?: AssetStoryblok;
  _uid: string;
  component: "linkImageButton";
  [k: string]: any;
}

export interface MenuItemStoryblok {
  title: string;
  secondaryTitle?: string;
  newWindow?: boolean;
  page?: StoryblokStory<PageStoryblok> | string;
  url?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  image?: AssetStoryblok;
  _uid: string;
  component: "menuItem";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: (
    | ContentSectionStoryblok
    | CopyBlockStoryblok
    | HeroStoryblok
    | HtmlBlockStoryblok
    | ImageStoryblok
    | LinkImageButtonStoryblok
    | MenuItemStoryblok
    | PageStoryblok
    | ScreenStoryblok
    | ScreenLayoutStoryblok
    | SharedScreenStoryblok
    | SiteSectionStoryblok
    | TitleBlockStoryblok
    | YoutubeVideoStoryblok
  )[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface ScreenStoryblok {
  size?: any;
  widthNumber?: string;
  heightNumber?: string;
  resolution?: "" | "SD" | "HD" | "FHD" | "UHD";
  orientation?: "" | "horizontal" | "vertical";
  colours?: any;
  border?: any;
  borderWidth?: "" | "small" | "large";
  content?: (
    | ContentSectionStoryblok
    | CopyBlockStoryblok
    | HeroStoryblok
    | HtmlBlockStoryblok
    | ImageStoryblok
    | LinkImageButtonStoryblok
    | MenuItemStoryblok
    | PageStoryblok
    | ScreenStoryblok
    | ScreenLayoutStoryblok
    | SharedScreenStoryblok
    | SiteSectionStoryblok
    | TitleBlockStoryblok
    | YoutubeVideoStoryblok
  )[];
  _uid: string;
  component: "screen";
  [k: string]: any;
}

export interface ScreenLayoutStoryblok {
  size?: any;
  widthNumber: string;
  heightNumber: string;
  resolution?: "" | "SD" | "HD" | "FHD" | "UHD";
  orientation: "" | "horizontal" | "vertical";
  Colours?: any;
  grid?: any;
  gridData?: string;
  content?: (ScreenStoryblok | SharedScreenStoryblok)[];
  _uid: string;
  component: "screenLayout";
  [k: string]: any;
}

export interface SharedScreenStoryblok {
  name: string;
  contentLookup?: StoryblokStory<ScreenStoryblok> | string;
  _uid: string;
  component: "sharedScreen";
  [k: string]: any;
}

export interface SiteSectionStoryblok {
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
  component: "siteSection";
  [k: string]: any;
}

export interface TitleBlockStoryblok {
  behaviour: "" | "Page" | "Hero" | "Event" | "Promo";
  title: string;
  subtitle?: string;
  boldSubtitle?: string;
  _uid: string;
  component: "titleBlock";
  [k: string]: any;
}

export interface YoutubeVideoStoryblok {
  videoURL: string;
  aspectRatio?: "landscape169" | "landscape43" | "portrait169" | "portrait43" | "square";
  width?: "100" | "50" | "33" | "25";
  autoPlay?: boolean;
  relatedVideos?: boolean;
  _uid: string;
  component: "youtubeVideo";
  [k: string]: any;
}
