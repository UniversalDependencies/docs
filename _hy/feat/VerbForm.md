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
  <td><a href="#Inf">Inf</a></td>
  <td><a href="#Part">Part</a></td>
</tr>
</table>

Even though the name of the feature seems to suggest that it is used
exclusively with [verbs](hy-pos/VERB). The `Part` value can be used also with [adjectives](ADJ). It distinguishes participles from other verb forms, and participial adjectives from other adjectives.

### <a name="Fin">`Fin`</a>: finite verb

Rule of thumb: if it has non-empty [Mood](), it is finite. In Armenian this applies to conditional, indicative, imperative and subjunctive forms.

#### Examples

* _կգնամ, կգնաս, կգնա, կգնանք, կգնաք, կգնան_ &nbsp;“I will go, you will go, he/she/it will goes, we will go, you will go, they will go”
* _գիտեմ, գիտես, գիտի, գիտենք, գիտեք, գիտեն_ &nbsp;“I know, you know, he/she/it knows, we know, you know, they know”
* _գնացի, գնացիր, գնաց, գնացինք, գնացիք, գնացին_ &nbsp;“I know, you know, he/she/it knows, we know, you know, they know”
- _եմ, ես, է, ենք, եք, են_ &nbsp;“I am, you are, he/she/it is, we are, you are, they are”
* _գնա՛, գնացե՛ք_ &nbsp;“go” (imperative in different persons and numbers)
* _գնամ, գնաս, գնա, գնանք, գնաք, գնան_ &nbsp;“I will go, you will go, he/she/it will goes, we will go, you will go, they will go”

### <a name="Inf">`Inf`</a>: infinitive

Infinitive is the citation form of verbs. In Armenian it has non-finite form. It is used with the auxiliary _տալ&nbsp;_ to form periphrastic causative voice, and it appears as the argument of modal and other verbs.

Note, that in Armenian infinitves behave similarly to nouns and are used as such. They will be tagged `VERB`, although they may have noun features in addition to the verbal ones. 

Infinitves inflect for [Case](), [Definite](), [PossNumber]() and [PossPerson]().

#### Examples

* _<b>խմել</b> տվեցի_ “I must <b>go</b>”
* _ուզում եմ <b>գնալ</b>_ “I must <b>go</b>”
* _որոշեցի <b>դառնալ</b>_ “I must <b>go</b>”
* _<b>մտնելուց</b> հետո_ “I must <b>go</b>”

### <a name="Part">`Part`</a>: participle, verbal adjective

Participle is a non-finite verb form that shares properties of verbs
and adjectives. In Armenian it may be used to form complex tenses and can be also used purely adjectively.

Armenian has seven types of participles:

- The resultative participle can be used adjectively and is used to form the indicative mood in present perfect resultative, imperfect in the past resultative and proper resultative tense.
- The subjective participle can be used only adjectively.
- The imperfective participle is used to form the indicative mood in present or imperfect tense.
- The future-I participle is used to form the indicative mood in present prospective (future) or imperfect prospective (future in the past) tense.
- The future-II participle can be used only adjectively.
- The perfect participle is used to form the indicative mood in present perfect or imperfect in the past (past perfect) tense.
- The negative participle is used to form the negated conditional mood in present or imperfect tense.
- The the processual (prospective) participle is used to form the indicative mood in present or imperfect tense for the verbs _գալ,լալ, տալ_.

Note, that the processual (prospective), resultative and future-I participles can be used to form the secondary complex tenses (in any tense or mood).

Participles will be have also [Aspect]() and [Voice]().

#### Examples

* _<b></b>_ “<b></b>”
* _<b></b>_ “<b></b>”
* _<b></b>_ “<b></b>”
* _<b></b>_ “<b></b>”

### <a name="Conv">`Conv`</a>: converb, transgressive, adverbial participle, verbal adverb

The converb, also called adverbial participle or transgressive, is a non-finite
verb form that shares properties of verbs and adverbs.

Verbs form transgressive meaning “while doing”.

#### Examples

* _<b></b>_ “<b></b>”
