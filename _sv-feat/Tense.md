---
layout: feature
title: 'Tense'
shortdef: 'tense'
---

The `Tense` feature applies to verbs ([VERB]() and [AUX]()), specifying the time when the action took / takes place, in relation to the current moment or to another action in the utterance.

Note that we are defining features that apply to a single word. If a tense is constructed periphrastically (two or more words, e.g. auxiliary verb indicative + supine of the main verb) and none of the participating words are specific to this tense, then the features will not directly reveal the tense. For instance, [sv] _Jag <b>hade varit</b> där_ "I <b>had been</b> there" is past perfect (pluperfect) tense, formed periphrastically by the simple past tense of the auxiliary _att ha_ "to have" and the supine form of the main verb _att vara_ "to be". The auxiliary will be tagged `VerbForm=Fin|Mood=Ind|Tense=Past` and the participle will have `VerbForm=Sup|Tense=Past`; neither of the two will have `Tense=Pqp`, which is only used in languages where this tense can be directly represented morphologically on the verb.

### `Pres`: present tense

The present tense denotes actions that are happening right now or that usually happen.

#### Examples

* [sv] _hon <b>säger</b> saker_ "she <b>says</b> things"
* [sv] _det <b>blir</b> svårare_ "it <b>becomes</b> more difficult"

### `Past`: preterite

The past tense denotes actions that happened before the current moment. It can also be used in secondary clauses to express a wish or something that is not reality.

#### Examples

* [sv] _innan stadskulturen <b>började</b>_ "before urban culture <b>began</b>"
* [sv] _han önskar att han <b>var</b> i Spanien_ "he wishes that he <b>were</b> in Spain"

