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

Western Armenian has a complex tense/aspect/mood system.

Note that we are defining features that apply to a single word. If a tense is constructed periphrastically (two words, e.g. auxiliary verb indicative + participle of the main verb), and none of the participating words are specific to this tense, then the features will probably not directly reveal the tense.

In Western Armenian, actions that happen before and after a past or present event are constructed by combining the auxiliary _եմ_/_em_ “be” with perfect, resultative, and future participles.

In periphrastic future constructions, future reference is encoded by the aspectual auxiliary _պիտի_/_piti_, which has prospective [aspect](Aspect) (`Aspect=Prosp`). The main verb is in the subjunctive mood and is annotated with `Tense=Pres` or `Tense=Imp`, depending on its morphological form (e.g. _պիտի գայ_/_piti gay_ “he/she will come” or _պիտի գար_/_piti gar_ “he/she would come”).

Note that Western Armenian also has an elaborate system of parallel tense-aspect-mood forms, traditionally called “secondary compound tenses”, formed periphrastically with finite forms of the auxiliary _ըլլամ_/_ëllam_ and the resultative and future participles of the main verb. In these constructions, the auxiliary is annotated with `Tense=Pres` or `Tense=Imp`, while the participle carries the relevant aspectual feature, such as `Aspect=Perf` or `Aspect=Prosp`.

### <a name="Past">`Past`</a>: past tense / aorist

The past tense denotes actions that happened before a reference point. The reference point is the moment of producing the sentence and the (completed) past event happened before the speaker speaks about it. In Armenian, this is the aorist.

#### Examples

* _հրաւէր մը <b>ստացայ</b>_/_hrawēr më <b>stacʼay</b>_ “I <b>received</b> `Ind` an invitation”,
* _եղայ_/_eġay_ “I was `Ind`”

### <a name="Imp">`Imp`</a>: imperfect

Imperfect is a special case of the past tense. It denotes actions that are happening during some past moment. These actions might continue after the moment of speaking, but also might not, i.e. the evidence is not in the form itself, but it is in the context.

Note that a limited set of verbs (_գիտեմ_/_gitem_, _ունիմ_/_ownim_, _կրնամ_/_krnam_) form imperfect and present morphologically with unmarked vs. marked stems (traditionally called “Defective Verbs with Secondary Expanded Stems”). The difference between them is related also to [Mood]() and `Aspect` rather than `Tense`. The verbs with unmarked (“non-expanded”) stems will have `Tense=Imp` and `Tense=Pres` in indicative mood.

#### Examples

* _էի_/_ēi_ “I was `Ind`”,
* _կայի_/_kayi_ “I was / existed `Ind`”,
* _<b>երթայի</b> տուն_/_<b>ertʼayi</b> town_ “(if) <b>I went</b> `Sub` home”,
* _<b>վազէի</b> տուն_/_<b>vazēi</b> town_ “(if) <b>I ran</b> `Sub` home”,
* _ունէի_/_ownēi_ “I had” `Ind`,
* _գիտէի_/_gitēi_ “I knew” `Ind`,
* _կրնայի_/_krnayi_ “I could” `Ind`,
* _ունենայի_/_ownenayi_ “(if) I had `Sub`”,
* _գիտնայի_/_gitnayi_ “(if) I knew `Sub`”,
* _կարենայի_/_karenayi_  “(if) I could `Sub`”,
* _ըլլայի_/_ëllayi_ “(if) I was `Sub`”.

### <a name="Pres">`Pres`</a>: present tense

The present tense denotes actions that are in progress (or states that are valid) at a reference point; it may also describe events that usually happen. In the prototypical case, the reference point is the moment of producing the sentence.

Present-tense forms in the subjunctive mood may have future reference. They are nevertheless annotated with `Tense=Pres`, rather than `Tense=Fut`, in accordance with their morphological form.

#### Examples

* _եմ_/_em_ “I am `Ind`”,
* _կամ_/_kam_ “I am / exist `Ind`”,
* _երթամ տուն_/_ertʼam town_ “(if) <b>I go</b> `Sub` home”,
* _ունիմ_/_ownim_ “I have `Ind`”,
* _գիտեմ_/_gitem_ “I know `Ind`”,
* _կրնամ_/_krnam_ “I can `Ind`”,
* _ունենամ_/_ownenam_ “(if) I have `Sub`”,
* _գիտնամ_/_gitnam_ “(if) I know `Sub`”,
* _կարենամ_/_karenam_ “(if) I can `Sub`”,
* _ըլլամ_/_ëllam_ “I am / I will be `Sub`”.
<!-- Interlanguage links updated Út 30. června 2026, 10:59:20 CEST -->
