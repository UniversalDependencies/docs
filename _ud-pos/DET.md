---
layout: base
title: 'DET'
shortdef: 'determiner'
---

## {{ page.title }}: {{ page.shortdef }}

### Definition

**Determiners** are words that modify <a href="NOUN.html">nouns</a> or noun phrases and express the reference of the noun phrase in context. That is, a determiner may indicate whether the noun is referring to a definite or indefinite element of a class, to a closer or more distant element, to an element belonging to a specified person or thing, to a particular number or quantity, etc.

Note that the {{ page.title }} tag does not cover _quantifiers_ (i.e. cardinal numbers and words like _many, few, several_), which are normally also included among determiners. Quantifiers have their own tag <a href="NUM.html">NUM</a>.

Also note that the notion of determiners is unknown in grammars of some languages (e.g. Czech); words equivalent to English determiners may be traditionally classified as <a href="PRON.html">pronouns</a> and/or <a href="NUM.html">numerals</a> in these languages. In order to annotate the same thing same way across languages, the words satisfying our definition of determiners should be tagged {{ page.title }} in these languages as well.

For instance, [en] _this_ is either pronoun _(I saw <span style='color:red'>this</span> yesterday.)_ or determiner _(I saw <span style='color:red'>this</span> car yesterday.)_ Its Czech translation, [cs] _tohle_, is traditionally called pronoun in Czech grammar, regardless of context. To make the annotation parallel across languages, it should be now tagged PRON in <em>“<span style='color:red'>Tohle</span> jsem viděl včera.”</em> and {{ page.title }} in <em>“<span style='color:red'>Tohle</span> auto jsem viděl včera.”</em>

### Examples

* articles: _a, an, the_
* possessive determiners: _my, your, his, her, its, our, their_
* demonstrative determiners: _this_ as in _“I saw <span style='color:red'>this</span> car yesterday.”_
* interrogative determiners: _which_ as in _“<span style='color:red'>Which</span> car do you like?”_
* relative determiners: _which_ as in _“I wonder <span style='color:red'>which</span> car you like.”_
* indefinite determiners: _any_
* totality determiners: _all_
* negative determiners: _no_ as in _“We have <span style='color:red'>no</span> cars available.”_

### References

* <a href="http://www-01.sil.org/linguistics/GlossaryOfLinguisticTerms/WhatIsADeterminer.htm">Loos, Eugene E., et al. 2003. Glossary of linguistic terms: What is a determiner?</a>
* <a href="http://en.wikipedia.org/wiki/Determiner">Wikipedia</a>
