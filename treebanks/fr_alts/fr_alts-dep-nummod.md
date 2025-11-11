---
layout: base
title:  'Statistics of nummod in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `nummod`

This relation is universal.

540 nodes (1%) are attached to their parents as `nummod`.

463 instances of `nummod` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22407407407407.

The following 4 pairs of parts of speech are connected with `nummod`: <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-NUM.html">NUM</a></tt> (531; 98% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-NUM.html">NUM</a></tt> (5; 1% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Il	il	PRON	_	PronType=Prs	3	expl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
2	y	y	PRON	_	PronType=Prs	3	obl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
3	a	avoir	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vuc|uppos=AJ
4	deulx	deux	NUM	_	NumType=Card	5	nummod	_	gold_pos=NUM|prpos=Mc|uppos=ADJNUM
5	ans	an	NOUN	_	Number=Plur	3	obj	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
6	que	que	SCONJ	_	_	12	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
7	je	je	PRON	_	PronType=Prs	12	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
8	n'	ne	ADV	_	Polarity=Neg	12	advmod	_	gold_pos=ADV|prpos=Rp|SpaceAfter=No|uppos=NEG
9	en	en	PRON	_	PronType=Prs	12	obl	_	gold_pos=PRON|join=left|prpos=Pp|uppos=PRO
10	n*avoes	avoir	AUX	_	VerbForm=Fin	12	aux	_	gold_pos=AUX|prpos=Vuc|uppos=AJ
11	auttant	autant	ADV	_	_	12	advmod	_	gold_pos=ADV|prpos=Rg|uppos=Q
12	achapté	acheter	VERB	_	VerbForm=Part	3	advcl	_	gold_pos=VERB|prpos=Ge|SpaceAfter=No|uppos=VPP
13	.	.	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP
14	»	»	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 nummod	color:blue
1	Laquelle	lequel	DET	WD	PronType=Rel	2	det	_	prpos=Dr
2	ceremonie	cérémonie	NOUN	NCS	Number=Sing	12	nsubj	_	prpos=Nc
3	de	de	ADP	P	_	4	mark	_	prpos=S
4	leuer	lever	VERB	VX	VerbForm=Inf	2	acl	_	prpos=Vvn
5	la	le	DET	D	Definite=Def|PronType=Art	6	det	_	prpos=Da
6	main	main	NOUN	NCS	Number=Sing	4	obj	_	prpos=Nc
7	à	à	ADP	P	_	9	case	_	prpos=S
8	le	le	DET	P	Definite=Def|PronType=Art	9	det	_	prpos=Da
9	ciel	ciel	NOUN	NCS	Number=Sing	4	obl	_	prpos=Nc|SpaceAfter=No
10	,	,	PUNCT	PON	_	12	punct	_	join=left|prpos=Fw
11	est	être	AUX	EJ	Number=Sing|Person=3|VerbForm=Fin	12	aux:pass	_	prpos=Vuc
12	tireé	tirer	VERB	VPP	Tense=Past|VerbForm=Part	0	root	_	prpos=Ge
13	de	de	ADP	P	_	16	case	_	prpos=S
14	la	le	DET	D	Definite=Def|PronType=Art	16	det	_	prpos=Da
15	saincte	saint	ADJ	ADJ	_	16	amod	_	prpos=Ag
16	Escriture.	écriture	NOUN	NCS	Number=Sing	12	obl	_	prpos=Nc
17	Deut.	Deutéronome	PROPN	NPRS	Number=Sing	16	flat	_	prpos=Np
18	32	trente-deux	NUM	NUM	NumType=Card	17	nummod	_	prpos=Mc|SpaceAfter=No
19	.	.	PUNCT	PON	_	12	punct	_	join=left|prpos=Fw

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Voire	voire	ADV	ADV	_	0	root	_	prpos=Rg
2	encores	encore	ADV	ADV	ExtPos=SCONJ	7	mark	_	prpos=Rg
3	que	que	SCONJ	CONJS	_	2	fixed	_	prpos=Cs
4	les	le	DET	D	Definite=Def|PronType=Art	6	det	_	prpos=Da
5	cinq	cinq	NUM	NUM	NumType=Card	6	nummod	_	prpos=Mc
6	autres	autre	PRON	PRO	PronType=Ind	7	nsubj	_	prpos=Pi
7	rapportent	rapporter	VERB	VJ	Number=Plur|Person=3|VerbForm=Fin	1	advcl	_	prpos=Vvc
8	le	le	DET	D	Definite=Def|PronType=Art	9	det	_	prpos=Da
9	contraire	contraire	NOUN	NCS	Number=Sing	7	obj	_	prpos=Nc|SpaceAfter=No
10	.	.	PUNCT	PON	_	1	punct	_	join=left|prpos=Fw

~~~


