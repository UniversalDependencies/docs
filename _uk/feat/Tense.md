---
layout: feature
title: 'Tense'
shortdef: 'tense'
udver: '2'
---

Tense is a feature that specifies the time when the action took / takes / will take place, in relation to the current moment or to another action in the utterance.

### <a name="Past">`Past`</a>: past tense

The past tense denotes actions that happened before the current moment. Past tense in Ukrainian is expressed by a special past form, historically derived from the past participle (also called active participle or l-participle -- which is why past is the only tense that also varies in gender). In the pre-past version of the past tense the same form is accompanied by a past auxiliary verb. The past tense form can also be used to form present (or past, depending on the tense of the auxiliary verb) conditional. Since both pre-past and conditionals are formed analytically, they do not receive any morphological tags.

#### Examples

* _Я <b>пішов</b> додому.&nbsp;_ “I`Masc` have <b>gone</b> home.”
* _Я <b>пішла</b> додому.&nbsp;_ “I`Fem` have <b>gone</b> home.”
* _Я <b>пішло</b> додому.&nbsp;_ “I`Neut` have <b>gone</b> home.”
* _Ти <b>пішов</b> додому.&nbsp;_ “You`Masc` have <b>gone</b> home.”
* _Ти <b>пішла</b> додому.&nbsp;_ “You`Fem` have <b>gone</b> home.”
* _Ти <b>пішло</b> додому.&nbsp;_ “You`Neut` have <b>gone</b> home.”
* _Він <b>пішов</b> додому.&nbsp;_ “He has <b>gone</b> home.”
* _Вона <b>пішла</b> додому.&nbsp;_ “She has <b>gone</b> home.”
* _Воно <b>пішло</b> додому.&nbsp;_ “It has <b>gone</b> home.”

### <a name="Pres">`Pres`</a>: present tense

The present tense denotes actions that are happening right now or that usually happen. Only imperfective verbs can have present forms in Ukrainian. Morphologically present forms of perfective verbs have actually a future meaning and are marked `Tense=Fut`, see the last example below.

#### Examples

* _<b>Ходжу</b> додому.&nbsp;_ “I <b>come</b> home.” (_Ходити&nbsp;_ is an imperfective verb.)
* _<b>Приходжу</b> додому.&nbsp;_ “I <b>keep/am coming</b> home.” (_Приходити&nbsp;_ is an imperfective verb.)
* _<b>Йду</b> додому.&nbsp;_ “I <b>go / am going</b> home.” (_Йти&nbsp;_ is an imperfective verb.)
* _<b>Прийду</b> додому.&nbsp;_ “I <b>will come</b> home.” (_Прийти&nbsp;_ is a perfective verb and it has a future meaning on the contrary to the imperfective forms above.)

### <a name="Fut">`Fut`</a>: future tense

The future tense denotes actions that will happen after the current moment. It is formed in Ukrainian in one of three ways, partly depending on the aspect of the verb:

* Perfective verbs use present declension patterns to form future tense.
* The verb _бути&nbsp;_ “to be” has a set of distinct future forms. They combine a future stem _буд-&nbsp;_ with present endings.
  Although these forms are morphologically very close to the present forms, they are tagged `Tense=Fut` because the same lemma has also present forms and the feature must distinguish the two.
* Synthetic future forms are one of distinctive features of Ukrainian among other Slavic languages. They use the infinitive stem and endings being historically shortened future forms of the auxiliary verb _мати&nbsp;_“to have”. The future synthetic forms of _мати&nbsp;_“to have”: _матиму,&nbsp; матимеш,&nbsp; матиме,&nbsp;_ _матимемо,&nbsp;_ _матимете,&nbsp;_ _матимуть.&nbsp;_ The future synthetic forms of _робити&nbsp;_ “to do”: _робитиму,&nbsp;_ _робитимеш,&nbsp;_ _робитиме,&nbsp;_ _робитимемо,&nbsp;_ _робитимете,&nbsp;_ _робитимуть._
* Note that all the imperfective Ukrainian verbs, with the exception of _бути_&nbsp; “to be” itself, can also form a periphrastic future, consisting of the future form of the auxiliary бути,&nbsp;_ and the infinitive of the content verb. Only the auxiliary will have `Tense=Fut`, while there will be no tense information at the infinitive.

#### Examples

* _<b>Прийду</b> додому.&nbsp;_ “I <b>will come</b> home.” (_Прийти&nbsp;_ is a perfective verb.)
* _<b>Йтиму</b> додому.&nbsp;_ “I <b>will</b> be coming home.” (_Йти&nbsp;_ is an imperfective verb, here the syntheic future form is used.)
* _<b>Буду</b> йти додому.&nbsp;_ “I <b>will</b> be coming home.” (_Йти&nbsp;_ is an imperfective verb, the future tense is formed periphrastically here.)


<!-- Interlanguage links updated Čt lis 12 09:43:07 CET 2020 -->
