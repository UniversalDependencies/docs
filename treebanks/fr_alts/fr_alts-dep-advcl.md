---
layout: base
title:  'Statistics of advcl in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `advcl`

This relation is universal.

738 nodes (2%) are attached to their parents as `advcl`.

472 instances of `advcl` (64%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.0040650406504.

The following 9 pairs of parts of speech are connected with `advcl`: <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (624; 85% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> (71; 10% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (18; 2% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (12; 2% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="fr_alts-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="fr_alts-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 12 advcl	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 18 advcl	color:blue
1	Collin	Collin	PROPN	_	Number=Plur	3	nsubj	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
2	Thommes	Thommes	PROPN	_	Number=Plur	1	flat	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
3	dit	dire	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
4	et	et	CCONJ	_	_	5	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
5	raporte	rapporter	VERB	_	VerbForm=Fin	3	conj	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
6	que	que	SCONJ	_	_	9	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
7	il	il	PRON	_	PronType=Prs	9	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
8	se	se	PRON	_	PronType=Prs	9	expl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
9	trouva	trouver	VERB	_	VerbForm=Fin	3	ccomp	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
10	en	en	ADP	_	_	12	case	_	gold_pos=ADP|prpos=S|uppos=P
11	la	le	DET	_	Definite=Def	12	det	_	gold_pos=DET|prpos=Da|uppos=D
12	maison	maison	NOUN	_	_	9	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
13	de	de	ADP	_	_	15	case	_	gold_pos=ADP|prpos=S|uppos=P
14	ledit	ledit	DET	_	Definite=Ind	15	det	_	gold_pos=DET|prpos=Di|uppos=D
15	Ferost	Ferost	PROPN	_	Number=Plur	12	nmod	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
16	estant	être	AUX	_	_	18	cop	_	gold_pos=AUX|prpos=Ga|uppos=EG
17	fort	fort	ADV	_	_	18	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
18	malade	malade	ADJ	_	_	9	advcl	_	gold_pos=ADJ|prpos=Ag|SpaceAfter=No|uppos=ADJ
19	,	,	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 advcl	color:blue
1	Et	et	CCONJ	_	_	3	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	estoet	être	AUX	_	VerbForm=Fin	3	cop	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
3	presente	présent	ADJ	_	_	0	root	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
4	quant	quand	SCONJ	_	_	8	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=WH
5	ledit	ledit	DET	_	Definite=Ind	6	det	_	gold_pos=DET|prpos=Di|uppos=D
6	Ferost	Ferost	PROPN	_	Number=Plur	8	nsubj	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
7	fut	être	AUX	_	VerbForm=Fin	8	aux:pass	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
8	enseveluy	ensevelir	VERB	_	VerbForm=Part	3	advcl	_	gold_pos=VERB|prpos=Ge|SpaceAfter=No|uppos=VPP
9	,	,	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


