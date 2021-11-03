---
layout: base
title:  'Statistics of orphan in UD_German-GSD'
udver: '2'
---

## Treebank Statistics: UD_German-GSD: Relations: `orphan`

This relation is universal.

13 nodes (0%) are attached to their parents as `orphan`.

10 instances of `orphan` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.53846153846154.

The following 8 pairs of parts of speech are connected with `orphan`: <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (4; 31% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (2; 15% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt> (2; 15% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-ADV.html">ADV</a></tt> (1; 8% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-NUM.html">NUM</a></tt> (1; 8% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-SYM.html">SYM</a></tt> (1; 8% instances), <tt><a href="de_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-NUM.html">NUM</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 orphan	color:blue
1	Auf	auf	ADP	APPR	_	2	case	_	_
2	Lettisch	Lettisch	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing	7	nmod	_	_
3	heißen	heißen	VERB	VVFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	die	der	DET	ART	Case=Nom|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	6	det	_	_
5	entsprechenden	entsprechend	ADJ	ADJA	Case=Nom|Gender=Neut|Number=Plur	6	amod	_	_
6	Instrumente	Instrument	NOUN	NN	Case=Nom|Gender=Neut|Number=Plur	3	nsubj	_	_
7	Kokle	Kokle	PROPN	NE	Case=Nom|Gender=Masc|Number=Plur	3	xcomp	_	SpaceAfter=No|NamedEntity=Yes
8	,	,	PUNCT	$,	_	11	punct	_	_
9	auf	auf	ADP	APPR	_	10	case	_	_
10	Litauisch	Litauisch	NOUN	NE	Case=Acc|Gender=Neut|Number=Sing	11	orphan	_	_
11	Kanklės	Kanklės	PROPN	NE	Case=Acc|Gender=Neut|Number=Sing	7	conj	_	SpaceAfter=No|NamedEntity=Yes
12	.	.	PUNCT	$.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 27 orphan	color:blue
1	In	in	ADP	APPR	_	3	case	_	_
2	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	März	März	PROPN	NN	Case=Dat|Gender=Masc|Number=Sing	6	nmod	_	NamedEntity=Yes
4	2010	2010	NUM	CARD	NumType=Card	3	nmod	_	_
5	wurde	werden	VERB	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
6	bekannt	bekannt	ADJ	ADJD	_	5	xcomp	_	SpaceAfter=No
7	,	,	PUNCT	$,	_	11	punct	_	_
8	dass	dass	SCONJ	KOUS	_	11	mark	_	_
9	der	der	DET	ART	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
10	amerikanische	amerikanisch	ADJ	ADJA	Case=Nom|Gender=Masc|Number=Sing	11	amod	_	_
11	Modekonzern	Modekonzern	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	6	ccomp	_	_
12	Phillips	Phillips	PROPN	NE	Case=Nom|Gender=Masc|Number=Sing	11	appos	_	NamedEntity=Yes
13	-	-	PUNCT	$(	_	14	punct	_	_
14	Van	Van	PROPN	NE	Case=Nom|Gender=Masc|Number=Sing	12	flat	_	NamedEntity=Yes
15	Heusen	Heusen	PROPN	NE	Case=Nom|Gender=Masc|Number=Sing	12	flat	_	SpaceAfter=No|NamedEntity=Yes
16	,	,	PUNCT	$,	_	24	punct	_	_
17	zu	zu	ADP	APPR	_	18	case	_	_
18	dem	der	PRON	PRELS	Case=Dat|Gender=Masc|Number=Sing|PronType=Rel	24	obl	_	_
19	auch	auch	ADV	ADV	_	24	advmod	_	_
20	die	der	DET	ART	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	_
21	Marke	Marke	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	24	nsubj	_	_
22	Calvin	Calvin	PROPN	NE	Case=Nom|Gender=Fem|Number=Sing	21	appos	_	NamedEntity=Yes
23	Klein	Klein	PROPN	NE	Case=Nom|Gender=Fem|Number=Sing	22	flat	_	NamedEntity=Yes
24	gehört	gehören	VERB	VVFIN	VerbForm=Part	11	acl:relcl	_	SpaceAfter=No
25	,	,	PUNCT	$,	_	24	punct	_	_
26	das	der	DET	ART	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	27	det	_	_
27	Unternehmen	Unternehmen	NOUN	NN	Case=Acc|Gender=Neut|Number=Sing	11	orphan	_	_
28	Hilfiger	Hilfiger	PROPN	ADJD	_	27	appos	_	NamedEntity=Yes
29	für	für	ADP	APPR	_	31	case	_	_
30	umgerechnet	umgerechnet	ADJ	ADJD	_	31	amod	_	_
31	€	€	SYM	XY	_	11	orphan	_	_
32	2,2	2,2	NUM	CARD	NumType=Card	33	nummod	_	_
33	Mrd	Mrd	PRON	NN	Abbr=Yes|Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	31	nmod	_	SpaceAfter=No
34	.	.	PUNCT	$.	_	33	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 orphan	color:blue
1	Es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
2	wird	werden	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	3	aux:pass	_	_
3	angenommen	annehmen	VERB	VVPP	VerbForm=Part	0	root	_	SpaceAfter=No
4	,	,	PUNCT	$,	_	6	punct	_	_
5	dass	dass	CCONJ	KOUS	_	6	mark	_	_
6	Freistadt	Freistadt	PROPN	NN	Case=Nom|Gender=Fem|Number=Sing	3	csubj:pass	_	NamedEntity=Yes
7	um	um	ADP	APPR	_	8	case	_	_
8	1225	1225	NUM	CARD	NumType=Card	6	orphan	_	_
9	von	von	ADP	APPR	_	11	case	_	_
10	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	Babenberger	Babenberger	PROPN	ADJA	Case=Dat|Gender=Masc|Number=Sing	6	orphan	_	NamedEntity=Yes
12	Leopold	Leopold	PROPN	NE	Case=Dat|Gender=Masc|Number=Sing	11	flat	_	NamedEntity=Yes
13	VI	VI	PROPN	NE	Case=Dat|Gender=Masc|Number=Sing	12	flat	_	SpaceAfter=No|NamedEntity=Yes
14	.	.	PUNCT	$.	_	13	punct	_	_

~~~


