---
layout: base
title:  'Statistics of acl in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="fr_pud-dep-acl-relcl.html">acl:relcl</a></tt>.

152 nodes (1%) are attached to their parents as `acl`.

150 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.94078947368421.

The following 3 pairs of parts of speech are connected with `acl`: <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (149; 98% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="fr_pud-pos-X.html">X</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 acl	color:blue
1	5000	5000	NUM	CD	_	2	nummod	_	_
2	dollars	dollar	NOUN	NN	Gender=Masc|Number=Plur	0	root	_	_
3	par	par	ADP	IN	_	4	case	_	_
4	personne	personne	NOUN	NN	Gender=Fem|Number=Sing	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	,	_	7	punct	_	_
6	le	le	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	maximum	maximum	NOUN	NN	Gender=Masc|Number=Sing	2	appos	_	_
8	autorisé	autoriser	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	7	acl	_	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 19 acl	color:blue
1	Leur	son	DET	DTP$	Gender=Fem|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=3|Poss=Yes|PronType=Prs	2	det	_	wordform=leur
2	expansion	expansion	NOUN	NN	Gender=Fem|Number=Sing	5	nsubj:pass	_	_
3	fut	être	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	aux:pass	_	_
4	cependant	cependant	ADV	RB	_	5	advmod	_	_
5	retardée	retarder	VERB	VBN	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	jusqu'	jusqu'	ADP	IN	_	8	case	_	SpaceAfter=No
7	à	à	ADP	IN	_	8	case	_	_
8	ce	ce	PRON	PDEM	PronType=Dem	5	obl	_	_
9	que	que	ADP	IN	_	19	mark	_	_
10	des	un	DET	DT	Definite=Ind|Gender=Masc|Number=Plur|PronType=Art	11	det	_	_
11	navires	navire	NOUN	NN	Gender=Masc|Number=Plur	19	nsubj:pass	_	_
12	assez	assez	ADV	RB	_	13	advmod	_	_
13	robustes	robuste	ADJ	JJ	Gender=Masc|Number=Plur	11	amod	_	_
14	pour	pour	ADP	IN	_	15	mark	_	_
15	traverser	traverser	VERB	VB	VerbForm=Inf	13	advcl	_	_
16	les	le	DET	DT	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	17	det	_	_
17	mers	mer	NOUN	NN	Gender=Fem|Number=Plur	15	obj	_	_
18	soient	être	AUX	VBC	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	19	aux:pass	_	_
19	construits	construire	VERB	VBN	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	8	acl	_	SpaceAfter=No
20	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 acl	color:blue
1	Le	le	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	wordform=le
2	Royal	royal	X	FW	Foreign=Yes	14	nsubj	_	Proper=True
3	National	national	X	FW	Foreign=Yes	2	flat:foreign	_	Proper=True
4	Park	Park	X	FW	Foreign=Yes	2	flat:foreign	_	Proper=True
5	d'	de	ADP	IN	_	6	case	_	SpaceAfter=No
6	Australie	Australie	PROPN	NNP	Gender=Fem|Number=Sing	2	nmod	_	SpaceAfter=No
7	,	,	PUNCT	,	_	8	punct	_	_
8	ouvert	ouvrir	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	acl	_	_
9	en	en	ADP	IN	_	10	case	_	_
10	1879	1879	NUM	CD	_	8	obl	_	SpaceAfter=No
11	,	,	PUNCT	,	_	8	punct	_	_
12	fut	être	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	14	cop	_	_
13	le	le	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	deuxième	deuxième	ADJ	JJ	Gender=Masc|Number=Sing	0	root	_	_
15	de	de	ADP	INDT	_	17	case	_	_
16	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	monde	monde	NOUN	NN	Gender=Masc|Number=Sing	14	nmod	_	_
18	à	à	ADP	IN	_	20	mark	_	_
19	officiellement	officiellement	ADV	RB	_	20	advmod	_	_
20	voir	voir	VERB	VB	VerbForm=Inf	14	xcomp	_	_
21	le	le	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	_	_
22	jour	jour	NOUN	NN	Gender=Masc|Number=Sing	20	obj	_	SpaceAfter=No
23	.	.	PUNCT	.	_	14	punct	_	_

~~~


