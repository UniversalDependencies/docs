---
layout: feature
title: 'Agglutination'
shortdef: 'agglutination'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Agl">Agl</a></td>
  <td><a href="#Nagl">Nagl</a></td>
</tr>
</table>

Boolean feature of certain Polish past participles. The “mobile inflection” clitic
(see also the feature [Clitic]()) normally attaches to the participle, although
occasionally it can attach to other words. Furthermore, the clitic is used only with
first and second person subjects, while the third person is recognized by the absence
of the clitic.

In rare cases, the participle has different forms depending on whether there is or is not
a “mobile inflection” clitic attached to it. These verbs receive the `Agglutination`
feature to distinguish the two forms.

Clitic auxiliaries are shortened present forms of the auxiliary verb _być_ “to be”:
_-m, -em_ “I am”, _-ś, -eś_ “you are (Sing)”, _-śmy_ “we are”, _-ście_ “you are (Plur)”.
Note that the conditional morpheme _by_ does not affect the feature although it is linguistically
a clitic, too.

This feature is currently used in the LFG treebank but not in PDB and PUD.

### <a name="Agl">`Agl`</a>: participle form with a clitic

#### Examples

* _Nie <b>mogł</b>em tego słuchać._ “I couldn't listen to it.”

### <a name="Nagl">`Nagl`</a>: participle form without a clitic

#### Examples

* _Fortecki <b>mógł</b>by udźwignąć każdy ciężar._ “Fortecki could bear any weight.”
* _Któż z marynarzy w dawnych czasach <b>mógł</b> sobie na to pozwolić._ “Which seaman could afford it in the old days?”

<!-- Interlanguage links updated St lis 3 20:58:17 CET 2021 -->
