---
layout: feature
title: 'VerbForm'
shortdef: 'form of verb or deverbative'
udver: '2'
---

### Description

Verb's forms and certain deverbal forms are marked with a VerbForm feature. The
finite verb forms are marked with value `Fin`, here Uralic tradition matches
guidelines quite well. Other values are described very differently even between
Uralic grammars and care should be taken mapping them to UD. Some hints:

* `Inf` should be used for (at least *some*) of the infinitives.
  * If infinitives have case suffixes, they are also marked.
  * Infinitives that are used in verb chains are usually tagged with `Inf`
    value.
  * Infinitives are usually deverbal nouns but with limited [Case]() inflection,
    this is included in features
  * If an infinitive described in traditional grammar has full nominal paradigm
    it can be considered as derivation unless syntax somewhat requires it to be
    a verb.
  * Infinitives can have [Voice]()
* `Part` should be used for (*some* of the) participles.
  * The [Tense]() feature is used in participles to match what is present and
    past participle.
  * Participles usually have `Voice`, and the full adjectival paradigm, so
    [Degree](), `Case` and [Number]() should be used.
  * Participles that don't fit into universal guidelines can be considered as
    derivations
* if infinitive or participle of a traditional grammar acts as an adverb, it can
  be tagged with `Conv` for converbs
* Gerund and Supine can be used for the remaining infinitive types if they
  cannot be considered as derivations

As a rule of thumb, be systematic in features and values of non-finite verb
forms and ensure distinctions are retained, so they can be later automatically
converted if needed. Also keep in mind that you can record traditional grammar
stuffs in the XPOS and MISC fields, while UD versions make things comparabler
between languages.

Since VerbForms are so various in Uralics, the language-specific documentation
should include an overview to this.
<!-- Interlanguage links updated Út zář 29 20:43:05 CEST 2020 -->
