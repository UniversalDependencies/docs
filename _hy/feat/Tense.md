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
  
</tr>
</table>

Tense is a feature that specifies the time when the action took / takes / will take place, in relation to a reference point.
The reference point is often the moment of producing the sentence, but it can also be another event in the context.

Armenian has a complex tense/aspect/mood system.

Note that we are defining features that apply to a single word. If a tense is constructed periphrastically (two words, e.g. auxiliary verb indicative + participle of the main verb), and none of the participating words are specific to this tense, then the features will probably not directly reveal the tense.

Actions that happen before, during, and after a past or present event are constructed in Armenian by combining an auxiliary with perfect, resultative, imperfective and future participles.

In periphrastic future constructions, the finite auxiliary is annotated according to its morphological tense. Thus, a present or imperfect form of the auxiliary receives `Tense=Pres` or `Tense=Imp`, respectively, rather than `Tense=Fut`. Future reference is encoded by the prospective [aspect](Aspect) (`Aspect=Prosp`) of the participle (e.g. _վազելու <b>էի</b> տուն_/_vazelow <b>ēi</b> town_ “I <b>should</b> run home” or _վազելու <b>եմ</b> տուն_/_vazelow <b>em</b> town_ “I <b>shall</b> run home”).

Note that Armenian also has an elaborate system of parallel tense-aspect-mood forms, traditionally called “secondary compound tenses”, formed periphrastically with finite forms of the auxiliary _լինեմ_/_linem_ and the resultative, processual and future-I participles of the main verb. In these constructions, the auxiliary is annotated with `Tense=Pres` or `Tense=Imp`, while the participle carries the relevant aspectual feature, such as `Aspect=Perf`, `Aspect=Prog`, or `Aspect=Prosp`.

### <a name="Past">`Past`</a>: past tense / aorist

The past tense denotes actions that happened before a reference point. The reference point is the moment of producing the sentence and the (completed) past event happened before the speaker speaks about it. In Armenian, this is the aorist.

#### Examples

* _նա <b>գնաց</b> տուն_/_na <b>gnacʼ</b> town_ “he <b>went</b> `Ind` home”,
* _եղա_/_eġa_ “I was `Ind`”

### <a name="Imp">`Imp`</a>: imperfect

Imperfect is a special case of the past tense. It denotes actions that are happening during some past moment. These actions might continue after the moment of speaking, but also might not, i.e. the evidence is not in the form itself, but it is in the context.

Note that a limited set of verbs (_գիտեմ_/_gitem_, _ունեմ_/_ownem_, _արժեմ_/_aržem_) form imperfect and present morphologically with unmarked vs. marked stems (traditionally called “Defective Verbs with Secondary Expanded Stems”). The difference between them is related also to [Mood]() and `Aspect` rather than `Tense`. The verbs with unmarked (“non-expanded”) stems will have `Tense=Imp` and `Tense=Pres` in indicative mood.

#### Examples

* _էի_/_ēi_ “I was `Ind`”,
* _կայի_/_kayi_ “I was / existed `Ind`”,
* _<b>գնայի</b> տուն_/_<b>gnayi</b> town_ “<b>I wish I went</b> `Sub` home”,
* _<b>վազեի</b> տուն_/_<b>vazei</b> town_ “<b>I wish I ran</b> `Sub` home”,
* _<b>պիտի գնայի</b> տուն_/_<b>piti gnayi</b> town_ “<b>I should go</b> `Nec` home”,
* _ունեի_/_ownei_ “I had” `Ind`,
* _գիտեի_/_gitei_ “I knew” `Ind`,
* _արժեի_/_aržei_ “I was worth `Ind`”,
* _ունենայի_/_ownenayi_ “I wish I had `Sub`”,
* _գիտենայի_/_gitenayi_ “I wish I knew `Sub`”,
* _արժենայի_/_arženayi_ “I wish I were worth `Sub`”
* _լինեի_/_linei_ “I wish I were `Sub`”,

### <a name="Pres">`Pres`</a>: present tense

The present tense denotes actions that are in progress (or states that are valid) at a reference point; it may also describe events that usually happen. In the prototypical case, the reference point is the moment of producing the sentence.

Present-tense forms in the subjunctive, conditional, and necessitative moods may have future reference. They are nevertheless annotated with `Tense=Pres`, rather than `Tense=Fut`, in accordance with their morphological form.

#### Examples

* _եմ_/_em_ “I am `Ind`”,
* _կամ_/_kam_ “I am / exist `Ind`”,
* _<b>գնամ</b> տուն_/_<b>gnam</b> town_ “I'd better <b>go</b> `Sub` home”,
* _<b>կգնամ</b> տուն_/_<b>kgnam</b> town_ “<b>I shall go</b> `Cnd` home”,
* _<b>պիտի գնամ</b> տուն_/_<b>piti gnam</b> town_ “<b>I must go</b> `Nec` home”,
* _ունեմ_/_ownem_ “I have `Ind`”,
* _գիտեմ_/_gitem_ “I know `Ind`”,
* _արժեմ_/_aržem_ “I am worth `Ind`”,
* _ունենամ_/_ownenam_ “(if) I have `Sub`”,
* _գիտենամ_/_gitenam_ “(if) I know `Sub`”,
* _արժենամ_/_arženam_ “(if) I am worth `Sub`”
* _լինեմ_/_linem_ “I am / I will be `Sub`”.
<!-- Interlanguage links updated Út 30. června 2026, 10:59:20 CEST -->
