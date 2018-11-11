---
layout: base
title:  'Statistics of aux:pass in UD_French-FTB'
udver: '2'
---

## Treebank Statistics: UD_French-FTB: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="fr_ftb-dep-aux.html">aux</a></tt>.
There are also 1 other language-specific subtypes of `aux`: <tt><a href="fr_ftb-dep-aux-caus.html">aux:caus</a></tt>.

3332 nodes (1%) are attached to their parents as `aux:pass`.

3329 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.3406362545018.

The following 4 pairs of parts of speech are connected with `aux:pass`: <tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_ftb-pos-AUX.html">AUX</a></tt> (3324; 100% instances), <tt><a href="fr_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_ftb-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="fr_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_ftb-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 aux:pass	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 aux:pass	color:blue
1	Ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	9	nsubj	_	_
2	_	_	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Rel	3	nsubj	_	_
3	_	_	VERB	_	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	acl:relcl	_	_
4	_	_	AUX	_	VerbForm=Inf	8	aux:pass	_	_
5	_	_	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	8	acl	_	_
6	_	_	ADP	_	_	8	case	_	_
7	_	_	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	_	_	NOUN	_	Gender=Masc|Number=Sing	3	xcomp	_	_
9	_	_	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
10	_	_	ADP	_	_	9	advmod	_	_
11	_	_	NOUN	_	Gender=Masc|Number=Sing	10	fixed	_	_
12	_	_	ADP	_	_	14	case	_	_
13	_	_	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	_	_	NOUN	_	Gender=Masc|Number=Sing	9	obl	_	_
15	_	_	ADP	_	_	16	case	_	SpaceAfter=No
16	_	_	NOUN	_	Gender=Fem|Number=Sing	14	nmod	_	SpaceAfter=No
17	_	_	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 42	bgColor:blue
# visual-style 42	fgColor:white
# visual-style 45	bgColor:blue
# visual-style 45	fgColor:white
# visual-style 45 42 aux:pass	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	_	_	NOUN	_	Gender=Masc|Number=Sing	12	nsubj	_	_
3	_	_	ADP	_	_	5	case	_	_
4	_	_	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	_	_	PROPN	_	_	2	nmod	_	_
6	_	_	ADP	_	_	5	fixed	_	_
7	_	_	NOUN	_	Gender=Masc|Number=Sing	5	fixed	_	_
8	_	_	ADJ	_	Gender=Masc|Number=Sing	5	fixed	_	_
9	_	_	PUNCT	_	_	5	punct	_	SpaceAfter=No
10	_	_	PROPN	_	Gender=Fem|Number=Sing	5	nmod	_	SpaceAfter=No
11	_	_	PUNCT	_	_	5	punct	_	_
12	_	_	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
13	_	_	SCONJ	_	_	15	mark	_	_
14	_	_	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	_	_	NOUN	_	Gender=Fem|Number=Sing	12	obj	_	_
16	_	_	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	15	acl	_	_
17	_	_	NOUN	_	Gender=Masc|Number=Sing	16	obl	_	_
18	_	_	NUM	_	Gender=Masc|Number=Sing|NumType=Card	17	nummod	_	_
19	_	_	NOUN	_	Gender=Masc|Number=Sing	17	nmod	_	_
20	_	_	PUNCT	_	_	16	punct	_	SpaceAfter=No
21	_	_	ADV	_	_	26	case	_	_
22	_	_	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	fixed	_	_
23	_	_	NOUN	_	Gender=Fem|Number=Sing	21	fixed	_	_
24	_	_	ADP	_	_	21	fixed	_	_
25	_	_	DET	_	Definite=Ind|Gender=Masc|Number=Plur|PronType=Art	26	det	_	_
26	_	_	NOUN	_	Gender=Masc|Number=Plur	16	obl	_	_
27	_	_	ADP	_	_	28	case	_	_
28	_	_	NOUN	_	Gender=Masc|Number=Plur	26	nmod	_	SpaceAfter=No
29	_	_	PUNCT	_	_	16	punct	_	SpaceAfter=No
30	_	_	PUNCT	_	_	15	punct	_	_
31	_	_	ADP	_	_	32	mark	_	_
32	_	_	VERB	_	VerbForm=Inf	15	acl	_	_
33	_	_	PUNCT	_	_	32	punct	_	SpaceAfter=No
34	_	_	ADP	_	_	32	advmod	_	_
35	_	_	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	34	fixed	_	_
36	_	_	NOUN	_	Gender=Fem|Number=Sing	34	fixed	_	SpaceAfter=No
37	_	_	PUNCT	_	_	32	punct	_	_
38	_	_	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	39	det	_	_
39	_	_	NOUN	_	Gender=Masc|Number=Sing	32	obj	_	_
40	_	_	ADJ	_	Number=Sing	39	fixed	_	_
41	_	_	ADJ	_	Gender=Masc|Number=Sing	39	amod	_	_
42	_	_	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	45	aux:pass	_	_
43	_	_	ADV	_	_	45	advmod	_	_
44	_	_	PUNCT	_	_	45	punct	_	SpaceAfter=No
45	_	_	ADJ	_	Gender=Fem|Number=Sing	12	xcomp	_	SpaceAfter=No
46	_	_	PUNCT	_	_	45	punct	_	SpaceAfter=No
47	_	_	PUNCT	_	_	12	punct	_	_

~~~


