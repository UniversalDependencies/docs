---
layout: base
title:  'Statistics of xcomp in UD_Old_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Old_French-ALTM: Relations: `xcomp`

This relation is universal.

163 nodes (1%) are attached to their parents as `xcomp`.

163 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.95092024539877.

The following 5 pairs of parts of speech are connected with `xcomp`: <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-VERB.html">VERB</a></tt> (146; 90% instances), <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-ADJ.html">ADJ</a></tt> (11; 7% instances), <tt><a href="fro_altm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fro_altm-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="fro_altm-pos-ADV.html">ADV</a></tt>-<tt><a href="fro_altm-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	il	il	PRON	_	PronType=Prs	3	nsubj	_	prpos=Pp|uppos=PRO
2	se	se	PRON	_	PronType=Prs	3	expl	_	prpos=Pp|uppos=PRO
3	lessa	laisser	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	prpos=Vvc|uppos=VJ
4	metre	mettre	VERB	_	VerbForm=Inf	3	xcomp	_	prpos=Vvn|uppos=VX
5	en	en	ADP	_	_	6	case	_	prpos=S|uppos=P
6	defaute	défaute	NOUN	_	Number=Sing	4	obl	_	prpos=Nc|SpaceAfter=No|uppos=NCS
7	;	;	PUNCT	_	_	3	punct	_	join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 xcomp	color:blue
1	Jugié	juger	VERB	_	Tense=Past|VerbForm=Part	0	root	_	prpos=Ge|uppos=VPP
2	fu	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	1	aux:pass	_	prpos=Vuc|uppos=EJ
3	que	que	SCONJ	_	_	8	mark	_	prpos=Cs|uppos=CONJS
4	le	le	DET	_	Definite=Def|PronType=Art	5	det	_	prpos=Da|uppos=D
5	tenant	tenant	NOUN	_	Number=Sing	8	nsubj	_	prpos=Nc|uppos=NCS
6	s'	se	PRON	_	PronType=Prs	8	expl	_	prpos=Pp|uppos=PRO
7	en	en	PRON	_	PronType=Prs	8	obl	_	prpos=Pp|uppos=PRO
8	iroit	aller	VERB	_	Number=Sing|Person=3|VerbForm=Fin	1	ccomp	_	prpos=Vvc|uppos=VJ
9	quite	quitte	ADJ	_	_	8	xcomp	_	prpos=Ag|uppos=ADJ
10	et	et	CCONJ	_	_	11	cc	_	prpos=Cc|uppos=CONJO
11	deffendu	défendre	VERB	_	Tense=Past|VerbForm=Part	9	conj	_	prpos=Ge|uppos=VPP
12	de	de	ADP	_	_	14	case	_	prpos=S|uppos=P
13	le	le	DET	_	Definite=Def|PronType=Art	14	det	_	prpos=Da|uppos=D
14	marchié	marché	NOUN	_	Number=Sing	9	nmod	_	prpos=Nc|SpaceAfter=No|uppos=NCS
15	.	.	PUNCT	_	_	1	punct	_	join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	et	et	CCONJ	_	_	3	cc	_	prpos=Cc|uppos=CONJO
2	sui	être	AUX	_	Number=Sing|Person=1|VerbForm=Fin	3	cop	_	prpos=Vuc|uppos=EJ
3	prest	prêt	ADJ	_	_	0	root	_	prpos=Ag|uppos=ADJ
4	de	de	ADP	_	_	5	mark	_	prpos=S|uppos=P
5	deresner	déraisner	VERB	_	VerbForm=Inf	3	xcomp	_	prpos=Vvn|uppos=VX
6	m'	je	PRON	_	PronType=Prs	5	expl	_	prpos=Pp|uppos=PRO
7	en	en	PRON	_	PronType=Prs	5	obl	_	prpos=Pp|uppos=PRO
8	a	à	ADP	_	_	10	case	_	prpos=S|uppos=P
9	l'	le	DET	_	Definite=Def|PronType=Art	10	det	_	prpos=Da|uppos=D
10	esgart	égard	NOUN	_	Number=Sing	5	obl	_	prpos=Nc|uppos=NCS
11	de	de	ADP	_	_	13	case	_	prpos=S|uppos=P
12	la	le	DET	_	Definite=Def|PronType=Art	13	det	_	prpos=Da|uppos=D
13	court	cour	NOUN	_	Number=Sing	10	nmod	_	prpos=Nc|uppos=NCS
14	»	»	PUNCT	_	_	3	punct	_	prpos=Fo|SpaceAfter=No|uppos=PON
15	.	.	PUNCT	_	_	3	punct	_	join=left|prpos=Fs|uppos=PONFP

~~~


