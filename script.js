function SaveBase64() {
    var base64String = document.getElementById("textInput").value;
    var excelFilePath = "output.xlsx";
    try {
      var data = atob(base64String);

      var byteNumbers = new Array(data.length);
      for (var i = 0; i < data.length; i++) {
        byteNumbers[i] = data.charCodeAt(i);
      }
      var byteArray = new Uint8Array(byteNumbers);
      var blob = new Blob([byteArray], {
        type: "application/octet-stream",
      });
      var url = URL.createObjectURL(blob);

      var link = document.createElement("a");
      link.href = url;
      link.download = excelFilePath;
      link.click();
    } catch (error) {}
  }