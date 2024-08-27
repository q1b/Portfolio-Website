/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>A fun anectode with some insights on deep learning and neural networks :)</p>";

				const frontmatter = {"title":"Medium","date":"08/2024","url":"https://medium.com/@thevishrutkumar/building-a-semi-simple-python-based-gan-in-1-hour-a8ae0bc607a1","url_name":"Medium"};
				const file = "/home/vishrut/projs/portfolio/evolved-eclipse/src/pages/blogs/home-mmouzo copy.md";
				const url = "/blogs/home-mmouzo copy";
				function rawContent() {
					return "\nA fun anectode with some insights on deep learning and neural networks :)\n\n";
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
