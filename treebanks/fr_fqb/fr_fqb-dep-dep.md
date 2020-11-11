---
layout: base
title:  'Statistics of dep in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `dep`

This relation is universal.

313 nodes (1%) are attached to their parents as `dep`.

256 instances of `dep` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.29073482428115.

The following 9 pairs of parts of speech are connected with `dep`: <tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_fqb-pos-PART.html">PART</a></tt> (234; 75% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-X.html">X</a></tt> (36; 12% instances), <tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_fqb-pos-X.html">X</a></tt> (34; 11% instances), <tt><a href="fr_fqb-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_fqb-pos-X.html">X</a></tt> (3; 1% instances), <tt><a href="fr_fqb-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_fqb-pos-INTJ.html">INTJ</a></tt> (2; 1% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fr_fqb-pos-X.html">X</a></tt>-<tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 dep	color:blue
1	Pour	pour	ADP	_	_	3	case	_	_
2	quelle	quel	DET	_	Gender=Fem|Number=Sing|PronType=Int	3	det	_	_
3	compagnie	compagnie	NOUN	_	Gender=Fem|Number=Sing	6	obl:mod	_	_
4	Marty	Marty	PROPN	_	Gender=Masc|Number=Sing	6	nsubj	_	_
5	McKewon	McKewon	PROPN	_	_	4	flat:name	_	_
6	travaille	travailler	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
7	-t	t	PART	_	_	8	dep	_	SpaceAfter=No|wordform=t
8	-il	il	PRON	_	Gender=Masc|Number=Sing|Person=3	6	expl:subj	_	wordform=il
9	?	?	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 dep	color:blue
1	En	en	ADP	_	_	3	case	_	_
2	quelle	quel	DET	_	Gender=Fem|Number=Sing|PronType=Int	3	det	_	_
3	année	année	NOUN	_	Gender=Fem|Number=Sing	6	obl:mod	_	_
4	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux:tense	_	_
5	été	être	AUX	_	Tense=Past|VerbForm=Part	6	aux:pass	_	_
6	tourné	tourner	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	film	film	NOUN	_	Gender=Masc|Number=Sing	6	nsubj:pass	_	_
9	"	"	PUNCT	_	_	10	punct	_	SpaceAfter=No
10	War	War	X	_	_	8	dep	_	_
11	Games	Games	X	_	_	10	flat:foreign	_	SpaceAfter=No
12	"	"	PUNCT	_	_	10	punct	_	_
13	?	?	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 dep	color:blue
1	Qui	qui	PRON	_	PronType=Int	3	nsubj	_	_
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:tense	_	_
3	composé	composer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	"	"	PUNCT	_	_	8	punct	_	SpaceAfter=No
5	The	The	X	_	_	8	dep	_	_
6	Pines	Pines	X	_	_	8	dep	_	_
7	of	of	X	_	_	8	dep	_	_
8	Rome	Rome	PROPN	_	Gender=Masc|Number=Sing	3	obj	_	SpaceAfter=No
9	"	"	PUNCT	_	_	8	punct	_	_
10	?	?	PUNCT	_	_	3	punct	_	_

~~~


