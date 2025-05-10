---
layout: relation
title:  'acl:relcl'
shortdef : 'relative clause modifier'
udver: '2'
---

`acl:relcl` connects a clause to a noun phrase.
Usually the verb is marked by the relative particle _a_ but this may be omitted in speech.

### Examples

~~~ conllu
1	Thàinig	thig	VERB	V-s	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
2	nighean	nighean	NOUN	Ncsfn	Case=Nom|Gender=Fem|Number=Sing	1	nsubj	_	_
3	a	a	PART	Q-r	PartType=Vb|PronType=Rel	4	nsubj	_	_
4	bha	bi	VERB	V-s	Mood=Ind|Tense=Past|VerbForm=Fin	2	acl:relcl	_	_
5	a'	ag	PART	Sa	_	6	case	_	_
6	frìthealadh	frìtheal	NOUN	Nv	VerbForm=Vnoun	4	xcomp:pred	_	_
7	is	is	CCONJ	Cc	_	8	cc	_	_
8	dh'iarr	iarr	VERB	V-s	Mood=Ind|Tense=Past|VerbForm=Fin	1	conj	_	_
9	Màiri	Màiri	PROPN	Nn-fn	Case=Nom|Gender=Fem	8	nsubj	_	_
10	cupa	cupa	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	8	obj	_	_
11	ti	ti	NOUN	Ncsfg	Case=Gen|Gender=Fem|Number=Sing	10	nmod	_	SpaceAfter=No
~~~

'The girl who was serving came and Màiri ordered a cup of tea.' (f01\_089)

~~~ conllu
1	facal	facal	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
2-3	den	_	_	_	_	_	_	_	_
2	de	de	ADP	Sp	_	4	case	_	_
3	an	an	DET	Tds	Definite=Def|Number=Sing|PronType=Art	4	det	_	_
4	chànain	cànan	NOUN	Ncsfd	Case=Dat|Gender=Fem|Number=Sing	1	nmod	_	_
5	anns	an	ADP	Sp	_	7	case	_	_
6	an	an	PART	Qq	PartType=Vb|PronType=Int	7	mark:prt	_	_
7	robh	bi	VERB	V-s--d	Mood=Ind|Tense=Past|VerbForm=Fin	4	acl:relcl	_	_
8	ise	i	PRON	Pp3sf-e	Form=Emp|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
9	cho	cho	ADV	Rg	AdvType=Man	10	advmod	_	_
10	fileanta	fileanta	ADJ	Ap	_	7	xcomp:pred	_	SpaceAfter=No
~~~

'a word of the language in which she was so fluent' (f01\_097)

### Related deprels

* [acl](acl.html) for "content clauses". These have no relative particle.
* [advcl:relcl](advcl-relcl.html) for the analogous case where the head is an adverb or possibly an adjective or adverb.
* [csubj:cleft](csubj-cleft.html) for where a relative clause is part of a cleft sentence.
* [csubj:cop](csubj-cop.html) for where a relative clause is part of a different sort of sentence including a copula.
<!-- Interlanguage links updated So 10. května 2025, 18:14:45 CEST -->
