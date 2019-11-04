---
layout: base
title: 'Tokenization'
udver: 2
---

# Tokenization

Uralic languages are based on latin or cyrillic alphabets, and use most
commonly a white-space-based tokenization with usual punctuation conventions.
Multiword tokens are generally avoided, some considerations are described in
the [Multiword tokens section](#Multiword_tokens). As a general guideline,
current Uralic annotations avoid tokens with spaces in them and avoid using
multiword tokens. Also, hyphenated compounds should generally make one token as
well as suffixes to acronyms, foreign loans, symbolic expressions, times, URL's
and so forth should be included in tokens if separated with a punctuation and
without space. This also applies to hyphens of coordinated compounds.

## Multiword tokens

There are few case that can be analysed as multiword tokens, i.e. token
containing multiple words:

* contractions, especially where words are of different parts-of-speech and
  important to the syntax, such as conjunction and auxiliary
* enclitic particles

#### Examples

Finnish-FTB

~~~ conllu
1-2     muttei  _       _       _       _       _       _       _       _
1      mutt    mutta   CONJ    Pcle,CC _       _       _      _       SpaceAfter=No|Style=Dialectal
2       ei      ei      VERB    V,Neg,Act,Sg3   Negative=Neg|Number=Sing|Person=3|Voice=Act     _       _    _       _
~~~

Finnish-TDT:

~~~ conllu
1       muttei  mutta#ei        VERB    V    Negative=Neg|Number=Sing|Person=3|VerbForm=Fin|Voice=Act        _       _      _       _
~~~

## References

* [Open issue #125 about Turkish tokenization in UD docs
   github](https://github.com/UniversalDependencies/docs/issues/125#issuecomment-102994717)
