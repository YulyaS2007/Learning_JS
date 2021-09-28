class MainShop {
    createMainShop() {
        this.element = document.createElement('div');
        this.element.classList.add('mainShop');

        let ulPortfolioFilter = document.createElement("ul");
        ulPortfolioFilter.classList.add("portfolio__filter");
        ulPortfolioFilter.classList.add("filter");

        ulPortfolioFilter.innerHTML = `
        <li data-filter="all" active>All magical goods</li>
        <li data-filter="jokes">Jokes</li>
        <li data-filter="edible">Edible</li>
        <li data-filter="forGirl">Goods for girls</li>
        <li data-filter="other">Other things</li>
         `;

        let ulPortfolioLibrary = document.createElement("ul");
        ulPortfolioLibrary.classList.add("portfolio__list");
        ulPortfolioLibrary.classList.add("list");
        ulPortfolioLibrary.classList.add("library");

        ulPortfolioLibrary.innerHTML = `
        <li data-filter="jokes" class="library_page">
                                    <figure class="flip">
                                        <img class="card-face front" srcset="/images/images/hat1.png" alt="#">
                                        <figcaption class="card-face back">
                                            <h4>Безголовая шляпа</h4>
                                            <p>Представляет из себя шляпу-невидимку, делающей невидимой только голову, надевшего его человека.</p>
                                        </figcaption> 
                                    </figure>  
                                    <div class="description_page">
                                        <h4>The headless hat</h4>
                                        <p class="cost">5 галлеонов</p>
                                        
                                    </div>
                                </li>
                            
                                <li data-filter="jokes" class="library_page">
                                    <figure class="flip">
                                        <ul id="fakewand" class="card-face front">
                                            <li class="slide showing">
                                                <img src="/images/images/fakewand.png" alt="#">
                                            </li>
                                            <li class="slide">
                                                <img src="/images/images/fakewands1.png" alt="#">
                                            </li>
                                            <li class="slide">
                                                <img src="/images/images/fakewand2.png" alt="#">
                                            </li>
                                            <li class="slide">
                                                <img src="/images/images/fakewand4.png" alt="#">
                                            </li>
                                        </ul>                            
                                        <figcaption class="card-face back"><h4>Фальшивые волшебные палочки-надувалочки</h4>
                                        <p>При взмахе превращается в предмет любой формы.</p>
                                        </figcaption> 
                                    </figure>                    
                                    <div class="description_page">
                                        <h4>Trick wands</h4>
                                        <p class="cost">5 галлеонов</p>
                                        
                                    </div>
                                </li>

                                <li data-filter="jokes" class="library_page">
                                    <figure class="flip">
                                        <img class="card-face front" srcset="/images/images/quill.png" alt="#">
                                        <figcaption class="card-face back">
                                            <h4>Перо</h4>
                                            <p>В магическом мире перья — общепризнанный инструмент для письма чернилами; помимо этого перья могут использоваться, как ингредиенты некоторых зелий, а также как сердцевины волшебных палочек.</p>
                                        </figcaption> 
                                    </figure>  
                                    <div class="description_page">
                                        <h4>Quill</h4>
                                        <p class="cost">1 галлеон</p>
                                        
                                    </div>
                                </li>

                                <li data-filter="forGirl" class="library_page">
                                    <figure class="flip">
                                        <img class="card-face front" src="/images/images/potion1.png" alt="#">
                                        <figcaption class="card-face back"><h4>Подави стыд</h4>
                                        <p>Разновидность любовного зелья. Судя по названию, снадобье помогает выпившему его раскрепоститься.</p>
                                        </figcaption> 
                                    </figure>                    
                                    <div class="description_page">
                                        <h4>Crush Blush</h4>
                                        <p class="cost">5 галлеонов</p>
                                        
                                    </div>
                                </li>

                            
                                <li data-filter="other" class="library_page">
                                    <figure class="flip">
                                        <ul id="quill" class="card-face front">
                                            <li class="slide showing">
                                                <img src="/images/images/quill1.png" alt="#">
                                            </li>
                                            <li class="slide">
                                                <img src="/images/images/quill2.png" alt="#">
                                            </li>
                                            <li class="slide">
                                                <img src="/images/images/quill3.png" alt="#">
                                            </li>
                                            <li class="slide">
                                                <img src="/images/images/quill4.png" alt="#">
                                            </li>
                                        </ul>                            
                                        <figcaption class="card-face back"><h4>Перья с автоответчиком</h4>
                                        <p>Перья с автоответчиком (англ. Auto-Answer Quill) — специально заколдованные перья, дающие ответ на записанный вопрос. Запрещены к употреблению при сдаче экзаменов. Вероятно, есть некое контрзаклятие к таким перьям (либо специальное зелье, которым пропитывают пергамент, применяемый для экзаменационных работ).</p>
                                        </figcaption> 
                                    </figure>                    
                                    <div class="description_page">
                                        <h4>Auto-Answer Quill</h4>
                                        <p class="cost">2 галлеона</p>
                                        
                                    </div>
                                </li>

                                <li data-filter="other" class="library_page">
                                    <figure class="flip">
                                            <img class="card-face front" src="/images/images/medallion.png" alt="The Monster Book of Monsters">
                                            <figcaption class="card-face back"><h4>Магический медальон</h4>
                                            <p>Медальон, который светится разными цветами, в зависимости от настроения волшебника.</p>
                                            </figcaption> 
                                        </figure>                    
                                        <div class="description_page">
                                            <h4>Magic medallion</h4>
                                            <p class="cost">4 галлеона</p>
                                            
                                        </div>
                                </li>


                                <li data-filter="jokes" class="library_page">
                                    <figure class="flip">
                                            <img class="card-face front" srcset="/images/images/books.png" alt="The Monster Book of Monsters">
                                            <figcaption class="card-face back"><h4>Чудовищная книга о чудищах</h4>
                                            <p>Эта книга нападает на каждого, кто подойдёт к ней достаточно близко, и кого она сочтёт потенциально опасным. Есть только один способ усмирить эту книгу: погладить её по корешку. Тогда книга успокоится и доверчиво откроет свои страницы.</p>
                                            </figcaption> 
                                        </figure>                    
                                        <div class="description_page">
                                            <h4>The Monster Book of Monsters</h4>
                                            <p class="cost">2 галлеона</p>
                                            
                                        </div>
                                </li>

                                <li data-filter="jokes" class="library_page">
                                    <figure class="flip">
                                        <ul id="broom" class="card-face front">
                                            <li class="slide showing">
                                                <img src="/images/images/broom1.png" alt="#">
                                            </li>
                                            <li class="slide">
                                                <img src="/images/images/broom3.png" alt="#">
                                            </li>
                                            <li class="slide">
                                                <img src="/images/images/broom4.png" alt="#">
                                            </li>
                                        </ul>
                                            <figcaption class="card-face back"><h4>Нимбус Уизли</h4>
                                            <p>Серия мётел, изобретенная братьями Уизли «Скоростные мётлы Уизли». При попытке украсть метлу или наложить на нее чары, метла начинает бить обидчика.</p>
                                            </figcaption> 
                                        </figure>                    
                                        <div class="description_page">
                                            <h4>Weasleys' nimbus</h4>
                                            <p class="cost">10 галлеон</p>
                                            
                                        </div>
                                </li>

                            
                                <li data-filter="forGirl" class="library_page">
                                    <figure class="flip">
                                        <img class="card-face front" src="/images/images/potion2.png" alt="#">
                                        <figcaption class="card-face back"><h4>Гарантированный десятисекундный прыщевыводитель</h4>
                                        <p>Товар из ассортимента магазина близнецов Уизли. Отлично избавляет волшебника не только от прыщей, но также от волдырей и угрей.</p>
                                        </figcaption> 
                                    </figure>                    
                                    <div class="description_page">
                                        <h4>Ten-Second Pimple Vanisher</h4>
                                        <p class="cost">5 галлеонов</p>
                                        
                                    </div>
                                </li>

                                <li data-filter="edible" class="library_page">
                                    <figure class="flip">
                                        <img class="card-face front" src="/images/images/blackMark.png" alt="#">
                                        <figcaption class="card-face back"><h4>Съедобная Чёрная метка</h4>
                                        <p>Смельчака, отважившегося съесть такую «сладость», обязательно стошнит.</p>
                                        </figcaption> 
                                    </figure>                    
                                    <div class="description_page">
                                        <h4>Edible Dark Mark</h4>
                                        <p class="cost">100 кнат</p>
                                        
                                    </div>
                                </li>

                                <li data-filter="edible" class="library_page">
                                    <figure class="flip">
                                        <ul id="emblem" class="card-face front">
                                            <li class="slide showing">
                                                <img src="/images/images/emblem.png" alt="#">
                                            </li>
                                            <li class="slide">
                                                <img src="/images/images/gryffindor.png" alt="#">
                                            </li>
                                            <li class="slide">
                                                <img src="/images/images/hufflepuff.png" alt="#">
                                            </li>
                                            <li class="slide">
                                                <img src="/images/images/ravenclaw.png" alt="#">
                                            </li>
                                            <li class="slide">
                                                <img src="/images/images/slytherin.png" alt="#">
                                            </li>
                                        </ul>
                                            <figcaption class="card-face back"><h4>Обморочные эмблемы</h4>
                                            <p>Съевший обморочные эмблемы падает в обморок, оправдывая их название.</p>
                                            </figcaption> 
                                        </figure>                    
                                        <div class="description_page">
                                            <h4>Fainting Fancies</h4>
                                            <p class="cost">80 кнат</p>
                                            
                                        </div>
                                </li>


                                <li data-filter="edible" class="library_page">
                                    <figure class="flip">
                                        <img class="card-face front" src="/images/images/coins.png" alt="#">
                                        <figcaption class="card-face back"><h4>Съедобные Золотые монеты</h4>
                                        <p>Тот, кто съест монетку, будет весь день говорить правду.</p>
                                        </figcaption> 
                                    </figure>                    
                                    <div class="description_page">
                                        <h4>Edible Gold Coins</h4>
                                        <p class="cost">350 кнат</p>
                                        
                                    </div>
                                </li>
                            
                                <li data-filter="forGirl" class="library_page">
                                    <figure class="flip">
                                        <img class="card-face front" src="/images/images/potionLove.png" alt="#">
                                        <figcaption class="card-face back"><h4>Целующееся зелье</h4>
                                        <p>Считается, что оно заставляет выпившего поцеловать того, кто купил/сварил это зелье, но намного вероятнее то, что зелье вызывает у выпившего непреодолимое желание поцеловать первую встречную девочку, которой и должна оказаться та, что угощает явно или тайно этим зельем. Либо (как прочие приворотные зелья близнецов Уизли) девочка может настроить его конкретно на себя, вложив туда, к примеру, свой волос.</p>
                                        </figcaption> 
                                    </figure>                    
                                    <div class="description_page">
                                        <h4>Kissing Concoction</h4>
                                        <p class="cost">5 галлеонов</p>
                                        
                                    </div>
                                </li>
        `;

        this.element.append(ulPortfolioFilter, ulPortfolioLibrary);
    }

    render() {
        this.createMainShop();
        
        return this.element;
        console.log(this.element);
    }
}
 
const mainShop = new MainShop().render();
export default mainShop;