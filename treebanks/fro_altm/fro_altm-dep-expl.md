---
layout: base
title:  'Statistics of expl in UD_Old_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Old_French-ALTM: Relations: `expl`

This relation is universal.

139 nodes (1%) are attached to their parents as `expl`.

134 instances of `expl` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.83453237410072.

The following 2 pairs of parts of speech are connected with `expl`: <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-PRON.html">PRON</a></tt> (137; 99% instances), <tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fro_altm-pos-PRON.html">PRON</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl	color:blue
1	il	il	PRON	_	PronType=Prs	3	nsubj	_	prpos=Pp|uppos=PRO
2	se	se	PRON	_	PronType=Prs	3	expl	_	prpos=Pp|uppos=PRO
3	lessa	laisser	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	prpos=Vvc|uppos=VJ
4	metre	mettre	VERB	_	VerbForm=Inf	3	xcomp	_	prpos=Vvn|uppos=VX
5	en	en	ADP	_	_	6	case	_	prpos=S|uppos=P
6	defaute	défaute	NOUN	_	Number=Sing	4	obl	_	prpos=Nc|SpaceAfter=No|uppos=NCS
7	;	;	PUNCT	_	_	3	punct	_	join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 expl	color:blue
1	Item	item	ADV	_	_	6	advmod	_	prpos=Rg|SpaceAfter=No|uppos=ADV
2	,	,	PUNCT	_	_	1	punct	_	join=left|prpos=Fw|uppos=PON
3	il	il	PRON	_	PronType=Prs	6	expl	_	prpos=Pp|uppos=PRO
4	est	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	6	cop	_	prpos=Vuc|uppos=EJ
5	v.	cinq	NUM	_	NumType=Card	6	nummod	_	prpos=Mc|uppos=ADJNUM
6	cas	cas	NOUN	_	Number=Plur	0	root	_	prpos=Nc|uppos=NCPL
7	en	en	ADP	_	_	8	case	_	prpos=S|uppos=P
8	visconté	vicomté	NOUN	_	Number=Sing	6	obl	_	prpos=Nc|uppos=NCS
9	de	de	ADP	_	_	10	case	_	prpos=S|uppos=P
10	quoi	quoi	PRON	_	PronType=Rel	15	obl	_	prpos=Pr|uppos=WPRO
11	le	le	DET	_	Definite=Def|PronType=Art	12	det	_	prpos=Da|uppos=D
12	justice	justice	NOUN	_	Number=Sing	15	nsubj	_	prpos=Nc|uppos=NCS
13	se	se	PRON	_	PronType=Prs	15	expl	_	prpos=Pp|uppos=PRO
14	puet	pouvoir	AUX	_	Number=Sing|Person=3|VerbForm=Fin	15	aux	_	prpos=Vvc|uppos=MDJ
15	recorder	recorder	VERB	_	VerbForm=Inf	6	acl:relcl	_	prpos=Vvn|SpaceAfter=No|uppos=VX
16	:	:	PUNCT	_	_	6	punct	_	join=left|prpos=Fw|uppos=PON

~~~


