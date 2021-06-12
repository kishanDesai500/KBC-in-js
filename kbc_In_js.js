const readline_for_inputs = require("readline-sync");
// made function for question
const question_list = [
    "How many continents are there?",             
    "What is the capital of India?",           
    "NG mei kaun se course padhaya jaata hai?"    
];
function question_for_Kbcgame(list_of_question){
    return list_of_question; 
};
var All_question = question_for_Kbcgame(question_list);

//made function for option of questions
const options_list = [
    // #pehle question ke liye options
    ["Four", "Nine", "Seven", "Eight"],
    // #second question ke liye options
    ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
    // #third question ke liye options
    ["Software Engineering", "Counseling", "Tourism", "Agriculture"]
];
function options_for_question (list_of_options){
    return list_of_options
};
var All_options_list = options_for_question(options_list);
// function for solution
const All_solution_list = [3, 4, 1];
function solution_list_func (list_of_solution){
    return list_of_solution;
};
var solution = solution_list_func(All_solution_list);

// making function for lifeline option#
const lifeline_options = [["Seven","Four"],["Chandigarh","Delhi"],["Software Engineering","Counseling"]];
function lifeline_func (list_of_lifeline_option){
    return list_of_lifeline_option;
}
var player_lifelines = lifeline_func(lifeline_options);

const lifeline_answer_list = [1,2,1];
function solution_list_func (list_of_lifeline_answer){
    return list_of_lifeline_answer;
};
var get_hint = solution_list_func(lifeline_answer_list);

// runing nested loop for printing all question one by one with option and playing whole game because it is depend on it: 
var count_lifeline = 0;
var i = 0;
var price_rate = 0;
while (i<All_question.length){
    console.log(All_question[i]);
    console.log(" these are your 4 options:👉 ");
    var a = 0;
    var s_no = 0;
    while(a<All_options_list.length+1){
        console.log(s_no+1,All_options_list[i][a]);
        s_no++
        a++
    };
    user_choice_answer_or_lifeLine = readline_for_inputs.question("Enter your answer which you want to choose:/ Do you want lifeline ");
    if (user_choice_answer_or_lifeLine=="yes"){
        if(count_lifeline==0){
            count_lifeline+=1;
            console.log(" these are your 2 options in which 1 will be correct:👉 ");
        var k = 0;
        while (k<player_lifelines[i].length){
            console.log(k+1,player_lifelines[i][k]);
            k+=1;
        };
        var choose_answer = readline_for_inputs.question("enter your answer which you guessed: ");
        if (choose_answer==get_hint[i]){
            console.log(`congratulation you won and you reword price is ${price_rate+1000} 🤟: `);
        }else{
            console.log("oh! sorry it is wrong answer:😩 ");
            console.log('try next time to play again:🙁 ');
            break;
        };
        }else{
            console.log("oops! you already used your lifeline now you can not use: ")
            var user_choice_answer2 = readline_for_inputs.question(" enter your `answer which you want to choose: ")
            if(user_choice_answer2==solution[i]){
                console.log("yeah! you won and you got reword:😇 ")
                console.log('thank you: ');
            }else{
                console.log('you answer is wrong you can not go further:☹️ ');
                console.log('better luck next time: ');
                break;
        };
        };
    }else{
        if(user_choice_answer_or_lifeLine==All_solution_list[i]){
            console.log(`congratulation you won and your reword is ${price_rate+1000} `)
        }else{
            console.log('you answer is wrong you can not go further:😕 ');
            console.log('try next time to play again:😞 ');
            break;
        };
    };
    i+=1
};


