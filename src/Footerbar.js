import 'bootstrap';

const Footerbar =()=>{
    return (
        <div style="position: absolute;bottom: 0;width:100vw; max-width: 100vw;">
            <div class="row" style="background-color: darkgrey;">
                <div class="row justify-content-between" style="position: relative;bottom: 0;width:100%">
                    <div class="col align-self-start" style="margin: 10px 20px">
                        <h3>Need to get in touch with me?</h3>
                    </div>
                    <div class="col align-self-end" style="text-align: right;margin: 10px 20px">
                        <ul style="list-style: none;">
                            <li><h4><strong>Contact Information</strong></h4></li>
                            <li style="color: rgb(0, 89, 255);">aleenak2@illinois.edu</li>
                        </ul>
                    </div>
                </div>
            </div>
            <footer style="text-align: right;width: 100%;padding: 10px">
                <p></p>
                <p>&copy; Copyright 2024. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Footerbar;