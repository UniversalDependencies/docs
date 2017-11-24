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
  <td><a href="#Rdp">Rdp</a></td>
</tr>
</table>

Is this a reduplicative or echo word? Such words occur in Hindi and
other Indian languages. In Hyderabad Dependency Treebank they get
their own part-of-speech tags RDP and ECH, respectively. We do not
want to treat them as separate parts of speech because they could be
assigned a POS independent of their RDP or ECH status (same as the
word that they echo). Perhaps we should merge this also with the
"hyph" feature to something called "compound"?

### <a name="Rdp">`Rdp`</a>: reduplicative

The word is a copy of a previous word. Тhis would add the meaning of distribution, separation, variety, diversity or just emphasis.

#### Examples

* _երկու-<b>երկու</b>_ “two by two”,
* _զույգ-<b>զույգ</b>_ “in pairs”
* _փունջ-<b>փունջ</b>_ “each punch separately”,
* _մեծ-<b>մեծ</b>_ “too big”,
* _գույն-<b>գույն</b>_ “of many colors”,
* _պես-<b>պես</b>_ “different, of many types”,
* _ձեռք-<b>ձեռքի</b>_ “hand in hand”,
* _գյուղից-<b>հյուղ</b>_ “from town to town”,
* _տող առ <b>տող</b>_ = “each line separately”,
* _րոպե առ <b>րոպե</b>_ = “each minute separately”

### <a name="Ech">`Ech`</a>: echo

The word fully or partly rhymes with a previous or following word but it is not identical to it and
typically it does not have any meaning of its own. In Armenian it
generalizes or specifies the meaning of the previous or following word and eventually translates
as “or something”, “etc.” etc.

* _տուն-<b>մուն</b>_ “house and etc.”,
* _աման-<b>չաման</b>_ “dishes and etc.”,
* _<b>առոք</b>-փառոք_ “good and healthy”,
* _մարդ-<b>մուրդ</b>_ “some people”,
* _<b>դափ</b>-դատարկ_ “fully empty”
* _<b>նոփ</b>-նոր_ “fully new”
