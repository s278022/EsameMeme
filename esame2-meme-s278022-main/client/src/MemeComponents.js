
function elencoMeme(props) {
    return 
        <div class="it-list-wrapper">
            <ul class="it-list">
                <li>
                    <a href="DA_FARE">
                        <div class="it-right-zone">
                            <span class="text">{props.titolo}</span>
                            <svg class="icon">
                                
                            </svg>
                        </div>
                    </a>
                </li>                  
            </ul>
        </div>
}

export default elencoMeme;