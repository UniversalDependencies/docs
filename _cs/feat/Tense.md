---
layout: feature
title: 'Tense'
shortdef: 'tense'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Fut">Fut</a></td>
  <td><a href="#Imp">Imp</a></td>
  <td><a href="#Past">Past</a></td>
  <td><a href="#Pres">Pres</a></td>
</tr>
</table>

Tense is a feature that specifies the time when the action took /
takes / will take place, in relation to the current moment or to
another action in the utterance.

### <a name="Past">`Past`</a>: past tense

The past tense denotes actions that happened before the current
moment. Past tense in Czech consists of the past participle
(also called active participle or l-participle),
which is accompanied by a present auxiliary verb in the first and second persons,
and stands alone in the third person.

The auxiliary (if any) is in its present form, so it will have `Tense=Pres`.
The participle has `Tense=Past`, even though it can also be used to form present conditional.

In Old Czech, `Tense=Past` is also used with `VerbForm=Fin` (finite verb) and denotes the
aorist (simple past tense, used typically but not exclusively with perfective verbs). This
form vanished from the language during the 15th century.

#### Examples

* _<b>Šel</b> jsem domů.&nbsp;_ “I have <b>gone</b> home.”
* _<b>Šel</b> jsi domů.&nbsp;_ “You have <b>gone</b> home.”
* _<b>Šel</b> domů.&nbsp;_ “He has <b>gone</b> home.”
* _An vstav i <b>jide</b> do svého domu.&nbsp;_ “And he arose, and <b>went</b> to his house.” (Old Czech aorist)
* _Tehdy ona <b>jidesta</b> po něm.&nbsp;_ “Then they <b>followed</b> him.” (lit. “Then they <b>went</b> after him.” Old Czech aorist, dual number)

### <a name="Imp">`Imp`</a>: imperfect tense

Another simple past tense form that was used in Old Czech and disappeared during the 15th century.
Used typically, but not exclusively, with imperfective verbs.

#### Examples

* _A vstav Ježíš, <b>jdieše</b> po něm i jeho mlazší.&nbsp;_ “And Jesus arose, and his disciples <b>followed</b> him.” (lit. “<b>went</b> after him”)
* _A když odtud <b>jdieše</b> Ježíš, <b>jdiešta</b> po něm dva slepcě.&nbsp;_ “And when Jesus <b>departed</b> thence, two blind men <b>followed</b> him.” (lit. “And when Jesus <b>went</b> from here, two blind men <b>went</b> after him.”; dual number)

### <a name="Pres">`Pres`</a>: present tense

The present tense denotes actions that are happening right now or that
usually happen.

Note that morphologically present forms of perfective verbs have actually a future meaning
but they will still be marked `Tense=Pres`.

#### Examples

* _<b>Přicházím</b> domů.&nbsp;_ “I <b>come / am coming</b> home.” (_Přicházet&nbsp;_ is an imperfective verb.)
* _<b>Přijdu</b> domů.&nbsp;_ “I <b>will come</b> home.” (_Přijít&nbsp;_ is a perfective verb.)
* _<b>Jdu</b> domů.&nbsp;_ “I <b>go / am going</b> home.” (_Jít&nbsp;_ is an imperfective verb.)

### <a name="Fut">`Fut`</a>: future tense

The future tense denotes actions that will happen after the current
moment. Future tense in Czech is formed in one of three ways, depending of the verb:

* Present forms of perfective verbs have future meaning. These forms are tagged `Tense=Pres`, not `Tense=Fut` (see above).
* The verb _být&nbsp;_ “to be” has a set of distinct future forms. They combine a future stem _bud&nbsp;_ with present suffixes.
  A small set of verbs (mostly motion verbs) have also future forms. These are formed as the present form (present stem and suffix)
  with the prefix _po-_.
  Although these forms are morphologically very close to the present forms, they are tagged `Tense=Fut`
  because the same lemma has also present forms and the feature must distinguish the two.
* The remaining imperfective verbs have periphrastic future forms, consiting of the future form of the auxiliary _být,&nbsp;_
  and the infinitive of the content verb. Only the auxiliary will have `Tense=Fut`, while there will be no tense information
  at the infinitive.

#### Examples

* _<b>Půjdu</b> domů.&nbsp;_ “I <b>will go</b> home.” (_Jít&nbsp;_ is an imperfective verb, phonological rule transformed the prefix
  _po-_ to _pů-._)
* _<b>Budu</b> přicházet domů.&nbsp;_ “I <b>will</b> be coming home.” (_Přicházet&nbsp;_ is an imperfective verb and it forms future periphrastically.)
<!-- Interlanguage links updated Ne 5. května 2024, 18:20:24 CEST -->
