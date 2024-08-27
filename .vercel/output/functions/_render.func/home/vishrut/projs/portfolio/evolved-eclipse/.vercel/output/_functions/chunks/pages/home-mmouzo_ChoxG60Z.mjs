/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Me and my thoughts on AI and finance on substack</p>";

				const frontmatter = {"title":"Substack","date":"01/2024 - Present","url":"https://wealthprudencewithvishrut.substack.com/publish/posts","url_name":"Substack"};
				const file = "/home/vishrut/projs/portfolio/evolved-eclipse/src/pages/blogs/home-mmouzo.md";
				const url = "/blogs/home-mmouzo";
				function rawContent() {
					return "\nMe and my thoughts on AI and finance on substack\n";
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
