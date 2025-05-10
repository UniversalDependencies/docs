---
layout: base
title:  'Statistics of nmod in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `nmod`

This relation is universal.

1979 nodes (5%) are attached to their parents as `nmod`.

1949 instances of `nmod` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.94492167761496.

The following 13 pairs of parts of speech are connected with `nmod`: <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (1158; 59% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt> (641; 32% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (47; 2% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (44; 2% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (38; 2% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt> (27; 1% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (12; 1% instances), <tt><a href="fr_alts-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_alts-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 nmod	color:blue
1	et	et	CCONJ	_	_	11	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	dempuys	depuis	ADV	_	_	11	advmod	_	gold_pos=ADV|prpos=Rg|SpaceAfter=No|uppos=ADV
3	,	,	PUNCT	_	_	11	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
4	petyt	petit	NOUN	_	_	11	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
5	a	à	ADP	_	_	6	case	_	gold_pos=ADP|prpos=S|uppos=P
6	petyt	petit	NOUN	_	_	4	nmod	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
7	,	,	PUNCT	_	_	4	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
8	il	il	PRON	_	PronType=Prs	11	expl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
9	luy	il	PRON	_	PronType=Prs	11	iobj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
10	est	être	AUX	_	VerbForm=Fin	11	aux:pass	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
11	amendey	amender	VERB	_	VerbForm=Part	0	root	_	gold_pos=VERB|prpos=Ge|SpaceAfter=No|uppos=VPP
12	.	.	PUNCT	_	_	11	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 nmod	color:blue
1	Et	et	CCONJ	_	_	3	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	aprés	après	ADV	_	_	3	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
3	partyrent	partir	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
4	pour	pour	ADP	_	_	5	mark	_	gold_pos=ADP|prpos=S|uppos=P
5	aller	aller	VERB	_	VerbForm=Inf	3	advcl	_	gold_pos=VERB|prpos=Vvn|uppos=VX
6	vers	vers	ADP	_	_	8	case	_	gold_pos=ADP|prpos=S|uppos=P
7	la	le	DET	_	Definite=Def	8	det	_	gold_pos=DET|prpos=Da|uppos=D
8	coste	côte	NOUN	_	_	5	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
9	d'	de	ADP	_	_	10	case	_	gold_pos=ADP|prpos=S|SpaceAfter=No|uppos=P
10	Espaingne	Espagne	PROPN	_	Number=Plur	8	nmod	_	gold_pos=PROPN|join=left|prpos=Np|uppos=NPRS

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 nmod	color:blue
1	Totezfoys	toutefois	ADV	_	_	4	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
2	il	il	PRON	_	PronType=Prs	4	expl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
3	y	y	PRON	_	PronType=Prs	4	obl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
4	eult	avoir	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vuc|uppos=AJ
5	ung	un	PRON	_	PronType=Ind	4	obj	_	gold_pos=PRON|prpos=Pi|uppos=PRO
6	de	de	ADP	_	_	8	case	_	gold_pos=ADP|prpos=S|uppos=P
7	leurs	leur	DET	_	_	8	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
8	gentz	gens	NOUN	_	Number=Plur	5	nmod	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
9	tuey	tuer	VERB	_	VerbForm=Part	8	acl	_	gold_pos=VERB|prpos=Ge|SpaceAfter=No|uppos=VPP
10	,	,	PUNCT	_	_	5	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
11	ung	un	DET	_	Definite=Ind	13	det	_	gold_pos=DET|prpos=Dn|uppos=D
12	brave	brave	ADJ	_	_	13	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
13	home	homme	NOUN	_	_	5	appos	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
14	,	,	PUNCT	_	_	4	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


