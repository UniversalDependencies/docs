---
layout: base
title:  'Statistics of punct in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `punct`

This relation is universal.

7863 nodes (11%) are attached to their parents as `punct`.

4491 instances of `punct` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.46534401627877.

The following 16 pairs of parts of speech are connected with `punct`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PUNCT.html">PUNCT</a></tt> (3260; 41% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-PUNCT.html">PUNCT</a></tt> (3014; 38% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-PUNCT.html">PUNCT</a></tt> (543; 7% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-PUNCT.html">PUNCT</a></tt> (346; 4% instances), <tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_sequoia-pos-PUNCT.html">PUNCT</a></tt> (259; 3% instances), <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_sequoia-pos-PUNCT.html">PUNCT</a></tt> (186; 2% instances), <tt><a href="fr_sequoia-pos-X.html">X</a></tt>-<tt><a href="fr_sequoia-pos-PUNCT.html">PUNCT</a></tt> (96; 1% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-PUNCT.html">PUNCT</a></tt> (90; 1% instances), <tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_sequoia-pos-PUNCT.html">PUNCT</a></tt> (48; 1% instances), <tt><a href="fr_sequoia-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="fr_sequoia-pos-PUNCT.html">PUNCT</a></tt> (10; 0% instances), <tt><a href="fr_sequoia-pos-SYM.html">SYM</a></tt>-<tt><a href="fr_sequoia-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances), <tt><a href="fr_sequoia-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_sequoia-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), <tt><a href="fr_sequoia-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_sequoia-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="fr_sequoia-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-DET.html">DET</a></tt>-<tt><a href="fr_sequoia-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fr_sequoia-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 punct	color:blue
1	M.	monsieur	NOUN	_	Gender=Masc|Number=Sing	3	nsubj	_	_
2	Hosneld	Hosneld	PROPN	_	_	1	nmod	_	_
3	avait	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
4	44	44	NUM	_	NumType=Card	5	nummod	_	_
5	ans	an	NOUN	_	Gender=Masc|Number=Plur	3	obj	_	SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 15 punct	color:blue
1	Ouverture	ouverture	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
2	tous	tout	ADJ	_	Gender=Masc|Number=Plur	4	amod	_	_
3	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	4	det	_	_
4	jours	jour	NOUN	_	Gender=Masc|Number=Plur	1	nmod	_	_
5	sauf	sauf	ADP	_	_	7	case	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	lundi	lundi	NOUN	_	Gender=Masc|Number=Sing	4	nmod	_	_
8	de	de	ADP	_	_	10	case	_	_
9	14	14	NUM	_	NumType=Card	10	nummod	_	SpaceAfter=No
10	h	h	NOUN	_	Gender=Fem|Number=Sing	1	nmod	_	SpaceAfter=No
11	30	30	NUM	_	NumType=Card	10	nmod	_	_
12	à	à	ADP	_	_	14	case	_	_
13	18	18	NUM	_	NumType=Card	14	nummod	_	SpaceAfter=No
14	h	h	NOUN	_	Gender=Fem|Number=Sing	10	obl:arg	_	SpaceAfter=No
15	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 punct	color:blue
1	"	"	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	Verdun	Verdun	PROPN	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	ville	ville	NOUN	_	Gender=Fem|Number=Sing	2	appos	_	_
5	de	de	ADP	_	_	6	case	_	_
6	lumière	lumière	NOUN	_	Gender=Fem|Number=Sing	4	nmod	_	_
7	!	!	PUNCT	_	_	2	punct	_	SpaceAfter=No
8	"	"	PUNCT	_	_	2	punct	_	_

~~~


