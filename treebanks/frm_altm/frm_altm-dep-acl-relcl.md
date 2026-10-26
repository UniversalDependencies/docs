---
layout: base
title:  'Statistics of acl:relcl in UD_Middle_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Middle_French-ALTM: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="frm_altm-dep-acl.html">acl</a></tt>.

121 nodes (2%) are attached to their parents as `acl:relcl`.

121 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.95867768595041.

The following 9 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="frm_altm-pos-VERB.html">VERB</a></tt> (75; 62% instances), <tt><a href="frm_altm-pos-PRON.html">PRON</a></tt>-<tt><a href="frm_altm-pos-VERB.html">VERB</a></tt> (34; 28% instances), <tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="frm_altm-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="frm_altm-pos-PRON.html">PRON</a></tt>-<tt><a href="frm_altm-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="frm_altm-pos-PROPN.html">PROPN</a></tt>-<tt><a href="frm_altm-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="frm_altm-pos-PRON.html">PRON</a></tt>-<tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="frm_altm-pos-PROPN.html">PROPN</a></tt>-<tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="frm_altm-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 16 acl:relcl	color:blue
1	mais	mais	CCONJ	_	_	5	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	l'	le	DET	_	Definite=Def|PronType=Art	3	det	_	gold_pos=DET|prpos=Da|uppos=D
3	en	on	PRON	_	PronType=Prs	5	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
4	lui	il	PRON	_	PronType=Prs	5	iobj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
5	donne	donner	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
6	terme	terme	NOUN	_	Number=Sing	5	obj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
7	d'	de	ADP	_	_	8	mark	_	gold_pos=ADP|prpos=S|uppos=P
8	avoir	avoir	VERB	_	VerbForm=Inf	6	acl	_	gold_pos=VERB|prpos=Vun|uppos=AX
9	le	le	DET	_	Definite=Def|PronType=Art	10	det	_	gold_pos=DET|prpos=Da|uppos=D
10	message	message	NOUN	_	Number=Sing	8	obj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
11	ou	ou	CCONJ	_	_	13	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
12	le	le	DET	_	Definite=Def|PronType=Art	13	det	_	gold_pos=DET|prpos=Da|uppos=D
13	pleige	pleige	NOUN	_	Number=Sing	10	conj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
14	qui	qui	PRON	_	PronType=Rel	16	nsubj	_	gold_pos=PRON|prpos=Pr|uppos=WPRO
15	le	il	PRON	_	PronType=Prs	16	obj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
16	pleiga	pleiger	VERB	_	Number=Sing|Person=3|VerbForm=Fin	10	acl:relcl	_	gold_pos=VERB|prpos=Vvc|SpaceAfter=No|uppos=VJ
17	.	.	PUNCT	_	_	5	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 acl:relcl	color:blue
1	et	et	CCONJ	_	_	3	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	lui	il	PRON	_	PronType=Prs	3	iobj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
3	requerra	requérir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
4	son	son	DET	_	Poss=Yes	5	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
5	record	record	NOUN	_	Number=Sing	3	obj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
6	de	de	ADP	_	_	7	case	_	gold_pos=ADP|prpos=S|uppos=P
7	ce	ce	PRON	_	PronType=Dem	5	nmod	_	gold_pos=PRON|prpos=Pd|uppos=PRO
8	qu'	que	PRON	_	PronType=Rel	11	obj	_	gold_pos=PRON|prpos=Pr|uppos=WPRO
9	il	il	PRON	_	PronType=Prs	11	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
10	aura	avoir	AUX	_	Number=Sing|Person=3|VerbForm=Fin	11	aux	_	gold_pos=AUX|prpos=Vuc|uppos=AJ
11	fait	faire	VERB	_	Tense=Past|VerbForm=Part	7	acl:relcl	_	gold_pos=VERB|prpos=Ge|SpaceAfter=No|uppos=VPP
12	.	.	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 14 acl:relcl	color:blue
1	Respontio	responsio	NOUN	_	_	0	root	_	gold_pos=NOUN|Lang=la|prpos=FW|SpaceAfter=No|uppos=Xe
2	:	:	PUNCT	_	_	1	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
3	ou	ou	CCONJ	_	_	6	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
4	ilz	il	PRON	_	PronType=Prs	6	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
5	ont	avoir	AUX	_	Number=Plur|Person=3|VerbForm=Fin	6	aux	_	gold_pos=AUX|prpos=Vuc|uppos=AJ
6	pechié	pécher	VERB	_	Tense=Past|VerbForm=Part	1	ccomp	_	gold_pos=VERB|prpos=Ge|uppos=VPP
7	contre	contre	ADP	_	_	9	case	_	gold_pos=ADP|prpos=S|uppos=P
8	la	le	DET	_	Definite=Def|PronType=Art	9	det	_	gold_pos=DET|prpos=Da|uppos=D
9	magesté	majesté	NOUN	_	Number=Sing	6	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
10	royal	royal	ADJ	_	_	9	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
11	dont	dont	PRON	_	PronType=Rel	14	obl	_	gold_pos=PRON|prpos=Pr|uppos=WPRO
12	je	je	PRON	_	PronType=Prs	14	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
13	suis	être	AUX	_	Number=Sing|Person=1|VerbForm=Fin	14	cop	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
14	officier	officier	NOUN	_	Number=Sing	9	acl:relcl	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
15	,	,	PUNCT	_	_	6	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
16	ou	ou	CCONJ	_	_	17	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
17	non	non	ADV	_	_	6	conj	_	gold_pos=ADV|prpos=Rg|SpaceAfter=No|uppos=ADV
18	.	.	PUNCT	_	_	1	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


