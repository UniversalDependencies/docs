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

* _Նա <b>գնաց</b> տուն։&nbsp;_ “He <b>went</b>.`Ind` home.”

### <a name="Pres">`Pres`</a>: present tense

The present tense denotes actions that are happening right now or that
usually happen.

The auxiliaries _եմ&nbsp;_ and _կամ&nbsp;_ will have `Tense=Pres`.

Note, that in Armenian a limited set of verbs (traditionally calles “Defective Verbs with Secondary Expanded Stems”) can form present morphologically, without the auxiliary. They combine a present “non-expanded” stem with future personal suffixes. The future forms are formed as the present form with the expanded stems. Because the same lemma has also present forms and the feature must distinguish the two.

#### Examples

* _<b>եմ</b>&nbsp;_ “<b></b>”.`Ind`,
* _<b>կամ</b>&nbsp;_ “<b></b>”.`Ind`,
* _<b>ունեմ</b>&nbsp;_ “<b></b>”.`Ind`,
* _<b>գիտեմ</b>&nbsp;_ “<b></b>”.`Ind`,
* _<b>արժեմ</b>&nbsp;_ “<b></b>”.`Ind`

### <a name="Fut">`Fut`</a>: future tense

The future tense denotes actions that will happen after the current
moment. Future tense in Armenian is formed in one of three ways: 

* This feature is used for verbs in subjunctive, conditional, necessitative moods, marked by personal suffixes.
* The remaining defective verbs (see above) with “secondary expanded stems” will have also `Tense=Fut`.
* The actions that happen before or during a future event is expressed using an auxiliary. Imperfect or present finite form of auxilariy in periphrastic future forms (accompanied by future participle of lexical verbs) is tagged `Tense=Imp` or `Tense=Pres` accordingly, not `Tense=Fut`, while there will be a tense information at the participle.

#### Examples

* _<b>գնամ</b>&nbsp;_ “<b></b>”.`Sub`,
* _<b>կգնամ</b>&nbsp;_ “<b></b>”.`Cnd`,
* _<b>պիտի գնամ</b>&nbsp;_ “<b></b>”.`Nec`,
* _<b>ունենամ</b>&nbsp;_ “<b></b>”.`Sub`,
* _<b>գիտենամ</b>&nbsp;_ “<b></b>”.`Sub`,
* _<b>արժենամ</b>&nbsp;_ “<b></b>”.`Sub`,
* _<b>վազելու</b> էի&nbsp;_ “<b></b>”,
* _<b>վազելու</b> եմ&nbsp;_ “<b></b>”

### <a name="Imp">`Imp`</a>: imperfect

Imperfect is a special case of the past tense. It denotes actions that are happening during some past moment. These actions might continue after the moment of speaking, but also might not, i.e. the evidence is not in the form itself, but it is in the context.

Note, that in Armenian imperfect is a special case of the past tense for auxilaries and for the verbs, that form present morphologically.

#### Examples

* _<b>գնայի</b>&nbsp;_ “<b></b>.`Sub`,
* _<b>վազեի</b>&nbsp;_ “<b></b>.`Sub`,
* _<b>էի</b>&nbsp;_ “<b></b>”.`Ind`,
* _<b>կայի</b>&nbsp;_ “<b></b>”.`Ind`,
* _<b>ունեի</b>&nbsp;_ “<b></b>”.`Ind`,
* _<b>գիտեի</b>&nbsp;_ “<b></b>”.`Ind`,
* _<b>արժեի</b>&nbsp;_ “<b></b>”.`Ind`,
* _<b>ունենայի</b>&nbsp;_ “<b></b>”.`Sub`,
* _<b>գիտենայի</b>&nbsp;_ “<b></b>”.`Sub`,
* _<b>արժենայի</b>&nbsp;_ “<b></b>”.`Sub`
