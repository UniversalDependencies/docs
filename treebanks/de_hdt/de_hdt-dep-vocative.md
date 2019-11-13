---
layout: base
title:  'Statistics of vocative in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `vocative`

This relation is universal.

15 nodes (0%) are attached to their parents as `vocative`.

8 instances of `vocative` (53%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.8.

The following 5 pairs of parts of speech are connected with `vocative`: <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt> (9; 60% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt> (3; 20% instances), <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (1; 7% instances), <tt><a href="de_hdt-pos-X.html">X</a></tt>-<tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 vocative	color:blue
1	Bobos	Bobo	NOUN	NN	Gender=Masc|Number=Plur|Person=3	2	vocative	_	_
2	hört	hören	VERB	VVIMP	Mood=Imp|Number=Plur|Person=2|VerbForm=Fin	0	root	_	_
3	die	die	DET	ART	Case=Acc|Number=Plur|PronType=Art	4	det	_	_
4	Signale	Signal	NOUN	NN	Gender=Neut|Number=Plur|Person=3	2	obj	_	_
5	:	:	PUNCT	$.	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 15 vocative	color:blue
1	"	"	PUNCT	$(	PunctType=Brck	6	punct	_	_
2	Die	Die	PRON	PDS	Case=Nom|Number=Plur|Person=3|PronType=Dem	6	nsubj	_	_
3	haben	haben	AUX	VAFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
4	immer	immer	ADV	ADV	_	6	advmod	_	_
5	Geld	Geld	NOUN	NN	Gender=Neut|Number=Sing|Person=3	6	obj	_	_
6	gebraucht	gebrauchen	VERB	VVPP	Aspect=Perf|VerbForm=Part	0	root	_	_
7	,	,	PUNCT	$,	PunctType=Comm	11	punct	_	_
8	da	da	ADV	ADV	_	11	advmod	_	_
9	wurden	werden	AUX	VAFIN	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	11	aux:pass	_	_
10	Autos	Auto	NOUN	NN	Gender=Neut|Number=Plur|Person=3	11	nsubj:pass	_	_
11	gekauft	kaufen	VERB	VVPP	Aspect=Perf|VerbForm=Part	6	conj	_	_
12	,	,	PUNCT	$,	PunctType=Comm	13	punct	_	_
13	Ferraris	Ferraris	PROPN	NE	Number=Plur|Person=3	10	appos	_	_
14	,	,	PUNCT	$,	PunctType=Comm	13	punct	_	_
15	Mercedes	Mercedes	PROPN	NE	Case=Nom|Gender=Fem|Number=Sing|Person=3	6	vocative	_	_
16	SEL	SEL	PROPN	NE	Person=3	15	flat:name	_	_
17	und	und	CCONJ	KON	_	19	cc	_	_
18	so	so	ADV	ADV	Degree=Pos	19	advmod	_	_
19	weiter	weiter	ADV	ADV	Degree=Cmp	15	conj	_	_
20	.	.	PUNCT	$.	PunctType=Peri	6	punct	_	_
21	"	"	PUNCT	$(	PunctType=Brck	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 vocative	color:blue
1	Tschüss	unknown	NOUN	NN	Person=3	0	root	_	_
2	Freesholarships.com	unknown	NOUN	NN	Person=3	1	vocative	_	_
3	.	.	PUNCT	$.	PunctType=Peri	1	punct	_	_

~~~


