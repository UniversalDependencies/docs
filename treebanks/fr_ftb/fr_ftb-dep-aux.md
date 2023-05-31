---
layout: base
title:  'Statistics of aux in UD_French-FTB'
udver: '2'
---

## Treebank Statistics: UD_French-FTB: Relations: `aux`

This relation is universal.
There are 2 language-specific subtypes of `aux`: <tt><a href="fr_ftb-dep-aux-caus.html">aux:caus</a></tt>, <tt><a href="fr_ftb-dep-aux-pass.html">aux:pass</a></tt>.

7196 nodes (1%) are attached to their parents as `aux`.

7195 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.58518621456365.

The following 9 pairs of parts of speech are connected with `aux`: <tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_ftb-pos-AUX.html">AUX</a></tt> (6759; 94% instances), <tt><a href="fr_ftb-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_ftb-pos-AUX.html">AUX</a></tt> (202; 3% instances), <tt><a href="fr_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_ftb-pos-AUX.html">AUX</a></tt> (132; 2% instances), <tt><a href="fr_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_ftb-pos-AUX.html">AUX</a></tt> (88; 1% instances), <tt><a href="fr_ftb-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_ftb-pos-AUX.html">AUX</a></tt> (11; 0% instances), <tt><a href="fr_ftb-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_ftb-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="fr_ftb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_ftb-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="fr_ftb-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fr_ftb-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_ftb-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 aux	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	_	_	NOUN	_	Gender=Masc|Number=Sing	12	nsubj	_	_
3	_	_	ADP	_	_	4	case	_	_
4	_	_	NOUN	_	Gender=Fem|Number=Sing	2	nmod	_	_
5	_	_	ADP	_	_	7	case	_	_
6	_	_	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	_	_	NOUN	_	Gender=Masc|Number=Sing	4	nmod	_	_
8	_	_	ADV	_	Polarity=Neg	12	advmod	_	SpaceAfter=No
9	_	_	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	_
10	_	_	ADV	_	Polarity=Neg	12	advmod	_	_
11	_	_	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	12	aux:pass	_	_
12	_	_	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
13	_	_	PUNCT	_	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 aux	color:blue
1	Tout	tout	ADV	_	_	3	advmod	_	_
2	_	_	ADP	_	_	3	mark	_	_
3	_	_	VERB	_	Tense=Pres|VerbForm=Part	14	advcl	_	_
4	_	_	ADP	_	_	6	mark	_	_
5	_	_	VERB	_	VerbForm=Inf	6	aux:caus	_	_
6	_	_	VERB	_	VerbForm=Inf	3	xcomp	_	_
7	_	_	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	_	_	NOUN	_	Gender=Fem|Number=Sing	6	obj	_	_
9	_	_	ADP	_	_	10	mark	_	_
10	_	_	VERB	_	VerbForm=Inf	6	advcl	_	SpaceAfter=No
11	_	_	PUNCT	_	_	14	punct	_	_
12	_	_	PROPN	_	Number=Sing	14	nsubj	_	_
13	_	_	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	aux	_	_
14	_	_	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
15	_	_	VERB	_	VerbForm=Part	14	xcomp	_	_
16	_	_	ADP	_	_	17	case	_	_
17	_	_	NOUN	_	Gender=Fem|Number=Sing	15	obl	_	_
18	_	_	CCONJ	_	_	20	cc	_	_
19	_	_	PROPN	_	Number=Sing	20	nsubj	_	_
20	_	_	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	conj	_	_
21	_	_	ADP	_	_	20	advmod	_	_
22	_	_	NOUN	_	_	21	fixed	_	_
23	_	_	ADP	_	_	25	case	_	_
24	_	_	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	25	det	_	_
25	_	_	NOUN	_	Gender=Masc|Number=Sing	20	obl	_	_
26	_	_	ADP	_	_	28	case	_	_
27	_	_	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	28	det	_	_
28	_	_	NOUN	_	Gender=Fem|Number=Sing	25	nmod	_	SpaceAfter=No
29	_	_	PUNCT	_	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 aux	color:blue
1	Les	le	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	_	_
2	_	_	ADJ	_	Gender=Masc|Number=Plur	3	amod	_	_
3	_	_	NOUN	_	Gender=Masc|Number=Plur	14	nsubj	_	_
4	_	_	ADP	_	_	5	case	_	_
5	_	_	NUM	_	Gender=Fem|Number=Sing|NumType=Card	3	nmod	_	_
6	_	_	CCONJ	_	_	9	cc	_	_
7	_	_	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
8	_	_	ADJ	_	Gender=Fem|Number=Sing|NumType=Ord	9	amod	_	_
9	_	_	NOUN	_	Gender=Fem|Number=Sing	3	conj	_	_
10	_	_	ADP	_	_	11	case	_	_
11	_	_	NUM	_	Gender=Fem|Number=Sing|NumType=Card	9	nmod	_	_
12	_	_	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	14	aux	_	_
13	_	_	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	14	cop	_	_
14	_	_	ADJ	_	Gender=Masc|Number=Plur	0	root	_	_
15	_	_	ADP	_	_	17	case	_	_
16	_	_	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	_	_
17	_	_	NOUN	_	Gender=Fem|Number=Sing	14	obl	_	_
18	_	_	ADP	_	_	20	case	_	_
19	_	_	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	20	det	_	_
20	_	_	NOUN	_	Gender=Masc|Number=Sing	17	nmod	_	_
21	_	_	ADJ	_	Gender=Masc|Number=Sing	20	amod	_	_
22	_	_	ADP	_	_	24	case	_	_
23	_	_	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	24	det	_	_
24	_	_	NOUN	_	Gender=Fem|Number=Sing	20	nmod	_	_
25	_	_	ADJ	_	Gender=Fem|Number=Sing	24	fixed	_	SpaceAfter=No
26	_	_	PUNCT	_	_	14	punct	_	_

~~~


