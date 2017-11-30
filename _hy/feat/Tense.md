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
  Imp: imperfect
  
</tr>
</table>

Tense is a feature that specifies the time when the action took /
takes / will take place, in relation to the current moment or to
another action in the utterance.

Armenian has a complex tense/aspect/mood system.

Note that we are defining features that apply to a single word. If a tense is constructed periphrastically, in Armenian grammar traditionally called  “compound tenses” or “secondary compound tenses” (two or more words, e.g. auxiliary verb indicative + participle of the main verb), and none of the participating words are specific to this tense, then the features will probably not directly reveal the tense.

### <a name="Past">`Past`</a>: past tense / preterite / aorist

The past tense denotes actions that happened before the current
moment, a (completed) past event. In Armenian this is aorist.

#### Examples

* _Նա <b>գնաց</b> տուն։&nbsp;_ “He <b>went</b> home.”

### <a name="Pres">`Pres`</a>: present tense

The present tense denotes actions that are happening right now or that
usually happen.

The auxiliaries _եմ&nbsp;_ and _կամ&nbsp;_ will have `Tense=Pres`.

Note, that in Armenian a limited set of verbs (traditionally calles “Defective Verbs with Secondary Expanded Stems”) can form present morphologically, without the auxiliary. They combine a present “non-expanded” stem with future suffixes. The future forms are formed as the present form with the expanded stems. Because the same lemma has also present forms and the feature must distinguish the two.

#### Examples

* _<b>եմ</b>&nbsp;_ “<b>go / am going</b>”
* _<b>կամ</b>&nbsp;_ “<b>go / am going</b>”
* _<b>ունեմ</b>&nbsp;_ “<b>go / am going</b>”
* _<b>գիտեմ</b>&nbsp;_ “<b>go / am going</b>”
* _<b>արժեմ</b>&nbsp;_ “<b>go / am going</b>”

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

### <a name="Imp">`Imp`</a>: imperfect

In Armenian imperfect is a special case of the past tense for auxilaries and for the verbs, that form present morphologically. It denotes actions that are happening during some past moment. These actions might continue after the moment of speaking, but also might not, i.e. the evidence is not in the form itself, but it is in the context.

* _<b>էի</b>&nbsp;_ “<b>go / am going</b>”
* _<b>կայի</b>&nbsp;_ “<b>go / am going</b>”
* _<b>ունեի</b>&nbsp;_ “<b>go / am going</b>”
* _<b>գիտեի</b>&nbsp;_ “<b>go / am going</b>”
* _<b>արժեի</b>&nbsp;_ “<b>go / am going</b>”

Past tense in Armenian consists of the imperfective, perfect, future and resultative participles accompanied by present or imperfect auxiliary verbs. If the auxiliary is in its present form, so it will have `Tense=Pres`.
The participle has `Tense=Past`, even though it can also be used to form present conditional.

Used in e.g. Bulgarian and Croatian, imperfect is a special case of the past tense. Note that, unfortunately, imperfect tense is not always the same as past tense + imperfective aspect. For instance, in Bulgarian, there is lexical aspect, inherent in verb meaning, and grammatical aspect, which does not necessarily always match the lexical one. In main clauses, imperfective verbs can have imperfect tense and perfective verbs have perfect tense. However, both rules can be violated in embedded clauses.

#### Examples

* _<b>Půjdu</b> domů.&nbsp;_ “I <b>will go</b> home.” (_Jít&nbsp;_ is an imperfective verb, phonological rule transformed the prefix
  _po-_ to _pů-._)
* _<b>Budu</b> přicházet domů.&nbsp;_ “I <b>will</b> be coming home.” (_Přicházet&nbsp;_ is an imperfective verb and it forms future periphrastically.)
