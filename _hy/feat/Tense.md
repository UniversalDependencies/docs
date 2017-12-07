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

Actions that happen before or during a future event are expressed using an auxiliary. Imperfect or present finite form of auxilariy in periphrastic future (accompanied by future participle of main verb) is tagged `Tense=Imp` or `Tense=Pres` accordingly, not `Tense=Fut`, while there will be a aspect (`Aspect=Prosp`) information at the participle (e.g. _<b>վազելու</b> էի տուն&nbsp;_ “I <b>should run</b> home” or _<b>վազելու</b> եմ տուն&nbsp;_ “I <b>shall run</b> home”).

Note also, that there is an elaborate system of parallel tense/aspect/mood forms (traditionally called “secondary compound tenses”) formed periphrastically by forms of the auxiliary _լինեմ&nbsp;_ and the resultative, processual and future participles of the main verb. They express actions that happened before, during, and after past or present reference. For these periphrastical forms we use `Tense=Imp`, `Tense=Imp` or `Tense=Pres` with perfect (`Perf`), imperfect (`Imp`) or prospective (`Prosp`) `Aspect`.

### <a name="Past">`Past`</a>: past tense / preterite / aorist

The past tense denotes actions that happened before the current
moment, a (completed) past event. In Armenian this is aorist.

#### Examples

* _նա <b>գնաց</b> տուն&nbsp;_ “he <b>went</b>.`Ind` home”

### <a name="Imp">`Imp`</a>: imperfect

Imperfect is a special case of the past tense. It denotes actions that are happening during some past moment. These actions might continue after the moment of speaking, but also might not, i.e. the evidence is not in the form itself, but it is in the context.

The auxiliaries _էի&nbsp;_ and _կայի&nbsp;_ will have `Tense=Imp`.

Note, that a limited set of verbs form imperfect and present morphologically with “non-expanded” vs. “expanded” stems (traditionally called “Defective Verbs with Secondary Expanded Stems”). The difference between these forms are related to `Mood` or `Aspect` rather than `Tense`. Both stems refer to a past / present event.

#### Examples

* _<b>էի</b>&nbsp;_ “<b>I was</b>.`Ind`”,
* _<b>կայի</b>&nbsp;_ “<b>I was / existed</b>.`Ind`”,
* _<b>գնայի</b> տուն&nbsp;_ “<b>I wish I went</b>.`Sub` home”,
* _<b>վազեի</b> տուն&nbsp;_ “<b>I wish I ran</b>.`Sub` home”,
* _պիտի <b>գնայի</b> տուն&nbsp;_ “<b>I should go</b>.`Nec` home”,
* _<b>ունեի</b>&nbsp;_ “<b>I had</b>”.`Ind`,
* _<b>գիտեի</b>&nbsp;_ “<b>I knew</b>”.`Ind`,
* _<b>արժեի</b>&nbsp;_ “<b>I was worth</b>.`Ind`”,
* _<b>ունենայի</b>&nbsp;_ “<b>I wish I had</b>.`Sub`”,
* _<b>գիտենայի</b>&nbsp;_ “<b>I wish I knew</b>.`Sub`”,
* _<b>արժենայի</b>&nbsp;_ “<b>I wish I were worth</b>.`Sub`”

### <a name="Pres">`Pres`</a>: present tense

The present tense denotes actions that are happening right now or that
usually happen.

The auxiliaries _եմ&nbsp;_ and _կամ&nbsp;_ will have `Tense=Pres`.

Present forms of verbs in subjunctive, conditional and necessitative moods have future meaning. These forms are tagged `Tense=Pres` not `Tense=Fut` as in traditional grammars.

The remaining verbs with “secondary expanded stems” (see above) will have also `Tense=Pres`.

#### Examples

* _<b>եմ</b>&nbsp;_ “<b>I am</b>.`Ind`”,
* _<b>կամ</b>&nbsp;_ “<b>I am / exist</b>.`Ind`”,
* _<b>գնամ</b> տուն&nbsp;_ “I'd better <b>go</b>.`Sub` home”,
* _<b>կգնամ</b> տուն&nbsp;_ “<b>I shall go</b>.`Cnd` home”,
* _պիտի <b>գնամ</b> տուն&nbsp;_ “I must <b>go</b>.`Nec` home”,
* _<b>ունեմ</b>&nbsp;_ “<b>I have</b>.`Ind`”,
* _<b>գիտեմ</b>&nbsp;_ “<b>I know</b>.`Ind`”,
* _<b>արժեմ</b>&nbsp;_ “<b>I am worth</b>.`Ind`”,
* _<b>ունենամ</b>&nbsp;_ “(if) <b>I have</b>.`Sub`”,
* _<b>գիտենամ</b>&nbsp;_ “(if) <b>I know</b>.`Sub`”,
* _<b>արժենամ</b>&nbsp;_ “(if) <b>I am worth</b>.`Sub`”
