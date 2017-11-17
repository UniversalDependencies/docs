---
layout: feature
title: 'PossPerson'
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

PossPerson is possessor's person, marked e.g. on [nouns](NOUN), [emphatic pronouns/determiners](PronType), [infinitives](VerbForm), or [adpositions](ADP). These forms would be translated to English as possessive pronoun + noun.

The `PossPerson` feature captures the possessor's person. We do not distinguish `PossPerson` for possessive pronouns, as they are actually identical to personal pronouns in the genitive case.

Nothe that in traditional Armenian grammars besides the definite article, possessive, demonstrative and personal articles (suffixes) are distinguished. These make a distinction between the objects, that are near to the speaker (proximal, first person), near to the addressee (second person), and far from both (third person) or are possessed to them. We do not distinguish them as separate features.

See also the relatived feature [PossNumber]().

### <a name="1">`1`</a>: first person possessor

#### Examples

* _տուն<b>ս</b>_ “<b>my</b> hous” `PossPerson=1|PossNumber=Sing|Number=Sing`
* _տներ<b>ս</b>_ “<b>my</b> houses” `PossPerson=1|PossNumber=Sing|Number=Plur`
* _գալ<b>ս</b>_ “<b>my</b> coming” `PossPerson=1|PossNumber=Sing`
* _օրեր<b>ս</b>_ “in <b>this</b> days” `PossPerson=1|Number=Plur`
* _քաղաք<b>ս</b>_ “<b>this</b> town” `PossPerson=1|Number=Sing`
* _(ես) ուսուցիչ<b>ս</b>_ “I the teacher” or “<b>my</b> teacher” `PossPerson=1|Number=Sing` or `PossPerson=1||PossNumber=Sing|Number=Sing`
* _ինք<b>ս</b>_ “<b>I myself</b>” `PossPerson=1|PossNumber=Sing|Number=Sing`
* _հետ<b>ս</b>_ “with <b>me</b>” `PossPerson=1|PossNumber=Sing`

### <a name="2">`2`</a>: second person possessor

#### Examples

* _տուն<b>դ</b>_ “<b>your.SING</b> hous” `PossPerson=2|PossNumber=Sing|Number=Sing`
* _տներ<b>դ</b>_ “<b>your.SING</b> houses” `PossPerson=2|PossNumber=Sing|Number=Plur`
* _գալ<b>դ</b>_ “<b>your.SING</b> coming” `PossPerson=2|PossNumber=Sing`
* _(դու) ուսուցիչ<b>դ</b>_ “You.SING the teacher” or “<b>your.SING</b> teacher” `PossPerson=2|Number=Sing` օր `PossPerson=2||PossNumber=Sing|Number=Sing`
* _ինք<b>դ</b>_ “<b>you.SING yourself</b>” `PossPerson=2|PossNumber=Sing|Number=Sing`
* _հետ<b>դ</b>_ “with <b>you.SING</b>” `PossPerson=2|PossNumber=Sing`

### <a name="3">`3`</a>: third person possessor

#### Examples

* _տուն<b>ն(ը)</b>_ “<b>his/her/its</b> hous” `PossPerson=3|PossNumber=Sing|Number=Sing` 
* _տներ<b>ն(ը)</b>_ “<b>his/her/its</b> houses” `PossPerson=3|PossNumber=Sing|Number=Plur` 
* _(նա) ուսուցիչ<b>ն(ը)</b>_ “He/She the teacher” or “<b>his/her/its</b> teacher” `PossPerson=3|Number=Sing` or `PossPerson=3|PossNumber=Sing|Number=Sing`
* _գալ<b>ն(ը)</b>_ “<b>his/her/its</b> coming” `PossPerson=3|PossNumber=Sing`
* _ինք<b>ն(ը)</b>_ “<b>he/she/is himself/herself/itself</b>” `PossPerson=3|PossNumber=Sing|Number=Sing`
* _հետ<b>ն(ը)</b>_ “with <b>him/her/it</b>” `PossPerson=3|PossNumber=Sing`

(Note that first three forms are ambiguous.)
