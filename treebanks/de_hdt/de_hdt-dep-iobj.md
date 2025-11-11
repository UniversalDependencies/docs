---
layout: base
title:  'Statistics of iobj in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `iobj`

This relation is universal.

110 nodes (0%) are attached to their parents as `iobj`.

60 instances of `iobj` (55%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.93636363636364.

The following 5 pairs of parts of speech are connected with `iobj`: <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt> (75; 68% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (16; 15% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt> (16; 15% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-DET.html">DET</a></tt> (2; 2% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 iobj	color:blue
1	Kostet	kosten	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Cxn=Interrogative-Polar-Direct|CxnElt=1:Interrogative-Polar-Direct.Clause
2	Spam	Spam	PROPN	NE	_	1	nsubj	_	_
3	Firmen	Firma	NOUN	NN	Gender=Fem|Number=Plur	1	iobj	_	_
4	Milliarden	Milliarde	NOUN	NN	Gender=Fem|Number=Plur	1	obj	_	_
5	?	?	PUNCT	$.	PunctType=Peri	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 iobj	color:blue
1	Aber	aber	CCONJ	KON	_	5	cc	_	_
2	halt	halt	ADV	ADV	_	5	advmod	_	_
3	,	,	PUNCT	$,	PunctType=Comm	2	punct	_	_
4	was	was	PRON	PWS	Case=Acc|Gender=Neut|Number=Sing|PronType=Int,Rel	5	obj	_	CxnElt=5:Interrogative-WHInfo-Direct.WHWord
5	lehrt	lehren	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Cxn=Interrogative-WHInfo-Direct|CxnElt=5:Interrogative-WHInfo-Direct.Clause
6	uns	wir	PRON	PPER	Case=Acc|Number=Plur|Person=1|PronType=Prs	5	iobj	_	_
7	Henri	Henri	PROPN	NE	Gender=Masc|Number=Sing	5	nsubj	_	_
8	Breuil	Breuil	PROPN	NE	_	7	flat:name	_	_
9	?	?	PUNCT	$.	PunctType=Peri	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 iobj	color:blue
1	Gefälschte	fälschen	ADJ	ADJA	Degree=Pos|Number=Plur	2	amod	_	_
2	Telefonkarten	Telefonkarte	NOUN	NN	Gender=Fem|Number=Plur	3	nsubj	_	_
3	kosten	kosten	VERB	VVFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	Telekom	Telekom	PROPN	NE	Gender=Fem|Number=Sing	3	iobj	_	_
5	Millionen	Million	NOUN	NN	Gender=Fem|Number=Plur	3	obj	_	_

~~~


