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
       /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('url defined and not empty' , () => {
            allFeeds.forEach(el => {
                expect(el.url).toBeDefined(); // to ensure it has a url
                expect(el.url.length).not.toBe(0);   // to ensure is not embty 

            })

        })
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('name defined and not empty' , () => {
            allFeeds.forEach(el => {
                expect(el.name).toBeDefined(); // to ensure it has a name
                expect(el.name.length).not.toBe(0);   // to ensure is not embty 

            })

        })

    });

    /* TODO: Write a new test suite named "The menu" */

    describe('The menu' , () => {

        let B = $("body"); 
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('ensure the menu element is hidden' , () => {
            expect(B.hasClass("menu-hidden")).toBe(true);
        } )

        /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

         it ('ensures the menu changes' , () => {
            let M = $(".menu-icon-link") // to get menu icon 
            M.click();
            expect(B.hasClass('menu-hidden')).toBe(false);
            M.click();
            expect(B.hasClass('menu-hidden')).toBe(true);
         })
        })

    /* TODO: Write a new test suite named "Initial Entries" */

    describe("Initial Entries" , () => {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
       
        var EntryElement;
            beforeEach(function(done) {
                loadFeed(0 , done)
        });
        

        it('there is at least a single entry element', (done) => {
            EntryElement = $(".feed").find('.entry');
            expect(EntryElement.length).toBeGreaterThan(0);
            done();
        })
    })

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe("New Feed Selection" , () => {
    /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
       
        var F1 ; 
        beforeEach((done) => {
             loadFeed(0 , () => {
                F1 =$(".feed").text();
                loadFeed(1 ,done);
             });
        });

        it ("ensures a new feed is loaded" , (done) => {
            var F2 = $(".feed").text();
            expect(F1).not.toBe(F2)
            done();
        })
        })
}());
