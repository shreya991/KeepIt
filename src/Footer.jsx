import React from 'react'

export const Footer = () => {

    const year = new Date().getFullYear();
    return (
        
            <footer class="footer mt-auto py-3 bg-light" style={{position:'relative',top:'500px'}}>
                <div class="container">
                    <span class="text-muted">Copyright@{year}</span>
                </div>
            </footer>
        
    )
}
