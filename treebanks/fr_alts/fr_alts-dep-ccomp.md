---
layout: base
title:  'Statistics of ccomp in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `ccomp`

This relation is universal.

1135 nodes (3%) are attached to their parents as `ccomp`.

1131 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.49955947136564.

The following 8 pairs of parts of speech are connected with `ccomp`: <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (1008; 89% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (67; 6% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> (43; 4% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (11; 1% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 ccomp	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 ccomp	color:blue
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


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 ccomp	color:blue
1	Et	et	CCONJ	_	_	4	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	aprés	après	ADV	_	_	4	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
3	il	il	PRON	_	PronType=Prs	4	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
4	aperceult	apercevoir	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
5	incontinent	incontinent	ADV	_	_	4	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
6	estre	être	AUX	_	VerbForm=Inf	7	cop	_	gold_pos=AUX|prpos=Vun|uppos=EX
7	sain	sain	ADJ	_	_	4	ccomp	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
8	et	et	CCONJ	_	_	9	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
9	guery	guérir	VERB	_	VerbForm=Part	7	conj	_	gold_pos=VERB|prpos=Ge|SpaceAfter=No|uppos=VPP
10	.	.	PUNCT	_	_	4	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


