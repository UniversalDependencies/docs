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

In Classical Armenian, voice is a mixed inflectional-derivational feature of [verbs](xcl-pos/VERB) and [auxiliaries](xcl-pos/AUX) that helps map the traditional syntactic functions, such as subject and object, to semantic roles, such as agent and patient. 

The inflectional voice characterises and has two values, `Act` (active voice) and `Pass` (mediopassive voice). Only part of verb forms is marked for inflectional voice; some forms are underspecified for inflectional voice (labile), for example, the imperfect tense forms. Thus, the labile forms of base verbs are not tagged for voice at all.

Morphological causatives are derived from base verbs (excluding auxiliaries) with the help of the causative suffix -ուց-/_-owcՙ-_. At present, the tag `Voice=Cau` is used for both active and labile forms of the causative, whereas the passive forms of the causative are tagged as `Voice=CauPass`. Given that the morphological causative is a derivational catergory, `Voice=Cau` specifies non-personal verb forms too, including participles and verbal nouns.

By contrast to <a href="https://universaldependencies.org/hy/feat/Voice.html">Modern Eastern Armenian</a>, the voice markers are tagged following the morphological principle. Active and passive forms take two different tags irrespective of their function in context. Thus, when a passive form is used in the transitive construction with active meaning it is still tagged as `Voice=Pass`, e.g. ծնանի/_cnani_ “she gives birth”.

### <a name="Act">`Act`</a>: active voice

The tag `Act` is applied to the inflections, which mark the forms of canonical transitive verbs such as բեկանել/_bekanel_ 'to break' in the transitive construction.  

#### Examples

* Պատրաստ <b>արարէք</b> զճանապարհ Տեառն: / _Patrast <b>ararēkʻ</b> zčanaparh Teaṙn._ “<b>Prepare</b> ye the way of the Lord” (Luke 3:4).

### <a name="Pass">`Pass`</a>: mediopassive voice (passive, middle, reflexive, etc.)

In Classical Armenian, the tag `Pass` covers a wide range of intransitive and valency-decreasing meanings such as passive, middle, and reflexive. The subject of the verb typically either spontaneously undergoes a change of state or is affected by the action carried out by an agent facultatively expressed by an oblique complement.

#### Examples

* Եւ <b>արդարացաւ</b> իմաստութիւն յորդւոց իւրոց: / _Ew <b>ardaracʻaw</b>_ (3sg. aor.ind.pass) _imastowtʻiwn yordwocʻ iwrocʻ_  “And yet wisdom <b>is vindicated</b> by all her children” (Luke 7:35).

### <a name="Cau">`Cau`</a>: derived causative: active forms

The morphological causative is a derivational category in Classical Armenian. Causatives are derived from base verbs with the help of a productive valency-increasing suffix -ուց-/_-owcՙ-_ (or its rare variants -ուս-/_-ows-_ and -ուզ-/_-owz-_). A causative can be further marked by the inflectional voice. The `Cau` value is used for active and labile forms. Morphological causatives are typically derived from anticausative, experiential or agentive (intransitive) base verbs, while the causation of agentive transitive verbs is often expressed by the analytical causative (տալ/_tal_ 'to give' + infinitive) (Kocharov 2023).
  
#### Examples

* Հաւատք քո <b>կեցուցին</b> զքեզ. / _Hawatkʻ kʻo <b>kecʻ-owcʻ-in</b>_ (3pl. aor.ind.act caus.) _zkʻez_. “Your faith <b>has saved</b> you” (Luke 7:50). The causative form is derived from a base verb կեալ/_keal_ “to live”.

### <a name="CauPass">`CauPass`</a>: derived causative: mediopassive forms

* The value `CauPass` is reserved for the mediopassive forms of the morphological causative.

#### Examples

* <b>Դարձուցաւ</b> ինձ այսրէն արծաթն: / _<b>Darj-owcʻ-aw</b> inj aysrēn arcatʻn_. “My money for that <b>has been returned</b>.” (Gen. 42:28). The causative form is derived from a base verb դառնալ/_daṙnal_ “to turn”.

### References

Առաքելեան, Վարագ. 2010. Գրաբարի քերականութիւն. Երևան: Վիամիր․ [Araqelian, Varag. 2010. Grammar of Grabar. Yerevan: Viamir]

Jensen, Hans. 1959. _Altarmenische Grammatik._ Heidelberg: Winter.

Meillet, Antoine. 1913. _Altarmenisches Elementarbuch._ Heidelberg: Winters (<a href="https://archive.org/details/altarmenischesel00meil/page/n5/mode/2up" target="_blank">Internet Archive</a>)

Kocharov, Petr. 2023. Causatives in Classical Armenian. _Folia Linguistica_ 57/3: 593-627.
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:11 CET -->
