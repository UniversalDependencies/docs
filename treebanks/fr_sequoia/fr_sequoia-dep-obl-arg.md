---
layout: base
title:  'Statistics of obl:arg in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `obl:arg`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `obl`: <tt><a href="fr_sequoia-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="fr_sequoia-dep-obl-mod.html">obl:mod</a></tt>.

1415 nodes (2%) are attached to their parents as `obl:arg`.

1386 instances of `obl:arg` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.77455830388693.

The following 17 pairs of parts of speech are connected with `obl:arg`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (1067; 75% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (131; 9% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (102; 7% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (45; 3% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt> (17; 1% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (15; 1% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (8; 1% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt> (7; 0% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl:arg	color:blue
1	L'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No
2	association	association	NOUN	_	Gender=Fem|Number=Sing	4	nsubj	_	_
3	paroissiale	paroissial	ADJ	_	Gender=Fem|Number=Sing	2	amod	_	_
4	investit	investir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	dans	dans	ADP	_	_	7	case	_	_
6	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	7	det	_	_
7	locaux	local	NOUN	_	Gender=Masc|Number=Plur	4	obl:arg	_	_
8	de	de	ADP	_	_	10	case	_	_
9	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	cure	cure	NOUN	_	Gender=Fem|Number=Sing	7	nmod	_	SpaceAfter=No
11	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 obl:arg	color:blue
1	-	-	PUNCT	_	_	9	punct	_	_
2	Aclasta	Aclasta	PROPN	_	_	9	nsubj	_	_
3	5	5	NUM	_	NumType=Card	4	nummod	_	_
4	mg	mg	NOUN	_	Gender=Masc	2	nmod	_	_
5	solution	solution	NOUN	_	Gender=Fem|Number=Sing	2	nmod	_	_
6	pour	pour	ADP	_	_	7	case	_	_
7	perfusion	perfusion	NOUN	_	Gender=Fem|Number=Sing	5	nmod	_	_
8	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
9	prête	prêt	ADJ	_	Gender=Fem|Number=Sing	0	root	_	_
10	à	à	ADP	_	_	12	case	_	_
11	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	12	det	_	SpaceAfter=No
12	emploi	emploi	NOUN	_	Gender=Masc|Number=Sing	9	obl:arg	_	SpaceAfter=No
13	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 obl:arg	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	procès	procès	NOUN	_	Gender=Masc|Number=Sing	3	nsubj	_	_
3	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	lieu	lieu	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	_
5	à	à	ADP	_	_	6	case	_	_
6	Brazzaville	Brazzaville	PROPN	_	Gender=Masc|Number=Sing	3	obl:arg	_	_
7	en	en	ADP	_	_	8	case	_	_
8	2005	2005	NUM	_	NumType=Card	3	obl:mod	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


