---
layout: postag
title: 'PRON'
shortdef: 'pronoun'
---

### Definition

Pronouns are words that substitute for [nouns](NOUN) or noun phrases,
whose meaning is recoverable from the linguistic or extralinguistic
context.

Specializations of pronouns correspond to different language specific PoS leading to different values for the [PronType]() feature.

### Correspondance between language specific PoS and PronTypes

- PC (clitic pronouns) -> PronType=Clit
- PD (demonstrative pronouns) -> PronType=Dem
- PE (personal pronouns) -> PronType=Prs
- PI (indefinite pronouns) -> PronType=Ind
- PP (possessive pronouns) -> PronType=Prs|Poss=Yes
- PQ (interrogative pronouns) -> PronType=Int
- PR (relative pronouns) -> PronType=Rel 

Note: the PronType=Clit feature is specific for Italian.

### Examples

- clitic pronouns: _ci, si, vi, la, lo, gli_, including reflexive pronouns
- demonstrative pronouns: _questo, codesto, coloro, medesimo, quello, ciò, _ as in: _<b>Questo</b> è strano_ "This is strange"
- personal pronouns: _io, tu, te, lui, lei, egli, esso, noi, loro_
- indefinite pronouns: _uno, altri, qualcuno, qualcosa, ciascuno_
- possessive pronouns: _mio, suo, loro_
- interrogative pronouns: _chi, che, cosa, quanto, quale_ as in _<b>Cosa</b> pensi?_ "What do you think?"
- relative pronouns: _che, cui, quale_ as in _Il film <b>che</b> ho visto._ "The movie that I have seen" (Note, nowever, that some relative clause introducing words, such as _che_ [en] _that_ are better analyzed as subordinating conjunctions (otherwise known as "complementizers" in the literature), and so are tagged as [SCONJ]().)
- totality pronouns: _tutti, tutto_
- negative pronouns: _nessuno, niente, nulla_


