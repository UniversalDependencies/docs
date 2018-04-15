---
layout: base
title:  'Statistics of obl:arg in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="fr_gsd-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="fr_gsd-dep-obl-mod.html">obl:mod</a></tt>.

3263 nodes (1%) are attached to their parents as `obl:arg`.

3175 instances of `obl:arg` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.57676984370211.

The following 18 pairs of parts of speech are connected with `obl:arg`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (2414; 74% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (279; 9% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (258; 8% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (138; 4% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (65; 2% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (36; 1% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (28; 1% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt> (11; 0% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (10; 0% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (8; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (5; 0% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 obl:arg	color:blue
1	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	sécurité	sécurité	NOUN	_	Gender=Fem|Number=Sing	7	nsubj:pass	_	_
3	n'	ne	ADV	_	Polarity=Neg	7	advmod	_	SpaceAfter=No
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux:pass	_	_
5	absolument	absolument	ADV	_	_	6	advmod	_	_
6	pas	pas	ADV	_	Polarity=Neg	7	advmod	_	_
7	mise	mettre	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
8	de	de	ADP	_	_	9	case	_	_
9	coté	côté	NOUN	_	Gender=Masc|Number=Sing	7	obl:arg	_	SpaceAfter=No
10	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 obl:arg	color:blue
1	Les	le	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	2	det	_	_
2	lectures	lecture	NOUN	_	Gender=Fem|Number=Plur	10	nsubj	_	_
3	de	de	ADP	_	_	5	case	_	_
4	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	messe	messe	NOUN	_	Gender=Fem|Number=Sing	2	nmod	_	_
6	de	de	ADP	_	_	8	case	_	_
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	matin	matin	NOUN	_	Gender=Masc|Number=Sing	5	nmod	_	_
9	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
10	tirées	tirer	VERB	_	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	_
11	de	de	ADP	_	_	12	case	_	_
12	Ac	Ac	PROPN	_	_	10	obl:arg	_	SpaceAfter=No
13	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 obl:arg	color:blue
1	Aucun	aucun	DET	_	Gender=Masc|Number=Sing|Polarity=Neg|PronType=Neg	2	det	_	_
2	signe	signe	NOUN	_	Gender=Masc|Number=Sing	6	nsubj	_	_
3	échographique	échographique	ADJ	_	Gender=Masc|Number=Sing	2	amod	_	_
4	n'	ne	ADV	_	Polarity=Neg	6	advmod	_	SpaceAfter=No
5	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	symptomatique	symptomatique	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
7	de	de	ADP	_	_	9	case	_	_
8	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	trisomie	trisomie	NOUN	_	Gender=Fem|Number=Sing	6	obl:arg	_	_
10	21	21	NUM	_	_	9	nummod	_	SpaceAfter=No
11	.	.	PUNCT	_	_	6	punct	_	_

~~~


