import './footer.styles.css';

const BlogFooter = () =>{

    return (
        <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <p>&copy; 2024 rabindradahal.com.np</p>
          </div>
          <div className="footer-right">
            <a href="https://github.com/Rabindra12345" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github"></i>
            </a>
            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter"></i>
            </a> */}
            <a href="https://www.linkedin.com/in/rabindra-dahal-7529aa192/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    );
}

export {BlogFooter};