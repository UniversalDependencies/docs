---
layout: feature
title: 'Number[psor]'
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
`Number[psor]` feature captures the possessor's number. 

Note that in traditional Armenian grammars besides the definite article, possessive, demonstrative and personal articles (suffixes) are distinguished. These make a distinction between the objects, that are near to the speaker (proximal, first person), near to the addressee (second person), and far from both (third person) or are possessed to them. We do not distinguish them as separate features.

See also the relatived feature [Person[psor]]().

### <a name="Sing">`Sing`</a>: singular possessor

#### Examples

* _տուն<b>ս</b>_ “<b>my</b> house” `Number[psor]=Sing|Number=Sing`
* _տներ<b>ս</b>_ “<b>my</b> houses” `Number[psor]=Sing|Number=Plur`
* _գալ<b>ս</b>_ “<b>my</b> coming” `Number[psor]=Sing|Number=Coll`
* _ինք<b>ս</b>_ “<b>I myself</b>” `Number[psor]=Sing|Number=Sing`
* _հետ<b>ս</b>_ “with <b>me</b>” `Number[psor]=Sing`

### <a name="Plur">`Plur`</a>: plural possessor

#### Examples

* _տուն<b>ներս</b>_ “<b>our</b> houses” `Number[psor]=Plur|Number=Plur`
* _գալ<b>ներս</b>_ “<b>our</b> coming” `Number[psor]=Plur|Number=Coll`
* _ինք<b>ներս</b>_ “<b>we ourselves</b>” `Number[psor]=Plur|Number=Sing`
* _հետ<b>ներս</b>_ “with <b>us</b>” `Number[psor]=Plur`
<!-- Interlanguage links updated Pá kvě 14 11:08:36 CEST 2021 -->
