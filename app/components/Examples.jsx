var React = require('react');
const {Link} = require('react-router');

const Examples = (props) => {
	return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few examples to try out:</p>
      <ol>
        <li>
          <Link to='/?location=St.Petersburg' className ="links">St. Petersburg, Russia</Link>
        </li>
        <li>
          <Link to='/?location=Rio' className ="links">Rio, Brazil</Link>
        </li>
      </ol>
    </div>
	);
};

module.exports = Examples;
