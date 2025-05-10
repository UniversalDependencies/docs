---
layout: relation
title: 'nmod:pred'
shortdef: 'nominal functioning as a(n obligatory) secondary predicate of a verbal noun'
udver: '2'
---

The `nmod:pred` relation denotes a nominal dependent of a verbal noun that is an obligatory secondary predicate of the verbal noun, normally in the Essive case.

~~~ conllu
# text = ილუზიონისტი ახერხებს შარფის კურდღლად გადაქცევას
# text-transcription = iluzionisṭi axerxebs šarpis ḳurdġlad gadakcevas
# translation = the illusionist achieves the transformation of a scarf into a hare.
1	ილუზიონისტი	ილუზიონისტი	NOUN	_	Animacy=Anim|Case=Nom|Number=Sing	2	nsubj	_	LMSeg:ილუზიონისტ·ი
2	ახერხებს	ხერხება	VERB	_	Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Pres	0	root	_	LMSeg:*·ხერხებ[ა]/ხერხ
3	შარფის	შარფი	NOUN	_	Case=Gen|Number=Sing	5	nmod	_	LMSeg:შარფ·ი
4	კურდღლად	კურდღელი	NOUN	_	Case=Ess|Number=Sing	5	nmod:pred	_	LMSeg:კურდღ[ე]ლ·ი
5	გადაქცევას	გადაქცევა	NOUN	_	Case=Dat|Number=Sing|VerbForm=Vnoun	2	obj	_	LMSeg:გადა·ქცევ[ა]/ქც

~~~
<!-- Interlanguage links updated So 10. května 2025, 18:15:45 CEST -->
