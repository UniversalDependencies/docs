---
layout: base
title:  'Statistics of obl:agent in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="fr_gsd-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="fr_gsd-dep-obl-mod.html">obl:mod</a></tt>.

1544 nodes (0%) are attached to their parents as `obl:agent`.

1544 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.56476683937824.

The following 11 pairs of parts of speech are connected with `obl:agent`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (969; 63% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (532; 34% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (14; 1% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (13; 1% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 obl:agent	color:blue
1	John	John	PROPN	_	Gender=Masc|Number=Sing	5	nsubj	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	très	très	ADV	_	_	4	advmod	_	_
4	tôt	tôt	ADV	_	_	5	advmod	_	_
5	orphelin	orphelin	ADJ	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	_	_
7	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	nsubj:pass	_	_
8	sera	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	9	aux:pass	_	_
9	élevé	élever	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	conj	_	_
10	par	par	ADP	_	_	12	case	_	_
11	sa	son	DET	_	Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=3|PronType=Prs	12	det	_	_
12	grand-mère	grand-mère	NOUN	_	Gender=Fem|Number=Sing	9	obl:agent	_	SpaceAfter=No
13	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:agent	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	wordform=le
2	film	film	NOUN	_	Gender=Masc|Number=Sing	4	nsubj:pass	_	_
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	réalisé	réaliser	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	par	par	ADP	_	_	6	case	_	_
6	J.A.	J.A.	PROPN	_	_	4	obl:agent	_	_
7	Howe	Howe	PROPN	_	_	6	flat:name	_	_
8	et	et	CCONJ	_	_	9	cc	_	_
9	Clarence	Clarence	PROPN	_	_	6	conj	_	_
10	Hennecke	Hennecke	PROPN	_	_	9	flat:name	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl:agent	color:blue
1	Cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	2	det	_	wordform=cette
2	défaite	défaite	NOUN	_	Gender=Fem|Number=Sing	4	nsubj:pass	_	_
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	suivie	suivre	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	par	par	ADP	_	_	7	case	_	_
6	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	autre	autre	PRON	_	Number=Sing|Person=3|PronType=Ind	4	obl:agent	_	SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	_	_

~~~


