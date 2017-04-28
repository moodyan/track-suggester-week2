$(document).ready(function(){

  $("#myBtn").click(function(){
  $("#myModal").modal();
});

  $("form#quiz").submit(function(event){

    var nameInput = $("input#name").val();
    var devInput = $("select#development").val();
    var companyInput = $("select#company").val();
    var taskInput = $("select#task").val();
    var attInput = $("select#attribute").val();
    var systemInput = $("select#system").val();

    $(".name").text(nameInput);

    if (devInput === "front-end") {
      $("#answer-css").show();
      $("#answer-css").siblings().hide();

    } else {
        if (companyInput === "company-csharp" && taskInput === "task-csharp" && attInput === "attribute-phpcsharp" && systemInput === "system-csharp") {
          $("#answer-csharp").show();
          $("#answer-csharp").siblings().hide();
        }
        if (companyInput === "company-csharp" && taskInput === "task-ruby" && attInput === "attribute-phpcsharp" && systemInput === "system-csharp") {
          $("#answer-csharp").show();
          $("#answer-csharp").siblings().hide();
        }
        if (companyInput === "company-csharp" && taskInput === "task-php" && attInput === "attribute-phpcsharp" && systemInput === "system-csharp") {
          $("#answer-csharp").show();
          $("#answer-csharp").siblings().hide();
        }
        if (companyInput === "company-csharp" && taskInput === "task-csharp" && attInput === "attribute-ruby" && systemInput === "system-csharp") {
          $("#answer-csharp").show();
          $("#answer-csharp").siblings().hide();
        }
        if (companyInput === "company-csharp" && taskInput === "task-ruby" && attInput === "attribute-ruby" && systemInput === "system-csharp") {
          $("#answer-ruby").show();
          $("#answer-ruby").siblings().hide();
        }
        if (companyInput === "company-csharp" && taskInput === "task-php" && attInput === "attribute-ruby" && systemInput === "system-csharp") {
          $("#answer-csharp").show();
          $("#answer-csharp").siblings().hide();
        }
        if (companyInput === "company-csharp" && taskInput === "task-csharp" && attInput === "attribute-phpcsharp" && systemInput === "system-phpruby") {
          $("#answer-csharp").show();
          $("#answer-csharp").siblings().hide();
        }
        if (companyInput === "company-csharp" && taskInput === "task-ruby" && attInput === "attribute-phpcsharp" && systemInput === "system-phpruby") {
          $("#answer-ruby").show();
          $("#answer-ruby").siblings().hide();
        }

        if (companyInput === "company-csharp" && taskInput === "task-php" && attInput === "attribute-phpcsharp" && systemInput === "system-phpruby") {
          $("#answer-php").show();
          $("#answer-php").siblings().hide();
        }
        if (companyInput === "company-csharp" && taskInput === "task-csharp" && attInput === "attribute-ruby" && systemInput === "system-phpruby") {
          $("#answer-csharp").show();
          $("#answer-csharp").siblings().hide();
        }
        if (companyInput === "company-csharp" && taskInput === "task-ruby" && attInput === "attribute-ruby" && systemInput === "system-phpruby") {
          $("#answer-ruby").show();
          $("#answer-ruby").siblings().hide();
        }
        if (companyInput === "company-csharp" && taskInput === "task-php" && attInput === "attribute-ruby" && systemInput === "system-phpruby") {
          $("#answer-php").show();
          $("#answer-php").siblings().hide();
        }
        if (companyInput === "company-rubyphp" && taskInput === "task-csharp" && attInput === "attribute-phpcsharp" && systemInput === "system-csharp") {
          $("#answer-csharp").show();
          $("#answer-csharp").siblings().hide();
        }
        if (companyInput === "company-rubyphp" && taskInput === "task-ruby" && attInput === "attribute-phpcsharp" && systemInput === "system-csharp") {
          $("#answer-ruby").show();
          $("#answer-ruby").siblings().hide();
        }
        if (companyInput === "company-rubyphp" && taskInput === "task-php" && attInput === "attribute-phpcsharp" && systemInput === "system-csharp") {
          $("#answer-php").show();
          $("#answer-php").siblings().hide();
        }
        if (companyInput === "company-rubyphp" && taskInput === "task-csharp" && attInput === "attribute-ruby" && systemInput === "system-csharp") {
          $("#answer-csharp").show();
          $("#answer-csharp").siblings().hide();
        }
        if (companyInput === "company-rubyphp" && taskInput === "task-ruby" && attInput === "attribute-ruby" && systemInput === "system-csharp") {
          $("#answer-ruby").show();
          $("#answer-ruby").siblings().hide();
        }
        if (companyInput === "company-rubyphp" && taskInput === "task-php" && attInput === "attribute-ruby" && systemInput === "system-csharp") {
          $("#answer-php").show();
          $("#answer-php").siblings().hide();
        }
        if (companyInput === "company-rubyphp" && taskInput === "task-csharp" && attInput === "attribute-phpcsharp" && systemInput === "system-phpruby") {
          $("#answer-php").show();
          $("#answer-php").siblings().hide();
        }
        if (companyInput === "company-rubyphp" && taskInput === "task-ruby" && attInput === "attribute-phpcsharp" && systemInput === "system-phpruby") {
          $("#answer-ruby").show();
          $("#answer-ruby").siblings().hide();
        }
        if (companyInput === "company-rubyphp" && taskInput === "task-php" && attInput === "attribute-phpcsharp" && systemInput === "system-phpruby") {
          $("#answer-php").show();
          $("#answer-php").siblings().hide();
        }
        if (companyInput === "company-rubyphp" && taskInput === "task-csharp" && attInput === "attribute-ruby" && systemInput === "system-phpruby") {
          $("#answer-ruby").show();
          $("#answer-ruby").siblings().hide();
        }
        if (companyInput === "company-rubyphp" && taskInput === "task-ruby" && attInput === "attribute-ruby" && systemInput === "system-phpruby") {
          $("#answer-ruby").show();
          $("#answer-ruby").siblings().hide();
        }
        if (companyInput === "company-rubyphp" && taskInput === "task-php" && attInput === "attribute-ruby" && systemInput === "system-phpruby") {
          $("#answer-php").show();
          $("#answer-php").siblings().hide();
        }
    }

  event.preventDefault();
  });

});
