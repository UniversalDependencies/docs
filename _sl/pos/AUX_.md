---
layout: postag
title: 'AUX'
shortdef: 'auxiliary verb'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "sl/pos/AUX.html"
---

### Definition

An auxiliary verb is a verb that accompanies the lexical verb of a verb phrase and expresses grammatical distinctions not carried by the lexical verb, such as person, number, tense, mood, aspect, and voice. In Slovenian, only instances of the verb _biti_ "to be" that accompany lexical [verbs](VERB) are marked as `AUX`.

### Examples

* _Tistega večera <b>sem</b>.`AUX` preveč popil.`VERB`._ "I drank too much that evening."
* _V bolnišnici <b>bodo</b>.`AUX` uvedli.`VERB` šolo za starše._ "A parenting school will be introduced in the hospital."
* _Kam <b>bi</b>.`AUX` se lahko zatekla.`VERB`?_ "Where could she have hidden?"

#### Delimitation
 
Note that in cases, where _biti_ is used independently as a copula or a content verb, it is marked as [verb](VERB):

* _To <b>je</b>.`VERB` grozno._ "This is horrible."
* _Za nami <b>je</b>.`VERB` dolga vrsta._ "There is a long queue behind us."
* _Vsi smo.`AUX` <b>bili</b>.`VERB` zadovoljni._ "We were all content."  

#### Conversion from JOS

In ssj500k, all instances of verb _biti_ "to be" have been annotated as Type=auxiliary. To separate the actual auxiliary function from other functions, syntax has to be taken into account. Thus, tokens of _biti_ bearing the dependency relation PPart with a main verb become annotated as `AUX˙.
<!-- Interlanguage links updated Út zář 29 20:31:27 CEST 2020 -->
