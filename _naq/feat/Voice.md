---
layout: feature
title: 'Voice'
shortdef: 'voice'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Act">Act</a></td>
  <td><a href="#Appl">Appl</a></td>
  <td><a href="#ApplPass">ApplPass</a></td>
  <td><a href="#ApplRcp">ApplRcp</a></td>
  <td><a href="#ApplRfl">ApplRfl</a></td>
  <td><a href="#Pass">Pass</a></td>
  <td><a href="#Rcp">Rcp</a></td>
  <td><a href="#Rfl">Rfl</a></td>
</tr>
</table>

In Khoekhoe, `Voice` is a feature of [verbs](naq-pos/VERB).

One verb may have a combination of voice markers, in this case a layered feature is used: `Voice[1]` (for the value of the first voice suffix), `Voice[2]` (for the value of the second voice suffix), etc.. For example, _ǃgâibahe_ is annotated with `Voice[1]=Appl|Voice[2]=Pass`

### <a name="Act">`Act`</a>: active

The underlying value. The subject of the verb is the doer of the action (agent), the object is affected by the action (patient).


#### Examples

* _Saras ge ariba ra <b>ǃao</b>._ “Sara is <b>afraid</b> of the dog.”
* _Saras ge ǂgūro ǀuisa go <b>ǂnoa</b>._ “Sara <b>threw</b> a stone.”


### <a name="Pass">`Pass`</a>: passive

Used the verb has the passive suffix _-he_, which decreases the valency of the verb by one. The subject of the verb is affected by the action (patient). The doer (agent) is either unexpressed or it appears as an oblique dependent.

#### Examples

* _Nē ǁgabas ge Kompas ti ra <b>ǂgaihe</b>._ “This tool </b>is called</b> a compass.”
* _Petrub ge Marias xa ge <b>mîǁamhe</b>._ “Peter <b>was offended</b> by Maria.”

### <a name="Appl">`Appl`</a>: applicative

Used when the verb has the applicative suffix _-ba_, which increases the valency of the verb by one. It promotes the oblique argument to the core object argument (patient).

#### Examples

* _Petrub ge Mariasa ge <b>mîba</b>..._ “Peter <b>told</b> Maria...”
* _Tita ge ǁnā ǃkhaib khoena <b>sîsenba</b> tama hâ._ “I don't <b>work for</b> the agency.”

### <a name="Rcp">`Rcp`</a>: reciprocal

Used when the verb has the reciprocal suffix _-gu_, which decreases the valency by one. It is used with plural subject, all members are doers (agents) and undergoers (patients), acting upon each other.

#### Examples

* _Goman ge ǂgâsa ra <b>ǁkhonagu</b>._ “The cows are <b>shove each other</b> (at) the entrance.”
* _ǁîn ge ǁgorob ǃna hâ ǂhoron ai ra <b>dāǃangu</b>._ “At the manger they <b>trample each other</b> to death on the last drop (of water)?”


### <a name="Rfl">`Rfl`</a>: reflexive

Used when the verb has the reflexive suffix _-sen_, which decreases the valency of the verb by one. The doer (agent) acts upon itself.

#### Examples

* _ǃKhūb ge ǁnān aitsama ra <b>huisen</b> ǂgaona ra hui._ “The Lord helps those willing to <b>help themselves</b>.”
* _ǀAwaǃnamtse, <b>dawasen</b> ǁkhāts a?_ “Colonel, would you <b>turn (yourself) around</b>, please?”

### <a name="ApplPass">`ApplPass`</a>: combination of applicative and passive voices

Used when the verb has the applicative suffix _-ba_ followed by the passive suffix _-he_. This combination does not change the valency of the verb, but the oblique argument becomes the doer (agent).

#### Examples

* _Petrub ge nē hems xa a <b>ǃgâibahe</b>._ “Peter likes (<b>is good with</b>) his shirt”
* _<b>Mîbahe</b> ta ge ge..._ “I was <b>told</b> that...”

### <a name="ApplRcp">`ApplRcp`</a>: combination of applicative and reciprocal voices

Used when the verb has the applicative suffix _-ba_ followed by the reflexive suffix _-gu_. This combination does not change the valency of the verb. It is used with plural subject, all members are doers (agents) and undergoers (patients), acting upon each other.

#### Examples

* _ǀGam ǁgâura ge ra ǃgâi xūna <b>mîbagu</b>. _ “Two houses <b>tell each other</b> good things.”

### <a name="ApplRfl">`ApplRfl`</a>: combination of applicative and reflexive voices

Used when the verb has the applicative suffix _-ba_ followed by the reflexive suffix _-sen_. This combination does not change the valency of the verb, but the doer (agent) acts upon itself.

#### Examples

* _ǁîb ge audosa go <b>ǁamabasen</b>._ “He <b>bought for himself</b> a car.”
* _Sâuǁkhāsibab ge nî <b>ūǂuibasen</b>._ “He should <b>take</b> some insurance <b>out on himself</b>.”
<!-- Interlanguage links updated So 10. května 2025, 18:14:41 CEST -->
