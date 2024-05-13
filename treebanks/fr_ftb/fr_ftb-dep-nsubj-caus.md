---
layout: base
title:  'Statistics of nsubj:caus in UD_French-FTB'
udver: '2'
---

## Treebank Statistics: UD_French-FTB: Relations: `nsubj:caus`

This relation is a language-specific subtype of <tt><a href="fr_ftb-dep-nsubj.html">nsubj</a></tt>.

17 nodes (0%) are attached to their parents as `nsubj:caus`.

17 instances of `nsubj:caus` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.76470588235294.

The following 4 pairs of parts of speech are connected with `nsubj:caus`: <tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_ftb-pos-PRON.html">PRON</a></tt> (8; 47% instances), <tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_ftb-pos-NOUN.html">NOUN</a></tt> (7; 41% instances), <tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_ftb-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_ftb-pos-ADP.html">ADP</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 nsubj:caus	color:blue
1	"	"	PUNCT	_	_	3	punct	_	_
2	_	_	PRON	_	Gender=Masc|Number=Sing|Person=3	3	nsubj	_	_
3	_	_	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	_	_	ADP	_	_	6	case	_	_
5	_	_	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	_	_	PROPN	_	Gender=Fem|Number=Sing	3	obl	_	_
7	_	_	SCONJ	_	_	11	mark	_	_
8	_	_	PRON	_	Gender=Masc|Number=Sing|Person=3	11	nsubj:caus	_	_
9	_	_	PRON	_	Gender=Masc|Number=Sing|Person=3|Reflex=Yes	11	expl	_	_
10	_	_	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux:caus	_	_
11	_	_	VERB	_	VerbForm=Inf	3	ccomp	_	SpaceAfter=No
12	_	_	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 12 nsubj:caus	color:blue
1	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	_	_	NOUN	_	Gender=Fem|Number=Sing	8	obl	_	SpaceAfter=No
3	_	_	PUNCT	_	_	8	punct	_	_
4	_	_	ADJ	_	Gender=Masc|Number=Sing	8	nsubj	_	_
5	_	_	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	fixed	_	_
6	_	_	NOUN	_	Gender=Masc|Number=Sing	4	fixed	_	_
7	_	_	PRON	_	Gender=Fem|Number=Sing|Person=3	8	obj	_	_
8	_	_	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	SpaceAfter=No
9	_	_	PUNCT	_	_	8	punct	_	_
10	_	_	CCONJ	_	_	16	cc	_	_
11	_	_	DET	_	Gender=Masc|Number=Sing|PronType=Dem	12	det	_	_
12	_	_	NOUN	_	Gender=Masc|Number=Sing	16	nsubj:caus	_	_
13	_	_	ADJ	_	Gender=Masc|Number=Sing	12	amod	_	_
14	_	_	PRON	_	Gender=Fem|Number=Sing|Person=3	16	iobj	_	_
15	_	_	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	aux:caus	_	_
16	_	_	VERB	_	VerbForm=Inf	8	conj	_	_
17	_	_	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	18	det	_	_
18	_	_	NOUN	_	Gender=Fem|Number=Sing	16	obj	_	SpaceAfter=No
19	_	_	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:caus	color:blue
1	Ces	ce	DET	_	Gender=Masc|Number=Plur|PronType=Dem	2	det	_	_
2	_	_	ADJ	_	Gender=Masc|Number=Plur|NumType=Ord	5	nsubj:caus	_	_
3	_	_	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	aux:caus	_	_
4	_	_	ADV	_	_	5	advmod	_	_
5	_	_	VERB	_	VerbForm=Inf	0	root	_	_
6	_	_	DET	_	Gender=Fem|Number=Plur|Person=3|Poss=Yes	7	det	_	_
7	_	_	NOUN	_	Gender=Fem|Number=Plur	5	obj	_	_
8	_	_	ADP	_	_	9	mark	_	_
9	_	_	VERB	_	VerbForm=Inf	5	advcl	_	_
10	_	_	DET	_	Definite=Ind|Gender=Fem|Number=Plur|PronType=Art	11	det	_	_
11	_	_	NOUN	_	Gender=Fem|Number=Plur	9	obj	_	_
12	_	_	ADP	_	_	13	case	_	_
13	_	_	NOUN	_	Gender=Masc|Number=Plur	11	nmod	_	SpaceAfter=No
14	_	_	PUNCT	_	_	5	punct	_	_

~~~


