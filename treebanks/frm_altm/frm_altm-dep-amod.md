---
layout: base
title:  'Statistics of amod in UD_Middle_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Middle_French-ALTM: Relations: `amod`

This relation is universal.

219 nodes (3%) are attached to their parents as `amod`.

145 instances of `amod` (66%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.08675799086758.

The following 5 pairs of parts of speech are connected with `amod`: <tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="frm_altm-pos-ADJ.html">ADJ</a></tt> (204; 93% instances), <tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="frm_altm-pos-ADP.html">ADP</a></tt> (6; 3% instances), <tt><a href="frm_altm-pos-PROPN.html">PROPN</a></tt>-<tt><a href="frm_altm-pos-ADJ.html">ADJ</a></tt> (5; 2% instances), <tt><a href="frm_altm-pos-PRON.html">PRON</a></tt>-<tt><a href="frm_altm-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="frm_altm-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 amod	color:blue
1	Si	si	ADV	_	_	2	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
2	dirons	dire	VERB	_	Number=Plur|Person=1|VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
3	premièrement	premièrement	ADV	_	_	2	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
4	de	de	ADP	_	_	6	case	_	gold_pos=ADP|prpos=S|uppos=P
5	les	le	DET	_	Definite=Def|PronType=Art	6	det	_	gold_pos=DET|prpos=Da|uppos=D
6	ajournemens	ajournement	NOUN	_	Number=Plur	2	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
7	en	en	ADP	_	_	8	case	_	gold_pos=ADP|prpos=S|uppos=P
8	cas	cas	NOUN	_	Number=Sing	6	nmod	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
9	civil	civil	ADJ	_	_	8	amod	_	gold_pos=ADJ|prpos=Ag|SpaceAfter=No|uppos=ADJ
10	:	:	PUNCT	_	_	2	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 amod	color:blue
1	La	le	DET	_	Definite=Def|PronType=Art	2	det	_	gold_pos=DET|prpos=Da|uppos=D
2	fourme	fourme	NOUN	_	Number=Sing	5	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
3	de	de	ADP	_	_	4	case	_	gold_pos=ADP|prpos=S|uppos=P
4	lequel	lequel	PRON	_	PronType=Rel	2	nmod	_	gold_pos=PRON|prpos=Pr|uppos=WPRO
5	est	être	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vuc|uppos=EJ
6	à	à	ADP	_	_	9	case	_	gold_pos=ADP|prpos=S|uppos=P
7	le	le	DET	_	Definite=Def|PronType=Art	9	det	_	gold_pos=DET|prpos=Da|uppos=D
8	prouchain	prochain	ADJ	_	_	9	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
9	chappitre	chapitre	NOUN	_	Number=Sing	5	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
10	en	en	ADP	_	ExtPos=ADJ	9	amod	_	gold_pos=ADP|prpos=S|uppos=P
11	suivant	suivre	VERB	_	Tense=Pres|VerbForm=Part	10	fixed	_	gold_pos=VERB|prpos=Ga|SpaceAfter=No|uppos=VG
12	.	.	PUNCT	_	_	5	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
1	Requérant	requérir	VERB	_	Tense=Pres|VerbForm=Part	0	root	_	gold_pos=VERB|prpos=Ga|uppos=VG
2	le	le	DET	_	Definite=Def|PronType=Art	4	det	_	gold_pos=DET|prpos=Da|uppos=D
3	dit	dit	ADJ	_	_	4	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
4	G.	G	PROPN	_	Number=Sing	1	obj	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
5	à	à	ADP	_	_	12	mark	_	gold_pos=ADP|prpos=S|uppos=P
6	lui	il	PRON	_	PronType=Prs	12	iobj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
7	estre	être	AUX	_	VerbForm=Inf	12	aux	_	gold_pos=AUX|prpos=Vun|uppos=EX
8	sur	sur	ADP	_	_	9	case	_	gold_pos=ADP|prpos=S|uppos=P
9	ce	ce	PRON	_	PronType=Dem	12	obl	_	gold_pos=PRON|prpos=Pd|uppos=PRO
10	par	par	ADP	_	_	11	case	_	gold_pos=ADP|prpos=S|uppos=P
11	nous	nous	PRON	_	PronType=Prs	12	obl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
12	pourveu	pourvoir	VERB	_	Tense=Past|VerbForm=Part	1	xcomp	_	gold_pos=VERB|prpos=Ge|SpaceAfter=No|uppos=VPP
13	.	.	PUNCT	_	_	1	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


