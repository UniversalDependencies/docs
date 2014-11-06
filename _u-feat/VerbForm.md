---
layout: feature
title: 'VerbForm'
shortdef: 'form of verb or deverbative'
---

Even though the name of the feature seems to suggest that it is used
exclusively with [verbs](u-pos/VERB), it is not the case. Some verb
forms in some languages actually form a gray zone between verbs and
other parts of speech ([nouns](u-pos/NOUN), [adjectives](u-pos/ADJ)
and [adverbs](u-pos/ADV)). For instance, participles may be either
classified as verbs or as adjectives, depending on language and
context. In both cases `VerbForm=Part` may be used to separate them
from other verb forms or other types of adjectives.

### `Fin`: finite verb

Rule of thumb: if it has non-empty [Mood](), it is finite. But beware
that some tagsets conflate verb forms and moods into one feature.

#### Examples

* [en] _I <b>do</b>, he <b>does</b>_

### `Inf`: infinitive

Infinitive is the citation form of verbs in many languages. Unlike in
English, it often has morphological form that is distinct from the
finite forms. Infinitives may be used together with auxiliaries to
form periphrastic tenses (e.g. future tense [cs] _budu <b>sedět</b> v
letadle_ "I will sit in a plane"), they appear as arguments of modal
verbs etc.  In some languages they behave similarly to nouns and are
used as such (similar to the gerund in English).

#### Examples

* [de] _ich muss _<b>_gehen_</b> "I must <b>go</b>"

### `Sup`: supine

Supine is a rare verb form. It survives in some Slavic languages
(Slovenian) and is used instead of infinitive as the argument of
motion verbs (old [cs] _jdu <b>spat</b>_ lit. _I-go sleep_).

A form called "supine" also exists in Swedish where it is a special
form of the participle, used to form the composite past form of a
verb.  It is used after the auxiliary verb _ha_ (to have) but not
after _vara_ (to be):

* Simple past: I ate (the) dinner = _Jag åt maten_ (using preterite)
* Composite past: I have eaten (the) dinner = _Jag har <b>ätit</b> maten_ (using supine)
* Past participle common: (The) dinner is eaten = _Maten är äten_ (using past participle)
* Past participle neuter: (The) apple is eaten = _Äpplet är ätet_
* Past participle plural: (The) apples are eaten = _Äpplena är ätna_ 

### `Part`: participle

Participle is a non-finite verb form that shares properties of verbs
and adjectives. Its usage varies across languages. It may be used to
form various periphrastic verb forms such as complex tenses and
passives; it may be also used purely adjectively.

Other features may help to distinguish past/present participles
(English), active/passive participles (Czech), imperfect/perfect
participles (Hindi) etc.

#### Examples

* [en] _he could have <b>been prepared</b> if he had
  <b>forseen</b> it_; _I will be <b>driving</b> home_.

### `Trans`: transgressive

The transgressive, also called adverbial participle, is a non-finite
verb form that shares properties of verbs and adverbs. It appears
e.g. in Slavic and Indo-Aryan languages.

#### Examples

* [cs] _zírali na mne, pevně <b>svírajíce</b> své zbraně_ "they
  stared at me <b>while gripping</b> their guns firmly";
  _<b>udělavši</b> večeři, zavolala rodinu ke stolu_ "<b>having
  prepared</b> the dinner, she called her family to the table"

### `Ger`: gerund

Gerund is a non-finite verb form that shares properties of verbs and
nouns. In English it shares the morphological form with present
participle, which may mean that the tagset will not distinguish it
from the participle.

#### Examples

* [en] _I look forward to <b>seeing</b> you_; _he turns a blind
  eye to my <b>being</b> late_
