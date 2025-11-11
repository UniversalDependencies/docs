---
layout: base
title:  'Statistics of obj in UD_Middle_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Middle_French-ALTM: Relations: `obj`

This relation is universal.

306 nodes (4%) are attached to their parents as `obj`.

219 instances of `obj` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.16666666666667.

The following 5 pairs of parts of speech are connected with `obj`: <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt> (211; 69% instances), <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="frm_altm-pos-PRON.html">PRON</a></tt> (89; 29% instances), <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="frm_altm-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="frm_altm-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="frm_altm-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 obj	color:blue
1	Et	et	CCONJ	_	_	6	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	néantmoins	néanmoins	ADV	_	_	6	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
3	doit	devoir	AUX	_	Number=Sing|Person=3|VerbForm=Fin	6	aux	_	gold_pos=AUX|prpos=Vvc|uppos=MDJ
4	le	le	DET	_	Definite=Def|PronType=Art	5	det	_	gold_pos=DET|prpos=Da|uppos=D
5	sergent	sergent	NOUN	_	Number=Sing	6	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
6	laissier	laisser	VERB	_	VerbForm=Inf	0	root	_	gold_pos=VERB|prpos=Vvn|uppos=VX
7	le	le	DET	_	Definite=Def|PronType=Art	8	det	_	gold_pos=DET|prpos=Da|uppos=D
8	gaige	gage	NOUN	_	Number=Sing	6	obj	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
9	;	;	PUNCT	_	_	6	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 obj	color:blue
1	ou	ou	CCONJ	_	_	7	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	vel	vel	ADV	_	_	3	advmod	_	gold_pos=ADV|Lang=la|prpos=Xe|uppos=FW
3	sic	sic	ADV	_	_	7	advmod	_	gold_pos=ADV|Lang=la|prpos=Xe|SpaceAfter=No|uppos=FW
4	,	,	PUNCT	_	_	7	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
5	je	je	PRON	_	PronType=Prs	7	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
6	le	il	PRON	_	PronType=Prs	7	obj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
7	contraing	contraindre	VERB	_	Number=Sing|Person=1|VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
8	et	et	CCONJ	_	_	9	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
9	justice	justice	NOUN	_	Number=Sing	7	conj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
10	pour	pour	ADP	_	_	11	mark	_	gold_pos=ADP|prpos=S|uppos=P
11	venir	venir	VERB	_	VerbForm=Inf	7	advcl	_	gold_pos=VERB|prpos=Vvn|uppos=VX
12	sauver	sauver	VERB	_	VerbForm=Inf	11	xcomp	_	gold_pos=VERB|prpos=Vvn|SpaceAfter=No|uppos=VX
13	.	.	PUNCT	_	_	7	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 obj	color:blue
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


