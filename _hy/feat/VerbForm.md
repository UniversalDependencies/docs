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
  <td><a href="#Gdv">Gdv</a></td>
  <td><a href="#Inf">Inf</a></td>
  <td><a href="#Part">Part</a></td>
</tr>
</table>

Even though the name of the feature seems to suggest that it is used
exclusively with [verbs](VERB), it is not the case. The `Part` value can be used also with [nouns](NOUN) (nominalized subject or resultative participles), to separate them from other verb forms or other types of nouns. Note, that some [adjectives](ADJ) that fall in the gray zone between adjectives and participles are marked `Part` too.

### <a name="Fin">`Fin`</a>: finite verb

Rule of thumb: if it has non-empty [Mood](), it is finite. In Armenian this applies to conditional (also to [connegative](Connegative)), indicative, imperative and subjunctive forms.

#### Examples

* _կգնամ, կգնաս, կգնա, կգնանք, կգնաք, կգնան_ &nbsp;“I will go, you will go, he/she/it will go, we will go, you will go, they will go”,
* _գիտեմ, գիտես, գիտի, գիտենք, գիտեք, գիտեն_ &nbsp;“I know, you know, he/she/it knows, we know, you know, they know”,
* _գնացի, գնացիր, գնաց, գնացինք, գնացիք, գնացին_ &nbsp;“I went, you went, he/she/it went, we went, you went, they went”,
* _եմ, ես, է, ենք, եք, են_ &nbsp;“I am, you are, he/she/it is, we are, you are, they are”,
* _գնա՛, գնացե՛ք_ &nbsp;“go” (imperative in different numbers),
* _գնամ, գնաս, գնա, գնանք, գնաք, գնան_ &nbsp;“I go.`Sub`, you go.`Sub`, he/she/it go.`Sub`, we go.`Sub`, you go.`Sub`, they go.`Sub`”

### <a name="Inf">`Inf`</a>: infinitive

Infinitive is the citation form of verbs. In Armenian it has non-finite form. It is used with the auxiliary _տալ&nbsp;_ to form periphrastic causative voice, and it appears as the argument of other verbs.

#### Examples

* _<b>խմել</b> տվեցի_ &nbsp;“I made him <b>drink</b>”,
* _կարող ես <b>գնալ</b>_ &nbsp;“you can <b>go</b>”,
* _որոշեցի անմիջապես <b>չասել</b>_ &nbsp;“I decided <b>not to say</b> immediately”

### <a name="Part">`Part`</a>: participle, verbal adjective

Participle is a non-finite verb form that shares properties of verbs and adjectives. In Armenian it may be used to form complex tenses and can be also used purely adjectively.

In Armenian linguistics, these words are normally called _converbs_. However, since the UD definition `Part` partially covers the use of converbs, we use the same label.

Note, that the so called _negative participle_ is used to form negated periphrastic conditional forms. We mark them [Connegative]().

Armenian has seven types of participles:

- The resultative participle is used to form the indicative mood in present perfect resultative, imperfect in the past resultative and proper resultative tense. It can be also used adjectively and can be negated.
- The subject participle can be used only adjectively and can be negated.
- The imperfective participle is used to form the indicative mood in present or imperfect tense.
- The future-I participle is used to form the indicative mood in present prospective (future) or imperfect prospective (future-in-the-past) tense.
- The future-II (state of prospective action) participle can be used only adjectively and can be negated.
- The perfect participle is used to form the indicative mood in present perfect or imperfect-in-the-past (past perfect) tense.
- The processual (progressive) participle is used to form the indicative mood in present or imperfect tense for the verbs _գալ, լալ, տալ_.

Note that the processual (progressive), resultative and future-I participles can be used to form the secondary complex tenses (with the auxiliary _լինել_ in any tense or mood).

Note also that resultative, subject and future-II participles, that fall in the gray zone between adjectives and participles and can be also used adjectively, are marked `Part` too.

Participles will have [Aspect](), [Voice]() and [Subcat]().

#### Examples

* _քնած, գրած, ուղարկված, կանգնեցված_ &nbsp;“slept, written, sent, raised” (resultative participle, in different voices),
* _գրող, մեռնող, տվող, եղող, բացվող_ &nbsp;“(smth.) writing, dying, giving, beeing, opening” (subject participle, in different voices),
* _սիրում, խոսվում, բարձրացվում_ &nbsp;“love; smth. to be speaking about; beeing raised” (imperfective participle, in different voices),
* _տեսնելու, լվացվելու, մեղմացվելու_ &nbsp;“for seeing, for washing, for beeing extenuated” (future-I participle, in different voices),
* _կարդալիք, կառուցվելիք_ &nbsp;“(smth.) to be read, to be built” (future-II participle, in different voices),
* _գնացել, խմել, դրել_ &nbsp;“have done, have drunk, have put” (perfect participle, in different voices),
* _<b>գալիս</b> եմ/էի, <b>տալիս</b> եմ/էի, <b>լալիս</b> եմ/էի, <b>աշխատելիս</b> է եղել_ &nbsp;“I am/was <b>coming</b>, I am/was <b>giving</b>, I am/was <b>crying</b>, he has been <b>working</b>” (processual participle in different moods and tenses)

### <a name="Conv">`Conv`</a>: converb, adverbial participle

The converb, also called adverbial participle or transgressive, is a non-finite
verb form that shares properties of verbs and adverbs.

Verbs form transgressive meaning “while doing”.

#### Examples

* _<b>վազելիս</b> ընկա_ &nbsp;“I fell <b>while running</b>”,
* _<b>կարդալիս</b> ննջեց_ &nbsp;“he slept <b>while reading</b>”,
* _<b>ուտելիս</b> շտապում է_ &nbsp;“he hurries <b>while eating</b>”

### <a name="Gdv">`Gdv`</a>: gerundive

Gerundive in Armenian is a non-finite verb form that shares properties of verbs and nouns. They inflect for [Case](), [Definite](), [Number](), [Number[psor]]() and [Person[psor]]().

Not to confuse with gerund.

#### Examples

* _<b>սպանվելու</b> միտքը ծանր էր_ &nbsp;“lit: the thought <b>of to be killed</b> was hard”,
* _սովոր էր մենակ <b>ծննդաբերելուն</b>_ &nbsp;“lit: she get used to <b>give birth</b> alone”,
* _<b>մտնելուց</b> հետո_ &nbsp;“after <b>entering</b>”,
* _մոտեցավ <b>վազելով</b>_ &nbsp;“lit: he came up <b>running</b>”,
* _<b>ճառելում</b> նա հմուտ էր_ &nbsp;“lit: he was skillful <b>in telling speeches</b>”
<!-- Interlanguage links updated Pá kvě 14 11:08:42 CEST 2021 -->
