---
layout: base
title:  'Statistics of aux in UD_Maghrebi_Arabic_French-Arabizi'
udver: '2'
---

## Treebank Statistics: UD_Maghrebi_Arabic_French-Arabizi: Relations: `aux`

This relation is universal.

29 nodes (0%) are attached to their parents as `aux`.

29 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.06896551724138.

The following 2 pairs of parts of speech are connected with `aux`: <tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt>-<tt><a href="qaf_arabizi-pos-AUX.html">AUX</a></tt> (28; 97% instances), <tt><a href="qaf_arabizi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qaf_arabizi-pos-AUX.html">AUX</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 aux	color:blue
1	Kount	être	AUX	V1ms	Gender=Masc|Number=Sing|Person=1	2	aux	_	ComposedUDPOS=AUX|LangO=ar_dz|ner=O
2	qader	pouvoir	VERB	V	_	0	root	_	ComposedUDPOS=VERB|LangO=ar_dz|ner=O
3	na3melha	je_fais_elle	VERB	V1ms+CLO	Gender=Masc|Number=Sing|Person=1	2	xcomp	_	ComposedUDPOS=VERB+PRON|LangO=ar_dz|ner=O|Reverse=VERB_CLO_1
4	bessah	mais	CCONJ	CC	_	7	cc	_	ComposedUDPOS=CCONJ|LangO=ar_dz|ner=O
5	la	ne	PART	PART-NEG	Polarity=Neg	7	advmod	_	ComposedUDPOS=PART|LangO=ar_dz|ner=O
6	ma	pas	PART	PART-NEG	Polarity=Neg	7	advmod	_	ComposedUDPOS=PART|LangO=ar_dz|ner=O
7	habithach	voulu_pas	VERB	V+PART-NEG	Polarity=Neg	2	parataxis	_	ComposedUDPOS=VERB+PART|LangO=ar_dz|ner=O

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 aux	color:blue
1	le	le	DET	DET	_	2	det	_	ComposedUDPOS=DET|lango=fr|ner=O
2	jour	jour	NOUN	NC	_	11	obl	_	ComposedUDPOS=NOUN|lango=fr|ner=O
3	ou	où	ADV	ADVWH	_	6	advmod	_	ComposedUDPOS=ADV|lango=fr|ner=O
4	en	on	PRON	PRO	_	6	nsubj	_	ComposedUDPOS=PRON|lango=fr|ner=O
5	a	avoir	AUX	V	_	6	aux	_	ComposedUDPOS=AUX|lango=fr|ner=O
6	jouer	joué	VERB	VPP	VerbForm=Part	2	acl:relcl	_	ComposedUDPOS=VERB|lango=fr|ner=O
7	a	à	ADP	P	AdpType=Prep	8	case	_	ComposedUDPOS=ADP|lango=fr|ner=O
8	om	Om	PROPN	NPP	_	6	obl	_	ComposedUDPOS=PROPN|lango=ar_dz|ner=B-LOC
9	dorman	Dorman	PROPN	NPP	_	8	flat	_	ComposedUDPOS=PROPN|lango=ar_dz|ner=I-LOC
10	kona	être	AUX	V1mp	Gender=Masc|Number=Plur|Person=1	11	aux	_	ComposedUDPOS=AUX|lango=ar_dz|ner=O
11	3arfin	on_savait	ADJ	ADJ	_	0	root	_	ComposedUDPOS=ADJ|lango=ar_dz|ner=O
12	bli	que	SCONJ	CS	_	13	mark	_	ComposedUDPOS=SCONJ|lango=ar_dz|ner=O
13	nrbho	nous_gagnerons	VERB	V1mp	Gender=Masc|Number=Plur|Person=1	11	xcomp	_	ComposedUDPOS=VERB|lango=ar_dz|ner=O
14	li	parce_que	SCONJ	CS	Typo=Yes	17	mark	_	ComposedUDPOS=SCONJ|lango=ar_dz|ner=O
15	ana	_	X	_	_	14	goeswith	_	ComposedUDPOS=X|lango=ar_dz|ner=O
16	shaha	Shahata	PROPN	NPP	_	17	nsubj	_	ComposedUDPOS=PROPN|lango=ar_dz|ner=O
17	tatata2aba	il_baille	VERB	V3ms	Gender=Masc|Number=Sing|Person=3	11	advcl	_	ComposedUDPOS=VERB|lango=ar_dz|ner=O
18	avant	avant	ADP	P	AdpType=Prep	22	mark	_	ComposedUDPOS=ADP|lango=fr|ner=O
19	que	que	SCONJ	CS	_	22	mark	_	ComposedUDPOS=SCONJ|lango=fr|ner=O
20	le	le	DET	DET	_	21	det	_	ComposedUDPOS=DET|lango=fr|ner=O
21	match	match	NOUN	NC	_	22	nsubj	_	ComposedUDPOS=NOUN|lango=fr|ner=O
22	commance	commence	VERB	V	_	17	advcl	_	ComposedUDPOS=VERB|lango=fr|ner=O
23	w	et	CCONJ	CC	_	25	cc	_	ComposedUDPOS=CCONJ|lango=ar_dz|ner=O
24	tata2ob	baillement	NOUN	NC	_	25	nsubj	_	ComposedUDPOS=NOUN|lango=ar_dz|ner=O
25	mina	de	ADP	P	AdpType=Prep	11	parataxis	_	ComposedUDPOS=ADP|lango=ar_dz|ner=O
26	chaytan	satan	NOUN	NC	_	25	obl	_	ComposedUDPOS=NOUN|lango=ar_dz|ner=O
27	golo	dîtes	VERB	VIMP	Mood=Imp	11	parataxis	_	ComposedUDPOS=VERB|lango=ar_dz|ner=O
28	l	à	ADP	P	AdpType=Prep	29	case	_	ComposedUDPOS=ADP|lango=ar_dz|ner=O
29	sa3dan	Saadane	PROPN	NPP	_	27	obl	_	ComposedUDPOS=PROPN|lango=ar_dz|ner=B-PER
30	ki	quand	ADV	ADV	_	31	mark	_	ComposedUDPOS=ADV|lango=ar_dz|ner=O
31	dir	met	VERB	V	_	33	advcl	_	ComposedUDPOS=VERB|lango=ar_dz|ner=O
32	kaskita	casquette	NOUN	NC	_	31	obj	_	ComposedUDPOS=NOUN|lango=ar_dz|ner=O
33	nakhasro	nous_perdons	VERB	V1mp	Gender=Masc|Number=Plur|Person=1	27	ccomp	_	ComposedUDPOS=VERB|lango=ar_dz|ner=O

~~~


