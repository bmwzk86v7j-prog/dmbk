import { useEffect } from "react";
import { useI18n } from "./I18nProvider";
import { translatePageText } from "./pageTranslations";

const originals = new WeakMap<Node, string>();
const attrOriginals = new WeakMap<Element, Map<string, string>>();

export function PageTranslator() {
  const { lang } = useI18n();

  useEffect(() => {
    document.documentElement.lang = lang.toLowerCase();

    const apply = (root: Node) => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      let node: Node | null;
      while ((node = walker.nextNode())) {
        const parent = node.parentElement;
        if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) continue;
        if (!originals.has(node)) originals.set(node, node.textContent ?? "");
        const original = originals.get(node) ?? "";
        const translated = translatePageText(original, lang);
        if (translated !== undefined && node.textContent !== translated) node.textContent = translated;
      }

      const elements = root instanceof Element ? [root, ...root.querySelectorAll("*")] : [...document.querySelectorAll("*")];
      for (const element of elements) {
        for (const attr of ["alt", "title", "aria-label"]) {
          const current = element.getAttribute(attr);
          if (!current) continue;
          let saved = attrOriginals.get(element);
          if (!saved) { saved = new Map(); attrOriginals.set(element, saved); }
          if (!saved.has(attr)) saved.set(attr, current);
          const original = saved.get(attr) ?? current;
          const translated = translatePageText(original, lang);
          if (translated !== undefined && current !== translated) element.setAttribute(attr, translated);
        }
      }
    };

    apply(document.body);
    const observer = new MutationObserver((mutations) => {
      observer.disconnect();
      for (const mutation of mutations) mutation.addedNodes.forEach(apply);
      observer.observe(document.body, { childList: true, subtree: true });
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [lang]);

  return null;
}
