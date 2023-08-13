export interface PodcastProps {
  feed: Feed
}

interface Feed {
  author: Author
  entry: Entry[]
  updated: LabelProps
  rights: LabelProps
  title: LabelProps
  icon: LabelProps
  link: Link2[]
  id: LabelProps
}

interface Link2 {
  attributes: Attributes8
}

interface Attributes8 {
  rel: string
  type?: string
  href: string
}

interface Entry {
  "im:name": LabelProps
  "im:image": ImageProps[]
  summary: LabelProps
  "im:price": PriceProps
  "im:contentType": ContentTypeProps
  rights?: LabelProps
  title: LabelProps
  link: LinkProps
  id: IdProps
  "im:artist": ArtistProps
  category: CategoryProps
  "im:releaseDate": ReleaseDateProps
}

interface ReleaseDateProps {
  label: string
  attributes: LabelProps
}

interface CategoryProps {
  attributes: CategoryAttrProps
}

interface CategoryAttrProps {
  "im:id": string
  term: string
  scheme: string
  label: string
}

interface ArtistProps {
  label: string
  attributes?: ArtistAttrProps
}

interface ArtistAttrProps {
  href: string
}

interface IdProps {
  label: string
  attributes: IdAttrProps
}

interface IdAttrProps {
  "im:id": string
}

interface LinkProps {
  attributes: LinkAttrProps
}

interface LinkAttrProps {
  rel: string
  type: string
  href: string
}

interface ContentTypeProps {
  attributes: ContentTypeAttrProps
}

interface ContentTypeAttrProps {
  term: string
  label: string
}

interface PriceProps {
  label: string
  attributes: PriceAttrProps
}

interface PriceAttrProps {
  amount: string
  currency: string
}

interface ImageProps {
  label: string
  attributes: HeightProps
}

interface HeightProps {
  height: string
}

interface Author {
  name: LabelProps
  uri: LabelProps
}

interface LabelProps {
  label: string
}
