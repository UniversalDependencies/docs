---
layout: base
title:  'Statistics of expl in UD_Maghrebi_Arabic_French-Arabizi'
udver: '2'
---

## Treebank Statistics: UD_Maghrebi_Arabic_French-Arabizi: Relations: `expl`

This relation is universal.
There are 1 language-specific subtypes of `expl`: <tt><a href="qaf_arabizi-dep-expl-pv.html">expl:pv</a></tt>.

59 nodes (0%) are attached to their parents as `expl`.

57 instances of `expl` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.10169491525424.

The following 2 pairs of parts of speech are connected with `expl`: <tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt>-<tt><a href="qaf_arabizi-pos-PRON.html">PRON</a></tt> (58; 98% instances), <tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt>-<tt><a href="qaf_arabizi-pos-DET.html">DET</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 expl	color:blue
1	3andou	chez_lui	PRON	P+PRO	_	2	nsubj	_	ComposedUDPOS=ADP+PRON|LangO=ar_dz|ner=O
2	hakee	raison	NOUN	NC	_	7	parataxis	_	ComposedUDPOS=NOUN|LangO=ar_dz|ner=O
3	hamasse	Hamas	PROPN	NPP	_	2	nmod	_	ComposedUDPOS=PROPN|LangO=ar_dz|ner=B-ORG
4	hiaa	elle	PRON	PRO	_	5	nsubj	_	ComposedUDPOS=PRON|LangO=ar_dz|ner=O
5	dalimaaa	injuste	ADJ	ADJ	_	3	amod	_	ComposedUDPOS=ADJ|LangO=ar_dz|ner=O
6	c	c'	PRON	CLS-SUJ	_	7	expl	_	ComposedUDPOS=PRON|DeepDep=subj|EmptyTok=Yes|LangO=fr|ner=O|wordform=ces
7	es	est	VERB	V	_	0	root	_	ComposedUDPOS=VERB|LangO=fr|ner=O|wordform=ces
8	sa	ça	PRON	PRO	_	10	nsubj	_	ComposedUDPOS=PRON|LangO=fr|ner=O
9	la	la	DET	DET	_	10	det	_	ComposedUDPOS=DET|LangO=fr|ner=O
10	vèrètè	vérité	NOUN	NC	_	7	obj	_	ComposedUDPOS=NOUN|LangO=fr|ner=O

~~~


~~~ conllu
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 35	bgColor:blue
# visual-style 35	fgColor:white
# visual-style 35 33 expl	color:blue
1	la	ni	PART	PART-NEG	Polarity=Neg	2	advmod	_	ComposedUDPOS=PART|LangO=msa|ner=O|SpaceAfter=No
2	hawla	pouvoir	NOUN	NC	_	16	parataxis	_	ComposedUDPOS=NOUN|LangO=msa|ner=O
3	wa	et	CCONJ	CC	_	5	cc	_	ComposedUDPOS=CCONJ|LangO=msa|ner=O|SpaceAfter=No
4	la	ni	PART	PART-NEG	Polarity=Neg	5	advmod	_	ComposedUDPOS=PART|LangO=msa|ner=O
5	9ouata	force	NOUN	NC	_	2	conj	_	ComposedUDPOS=NOUN|DeepDep=coord|LangO=msa|ner=O
6	illa	que	PART	PART-EXP	_	8	nsubj	_	ComposedUDPOS=PART|LangO=msa|ner=O
7	bi	par_Allah	ADP	P	AdpType=Prep	8	case	_	ComposedUDPOS=ADP|LangO=msa|ner=O
8	lleh	Dieu	PROPN	NPP	_	2	nmod	_	ComposedUDPOS=PROPN|LangO=msa|ner=B-PERderivA
9	el	le	DET	DET	_	10	det	_	ComposedUDPOS=DET|LangO=msa|ner=O
10	3alii	suprême	ADJ	ADJ	_	8	amod	_	ComposedUDPOS=ADJ|LangO=msa|ner=O
11	l'	le	DET	DET	_	12	det	_	ComposedUDPOS=DET|LangO=msa|ner=O
12	3adhim	grand	ADJ	ADJ	_	8	amod	_	ComposedUDPOS=ADJ|LangO=msa|ner=O
13	à	à	ADP	P	AdpType=Prep	15	case	_	ComposedUDPOS=ADP|LangO=fr|ner=O
14	un	un	DET	DET	_	15	det	_	ComposedUDPOS=DET|LangO=fr|ner=O
15	moment	moment	NOUN	NC	_	16	nmod	_	ComposedUDPOS=NOUN|LangO=fr|ner=O
16	donné	donné	VERB	VPP	VerbForm=Part	0	root	_	ComposedUDPOS=VERB|LangO=fr|ner=O
17	j'	j'	PRON	CLS-SUJ	_	18	nsubj	_	ComposedUDPOS=PRON|LangO=fr|ner=O
18	ai	ai	VERB	V	_	16	parataxis	_	ComposedUDPOS=VERB|LangO=fr|ner=O
19	crus	cru	VERB	VPP	VerbForm=Part	18	xcomp	_	ComposedUDPOS=VERB|LangO=fr|ner=O
20	que	que	SCONJ	CS	_	22	mark	_	ComposedUDPOS=SCONJ|LangO=fr|ner=O
21	je	je	PRON	CLS-SUJ	_	22	nsubj	_	ComposedUDPOS=PRON|LangO=fr|ner=O
22	lis	lis	VERB	V	_	19	ccomp	_	ComposedUDPOS=VERB|LangO=fr|ner=O
23	un	un	DET	DET	_	24	det	_	ComposedUDPOS=DET|LangO=fr|ner=O
24	roman	roman	NOUN	NC	_	22	obj	_	ComposedUDPOS=NOUN|LangO=fr|ner=O
25	dramatique	dramatique	ADJ	ADJ	_	24	amod	_	ComposedUDPOS=ADJ|LangO=fr|ner=O
26	malheureusement	malheuresement	ADV	ADV	_	28	advmod	_	ComposedUDPOS=ADV|LangO=fr|ner=O
27	la	la	DET	DET	_	28	det	_	ComposedUDPOS=DET|LangO=fr|ner=O
28	réalité	réalité	NOUN	NC	_	29	nsubj	_	ComposedUDPOS=NOUN|LangO=fr|ner=O
29	est	est	VERB	V	_	16	parataxis	_	ComposedUDPOS=VERB|LangO=fr|ner=O
30	plus	plus	ADV	ADV	_	31	advmod	_	ComposedUDPOS=ADV|LangO=fr|ner=O
31	dramatique	dramatique	ADJ	ADJ	_	29	obj	_	ComposedUDPOS=ADJ|LangO=fr|ner=O
32	que	que	SCONJ	CS	_	35	mark	_	ComposedUDPOS=SCONJ|LangO=fr|ner=O
33	l'	l'	DET	DET	_	35	expl	_	ComposedUDPOS=DET|LangO=fr|ner=O
34	on	on	PRON	CLS-SUJ	_	35	nsubj	_	ComposedUDPOS=PRON|LangO=fr|ner=O
35	puisse	puisse	VERB	V	_	29	ccomp	_	ComposedUDPOS=VERB|LangO=fr|ner=O
36	imaginer	imaginer	VERB	VINF	VerbForm=Inf	35	xcomp	_	ComposedUDPOS=VERB|LangO=fr|ner=O
37	allah	Dieu	PROPN	NPP	_	38	nsubj	_	ComposedUDPOS=PROPN|LangO=ar_dz|ner=B-PERderivA
38	yahdina	nous_emporte	VERB	V3ms+CLO	Gender=Masc|Number=Sing|Person=3	16	parataxis	_	ComposedUDPOS=VERB+PRON|LangO=ar_dz|ner=O
39	w	et	CCONJ	CC	_	40	cc	_	ComposedUDPOS=CCONJ|LangO=ar_dz|ner=O
40	yechfi	guérisse	VERB	V3ms	Gender=Masc|Number=Sing|Person=3	38	conj	_	ComposedUDPOS=VERB|DeepDep=coord|LangO=ar_dz|ner=O
41	les	les	DET	DET	_	42	det	_	ComposedUDPOS=DET|LangO=fr|ner=O
42	petites	petites	ADJ	ADJ	_	40	obj	_	ComposedUDPOS=ADJ|LangO=fr|ner=O
43	RABI	Dieu_mien	PROPN	NPP+POSS	_	16	parataxis	_	ComposedUDPOS=PROPN+PRON|LangO=ar_dz|ner=B-PERderivA|Possessive=Yes|Reverse=NC_POSS
44	KBIR	grand	ADJ	ADJ	_	43	amod	_	ComposedUDPOS=ADJ|LangO=ar_dz|ner=O

~~~


