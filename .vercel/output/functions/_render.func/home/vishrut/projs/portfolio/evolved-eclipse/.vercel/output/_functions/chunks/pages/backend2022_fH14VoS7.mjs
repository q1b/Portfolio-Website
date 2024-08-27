/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>An exam initiative taken by SEBI on investor education</p>";

				const frontmatter = {"title":"NISM-Series-XV  Research Analyst Certification Examination","org":"National Institute of Securities Markets (NISM)","tags":"stock market analysis and basic financial analysis","date":2024};
				const file = "/home/vishrut/projs/portfolio/evolved-eclipse/src/pages/certificates/backend2022.md";
				const url = "/certificates/backend2022";
				function rawContent() {
					return "\nAn exam initiative taken by SEBI on investor education";
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
