---
layout: feature
title: 'Aspect'
shortdef: 'aspect'
---

Aspect is typically a feature of [verbs](u-pos/VERB).
It may also occur with other parts of speech
([nouns](u-pos/NOUN), [adjectives](u-pos/ADJ), [adverbs](u-pos/ADV)),
depending on whether borderline word forms such as gerunds and participles
are classified as verbs or as the other category.

Aspect is a feature that specifies duration of the action in time,
whether the action has been completed etc. In some languages
(e.g. English), some [tenses](Tense) are actually combinations of
tense and aspect. In other languages (e.g. Czech), aspect and tense
are separate, although not completely independent of each other.

In Czech and other Slavic languages, aspect is a lexical feature.
Pairs of imperfective and perfective verbs exist and are often
morphologically related but the space is highly irregular and the
verbs are considered to belong to separate lemmas.

Since we proceed bottom-up, the current standard covers only a few
aspect values found in corpora.  See Wikipedia
(<http://en.wikipedia.org/wiki/Grammatical_aspect>) for a long list of
other possible aspects.

### `Imp`: imperfect aspect

The action took / takes / will take some time span and there is no
information whether and when it was / will be completed.

#### Examples

* [cs] _péci_ "to bake" (Imp); _<b>pekl</b> chleba_ "he baked / was
  baking a bread"

### `Perf`: perfect aspect

The action has been / will have been completed. Since there is
emphasis on one point on the time scale (the point of completion),
this aspect does not work well with the present tense. For example,
Czech morphology can create present forms of perfective verbs but
these actually have a future meaning.

#### Examples

* [cs] _upéci_ "to bake" (Perf); _<b>upekl</b> chleba_ "he baked / has
  baked a bread"

### `Pro`: prospective aspect

In general, prospective aspect can be described as relative future:
the action is/was/will be expected to take place at a moment that
follows the reference point; the reference point itself can be
in past, present or future.
In the English sentence
_When I got home yesterday, John called and said he would arrive soon,_
the last clause _(he would arrive soon)_ is in prospective aspect.
Nevertheless, English does not have overt affixal morphemes dedicated
to the prospective aspect, and we do not need the label in English.
But other languages do; the _-ko_ suffix in Basque is an example.

#### Examples

* [eu] _Liburua <b>irakurriko</b> behar du._ lit. _book-a read-Prosp must AUX_ "He must go to read a book."

### `Prog`: progressive aspect

English progressive tenses (_I am eating, I have been doing &hellip;_)
have this aspect. They are constructed analytically (auxiliary +
present participle) but the _-ing_ participle is so bound to
progressive meaning that it seems a good idea to annotate it with this
feature (we have to distinguish it from the past participle somehow;
we may use both the "Tense" and the "Aspect" features).

In languages other than English, the progressive meaning may be
expressed by morphemes bound to the main verb, which makes this value
even more justified. Example is Turkish.
