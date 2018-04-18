---
layout: base
title:  'Statistics of expl:pv in UD_Portuguese-BR'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-BR: Relations: `expl:pv`

This relation is a language-specific subtype of .

672 nodes (0%) are attached to their parents as `expl:pv`.

467 instances of `expl:pv` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.45833333333333.

The following 11 pairs of parts of speech are connected with `expl:pv`: <tt><a href="pt_br-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_br-pos-PART.html">PART</a></tt> (351; 52% instances), <tt><a href="pt_br-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_br-pos-PRON.html">PRON</a></tt> (246; 37% instances), <tt><a href="pt_br-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_br-pos-PART.html">PART</a></tt> (32; 5% instances), <tt><a href="pt_br-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_br-pos-PRON.html">PRON</a></tt> (22; 3% instances), <tt><a href="pt_br-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_br-pos-PART.html">PART</a></tt> (10; 1% instances), <tt><a href="pt_br-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_br-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="pt_br-pos-AUX.html">AUX</a></tt>-<tt><a href="pt_br-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="pt_br-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_br-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="pt_br-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_br-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="pt_br-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_br-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_br-pos-PART.html">PART</a></tt>-<tt><a href="pt_br-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 expl:pv	color:blue
1	Especula	_	VERB	VERB	_	0	root	_	_
2	-	_	PUNCT	.	_	1	punct	_	_
3	se	_	PART	PRT	_	1	expl:pv	_	_
4	sobre	_	ADP	ADP	_	6	case	_	_
5	a	_	DET	DET	_	6	det	_	_
6	possibilidade	_	NOUN	NOUN	_	1	nmod	_	_
7	de	_	ADP	ADP	_	8	mark	_	_
8	estar	_	VERB	VERB	_	6	nmod	_	_
9	extinta	_	ADJ	ADJ	_	8	xcomp:adj	_	SpaceAfter=No
10	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 expl:pv	color:blue
1	En	en	ADP	ADP	_	3	case	_	_
2	a	o	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	internet	_	PROPN	PNOUN	_	10	nmod	_	SpaceAfter=No
4	,	_	PUNCT	.	_	3	punct	_	_
5	manifestar	_	VERB	VERB	_	10	csubj	_	_
6	-	_	PUNCT	.	_	5	punct	_	_
7	se	_	PRON	PRON	_	5	expl:pv	_	_
8	dessa	_	ADP	ADP	_	9	case	_	_
9	forma	_	NOUN	NOUN	_	5	nmod	_	_
10	é	_	VERB	VERB	_	0	root	_	_
11	o	_	DET	DET	_	12	det	_	_
12	mesmo	_	NOUN	NOUN	_	10	nsubj	_	_
13	que	_	CCONJ	CONJ	_	14	mark	_	_
14	gritar	_	VERB	VERB	_	10	advcl	_	SpaceAfter=No
15	;	_	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 expl:pv	color:blue
1	Assim	_	ADV	ADV	_	6	advmod	_	SpaceAfter=No
2	,	_	PUNCT	.	_	1	punct	_	_
3	fez	_	VERB	VERB	_	6	cop	_	_
4	-	_	PUNCT	.	_	6	punct	_	_
5	se	_	PART	PRT	_	6	expl:pv	_	_
6	nobre	_	NOUN	NOUN	_	0	root	_	_
7	com	_	ADP	ADP	_	9	case	_	_
8	o	_	DET	DET	_	9	det	_	_
9	decreto	_	NOUN	NOUN	_	6	nmod	_	_
10	imperial	_	ADJ	ADJ	_	9	amod	_	_
11	de	_	ADP	ADP	_	12	case	_	_
12	2	_	NUM	NUM	NumType=Card	9	nmod	_	_
13	de	_	ADP	ADP	_	14	case	_	_
14	Dezembro	_	PROPN	PNOUN	_	12	nmod	_	_
15	de	_	ADP	ADP	_	16	case	_	_
16	1854	_	NUM	NUM	NumType=Card	14	nmod	_	SpaceAfter=No
17	.	_	PUNCT	.	_	6	punct	_	_

~~~


