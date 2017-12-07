---
layout: feature
title: 'VerbForm'
shortdef: 'form of verb or deverbative'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Conv">Conv</a></td>
  <td><a href="#Fin">Fin</a></td>
  <td><a href="#Ger">Ger</a></td>
  <td><a href="#Inf">Inf</a></td>
  <td><a href="#Part">Part</a></td>
</tr>
</table>

Even though the name of the feature seems to suggest that it is used
exclusively with [verbs](VERB), it is not the case. Some verb
forms in some languages actually form a gray zone between verbs and
other parts of speech ([nouns](NOUN), [adjectives](ADJ)
and [adverbs](ADV)). For instance, participles may be either
classified as verbs or as adjectives, depending on language and
context. In both cases `VerbForm=Part` may be used to separate them
from other verb forms or other types of adjectives.

### <a name="Fin">`Fin`</a>: finite verb

Rule of thumb: if it has non-empty [Mood](), it is finite. But beware
that some tagsets conflate verb forms and moods into one feature.

#### Examples

* [en] _I <b>do</b>, he <b>does</b>_

### <a name="Inf">`Inf`</a>: infinitive

Infinitive is the citation form of verbs in many languages. Unlike in
English, it often has morphological form that is distinct from the
finite forms. Infinitives may be used together with auxiliaries to
form periphrastic tenses (e.g. future tense [cs] _budu <b>sedět</b> v
letadle_ "I will sit in a plane"), they appear as arguments of modal
verbs etc. In some languages they behave similarly to nouns and are
used as such (similar to the gerund in English).

#### Examples

* [de] _ich muss <b>gehen</b>_ “I must <b>go</b>”

### <a name="Part">`Part`</a>: participle, verbal adjective

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

### <a name="Conv">`Conv`</a>: converb, transgressive, adverbial participle, verbal adverb

The converb, also called adverbial participle or transgressive, is a non-finite
verb form that shares properties of verbs and adverbs. It appears
e.g. in Slavic and Indo-Aryan languages.

Note that this value was called `Trans` in UD v1 and it has been renamed `Conv`
in UD v2.

#### Examples

* [cs] _zírali na mne, pevně <b>svírajíce</b> své zbraně_ "they
  stared at me <b>while gripping</b> their guns firmly";
  _<b>udělavši</b> večeři, zavolala rodinu ke stolu_ "<b>having
  prepared</b> the dinner, she called her family to the table"

### <a name="Ger">`Ger`</a>: gerund

Gerund is a non-finite verb form that shares properties of verbs and
nouns. In English it shares the morphological form with present
participle, which may mean that the tagset will not distinguish it
from the participle.

Using `VerbForm=Ger` is discouraged and alternatives should be considered first
because the term _gerund_ is rather confusing: in Spanish (and other Romance
languages) it denotes the present participle and should be thus labeled
`Tense=Pres|VerbForm=Part`; some Slavists use it to denote converbs (adverbial
participles), which should be labeled `VerbForm=Conv`; and UD version 1
recommended (inspired by English) to use it for verbal nouns, which in UD v2
should use `VerbForm=Vnoun`.

However, the feature is still available in UDv2 and can be used if the
alternatives do not seem acceptable. The feature may be removed in future
versions but comprehensive investigation has to be done first.

#### Examples

* [en] _I look forward to <b>seeing</b> you_; _he turns a blind
  eye to my <b>being</b> late_
