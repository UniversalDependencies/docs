---
layout: base
title:  'Statistics of aux:pass in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="it_isdt-dep-aux.html">aux</a></tt>.

2234 nodes (1%) are attached to their parents as `aux:pass`.

2231 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16427931960609.

The following 4 pairs of parts of speech are connected with `aux:pass`: <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-AUX.html">AUX</a></tt> (2216; 99% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-AUX.html">AUX</a></tt> (9; 0% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-AUX.html">AUX</a></tt> (8; 0% instances), <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt>-<tt><a href="it_isdt-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:pass	color:blue
1	È	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	2:cop	_
2	vero	vero	ADJ	A	Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	2:punct	_
4	tutti	tutto	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	7	nsubj:pass	7:nsubj:pass	_
5	possiamo	potere	AUX	VM	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	7	aux	7:aux	_
6	essere	essere	AUX	VA	VerbForm=Inf	7	aux:pass	7:aux:pass	_
7	sostituiti	sostituire	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	2	parataxis	2:parataxis	SpaceAfter=No
8	.	.	PUNCT	FS	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux:pass	color:blue
1	Quando	quando	ADV	B	_	3	advmod	3:advmod	_
2	venne	venire	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	aux:pass	3:aux:pass	_
3	fabbricato	fabbricato	NOUN	S	Gender=Masc|Number=Sing	0	root	0:root	_
4	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	6:det	_
5	primo	primo	ADJ	NO	Gender=Masc|Number=Sing|NumType=Ord	6	amod	6:amod	_
6	asciugacapelli	asciugacapelli	NOUN	S	Gender=Masc	3	nsubj:pass	3:nsubj:pass	SpaceAfter=No
7	?	?	PUNCT	FS	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 aux:pass	color:blue
1	900	900	NUM	N	NumType=Card	0	root	0:root	_
2	se	se	SCONJ	CS	_	8	mark	8:mark	_
3	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	4	det	4:det	_
4	ricerche	ricerca	NOUN	S	Gender=Fem|Number=Plur	8	nsubj:pass	8:nsubj:pass	_
5	sono	essere	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	aux:pass	8:aux:pass	_
6	state	essere	AUX	VA	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	8	cop	8:cop	_
7	molto	molto	ADV	B	_	8	advmod	8:advmod	_
8	lunghe	lungo	ADJ	A	Gender=Fem|Number=Plur	1	advcl	1:advcl:se	SpaceAfter=No
9	.	.	PUNCT	FS	_	1	punct	1:punct	_

~~~


