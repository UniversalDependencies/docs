---
layout: feature
title: 'NumType'
shortdef: 'numeral type'
udver: '2'
---

In English, numerical expressions such as cardinal and ordinal numbers have a `NumType` feature.

### <a name="Card">`Card`</a>: cardinal number

Cardinal numbers with the PTB tag `CD`. This includes *dozen*, *hundred*, *thousand*, *million*, *billion* (and abbreviations thereof) __in the singular__, as they can be used as prenominal quantity modifiers (*a hundred books*). It also includes specific numeric quantities regardless of orthography; and times, years, dates, phone numbers, and other numeric entities indicated with non-ordinal spellings.

#### Examples

* _one, 11, 98.6, ..._

### <a name="Ord">`Ord`</a>: ordinal number

Ordinal numbers with UPOS of `ADJ` (*the 3rd book*), `ADV` (*the 3rd tallest*), or `NOUN` (for dates, e.g. *July 3rd* or *the 3rd*).

Note that *second* is ambiguous, and does not receive this feature in the temporal unit sense.

#### Examples

* _first, 23rd, ..._

### <a name="Mult">`Mult`</a>: multiplicative numbers

#### Examples

The following adverbs with the PTB tag `RB`:

* _once, twice_

### <a name="Frac">`Frac`</a>: fractional numbers

These are most often tagged with UPOS of `NOUN`, because they generally need *of* to link to the quantified item/set. 
Exceptions:
- the predeterminer use of _half_ (_half the cake_), which is `DET`
- quasi-compound uses like _half year_ (`ADJ`) and _half naked_ (`ADV`)

(Full fractions expressed with a slash are generally tokenized: *2 / 3*. Because the notion of fractionality can be attributed to the slash rather than the individual numbers, the feature is not used here.)

#### Examples

* _half_, a _third_ of the cake, two _thirds_


<!-- Interlanguage links updated St lis 3 20:58:25 CET 2021 -->
