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
exclusively with [verbs](VERB), the `Part` value can be used also with [adjectives](ADJ). It distinguishes participles from other verb forms, and participial adjectives from other adjectives.

### <a name="Fin">`Fin`</a>: finite verb

Rule of thumb: if it has non-empty [Mood](), it is finite. In Armenian this applies to conditional, indicative, imperative and subjunctive forms.

#### Examples

* _կգնամ, կգնաս, կգնա, կգնանք, կգնաք, կգնան_ &nbsp;“I will go, you will go, he/she/it will go, we will go, you will go, they will go”,
* _գիտեմ, գիտես, գիտի, գիտենք, գիտեք, գիտեն_ &nbsp;“I know, you know, he/she/it knows, we know, you know, they know”,
* _գնացի, գնացիր, գնաց, գնացինք, գնացիք, գնացին_ &nbsp;“I went, you went, he/she/it went, we went, you went, they went”,
* _եմ, ես, է, ենք, եք, են_ &nbsp;“I am, you are, he/she/it is, we are, you are, they are”,
* _գնա՛, գնացե՛ք_ &nbsp;“go” (imperative in different persons and numbers)
* _գնամ, գնաս, գնա, գնանք, գնաք, գնան_ &nbsp;“I go.`Sub`, you go.`Sub`, he/she/it go.`Sub`, we go.`Sub`, you go.`Sub`, they go.`Sub`”

### <a name="Inf">`Inf`</a>: infinitive

Infinitive is the citation form of verbs. In Armenian it has non-finite form. It is used with the auxiliary _տալ&nbsp;_ to form periphrastic causative voice, and it appears as the argument of modal and other verbs.

Note, that in Armenian infinitves behave similarly to nouns and are used as such. Depending on context, they may be classified as either `VERB` or [NOUN](). The `Inf` value will be used also with nouns to distinguish infinitives from other verb forms, and from other nouns.

Infinitves inflect for [Case](), [Definite](), [PossNumber]() and [PossPerson]().

#### Examples

* _<b>խմել</b> տվեցի_ &nbsp;“I made him <b>drink</b>”,
* _կարող ես <b>գնալ</b>_ &nbsp;“you can <b>go</b>”,
* _որոշեցի անմիջապես <b>չասել</b>_ &nbsp;“I decided <b>not to say</b> immediately”,
* _<b>մտնելուց</b> հետո_ &nbsp;“after <b>entering</b>”,
* _<b>սպանվելու</b> միտքը ծանր էր_ &nbsp;“lit: the thought <b>of to be killed</b> was hard”

### <a name="Part">`Part`</a>: participle, verbal adjective

Participle is a non-finite verb form that shares properties of verbs and adjectives. In Armenian it may be used to form complex tenses and can be also used purely adjectively.

In Armenian linguistics, these words are normally called _converbs_. However, since the UD definition `Part` partially covers the use of converbs, we use the same label.

Armenian has eight types of participles:

- The resultative participle is used to form the indicative mood in present perfect resultative, imperfect in the past resultative and proper resultative tense. It can be also used adjectively.
- The subject participle can be used only adjectively.
- The imperfective participle is used to form the indicative mood in present or imperfect tense.
- The future-I participle is used to form the indicative mood in present prospective (future) or imperfect prospective (future in the past) tense.
- The future-II (state of prospective action) participle can be used only adjectively.
- The perfect participle is used to form the indicative mood in present perfect or imperfect in the past (past perfect) tense.
- The negative participle is used to form the negated conditional mood in present or imperfect tense.
- The the processual (progressive) participle is used to form the indicative mood in present or imperfect tense for the verbs _գալ, լալ, տալ_.

Note, that the processual (progressive), resultative and future-I participles can be used to form the secondary complex tenses (in any tense or mood).

Participles will have also [Aspect]() and [Voice]().

#### Examples

* _քնած, գրած, ուղարկված, կանգնեցված_ &nbsp;“slept, written, sent, raised” (resultative participle, in different voices),
* _գրող, մեռնող, տվող, եղող, բացվող_ &nbsp;“(smth.) writing, dying, giving, beeing, opening” (subject participle, in different voices),
* _սիրում, խոսվում, բարձրացվում_ &nbsp;“love; smth. to be speaking about; beeing raised” (imperfective participle, in different voices),
* _տեսնելու, լվացվելու, մեղմացվելու_ &nbsp;“for seeing, for washing, for beeing extenuated” (future-I participle, in different voices),
* _կարդալիք, կառուցվելիք_ &nbsp;“(smth.) to be read, to be built” (future-II participle, in different voices),
* _գնացել, խմել, դրել_ &nbsp;“have done, have drunk, have put” (perfect participle),
* _(չեմ) գրի, (չէի) ասի, (չեմ) կարդա, (չէի) մոտենա_ &nbsp;“I will not write, I would not say, I will not read, I woul not approach” (negative participle),
* _<b>գալիս</b> եմ/էի, <b>տալիս</b> եմ/էի, <b>լալիս</b> եմ/էի, <b>աշխատելիս</b> է եղել_ &nbsp;“I am/was <b>coming</b>, I am/was <b>giving</b>, I am/was <b>crying</b>, he has been <b>working</b>” (processual participle in different moods and tenses)

### <a name="Conv">`Conv`</a>: converb, adverbial participle

The converb, also called adverbial participle or transgressive, is a non-finite
verb form that shares properties of verbs and adverbs.

Verbs form transgressive meaning “while doing”.

#### Examples

* _<b>վազելիս</b> ընկա_ &nbsp;“I fell <b>while running</b>”,
* _<b>կարդալիս</b> ննջեց_ &nbsp;“he slept <b>while reading</b>”,
* _<b>ուտելիս</b> շտապում է_ &nbsp;“he hurries <b>while eating</b>”
