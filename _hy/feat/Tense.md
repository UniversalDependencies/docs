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

Tense is a feature that specifies the time when the action took /
takes / will take place, in relation to a reference point.
The reference is often the moment of producing the sentence,
but it can be also another event in the context.

Armenian has a complex tense/aspect/mood system.

Note, that we are defining features that apply to a single word. If a tense is constructed periphrastically (two words, e.g. auxiliary verb indicative + participle of the main verb), and none of the participating words are specific to this tense, then the features will probably not directly reveal the tense.

Actions that happened before, during, and after a past or present event are constructed in Armenian by using perfect, resultative, imperfective and future participles.

Note, that actions that happen before or during a future event are expressed using an auxiliary. Imperfect or present finite form of auxilariy in periphrastic future (accompanied by future participle of main verb) is tagged `Tense=Imp` or `Tense=Pres` accordingly, not `Tense=Fut`, while there will be an [aspect](Aspect) (`Aspect=Prosp`) information at the participle (e.g. _վազելու <b>էի</b> տուն&nbsp;_ “I <b>should</b> run home” or _վազելու <b>եմ</b> տուն&nbsp;_ “I <b>shall</b> run home”).

Note also, that there is an elaborate system of parallel tense/aspect/mood forms (traditionally called “secondary compound tenses”) formed periphrastically by forms of the auxiliary _լինեմ&nbsp;_ and the resultative, processual and future-I participles of the main verb. They express actions that happened before, during, and after past or present reference. For these periphrastical forms we use `Tense=Imp` or `Tense=Pres` with perfect (`Perf`), progressive (`Prog`) or prospective (`Prosp`) aspect.

### <a name="Past">`Past`</a>: past tense / aorist

The past tense denotes actions that happened before a reference point. The reference point is the moment of producing
the sentence and the (completed) past event happened before the speaker speaks about
it. In Armenian this is aorist.

#### Examples

* _նա <b>գնաց</b> տուն&nbsp;_ “he <b>went</b>.`Ind` home”,
* _եղա&nbsp;_ “I was.`Ind`”

### <a name="Imp">`Imp`</a>: imperfect

Imperfect is a special case of the past tense. It denotes actions that are happening during some past moment. These actions might continue after the moment of speaking, but also might not, i.e. the evidence is not in the form itself, but it is in the context.

Note, that a limited set of verbs (_գիտեմ, ունեմ, արժեմ_) form imperfect and present morphologically with unmarked vs. marked stems (traditionally called “Defective Verbs with Secondary Expanded Stems”). The difference between them are related also to [Mood]() and `Aspect` rather than `Tense`. The verbs with unmarked (“non-expanded”) stems will have `Tense=Imp` and `Tense=Pres` in indicative mood.

#### Examples

* _էի&nbsp;_ “I was.`Ind`”,
* _կայի&nbsp;_ “I was / existed.`Ind`”,
* _<b>գնայի</b> տուն&nbsp;_ “<b>I wish I went</b>.`Sub` home”,
* _<b>վազեի</b> տուն&nbsp;_ “<b>I wish I ran</b>.`Sub` home”,
* _<b>պիտի գնայի</b> տուն&nbsp;_ “<b>I should go</b>.`Nec` home”,
* _ունեի&nbsp;_ “I had”.`Ind`,
* _գիտեի&nbsp;_ “I knew”.`Ind`,
* _արժեի&nbsp;_ “I was worth.`Ind`”,
* _ունենայի&nbsp;_ “I wish I had.`Sub`”,
* _գիտենայի&nbsp;_ “I wish I knew.`Sub`”,
* _արժենայի&nbsp;_ “I wish I were worth.`Sub`”
* _լինեի&nbsp;_ “I wish I were.`Sub`”,

### <a name="Pres">`Pres`</a>: present tense

The present tense denotes actions that are in progress (or states that
are valid) in a reference point; it may also describe events that usually
happen. In the prototypical case, the reference point is the moment of producing
the sentence.

Present forms of verbs in subjunctive, conditional and necessitative moods have future meaning. These forms are tagged `Tense=Pres` not `Tense=Fut` as in traditional grammars.

#### Examples

* _եմ&nbsp;_ “I am.`Ind`”,
* _կամ&nbsp;_ “I am / exist.`Ind`”,
* _<b>գնամ</b> տուն&nbsp;_ “I'd better <b>go</b>.`Sub` home”,
* _<b>կգնամ</b> տուն&nbsp;_ “<b>I shall go</b>.`Cnd` home”,
* _<b>պիտի գնամ</b> տուն&nbsp;_ “<b>I must go</b>.`Nec` home”,
* _ունեմ&nbsp;_ “I have.`Ind`”,
* _գիտեմ&nbsp;_ “I know.`Ind`”,
* _արժեմ&nbsp;_ “I am worth.`Ind`”,
* _ունենամ&nbsp;_ “(if) I have.`Sub`”,
* _գիտենամ&nbsp;_ “(if) I know.`Sub`”,
* _արժենամ&nbsp;_ “(if) I am worth.`Sub`”
* _լինեմ&nbsp;_ “I am / I will be.`Sub`”,
<!-- Interlanguage links updated St lis 3 20:58:30 CET 2021 -->
