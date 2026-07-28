---
layout: base
title:  'Statistics of nsubj:pass in UD_Italian-KIParlaForest'
udver: '2'
---

## Treebank Statistics: UD_Italian-KIParlaForest: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="it_kiparlaforest-dep-nsubj.html">nsubj</a></tt>.

24 nodes (0%) are attached to their parents as `nsubj:pass`.

18 instances of `nsubj:pass` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.79166666666667.

The following 5 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt> (12; 50% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-SCONJ.html">SCONJ</a></tt> (7; 29% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (3; 13% instances), <tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_kiparlaforest-pos-SCONJ.html">SCONJ</a></tt> (1; 4% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nsubj:pass	color:blue
1	purtroppo	purtroppo	ADV	_	_	3	advmod	_	Begin=510.264|KID=334-0
2	viene	venire	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	KID=334-1
3	oscurato	oscurare	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	KID=334-2
4	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	KID=334-3
5	nome	nome	NOUN	_	Gender=Masc|Number=Sing	3	nsubj:pass	_	End=512.044|KID=334-4

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj:pass	color:blue
1	e	e	CCONJ	_	_	5	reparandum	_	Begin=2038.267|KID=796-0|PauseAfter=Yes
2	e	e	CCONJ	_	_	5	cc	_	KID=796-2
3	che	che	SCONJ	_	PronType=Rel	5	nsubj:pass	_	KID=796-3
4	viene	venire	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:pass	_	KID=796-4
5	scritta	scrivere	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	End=2039.727|KID=796-5

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 nsubj:pass	color:blue
1	quindi	quindi	CCONJ	_	_	3	cc	_	Begin=2589.131|KID=1010-0
2	questa	questo	PRON	_	Gender=Fem|Number=Sing|PronType=Dem	3	nsubj	_	KID=1010-1|PaceSlow=Yes
3	potre~	potre~	X	_	_	7	reparandum	_	Interrupted=Yes|KID=1010-2
4	questa	questo	PRON	_	Gender=Fem|Number=Sing|PronType=Dem	7	nsubj:pass	_	KID=1010-3
5	è	essere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	KID=1010-4
6	stata	essere	AUX	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	7	aux:pass	_	KID=1010-5
7	trovata	trovare	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	KID=1010-6
8	molto	molto	ADV	_	_	9	advmod	_	KID=1010-7|PauseAfter=Yes
9	recentemente	recentemente	ADV	_	_	7	advmod	_	End=2592.504|KID=1010-9

~~~


