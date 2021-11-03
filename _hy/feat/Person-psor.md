---
layout: feature
title: 'Person[psor]'
shortdef: 'possessor’s person'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#1">1</a></td>
  <td><a href="#2">2</a></td>
  <td><a href="#3">3</a></td>
</tr>
</table>

`Person[psor]` is possessor's person, marked e.g. on [nouns](NOUN), [emphatic determiners](PronType), [gerundives](VerbForm), or [adpositions](ADP). These forms would be translated in to English as possessive pronoun + noun.

The `Person[psor]` feature captures the possessor's person. We do not distinguish `Person[psor]` for possessive pronouns, as they are actually identical to personal pronouns in the genitive case.

Note that in traditional Armenian grammars besides the definite article, possessive, demonstrative and personal articles (suffixes) are distinguished. These make a distinction between the objects, that are near to the speaker (proximal, first person), near to the addressee (second person), and far from both (third person) or are possessed to them. We do not distinguish them as separate features.

See also the relatived feature [Number[psor]]().

### <a name="1">`1`</a>: first person possessor

#### Examples

* _տուն<b>ս</b>_ “<b>my</b> house” `Person[psor]=1|Number[psor]=Sing|Number=Sing`
* _տներ<b>ս</b>_ “<b>my</b> houses” `Person[psor]=1|Number[psor]=Sing|Number=Plur`
* _գալ<b>ս</b>_ “<b>my</b> coming” `Person[psor]=1|Number[psor]=Sing|Number=Coll`
* _քաղաք<b>ս</b>_ “<b>this</b> town” `Person[psor]=1|Number=Sing`
* _օրեր<b>ս</b>_ “<b>in this</b> days” `Person[psor]=1|Number=Plur`
* _(ես) ուսուցիչ<b>ս</b>_ “<b>I</b> the teacher” or “<b>my</b> teacher” `Person[psor]=1|Number=Sing` or `Person[psor]=1|Number[psor]=Sing|Number=Sing`
* _ինք<b>ս</b>_ “<b>I myself</b>” `Person[psor]=1|Number[psor]=Sing|Number=Sing`
* _հետ<b>ս</b>_ “with <b>me</b>” `Person[psor]=1|Number[psor]=Sing`

### <a name="2">`2`</a>: second person possessor

#### Examples

* _տուն<b>դ</b>_ “<b>your</b>.`Sing` house” `Person[psor]=2|Number[psor]=Sing|Number=Sing`
* _տներ<b>դ</b>_ “<b>your</b>.`Sing` houses” `Person[psor]=2|Number[psor]=Sing|Number=Plur`
* _գալ<b>դ</b>_ “<b>your</b>.`Sing` coming” `Person[psor]=2|Number[psor]=Sing|Number=Coll`
* _(դու) ուսուցիչ<b>դ</b>_ “<b>You</b>.`Sing` the teacher” or “<b>your</b>.`Sing` teacher” `Person[psor]=2|Number=Sing` or `Person[psor]=2|Number[psor]=Sing|Number=Sing`
* _ինք<b>դ</b>_ “<b>you</b>.`Sing` <b>yourself</b>” `Person[psor]=2|Number[psor]=Sing|Number=Sing`
* _հետ<b>դ</b>_ “with <b>you</b>.`Sing`” `Person[psor]=2|Number[psor]=Sing`

### <a name="3">`3`</a>: third person possessor

#### Examples

* _տուն<b>ն(ը)</b>_ “<b>his/her/its</b> house” `Person[psor]=3|Number[psor]=Sing|Number=Sing` 
* _տներ<b>ն(ը)</b>_ “<b>his/her/its</b> houses” `Person[psor]=3|Number[psor]=Sing|Number=Plur` 
* _(նա) ուսուցիչ<b>ն(ը)</b>_ “<b>He/She</b> the teacher” or “<b>his/her/its</b> teacher” `Person[psor]=3|Number=Sing` or `Person[psor]=3|Number[psor]=Sing|Number=Sing`
* _գալ<b>ն(ը)</b>_ “<b>his/her/its</b> coming” `Person[psor]=3|Number[psor]=Sing|Number=Coll`
* _ինք<b>ն(ը)</b>_ “<b>he/she/it himself/herself/itself</b>” `Person[psor]=3|Number[psor]=Sing|Number=Sing`
* _հետ<b>ն(ը)</b>_ “with <b>him/her/it</b>” `Person[psor]=3|Number[psor]=Sing`

(Note that first three forms are ambiguous.)
<!-- Interlanguage links updated St lis 3 20:58:27 CET 2021 -->
