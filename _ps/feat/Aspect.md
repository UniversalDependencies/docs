---
layout: feature
title: 'Aspect'
shortdef: 'aspect'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>¨¨
  <td><a href="#Imp">Imp</a></td>
  <td><a href="#Perf">Perf</a></td>
</tr>
</table>

Aspect is an inflectional verbal feature describing the duration of an action in time.
There are two main values of aspect: imperfective and perfective.
Moreover, there are compound past forms with habitual meaning, but none of their parts bears the corresponding aspect value.

<!--Simple forms of Pashto verbs are always built from imperfective or perfective stem, even if they do not distinguish the aspect in the meaning.
Indicative, imperative, conditional and infinitive forms can have both aspects.
Participles and verbal nouns are formed only from the imperfective stem,
whereas the subjunctive is formed from the perfective stem. These forms do not bear any value for the `Aspect` feature -->

For overview of verb stems and verb endings mentioned below see [Pashto verbal system](../verbal-system.html).


### <a name="Imp">`Imp`</a>: imperfective

The imperfective (or durative) aspect describes an action that happans or is happening for a period of time, e.g.
either continuous (like continuous tenses in English) or repetitive actions.

#### Simple uses and formation
* present: present imperfective stem + present endings
* past: past imperfective stem + past endings
* imperative: present imperfective stem + imperative endings
* conditional: past imperfective stem + conditional ending
* infinitive: past imperfective stem + infinitive endings

<!-- In the present indicative use, it describes an action that has begun in the past,
keeps happening through the present moment and will end in the future. -->

#### Compound use
* future: auxiliary word بۀ _bë_ (with [aux:fut](../dep/aux-fut.html) relation) + present

#### Examples
* present, continuous: اوس **لولم** _os **lwalë́m**_ “I am reading now”
* future, repetitive: بۀ تا ته هره ورځ **لکم** _bë tâ ta hára wraż **likë́m**_ “I will write you every day”
* past, continuous: ما پرون یو کتاب **لوستۀ** _mâ parún yaw kitấb **lwastë́**_ “I was reading a book yesterday”
* imperative: کتاب **لوله** _kitấb **lwalá**_ “Write a book”
* conditional (potential use): کور **جوړولای** شم _kor **ǰoṛawë́lây** šëm_ “I can build a house”
* infinitive (passive use): کتاب **لوستل** کېږي _kitấb **lwastë́l** keǧí_ “The book is being read”


### <a name="Perf">`Perf`</a>: perfective

The perfective (or punctual) aspect describes an action understood as occurring in one moment.

#### Uses and formation
* past (indicative): past perfective stem + past endings
* imperative: present perfective stem + imperative endings
* conditional: past perfective stem + conditional ending
* infinitive: past perfective stem + infinitive endings

The present itself is a moment, moving towards, so it is not possible to speak about a punctual action in the present,
because it immediately falls into the past.
The present forms of the perfective, that would otherwise not have any meaning,
are used for the subjunctive mood, that do not distinguish the aspect.
The subjunctive is then used to form the future perfective (see [Mood]() for details).

The `Aspect=Perf` feature is also used for the separate word ونۀ _wënë́_ preceding the verb and combining
the usual perfective prefix و _wë́_ and the negation particle نۀ _në́_.
The verb form itself is then marked with `Aspect=Imp`, although together both words form the negative perfective form.

#### Examples
* past: تۀ ما ته **راغلې** _të mâ ta **rấġle**_ “You came to me”
* future: به یو کتاب **ولیکم** _bë yaw kitấb **wë́likëm**_ “I will write a book”
* imperative: کتاب **ولوله** _kitấb **wë́lwala**_ “Write a book”
* conditional (potential use): په ماښام **راغلای** شم _pë mâx̌ấm **râġë́lây** šëm_ “I can come in the evening”


<h3>Habitual</h3>

In addition to the two main aspects for the simple forms, there is a much less frequent habitual aspect.
No word is marked in this way, as the habitual occurs only in compound forms.

#### Use and formation
* habitual: auxiliary word به _bë_ (with [aux:hab](../dep/aux-hab.html) relation) + past imperfective

Tha habitual describes actions that used to happen habitually in the past.
Usually, it is not used on its own in a simple clause, but only in a compound sentence alongside
another habitual expressing simultaneousness of the two habitual actions
or with usual past tense expressing the habitual circumstances, in which a main past event took place.

#### Examples

<!-- Interlanguage links updated So 10. května 2025, 18:13:56 CEST -->
