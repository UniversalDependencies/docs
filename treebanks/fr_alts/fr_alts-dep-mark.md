---
layout: base
title:  'Statistics of mark in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `mark`

This relation is universal.

2181 nodes (5%) are attached to their parents as `mark`.

2180 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.45483723062815.

The following 12 pairs of parts of speech are connected with `mark`: <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-SCONJ.html">SCONJ</a></tt> (1496; 69% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-ADP.html">ADP</a></tt> (398; 18% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-SCONJ.html">SCONJ</a></tt> (108; 5% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-ADV.html">ADV</a></tt> (81; 4% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-SCONJ.html">SCONJ</a></tt> (57; 3% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-SCONJ.html">SCONJ</a></tt> (15; 1% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-ADP.html">ADP</a></tt> (7; 0% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (6; 0% instances), <tt><a href="fr_alts-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_alts-pos-SCONJ.html">SCONJ</a></tt> (5; 0% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-SCONJ.html">SCONJ</a></tt> (4; 0% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 3 mark	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 mark	color:blue
1	Et	et	CCONJ	_	_	3	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	luy	il	PRON	_	PronType=Prs	3	iobj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
3	dyst	dire	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
4	en	en	ADP	_	_	5	mark	_	gold_pos=ADP|prpos=S|uppos=P
5	jurant	jurer	VERB	_	_	3	advcl	_	gold_pos=VERB|prpos=Ga|uppos=VG
6	que	que	SCONJ	_	_	10	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
7	il	il	PRON	_	PronType=Prs	10	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
8	s'	se	PRON	_	PronType=Prs	10	expl	_	gold_pos=PRON|prpos=Pp|SpaceAfter=No|uppos=PRO
9	en	en	PRON	_	PronType=Prs	10	obl	_	gold_pos=PRON|join=left|prpos=Pp|uppos=PRO
10	repentiroet	repentir	VERB	_	VerbForm=Fin	3	ccomp	_	gold_pos=VERB|prpos=Vvc|SpaceAfter=No|uppos=VJ
11	.	.	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 8 mark	color:blue
1	Et	et	CCONJ	_	_	7	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	sur	sur	ADP	_	_	3	case	_	gold_pos=ADP|prpos=S|uppos=P
3	ce	ce	PRON	_	PronType=Dem	7	obl	_	gold_pos=PRON|prpos=Pd|uppos=PRO
4	ladite	ledit	DET	_	Definite=Ind	5	det	_	gold_pos=DET|prpos=Di|uppos=D
5	deposante	déposant	NOUN	_	_	7	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
6	luy	il	PRON	_	PronType=Prs	7	iobj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
7	dyst	dire	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
8	que	que	SCONJ	_	_	12	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
9	c'	ce	PRON	_	PronType=Dem	12	nsubj	_	gold_pos=PRON|prpos=Pd|SpaceAfter=No|uppos=PRO
10	estoet	être	AUX	_	VerbForm=Fin	12	cop	_	gold_pos=AUX|join=left|prpos=Vuc|uppos=EJ
11	son	son	DET	_	_	12	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
12	faict	fait	NOUN	_	_	7	ccomp	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
13	,	,	PUNCT	_	_	7	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


