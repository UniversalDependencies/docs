---
layout: base
title:  'Statistics of acl in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="fr_alts-dep-acl-relcl.html">acl:relcl</a></tt>.

598 nodes (1%) are attached to their parents as `acl`.

592 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.06020066889632.

The following 11 pairs of parts of speech are connected with `acl`: <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (510; 85% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (40; 7% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (16; 3% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (13; 2% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 acl	color:blue
1	et	et	CCONJ	_	_	3	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	en	en	PRON	_	PronType=Prs	3	obl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
3	partyrent	partir	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
4	il	il	PRON	_	ExtPos=ADP|PronType=Prs	9	case	_	gold_pos=PRON|prpos=Pp|uppos=PRO
5	y	y	PRON	_	PronType=Prs	4	fixed	_	gold_pos=PRON|prpos=Pp|uppos=PRO
6	a	à	ADP	_	_	4	fixed	_	gold_pos=ADP|prpos=S|uppos=P
7	viron	viron	ADV	_	_	9	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
8	ung	un	DET	_	Definite=Ind	9	det	_	gold_pos=DET|prpos=Dn|uppos=D
9	moes	mois	NOUN	_	_	3	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
10	passey	passer	VERB	_	VerbForm=Part	9	acl	_	gold_pos=VERB|prpos=Ge|SpaceAfter=No|uppos=VPP
11	.	.	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 acl	color:blue
1	Iugé	juger	VERB	VPP	Tense=Past|VerbForm=Part	0	root	_	prpos=Ge
2	par	par	ADP	P	_	3	case	_	prpos=S
3	arrest	arrêt	NOUN	NCS	Number=Sing	1	obl	_	prpos=Nc
4	le	le	DET	D	Definite=Def|PronType=Art	5	det	_	prpos=Da
5	13.	treizième	ADJ	ADJNUM	NumType=Card	1	obl	_	prpos=Mc
6	de	de	ADP	P	_	7	case	_	prpos=S
7	May	mai	NOUN	NCS	Number=Sing	5	nmod	_	prpos=Nc
8	1513.	1513	NUM	NUM	NumType=Card	7	nmod	_	prpos=Mc
9	entre	entre	ADP	P	_	10	case	_	prpos=S
10	Iean	Jean	PROPN	NPRS	Number=Sing	1	obl	_	prpos=Np
11	et	et	CCONJ	CONJO	_	12	cc	_	prpos=Cc|wordform=[et]
12	Paul	Paul	PROPN	NPRS	Number=Sing	10	conj	_	prpos=Np
13	dits	dire	VERB	VPP	Tense=Past|VerbForm=Part	10	acl	_	prpos=Ge
14	Hamon	Hamon	PROPN	NPRS	Number=Sing	13	xcomp	_	prpos=Np
15	freres	frère	NOUN	NCPL	Number=Plur	14	appos	_	prpos=Nc|SpaceAfter=No
16	.	.	PUNCT	PON	_	1	punct	_	join=left|prpos=Fw

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 acl	color:blue
1	L'	le	DET	D	Definite=Def|PronType=Art	2	det	_	prpos=Da
2	vne	un	PRON	PRO	PronType=Ind	0	root	_	join=left|prpos=Pi
3	quand	quand	SCONJ	CONJS	_	6	mark	_	prpos=Cs
4	on	on	PRON	PRO	PronType=Prs	6	nsubj	_	prpos=Pp
5	fait	faire	AUX	VJ	Number=Sing|Person=3|VerbForm=Fin	6	aux	_	prpos=Vvc
6	iurer	jurer	VERB	VX	VerbForm=Inf	2	acl	_	prpos=Vvn
7	langueur	langueur	NOUN	NCS	Number=Sing	6	obj	_	prpos=Nc
8	à	à	ADP	P	_	9	case	_	prpos=S
9	celuy	celui	PRON	PRO	PronType=Dem	6	obl	_	prpos=Pd
10	qui	qui	PRON	WPRO	PronType=Rel	12	nsubj	_	prpos=Pr
11	a	avoir	AUX	AJ	Number=Sing|Person=3|VerbForm=Fin	12	aux	_	prpos=Vuc
12	eu	avoir	VERB	APP	Tense=Past|VerbForm=Part	9	acl:relcl	_	prpos=Ge
13	toutes	tout	DET	Q	Definite=Ind	15	det	_	prpos=Di
14	ses	son	DET	DZ	Poss=Yes	15	det	_	prpos=Ds
15	exoines	essoine	NOUN	NCPL	Number=Plur	12	obj	_	prpos=Nc|SpaceAfter=No
16	,	,	PUNCT	PON	_	21	punct	_	join=left|prpos=Fw
17	de	de	ADP	P	_	18	case	_	prpos=S
18	quoy	quoi	PRON	WPRO	PronType=Rel	21	obl	_	prpos=Pr
19	a	avoir	AUX	AJ	Number=Sing|Person=3|VerbForm=Fin	21	aux	_	prpos=Vuc
20	esté	être	AUX	EPP	Tense=Past|VerbForm=Part	21	aux:pass	_	prpos=Ge
21	parlé	parler	VERB	VPP	Tense=Past|VerbForm=Part	2	acl:relcl	_	prpos=Ge
22	à	à	ADP	P	_	24	case	_	prpos=S
23	le	le	DET	P	Definite=Def|PronType=Art	24	det	_	prpos=Da
24	titre	titre	NOUN	NCS	Number=Sing	21	obl	_	prpos=Nc
25	De	de	ADP	P	_	26	case	_	prpos=S
26	langueur	langueur	NOUN	NCS	Number=Sing	24	flat	_	prpos=Nc|SpaceAfter=No
27	.	.	PUNCT	PON	_	2	punct	_	join=left|prpos=Fw

~~~


