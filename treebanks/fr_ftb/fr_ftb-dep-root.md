---
layout: base
title:  'Statistics of root in UD_French-FTB'
udver: '2'
---

## Treebank Statistics: UD_French-FTB: Relations: `root`

This relation is universal.

18535 nodes (3%) are attached to their parents as `root`.

18535 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.2629619638522.

The following 15 pairs of parts of speech are connected with `root`: -<tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt> (13258; 72% instances), -<tt><a href="fr_ftb-pos-NOUN.html">NOUN</a></tt> (2241; 12% instances), -<tt><a href="fr_ftb-pos-AUX.html">AUX</a></tt> (1238; 7% instances), -<tt><a href="fr_ftb-pos-ADJ.html">ADJ</a></tt> (1077; 6% instances), -<tt><a href="fr_ftb-pos-PROPN.html">PROPN</a></tt> (263; 1% instances), -<tt><a href="fr_ftb-pos-PRON.html">PRON</a></tt> (251; 1% instances), -<tt><a href="fr_ftb-pos-NUM.html">NUM</a></tt> (68; 0% instances), -<tt><a href="fr_ftb-pos-ADP.html">ADP</a></tt> (34; 0% instances), -<tt><a href="fr_ftb-pos-ADV.html">ADV</a></tt> (33; 0% instances), -<tt><a href="fr_ftb-pos-X.html">X</a></tt> (19; 0% instances), -<tt><a href="fr_ftb-pos-CCONJ.html">CCONJ</a></tt> (13; 0% instances), -<tt><a href="fr_ftb-pos-DET.html">DET</a></tt> (13; 0% instances), -<tt><a href="fr_ftb-pos-INTJ.html">INTJ</a></tt> (12; 0% instances), -<tt><a href="fr_ftb-pos-PUNCT.html">PUNCT</a></tt> (12; 0% instances), -<tt><a href="fr_ftb-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
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
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 14 root	color:blue
1	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
2	_	_	ADJ	_	Gender=Fem|Number=Sing	3	amod	_	_
3	_	_	NOUN	_	Gender=Fem|Number=Sing	14	nsubj	_	_
4	_	_	ADP	_	_	6	case	_	_
5	_	_	DET	_	Definite=Def|Number=Plur|PronType=Art	6	det	_	_
6	_	_	NOUN	_	Gender=Masc|Number=Plur	3	nmod	_	_
7	_	_	ADP	_	_	8	case	_	SpaceAfter=No
8	_	_	PROPN	_	_	6	nmod	_	_
9	_	_	ADJ	_	_	8	fixed	_	_
10	_	_	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	14	aux	_	_
11	_	_	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	14	cop	_	_
12	_	_	ADP	_	_	14	case	_	_
13	_	_	NUM	_	Gender=Masc|Number=Plur|NumType=Card	14	nummod	_	SpaceAfter=No
14	_	_	NOUN	_	Gender=Masc|Number=Plur	0	root	_	_
15	_	_	ADP	_	_	16	case	_	_
16	_	_	NOUN	_	Gender=Masc|Number=Sing	14	obl	_	_
17	_	_	NUM	_	Gender=Fem|Number=Sing|NumType=Card	16	nummod	_	SpaceAfter=No
18	_	_	PUNCT	_	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	Ils	il	PRON	_	Gender=Masc|Number=Plur|Person=3	2	nsubj	_	_
2	_	_	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
3	_	_	VERB	_	VerbForm=Inf	2	xcomp	_	_
4	_	_	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	5	det	_	_
5	_	_	NOUN	_	Gender=Fem|Number=Plur	3	obj	_	_
6	_	_	ADP	_	_	9	case	_	_
7	_	_	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
8	_	_	ADJ	_	Gender=Masc|Number=Sing	9	amod	_	_
9	_	_	NOUN	_	Gender=Masc|Number=Sing	3	obl	_	SpaceAfter=No
10	_	_	PUNCT	_	_	9	punct	_	_
11	_	_	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	9	acl	_	_
12	_	_	ADP	_	_	14	case	_	_
13	_	_	NUM	_	Gender=Masc|Number=Plur|NumType=Card	14	nummod	_	_
14	_	_	NOUN	_	Gender=Masc|Number=Plur|NumType=Card	11	obl	_	_
15	_	_	ADP	_	_	16	case	_	SpaceAfter=No
16	_	_	NOUN	_	Gender=Masc|Number=Plur	14	nmod	_	SpaceAfter=No
17	_	_	PUNCT	_	_	3	punct	_	_
18	_	_	CCONJ	_	_	22	cc	_	_
19	_	_	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	20	det	_	SpaceAfter=No
20	_	_	PROPN	_	Gender=Fem|Number=Sing	22	nsubj	_	_
21	_	_	PRON	_	Gender=Fem|Number=Sing|Person=3|Reflex=Yes	22	expl	_	_
22	_	_	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	3	conj	_	_
23	_	_	ADP	_	_	24	case	_	_
24	_	_	PRON	_	Gender=Masc|Number=Plur|Person=3|PronType=Prs	22	obl	_	_
25	_	_	ADP	_	_	26	mark	_	_
26	_	_	VERB	_	VerbForm=Inf	22	xcomp	_	_
27	_	_	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	28	det	_	_
28	_	_	NOUN	_	Gender=Fem|Number=Plur	26	obj	_	_
29	_	_	ADJ	_	Gender=Fem|Number=Plur	28	amod	_	_
30	_	_	VERB	_	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	28	acl	_	SpaceAfter=No
31	_	_	PUNCT	_	_	26	punct	_	_
32	_	_	CCONJ	_	_	33	cc	_	_
33	_	_	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	26	conj	_	_
34	_	_	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	35	det	_	_
35	_	_	NOUN	_	Gender=Fem|Number=Sing	33	obj	_	SpaceAfter=No
36	_	_	PUNCT	_	_	2	punct	_	_

~~~


