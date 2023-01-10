import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import '../main.scss';
import '../my-styles.scss';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <section id='header'>
        <div className='inner'>
          <span className='icon solid major fa-cloud'></span>
          <span className='pre-title'>Hi,</span>
          <h1 className='title'>
            I'm <strong>Bo Carey</strong>.
          </h1>
          <h1 className='sub-title'>I develop outstanding web components.</h1>
          <p>
            I'm a software engineer specializing in building scalable,
            <br />
            performant webcomponents and websites with high standards in
            <br />
            communication, scalable design and fluidity.
          </p>
          <ul className='actions special'>
            <li>
              <a href='#one' className='button scrolly'>
                Scroll Down Here
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id='one' className='main style1'>
        <div className='container'>
          <div className='row gtr-150'>
            <div className='col-6 col-12-medium'>
              <header className='major'>
                <h2>
                  Lorem ipsum dolor adipiscing
                  <br />
                  amet dolor consequat
                </h2>
              </header>
              <p>
                Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc
                lobortis non nisl amet vis sed volutpat aclacus nascetur ac non. Lorem curae et ante
                amet sapien sed tempus adipiscing id accumsan.
              </p>
            </div>
            <div className='col-6 col-12-medium imp-medium'>
              <span className='image fit'>
                <img src='images/pic01.jpg' alt='' />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Two */}
      <section id='two' className='main style2'>
        <div className='container'>
          <div className='row gtr-150'>
            <div className='col-6 col-12-medium'>
              <ul className='major-icons'>
                <li>
                  <span className='icon solid style1 major fa-code'></span>
                </li>
                <li>
                  <span className='icon solid style2 major fa-bolt'></span>
                </li>
                <li>
                  <span className='icon solid style3 major fa-camera-retro'></span>
                </li>
                <li>
                  <span className='icon solid style4 major fa-cog'></span>
                </li>
                <li>
                  <span className='icon solid style5 major fa-desktop'></span>
                </li>
                <li>
                  <span className='icon solid style6 major fa-calendar'></span>
                </li>
              </ul>
            </div>
            <div className='col-6 col-12-medium'>
              <header className='major'>
                <h2>
                  Lorem ipsum dolor adipiscing
                  <br />
                  amet dolor consequat
                </h2>
              </header>
              <p>
                Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis
                non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien
                in tempus ac. Adipiscing id accumsan adipiscing ipsum.
              </p>
              <p>
                Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo
                nunc phasellus cubilia ac risus accumsan. Accumsan blandit. Lobortis phasellus non
                lobortis dit varius mi varius accumsan lobortis. Blandit ante aliquam lacinia lorem
                lobortis semper morbi col faucibus vitae integer placerat accumsan orci eu mi odio
                tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore.
              </p>
              <p>
                Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis
                non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien
                in tempus ac. Adipiscing id accumsan adipiscing ipsum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three */}
      <section id='three' className='main style1 special'>
        <div className='container'>
          <header className='major'>
            <h2>Adipiscing amet consequat</h2>
          </header>
          <p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
          <div className='row gtr-150'>
            <div className='col-4 col-12-medium'>
              <span className='image fit'>
                <img src='images/pic02.jpg' alt='' />
              </span>
              <h3>Magna feugiat lorem</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non
                amet vis sed volutpat et nascetur.
              </p>
              <ul className='actions special'>
                <li>
                  <a href='#' className='button'>
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-4 col-12-medium'>
              <span className='image fit'>
                <img src='images/pic03.jpg' alt='' />
              </span>
              <h3>Magna feugiat lorem</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non
                amet vis sed volutpat et nascetur.
              </p>
              <ul className='actions special'>
                <li>
                  <a href='#' className='button'>
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-4 col-12-medium'>
              <span className='image fit'>
                <img src='images/pic04.jpg' alt='' />
              </span>
              <h3>Magna feugiat lorem</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non
                amet vis sed volutpat et nascetur.
              </p>
              <ul className='actions special'>
                <li>
                  <a href='#' className='button'>
                    More
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Four */}
      <section id='four' className='main style2 special'>
        <div className='container'>
          <header className='major'>
            <h2>Ipsum feugiat consequat?</h2>
          </header>
          <p>Sed lacus nascetur ac ante amet sapien.</p>
          <ul className='actions special'>
            <li>
              <a href='#' className='button wide primary'>
                Sign Up
              </a>
            </li>
            <li>
              <a href='#' className='button wide'>
                Learn More
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Five */}
      {/*
			<section id="five" className="main style1">
				<div className="container">
					<header className="major special">
						<h2>Elements</h2>
					</header>

					<section>
						<h4>Text</h4>
						<p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
						This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
						This is <u>underlined</u> and this is code: <code>for (;;) { ... }</code>. Finally, <a href="#">this is a link</a>.</p>
						<hr />
						<header>
							<h4>Heading with a Subtitle</h4>
							<p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
						</header>
						<p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
						<header>
							<h5>Heading with a Subtitle</h5>
							<p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
						</header>
						<p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
						<hr />
						<h2>Heading Level 2</h2>
						<h3>Heading Level 3</h3>
						<h4>Heading Level 4</h4>
						<h5>Heading Level 5</h5>
						<h6>Heading Level 6</h6>
						<hr />
						<h5>Blockquote</h5>
						<blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis.</blockquote>
						<h5>Preformatted</h5>
						<pre><code>i = 0;

while (!deck.isInOrder()) {
print 'Iteration ' + i;
deck.shuffle();
i++;
}

print 'It took ' + i + ' iterations to sort the deck.';</code></pre>
					</section>

					<section>
						<h4>Lists</h4>
						<div className="row">
							<div className="col-6 col-12-medium">
								<h5>Unordered</h5>
								<ul>
									<li>Dolor pulvinar etiam.</li>
									<li>Sagittis adipiscing.</li>
									<li>Felis enim feugiat.</li>
								</ul>
								<h5>Alternate</h5>
								<ul className="alt">
									<li>Dolor pulvinar etiam.</li>
									<li>Sagittis adipiscing.</li>
									<li>Felis enim feugiat.</li>
								</ul>
							</div>
							<div className="col-6 col-12-medium">
								<h5>Ordered</h5>
								<ol>
									<li>Dolor pulvinar etiam.</li>
									<li>Etiam vel felis viverra.</li>
									<li>Felis enim feugiat.</li>
									<li>Dolor pulvinar etiam.</li>
									<li>Etiam vel felis lorem.</li>
									<li>Felis enim et feugiat.</li>
								</ol>
								<h5>Icons</h5>
								<ul className="icons">
									<li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
									<li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
									<li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
									<li><a href="#" className="icon brands fa-github"><span className="label">Github</span></a></li>
								</ul>
							</div>
						</div>
						<h5>Actions</h5>
						<div className="row">
							<div className="col-6 col-12-medium">
								<ul className="actions">
									<li><a href="#" className="button primary">Default</a></li>
									<li><a href="#" className="button">Default</a></li>
								</ul>
								<ul className="actions small">
									<li><a href="#" className="button primary small">Small</a></li>
									<li><a href="#" className="button small">Small</a></li>
								</ul>
								<ul className="actions stacked">
									<li><a href="#" className="button primary">Default</a></li>
									<li><a href="#" className="button">Default</a></li>
								</ul>
								<ul className="actions stacked">
									<li><a href="#" className="button primary small">Small</a></li>
									<li><a href="#" className="button small">Small</a></li>
								</ul>
							</div>
							<div className="col-6 col-12-medium">
								<ul className="actions stacked">
									<li><a href="#" className="button primary fit">Default</a></li>
									<li><a href="#" className="button fit">Default</a></li>
								</ul>
								<ul className="actions stacked">
									<li><a href="#" className="button primary small fit">Small</a></li>
									<li><a href="#" className="button small fit">Small</a></li>
								</ul>
							</div>
						</div>
					</section>

					<section>
						<h4>Table</h4>
						<h5>Default</h5>
						<div className="table-wrapper">
							<table>
								<thead>
									<tr>
										<th>Name</th>
										<th>Description</th>
										<th>Price</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Item One</td>
										<td>Ante turpis integer aliquet porttitor.</td>
										<td>29.99</td>
									</tr>
									<tr>
										<td>Item Two</td>
										<td>Vis ac commodo adipiscing arcu aliquet.</td>
										<td>19.99</td>
									</tr>
									<tr>
										<td>Item Three</td>
										<td> Morbi faucibus arcu accumsan lorem.</td>
										<td>29.99</td>
									</tr>
									<tr>
										<td>Item Four</td>
										<td>Vitae integer tempus condimentum.</td>
										<td>19.99</td>
									</tr>
									<tr>
										<td>Item Five</td>
										<td>Ante turpis integer aliquet porttitor.</td>
										<td>29.99</td>
									</tr>
								</tbody>
								<tfoot>
									<tr>
										<td colspan="2"></td>
										<td>100.00</td>
									</tr>
								</tfoot>
							</table>
						</div>

						<h5>Alternate</h5>
						<div className="table-wrapper">
							<table className="alt">
								<thead>
									<tr>
										<th>Name</th>
										<th>Description</th>
										<th>Price</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Item One</td>
										<td>Ante turpis integer aliquet porttitor.</td>
										<td>29.99</td>
									</tr>
									<tr>
										<td>Item Two</td>
										<td>Vis ac commodo adipiscing arcu aliquet.</td>
										<td>19.99</td>
									</tr>
									<tr>
										<td>Item Three</td>
										<td> Morbi faucibus arcu accumsan lorem.</td>
										<td>29.99</td>
									</tr>
									<tr>
										<td>Item Four</td>
										<td>Vitae integer tempus condimentum.</td>
										<td>19.99</td>
									</tr>
									<tr>
										<td>Item Five</td>
										<td>Ante turpis integer aliquet porttitor.</td>
										<td>29.99</td>
									</tr>
								</tbody>
								<tfoot>
									<tr>
										<td colspan="2"></td>
										<td>100.00</td>
									</tr>
								</tfoot>
							</table>
						</div>
					</section>

					<section>
						<h4>Buttons</h4>
						<ul className="actions">
							<li><a href="#" className="button primary">Primary</a></li>
							<li><a href="#" className="button">Default</a></li>
						</ul>
						<ul className="actions">
							<li><a href="#" className="button large">Large</a></li>
							<li><a href="#" className="button">Default</a></li>
							<li><a href="#" className="button small">Small</a></li>
						</ul>
						<ul className="actions fit">
							<li><a href="#" className="button fit">Fit</a></li>
							<li><a href="#" className="button primary fit">Fit</a></li>
							<li><a href="#" className="button fit">Fit</a></li>
						</ul>
						<ul className="actions fit small">
							<li><a href="#" className="button primary fit small">Fit + Small</a></li>
							<li><a href="#" className="button fit small">Fit + Small</a></li>
							<li><a href="#" className="button primary fit small">Fit + Small</a></li>
						</ul>
						<ul className="actions">
							<li><a href="#" className="button primary icon solid fa-download">Icon</a></li>
							<li><a href="#" className="button icon solid fa-download">Icon</a></li>
						</ul>
						<ul className="actions">
							<li><span className="button primary disabled">Disabled</span></li>
							<li><span className="button disabled">Disabled</span></li>
						</ul>
					</section>

					<section>
						<h4>Form</h4>
						<form method="post" action="#">
							<div className="row gtr-uniform gtr-50">
								<div className="col-6 col-12-xsmall">
									<input type="text" name="demo-name" id="demo-name" value="" placeholder="Name" />
								</div>
								<div className="col-6 col-12-xsmall">
									<input type="email" name="demo-email" id="demo-email" value="" placeholder="Email" />
								</div>
								<div className="col-12">
									<select name="demo-category" id="demo-category">
										<option value="">- Category -</option>
										<option value="1">Manufacturing</option>
										<option value="1">Shipping</option>
										<option value="1">Administration</option>
										<option value="1">Human Resources</option>
									</select>
								</div>
								<div className="col-4 col-12-small">
									<input type="radio" id="demo-priority-low" name="demo-priority" checked>
									<label for="demo-priority-low">Low</label>
								</div>
								<div className="col-4 col-12-small">
									<input type="radio" id="demo-priority-normal" name="demo-priority">
									<label for="demo-priority-normal">Normal</label>
								</div>
								<div className="col-4 col-12-small">
									<input type="radio" id="demo-priority-high" name="demo-priority">
									<label for="demo-priority-high">High</label>
								</div>
								<div className="col-6 col-12-small">
									<input type="checkbox" id="demo-copy" name="demo-copy">
									<label for="demo-copy">Email me a copy</label>
								</div>
								<div className="col-6 col-12-small">
									<input type="checkbox" id="demo-human" name="demo-human" checked>
									<label for="demo-human">Not a robot</label>
								</div>
								<div className="col-12">
									<textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6"></textarea>
								</div>
								<div className="col-12">
									<ul className="actions">
										<li><input type="submit" value="Send Message" className="primary" /></li>
										<li><input type="reset" value="Reset" /></li>
									</ul>
								</div>
							</div>
						</form>
					</section>

					<section>
						<h4>Image</h4>
						<h5>Fit</h5>
						<div className="box alt">
							<div className="row gtr-uniform gtr-50">
								<div className="col-12"><span className="image fit"><img src="images/pic06.jpg" alt="" /></span></div>
								<div className="col-4"><span className="image fit"><img src="images/pic02.jpg" alt="" /></span></div>
								<div className="col-4"><span className="image fit"><img src="images/pic03.jpg" alt="" /></span></div>
								<div className="col-4"><span className="image fit"><img src="images/pic04.jpg" alt="" /></span></div>
								<div className="col-4"><span className="image fit"><img src="images/pic03.jpg" alt="" /></span></div>
								<div className="col-4"><span className="image fit"><img src="images/pic04.jpg" alt="" /></span></div>
								<div className="col-4"><span className="image fit"><img src="images/pic02.jpg" alt="" /></span></div>
								<div className="col-4"><span className="image fit"><img src="images/pic04.jpg" alt="" /></span></div>
								<div className="col-4"><span className="image fit"><img src="images/pic02.jpg" alt="" /></span></div>
								<div className="col-4"><span className="image fit"><img src="images/pic03.jpg" alt="" /></span></div>
							</div>
						</div>
						<h5>Left &amp; Right</h5>
						<p><span className="image left"><img src="images/pic05.jpg" alt="" /></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
						<p><span className="image right"><img src="images/pic05.jpg" alt="" /></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
					</section>

				</div>
			</section>
		*/}

      {/* Footer */}
      <section id='footer'>
        <ul className='icons'>
          <li>
            <a href='#' className='icon brands alt fa-twitter'>
              <span className='label'>Twitter</span>
            </a>
          </li>
          <li>
            <a href='#' className='icon brands alt fa-facebook-f'>
              <span className='label'>Facebook</span>
            </a>
          </li>
          <li>
            <a href='#' className='icon brands alt fa-instagram'>
              <span className='label'>Instagram</span>
            </a>
          </li>
          <li>
            <a href='#' className='icon brands alt fa-github'>
              <span className='label'>GitHub</span>
            </a>
          </li>
          <li>
            <a href='#' className='icon solid alt fa-envelope'>
              <span className='label'>Email</span>
            </a>
          </li>
        </ul>
        <ul className='copyright'>
          <li>&copy; Untitled</li>
          <li>
            Design: <a href='http://html5up.net'>HTML5 UP</a>
          </li>
        </ul>
      </section>

      {/* Scripts */}
      <script src='assets/js/jquery.min.js'></script>
      <script src='assets/js/jquery.scrolly.min.js'></script>
      <script src='assets/js/browser.min.js'></script>
      <script src='assets/js/breakpoints.min.js'></script>
      <script src='assets/js/util.js'></script>
      <script src='assets/js/main.js'></script>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
