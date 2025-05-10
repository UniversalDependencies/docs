---
layout: base
title:  'Statistics of aux in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="fr_alts-dep-aux-pass.html">aux:pass</a></tt>.

744 nodes (2%) are attached to their parents as `aux`.

743 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.20698924731183.

The following 5 pairs of parts of speech are connected with `aux`: <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-AUX.html">AUX</a></tt> (728; 98% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-AUX.html">AUX</a></tt> (8; 1% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-AUX.html">AUX</a></tt> (5; 1% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 aux	color:blue
1	Et	et	CCONJ	_	_	2	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	dit	dire	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
3	que	que	SCONJ	_	_	11	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
4	teille	tel	DET	_	Definite=Ind	5	det	_	gold_pos=DET|prpos=Di|uppos=D
5	choze	chose	NOUN	_	_	11	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
6	jamais	jamais	ADV	_	_	11	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
7	il	il	PRON	_	PronType=Prs	11	expl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
8	ne	ne	ADV	_	Polarity=Neg	11	advmod	_	gold_pos=ADV|prpos=Rp|uppos=NEG
9	luy	il	PRON	_	PronType=Prs	11	iobj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
10	estoet	être	AUX	_	VerbForm=Fin	11	aux	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
11	advenu	advenir	VERB	_	VerbForm=Part	2	ccomp	_	gold_pos=VERB|prpos=Ge|SpaceAfter=No|uppos=VPP
12	.	.	PUNCT	_	_	2	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 12 aux	color:blue
1	Et	et	CCONJ	_	_	7	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	de	de	ADP	_	_	3	case	_	gold_pos=ADP|prpos=S|uppos=P
3	cuyder	cuider	VERB	_	VerbForm=Inf	7	obl	_	gold_pos=VERB|prpos=Vvn|uppos=VX
4	et	et	CCONJ	_	_	6	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
5	de	de	ADP	_	_	6	case	_	gold_pos=ADP|prpos=S|uppos=P
6	croire	croire	VERB	_	VerbForm=Inf	3	conj	_	gold_pos=VERB|prpos=Vvn|uppos=VX
7	raporte	rapporter	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
8	que	que	SCONJ	_	_	15	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
9	ledit	ledit	DET	_	Definite=Ind	10	det	_	gold_pos=DET|prpos=Di|uppos=D
10	Martin	Martin	PROPN	_	Number=Plur	15	nsubj	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
11	en	en	PRON	_	PronType=Prs	15	nmod	_	gold_pos=PRON|prpos=Pp|uppos=PRO
12	a	avoir	AUX	_	VerbForm=Fin	15	aux	_	gold_pos=AUX|prpos=Vuc|uppos=AJ
13	estey	être	AUX	_	VerbForm=Part	15	cop	_	gold_pos=AUX|prpos=Ge|uppos=EPP
14	la	le	DET	_	Definite=Def	15	det	_	gold_pos=DET|prpos=Da|uppos=D
15	cause	cause	NOUN	_	_	7	ccomp	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
16	par	par	ADP	_	_	18	case	_	gold_pos=ADP|prpos=S|uppos=P
17	son	son	DET	_	_	18	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
18	sort	sort	NOUN	_	_	15	nmod	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
19	.	.	PUNCT	_	_	7	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 aux	color:blue
1	Et	et	CCONJ	_	_	6	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	incontinent	incontinent	ADV	_	_	6	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
3	sadite	sondit	DET	_	_	4	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
4	fame	femme	NOUN	_	_	6	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
5	fut	être	AUX	_	VerbForm=Fin	6	aux:pass	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
6	prynse	prendre	VERB	_	VerbForm=Part	0	root	_	gold_pos=VERB|prpos=Ge|uppos=VPP
7	de	de	ADP	_	_	8	case	_	gold_pos=ADP|prpos=S|uppos=P
8	mall	mal	NOUN	_	_	6	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
9	et	et	CCONJ	_	_	12	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
10	a	avoir	AUX	_	VerbForm=Fin	12	aux	_	gold_pos=AUX|prpos=Vuc|uppos=AJ
11	estey	être	AUX	_	VerbForm=Part	12	cop	_	gold_pos=AUX|prpos=Ge|uppos=EPP
12	malade	malade	ADJ	_	_	6	conj	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
13	bien	bien	ADV	_	_	15	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
14	l'	le	DET	_	Definite=Def	15	det	_	gold_pos=DET|prpos=Da|SpaceAfter=No|uppos=D
15	espasse	espace	NOUN	_	_	12	obl	_	gold_pos=NOUN|join=left|prpos=Nc|uppos=NCS
16	de	de	ADP	_	_	18	case	_	gold_pos=ADP|prpos=S|uppos=P
17	.xiiii.	quatorze	NUM	_	NumType=Card	18	nummod	_	gold_pos=NUM|prpos=Mc|uppos=ADJNUM
18	sepmainnes	semaine	NOUN	_	Number=Plur	15	nmod	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCPL
19	.	.	PUNCT	_	_	6	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


