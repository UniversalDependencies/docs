---
layout: base
title:  'Statistics of iobj in UD_French-FTB'
udver: '2'
---

## Treebank Statistics: UD_French-FTB: Relations: `iobj`

This relation is universal.

2302 nodes (0%) are attached to their parents as `iobj`.

1975 instances of `iobj` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.2997393570808.

The following 17 pairs of parts of speech are connected with `iobj`: <tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_ftb-pos-PRON.html">PRON</a></tt> (1960; 85% instances), <tt><a href="fr_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_ftb-pos-PRON.html">PRON</a></tt> (138; 6% instances), <tt><a href="fr_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_ftb-pos-PRON.html">PRON</a></tt> (101; 4% instances), <tt><a href="fr_ftb-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_ftb-pos-PRON.html">PRON</a></tt> (49; 2% instances), <tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_ftb-pos-NOUN.html">NOUN</a></tt> (22; 1% instances), <tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_ftb-pos-ADV.html">ADV</a></tt> (12; 1% instances), <tt><a href="fr_ftb-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_ftb-pos-PRON.html">PRON</a></tt> (6; 0% instances), <tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_ftb-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="fr_ftb-pos-DET.html">DET</a></tt>-<tt><a href="fr_ftb-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="fr_ftb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_ftb-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="fr_ftb-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_ftb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_ftb-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_ftb-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_ftb-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_ftb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_ftb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_ftb-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_ftb-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_ftb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 iobj	color:blue
1	Nous	il	PRON	_	Gender=Masc|Number=Plur|Person=1	2	nsubj	_	_
2	_	_	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	_	_	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	4	det	_	_
4	_	_	NOUN	_	Gender=Masc|Number=Plur	2	obj	_	_
5	_	_	CCONJ	_	_	8	cc	_	_
6	_	_	ADJ	_	Gender=Masc|Number=Plur	8	amod	_	_
7	_	_	DET	_	Gender=Masc|Number=Plur|Person=1|Poss=Yes	8	det	_	_
8	_	_	NOUN	_	Gender=Masc|Number=Plur	4	conj	_	_
9	_	_	ADP	_	_	11	mark	_	_
10	_	_	ADV	_	_	11	advmod	_	_
11	_	_	AUX	_	VerbForm=Inf	2	xcomp	_	_
12	_	_	PRON	_	Gender=Masc|Number=Plur|Person=1	14	iobj	_	_
13	_	_	PRON	_	Gender=Masc|Number=Sing|Person=3	14	obj	_	_
14	_	_	VERB	_	VerbForm=Inf	11	xcomp	_	SpaceAfter=No
15	_	_	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 23 iobj	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	_	_	NOUN	_	Gender=Masc|Number=Sing	13	nsubj	_	_
3	_	_	ADP	_	_	5	case	_	_
4	_	_	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	_	_	NOUN	_	Gender=Fem|Number=Sing	2	nmod	_	SpaceAfter=No
6	_	_	PUNCT	_	_	7	punct	_	_
7	_	_	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	13	parataxis	_	_
8	_	_	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	9	det	_	_
9	_	_	NOUN	_	Gender=Masc|Number=Plur	7	nsubj	_	SpaceAfter=No
10	_	_	PUNCT	_	_	7	punct	_	_
11	_	_	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux	_	_
12	_	_	ADV	_	_	13	advmod	_	_
13	_	_	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
14	_	_	ADP	_	_	15	case	_	_
15	_	_	NUM	_	Gender=Fem|Number=Sing|NumType=Card	13	nummod	_	_
16	_	_	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	17	det	_	_
17	_	_	NOUN	_	Gender=Masc	13	obj	_	_
18	_	_	ADP	_	_	17	fixed	_	_
19	_	_	NOUN	_	Gender=Fem|Number=Sing	17	fixed	_	_
20	_	_	ADP	_	_	22	case	_	_
21	_	_	NUM	_	Gender=Masc|Number=Plur|NumType=Card	22	nummod	_	_
22	_	_	NOUN	_	Gender=Masc|Number=Plur	17	nmod	_	_
23	_	_	PRON	_	Gender=Masc|Number=Plur|Person=3|PronType=Rel	26	iobj	_	_
24	_	_	PRON	_	Gender=Masc|Number=Sing|Person=3	26	nsubj	_	_
25	_	_	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	26	cop	_	_
26	_	_	ADJ	_	Gender=Masc|Number=Sing	17	acl:relcl	_	_
27	_	_	ADP	_	_	29	case	_	_
28	_	_	DET	_	Definite=Ind|Gender=Fem|Number=Plur|PronType=Art	29	det	_	_
29	_	_	NOUN	_	Gender=Fem|Number=Plur	26	obl	_	SpaceAfter=No
30	_	_	PUNCT	_	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 31 28 iobj	color:blue
1	En	en	ADP	_	_	2	case	_	_
2	_	_	NOUN	_	Gender=Masc|Number=Sing	31	obl	_	_
3	_	_	ADP	_	_	4	case	_	_
4	_	_	NOUN	_	Gender=Fem|Number=Sing	2	nmod	_	SpaceAfter=No
5	_	_	PUNCT	_	_	31	punct	_	_
6	_	_	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	7	det	_	_
7	_	_	NOUN	_	Gender=Fem|Number=Plur	31	nsubj	_	_
8	_	_	ADP	_	_	11	case	_	_
9	_	_	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
10	_	_	ADJ	_	Gender=Fem|Number=Sing	11	amod	_	_
11	_	_	NOUN	_	Gender=Fem|Number=Sing	7	nmod	_	_
12	_	_	ADP	_	_	11	fixed	_	_
13	_	_	NOUN	_	Gender=Fem|Number=Sing	11	fixed	_	_
14	_	_	ADP	_	_	16	case	_	_
15	_	_	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	SpaceAfter=No
16	_	_	NOUN	_	Gender=Masc|Number=Sing	11	nmod	_	_
17	_	_	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	16	acl	_	_
18	_	_	PRON	_	Number=Sing|Person=3	23	case	_	_
19	_	_	PRON	_	Person=3	18	fixed	_	_
20	_	_	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	fixed	_	_
21	_	_	ADV	_	_	23	advmod	_	_
22	_	_	NUM	_	Gender=Masc|Number=Plur|NumType=Card	23	nummod	_	_
23	_	_	NOUN	_	Gender=Masc|Number=Plur	17	obl	_	_
24	_	_	ADP	_	_	25	case	_	_
25	_	_	PROPN	_	Gender=Fem|Number=Sing	17	obl	_	_
26	_	_	CCONJ	_	_	27	cc	_	_
27	_	_	PROPN	_	Gender=Masc|Number=Sing	25	conj	_	_
28	_	_	PRON	_	Gender=Fem|Number=Plur|Person=3	31	iobj	_	_
29	_	_	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	31	cop	_	_
30	_	_	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	31	det	_	_
31	_	_	NOUN	_	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
32	_	_	PUNCT	_	_	31	punct	_	_

~~~


