---
layout: feature
title: 'ExtPos'
shortdef: 'external POS'
udver: '2'
---

This feature indicates, for the head of a [fixed expression](https://universaldependencies.org/en/dep/fixed.html), 
the effective UPOS of the full expression when it differs from the UPOS of the word itself.
Occasionally, `ExtPos` is used even if `ExtPos` = `upos`.

`ExtPos` is used in the [SUD](https://surfacesyntacticud.github.io/) framework.
It is kept in FEATS in the UD conversion.

### <a name="SCONJ">`SCONJ`</a>: subordinator-like expression

#### Examples

* _<b>=eːb oː= doːr</b>_ "when"

### <a name="ADV">`ADV`</a>: adverb-like expression

#### Examples

* _<b>doːr han</b>_ (_doːr_ = `NOUN`)

### <a name="PRON">`PRON`</a>: pronoun-like expression

#### Examples

* _winneːt j= halaka =jaː jiwaːʃi =b iːktiːn =i <b>hoːj</b> hi_ “there was one from them whose clothes were filthy” (_<b>hoːj</b>_: `upos=ADP`, `ExtPos=PRON`))

### <a name="NOUN">`NOUN`</a>: noun-like expression

#### Examples

* _w= <b>alif</b> wi= dijaːb iːkti =jeːb eːjawna_ “They give her the thousand dinars that he had mentioned” (_<b>alif</b>_: `upos=NUM`, `ExtPos=NOUN`))

### <a name="INTJ">`INTJ`</a>: interjection-like expression

#### Example

* _jaː iraːnaj / allaːji sallami =hoːk_ “oh gosh! God protected you!” (_jaː_ is `upos=PART` but as a fixed expression _jaː iraːnaj_, it has `ExtPos=INTJ` )


<!-- Interlanguage links updated Po 11. listopadu 2024, 20:09:40 CET -->
