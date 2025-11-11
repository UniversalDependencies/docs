---
layout: base
title:  'Statistics of mark in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `mark`

This relation is universal.

3523 nodes (5%) are attached to their parents as `mark`.

3522 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.32500709622481.

The following 17 pairs of parts of speech are connected with `mark`: <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-SCONJ.html">SCONJ</a></tt> (2092; 59% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-ADP.html">ADP</a></tt> (911; 26% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-ADV.html">ADV</a></tt> (160; 5% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-SCONJ.html">SCONJ</a></tt> (154; 4% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-SCONJ.html">SCONJ</a></tt> (123; 3% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-ADP.html">ADP</a></tt> (20; 1% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-SCONJ.html">SCONJ</a></tt> (16; 0% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-ADP.html">ADP</a></tt> (13; 0% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (9; 0% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-ADV.html">ADV</a></tt> (7; 0% instances), <tt><a href="fr_alts-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_alts-pos-SCONJ.html">SCONJ</a></tt> (5; 0% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-SCONJ.html">SCONJ</a></tt> (5; 0% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="fr_alts-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_alts-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (1; 0% instances).


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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 mark	color:blue
1	Ainsi	ainsi	ADV	ADV	ExtPos=SCONJ	8	mark	_	prpos=Rg
2	que	que	SCONJ	CONJS	_	1	fixed	_	prpos=Cs
3	mesmement	mêmement	ADV	ADV	_	8	advmod	_	prpos=Rg
4	lad.	ledit	DET	D	Definite=Def|PronType=Art	5	det	_	prpos=Da
5	l.	lex	NOUN	FW	_	8	nsubj	_	Lang=la|prpos=Xe
6	fi.	finalis	ADJ	FW	_	5	amod	_	Lang=la|prpos=Xe
7	le	il	PRON	PRO	PronType=Prs	9	obj	_	prpos=Pp
8	semble	sembler	VERB	VJ	Number=Sing|Person=3|VerbForm=Fin	0	root	_	prpos=Vvc
9	innuer	innuer	VERB	VX	_	8	xcomp	_	prpos=Vvn|SpaceAfter=No
10	,	,	PUNCT	PON	_	9	punct	_	join=left|prpos=Fw

~~~


