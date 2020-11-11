---
layout: base
title:  'Statistics of parataxis:parenth in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `parataxis:parenth`

This relation is a language-specific subtype of <tt><a href="fr_spoken-dep-parataxis.html">parataxis</a></tt>.
There are also 1 other language-specific subtypes of `parataxis`: <tt><a href="fr_spoken-dep-parataxis-insert.html">parataxis:insert</a></tt>.

44 nodes (0%) are attached to their parents as `parataxis:parenth`.

35 instances of `parataxis:parenth` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.31818181818182.

The following 16 pairs of parts of speech are connected with `parataxis:parenth`: <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (12; 27% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (8; 18% instances), <tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (4; 9% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (3; 7% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (3; 7% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (3; 7% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="fr_spoken-pos-DET.html">DET</a></tt>-<tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="fr_spoken-pos-DET.html">DET</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="fr_spoken-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 11 parataxis:parenth	color:blue
1	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	tendance	tendance	NOUN	_	Gender=Fem|Number=Sing	6	nsubj	_	_
3	dans	dans	ADP	_	_	5	case	_	_
4	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	5	det	_	_
5	médias	média	NOUN	_	Gender=Masc|Number=Plur	2	nmod	_	_
6	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	plutôt	plutôt	ADV	_	_	14	advmod	_	_
8	vous	il	PRON	_	Number=Plur|Person=2|PronType=Prs	11	nsubj	_	_
9	l'	le	PRON	_	Number=Sing|Person=3|PronType=Prs	11	obj	_	_
10	avez	avoir	AUX	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	11	aux	_	_
11	vu	voir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	14	parataxis:parenth	_	_
12	de	de	ADP	_	_	14	case	_	_
13	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	côté	côté	NOUN	_	Gender=Masc|Number=Sing	6	obl:arg	_	_
15	d'	de	ADP	_	_	18	case	_	_
16	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	18	det	_	_
17	léger	léger	ADJ	_	Gender=Masc|Number=Sing	18	amod	_	_
18	assoupissement	assoupissement	NOUN	_	_	14	nmod	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 parataxis:parenth	color:blue
1	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	rendez-vous	rendez	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
3	fixé	fixer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	acl	_	_
4	vous	il	PRON	_	Number=Plur|Person=2|PronType=Prs	7	nsubj	_	_
5	l'	le	PRON	_	Number=Sing|Person=3|PronType=Prs	7	obj	_	_
6	avez	avoir	AUX	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	dit	dire	VERB	_	_	3	parataxis:parenth	_	_
8	après	après	ADP	_	_	11	case	_	_
9	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
10	forte	fort	ADJ	_	Gender=Fem|Number=Sing	11	amod	_	_
11	mobilisation	mobilisation	NOUN	_	Gender=Fem|Number=Sing	3	obl:mod	_	_
12	de	de	ADP	_	_	15	case	_	_
13	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
14	vingt-neuf	vingt-neuf	NUM	_	Number=Plur	15	nummod	_	_
15	janvier	janvier	NOUN	_	Gender=Masc|Number=Sing	11	nmod	_	_
16	dernier	dernier	ADJ	_	Gender=Masc|Number=Sing	15	amod	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 parataxis:parenth	color:blue
1	ensuite	ensuite	ADV	_	_	12	advmod	_	_
2	euh	euh	INTJ	_	_	1	discourse	_	_
3	disons	dire	VERB	_	Mood=Imp|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	1	parataxis:parenth	_	_
4	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	5	det	_	_
5	mots	mots	NOUN	_	_	3	obj	_	_
6	comme	comme	SCONJ	_	_	8	mark	_	_
7	ils	il	PRON	_	Gender=Masc|Number=Plur|Person=3|PronType=Prs	8	nsubj	_	_
8	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	acl	_	_
9	vous	il	PRON	_	Number=Plur|Person=2|PronType=Prs	12	nsubj:pass	_	_
10	avez	avoir	AUX	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	12	aux	_	_
11	été	être	AUX	DoubleAux	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	12	aux:pass	_	_
12	ruinée	ruiner	VERB	DoubleAux	_	0	root	_	_

~~~


