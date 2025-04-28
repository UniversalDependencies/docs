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
There are two values of aspect: imperfective and perfective.
Simple forms of Pashto verbs are always built from imperfective or perfective stem, even if they do not distinguish the aspect in the meaning.
Indicative, imperative, conditional and infinitive forms can have both aspects.
Participles and verbal nouns are formed only from the imperfective stem,
ehereas the subjunctive is formed from the perfective stem. These forms do not bear any value for the `Aspect` feature

Moreover, there are compound past forms with habitual meaning, but none of their parts bear the corresponding aspect value.

### <a name="Imp">`Imp`</a>: imperfective

The imperfective (or durative) aspect describes an action that happans or is happening for a period of time, e.g.
either continuous (like continuous tenses in English) or repetitive actions.

It is used for:
* present indicative
  * simple forms = present meaning
  * compound forms with the auxiliary به _bë_ = future imperfective meaning
* past indicative
* imperative
* conditional
* infinitive

In the present indicative use, it describes an action that has begun in the past, keeps happening through
the present moment and will end in the future.

#### Examples
* present, continuous: اوس **لولم** _os **lwalë́m**_ “I am reading now”
* future, repetitive: به تا ته هره ورځ **لکم** _bë tâ ta hára wraż **likë́m**_ “I will write you every day”
* past, continuous: ما پرون یو کتاب **لوستۀ** _mâ parún yaw kitấb **lwastë́**_ “I was reading a book yesterday”
* imperative: کتاب **لوله** _kitấb **lwalá**_ “Write a book”
* conditional (potential use): کور **جوړولای** شم _kor **ǰoṛawë́lây** šëm_ “I can build a house”
* infinitive (passive use): کتاب **لوستل** کېږي _kitấb **lwastë́l** keǧí_ “The book is being read”

### <a name="Perf">`Perf`</a>: perfective

The perfective (or punctual) aspect describes an action understood as occurring in one moment.

It is used for:
* past indicative
* imperative
* conditional
* infinitive

The present itself is a moment, moving towards, so it is not possible to speak about a punctual action in the present,
because it immediately falls into the past.
* compound forms of subjunctive (formally present perfective) the auxiliary به _bë_ = future perfective meaning
The present forms of the perfective, that would otherwise not have any meaning,
are used for the subjunctive mood, that do not distinguish the aspect. It forms compound future perfective
forms with the auxiliary به _bë_, but neither of its parts bear the `Aspect=Perf` feature.
For regular verbs, the perfective forms are created from their imperfective counterparts
using a stressed prefix و _wë́_.

#### Examples
* past: تۀ ما ته **راغلې** _të mâ ta **rấġle**_ “You came to me”
* future: به یو کتاب **ولیکم** _bë yaw kitấb **wë́likëm**_ “I will write a book”
* imperative: کتاب **ولوله** _kitấb **wë́lwala**_ “Write a book”
* conditional (potential use): په ماښام **راغلای** شم _pë mâx̌ấm **râġë́lây** šëm_ “I can come in the evening”

===========================

#### habitual

In addition to the two main aspects for the simple forms, the past imperfective forms with the auxiliary word به _bë_
have past habitual meaning. It describes actions that used to happen habitually in the past.
Usually, it is not used on its own in a simple clause, but only in a compound sentence alongside
another habitual expressing simultaneousness of the two habitual actions or with usual past tense expressing the habitual circumstances,
in which a main past event took place.
Neither the past form nor the auxiliary have the habitual marked in the features.
Instead, the habituality is expressed as the relation subtype [aux:hab](../deps/aux-hab.html) of the auxiliary to the content verb.

#### Examples

<!-- Interlanguage links updated Po 11. listopadu 2024, 20:09:32 CET -->
