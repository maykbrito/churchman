import React from 'react'
import { Container } from 'reactstrap';

const AppFooter = () => {

    return (
    <footer data-element-name="footer" className="footer">
      <Container>
        <span className="text-muted">Terms of Use / License MIT /
         <a href="https://github.com/maykbrito" 
         rel="noopener noreferrer" target="_blank"> See it on GitHub</a></span>
      </Container>
    </footer>
    )
}

export default AppFooter 