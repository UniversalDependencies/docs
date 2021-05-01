---
layout: postag
title: 'AUX'
shortdef: 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "sl/pos/AUX.html"
udver: '2'
---

### Definition

An auxiliary is a function word that accompanies the lexical verb of a verb phrase and expresses grammatical distinctions not carried by the lexical verb, such as person, number, tense, mood, aspect, voice or evidentiality.. In Slovenian, the AUX tag is used for the verb _biti_ "to be" accompanying a lexical verb (e.g. _Tistega večera <b>sem</b> preveč popil._ "I drank too much that evening.") and in copula constructions (_To <b>je</b>. grozno._ "This is horrible.").

In all other cases (e.g. content verb), _biti_ is marked as [verb](VERB).

### Examples

* _Tistega večera <b>sem</b>.`AUX` preveč popil.`VERB`._ "I drank too much that evening."
* _V bolnišnici <b>bodo</b>.`AUX` uvedli.`VERB` šolo za starše._ "A parenting school will be introduced in the hospital."
* _Kam <b>bi</b>.`AUX` se lahko zatekla.`VERB`?_ "Where could she have hidden?"

* _To <b>je</b>.`AUX` grozno._ "This is horrible."
* _Za nami <b>je</b>.`AUX` dolga vrsta._ "There is a long queue behind us."
* _Vsi <b>smo</b>.`AUX` <b>bili</b>.`AUX` zadovoljni._ "We were all content."  

#### Conversion from JOS

In JOS-annotated ssj500k, all instances of verb _biti_ "to be" have been annotated as Type=auxiliary. To separate the actual auxiliary function from other functions, a combination of syntax-based heuristics and manual disambiguation has been used.
<!-- Interlanguage links updated Čt lis 12 09:42:51 CET 2020 -->
