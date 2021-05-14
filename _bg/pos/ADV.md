---
layout: postag
title: 'ADV'
shortdef: 'adverb'
udver: '2'
---

### Definition

In the group of Bulgarian adverbs there are words that typically modify [verbs](VERB) for such
categories as time, place, direction or manner. They may also modify
[adjectives](ADJ) and other adverbs, as in _<b>very briefly</b>_ or
_<b>arguably wrong</b>_. Some adverbs can modify even [nouns] (Noun).

In BulTreeBank tagset the corresponding POS tag is `D`.

There is a closed subclass of _pronominal adverbs_ that refer to
circumstances in context, rather than naming them directly; similarly
to pronouns, these can be categorized as interrogative, relative,
demonstrative etc. Pronominal adverbs also get the `ADV`
part-of-speech tag but they are differentiated by additional features.

In the BulTreeBank tagset the corresponding tags are as follows:

- Pdl, Pdm, Pdq, Pdt (Adverbial demonstrative pronouns for location, manner, quantity and time)
- Prl, Prm, Prq, Prt (Adverbial relative pronouns for location, manner, quantity and time)
- Pcl, Pcm, Pct (Adverbial collective pronouns for location, manner and time)
- Pil, Pim, Piq, Pit (Adverbial interrogative pronouns for location, manner, quantity and time)
- Pfl, Pfm,  Pfq, Pft (Adverbial indefinite pronouns for location, manner, quantity and time)
- Pnl, Pnm,  Pnq, Pnt (Adverbial negative pronouns for location, manner, quantity and time)

### Examples

- demonstrative adverbs: _тук, там, тогава_ / _tuk, tam, togava_ "here, there, then"
- relative pronouns: _когато, където, както, колкото_ / _kogato, kadeto, kakto, kolkoto_ "when, where, as, as much as"
- collective adverbs: _навсякъде, всякога, всякак_ / _navsyakade, vsyakoga, vsyakak_ "everywhere, always, anyway"
- interrogative adverbs: _кога, къде, как, колко_ /_koga, kade, kak, kolko_ "when, where, how, how many"
- indefinite adverbs: _някъде, някога, някак_ / _nyakade, nyakoga, nyakak_ "somewhere, sometime, somehow"
- negative adverbs: _никога, никъде, никак_ / _nikoga, nikade, nikak_ "never, nowhere, not at all"

Note that there are words that may be traditionally called numerals in
some languages (e.g. Bulgarian) but they are treated as adverbs in the
universal tagging scheme. In particular, _adverbial ordinal numerals_
([bg] _първо_ / _parvo_ "for the first time") are tagged `ADV`. 
The mapped tags present the neuter singular indefinite forms of the ordinal numerals: `Monsi`.
In this way there will be ambiguity with the class of [adjectives] (ADJ).


Another adverbial numeral that goes under `ADV` is Md#:


### Examples

- _много_ / _mnogo_ "very"
- _малко_ /_malko_ "little"

Note that the symbol `#', used in the Universal POS section indicates a holder for arbitrary number of features, suppressed in the respective tag as irrelevant in the BulTreeBank tagset, when mapped to the Universal one.
<!-- Interlanguage links updated Pá kvě 14 11:08:18 CEST 2021 -->
