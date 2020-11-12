---
layout: feature
title: 'Tense'
shortdef: 'tense'
---

Tense is a feature that specifies the time when the action took /
takes / will take place, in relation to the current moment or to
another action in the utterance.

### `Past`: past tense

The past tense denotes actions that happened before the current
moment. Past tense in Czech consists of the past participle
(also called active participle or l-participle),
which is accompanied by a present auxiliary verb in the first and second persons,
and stands alone in the third person.

The auxiliary (if any) is in its present form, so it will have `Tense=Pres`.
The participle has `Tense=Past`, even though it can also be used to form present conditional.

#### Examples

* _Я <b>ушёл</b> домой.&nbsp;_ “I have <b>gone</b> home.”
* _Ты <b>ушёл</b> домой.&nbsp;_ “You have <b>gone</b> home.”
* _Он <b>ушёл</b> домой.&nbsp;_ “He has <b>gone</b> home.”

### `Pres`: present tense

The present tense denotes actions that are happening right now or that
usually happen.

Note that morphologically present forms of perfective verbs have actually a future meaning
but they will still be marked `Tense=Pres`.

#### Examples

* _<b>Прихожу</b> домой.&nbsp;_ “I <b>come / am coming</b> home.” (_Přicházet&nbsp;_ is an imperfective verb.)
* _<b>Приду</b> домой.&nbsp;_ “I <b>will come</b> home.” (_Přijít&nbsp;_ is a perfective verb.)
* _<b>Иду</b> домой.&nbsp;_ “I <b>go / am going</b> home.” (_Jít&nbsp;_ is an imperfective verb.)

### `Fut`: future tense

The future tense denotes actions that will happen after the current
moment. Future tense in Russian is formed in one of three ways, depending of the verb:

* Present forms of perfective verbs have future meaning. These forms are tagged `Tense=Pres`, not `Tense=Fut` (see above).
* The verb _быть&nbsp;_ “to be” has a set of distinct future forms. They combine a future stem _буд&nbsp;_ with present suffixes.
  A small set of verbs (mostly motion verbs) have also future forms. These are formed as the present form (present stem and suffix)
  with the prefix _по-_.
  Although these forms are morphologically very close to the present forms, they are tagged `Tense=Fut`
  because the same lemma has also present forms and the feature must distinguish the two.
* The remaining imperfective verbs have periphrastic future forms, consiting of the future form of the auxiliary _быть,&nbsp;_
  and the infinitive of the content verb. Only the auxiliary will have `Tense=Fut`, while there will be no tense information
  at the infinitive.

#### Examples

* _<b>Пойду</b> домой.&nbsp;_ “I <b>will go</b> home.” (_Jít&nbsp;_ is an imperfective verb, phonological rule transformed the prefix
  _po-_ to _pů-._)
* _<b>Буду</b> идти домой.&nbsp;_ “I <b>will</b> be coming home.” (_Идти&nbsp;_ is an imperfective verb and it forms future periphrastically.)
<!-- Interlanguage links updated Čt lis 12 09:43:07 CET 2020 -->
