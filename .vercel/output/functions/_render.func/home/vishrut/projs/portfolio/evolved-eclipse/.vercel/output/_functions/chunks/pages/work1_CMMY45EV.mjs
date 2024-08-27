/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>Underwent the boot-camp for deep learning and analytics</li>\n<li>Made an internal tool which gave insights on several AI models</li>\n<li>Used database querying and hosted the tool on cloud</li>\n<li>Analyzed the AI model performance on several features</li>\n<li>Gave insights on the performance and suggested changes in the models</li>\n</ul>";

				const frontmatter = {"title":"Intern","date":"May 2024 - August 2024","location":"Bengaluru, IN","org":"Verse Innovation Private Limited (Dailyhunt & Josh)","tags":["Intern","AI","Dev","Analyst"]};
				const file = "/home/vishrut/projs/portfolio/evolved-eclipse/src/pages/works/work1.md";
				const url = "/works/work1";
				function rawContent() {
					return "\n\n- Underwent the boot-camp for deep learning and analytics\n- Made an internal tool which gave insights on several AI models\n- Used database querying and hosted the tool on cloud\n- Analyzed the AI model performance on several features\n- Gave insights on the performance and suggested changes in the models";
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
