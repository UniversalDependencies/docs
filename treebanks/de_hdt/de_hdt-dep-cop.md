---
layout: base
title:  'Statistics of cop in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `cop`

This relation is universal.

25362 nodes (1%) are attached to their parents as `cop`.

15096 instances of `cop` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.57735982966643.

The following 10 pairs of parts of speech are connected with `cop`: <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (13687; 54% instances), <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (10126; 40% instances), <tt><a href="de_hdt-pos-PRON.html">PRON</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (628; 2% instances), <tt><a href="de_hdt-pos-ADV.html">ADV</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (523; 2% instances), <tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (159; 1% instances), <tt><a href="de_hdt-pos-X.html">X</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (102; 0% instances), <tt><a href="de_hdt-pos-NUM.html">NUM</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (91; 0% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (37; 0% instances), <tt><a href="de_hdt-pos-ADP.html">ADP</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (8; 0% instances), <tt><a href="de_hdt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 cop	color:blue
1	Denen	Denen	PRON	PDS	Case=Dat|Number=Plur|Person=3|PronType=Dem	5	obj	_	_
2	sei	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	expl	_	_
4	zu	zu	ADV	PTKA	_	5	advmod	_	_
5	mühsam	mühsam	ADJ	ADJD	Degree=Pos|Variant=Short	0	root	_	_
6	,	,	PUNCT	$,	PunctType=Comm	9	punct	_	_
7	Kopierschutz-Codes	Kopierschutz-Codes	X	FM	Foreign=Yes|Person=3	9	obj	_	_
8	zu	zu	PART	PTKZU	PartType=Inf	9	mark	_	_
9	knacken	knacken	VERB	VVINF	VerbForm=Inf	5	csubj	_	_
10	.	.	PUNCT	$.	PunctType=Peri	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cop	color:blue
1	"	"	PUNCT	$(	PunctType=Brck	3	punct	_	_
2	Mein	Mein	PRON	PPOSAT	Case=Nom|Gender=Neut|Number=Sing|Person=1|Poss=Yes|PronType=Prs	3	det	_	_
3	Ziel	Ziel	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing|Person=3	0	root	_	_
4	ist	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
5	2006	2006	NUM	CARD	Number=Plur|NumType=Card|Person=3	3	nsubj	_	_
6	.	.	PUNCT	$.	PunctType=Peri	3	punct	_	_
7	"	"	PUNCT	$(	PunctType=Brck	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 cop	color:blue
1	Im	Im	ADP	APPRART	AdpType=Prep|Case=Dat|PronType=Art	2	case	_	_
2	Grunde	Grund	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing|Person=3	6	nmod	_	_
3	seien	sein	AUX	VAFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
4	Free-PCs	PC	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	6	nsubj	_	_
5	nichts	nichts	DET	PIAT	Gender=Neut|Number=Sing|Person=3|PronType=Ind,Neg,Tot	6	det	_	_
6	anderes	ander	PRON	PIS	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Ind,Neg,Tot	0	root	_	_
7	als	als	CCONJ	KOKOM	ConjType=Comp	9	case	_	_
8	eine	eine	DET	ART	Case=Nom|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	Mogelpackung	Packung	NOUN	NN	Gender=Fem|Number=Sing|Person=3	6	obl	_	_
10	.	.	PUNCT	$.	PunctType=Peri	6	punct	_	_

~~~


