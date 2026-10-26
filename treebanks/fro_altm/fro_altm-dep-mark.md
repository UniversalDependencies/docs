---
layout: base
title:  'Statistics of mark in UD_Old_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Old_French-ALTM: Relations: `mark`

This relation is universal.

828 nodes (5%) are attached to their parents as `mark`.

827 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.64734299516908.

The following 10 pairs of parts of speech are connected with `mark`: <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-SCONJ.html">SCONJ</a></tt> (565; 68% instances), <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-ADP.html">ADP</a></tt> (164; 20% instances), <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-ADV.html">ADV</a></tt> (55; 7% instances), <tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fro_altm-pos-SCONJ.html">SCONJ</a></tt> (20; 2% instances), <tt><a href="fro_altm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fro_altm-pos-SCONJ.html">SCONJ</a></tt> (9; 1% instances), <tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fro_altm-pos-ADV.html">ADV</a></tt> (6; 1% instances), <tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fro_altm-pos-ADP.html">ADP</a></tt> (5; 1% instances), <tt><a href="fro_altm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fro_altm-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="fro_altm-pos-ADV.html">ADV</a></tt>-<tt><a href="fro_altm-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 mark	color:blue
1	Jugié	juger	VERB	_	Tense=Past|VerbForm=Part	0	root	_	prpos=Ge|uppos=VPP
2	fu	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	1	aux:pass	_	prpos=Vuc|uppos=EJ
3	que	que	SCONJ	_	_	6	mark	_	prpos=Cs|uppos=CONJS
4	il	il	PRON	_	PronType=Prs	6	nsubj	_	prpos=Pp|uppos=PRO
5	l'	il	PRON	_	PronType=Prs	6	obj	_	prpos=Pp|uppos=PRO
6	amendast	amender	VERB	_	Number=Sing|Person=3|VerbForm=Fin	1	ccomp	_	prpos=Vvc|uppos=VJ
7	avant	avant	ADV	_	_	6	advmod	_	prpos=Rg|SpaceAfter=No|uppos=ADV
8	.	.	PUNCT	_	_	1	punct	_	join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 mark	color:blue
1	le	le	DET	_	Definite=Def|PronType=Art	2	det	_	prpos=Da|uppos=D
2	deffendeor	défendeur	NOUN	_	Number=Sing	3	nsubj	_	prpos=Nc|uppos=NCS
3	proposoit	proposer	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	prpos=Vvc|uppos=VJ
4	plusors	plusieurs	DET	_	Definite=Ind	5	det	_	prpos=Di|uppos=Q
5	articles	article	NOUN	_	Number=Plur	3	obl	_	prpos=Nc|uppos=NCPL
6	por	pour	ADP	_	_	9	mark	_	prpos=S|uppos=P
7	le	le	DET	_	Definite=Def|PronType=Art	8	det	_	prpos=Da|uppos=D
8	brief	bref	NOUN	_	Number=Sing	9	obj	_	prpos=Nc|uppos=NCS
9	abatre	abattre	VERB	_	VerbForm=Inf	3	advcl	_	prpos=Vvn|SpaceAfter=No|uppos=VX
10	.	.	PUNCT	_	_	3	punct	_	join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 8 mark	color:blue
1	quar	car	CCONJ	_	_	4	cc	_	prpos=Cc|uppos=CONJO
2	ele	il	PRON	_	PronType=Prs	4	nsubj	_	prpos=Pp|uppos=PRO
3	n'	ne	ADV	_	Polarity=Neg	4	advmod	_	prpos=Rp|uppos=NEG
4	a	avoir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	prpos=Vuc|uppos=AJ
5	point	point	ADV	_	Polarity=Neg	4	advmod	_	prpos=Rg|uppos=ADVNEG
6	de	de	DET	_	Definite=Ind	7	det	_	prpos=Dn|uppos=D
7	action	action	NOUN	_	Number=Sing	4	obj	_	prpos=Nc|uppos=NCS
8	tant	tant	ADV	_	ExtPos=SCONJ	12	mark	_	prpos=Rg|uppos=ADV
9	comme	comme	SCONJ	_	_	8	fixed	_	prpos=Cs|uppos=CONJS
10	son	son	DET	_	Poss=Yes	11	det	_	prpos=Ds|uppos=DZ
11	mari	mari	NOUN	_	Number=Sing	12	nsubj	_	prpos=Nc|uppos=NCS
12	vit	vivre	VERB	_	Number=Sing|Person=3|VerbForm=Fin	4	advcl	_	prpos=Vvc|SpaceAfter=No|uppos=VJ
13	.	.	PUNCT	_	_	4	punct	_	join=left|prpos=Fs|uppos=PONFP

~~~


