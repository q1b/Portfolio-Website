/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Basic awareness of pen testing tools and network protocols used across the web</p>";

				const frontmatter = {"title":"Fundamentals of cloud security","org":"Palo Alto Networks","tags":254678886,"date":2022};
				const file = "/home/vishrut/projs/portfolio/evolved-eclipse/src/pages/certificates/backend2022 copy 2.md";
				const url = "/certificates/backend2022 copy 2";
				function rawContent() {
					return "\nBasic awareness of pen testing tools and network protocols used across the web\n";
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
