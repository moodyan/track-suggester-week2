$(document).ready(function(){
  $("form#quiz").submit(function(event){

    var nameInput = $("#name").val();
    var devInput = $("select#development").val();
    var companyInput = $("select#company").val();
    var taskInput = $("select#task").val();
    var attInput = $("select#attribute").val();
    var systemInput = $("select#system").val();


    if (devInput === "back-end") {
      if (companyInput === "company-csharp" && taskInput === "task-csharp" && attInput === "phpcsharp" && systemInput === "system-csharp") {
        $(".answer-csharp").show();
        $(".answer-csharp").siblings("#answer-section").hide();
      }
      if (companyInput === "company-csharp" && taskInput === "task-ruby" && attInput === "phpcsharp" && systemInput === "system-csharp") {
        $(".answer-csharp").show();
        $(".answer-csharp").siblings("#answer-section").hide();
      }
      if (companyInput === "company-csharp" && taskInput === "task-php" && attInput === "phpcsharp" && systemInput === "system-csharp") {
        $(".answer-csharp").show();
        $(".answer-csharp").siblings("#answer-section").hide();
      }
      if (companyInput === "company-csharp" && taskInput === "task-csharp" && attInput === "attribute-ruby" && systemInput === "system-csharp") {
        $(".answer-csharp").show();
        $(".answer-csharp").siblings("#answer-section").hide();
      }
      if (companyInput === "company-csharp" && taskInput === "task-ruby" && attInput === "attribute-ruby" && systemInput === "system-csharp") {
        $(".answer-csharp").show();
        $(".answer-csharp").siblings("#answer-section").hide();
      }
      if (companyInput === "company-csharp" && taskInput === "task-php" && attInput === "attribute-ruby" && systemInput === "system-csharp") {
        $(".answer-csharp").show();
        $(".answer-csharp").siblings("#answer-section").hide();
      }
      if (companyInput === "company-csharp" && taskInput === "task-csharp" && attInput === "phpcsharp" && systemInput === "system-phpruby") {
        $(".answer-csharp").show();
        $(".answer-csharp").siblings("#answer-section").hide();
      }
      if (companyInput === "company-csharp" && taskInput === "task-ruby" && attInput === "phpcsharp" && systemInput === "system-phpruby") {
        $(".answer-csharp").show();
        $(".answer-csharp").siblings("#answer-section").hide();
      }
      if (companyInput === "company-csharp" && taskInput === "task-php" && attInput === "phpcsharp" && systemInput === "system-phpruby") {
        $(".answer-csharp").show();
        $(".answer-csharp").siblings("#answer-section").hide();
      }
      if (companyInput === "company-csharp" && taskInput === "task-csharp" && attInput === "attribute-ruby" && systemInput === "system-phpruby") {
        $(".answer-csharp").show();
        $(".answer-csharp").siblings("#answer-section").hide();
      }
      if (companyInput === "company-csharp" && taskInput === "task-ruby" && attInput === "attribute-ruby" && systemInput === "system-phpruby") {
        $(".answer-csharp").show();
        $(".answer-csharp").siblings("#answer-section").hide();
      }
      if (companyInput === "company-csharp" && taskInput === "task-php" && attInput === "attribute-ruby" && systemInput === "system-phpruby") {
        $(".answer-csharp").show();
        $(".answer-csharp").siblings("#answer-section").hide();
      }
      if (companyInput === "company-rubyphp" && taskInput === "task-csharp" && attInput === "phpcsharp" && systemInput === "system-csharp") {
        $(".answer-csharp").show();
        $(".answer-csharp").siblings("#answer-section").hide();
      }
      if (companyInput === "company-rubyphp" && taskInput === "task-ruby" && attInput === "phpcsharp" && systemInput === "system-csharp") {
        $(".answer-csharp").show();
        $(".answer-csharp").siblings("#answer-section").hide();
      }
      if (companyInput === "company-rubyphp" && taskInput === "task-php" && attInput === "phpcsharp" && systemInput === "system-csharp") {
        $(".answer-csharp").show();
        $(".answer-csharp").siblings("#answer-section").hide();
      }
      if (companyInput === "company-rubyphp" && taskInput === "task-csharp" && attInput === "attribute-ruby" && systemInput === "system-csharp") {
        $(".answer-csharp").show();
        $(".answer-csharp").siblings("#answer-section").hide();
      }
      if (companyInput === "company-rubyphp" && taskInput === "task-ruby" && attInput === "attribute-ruby" && systemInput === "system-csharp") {
        $(".answer-csharp").show();
        $(".answer-csharp").siblings("#answer-section").hide();
      }
      if (companyInput === "company-rubyphp" && taskInput === "task-php" && attInput === "attribute-ruby" && systemInput === "system-csharp") {
        $(".answer-csharp").show();
        $(".answer-csharp").siblings("#answer-section").hide();
      }
      if (companyInput === "company-rubyphp" && taskInput === "task-csharp" && attInput === "phpcsharp" && systemInput === "system-phpruby") {
        $(".answer-csharp").show();
        $(".answer-csharp").siblings("#answer-section").hide();
      }
      if (companyInput === "company-rubyphp" && taskInput === "task-ruby" && attInput === "phpcsharp" && systemInput === "system-phpruby") {
        $(".answer-csharp").show();
        $(".answer-csharp").siblings("#answer-section").hide();
      }
      if (companyInput === "company-rubyphp" && taskInput === "task-php" && attInput === "phpcsharp" && systemInput === "system-phpruby") {
        $(".answer-csharp").show();
        $(".answer-csharp").siblings("#answer-section").hide();
      }
      if (companyInput === "company-rubyphp" && taskInput === "task-csharp" && attInput === "attribute-ruby" && systemInput === "system-phpruby") {
        $(".answer-csharp").show();
        $(".answer-csharp").siblings("#answer-section").hide();
      }
      if (companyInput === "company-rubyphp" && taskInput === "task-ruby" && attInput === "attribute-ruby" && systemInput === "system-phpruby") {
        $(".answer-csharp").show();
        $(".answer-csharp").siblings("#answer-section").hide();
      }
      if (companyInput === "company-rubyphp" && taskInput === "task-php" && attInput === "attribute-ruby" && systemInput === "system-phpruby") {
        $(".answer-csharp").show();
        $(".answer-csharp").siblings("#answer-section").hide();
      }
    }


  event.preventDefault();
  });
});
