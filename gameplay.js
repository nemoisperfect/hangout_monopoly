var alldata;
var ids =
[
 "go",
 "brown1",
 "communitychest1",
 "brown2",
 "taxes1",
 "station1",
 "lightblue1",
 "chance1",
 "lightblue2",
 "lightblue3",
 "jail",
 "pink1",
 "utilities1",
 "pink2",
 "pink3",
 "station2",
 "orange1",
 "communitychest2",
 "orange2",
 "orange3",
 "parking",
 "red1",
 "chance2",
 "red2",
 "red3",
 "station3",
 "yellow1",
 "yellow2",
 "utilities2",
 "yellow3",
 "gotojail",
 "green1",
 "green2",
 "communitychest3",
 "green3",
 "station4",
 "chance3",
 "blue1",
 "taxes2",
 "blue2"
];  //create dynamically using alldata.

var die = new Array;
die[1] = new Image;
die[1].src = 'images/dice_1.gif';
die[2] = new Image;
die[2].src = 'images/dice_2.gif';
die[3] = new Image;
die[3].src = 'images/dice_3.gif';
die[4] = new Image;
die[4].src = 'images/dice_4.gif';
die[5] = new Image;
die[5].src = 'images/dice_5.gif';
die[6] = new Image;
die[6].src = 'images/dice_6.gif';

function showinfo(location_id)
{
                var colour_class = location_id.slice(0,-1);
                //$("#"+location_id).addClass('location_hovered');
                //$("#dice_space").hide();
                $("#inside").addClass('inside_hovered');//$("#inside").addClass(colour_class);
                
                $('#dice_space').hide();
                $('#controls').hide();

                if($("#"+location_id).is('.station'))
                {
                        //$(".info.station").addClass(colour_class);
                        $(".info.station").show(); 
                        $(".info.station").find('.info_location_name').html(alldata[location_id].name);
                        $(".info.station").find('.info_location_price').html("Price : "+alldata[location_id].price);
                        $(".info.station").find('.info_location_rent').html("Rent : "+alldata[location_id].rent);
                        $(".info.station").find('.info_location_rent_2').html("With 2 stations : "+alldata[location_id].rent_2);
                        $(".info.station").find('.info_location_rent_3').html("With 3 stations : "+alldata[location_id].rent_3);
                        $(".info.station").find('.info_location_rent_4').html("With 4 stations : "+alldata[location_id].rent_4);
                        $(".info.station").find('.info_location_mortgage').html("Mortgage : "+alldata[location_id].mortgage);
                       /* $("#inside").html("<div class='info "+colour_class+"'><br><p align='center'>"+alldata[location_id].name+"</p><p align='center'>Price : "+alldata[location_id].price+"</p><hr><br><p align='center'>Rent : "+alldata[location_id].rent+"</p><p align='center'>With 2 stations : "+alldata[location_id].rent_2+"</p><p align='center'>With 3 stations : "+alldata[location_id].rent_3+"</p><p align='center'>With 4 stations : "+alldata[location_id].rent_4+"</p><p align='center'>Mortgage Value : "+alldata[location_id].mortgage+"</p></div>"); */
                }
                
                else if($("#"+location_id).is('.utilities'))
                {
                        $(".info.utilities").show(); 
                        $(".info.utilities").find('.info_location_name').html(alldata[location_id].name);
                        $(".info.utilities").find('.info_location_price').html("Price : "+alldata[location_id].price);
                        $(".info.utilities").find('.info_location_rent').html("Rent : "+alldata[location_id].rent);
                        $(".info.utilities").find('.info_location_rent_2').html("With 2 utilities : "+alldata[location_id].rent_2);
                        $(".info.utilities").find('.info_location_mortgage').html("Mortgage : "+alldata[location_id].mortgage);
                       /* $("#inside").html("<div class='info utilities'><br><p align='center'>"+alldata[location_id].name+"</p><p align='center'>Price : "+alldata[location_id].price+"</p><hr><p align='center'>Rent : "+alldata[location_id].rent+"</p><p align='center'>With 2 utilities : "+alldata[location_id].rent_2+"</p><p align='center'>Mortgage Value : "+alldata[location_id].mortgage+"</p></div>"); */
                }
                
                else if($("#"+location_id).is('.taxes'))
                {
                        $(".info.taxes").show(); 
                        $(".info.taxes").find('.info_location_name').html(alldata[location_id].name);
                        $(".info.taxes").find('.info_location_remarks').html(alldata[location_id].remarks);
                        /*$("#inside").html("<div class='info taxes'><br><p align='center'>"+alldata[location_id].name+"</p><hr><p align='center'>"+alldata[location_id].remarks+"</p></div>");*/
                }
                
                else if($("#"+location_id).is('.communitychest'))
                {
                        $(".info.communitychest").show(); 
                        $(".info.communitychest").find('.info_location_name').html(alldata[location_id].name);
                        $(".info.communitychest").find('.info_location_remarks').html(alldata[location_id].remarks);
                        /*$("#inside").html("<div class='info communitychest' ><br><p style='color:black;' align='center'>"+alldata[location_id].name+"</p><hr><p style='color:black;' align='center'>"+alldata[location_id].remarks+"</p></div>");*/
                }
                
                else if($("#"+location_id).is('.chance'))
                {
                        $(".info.chance").show(); 
                        $(".info.chance").find('.info_location_name').html(alldata[location_id].name);
                        $(".info.chance").find('.info_location_remarks').html(alldata[location_id].remarks);
                        /*$("#inside").html("<div class='info chance' ><br><p style='color:black;' align='center'>"+alldata[location_id].name+"</p><hr><p style='color:black;' align='center'>"+alldata[location_id].remarks+"</p></div>");*/
                }
                
                else if($("#"+location_id).is('.buyable'))
                {
                        //use fill function. pass what all needs to be filled.
                        $(".info.title").addClass(colour_class);
                        $(".info.title").show(); 
                        $(".info.title").find('.info_location_name').html(alldata[location_id].name);
                        $(".info.title").find('.info_location_price').html("Price : "+alldata[location_id].price);
                        $(".info.title").find('.info_location_rent').html("Rent : "+alldata[location_id].rent);
                        $(".info.title").find('.info_location_rent_1').html("With 1 house : "+alldata[location_id].rent_1h);
                        $(".info.title").find('.info_location_rent_2').html("With 2 houses : "+alldata[location_id].rent_2h);
                        $(".info.title").find('.info_location_rent_3').html("With 3 houses : "+alldata[location_id].rent_3h);
                        $(".info.title").find('.info_location_rent_4').html("With 4 houses : "+alldata[location_id].rent_4h);
                        $(".info.title").find('.info_location_rent_hotel').html("With 1 hotel: "+alldata[location_id].rent_hotel);
                        $(".info.title").find('.info_location_mortgage').html("Mortgage : "+alldata[location_id].mortgage);
                      /*  $("#inside").html("<div class='info "+colour_class+"'><br><p align='center'>"+alldata[location_id].name+"</p><p align='center'>Price : "+alldata[location_id].price+"</p><hr><p align='center'>Rent : "+alldata[location_id].rent+"</p><p align='center'>With 1 house : "+alldata[location_id].rent_1h+"</p><p align='center'>With 2 houses : "+alldata[location_id].rent_2h+"</p><p align='center'>With 3 houses : "+alldata[location_id].rent_3h+"</p><p align='center'>With 4 houses : "+alldata[location_id].rent_4h+"</p><p align='center'>With 1 hotel : "+alldata[location_id].rent_hotel+"</p><p align='center'>Mortgage Value : "+alldata[location_id].mortgage+"</p></div>"); */
                //location_id.name  .price .rent .rent_1h .rent_2h .rent_3h .rent_4h .rent_hotel .mortgage
                }
                else if(location_id=="go"||location_id=="jail"||location_id=="parking"||location_id=="gotojail")
                {
                        $(".info."+location_id).show(); 
                        $(".info."+location_id).find('.info_location_name').html(alldata[location_id].name);
                        $(".info."+location_id).find('.info_location_remarks').html(alldata[location_id].remarks);
                }
}

function hideinfo(location_id)
{
                var colour_class = location_id.slice(0,-1);
                //$("#"+location_id).removeClass('location_hovered');
                $("#inside").removeClass('inside_hovered');
                $(".info.title").removeClass(colour_class);
                $(".info").hide();
                $('#dice_space').show();
                $('#controls').show();
                
}

function build(location_id, what)
{
                $("#"+location_id).find('div.build_space').addClass(what);
}

function build_appropriately(location_id)
{
        var i = alldata[location_id].houses;
        if(i>=5){alert("no more. enough.");}
        //var colour_class = location_id.slice(0,-1);
        var what;
        if(i==0){what = "houses_1"; build(location_id,what); alldata[location_id].houses=1;}
        else if(i==1){$("#"+location_id).find('div.build_space').removeClass("houses_1");what = "houses_2"; build(location_id,what); alldata[location_id].houses=2;}
        else if(i==2){$("#"+location_id).find('div.build_space').removeClass("houses_2");what = "houses_3"; build(location_id,what); alldata[location_id].houses=3;}
        else if(i==3){$("#"+location_id).find('div.build_space').removeClass("houses_3");what = "houses_4"; build(location_id,what); alldata[location_id].houses=4;}
        else if(i==4){$("#"+location_id).find('div.build_space').removeClass("houses_4");what = "hotel"; build(location_id,what); alldata[location_id].houses=5;}        
}

function start_rolling(id1, id2, for_player_order)
{
    state_during_roll(for_player_order);
    //alert("started_rolling");
    animateRoll(id1, id2, for_player_order);
    //alert(x);
}

function animateRoll(id1, id2, for_player_order, times)
{
         times = times || 1;
         //alert("animating"+times);
         var roll = generateRoll();
         //alert(roll);
         drawRoll(roll[0], roll[1], id1, id2, for_player_order);
         if(for_player_order=='1') n = 4;
         else if(for_player_order=='0') n=10;
         if (times > n)
         {
                var x = checkRoll(roll[0], roll[1], for_player_order);
                player_die_total.push(x);
                return;
         }
         
         setTimeout(function(){animateRoll(id1, id2, for_player_order, (times + 1) )}, 100);
}

function generateRoll()
{
    return [ Math.floor(Math.random()*6) + 1, Math.floor(Math.random()*6) + 1 ];
}

function drawRoll(die1, die2, id1, id2, for_player_order)
{
    //alert("drawing at " +id1);
    document.getElementById(id1).innerHTML = '<img src="images/dice_' + die1 +'.gif" style="height:50px;width:50px;">';
    document.getElementById(id2).innerHTML = '<img src="images/dice_' + die2 +'.gif" style="height:50px;width:50px;">';
}

function checkRoll(die1, die2, for_player_order)
{
    if(die1==die2) roll_again = 1;
    else roll_again = 0;

    var total = die1 + die2;
    
    if(for_player_order=='0') move_to_position(3);
    else if(for_player_order=='1') return total;
}      

function check(c,f)
{
    if(c==f)  {clearTimeout(timer1); clearTimeout(timer2); return 0;}
}

var timer2 = 0, timer1 = 0;
function appear(n, f)
{   
    n=n%40;
    if(check(n-1,f)!=0)
    {
        $("#"+ids[n]).find('div.piece_space_1').addClass(piece_to_move);    //pieces work
        timer2 = setTimeout(function(){disappear(n, f)},50);
    }
    else
    {
      //  $("#"+ids[n-1]).find('div.piece_space_1').addClass(piece_to_move);
       // showinfo(ids[n]);
        //state_after_roll_before_buy();

        //not needed. happens in the else below!
    }
}

function disappear(c, f)
{
    c=c%40;
    console.log(c);
    if(check(c,f)!=0)
    {
        $("#"+ids[c]).find('div.piece_space_1').removeClass(piece_to_move);
        timer1 = setTimeout(function(){appear(c+1, f)},50);
    }
    else
    {
        $("#"+ids[c]).find('div.piece_space_1').addClass(piece_to_move);
        state_after_roll_before_buy(c);
    }
}

function move_to_position(total)
{
            var oldposition = p[turn_order[whose_turn_is_it-1]].position;
            var newposition=p[turn_order[whose_turn_is_it-1]].position+total;

            newposition=newposition%40;
            p[turn_order[whose_turn_is_it-1]].position = newposition;   //to keep track of all player positions

            disappear(oldposition, newposition);
}

function set_pieces_at_go()
{
    $("#go").find('div.piece_space_1').addClass('piece2');
    $("#go").find('div.piece_space_2').addClass('piece1');
    $("#go").find('div.piece_space_3').addClass('piece3');
    $("#go").find('div.piece_space_4').addClass('piece4');
}


//must make states player specific

var whose_turn_is_it;
var turn_order = new Array();
var player_die_total = new Array();
var position = []; 
var p = [
    {"name":"Aayush", "money_left":"1500", "position":"0", "piece":"piece1", "ownership":[]},
    {"name":"Shikhar", "money_left":"1500", "position":"0", "piece":"piece2", "ownership":[]},
    {"name":"Sahil", "money_left":"1500", "position":"0", "piece":"piece3","ownership":[]},
    {"name":"Taruni", "money_left":"1500", "position":"0", "piece":"piece4", "ownership":[]}
];  // player objects - needed for position, name, piece, ownership and money left
var piece_to_move;
var roll_again;
//alert(p[0].ownership[0]);

function find_player_order()
{
  start_rolling('p1_die1', 'p1_die2', '1');
  start_rolling('p2_die1', 'p2_die2', '1');
  start_rolling('p3_die1', 'p3_die2', '1');
  start_rolling('p4_die1', 'p4_die2', '1');
  
  setTimeout(function(){
    
    for (var i = 0; i <= 3; i++) 
    {
        var max_value = -1;
        for (var j = 0; j <= 3; j++)
        {
            if(player_die_total[j]>=max_value)
                max_value = player_die_total[j];
        }
      
      var index = player_die_total.indexOf(max_value);
      turn_order[i] = player_die_total.indexOf(max_value);
      player_die_total[index]=0;
      //alert(turn_order[i]);
      document.getElementById("p"+(i+1)+"_name").innerHTML = p[turn_order[i]].name;
      //alert("#p"+(i+1)+"_name");
      
    };

    choose_pieces();

  }, 500);
  
}

function choose_pieces()
{
    //$("#roll_all_players").hide();
    //alert("Order decided. time to choose pieces");
       //$("#p1")
    for (var i = 0; i<=3; i++)
    {
        //var obj = {piece : "piece"+(i+1)};
        //p.push(obj);
        //alert(p[i].piece);
        $("#p"+(i+1)).addClass(p[i].piece);
    }
    $("#begin_game_button").show();
}

function begin_game()   //call after player order decided and pieces chosen.
{
    set_pieces_at_go();
    whose_turn_is_it = 1;
    begin_turn(whose_turn_is_it);
}

function begin_turn(x)   
{
    $("#timer_space").show();
    start_timer();
    state_before_roll(0);
    piece_to_move = "piece"+x;
    
    $("#p"+x).css("background-color","#994455");
    $("#p"+x+"_name").css("font-size","30px");
    $("#p"+x+"_name").css("color","white");
    alert("Player "+x+" : Your turn");
}

function end_turn(x)   
{
    end_timer();
    $("#timer_space").hide();
    $("#p"+x).css("background-color","#aaaaaa");
    $("#p"+x+"_name").css("font-size","20px");
    $("#p"+x+"_name").css("color","#444444");     
    whose_turn_is_it+=1;
    if(whose_turn_is_it>4) whose_turn_is_it=1;  //turns work
    begin_turn(whose_turn_is_it);
}


var seconds;
var minutes;
var timer_counter;

function count_down()
{
    if (minutes == 0 && seconds == 0)
    {
     clearInterval(timer_counter);
     alert("time up");
     end_turn(whose_turn_is_it);
    }

    if(seconds == 00) {seconds = 59;minutes=minutes-1;}
    else {seconds=seconds-1;}
    if(seconds<10) seconds = "0"+seconds;
    document.getElementById("timer").innerHTML=minutes+":"+seconds;
}

function start_timer()
{
    seconds = 00;
    minutes = 2;
    timer_counter=0;
    document.getElementById("timer").innerHTML="2:00";
    timer_counter=setInterval(count_down, 1000); 
//alert("2 mins to go");
}

function end_timer()
{
   clearInterval(timer_counter);
}


// states
var allow = new Array();
var current_state;
function init_states()
{
  allow_hover("false");
  allow_build("false");
  allow_select("false");
  //$("#begin_game_button").show();
  $("#roll_all_players").show();
  find_player_order();

}

function allow_build(state) //during Build
{
  allow["build"] = state;
}

function allow_hover(state) //before roll, after roll, during mortgage, when not ur turn, etc.
{
  allow["hover"] = state;
}

function allow_select(state) //selecting locations for mortgaging, trading, unmortgaging
{
  allow["select"] = state;
}

function allow_roll(state)  //for rolling. deactivate after rolling.
{
  allow["roll"] = state;
}

function allow_controls(state)  //to be activated before and after rolling, mortgaging, trading, building, etc.
{
  allow["controls"] = state;
}

function is_allowed(action)
{
  return allow[action];
}

function if_not_turn()
{
  //allow hover. dont allow controls. dont allow roll. dont allow select on board. dont allow build on board.
//show die of others turn. dont show controls. hide and show info on hover. dont show innerconsole.
}

function state_before_roll()  //default state - go to this state or after_buy() state when going back from innerconsole(trading, mortgaging, etc)
{
    $("#end_turn_button").hide(); 
    $("#roll_button").show();
    $("#dice_space").show();
    $("#controls").show();
    $(".inner_console").hide();
    $(".info").hide();
    $("#roll_button").removeAttr('disabled');
    $("#roll_button").css('background-color','#cccccc');
    $("#roll_button").css('cursor','pointer');
    allow_hover("true");
//allow hover. allow controls. allow roll. dont allow select on board. dont allow build on board.
//show die. show controls. hide and show info on hover. dont show innerconsole.
}

function state_during_roll(for_player_order)
{
    if(for_player_order=='0')
    {
        $("#controls").hide();
        $("#roll_button").attr('disabled','disabled');
        $("#roll_button").css('background-color','white');
        $("#roll_button").css('cursor','auto');
        allow_hover("false");
    }
    
  //dont allow hover. dont allow controls. dont allow roll. dont allow select on board. dont allow build on board.
//show die. dont show controls. dont hide and show info on hover. dont show innerconsole.
}

function state_after_roll_before_buy(pos)
{
    var owner = alldata[ids[p[turn_order[whose_turn_is_it-1]].position]].owner;
    var location_id = ids[pos];
    if(!$("#"+location_id).is('.buyable'))  //for all non-buyable props just showinfo.
    {
        showinfo(location_id);
        $(".buy_or_auction_space").show(); //remove and make as 'ok' button
    }
    else if(owner=="")  
    {
        showinfo(location_id); 
        $(".buy_or_auction_space").show();
    }
    else
    {
        alert("this property is owned by "+p[turn_order[owner-1]].name);    //charge rent
        var status = alldata[ids[p[turn_order[whose_turn_is_it-1]].position]].houses;
        
        var rent_charged;

        if(status == 0) rent_charged = Number(alldata[ids[p[turn_order[whose_turn_is_it-1]].position]].rent.slice(1));
        else if(status == 1) rent_charged = Number(alldata[ids[p[turn_order[whose_turn_is_it-1]].position]].rent_1h.slice(1));
        else if(status == 2) rent_charged = Number(alldata[ids[p[turn_order[whose_turn_is_it-1]].position]].rent_2h.slice(1));
        else if(status == 3) rent_charged = Number(alldata[ids[p[turn_order[whose_turn_is_it-1]].position]].rent_3h.slice(1));
        else if(status == 4) rent_charged = Number(alldata[ids[p[turn_order[whose_turn_is_it-1]].position]].rent_4h.slice(1));
        else if(status == 5) rent_charged = Number(alldata[ids[p[turn_order[whose_turn_is_it-1]].position]].rent_hotel.slice(1));
        alert("Rent owed : $"+rent_charged);

        //deduct money from player and give money to owner
        p[turn_order[whose_turn_is_it-1]].money_left  = p[turn_order[whose_turn_is_it-1]].money_left - rent_charged;
        p[turn_order[owner-1]].money_left = p[turn_order[owner-1]].money_left + rent_charged;

        //change money for player
        $("#p"+whose_turn_is_it+"_money").fadeOut('slow', function() {
                $("#p"+whose_turn_is_it+"_money").html("$"+p[turn_order[whose_turn_is_it-1]].money_left);
            });
        $("#p"+whose_turn_is_it+"_money").fadeIn('slow');

        //change money for owner  - make this as function change_money()
        $("#p"+owner+"_money").fadeOut('slow', function() {
                $("#p"+owner+"_money").html("$"+p[turn_order[owner-1]].money_left);
            });
        $("#p"+owner+"_money").fadeIn('slow');

        state_after_buy();
    }
    allow_hover("false");
  //dont allow hover. dont allow controls. dont allow roll. dont allow select on board. dont allow build on board.
//show info of location automatically. dont show controls. dont hide and show info on hover. dont show innerconsole.
}

function state_after_buy()
{
    $(".info").hide();
    $("#roll_button").removeAttr('disabled');
    $("#roll_button").css('background-color','#cccccc');
    $("#roll_button").css('cursor','pointer');
    $("#controls").show();
    $("#dice_space").show();
    $(".buy_or_auction_space").hide();
    allow_hover("true");

    if(roll_again=='0') 
    {
        $("#end_turn_button").show(); 
        $("#roll_button").hide();
    }  //if double otherwise let it be..let it be. let it beee let it beeee, whisper words of wisdom, let it be.
    //give end turn option and continue timer.
    
    
  //allow hover. allow controls. allow roll if double else dont allow and change roll to end turn. dont allow select on board. dont allow build on board.
//show die. show controls. hide and show info on hover. dont show innerconsole.
}

function state_on_trade()
{
    $("#dice_space").hide();
    $("#controls").hide();
    $("#trade_console").show();
    allow_select("true");
    allow_hover("false");
  //dont allow hover. dont allow controls. dont allow roll. allow multi-select on board. dont allow build on board.
//dont show die. dont show controls. dont hide and show info on hover. show innerconsole. show ownership on board.
}

function state_on_mortgage()
{
    $("#dice_space").hide();
    $("#controls").hide();
    $("#mortgage_console").show();
    allow_select("true");
    allow_hover("false");
  //dont allow hover. dont allow controls. dont allow roll. allow multi-select on board. dont allow build on board.
//dont show die. dont show controls. dont hide and show info on hover. show innerconsole. show ownership on board.
}

function state_on_unmortgage()
{
    $("#dice_space").hide();
    $("#controls").hide();
    $("#unmortgage_console").show();
    allow_select("true");
    allow_hover("false");
  //dont allow hover. dont allow controls. dont allow roll. allow select on board. dont allow build on board.
//dont show die. dont show controls. dont hide and show info on hover. show innerconsole. show ownership on board.
}

function state_on_build()
{
    $("#dice_space").hide();
    $("#controls").hide();
    $("#build_console").show();
    allow_build("true");
    allow_select("false");
    allow_hover("false");
  //allow hover. dont allow controls. dont allow roll. dont allow select on board. allow build on board.
//dont show die. dont show controls. hide and show info on hover. show innerconsole. show buildable properties on board.
}

function state_on_exit_console()
{
    $(".inner_console").hide();
    $("#dice_space").show();
    $("#controls").show();
    allow_build("false");
    allow_hover("true");
    allow_select("false");
}
//jquery events
$(document).ready(function() {
        
        init_states();
        
        $.ajax({
          url:'data/location_data.json',
          dataType: 'json',
          success: function(data) {
                alldata = data;
          },
          async: false
        });
        
        $(".location,.location_vert").mouseover(function () {
          if(is_allowed("hover")=="true")
          {
               var location_id = this.id;
               showinfo(location_id);
          }
        });
        $(".location,.location_vert").mouseleave(function () {
          if(is_allowed("hover")=="true")
          {
               var location_id = this.id;
               hideinfo(location_id);
          }              
        });
        
        

    var mortgage_amounts_of_selected_locations = [];

        $(".location.buyable,.location_vert.buyable").click(function () {  //also on the basis on ownership
            var location_id = this.id;
//selecting
            if((is_allowed("select")=="true") && ($("#"+location_id).is('.selectable')))
            {
                //alert("hi");
                //var colour_class = location_id.slice(0,-1);
                if(alldata[location_id].selected!=1)
                {
                    alldata[location_id].selected=1;
                    $("#"+location_id).addClass('location_selected');
                    if($("#"+location_id).is('.top')) $("#"+location_id).css('margin-top','10px');
                    else if($("#"+location_id).is('.left')) $("#"+location_id).css('margin-left','25px');
                    else if($("#"+location_id).is('.right')) $("#"+location_id).css('margin-left','5px');
                    else $("#"+location_id).css('margin-top','-10px');//make as fn tranform_location_on select()
                    //$("#"+location_id).removeClass(colour_class);

                    if(current_state == "mortgage") //if mortgage, fill up mortgage_console with with location name and mortgage amounts
                    {
                        alert(whose_turn_is_it);
                        alert(p[whose_turn_is_it-1].money_left);
                        $('#mortgage_console').find('.selected_locations').append("<p id='details_"+location_id+"'>"+alldata[location_id].name+" : "+alldata[location_id].mortgage+"</p>");
                        mortgage_total = mortgage_total + Number(alldata[location_id].mortgage.slice(1));
                        $('#mortgage_console').find('.amount_total').html("$"+mortgage_total);
                        $('#mortgage_console').find('.player_new_total').html(Number(p[whose_turn_is_it-1].money_left) + mortgage_total);   //update money_left once player clicks on done - finalise_selection
                    }

                    else if(current_state == "unmortgage") //if unmortgage, fill up unmortgage_console with with location name and amounts to pay for unmortgaging
                    {

                    }

                    else if(current_state == "trade") //if trade, fill up trade_console with with locations selected of urs and ur trading partner. also show numpad...blah blah

                    {

                    }

                }
                else if(alldata[location_id].selected==1)
                {
                    alldata[location_id].selected=0;
                    $("#"+location_id).removeClass('location_selected');
                    if($("#"+location_id).is('.top')) $("#"+location_id).css('margin-top','0px');
                    else if($("#"+location_id).is('.left')) $("#"+location_id).css('margin-left','15px');
                    else if($("#"+location_id).is('.right')) $("#"+location_id).css('margin-left','15px');
                    else $("#"+location_id).css('margin-top','0px');
                    //$("#"+location_id).addClass(colour_class);

                    if(current_state == "mortgage") //if mortgage, fill up mortgage_console with with location name and mortgage amounts
                    {
                        $('#mortgage_console').find('.selected_locations').find('#details_'+location_id).remove();
                        $('.amount_total').empty();
                        $('.player_new_total').empty();
        
                    }

                    else if(current_state == "unmortgage") //if unmortgage, fill up unmortgage_console with with location name and amounts to pay for unmortgaging
                    {

                    }

                    else if(current_state == "trade") //if trade, fill up trade_console with with locations selected of urs and ur trading partner. also show numpad...blah blah

                    {

                    }
                }
            }
             //check if allowed to build. if all 3 props owned then yes then proceed. else showinfo(). also make sure the diff in no of houses between any 2 of the 3 props is never more than 1.
//building
            else if((is_allowed("build")=="true") && ($("#"+location_id).is('.selectable')))
            {
                build_appropriately(location_id);
            }
        });


    var selected_locations = [];       
        $(".finalise_selection").click(function () {

        for (var i = ids.length - 1; i >= 0; i--) {         //traverse thru all locations and add to selected_locations[] those that have selected = 1
            console.log(alldata[ids[i]].selected);

            if(alldata[ids[i]].selected==1) 
            {
                selected_locations.push(ids[i]);
                var colour_class = ids[i].slice(0,-1);
                $("#"+ids[i]).removeClass('location_selected');
                $("#"+ids[i]).addClass(colour_class);
            }

            $("#"+ids[i]).removeClass('selectable');
            $("#"+ids[i]).removeClass('location_transparent');
            if($("#"+ids[i]).is('.top')) $("#"+ids[i]).css('margin-top','0px');
            else if($("#"+ids[i]).is('.left')) $("#"+ids[i]).css('margin-left','15px');
            else if($("#"+ids[i]).is('.right')) $("#"+ids[i]).css('margin-left','15px');
            else $("#"+ids[i]).css('margin-top','0px');
        }
        });

        $("#trade_button").click(function () {
           
            current_state = "trade";
            for (var i = ids.length - 1; i >= 0; i--) {       
                if(alldata[ids[i]].owner==whose_turn_is_it) 
                {
                    $("#"+ids[i]).addClass('selectable');
                }
                else
                {
                    $("#"+ids[i]).addClass('location_transparent');
                }
            }
            state_on_trade();
        });

        $("#mortgage_button").click(function () {
            current_state = "mortgage";
            mortgage_amounts_of_selected_locations=[0];
            
            for (var i = ids.length - 1; i >= 0; i--) {       
                if(alldata[ids[i]].owner==whose_turn_is_it) 
                {
                    $("#"+ids[i]).addClass('selectable');
                }
                else
                {
                    $("#"+ids[i]).addClass('location_transparent');
                }
            }
            state_on_mortgage();
        });

        $("#unmortgage_button").click(function () {
            current_state = "unmortgage";

            for (var i = ids.length - 1; i >= 0; i--) {       
                if(alldata[ids[i]].owner==whose_turn_is_it) 
                {
                    $("#"+ids[i]).addClass('selectable');
                }
                else
                {
                    $("#"+ids[i]).addClass('location_transparent');
                }
            }
            state_on_unmortgage();
        });

        $("#build_button").click(function () {
            current_state = "build";
            for (var i = ids.length - 1; i >= 0; i--) {       
                if(alldata[ids[i]].owner==whose_turn_is_it) 
                {
                    $("#"+ids[i]).addClass('selectable');
                }
                else
                {
                    $("#"+ids[i]).addClass('location_transparent');
                }
            }
            state_on_build();
        });

        $(".exit_console").click(function () {
            state_on_exit_console();
        });

        $(".clear_selected_locations_details").click(function () {
            $('.selected_locations').empty();
            $('.amount_total').empty();
            $('.player_new_total').empty();
        });
         
        $(".buy_button").click(function () {
            //alert(p[turn_order[whose_turn_is_it-1]].position);
            //alert(alldata[ids[p[turn_order[whose_turn_is_it-1]].position]].price);

            //write ownership
            var location_id = ids[p[turn_order[whose_turn_is_it-1]].position];
            p[turn_order[whose_turn_is_it-1]].ownership.push(location_id);
            //alert(p[turn_order[whose_turn_is_it-1]].ownership);

            //stamp on location with apt piece
            $("#"+location_id).find('div.piece_space_2').addClass(piece_to_move);
            $("#"+location_id).find('div.piece_space_2').css('opacity','0.3');

            //deduct money
            var cost = Number(alldata[ids[p[turn_order[whose_turn_is_it-1]].position]].price.slice(1));
            p[turn_order[whose_turn_is_it-1]].money_left = p[turn_order[whose_turn_is_it-1]].money_left - cost;
           
            alert(p[turn_order[whose_turn_is_it-1]].name+" bought "+alldata[ids[p[turn_order[whose_turn_is_it-1]].position]].name+" for "+alldata[ids[p[turn_order[whose_turn_is_it-1]].position]].price);

            //write player as owner in alldata
            var owner = whose_turn_is_it;
            alldata[ids[p[turn_order[whose_turn_is_it-1]].position]].owner = owner;
            //alert(alldata[ids[p[turn_order[whose_turn_is_it-1]].position]].owner);
            
            //make this as function change_money()
            $("#p"+whose_turn_is_it+"_money").fadeOut('slow', function() {
                $("#p"+whose_turn_is_it+"_money").html("$"+p[turn_order[whose_turn_is_it-1]].money_left);
            });
            $("#p"+whose_turn_is_it+"_money").fadeIn('slow');
            state_after_buy();
        });

        $(".show_button").click(function () {
            alert("its your birthday! have a treat! or take $10 from everyone");//show random card
            state_after_buy();
        });

        $("#begin_game_button").click(function () {
            begin_game();
        });
     
});