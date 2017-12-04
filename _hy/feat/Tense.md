---
layout: feature
title: 'Tense'
shortdef: 'tense'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
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

Note, that we are defining features that apply to a single word. If a tense is constructed periphrastically (two words, e.g. auxiliary verb indicative + participle of the main verb), and none of the participating words are specific to this tense, then the features will probably not directly reveal the tense.

Actions that happened before, during, and after a past or present event are constructed in Armenian by using perfect, resultative, imperfective and future participles.

Actions that happen before or during a future event is expressed using an auxiliary. Imperfect or present finite form of auxilariy in periphrastic future (accompanied by future participle of main verb) is tagged `Tense=Imp` or `Tense=Pres` accordingly, not `Tense=Fut`, while there will be a tense / aspect (`Aspect=Prosp`) information at the participle (e.g. _<b>Վազելու</b> էի տուն։&nbsp;_ “<b></b>”, _<b>Վազելու</b> եմ տուն։&nbsp;_ “<b></b>”).

Note also, that there is an elaborate system of parallel tense/aspect/mood forms (traditionally called “secondary compound tenses”) formed periphrastically by forms of the auxiliary _լինեմ&nbsp;_ and the resultative, processual and future participles of the main verb. They expressing actions that happened before, during, and after past or present reference. For these periphrastically forms we use `Tense=Imp` or `Tense=Pres` with proper perfect (`Perf`) habitual (`Hab`) or progressive (`Prog`) `Aspect`.

### <a name="Past">`Past`</a>: past tense / preterite / aorist

The past tense denotes actions that happened before the current
moment, a (completed) past event. In Armenian this is aorist.

#### Examples

* _Նա <b>գնաց</b> տուն։&nbsp;_ “He <b>went</b>.`Ind` home.”

### <a name="Imp">`Imp`</a>: imperfect

Imperfect is a special case of the past tense. It denotes actions that are happening during some past moment. These actions might continue after the moment of speaking, but also might not, i.e. the evidence is not in the form itself, but it is in the context.

The auxiliaries _եմ&nbsp;_ and _կամ&nbsp;_ will have `Tense=Imp`.

Note, that a limited set of verbs form imperfect and present morphologically with “non-expanded” vs. “expanded” stems (traditionally called “Defective Verbs with Secondary Expanded Stems”). The difference between these forms are related to `Mood` or `Aspect` rather than `Tense`. Both stems refer to a present / past event. There will be an `Aspect=Prog` information at the expanded stems. See the related feature [Aspect]().

#### Examples

* _<b>էի</b>&nbsp;_ “<b></b>”.`Ind`,
* _<b>կայի</b>&nbsp;_ “<b></b>”.`Ind`,
* _<b>Գնայի</b> տուն։&nbsp;_ “<b></b>.`Sub`,
* _<b>Վազեի</b> տուն։&nbsp;_ “<b></b>.`Sub`,
* _Պիտի <b>գնայի</b> տուն։&nbsp;_ “<b></b>”.`Nec`,
* _<b>ունեի</b>&nbsp;_ “<b></b>”.`Ind`,
* _<b>գիտեի</b>&nbsp;_ “<b></b>”.`Ind`,
* _<b>արժեի</b>&nbsp;_ “<b></b>”.`Ind`,
* _<b>ունենայի</b>&nbsp;_ “<b></b>”.`Sub`,
* _<b>գիտենայի</b>&nbsp;_ “<b></b>”.`Sub`,
* _<b>արժենայի</b>&nbsp;_ “<b></b>”.`Sub`

### <a name="Pres">`Pres`</a>: present tense

The present tense denotes actions that are happening right now or that
usually happen.

The auxiliaries _եմ&nbsp;_ and _կամ&nbsp;_ will have `Tense=Pres`.

Present forms of verbs in subjunctive, conditional and necessitative moods have future meaning. These forms are tagged `Tense=Pres` or `Tense=Past` not `Tense=Fut` as in traditional grammars.

The remaining verbs with “secondary expanded stems” (see above) will have also `Tense=Pres`.

#### Examples

* _<b>եմ</b>&nbsp;_ “<b></b>”.`Ind`,
* _<b>կամ</b>&nbsp;_ “<b></b>”.`Ind`,
* _<b>Գնամ</b> տուն։&nbsp;_ “<b></b>”.`Sub`,
* _<b>Կգնամ</b> տուն։&nbsp;_ “<b></b>”.`Cnd`,
* _Պիտի <b>գնամ</b> տուն։&nbsp;_ “<b></b>”.`Nec`,
* _<b>ունեմ</b>&nbsp;_ “<b></b>”.`Ind`,
* _<b>գիտեմ</b>&nbsp;_ “<b></b>”.`Ind`,
* _<b>արժեմ</b>&nbsp;_ “<b></b>”.`Ind`,
* _<b>ունենամ</b>&nbsp;_ “<b></b>”.`Sub`,
* _<b>գիտենամ</b>&nbsp;_ “<b></b>”.`Sub`,
* _<b>արժենամ</b>&nbsp;_ “<b></b>”.`Sub`
