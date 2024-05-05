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
  <td><a href="#Pass">Pass</a></td>
  <td><a href="#Cau">Cau</a></td>
  <td><a href="#CauPass">CauPass</a></td>
</tr>
</table>

Voice is a feature of verbs that helps map the traditional syntactic functions, such as subject and object, to semantic roles, such as agent and patient.

* In Classical Armenian, the voice category is expressed by the endings or a derivational causaitve suffix. Only part of inflectional forms are marked for voice; some forms are underspecified for voice (labile), for example, the imperfect tense forms. In base verbs, the labile forms are not tagged for voice. In derived causatives, the forms with labile inflections are tagged as ambiguous (`Voice=Cau,CauPass`).

### <a name="Act">`Act`</a>: active voice

The subject of the verb is typically the doer of the action (agent) that affects the object (patient)
by the action.

#### Examples

* _Պատրաստ <b>արարէք</b> զճանապարհ Տեառն:_ / _Patrast <b>ararēkʻ</b>_ (2pl. aor.ind.act) _zčanaparh Teaṙn._ “<b>Prepare</b> ye the way of the Lord” (Luke 3:4).

### <a name="Pass">`Pass`</a>: mediopassive voice (passive, middle, reflexive, etc.)

In Classical Armenian, the tag `Pass` covers a wide range of intransitive and valency-decreasing meanings such as passive, middle, and reflexive. The subject of the verb typically either spontaneousely undergoes an change of state, or is affected by the action carried out by an agent facutlatively expressed by an oblique complement.

#### Examples

* _Եւ <b>արդարացաւ</b> իմաստութիւն յորդւոց իւրոց:_ / _Ew <b>ardaracʻaw</b>_ (3sg. aor.ind.pass) _imastowtʻiwn yordwocʻ iwrocʻ_  “And yet wisdom <b>is vindicated</b> by all her children” (Luke 7:35).

### <a name="Cau">`Cau`</a>: derived causative: active forms

* The morphological causative is a derivational category in Classical Armenian. Causatives are derived from base verbs with the help of a productive valency-increasing suffix _-ուց-_/_-owcՙ-_ (or its rare variants _-ուս-_/_-ows-_ and _-ուզ-_/_-owz-_). A causative can be further marked by the inflectional voice. The `Cau` value is reserved for the active forms. The labile forms of the paradigm, for example, the forms of the Imperfect tense, are tagged as ambiguous with `Voice=Cau,CauPass`.
* Morphological causatives are typically derived from anticausative, experiential or agentive (intransitive) base verbs, while the causation of agentive transitive verbs is often expressed by the analytical causative (_տալ_/_tal_ 'to give' + infinitive).
  
#### Examples

* _Հաւատք քո <b>կեցուցին</b> զքեզ_. / _Hawatkʻ kʻo <b>kecʻ-owcʻ-in</b>_ (3pl. aor.ind.act caus.) _zkʻez_. “Your faith <b>has saved</b> you” (Luke 7:50). The causative form, derived from a base verb _կեամ_ “to live”.

### <a name="CauPass">`CauPass`</a>: derived causative: mediopassive forms

* The value `CauPass` is reserved for the mediopassive forms of the morphological causative.

#### Examples

* _<b>Դարձուցաւ</b> ինձ այսրէն արծաթն_ / _<b>Darj-owcʻ-aw</b> inj aysrēn arcatʻn_. “My money for that <b>has been returned</b>” (Gen. 42:28). The causative form, derived from a base verb _դառնամ_ “to turn”.

<!-- Interlanguage links updated Ne 5. května 2024, 18:20:28 CEST -->
