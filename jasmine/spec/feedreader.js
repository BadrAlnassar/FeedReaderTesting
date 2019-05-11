/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    
    describe('RSS Feeds', function() {
       
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('url defined and not empty' , () => {
            allFeeds.forEach(el => {
                expect(el.url).toBeDefined(); // to ensure it has a url
                expect(el.url).not.toBe(0);   // to ensure is not embty 

            })

        })

        it('name defined and not empty' , () => {
            allFeeds.forEach(el => {
                expect(el.name).toBeDefined(); // to ensure it has a name
                expect(el.name).not.toBe(0);   // to ensure is not embty 

            })

        })

    });


    describe('The menu' , () => {

        it('ensure the menu element is hidden' , () => {
            let B = $("body"); 
            expect(B.hasClass("menu-hidden")).toBe(true);
        } )

         it ('ensures the menu changes' , () => {
            let B = $("body"); // to get the body to use it in tests
            let M = document.getElementsByClassName("menu-icon-link")[0]; // to get menu icon 
            M.click();
            expect(B.hasClass('menu-hidden')).toBe(false);
            M.click();
            expect(B.hasClass('menu-hidden')).toBe(true);
         })
        })


    describe("Initial Entries" , () => {
       
        var EntryElement;
            beforeEach(function() {
                loadFeed(0 , () => {
                    EntryElement =$('.feed .entry').length
                    done();
                })
        });
        

        it('there is at least a single entry element', (done) => {
            expect(EntryElement).not.toBeLessThan(0);
            done()
        })
    })


    describe("New Feed Selection" , () => {

       
        var F1 ; // feed number 1
        var F2 ; // feed number 2
        beforeEach((done) => {
             loadFeed(0 , () => {
                F1 = $('.feed').text();
                loadFeed(1 , () => {
                    F2= $('.feed').text();
                    done();
                })
             })
        })

        it ("ensures a new feed is loaded" , (done) => {
            expect(F1).not.toBe(F2)
            done();
        })
        })
}());
