---
layout: base
title:  'Statistics of appos in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `appos`

This relation is universal.

308 nodes (1%) are attached to their parents as `appos`.

308 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.07467532467532.

The following 11 pairs of parts of speech are connected with `appos`: <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (239; 78% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (47; 15% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (5; 2% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt> (5; 2% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 appos	color:blue
1	et	et	CCONJ	_	_	13	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	a	à	ADP	_	_	4	case	_	gold_pos=ADP|prpos=S|uppos=P
3	l'	le	DET	_	Definite=Def	4	det	_	gold_pos=DET|prpos=Da|SpaceAfter=No|uppos=D
4	aultre	autre	PRON	_	PronType=Ind	13	obl	_	gold_pos=PRON|join=left|prpos=Pi|uppos=PRO
5	estoet	être	AUX	_	VerbForm=Fin	13	aux	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
6	Johanne	Jehanne	PROPN	_	Number=Plur	13	nsubj	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
7	Bequet	Bequet	PROPN	_	Number=Plur	6	flat	_	gold_pos=PROPN|prpos=Np|SpaceAfter=No|uppos=NPRS
8	,	,	PUNCT	_	_	6	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
9	sa	son	DET	_	_	10	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
10	fille	fille	NOUN	_	_	6	appos	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
11	,	,	PUNCT	_	_	10	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
12	toute	tout	ADV	_	_	13	advmod	_	gold_pos=ADV|prpos=Rg|uppos=Q
13	desgree	dégréer	VERB	_	VerbForm=Part	0	root	_	gold_pos=VERB|prpos=Ge|SpaceAfter=No|uppos=VPP
14	.	.	PUNCT	_	_	13	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 15 appos	color:blue
1	Et	et	CCONJ	_	_	2	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	dit	dire	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
3	que	que	SCONJ	_	_	7	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
4	il	il	PRON	_	PronType=Prs	7	expl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
5	n'	ne	ADV	_	Polarity=Neg	7	advmod	_	gold_pos=ADV|prpos=Rp|SpaceAfter=No|uppos=NEG
6	y	y	PRON	_	PronType=Prs	7	obl	_	gold_pos=PRON|join=left|prpos=Pp|uppos=PRO
7	entra	entrer	VERB	_	VerbForm=Fin	2	ccomp	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
8	en	en	ADP	_	_	10	case	_	gold_pos=ADP|prpos=S|uppos=P
9	ladite	ledit	DET	_	Definite=Ind	10	det	_	gold_pos=DET|prpos=Di|uppos=D
10	maison	maison	NOUN	_	_	7	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
11	aultre	autre	ADJ	_	_	12	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
12	personne	personne	NOUN	_	_	7	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
13	que	que	ADV	_	_	15	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
14	la	le	DET	_	Definite=Def	15	det	_	gold_pos=DET|prpos=Da|uppos=D
15	fame	femme	NOUN	_	_	12	appos	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
16	de	de	ADP	_	_	18	case	_	gold_pos=ADP|prpos=S|uppos=P
17	ledit	ledit	DET	_	Definite=Def	18	det	_	gold_pos=DET|prpos=Da|uppos=D
18	du	du	PROPN	_	Number=Plur	15	nmod	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
19	Port	Port	PROPN	_	Number=Plur	18	flat	_	gold_pos=PROPN|prpos=Np|SpaceAfter=No|uppos=NPRS
20	.	.	PUNCT	_	_	2	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 17 appos	color:blue
1	Item	item	ADV	_	_	2	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
2	dit	dire	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
3	que	que	SCONJ	_	_	5	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
4	il	il	PRON	_	PronType=Prs	5	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
5	recongneult	reconnaître	VERB	_	VerbForm=Fin	2	ccomp	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
6	en	en	ADP	_	_	8	case	_	gold_pos=ADP|prpos=S|uppos=P
7	ladite	ledit	DET	_	Definite=Ind	8	det	_	gold_pos=DET|prpos=Di|uppos=D
8	maison	maison	NOUN	_	_	5	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
9	en	en	ADP	_	_	10	mark	_	gold_pos=ADP|prpos=S|uppos=P
10	faisant	faire	VERB	_	_	5	advcl	_	gold_pos=VERB|prpos=Ga|uppos=VG
11	ladite	ledit	DET	_	Definite=Ind	12	det	_	gold_pos=DET|prpos=Di|uppos=D
12	cerche	cherche	NOUN	_	_	10	obj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
13	des	un	DET	_	Definite=Ind	14	det	_	gold_pos=DET|prpos=Dn|uppos=D
14	cordeaulx	cordeau	NOUN	_	Number=Plur	5	obj	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCPL
15	,	,	PUNCT	_	_	14	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
16	l'	le	DET	_	Definite=Def	17	det	_	gold_pos=DET|prpos=Da|SpaceAfter=No|uppos=D
17	ung	un	PRON	_	PronType=Ind	14	appos	_	gold_pos=PRON|join=left|prpos=Pi|uppos=PRO
18	apartenant	appartenir	VERB	_	_	17	acl	_	gold_pos=VERB|prpos=Ga|uppos=VG
19	a	à	ADP	_	_	20	case	_	gold_pos=ADP|prpos=S|uppos=P
20	luy	il	PRON	_	PronType=Prs	18	obl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
21	et	et	CCONJ	_	_	23	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
22	l'	le	DET	_	Definite=Def	23	det	_	gold_pos=DET|prpos=Da|SpaceAfter=No|uppos=D
23	aultre	autre	PRON	_	PronType=Ind	17	conj	_	gold_pos=PRON|join=left|prpos=Pi|uppos=PRO
24	a	à	ADP	_	_	25	case	_	gold_pos=ADP|prpos=S|uppos=P
25	Jammes	Jammes	PROPN	_	Number=Plur	23	orphan	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
26	Ollyvier	Olivier	PROPN	_	Number=Plur	25	flat	_	gold_pos=PROPN|prpos=Np|SpaceAfter=No|uppos=NPRS
27	,	,	PUNCT	_	_	17	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
28	lesquelz	lequel	DET	_	_	29	det	_	gold_pos=DET|prpos=Dr|uppos=WD
29	cordeaulx	cordeau	NOUN	_	Number=Plur	33	obj	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
30	nous	on	PRON	_	PronType=Prs	33	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
31	leur	il	PRON	_	PronType=Prs	33	iobj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
32	avoet	avoir	AUX	_	VerbForm=Fin	33	aux	_	gold_pos=AUX|prpos=Vuc|uppos=AJ
33	desrobey	dérober	VERB	_	VerbForm=Part	14	acl:relcl	_	gold_pos=VERB|prpos=Ge|SpaceAfter=No|uppos=VPP
34	.	.	PUNCT	_	_	2	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


