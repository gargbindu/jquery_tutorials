    // selector = class, id, html element (
    // events = click, hover, key-down, key-up, mouse-in, mouse-out 

    // Write jQuery Code Here

    
    $(document).ready(function(){
      // This code only excutes, when HTML page is fully rendered on the client's browser.
      // selector->event-trigger->function
      $('p').click

    });
    // $('h1.heading1').hide();
    // $('ul#list li:first').css('color', 'red');
    $('ul#list li:odd').css('background-color', 'grey');
    $('ul#list li:even').css('background-color', '#ff8080');
    $('ul#list li:nth-child(3n)').css('list-style', 'none');
    $('ul#list').css('color' , '#990033');
    // $(':button').hide();
    // $('*').hide();

    $(document).ready(function(){
    
      // $('#btn1').click(function(){
      //   alert('button clicked');
      // });
      $('#btn1').hover(function(){
        $('.para1').hide();
      });
      // $('#btn2').click(function(){
      //   $('.para1').show();
      // });
      $('#btn2').hover(function(){
        $('.para1').show();
      });

      $('#bindu_toggle').click(()=> $('.para1').toggle() );
    })
    

    

