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
exclusively with [verbs](VERB). The `Part` value can be used also with adjectives. It distinguishes participles from other verb forms, and participial adjectives from other adjectives.

### <a name="Fin">`Fin`</a>: finite verb

Rule of thumb: if it has non-empty [Mood](), it is finite. In Armenian this applies to conditional, indicative, imperative and subjunctive forms.

#### Examples

* _несу, несёшь, несёт, несём, несёте, несут_ &nbsp; “I go, you go, he/she/it goes, we go, you go, they go”
* _неси, несите_ &nbsp;  “carry” (imperative in different persons and numbers)
* _буду, будешь, будет, будем, будете, будут_ &nbsp; “I will be, you will be, he/she/it will be, we will be, you will be, they will be”
* _будь, будьте_ &nbsp;“be” (imperative in different persons and numbers)

- _nesu, neseš, nese, neseme, nesete, nesou_ &nbsp;“I carry, you carry, he/she/it carries, we carry, you carry, they carry”
- _nes, nesme, neste_ &nbsp;“carry” (imperative in different persons and numbers)
- _jsem, jsi, je, jsme, jste, jsou_ &nbsp;“I am, you are, he/she/it is, we are, you are, they are”
- _budu, budeš, bude, budeme, budete, budou_ &nbsp;“I will be, you will be, he/she/it will be, we will be, you will be, they will be”
- _bych, bys, by, bychom, byste, by_ &nbsp;“I would, you would, he/she/it would, we would, you would, they would”
- _buď, buďme, buďte_ &nbsp;“be” (imperative in different persons and numbers)



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
