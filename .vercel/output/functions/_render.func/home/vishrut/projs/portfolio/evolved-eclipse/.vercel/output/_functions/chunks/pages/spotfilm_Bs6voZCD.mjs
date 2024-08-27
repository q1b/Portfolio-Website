/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>to make a model that is capable of detecting the failure of an equipment way before the actual failure. The dataset that we have has been taken from the industry itself and has all the actual features that is needed to satisfy our goal. We will be targeting Solar Panel for our project and at the end our model will be capable of informing failure of any panel prior to its actual failure.</p>";

				const frontmatter = {"title":"Predictive maintenance of Industrial Equipment","url":"https://github.com/KumarTheVishrut/Predictive-maintenance-of-Industrial-Equipment.git","tags":["Python","Jupyter lab","analytics","Decision tree"],"date":2023};
				const file = "/home/vishrut/projs/portfolio/evolved-eclipse/src/pages/projects/spotfilm.md";
				const url = "/projects/spotfilm";
				function rawContent() {
					return "to make a model that is capable of detecting the failure of an equipment way before the actual failure. The dataset that we have has been taken from the industry itself and has all the actual features that is needed to satisfy our goal. We will be targeting Solar Panel for our project and at the end our model will be capable of informing failure of any panel prior to its actual failure.\n";
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
