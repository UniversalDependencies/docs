---
layout: feature
title: 'Echo'
shortdef: 'is this an echo word or a reduplicative?'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Ech">Ech</a></td>
  </tr>
</table>

This feature covers echo words in Middle Armenian. Echo words get the same POS tag as the head word unless they are tagged according to their basic use.

See also the related feature [Hyph]().


### <a name="Ech">`Ech`</a>: echo

The word fully or partially rhymes with a previous or following word but it is not identical to it and typically it does not have any meaning of its own. 
The echoed part is a form that does not occur independently outside such compounds. In Middle Armenian it generalizes or specifies the meaning of the previous or following word and is translated as “or something”, “etc.”, “and the like” etc.

#### Examples

* _աքիս <b>մաքիս</b>_/_ak’is mak’is_ “like a weasel, as a weasel”,
* _աղուշ <b>մաղուշ</b>_/_aġowš maġowš_ “sweetly, in a sweet and gentle way”,
* _<b>հառոք</b> և փառոք_/_haṙok’ ew p’aṙok’_ “good and proper”,
* _սուտ ու <b>փութ</b>_/_sowt ow p’owt’_ “false, pretended”,
* _<b>աժնել</b> բաժնել_/_ažnel bažnel_ “separate from each other”.

Note that in the Middle Armenian UD treebank reduplicative compounds (e.g. _ատեն ատեն_/_aten aten_ “from time to time”, _կաթ կաթ_/_kat’ kat’_ “drop by drop”, _հանկուստ հանկուստ_/_hankowst hankowst_ “knotted, having knots”, _հատ <b>հատ</b>_/_hat hat_ “one by one”, _շիթ շիթ_/_šit’ šit’_ “in jets, jet by jet”, _ծվէն ծվէն_/_çvēn çvēn_ “in shreds, in tatters”) are not annotated with `Echo=Rdp`. Instead, both components are annotated according to their regular lexical properties, and the reduplicative relation between them is represented by the dependency relation `compound:redup`.

In some cases, one of the components of a reduplicative compound may itself be modified by other words.

* _եռ ընդ <b>եռ</b>/eṙ ënd eṙ_ “boiling hot”,
* _գող ի <b>գող</b>/goġ i goġ_ “stealthily”
<!-- Interlanguage links updated Út 30. června 2026, 10:58:51 CEST -->
