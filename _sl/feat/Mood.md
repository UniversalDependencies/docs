---
layout: feature
title: 'Mood'
shortdef: 'mood'
---

Mood is a feature that expresses modality and subclassifies finite verb forms. It is an inflectional feature of [auxiliaries](AUX) and [verbs](VERB).

### `Ind`: indicative

The indicative can be considered the default mood. A verb in indicative merely states that something happens, has happened or will happen, without adding any attitude of the speaker.

#### Examples

* _<b>Govorim</b> angleško in francosko._ “I speak English and French.”
* _Proslava <b>bo</b> naslednji petek._ "The celebration will take place next Friday."

### `Imp`: imperative

The speaker uses imperative to order or ask the addressee to do the action of the verb.

#### Examples

* _<b>Pomij</b> posodo!_ “Wash the dishes.”
* _<b>Poglejmo</b>, kaj ste naredili._ "Let's have a look at what you have done."
* _<b>Pospravite</b> ta nered._ "Clean up this mess!"

### `Cnd`: conditional

Generally, the conditional mood is used to express actions that would have taken place under some circumstances but they actually did not / do not happen. In Slovenian, present and past conditional are formed using the participle of the content verb and a special conditional form of the [auxiliary verb](AUX) _biti_  "to be". Thus, only this form is marked as `Cnd`, regardless of whether it is used to form a conditional or any other type of modality.

#### Examples

* _Če bi se več učil, bi naredil izpit._ "If I had studied more, I would have passed the exam."
* _Da bi preglasil njihov pogovor, sem prižgal radio._ "To drown out their conversation, I turned on the radio."
* _Roparji naj bi pobrali prav vse._ "The robbers are supposed to have taken everything."
* _Naslednji petek bi prišli k vam na obisk._ "We are thinking of visiting you next Friday."

### Conversion from JOS

All verbs with VForm=present and VForm=future are converted to `Mood=Ind`, all verbs with VForm=imperative are converted to `Mood=Imp` and all verbs with VForm=conditional are converted to `Mood=Cnd`. The non-finite verb forms (participle, infinitive, supine) do not have any `Mood`.
<!-- Interlanguage links updated Út zář 29 20:43:02 CEST 2020 -->
