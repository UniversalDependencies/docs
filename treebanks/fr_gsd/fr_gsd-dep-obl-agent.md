---
layout: base
title:  'Statistics of obl:agent in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="fr_gsd-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="fr_gsd-dep-obl-mod.html">obl:mod</a></tt>.

1554 nodes (0%) are attached to their parents as `obl:agent`.

1554 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.56113256113256.

The following 12 pairs of parts of speech are connected with `obl:agent`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (999; 64% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (508; 33% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (15; 1% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (14; 1% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 obl:agent	color:blue
1	John	John	PROPN	_	Gender=Masc|Number=Sing	5	nsubj	_	Exponence[Gender]=Inherent
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	très	très	ADV	_	_	4	advmod	_	_
4	tôt	tôt	ADV	_	_	5	advmod	_	_
5	orphelin	orphelin	ADJ	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	_	_
7	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	nsubj:pass	_	_
8	sera	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	9	aux:pass	_	_
9	élevé	élever	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	5	conj	_	Tense[denom]=Past
10	par	par	ADP	_	_	12	case	_	_
11	sa	son	DET	_	Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=3|Poss=Yes|PronType=Prs	12	det	_	_
12	grand-mère	grand-mère	NOUN	_	Gender=Fem|Number=Sing	9	obl:agent	_	Exponence[Gender]=Inherent|SpaceAfter=No
13	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:agent	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	wordform=le
2	film	film	NOUN	_	Gender=Masc|Number=Sing	4	nsubj:pass	_	Exponence[Gender]=Inherent
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	réalisé	réaliser	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	Tense[denom]=Past
5	par	par	ADP	_	_	6	case	_	_
6	J.A.	J.A.	PROPN	_	_	4	obl:agent	_	_
7	Howe	Howe	PROPN	_	_	6	flat:name	_	_
8	et	et	CCONJ	_	_	9	cc	_	_
9	Clarence	Clarence	PROPN	_	_	6	conj	_	_
10	Hennecke	Hennecke	PROPN	_	_	9	flat:name	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 15 obl:agent	color:blue
1	A	à	ADP	_	_	3	case	_	wordform=à
2	45	45	NUM	_	Number=Plur	3	nummod	_	Exponence[Number]=Inherent
3	km	km	NOUN	_	Gender=Masc|Number=Plur	12	obl:mod	_	Exponence[Gender]=Inherent
4	à	à	ADP	_	_	6	case	_	_
5	l'	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	Exponence[Gender]=Absent|SpaceAfter=No
6	est	est	NOUN	_	Gender=Masc|Number=Sing	3	nmod	_	Exponence[Gender]=Inherent
7	de	de	ADP	_	_	8	case	_	_
8	Burgos	Burgos	PROPN	_	_	3	nmod	_	SpaceAfter=No
9	,	,	PUNCT	_	_	3	punct	_	_
10	Belorado	Belorado	PROPN	_	_	12	nsubj:pass	_	_
11	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux:pass	_	_
12	traversé	traverser	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	Tense[denom]=Past
13	par	par	ADP	_	_	15	case	_	_
14	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	río	río	X	_	ExtPos=PROPN|Gender=Masc|Number=Sing	12	obl:agent	_	_
16	Tirón	Tirón	PROPN	_	_	15	flat:name	_	SpaceAfter=No
17	,	,	PUNCT	_	_	18	punct	_	_
18	affluent	affluent	NOUN	_	Gender=Masc|Number=Sing	15	appos	_	Exponence[Gender]=Inherent
19	de	de	ADP	_	_	21	case	_	_
20	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	21	det	_	SpaceAfter=No
21	Èbre	Èbre	PROPN	_	Number=Sing	18	nmod	_	SpaceAfter=No
22	.	.	PUNCT	_	_	12	punct	_	_

~~~


