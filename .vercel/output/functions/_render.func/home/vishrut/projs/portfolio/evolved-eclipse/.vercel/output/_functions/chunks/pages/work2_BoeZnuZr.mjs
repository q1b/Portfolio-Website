/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>Designed a website for the business and developed and learned about integration of cost calculator</li>\n<li>Using data and zoning analysis on company to get information helping in developing a maintenance strategy</li>\n<li>Attended a seminar by Havells which discussed on the new technologies in the industry helping in grid\nintegration and energy management</li>\n</ul>";

				const frontmatter = {"title":"Intern","date":"June 2023 - August 2023","location":"Surat, IN","org":"Swami Integrators and consultants LLP","tags":["Web-Dev","Figma","Lead generation","Operations management"]};
				const file = "/home/vishrut/projs/portfolio/evolved-eclipse/src/pages/works/work2.md";
				const url = "/works/work2";
				function rawContent() {
					return "\n- Designed a website for the business and developed and learned about integration of cost calculator\n- Using data and zoning analysis on company to get information helping in developing a maintenance strategy\n- Attended a seminar by Havells which discussed on the new technologies in the industry helping in grid\nintegration and energy management\n";
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
