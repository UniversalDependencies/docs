---
layout: feature
title: 'PronType'
shortdef: 'pronominal type'
udver: '2'
---

This is a lexical feature of [pronouns](PRON) and some [determiners](DET).

### <a name="Prs">`Prs`</a>: personal pronoun or determiner

This feature includes both nominal personal, possessive and reflexive pronouns or determiners.

#### Examples

* _<b>jaz</b>_ "I", _<b>ti</b>_ "you", _<b>on</b>_ "on", _<b>ona</b>_ "she" etc.
* _<b>moj</b>_ "my/mine", _<b>tvoj</b>_ "your/yours", _<b>njegov</b>_ "his", _<b>njen</b>_ "her/hers" etc.
* _<b>se</b>_ "oneself", _<b>svoj</b>_ "one's own"

### <a name="Int">`Int`</a>: interrogative pronoun or determiner

#### Examples:

* _kdo_ “who”
* _kaj_ “what”
* _kakšen_ “what kind of”
* _kateri_ “which”
* _čigav_ “whose”

### <a name="Rel">`Rel`</a>: relative pronoun or determiner

#### Examples:

* _kar_ “which/that”
* _kdor_ “who”
* _ćigar_ "kdor"
* _kakršen_ "as/like"
* _karkoli_ "anything"
* _kdorkoli_ "anyone"
* _kakršenkoli_ "any, of any kind"

### <a name="Dem">`Dem`</a>: demonstrative pronoun or determiner

#### Examples

* _ta_ “this”
* _tisti_ “that”
* _takšen_ “such”
* _tale_ "this here"
* _oni_ "that there"
* _tak_ "such"
* _tadva_ "these two"

### <a name="Tot">`Tot`</a>: total (collective) pronoun or determiner

#### Examples

* _ves_ “all”
* _vsak_ “each”
* _vsakdo_ “everyone”* _oba_ "both"
* _vsakršen_ "any kind"

### <a name="Neg">`Neg`</a>: negative pronoun, determiner or adverb

#### Examples

* _nič_ “nothing”
* _nihče, noben, nobeden_ "nobody"
* _nikakršen, nikak_ “no kind”
* _nikogaršnji_ “nobody's”
* _nikak_ “no way”

### <a name="Ind">`Ind`</a>: indefinite pronoun, determiner, numeral or adverb

#### Examples

* _nekateri_ "some/someone"
* _nekaj_ "something"
* _isti_ "same"
* _nek, nekakšen_ "some kind of"
* _mnog, premnog_ "many"
* _marsikaj_ "many"

### Conversion from JOS

All pronouns with feature Type=personal, Type=reflexive and Type=possessive are converted to UD `PronType=Prs`. All pronouns with Type=interrogative are converted to UD `PronType=Int`, all pronouns with Type=relative are converted to UD `PronType=Rel`, all pronouns with Type=demonstrative are converted to UD `PronType=Dem`, all pronouns with Type=general are converted to UD `PronType=Tot`, all pronouns with Type=negative are converted to UD `PronType=Neg` and all pronouns with Type=indefinite are converted to UD `PronType=Ind`.

Not that currently `PronType` is only assigned to pronouns and determiners, but not to other POS categories, such as adverbs (_zakaj_ "why", _čemu_ "what for", _kako_ "how", _tukaj_ "here", _tam_ "there", _tolikokrat_ "this many times" etc.)
<!-- Interlanguage links updated Čt lis 12 09:43:06 CET 2020 -->
