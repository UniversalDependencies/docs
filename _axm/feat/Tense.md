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
The reference is often the moment of producing the sentence, but it can be also another event in the context.

Middle Armenian has a complex tense/aspect/mood system.

Note, that we are defining features that apply to a single word. If a tense is constructed periphrastically (two words, e.g. auxiliary verb indicative + participle of the main verb), and none of the participating words are specific to this tense, then the features will probably not directly reveal the tense.

In Middle Armenian, actions that occurred before, during, and after a past or present event are expressed using perfect, resultative, and future participles.

Note that actions that happen before or during a future event are expressed using an auxiliary. Imperfect or present finite form of auxiliary in periphrastic future (accompanied by future participle of main verb) is tagged `Tense=Imp` or `Tense=Pres` accordingly, not `Tense=Fut`, while there will be an [aspect](Aspect) (`Aspect=Prosp`) information at the participle (e.g. _<b>ասելոց է</b> ընդ մեզ_ “He <b>is going to talk</b> with us” or _հիւանդս աս <b>լաւնալու է</b>_ “this patient <b>will recover</b>”).

Note also that there is an elaborate system of parallel tense/aspect/mood forms (traditionally called “secondary compound tenses”) which are formed periphrastically using forms of the auxiliaries _լինիմ, ունիմ, կամ_ and the resultative and perfect participles of the main verb. These forms are used to express actions that happened before past or present reference. For these periphrastical forms we use `Tense=Imp` or `Tense=Pres` with perfect (`Perf`) aspect.

### <a name="Past">`Past`</a>: past tense / aorist

The past tense denotes actions that happened before a reference point. The reference point is the moment of producing the sentence and the (completed) past event happened before the speaker speaks about it. In Middle Armenian this is aorist.

#### Examples

* _Հայնչաք <b>խմեց</b>, որ <b>խումրեցաւ</b>/haynčak’ xmec’, or xowmrec’aw_ “he <b>drank</b>`Ind` so mauch that <b>got drunk</b> `Ind`”,
* _եղայ/eġay_ “I was.`Ind`”,
* _կալաւ/kalaw_ “He/she had.`Ind`”

### <a name="Imp">`Imp`</a>: imperfect

Imperfect is a special case of the past tense. It denotes actions that are happening during some past moment. These actions might continue after the moment of speaking, but also might not, i.e. the evidence is not in the form itself, but it is in the context.

Note, that a limited set of verbs (_գիտեմ, ունիմ_) form imperfect and present morphologically with unmarked vs. marked stems (traditionally called “Defective Verbs with Secondary Expanded Stems”). The difference between them are related also to [Mood]() and `Aspect` rather than `Tense`. The verbs with unmarked (“non-expanded”) stems will have `Tense=Imp` and `Tense=Pres` in indicative mood.

#### Examples

* _էի/ēi_ “I was.`Ind`”,
* _կայի/kayi_ “I was / existed.`Ind`”,
* _մտնուի/mtnowi_ “I wish I entered.`Sub`”,
* _գրէի/grēi_ “I wish I wrote.`Sub`”,
* _տի բերէր/ti berēr_ “he should bring.`Nec`”,
* _ունեի/ownei_ “I had”.`Ind`,
* _գիտեի/gitei_ “I knew”.`Ind`,
* _ունենայի/ownenayi_ “I wish I had.`Sub`”,
* _գիտնայի/gitnayi_ “I wish I knew.`Sub`”


### <a name="Pres">`Pres`</a>: present tense

The present tense denotes actions that are in progress (or states that are valid) in a reference point; it may also describe events that usually
happen. In the prototypical case, the reference point is the moment of producing the sentence.

Present forms of verbs in subjunctive, conditional and necessitative moods have future meaning. These forms are tagged `Tense=Pres` not `Tense=Fut` as in traditional grammars.

#### Examples

* _եմ/em_ “I am.`Ind`”,
* _կամ/kam_ “I am / exist.`Ind`”,
* _մտնում/mtnowm_ “I'd better enter.`Sub`”,
* _կու գնամ/kow gnam_ “I shall go.`Cnd`”,
* _տի բերեմ/ti berem_ “I must/will bring.`Nec`”,
* _ունեմ/ownem_ “I have.`Ind`”,
* _գիտեմ/gitem_ “I know.`Ind`”,
* _ունենամ/ownenam_ “(if) I have.`Sub`”,
* _գիտնամ/gitnam_ “(if) I know.`Sub`”,
<!-- Interlanguage links updated St 12. listopadu 2025, 09:20:50 CET -->
