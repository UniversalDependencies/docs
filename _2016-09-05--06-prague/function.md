---
layout: base
title:  'Function words in UD v2'
---

# Function words in UD v2

We propose the following changes to the treatment of function words in v2:

* remove [u-dep/auxpass]() from the universal relations (See [core dependents](core-dependents.html) for the relevant discussion.)
* limit languages to a single copula (See [copula](copula.html) for relevant discussion)
* allow other parts of speech to use the relation `aux` (See below)

## Auxiliaries

<!-- Is aux only used with verbs, or are other parts of speech permitted, too? The current guidelines (http://universaldependencies.org/u/dep/aux_.html) just say "verbs". But the current data sometimes contain particles (Bulgarian) and maybe other categories as well. I think we have agreed that the infinitival particle "to/zu/att/..." should be mark and not aux, and it is in most of the treebanks (I fixed German a couple of days ago). But Bulgarian also includes a particle that marks the future tense, a function performed by auxiliary verbs in other languages. Is it allowed to be aux? -->

<!-- Joakim: In line with loosening the constraints between part-of-speech tags and syntactic relations, I don’t see a problem with allowing other things than verbs to have the aux relation. Maybe we should should define aux as a grammaticalized expression of TMA categories? -->

The v1 guidelines say that the `aux` relation is reserved for auxiliary _verbs_. However, some languages (for example Bulgarian, see example) use particles to construct periphrastic verb forms, hence we should also allow `PART`. More generally: in line with loosening the constraints between part-of-speech tags and syntactic relations (see [here](postags.html) for discussion), we should define `aux` as a grammaticalized expression of tense-aspect-mood-voice-evidentiality categories.

~~~ sdparse
Като се прибереш, ще съм почистил къщата. \n When you return , will have cleaned the.house
aux(почистил, ще)
aux(почистил, съм)
~~~

Note that this does not necessarily mean that all non-verb aux dependents in the current data are correct. See [this query](http://bionlp-www.utu.fi/dep_search/query?search=%21%28AUX%7CVERB%29+%28%3Caux%7C%3Cauxpass%29+_&db=UD_English-dev) for an instance. They should be revised and each language-specific documentation should clearly state which lemmas may occur as auxiliaries and what TAMVE categories they are used in. That also applies to verbs—in some UD treebanks, the list of verbs that are attached as auxiliaries is very long and some of the verbs probably should not be `aux`.

