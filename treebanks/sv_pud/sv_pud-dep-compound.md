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

The following 10 pairs of parts of speech are connected with `compound`: <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (47; 58% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (13; 16% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (7; 9% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (5; 6% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-CCONJ.html">CCONJ</a></tt> (3; 4% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


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
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 compound	color:blue
1	Häxtimmen	häxtimm	NOUN	NN|NEU|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Plur	2	nsubj	2:nsubj	_
2	börjar	börja	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	åtminstone	åtminstone	ADV	AB	_	2	advmod	2:advmod	_
4	när	när	SCONJ	HA	PronType=Int,Rel	8	mark	8:mark	_
5	den	den	DET	DT|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing	7	det	7:det	_
6	läskiga	läskig	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	7	amod	7:amod	_
7	orgeln	orgel	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	8	nsubj:pass	8:nsubj:pass	_
8	spelas	spela	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	2	advcl	2:advcl:när	SpaceAfter=No
9	,	,	PUNCT	MID	_	8	punct	8:punct	_
10	som	som	ADP	KN	_	14	case	14:case	_
11	i	i	ADP	PP	_	14	case	14:case	_
12	60-talshiten	60-talshit	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	14	nmod	14:nmod	_
13	Monster	monster	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	14	compound	14:compound	_
14	Mash	Mash	PROPN	PM|NOM	Case=Nom	8	obl	8:obl:i	SpaceAfter=No
15	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


