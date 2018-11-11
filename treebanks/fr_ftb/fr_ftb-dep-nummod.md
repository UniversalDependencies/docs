---
layout: base
title:  'Statistics of nummod in UD_French-FTB'
udver: '2'
---

## Treebank Statistics: UD_French-FTB: Relations: `nummod`

This relation is universal.

10237 nodes (2%) are attached to their parents as `nummod`.

7046 instances of `nummod` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.0698446810589.

The following 15 pairs of parts of speech are connected with `nummod`: <tt><a href="fr_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_ftb-pos-NUM.html">NUM</a></tt> (8592; 84% instances), <tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_ftb-pos-NUM.html">NUM</a></tt> (1277; 12% instances), <tt><a href="fr_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_ftb-pos-NUM.html">NUM</a></tt> (109; 1% instances), <tt><a href="fr_ftb-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_ftb-pos-NUM.html">NUM</a></tt> (77; 1% instances), <tt><a href="fr_ftb-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_ftb-pos-NUM.html">NUM</a></tt> (72; 1% instances), <tt><a href="fr_ftb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_ftb-pos-NUM.html">NUM</a></tt> (52; 1% instances), <tt><a href="fr_ftb-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_ftb-pos-NUM.html">NUM</a></tt> (24; 0% instances), <tt><a href="fr_ftb-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_ftb-pos-NUM.html">NUM</a></tt> (12; 0% instances), <tt><a href="fr_ftb-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_ftb-pos-NUM.html">NUM</a></tt> (6; 0% instances), <tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_ftb-pos-NOUN.html">NOUN</a></tt> (6; 0% instances), <tt><a href="fr_ftb-pos-X.html">X</a></tt>-<tt><a href="fr_ftb-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="fr_ftb-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="fr_ftb-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="fr_ftb-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="fr_ftb-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_ftb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_ftb-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 20 nummod	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	_	_	NOUN	_	Gender=Masc|Number=Sing	23	nsubj	_	_
3	_	_	PROPN	_	Gender=Masc|Number=Sing	2	nmod	_	_
4	_	_	PROPN	_	Gender=Masc|Number=Sing	3	flat:name	_	SpaceAfter=No
5	_	_	PUNCT	_	_	6	punct	_	_
6	_	_	NOUN	_	Gender=Masc|Number=Sing	3	conj	_	_
7	_	_	ADJ	_	Number=Sing	6	fixed	_	_
8	_	_	ADP	_	_	10	case	_	_
9	_	_	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	_	_	NOUN	_	Gender=Masc|Number=Sing	6	nmod	_	_
11	_	_	ADP	_	_	13	case	_	_
12	_	_	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	SpaceAfter=No
13	_	_	NOUN	_	Gender=Masc|Number=Sing	10	nmod	_	_
14	_	_	ADP	_	_	16	case	_	_
15	_	_	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	SpaceAfter=No
16	_	_	NOUN	_	Gender=Masc|Number=Sing	13	nmod	_	_
17	_	_	PROPN	_	Gender=Masc|Number=Sing	16	nmod	_	_
18	_	_	ADP	_	_	19	case	_	_
19	_	_	NOUN	_	Gender=Masc|Number=Sing	13	nmod	_	_
20	_	_	NUM	_	Gender=Fem|Number=Sing|NumType=Card	19	nummod	_	SpaceAfter=No
21	_	_	PUNCT	_	_	23	punct	_	_
22	_	_	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	23	aux	_	_
23	_	_	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
24	_	_	SCONJ	_	_	28	mark	_	_
25	_	_	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	27	det	_	_
26	_	_	ADJ	_	Gender=Masc|Number=Plur	27	amod	_	_
27	_	_	NOUN	_	Gender=Masc|Number=Plur	28	nsubj	_	_
28	_	_	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	23	ccomp	_	_
29	_	_	VERB	_	VerbForm=Inf	28	xcomp	_	_
30	_	_	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	31	det	_	_
31	_	_	NOUN	_	Gender=Fem|Number=Sing	29	obj	_	SpaceAfter=No
32	_	_	PUNCT	_	_	23	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 nummod	color:blue
1	Les	le	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	2	det	_	_
2	_	_	NOUN	_	Gender=Fem|Number=Plur	9	nsubj	_	_
3	_	_	ADP	_	_	4	case	_	_
4	_	_	NOUN	_	Gender=Masc|Number=Plur	2	nmod	_	_
5	_	_	ADP	_	_	6	case	_	_
6	_	_	PROPN	_	Gender=Fem|Number=Sing	9	obl	_	_
7	_	_	PRON	_	Gender=Fem|Number=Plur|Person=3|Reflex=Yes	9	expl	_	_
8	_	_	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	_
9	_	_	VERB	_	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	_
10	_	_	ADP	_	_	11	case	_	_
11	_	_	NUM	_	Gender=Fem|Number=Sing|NumType=Card	9	nummod	_	SpaceAfter=No
12	_	_	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 nummod	color:blue
1	Tout	tout	ADV	_	_	25	advmod	_	_
2	_	_	ADP	_	_	1	fixed	_	SpaceAfter=No
3	_	_	NOUN	_	Gender=Masc|Number=Sing	1	fixed	_	SpaceAfter=No
4	_	_	PUNCT	_	_	25	punct	_	_
5	_	_	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	25	parataxis	_	_
6	_	_	NOUN	_	Gender=Masc|Number=Sing	5	nsubj	_	_
7	_	_	PROPN	_	Gender=Masc|Number=Sing	6	flat:name	_	SpaceAfter=No
8	_	_	PUNCT	_	_	25	punct	_	_
9	_	_	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	_	_	NOUN	_	Gender=Masc|Number=Sing	25	nsubj	_	_
11	_	_	ADJ	_	Gender=Masc|Number=Sing	10	amod	_	SpaceAfter=No
12	_	_	PUNCT	_	_	14	punct	_	_
13	_	_	ADV	_	_	14	advmod	_	_
14	_	_	ADJ	_	Gender=Fem|Number=Sing	11	conj	_	_
15	_	_	ADP	_	_	16	case	_	_
16	_	_	NUM	_	Gender=Fem|Number=Sing|NumType=Card	14	nummod	_	SpaceAfter=No
17	_	_	PUNCT	_	_	14	punct	_	_
18	_	_	ADP	_	_	21	case	_	_
19	_	_	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	_	_
20	_	_	ADJ	_	Gender=Masc|Number=Sing	21	amod	_	_
21	_	_	NOUN	_	Gender=Masc|Number=Sing	14	obl	_	_
22	_	_	ADP	_	_	23	case	_	_
23	_	_	NUM	_	Gender=Fem|Number=Sing|NumType=Card	21	nmod	_	SpaceAfter=No
24	_	_	PUNCT	_	_	25	punct	_	_
25	_	_	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
26	_	_	VERB	_	VerbForm=Inf	25	xcomp	_	_
27	_	_	ADJ	_	Gender=Masc|Number=Sing	26	xcomp	_	SpaceAfter=No
28	_	_	PUNCT	_	_	25	punct	_	_

~~~


