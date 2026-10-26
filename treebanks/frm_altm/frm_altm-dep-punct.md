---
layout: base
title:  'Statistics of punct in UD_Middle_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Middle_French-ALTM: Relations: `punct`

This relation is universal.

646 nodes (9%) are attached to their parents as `punct`.

585 instances of `punct` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 18.9210526315789.

The following 8 pairs of parts of speech are connected with `punct`: <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="frm_altm-pos-PUNCT.html">PUNCT</a></tt> (444; 69% instances), <tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="frm_altm-pos-PUNCT.html">PUNCT</a></tt> (156; 24% instances), <tt><a href="frm_altm-pos-PRON.html">PRON</a></tt>-<tt><a href="frm_altm-pos-PUNCT.html">PUNCT</a></tt> (14; 2% instances), <tt><a href="frm_altm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="frm_altm-pos-PUNCT.html">PUNCT</a></tt> (13; 2% instances), <tt><a href="frm_altm-pos-ADV.html">ADV</a></tt>-<tt><a href="frm_altm-pos-PUNCT.html">PUNCT</a></tt> (10; 2% instances), <tt><a href="frm_altm-pos-PROPN.html">PROPN</a></tt>-<tt><a href="frm_altm-pos-PUNCT.html">PUNCT</a></tt> (6; 1% instances), <tt><a href="frm_altm-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="frm_altm-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="frm_altm-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="frm_altm-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 punct	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 punct	color:blue
1	Et	et	CCONJ	_	_	10	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	de	de	ADP	_	_	5	case	_	gold_pos=ADP|prpos=S|uppos=P
3	tous	tout	DET	_	PronType=Ind	5	det	_	gold_pos=DET|prpos=Di|uppos=D
4	iceulx	icelui	DET	_	PronType=Dem	5	det	_	gold_pos=DET|prpos=Dd|uppos=D
5	adjournemens	ajournement	NOUN	_	Number=Plur	10	obl	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCPL
6	,	,	PUNCT	_	_	5	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
7	la	le	DET	_	Definite=Def|PronType=Art	8	det	_	gold_pos=DET|prpos=Da|uppos=D
8	fourme	fourme	NOUN	_	Number=Sing	10	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
9	s'	se	PRON	_	PronType=Prs	10	expl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
10	ensuit	ensuivre	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|SpaceAfter=No|uppos=VJ
11	.	.	PUNCT	_	_	10	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 punct	color:blue
1	sy	si	SCONJ	_	_	2	mark	_	gold_pos=ADV|prpos=Rg|uppos=ADV
2	nul	nul	PRON	_	PronType=Ind	5	advcl	_	gold_pos=PRON|prpos=Pi|SpaceAfter=No|uppos=PRO
3	,	,	PUNCT	_	_	2	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
4	je	je	PRON	_	PronType=Prs	5	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
5	croy	croire	VERB	_	Number=Sing|Person=1|VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
6	que	que	SCONJ	_	_	9	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
7	je	je	PRON	_	PronType=Prs	9	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
8	puis	pouvoir	AUX	_	Number=Sing|Person=1|VerbForm=Fin	9	aux	_	gold_pos=AUX|prpos=Vvc|uppos=MDJ
9	tollerer	tolérer	VERB	_	VerbForm=Inf	5	ccomp	_	gold_pos=VERB|prpos=Vvn|SpaceAfter=No|uppos=VX
10	.	.	PUNCT	_	_	5	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


