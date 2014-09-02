---
layout: base
title: 'NumType'
shortdef: 'numeral type'
---

## {{ page.title }}: {{ page.shortdef }}

Some languages (especially Slavic) have a complex system of
numerals. The main part of speech is "numeral" (at least in the school
grammar of Czech), it includes almost everything where counting is
involved and there are various subtypes. It also includes
interrogative, relative, indefinite and demonstrative words referring
to numbers, so at the same time we may have a non-empty value of
prontype. From the syntactic point of view, some numtypes behave like
adjectives and some behave like adverbs. So I am inclined to reserve
the main POS "NUM" for cardinal numbers only (we have not fixed the
definition of "NUM" yet, have we?) and distribute the rest to other
parts of speech. Thus the "NumType" feature would apply to (at least)
numerals, adjectives and adverbs.

### Card: cardinal number or corresponding interrogative / relative / indefinite / demonstrative word

Note that in some Indo-European languages there is a fuzzy borderline
between numerals and nouns for "thousand", "million" and "billion".

English examples: one, two, three

Czech examples: jeden, dva, tři; kolik (how many), několik (some),
tolik (so many), mnoho (many), málo (few)

### Ord: ordinal number or corresponding interrogative / relative / indefinite / demonstrative word

This is either subtype of adjective, or (in some languages) of adverb.

English examples: first, second, third

Czech adjectival examples: první (first), druhý (second), třetí
(third); kolikátý ("how manieth" = which rank), několikátý (some
rank), tolikátý (this/that rank)

Czech adverbial examples: poprvé (for the first time), podruhé (for
the second time), potřetí (for the third time); pokolikáté (for which
time), poněkolikáté (for x-th time), potolikáté

### Mult: multiplicative numeral or corresponding interrogative / relative / indefinite / demonstrative word

This is subtype of adverb.

Czech examples: jednou (once), dvakrát (twice), třikrát (three times);
kolikrát (how many times), několikrát (several times), tolikrát (so
many times)

### Frac: fraction

This is a subtype of cardinal numbers, rarely distinguished. It is
tagged in PDT (Czech) and I also found something of this sort in
Hungarian. In Czech there is a fuzzy borderline with nouns and most of
the Czech examples behave morphologically and syntactically as nouns.

Czech examples: půl / polovina (half), třetina (one third), čtvrt / čtvrtina (quarter)

### Sets: number of sets of things

Morphologically distinct class of numerals used to count sets of
things, or nouns that are pluralia tantum. In Czech school grammars
this is often included in a broader class of generic numerals, see
below.  I have seen it tagged so far only in Czech, although I suspect
that other Slavic languages could have something similar too.

Czech examples: dvoje / troje boty (two / three [pairs of] shoes); as opposed to normal cardinal numbers: dvě / tři boty (two / three shoes)

### Dist: distributive numeral

Hungarian example: három-három in "gyermekenként három-három ezer
forinttal" (three thousand forint per child)

### Range: range of values

This could be considered a subtype of "card". I saw it in Turkish
CoNLL data but there is nothing specifically Turkish about
it. "two-five" (two to five) is an example – provided tokenization
leaves it as one token.

### Gen: generic numeral, i.e. a numeral that is neither of the above

Czech school grammar distinguishes this subclass, which is why it
appears in Czech tagsets. Other Slavic languages may have similar
words but their traditional classification may differ. (Note that
"generic numerals" in Czech grammar also include the "sets" subclass
mentioned above.)

Czech examples: čtvero, patero, desatero (specific forms of four,
five, ten; possibly could be translated as quartet, quintet...?);
dvojí, trojí, čtverý (twofold, threefold, fourfold; these are
morphologically and syntactically adjectives).
