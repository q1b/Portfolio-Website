/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>This application allows users to upload a CSV file, which is then split into two Kanban boards for Ram and Shyam. Each board allows for task management, including sending emails, WhatsApp messages, and phone calls to candidates.</p>";

				const frontmatter = {"title":"Kanban TODO list for Event scheduling in Flask","url":"https://github.com/KumarTheVishrut/weekday-ram-shyam-todolist.git","tags":["python","github","API","HTML","JS","CSS"],"date":2022};
				const file = "/home/vishrut/projs/portfolio/evolved-eclipse/src/pages/projects/spotfilm copy.md";
				const url = "/projects/spotfilm copy";
				function rawContent() {
					return "\nThis application allows users to upload a CSV file, which is then split into two Kanban boards for Ram and Shyam. Each board allows for task management, including sending emails, WhatsApp messages, and phone calls to candidates.\n";
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
