$$(".hentry:has(.entry-content)").each(function (entry) {
  var username = entry.className.replace(/.*\bu-(\w+)\b.*/, "$1")
  var retweetableLength = 140 - ("RT @" + username + ": ").length
  var actualLength = entry.down(".entry-content").innerText.length

  if (actualLength == 140 || actualLength == retweetableLength) {
    entry.addClassName("twerfect")

    if (actualLength == retweetableLength)
      entry.addClassName("twerfect-retweetable")

    var previous = entry.previous(".hentry:has(.entry-content)")

    if (previous)
      previous.addClassName("twerfect-before")
  }
})


$$("#permalink:has(.twerfect)").each(function (permalink) {
  permalink.addClassName("twerfect")
})
