---
layout: postag
title: 'VERB'
shortdef: 'verb'
udver: '2'
---

### Definition


A verb is a member of the syntactic class of words that typically
signal events and actions, can constitute a minimal predicate in a
clause, and govern the number and types of other constituents which
may occur in the clause. Verbs are often associated with grammatical
categories like tense, mood, aspect and voice, which can either be
expressed inflectionally or using auxilliary verbs or particles.


The BulTreeBank annotation scheme provides the following mappings here: _main verbs_ and _modal verbs_.
Note that modal verbs do not have special labels in our annotation scheme.
Participles and gerund are considered also `VERB`. Below the specific labels that map to `VERB` are given.

### Examples

- Vp# (finite verb): _тичам_ / _ticham_ "run"
- Vn# (impersonal verb): _вали, трябва_ / _vali, tryabva_ "It rains, must"
- V#cv# (past passive participle): _намерен_ / _nameren_ "found". It is also mapped to [ADJ]() in its attributive usages.
- V#cam# (past imperfective participle): _четял_ / _chetyal_ "He was reading"
- V#cao# (past perfective participle): _дошъл_ / _doshal_ "He has come". It is also mapped to [ADJ]() in its attributive usages.
- V#g (gerund): _Идвайки_ / _idvayki_ "Coming"

Note that the present active participle _V#car#_ is mapped only to [ADJ]().

Note that the symbol `#', used in the Universal POS section indicates a holder for arbitrary number of features, suppressed in the respective tag as irrelevant in the BulTreeBank tagset, when mapped to the Universal one.
<!-- Interlanguage links updated Čt lis 12 09:42:58 CET 2020 -->
