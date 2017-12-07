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
exclusively with [verbs](hy-pos/VERB). The `Part` value can be used also with [adjectives](hy-pos/ADJ). It distinguishes participles from other verb forms, and participial adjectives from other adjectives.

### <a name="Fin">`Fin`</a>: finite verb

Rule of thumb: if it has non-empty [Mood](hy-feat/Mood), it is finite. In Armenian this applies to conditional, indicative, imperative and subjunctive forms.

#### Examples

* _կգնամ, կգնաս, կգնա, կգնանք, կգնաք, կգնան_ &nbsp;“I will go, you will go, he/she/it will goes, we will go, you will go, they will go”
* _գիտեմ, գիտես, գիտի, գիտենք, գիտեք, գիտեն_ &nbsp;“I know, you know, he/she/it knows, we know, you know, they know”
* _գնացի, գնացիր, գնաց, գնացինք, գնացիք, գնացին_ &nbsp;“I know, you know, he/she/it knows, we know, you know, they know”
- _եմ, ես, է, ենք, եք, են_ &nbsp;“I am, you are, he/she/it is, we are, you are, they are”
* _գնա՛, գնացե՛ք_ &nbsp;“go” (imperative in different persons and numbers)
* _գնամ, գնաս, գնա, գնանք, գնաք, գնան_ &nbsp;“I will go, you will go, he/she/it will goes, we will go, you will go, they will go”

### <a name="Inf">`Inf`</a>: infinitive

Infinitive is the citation form of verbs. In Armenian it has non-finite form. It is used with the auxiliary _տալ&nbsp;_ to form periphrastic causative voice, and it appears as the argument of modal and other verbs.

Note, that in Armenian infinitves behave similarly to nouns and are used as such. They will be tagged `VERB`, although they may have noun features in addition to the verbal ones. In Armenian infinitves inflect for [Case](hy-feat/Case), [Definite](hy-feat/Definite), [PossNumber](hy-feat/PossNumber) and [PossPerson](hy-feat/PossPerson).

#### Examples

* _<b>խմել</b> տվեցի_ “I must <b>go</b>”
* _ուզում եմ <b>գնալ</b>_ “I must <b>go</b>”
* _որոշեցի <b>դառնալ</b>_ “I must <b>go</b>”
* _<b>մտնելուց</b> հետո_ “I must <b>go</b>”

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
