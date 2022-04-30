---
layout: base
title:  'Statistics of cc:preconj in UD_Indonesian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-GSD: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="id_gsd-dep-cc.html">cc</a></tt>.

7 nodes (0%) are attached to their parents as `cc:preconj`.

7 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.28571428571429.

The following 3 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_gsd-pos-CCONJ.html">CCONJ</a></tt> (4; 57% instances), <tt><a href="id_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_gsd-pos-CCONJ.html">CCONJ</a></tt> (2; 29% instances), <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_gsd-pos-CCONJ.html">CCONJ</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 16 cc:preconj	color:blue
1	Pada	pada	ADP	R--	_	2	case	_	MorphInd=^pada<r>_R--$
2	penggunaan	guna	NOUN	NSD	Number=Sing	8	obl	_	MorphInd=^peN+guna<n>+an_NSD$
3	di	di	ADP	R--	_	4	case	_	MorphInd=^di<r>_R--$
4	zaman	zaman	NOUN	NSD	Number=Sing	2	nmod	_	MorphInd=^zaman<n>_NSD$
5	modern	modern	ADJ	ASP	_	4	amod	_	SpaceAfter=No|MorphInd=^modern<a>_ASP$
6	,	,	PUNCT	Z--	_	2	punct	_	MorphInd=^,<z>_Z--$
7	ondol	ondol	NOUN	X--	_	8	nsubj	_	MorphInd=^ondol<x>_X--$
8	mengacu	acu	VERB	VSA	Mood=Ind|Voice=Act	0	root	_	MorphInd=^meN+acu<v>_VSA$
9	pada	pada	ADP	R--	_	11	case	_	MorphInd=^pada<r>_R--$
10	segala	segala	DET	B--	PronType=Tot	11	det	_	MorphInd=^segala<b>_B--$
11	macam	macam	NOUN	NSD	Number=Sing	8	obl	_	MorphInd=^macam<n>_NSD$
12	pemanas	panas	NOUN	NSD	Number=Sing	11	compound	_	MorphInd=^peN+panas<n>_NSD$
13	bawah	bawah	NOUN	NSD	Number=Sing	12	compound	_	MorphInd=^bawah<n>_NSD$
14	tanah	tanah	NOUN	NSD	Number=Sing	13	compound	_	SpaceAfter=No|MorphInd=^tanah<n>_NSD$
15	,	,	PUNCT	Z--	_	18	punct	_	MorphInd=^,<z>_Z--$
16	baik	baik	CCONJ	ASP	_	18	cc:preconj	_	MorphInd=^baik<a>_ASP$
17	di	di	ADP	R--	_	18	case	_	MorphInd=^di<r>_R--$
18	hotel	hotel	NOUN	NSD	Number=Sing	11	nmod	_	MorphInd=^hotel<n>_NSD$
19	maupun	maupun	CCONJ	H--	_	21	cc	_	MorphInd=^maupun<h>_H--$
20	di	di	ADP	R--	_	21	case	_	MorphInd=^di<r>_R--$
21	rumah	rumah	NOUN	NSD	Number=Sing	18	conj	_	MorphInd=^rumah<n>_NSD$
22	gaya	gaya	NOUN	NSD	Number=Sing	21	compound	_	MorphInd=^gaya<n>_NSD$
23	Barat	barat	PROPN	NSD	_	22	nmod	_	MorphInd=^barat<n>_NSD$
24	di	di	ADP	R--	_	25	case	_	MorphInd=^di<r>_R--$
25	Korea	korea	PROPN	NSD	_	21	nmod	_	SpaceAfter=No|MorphInd=^korea<n>_NSD$
26	.	.	PUNCT	Z--	_	8	punct	_	MorphInd=^.<z>_Z--$

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 19 cc:preconj	color:blue
1	Dengan	dengan	ADP	R--	_	12	advmod	_	MWEPOS=SCONJ|MorphInd=^dengan<r>_R--$
2	demikian	demikian	PRON	S--	PronType=Dem	1	fixed	_	MorphInd=^demikian<s>_S--$
3	pelaksanaan	laksana	NOUN	NSD	Number=Sing	12	nsubj	_	MorphInd=^peN+laksana<v>+an_NSD$
4	Al	al	PROPN	F--	_	3	nmod	_	MorphInd=^al<f>_F--$
5	Hadist	hadist	PROPN	X--	_	4	flat:name	_	MorphInd=^hadist<x>_X--$
6	dikalangan	dikalangan	ADP	VSP	_	7	case	_	MorphInd=^di+kalangan<n>_VSP$
7	umat	umat	NOUN	NSD	Number=Sing	3	nmod	_	MorphInd=^umat<n>_NSD$
8	Islam	islam	NOUN	NSD	Number=Sing	7	compound	_	MorphInd=^islam<n>_NSD$
9	saat	saat	NOUN	NSD	Number=Sing	3	nmod	_	MorphInd=^saat<n>_NSD$
10	itu	itu	DET	B--	PronType=Dem	9	det	_	MorphInd=^itu<b>_B--$
11	selalu	selalu	ADV	D--	_	12	advmod	_	MorphInd=^selalu<d>_D--$
12	berada	ada	VERB	VSA	Mood=Ind|Voice=Act	0	root	_	MorphInd=^ber+ada<a>_VSA$
13	dalam	dalam	ADP	ASP	_	14	case	_	MorphInd=^dalam<a>_ASP$
14	kendali	kendali	NOUN	NSD	Number=Sing	12	obl	_	MorphInd=^kendali<n>_NSD$
15	dan	dan	CCONJ	H--	_	16	cc	_	MorphInd=^dan<h>_H--$
16	pengawasan	kawasan	NOUN	NSD	Number=Sing	14	conj	_	MorphInd=^peN+kawasan<n>_NSD$
17	Nabi	nabi	PROPN	NSD	_	16	nmod	_	MorphInd=^nabi<n>_NSD$
18	Muhammad	muhammad	PROPN	NSD	_	17	flat:name	_	MorphInd=^muhammad<n>_NSD$
19	baik	baik	CCONJ	ASP	_	21	cc:preconj	_	MorphInd=^baik<a>_ASP$
20	secara	secara	ADP	R--	_	21	case:adv	_	MorphInd=^secara<r>_R--$
21	langsung	langsung	ADJ	D--	_	12	advmod	_	MorphInd=^langsung<d>_D--$
22	maupun	maupun	CCONJ	H--	_	24	cc	_	MorphInd=^maupun<h>_H--$
23	tidak	tidak	PART	G--	Polarity=Neg	24	advmod	_	MorphInd=^tidak<g>_G--$
24	langsung	langsung	ADJ	D--	_	21	conj	_	SpaceAfter=No|MorphInd=^langsung<d>_D--$
25	.	.	PUNCT	Z--	_	12	punct	_	MorphInd=^.<z>_Z--$

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cc:preconj	color:blue
1	Baik	baik	CCONJ	ASP	_	2	cc:preconj	_	MorphInd=^baik<a>_ASP$
2	William	william	PROPN	F--	_	5	nsubj:pass	_	MorphInd=^william<f>_F--$
3	dan	dan	CCONJ	H--	_	4	cc	_	MorphInd=^dan<h>_H--$
4	Comita	comita	PROPN	X--	_	2	conj	_	MorphInd=^comita<x>_X--$
5	diperingati	ingat	VERB	VSP	Mood=Ind|Voice=Pass	0	root	_	MorphInd=^di+per+ingat<v>+i_VSP$
6	untuk	untuk	ADP	R--	_	9	case	_	MorphInd=^untuk<r>_R--$
7	yang	yang	PRON	S--	PronType=Rel	9	nsubj	_	MorphInd=^yang<s>_S--$
8	kedua	kedua	ADJ	CO-	NumType=Ord	9	amod	_	MorphInd=^ke+dua<c>_CO-$
9	kali	kali	NOUN	VSA	_	5	obl	_	MorphInd=^kali<v>_VSA$
10	nya	dia	PRON	PS3	Number=Sing|Person=3|PronType=Prs	9	nmod:poss	_	MorphInd=^dia<p>_PS3$
11	untuk	untuk	SCONJ	R--	_	12	mark	_	MorphInd=^untuk<r>_R--$
12	mengikuti	ikut	VERB	VSA	Mood=Ind|Voice=Act	5	xcomp	_	MorphInd=^meN+ikut<v>+i_VSA$
13	Biagio	biagio	PROPN	X--	_	12	obj	_	MorphInd=^biagio<x>_X--$
14	dalam	dalam	ADP	ASP	_	15	case	_	MorphInd=^dalam<a>_ASP$
15	hal	hal	NOUN	NSD	Number=Sing	12	obl	_	MorphInd=^hal<n>_NSD$
16	tersebut	tersebut	DET	B--	PronType=Dem	15	det	_	SpaceAfter=No|MorphInd=^tersebut<b>_B--$
17	.	.	PUNCT	Z--	_	5	punct	_	MorphInd=^.<z>_Z--$

~~~


