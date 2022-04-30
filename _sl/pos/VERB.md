---
layout: postag
title: 'VERB'
shortdef: 'verb'
udver: '2'
---

### Definition

A verb is a member of the syntactic class of words that typically signal events and actions, can constitute a minimal predicate in a clause, and govern the number and types of other constituents which may occur in the clause. Verbs are often associated with grammatical categories like tense, mood, aspect and voice, which can either be expressed inflectionally or using auxilliary verbs or particles.

In Slovenian, the `VERB` tag covers all verbs, except for the auxiliary verb _biti_ "to be" when it is used as a copula or auxiliary verb (tagged as [AUX]()).

Word forms that etymologically derive from verbs, but have different syntactic properties, such as adjectival participles (_ukraden_ "stolen", _pokrit_ "covered"), transgressives (_upoštevaje_ "taking into account", _začenši_ "starting") and gerunds (_govorjenje_ "speaking", _zavrnitev_ "rejection", _gretje_ "heating"), are marked as [adjectives](ADJ), [adverbs](ADV) or [nouns](NOUN) respectively. 

### Examples

* _imeti_ "to have", _vedeti_ "to know", _dobiti_ "to get"
* _morati_ "to must", _moči_ "to be able to", _postati_ "to become"
* _začeti_ "to start,  _iti_ "to go", _priti_ "to come"

#### Conversion from JOS

All verbs with Type=main have been converted to `VERB`. In addition, some instances of verb _biti_ with Type=auxiliary have also been converted to `VERB` based on pre-existing syntactic annotations, heuristics and manual disambiguation.
<!-- Interlanguage links updated St lis 3 20:58:15 CET 2021 -->
