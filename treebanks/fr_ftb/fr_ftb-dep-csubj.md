---
layout: base
title:  'Statistics of csubj in UD_French-FTB'
udver: '2'
---

## Treebank Statistics: UD_French-FTB: Relations: `csubj`

This relation is universal.

83 nodes (0%) are attached to their parents as `csubj`.

66 instances of `csubj` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 12.0361445783133.

The following 9 pairs of parts of speech are connected with `csubj`: <tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt> (47; 57% instances), <tt><a href="fr_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt> (18; 22% instances), <tt><a href="fr_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt> (7; 8% instances), <tt><a href="fr_ftb-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt> (4; 5% instances), <tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_ftb-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_ftb-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="fr_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_ftb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fr_ftb-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_ftb-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 csubj	color:blue
1	Reste	rester	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	_	_	SCONJ	_	_	9	mark	_	_
3	_	_	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	_	_	NOUN	_	Gender=Fem|Number=Sing	9	nsubj	_	SpaceAfter=No
5	_	_	PUNCT	_	_	9	punct	_	_
6	_	_	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Rel	9	iobj	_	_
7	_	_	ADV	_	_	9	advmod	_	SpaceAfter=No
8	_	_	PUNCT	_	_	9	punct	_	_
9	_	_	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	csubj	_	_
10	_	_	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	_	_	NOUN	_	Gender=Masc|Number=Sing	9	obj	_	_
12	_	_	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Rel	13	nsubj	_	_
13	_	_	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	acl:relcl	_	_
14	_	_	ADV	_	_	17	case	_	_
15	_	_	ADP	_	_	14	fixed	_	_
16	_	_	NUM	_	NumType=Card	17	det	_	_
17	_	_	NOUN	_	Gender=Masc|Number=Plur	13	obl	_	_
18	_	_	ADP	_	_	19	case	_	_
19	_	_	NOUN	_	Gender=Fem|Number=Sing	17	nmod	_	SpaceAfter=No
20	_	_	PUNCT	_	_	17	punct	_	_
21	_	_	CCONJ	_	_	22	cc	_	_
22	_	_	ADP	_	_	17	conj	_	_
23	_	_	NUM	_	NumType=Card	22	nummod	_	_
24	_	_	ADP	_	_	26	case	_	_
25	_	_	NUM	_	Gender=Masc|Number=Sing|NumType=Card	26	nummod	_	_
26	_	_	NOUN	_	Gender=Masc|Number=Sing|NumType=Card	22	obj	_	_
27	_	_	ADP	_	_	28	case	_	_
28	_	_	NOUN	_	Gender=Masc|Number=Plur	26	nmod	_	_
29	_	_	ADP	_	_	30	case	_	_
30	_	_	NOUN	_	Gender=Masc|Number=Sing	22	nmod	_	SpaceAfter=No
31	_	_	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 csubj	color:blue
1	Ériger	ériger	VERB	_	VerbForm=Inf	8	csubj	_	_
2	_	_	DET	_	Gender=Fem|Number=Sing|Person=3|Poss=Yes	3	det	_	_
3	_	_	NOUN	_	Gender=Fem|Number=Plur	1	obj	_	_
4	_	_	ADP	_	_	5	case	_	_
5	_	_	NOUN	_	Gender=Masc|Number=Sing	1	obl	_	_
6	_	_	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	cop	_	_
7	_	_	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	_	_	NOUN	_	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
9	_	_	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 csubj	color:blue
1	Dire	dire	VERB	_	VerbForm=Inf	10	csubj	_	_
2	_	_	SCONJ	_	_	7	mark	_	_
3	_	_	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Rel	7	nsubj	_	_
4	_	_	ADV	_	_	7	advmod	_	SpaceAfter=No
5	_	_	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
6	_	_	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	7	aux:pass	_	_
7	_	_	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	1	ccomp	_	_
8	_	_	ADV	_	_	1	advmod	_	_
9	_	_	VERB	_	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
10	_	_	ADJ	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
11	_	_	PUNCT	_	_	10	punct	_	_

~~~


