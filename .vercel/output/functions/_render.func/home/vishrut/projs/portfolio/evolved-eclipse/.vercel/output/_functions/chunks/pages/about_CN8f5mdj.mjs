/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>I have excelled in data-driven roles, leading impactful projects during my internship at Dailyhunt as an AI model analyst, predictive maintenance in my sophomore year ,loan default prediction in my semi-final year by utilizing Python and it’s advanced libraries. Proficient in data analytics and\nfinancial analysis, I’ve leveraged skills in Python, SQL, and Excel to drive informed decisionmaking.\nMy knowledge in Deep learning and LLM’s can be put on for great use in your use case. From making a small , silly flask app to training and initializing a AI pipeline, I’ve got you covered :)\nI’ve collaborated with cross-functional teams,offering actionable insights and contributing to strategic growth. Additionally, my recognition in\ninternational forums such as SSU International MUN and achievements like the 2nd Runner Up\nat IBM ICE underscore my commitment to excellence and innovation in the field. Also won a silver medal in table tennis in College olympics BTW :)</p>";

				const frontmatter = {"title":"about","name":"Vishrut Kumar","designation":"Ex-Intern at Dailyhunt","location":"Bengaluru , IN","pronouns":"he/him"};
				const file = "/home/vishrut/projs/portfolio/evolved-eclipse/src/pages/about/about.md";
				const url = "/about/about";
				function rawContent() {
					return "\nI have excelled in data-driven roles, leading impactful projects during my internship at Dailyhunt as an AI model analyst, predictive maintenance in my sophomore year ,loan default prediction in my semi-final year by utilizing Python and it's advanced libraries. Proficient in data analytics and\nfinancial analysis, I've leveraged skills in Python, SQL, and Excel to drive informed decisionmaking.\nMy knowledge in Deep learning and LLM's can be put on for great use in your use case. From making a small , silly flask app to training and initializing a AI pipeline, I've got you covered :)\nI've collaborated with cross-functional teams,offering actionable insights and contributing to strategic growth. Additionally, my recognition in\ninternational forums such as SSU International MUN and achievements like the 2nd Runner Up\nat IBM ICE underscore my commitment to excellence and innovation in the field. Also won a silver medal in table tennis in College olympics BTW :)";
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
