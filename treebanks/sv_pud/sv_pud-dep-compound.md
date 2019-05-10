---
layout: base
title:  'Statistics of compound in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="sv_pud-dep-compound-prt.html">compound:prt</a></tt>.

81 nodes (0%) are attached to their parents as `compound`.

81 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35802469135802.

The following 11 pairs of parts of speech are connected with `compound`: <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (42; 52% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (14; 17% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (10; 12% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (6; 7% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-CCONJ.html">CCONJ</a></tt> (3; 4% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
1	Yas	Yas	PROPN	PM|NOM	Case=Nom	2	compound	2:compound	_
2	Marina	Marina	PROPN	PM|NOM	Case=Nom	3	compound	3:compound	_
3	Circuits	Circuit	PROPN	PM|GEN	Case=Gen	4	nmod:poss	4:nmod:poss	_
4	hemsida	hemsida	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	nsubj	5:nsubj	_
5	har	ha	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	exakta	exakt	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	7	amod	7:amod	_
7	tider	tid	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	5	obj	5:obj	SpaceAfter=No
8	.	.	PUNCT	MAD	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 compound	color:blue
1	2011	2011	NUM	RG|NOM	Case=Nom	2	obl	2:obl	_
2	utnämndes	utnämna	VERB	VB|PRT|SFO	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	0:root	_
3	Blunt	Blunt	PROPN	PM|NOM	Case=Nom	2	nsubj:pass	2:nsubj:pass|5:nsubj	_
4	till	till	ADP	PP	_	5	case	5:case	_
5	ambassadörska	ambassadörska	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	xcomp	2:xcomp	_
6	för	för	ADP	PP	_	11	case	11:case	_
7	den	den	DET	DT|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing	11	det	11:det	_
8	nya	ny	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	11	amod	11:amod	_
9	Yves	yvas	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	11	compound	11:compound	_
10	Saint	Saint	PROPN	PM|NOM	Case=Nom	11	compound	11:compound	_
11	Laurent-doften	laurent-doft	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	5	nmod	5:nmod:för	SpaceAfter=No
12	,	,	PUNCT	MID	_	13	punct	13:punct	_
13	Opium	opium	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	11	appos	11:appos	SpaceAfter=No
14	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 compound	color:blue
1	Wright	Wright	PROPN	PM|NOM	Case=Nom	2	nsubj	2:nsubj	_
2	har	ha	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	en	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing	4	det	4:det	_
4	bror	bror	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	obj	2:obj|10:nsubj|13:nsubj	SpaceAfter=No
5	,	,	PUNCT	MID	_	6	punct	6:punct	_
6	Oscar	Oscar	PROPN	PM|NOM	Case=Nom	4	appos	4:appos	SpaceAfter=No
7	,	,	PUNCT	MID	_	10	punct	10:punct	_
8	som	som	PRON	HP|-|-|-	PronType=Int,Rel	10	nsubj	4:ref	_
9	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	10:cop	_
10	serietidningskonstnär	serietidningskonstnär	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	4	acl:relcl	4:acl:relcl	SpaceAfter=No
11	,	,	PUNCT	MID	_	13	punct	13:punct	_
12	som	som	PRON	HP|-|-|-	PronType=Int,Rel	13	nsubj	4:ref	_
13	bidrar	bidra	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	acl:relcl	4:acl:relcl	_
14	med	med	ADP	PP	_	15	case	15:case	_
15	bildmanus	bildmanus	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	13	obl	13:obl:med	SpaceAfter=No
16	,	,	PUNCT	MID	_	18	punct	18:punct	_
17	concept	concept	NOUN	UO	Foreign=Yes	18	compound	18:compound	_
18	art	art	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	15	conj	13:obl:med|15:conj:och	_
19	och	och	CCONJ	KN	_	20	cc	20:cc	_
20	reklambilder	reklambilder	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	15	conj	13:obl:med|15:conj:och	_
21	för	för	ADP	PP	_	23	case	23:case	_
22	Edgars	Edgar	PROPN	PM|GEN	Case=Gen	23	nmod:poss	23:nmod:poss	_
23	filmer	film	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	13	obl	13:obl:för	SpaceAfter=No
24	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


