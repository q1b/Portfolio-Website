/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Became a part of a prestigious association of like minded industry professionals</p>";

				const frontmatter = {"title":"Student member at IEEE","org":"IEEE","date":2022};
				const file = "/home/vishrut/projs/portfolio/evolved-eclipse/src/pages/certificates/backend2022 copy.md";
				const url = "/certificates/backend2022 copy";
				function rawContent() {
					return "\nBecame a part of a prestigious association of like minded industry professionals";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
