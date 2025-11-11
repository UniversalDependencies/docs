---
layout: base
title:  'Statistics of nmod in UD_Middle_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Middle_French-ALTM: Relations: `nmod`

This relation is universal.

266 nodes (4%) are attached to their parents as `nmod`.

254 instances of `nmod` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.75187969924812.

The following 15 pairs of parts of speech are connected with `nmod`: <tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt> (192; 72% instances), <tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="frm_altm-pos-PRON.html">PRON</a></tt> (24; 9% instances), <tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="frm_altm-pos-PROPN.html">PROPN</a></tt> (16; 6% instances), <tt><a href="frm_altm-pos-PRON.html">PRON</a></tt>-<tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt> (9; 3% instances), <tt><a href="frm_altm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="frm_altm-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="frm_altm-pos-PRON.html">PRON</a></tt>-<tt><a href="frm_altm-pos-PRON.html">PRON</a></tt> (4; 2% instances), <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="frm_altm-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="frm_altm-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="frm_altm-pos-PRON.html">PRON</a></tt>-<tt><a href="frm_altm-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="frm_altm-pos-ADV.html">ADV</a></tt>-<tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="frm_altm-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="frm_altm-pos-PROPN.html">PROPN</a></tt>-<tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="frm_altm-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nmod	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nmod	color:blue
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
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 nmod	color:blue
1	Se	si	SCONJ	_	_	3	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
2	il	il	PRON	_	PronType=Prs	3	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
3	a	avoir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	13	advcl	_	gold_pos=VERB|prpos=Vuc|uppos=AJ
4	domicille	domicile	NOUN	_	Number=Sing	3	obj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
5	que	que	PRON	_	PronType=Rel	8	obj	_	gold_pos=PRON|prpos=Pr|uppos=WPRO
6	l'	le	DET	_	Definite=Def|PronType=Art	7	det	_	gold_pos=DET|prpos=Da|uppos=D
7	en	on	PRON	_	PronType=Prs	8	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
8	sait	savoir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	4	acl:relcl	_	gold_pos=VERB|prpos=Vvc|SpaceAfter=No|uppos=VJ
9	,	,	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
10	ou	ou	CCONJ	_	_	13	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
11	il	il	PRON	_	PronType=Prs	13	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
12	est	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	13	cop	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
13	demourant	demeurant	ADJ	_	_	0	root	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
14	en	en	ADP	_	_	16	case	_	gold_pos=ADP|prpos=S|uppos=P
15	aucune	aucun	DET	_	PronType=Ind	16	det	_	gold_pos=DET|prpos=Di|uppos=D
16	partie	partie	NOUN	_	Number=Sing	13	nmod	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
17	de	de	ADP	_	_	18	case	_	gold_pos=ADP|prpos=S|uppos=P
18	Normendie	Normandie	PROPN	_	Number=Sing	16	nmod	_	gold_pos=PROPN|prpos=Np|SpaceAfter=No|uppos=NPRS
19	,	,	PUNCT	_	_	13	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


