---
layout: feature
title: 'PossNumber'
shortdef: 'possessor’s number'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Plur">Plur</a></td>
  <td><a href="#Sing">Sing</a></td>
</tr>
</table>

Possessives may have two different numbers: that of the possessed object (number
agreement with modified noun) and that of the possessor. The
`PossNumber` feature captures the possessor's number. 

Nothe that in traditional Armenian grammars besides the definite article, possessive, demonstrative and personal articles are distinguished. Last thres make a distinction between the objects, that are near to the speaker (proximal, first person), near to the addressee (second person), and far from both (third person) or are with them (possesive).

See also the relatived feature [PossPerson]().

### <a name="Sing">`Sing`</a>: singular possessor

#### Examples

* _տուն<b>ս</b>_ “<b>my</b> hous” `PossNumber=Sing|Number=Sing`
* _տներ<b>ս</b>_ “<b>my</b> houses” `PossNumber=Sing|Number=Plur`
* _գալ<b>ս</b>_ “<b>my</b> coming” `PossNumber=Sing`
* _օրեր<b>ս</b>_ “in <b>this</b> days” `PossNumber=Sing|Number=Plur`
* _քաղաք<b>ս</b>_ “<b>this</b> town” `PossNumber=Sing|Number=Sing`
* _(ես) ուսուցիչ<b>ս</b>_ “I the teacher” or “<b>my</b> teacher” `PossNumber=Sing|Number=Sing`
* _(մենք) ուսուցիչներ<b>ս</b>_ “We the teachers” or “<b>my</b> teachers” `PossNumber=Sing|Number=Plur`
* _ինք<b>ս</b>_ “I myself” `PossNumber=Sing|Number=Sing`
* _հետ<b>ս</b>_ “with <b>me</b>” `PossNumber=Sing`

### <a name="Plur">`Plur`</a>: plural possessor

#### Examples

* _տուն<b>ն</b>եր<b>ս</b>_ “<b>our</b> houses” `PossNumber=Plur|Number=Plur`
* _գալ<b>ներս</b>_ “<b>our</b> coming” `PossNumber=Plur`
* _ինք<b>ներս</b>_ “We ourselves” `PossNumber=Plur|Number=Sing`
* _հետ<b>ներս</b>_ “with <b>us</b>” `PossNumber=Plur`
