---
layout: base
title:  'Statistics of dislocated in UD_Greek-Cretan'
udver: '2'
---

## Treebank Statistics: UD_Greek-Cretan: Relations: `dislocated`

This relation is universal.

2 nodes (0%) are attached to their parents as `dislocated`.

2 instances of `dislocated` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.5.

The following 2 pairs of parts of speech are connected with `dislocated`: <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-ADJ.html">ADJ</a></tt> (1; 50% instances), <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-PRON.html">PRON</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 7 dislocated	color:blue
1	Εκατό	εκατό	NUM	NmCd	Case=Acc|Gender=Masc|Number=Plur|NumType=Card	7	nummod	_	_
2	,	,	PUNCT	PUNCT	_	4	punct	_	PunctType=Comm
3	εκατόν	εκατόν	NUM	NmCd	Case=Acc|Gender=Masc|Number=Plur|NumType=Card	4	compound	_	_
4	πενήντα	πενήντα	NUM	NmCd	Case=Acc|Gender=Masc|Number=Plur|NumType=Card	1	conj	_	_
5	,	,	PUNCT	PUNCT	_	6	punct	_	PunctType=Comm
6	διακόσιους	διακόσιοι	NUM	NmCd	Case=Acc|Gender=Masc|Number=Plur|NumType=Card	1	conj	_	_
7	φάρδους	φάρδος	ADJ	AjBa	Case=Acc|Gender=Masc|Number=Plur	12	dislocated	_	_
8	γεμάτους	γεμάτος	ADJ	AjBa	Case=Acc|Gender=Masc|Number=Plur	7	advcl	_	_
9	ελιές	ελιά	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Plur	8	obl	_	_
10	είχενε	έχω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
11	να	να	SCONJ	PtSj	_	12	mark	_	_
12	αλέσει	αλέθω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	10	xcomp	_	_
13	ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	κουμπάρος	κουμπάρος	NOUN	AjBa	Case=Nom|Gender=Masc|Number=Sing	12	nsubj	_	_
15	ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	Στελιανός	Στελιανός	PROPN	NoPr	Case=Nom|Gender=Masc|Number=Sing	14	appos	_	_
17	.	.	PUNCT	PTERMP	_	10	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 dislocated	color:blue
1	«	«	PUNCT	OPUNCT	_	8	punct	_	PunctType=Quot|SpaceAfter=No
2	Χέρι	Χέρι	NOUN	NoCm	Case=Nom|Gender=Neut|Number=Sing	8	obj	_	_
3	που	που	PRON	PnRe	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	5	dislocated	_	_
4	δεν	δεν	PART	PtNg	Polarity=Neg	5	advmod	_	_
5	μπορείς	μπορώ	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl:relcl	_	_
6	να	να	SCONJ	PtSj	_	7	mark	_	_
7	κόψεις	κόβγω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	5	ccomp	_	_
8	προσκύνα	προσκύνα	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Sing	11	ccomp	_	_
9	το	εγώ	PRON	NoCm	Case=Acc|Gender=Neut|Number=Sing|PronType=Prs	8	expl	_	SpaceAfter=No
10	»	»	PUNCT	NoCm	_	8	punct	_	PunctType=Quot
11	σκέφτηκε	σκέφτομαι	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
12	αυτός	αυτός	DET	PnDm	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	11	nsubj	_	_
13	και	και	CCONJ	CjCo	_	14	cc	_	_
14	παίρνει	παίρνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	conj	_	_
15	ένα	ένας	DET	AtId	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	16	det	_	_
16	αλευροσάκι	αλευροσάκι	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Sing	14	obj	_	_
17	και	και	CCONJ	CjCo	_	18	cc	_	_
18	δίδει	δίδω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	conj	_	mwe=1:VID
19	των	ο	DET	AtDf	Case=Gen|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	20	det	_	mwe=1
20	αμμαθιών	αμμάτι	NOUN	AjBa	Case=Gen|Gender=Neut|Number=Plur	18	obj	_	mwe=1
21	ντου	εγώ	PRON	NoPr	Case=Gen|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	20	nmod	_	mwe=1|SpaceAfter=No|Voicing=Voiced
22	.	.	PUNCT	PTERMP	_	11	punct	_	PunctType=Peri

~~~


