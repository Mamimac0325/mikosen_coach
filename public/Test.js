function UpdateState() {
    var value = $("input[name='RadioGroup01']:checked").val();

    switch (value) {
      case "item1":
        $("#output").html("要素1 が選択されています。");
        break;
      case "item2":
        $("#output").html("要素2 が選択されています。");
        break;
      case "item3":
        $("#output").html("要素3 が選択されています。");
        break;
      case "item4":
        $("#output").html("要素4 が選択されています。");
        break;
      case "item5":
        $("#output").html("要素5 が選択されています。");
        break;
      default:
        $("#output").html("予期せぬ値です。");
        break;
    }
  }

  $(document).ready(function () {
    UpdateState();
  })

  $(document).ready(function () {
    $("input[name='RadioGroup01']").click(function () {
      UpdateState();
    });
  });
