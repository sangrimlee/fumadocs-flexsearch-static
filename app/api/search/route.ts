import { Charset } from "flexsearch";
import { flexsearchFromSource } from "fumadocs-core/search/flexsearch";
import { source } from "@/lib/source";

export const { staticGET: GET } = flexsearchFromSource(source, {
  document: {
    encoder: Charset.CJK,
  },
});
