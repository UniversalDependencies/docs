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

In Erzya there is one group of words where double forms are regular and worth capturing:
short forms of [pronouns](myv-pos/PRON) in the dative case. The frequency is very high for `Short` forms, whereas
`Long` forms, as indicated by their name physically show a pronoun.
This feature marks both the short forms and the long forms, hence there are the values, `Short` and `Long`.

### <a name="Long">`Long`</a>: short form of personal pronouns both reflex and non-reflex

#### Examples

* _<b>монень</b>_ “to me”, _<b>тонеть</b>_ “to you”, _<b>сонензэ</b>_ “to him/her/it”, _<b>миненек</b>_ “to us”, _<b>тыненк</b>_ “to you”, _<b>сыненст</b>_ “to them”
* _<b>монстень</b>_ “to me myself”, _<b>тонстеть</b>_ “to you yourself”, _<b>сонстензэ</b>_ “to him himself/her herself/it itself”, _<b>минстенек</b>_ “to us ourselves”, _<b>тынстенк</b>_ “to you yourselves”, _<b>сынстенст</b>_ “to them themselves”

### <a name="Short">`Short`</a>: short form of personal pronouns both reflex and non-reflex

#### Examples

* _<b>тень</b>_ “to me”, _<b>теть</b>_ “to you”, _<b>тензэ</b>_ “to him/her/it”, _<b>тенек</b>_ “to us”, _<b>тенк</b>_ “to you”, _<b>тенст</b>_ “to them”
* _<b>эстень</b>_ “to me myself”, _<b>эстеть</b>_ “to you yourself”, _<b>эстензэ</b>_ “to him himself/her herself/it itself”, _<b>эстенек</b>_ “to us ourselves”, _<b>эстенк</b>_ “to you yourselves”, _<b>эстенст</b>_ “to them themselves”

<!-- Interlanguage links updated St lis 3 20:58:31 CET 2021 -->
