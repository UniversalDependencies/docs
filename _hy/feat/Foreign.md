---
layout: feature
title: 'Foreign'
shortdef: 'is this a foreign word?'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Yes">Yes</a></td>
</tr>
</table>

Boolean feature. Is this a foreign word? Not a loan word
but a genuinely foreign word appearing inside native
text, e.g. inside direct speech, titles of books etc.

This feature would apply either to the [X]() part of speech (unanalyzable token), or to other parts of speech if we know and are willing to annotate the class to which the word belongs in its original language.

Note, that the articles, prepositions in foreign names (_դը, դե, դ՚, ֆոն, դել, վան_) are tagged [X]().

### <a name="Yes">`Yes`</a>: it is foreign

#### Examples

* _... <b>«ՌԻԱ Նովոստի»</b> գործակալությունը&nbsp;_ (the news agency <b>RIA Novosti</b>)
* _... <b>CNN</b> գործակալությունը&nbsp;_ (the news agency <b>CNN</b>)
<!-- Interlanguage links updated St lis 3 20:58:21 CET 2021 -->
