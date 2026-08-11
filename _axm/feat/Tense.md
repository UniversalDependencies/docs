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
The reference point is often the moment of producing the sentence, but it can be also another event in the context.

Middle Armenian has a complex tense/aspect/mood system.

Note that we are defining features that apply to a single word. If a tense is constructed periphrastically (two words, e.g. auxiliary verb indicative + participle of the main verb), and none of the participating words are specific to this tense, then the features will probably not directly reveal the tense.

In Middle Armenian, actions that occurred before, during, and after a past or present event are expressed by combining an auxiliary with perfect, resultative, imperfective and future participles.

In periphrastic future constructions, the finite auxiliary is annotated according to its morphological tense. Thus, a present or imperfect form of the auxiliary receives `Tense=Pres` or `Tense=Imp`, respectively, rather than `Tense=Fut`. Future reference is encoded by the prospective [aspect](Aspect) (`Aspect=Prosp`) of the participle (e.g. _<b>ասելոց է</b> ընդ մեզ_ “He <b>is going to talk</b> with us” or _հիւանդս աս <b>լաւնալու է</b>_ “this patient <b>will recover</b>”).

Note that Middle Armenian also has an elaborate system of parallel tense-aspect-mood forms, traditionally called “secondary compound tenses”, formed periphrastically with finite forms of the auxiliary _լինիմ_/_linim_, _ունիմ_/_ownim_, _կամ_/_kam_ and the resultative and perfect participles of the main verb. In these constructions, the auxiliary is annotated with `Tense=Pres` or `Tense=Imp`, while the participle carries the relevant aspectual feature `Aspect=Perf`.


### <a name="Past">`Past`</a>: past tense / aorist

The past tense denotes actions that happened before a reference point. The reference point is the moment of producing the sentence and the (completed) past event happened before the speaker speaks about it. In Middle Armenian, this is the aorist.

#### Examples

* _Հայնչաք <b>խմեց</b>, որ <b>խումրեցաւ</b>_/_haynčak’ xmec’, or xowmrec’aw_ “he <b>drank</b>`Ind` so mauch that <b>got drunk</b> `Ind`”,
* _եղայ_/_eġay_ “I was `Ind`”,
* _կալաւ_/_kalaw_ “He/she had `Ind`”

### <a name="Imp">`Imp`</a>: imperfect

Imperfect is a special case of the past tense. It denotes actions that are happening during some past moment. These actions might continue after the moment of speaking, but also might not, i.e. the evidence is not in the form itself, but it is in the context.

Note that a limited set of verbs (_գիտեմ_/_gitem_, _ունիմ_/_ownim_) form imperfect and present morphologically with unmarked vs. marked stems (traditionally called “Defective Verbs with Secondary Expanded Stems”). The difference between them is related also to [Mood]() and `Aspect` rather than `Tense`. The verbs with unmarked (“non-expanded”) stems will have `Tense=Imp` and `Tense=Pres` in indicative mood.

#### Examples

* _էի_/_ēi_ “I was `Ind`”,
* _կայի_/_kayi_ “I was / existed `Ind`”,
* _մտնուի_/_mtnowi_ “I wish I entered `Sub`”,
* _գրէի_/_grēi_ “I wish I wrote `Sub`”,
* _տի բերէր_/_ti berēr_ “he should bring `Nec`”,
* _ունեի_/_ownei_ “I had” `Ind`,
* _գիտեի_/_gitei_ “I knew” `Ind`,
* _ունենայի_/_ownenayi_ “I wish I had `Sub`”,
* _գիտնայի_/_gitnayi_ “I wish I knew `Sub`”


### <a name="Pres">`Pres`</a>: present tense

The present tense denotes actions that are in progress (or states that are valid) in a reference point; it may also describe events that usually happen. In the prototypical case, the reference point is the moment of producing the sentence.

Present-tense forms in the subjunctive, conditional, and necessitative moods may have future reference. They are nevertheless annotated with `Tense=Pres`, rather than `Tense=Fut`, in accordance with their morphological form.

#### Examples

* _եմ_/_em_ “I am `Ind`”,
* _կամ_/_kam_ “I am / exist `Ind`”,
* _մտնում_/_mtnowm_ “I'd better enter `Sub`”,
* _կու գնամ_/_kow gnam_ “I shall go `Ind`, `Cnd`”,
* _տի բերեմ_/_ti berem_ “I must/will bring `Nec`”,
* _ունեմ_/_ownem_ “I have `Ind`”,
* _գիտեմ_/_gitem_ “I know `Ind`”,
* _ունենամ_/_ownenam_ “(if) I have `Sub`”,
* _գիտնամ_/_gitnam_ “(if) I know `Sub`”,
<!-- Interlanguage links updated Út 30. června 2026, 10:59:20 CEST -->
