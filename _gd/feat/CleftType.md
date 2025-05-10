---
layout: feature
title: 'CleftType'
shortdef: 'CleftType'
udver: '2'
---

There are two main types of clefted constructions in Scottish Gaelic.

One of them, introduced by _'s e_ or _'s i_ and variants, moves a noun or noun phrase in the nominative case to the front of the sentence.
The other, introduced by 's ann and variants, moves oblique noun phrases, adjectives, adverbs, simple noun phrases indicating time, location or dimension and verbs to the front of the sentence.
These interact differently with the sorts of clauses and complements they are in so they are marked with a distinct `CleftType` to aid validation.

### <a name="Nom">`Nom`</a>: nominal

The use case for this cleft type is so that a validator can identify when verbal clauses and complements such as advcl or ccomp or acl have a non-verb as their head and not throw an error.

#### Examples

* _'S i <b>Mòrag</b> a rinn a bhanais_ 'it was <b>Morag</b> who had the wedding'.

### <a name="Adj">`Adj`</a>: adjectival

#### Examples

* _'S ann <b>dubh</b> a tha e_ 'it is <b>black</b> that it is'

### <a name="Adv">`Adv`</a>: adverbial

#### Examples

* _Is ann <b>a-raoir</b> nach d' fhuair mi cadal_ 'it was <b>last night</b> that I got no sleep'

### <a name="Obl">`Obl`</a>: oblique

Only the head node is tagged.

The use case for this is that the adposition will be linked to the head with a case deprel, but that head will have a clausal/complemental deprel to the rest of the sentence, and this is the sort of thing that validators should normally object to.
This allows exceptions to be built in.

#### Examples

* _'S ann an <b>Ìle</b> rugadh mi_ 'it was in <b>Islay</b> that I was born'
* _Is ann <b>Diluain</b> a sheòl an long_ 'it was on Monday that the boat sailed'

### <a name="Verb">`Verb`</a>: verb

In edited text it is usually the case that a subordinate clause is fronted.

#### Examples

* _B' ann nuair a <b>bha</b> Uilleam is Màiri Anna pòsda ann an Glaschu a chuireadh eòlas an toiseach orra._ 'It was when William and Mary Anne <b>were</b> married in Glasgow that they got the news'
* _Cha b' ann gus an do <b>chaochail</b> Lachlann Thorrloisg..._ 'It was not until Lachlann Thorrloisg <b>died</b>..._
<!-- Interlanguage links updated So 10. května 2025, 18:13:58 CEST -->
