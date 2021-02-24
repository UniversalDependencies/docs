---
layout: feature
title: 'Variant'
shortdef: 'alternative form of word'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Long">Long</a></td>
  <td><a href="#Short">Short</a></td>
</tr>
</table>

Sometimes there are multiple word forms for the same lemma and set of features.
The `Variant` feature helps distinguish alternate forms.

In Moksha there is one group of words where double forms are regular and worth capturing:
short forms of [pronouns](myv-pos/PRON) in the dative case. The frequency is very high for `Short` forms, whereas
`Long` forms, as indicated by their name physically show a pronoun.
This feature marks both the short forms and the long forms, hence there are the values, `Short` and `Long`.

### <a name="Long">`Long`</a>: short form of personal pronouns both reflex and non-reflex

#### Examples

* _<b>мондейне</b>_ “to me”, _<b>тондейть</b>_ “to you”, _<b>сондеенза</b>_ “to him/her/it”, _<b>миндейнек</b>_ “to us”, _<b>тиндейнть</b>_ “to you”, _<b>синдеест</b>_ “to them”

### <a name="Short">`Short`</a>: short form of personal pronouns both reflex and non-reflex

#### Examples

* _<b>теень</b> / <b>тейне</b>_ “to me”, _<b>тейть</b>_ “to you”, _<b>тейнза</b>_ “to him/her/it”,  _<b>теест</b>_ “to them”

<!-- Interlanguage links updated Čt lis 12 09:43:07 CET 2020 -->
