---
layout: base
title:  'Statistics of orphan in UD_Swedish-Talbanken'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Talbanken: Relations: `orphan`

This relation is universal.

35 nodes (0%) are attached to their parents as `orphan`.

35 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.97142857142857.

The following 9 pairs of parts of speech are connected with `orphan`: <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt> (12; 34% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-NUM.html">NUM</a></tt> (9; 26% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (3; 9% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> (3; 9% instances), <tt><a href="sv_talbanken-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt> (3; 9% instances), <tt><a href="sv_talbanken-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_talbanken-pos-NUM.html">NUM</a></tt> (2; 6% instances), <tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="sv_talbanken-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 14 orphan	color:blue
1	Musik	musik	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	nsubj	2:nsubj	_
2	förekommer	förekomma	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	i	i	ADP	PP	_	5	case	5:case	_
4	årskurserna	årskurs	NOUN	NN|UTR|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	5	nmod	5:nmod	_
5	7	7	NUM	RG|NOM	Case=Nom|NumType=Card	2	obl	2:obl:i	_
6	och	och	CCONJ	KN	_	5	cc	5:cc	_
7	9	9	NUM	RG|NOM	Case=Nom|NumType=Card	5	nummod	5:nummod	SpaceAfter=No
8	,	,	PUNCT	MID	_	9	punct	9:punct	_
9	teckning	teckning	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	conj	11.1:nsubj	Enhanced=nsubj
10	och	och	CCONJ	KN	_	11	cc	11:cc	_
11	slöjd	slöjd	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	9	conj	9:conj:och|11.1:nsubj	_
12	i	i	ADP	PP	_	14	case	14:case	_
13	samtliga	samtlig	ADJ	JJ|POS|UTR/NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	14	amod	14:amod	_
14	årskurser	årskurs	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	9	orphan	11.1:obl:i	Enhanced=obl|SpaceAfter=No
15	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 orphan	color:blue
1	Se	se	VERB	VB|IMP|AKT	Mood=Imp|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	Arv	arv	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	1	obj	1:obj	_
3	sida	sida	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	4	nmod	4:nmod	_
4	5	5	NUM	RG|NOM	Case=Nom|NumType=Card	1	obl	1:obl	SpaceAfter=No
5	,	,	PUNCT	MID	_	6	punct	6:punct	_
6	Förmyndare	förmyndare	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	1	conj	5.1:obj	Enhanced=obj
7	sida	sida	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	8	nmod	8:nmod	_
8	12	12	NUM	RG|NOM	Case=Nom|NumType=Card	6	orphan	5.1:obl	Enhanced=obl
9	och	och	CCONJ	KN	_	10	cc	9.1:cc	_
10	Testamente	testamente	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	1	conj	9.1:obj	Enhanced=obj
11	sida	sida	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	12	nmod	12:nmod	_
12	22	22	NUM	RG|NOM	Case=Nom|NumType=Card	10	orphan	9.1:obl	Enhanced=obl|SpaceAfter=No
13	.	.	PUNCT	MAD	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 24 orphan	color:blue
1	Men	men	CCONJ	KN	_	4	cc	4:cc	_
2	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	4	expl	4:expl	_
3	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
4	omöjligt	omöjlig	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	0:root	_
5	och	och	CCONJ	KN	_	6	cc	6:cc	_
6	orättvist	orättvis	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	4	conj	4:conj:och	_
7	att	att	PART	IE	_	8	mark	8:mark	_
8	klandra	klandra	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	4	csubj	4:csubj|6:csubj	_
9	en	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	10	det	10:det	_
10	kvinna	kvinna	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	8	obj	8:obj|26:nsubj	_
11	som	som	PRON	HP|-|-|-	PronType=Rel	26	nsubj	10:ref	SpaceAfter=No
12	,	,	PUNCT	MID	_	26	punct	26:punct	_
13	för	för	ADP	PP	_	15	mark	15:mark	_
14	att	att	PART	IE	_	15	mark	15:mark	_
15	göra	göra	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	26	advcl	26:advcl:att	_
16	sin	sig	PRON	PS|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	17	nmod:poss	17:nmod:poss	_
17	man	man	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	15	obj	15:obj|18:nsubj	_
18	lycklig	lycklig	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	15	xcomp	15:xcomp	SpaceAfter=No
19	,	,	PUNCT	MID	_	20	punct	20:punct	_
20	barnen	barn	NOUN	NN|NEU|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Plur	15	conj	19.1:obj|21:nsubj	Enhanced=obj
21	välskötta	välskött	ADJ	PC|PRF|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	20	orphan	19.1:xcomp	Enhanced=xcomp
22	och	och	CCONJ	KN	_	23	cc	22.1:cc	_
23	hemmet	hem	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	15	conj	22.1:obj|24:nsubj	Enhanced=obj
24	trivsamt	trivsam	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	23	orphan	22.1:xcomp	Enhanced=xcomp|SpaceAfter=No
25	,	,	PUNCT	MID	_	26	punct	26:punct	_
26	förkväver	förkväva	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	10	acl:relcl	10:acl:relcl	_
27	andra	annan	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	28	amod	28:amod	_
28	ambitioner	ambition	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	26	obj	26:obj	_
29	och	och	CCONJ	KN	_	30	cc	30:cc	_
30	intressen	intresse	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	28	conj	26:obj|28:conj:och	SpaceAfter=No
31	.	.	PUNCT	MAD	_	4	punct	4:punct	_

~~~


