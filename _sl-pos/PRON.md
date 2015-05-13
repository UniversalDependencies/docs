---
layout: postag
title: 'PRON'
shortdef: 'pronoun'
---

### Definition

Within the universal scheme, pronouns are words that substitute for [nouns](NOUN) or noun phrases and whose meaning is recoverable from the linguistic or extralinguistic context. Pronouns under this definition function like nouns, which means that the term cannot be extended to words that substitute for adjectives or other POS categories, as is usually the case in Slovenian grammar. Instead, attributive pronouns are tagged as [determiners](DET). 

For instance, _<b>to</b>_ “this” is traditionally called pronoun in Slovenian grammar, regardless of its syntactic context. To make the annotation parallel across languages, it is now tagged `PRON` in _<b>To</b> sem že slišal._ “I have heard this before.” and as `DET` in _<b>To</b> besedilo je nerazumljivo._ “This text is incomprehensible.”

### Examples

* _jaz_ "me", _ti_ "you", _on_ "he"
* _oba_ "both", _ves_ "all", _vsak_ "anyone", _vsakdo_ "anyone"
* _ta_ "this one", _tale_ "this one", _tisti_ "that one"
* _nič_ "nothing", _nihče_ "nobody", _nobeden_ "noone"
* _kar_ "which", _karkoli_ "anythin", _kdor_ "who"
* _se_ "oneself"
* _moj_ "mine", _tvoj_ "yours", _theirs_ "njihov"
* _kaj_ "what", _kdo_ "who"
* _nekaj_ "something", _nekdo_ "somebody", _malokdo_ "not a lot of people"
* 
### Conversion from ssj500k

All tokens annotated as pronouns within the JOS annotation scheme have been converted to `PRON`, except for those pronouns that appear as attributes to nouns, which have been converted to `DET`.
