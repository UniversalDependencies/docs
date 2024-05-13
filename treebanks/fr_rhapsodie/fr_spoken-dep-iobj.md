---
layout: base
title:  'Statistics of iobj in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `iobj`

This relation is universal.

541 nodes (2%) are attached to their parents as `iobj`.

363 instances of `iobj` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.54343807763401.

The following 16 pairs of parts of speech are connected with `iobj`: <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (367; 68% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (103; 19% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt> (26; 5% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt> (25; 5% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-DET.html">DET</a></tt> (6; 1% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-DET.html">DET</a></tt>-<tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 iobj	color:blue
1	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	vois	voir	VERB	DISCOURSE	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	10	discourse	_	_
3	euh	euh	INTJ	_	_	2	discourse	_	_
4	moi	lui	PRON	_	Number=Sing|Person=1|PronType=Prs	10	dislocated	_	_
5	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	fac	fac	NOUN	_	Gender=Fem|Number=Sing	10	dislocated	_	_
7	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	10	nsubj	_	_
8	m'	lui	PRON	_	_	10	iobj	_	_
9	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
10	fait	faire	VERB	_	_	0	root	_	_
11	beaucoup	beaucoup	ADV	_	_	10	obj	_	_
12	de	de	ADP	_	_	13	case	_	_
13	bien	bien	NOUN	_	Gender=Masc|Number=Sing	11	obl:arg	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 iobj	color:blue
1	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	fais	faire	VERB	_	Number=Sing|Person=1	0	root	_	_
3	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	5	det	_	_
4	petits	petit	ADJ	_	Gender=Masc|Number=Plur	5	amod	_	_
5	boulots	boulot	NOUN	_	_	2	iobj	_	_
6	en	en	ADP	_	_	7	case	_	_
7	plus	plus	ADV	_	_	2	advmod	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 iobj	color:blue
1	bon	bon	INTJ	_	_	5	discourse	_	_
2	euh	euh	INTJ	_	_	5	discourse	_	_
3	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	5	nsubj	_	_
4	y	y	PRON	_	Person=3|PronType=Prs	5	iobj	_	_
5	reviendra	revenir	VERB	_	_	0	root	_	_
6	d'	de	ADP	_	_	7	case	_	_
7	ailleurs	ailleurs	ADV	_	_	5	advmod	_	_
8	sur	sur	ADP	_	_	5	iobj	_	_
9	sur	sur	ADP	conj:reform	_	11	case	_	_
10	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	style	style	NOUN	_	Gender=Masc|Number=Sing	8	reparandum	_	_

~~~


