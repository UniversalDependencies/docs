---
layout: base
title:  'Naija UD'
udver: '2'
---

# UD for Naija <span class="flagspan"><img class="flag" src="../../flags/svg/NG.svg" /></span>

This UD treebank is built from the transcription of audio recordings made in 2017 for the ANR project NaijaSyncor. This oral corpus is characterised by occasional codeswitching to English and native Nigerian languages. Sections codeswitched to English have been annotated following the UD English conventions. Below are a few elements concerning the Naija sections. 

## Tokenization and Word Segmentation

 * Words are delimited by whitespace or punctuation. 
 * Multiword tokens are not used in Naija.

## Morphology

### Tags

 * Naija uses all 16 of the universal tags (except SYM, not relevant for oral data).
 * The words tagged PART are …
 * Auxiliaries (AUX) are particles that precede the invariable lexical form of the verb.
	* The copulas na, be and dey
	* The past auxiliary bin.
	* The aspectual auxiliaries con (Consecutive), dey (Imperfective), don (Perfective), go (Prospective), never (Negative Perfective), 
	* The modal auxiliaries, fit (Ability), for (Conditional), gats (Obligative), make (Subjunctive)
 * The tag DET is used for determiners such as articles, deictics, etc. 
 * The tag PRON is used for pronouns occurring as head of noun phrases and for possessive modifiers.

### Features

 * Nouns have no Gender and sometimes inflect for plural Number. 
 * Pronouns inflect for Number, Gender, and Case. 
 * Verbs are invariable in Naija. TAM is marked on Auxiliaries. 
 * Adjectives function as modifiers of nouns and as stative Verbs. They do not agree with Nouns and only inflect for Degree.

## Syntax

The annotation is done in SUD (Surface-Syntactic Universal Dependencies) with an automatic translation into UD. SUD uses the same tagset and features as UD but has a different distribution-based dependency structure.

- We distinguish arguments, modifiers, and peripherals in the `obl` relation: `obl:arg`, `obl:mod` `obl:periph`
- We used `conj:coord` instead of `coord`.
- We used `conj:dicto` instead of `reparandum`.
- We use `compound:redup` for reduplications and `compound:svc` for serial verb constructions.
- We distinguish 6 types of parataxis: `parataxis:conj`, `parataxis:discourse`, `parataxis:dislocated`, `parataxis:insert`, `parataxis:obj`, `parataxis:parenth`.
