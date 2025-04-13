---
layout: base
title:  'Statistics of cop in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `cop`

This relation is universal.

25365 nodes (1%) are attached to their parents as `cop`.

15098 instances of `cop` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.6240488862606.

The following 11 pairs of parts of speech are connected with `cop`: <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (13596; 54% instances), <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (10128; 40% instances), <tt><a href="de_hdt-pos-ADV.html">ADV</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (540; 2% instances), <tt><a href="de_hdt-pos-DET.html">DET</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (476; 2% instances), <tt><a href="de_hdt-pos-PRON.html">PRON</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (230; 1% instances), <tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (159; 1% instances), <tt><a href="de_hdt-pos-X.html">X</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (101; 0% instances), <tt><a href="de_hdt-pos-NUM.html">NUM</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (90; 0% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (36; 0% instances), <tt><a href="de_hdt-pos-ADP.html">ADP</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (8; 0% instances), <tt><a href="de_hdt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 cop	color:blue
1	Denen	der	PRON	PDS	Case=Dat|Number=Plur|PronType=Dem,Rel	5	obl:arg	_	_
2	sei	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	expl	_	_
4	zu	zu	ADV	PTKA	_	5	advmod	_	_
5	mühsam	mühsam	ADJ	ADJD	Degree=Pos|Variant=Short	0	root	_	_
6	,	,	PUNCT	$,	PunctType=Comm	9	punct	_	_
7	Kopierschutz-Codes	Kopierschutz-Codes	X	FM	Foreign=Yes	9	obj	_	_
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
2	Mein	mein	DET	PPOSAT	Case=Nom|Gender=Neut|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	3	det	_	_
3	Ziel	Ziel	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
4	ist	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
5	2006	2006	NUM	CARD	Number=Plur|NumType=Card	3	nsubj	_	_
6	.	.	PUNCT	$.	PunctType=Peri	3	punct	_	_
7	"	"	PUNCT	$(	PunctType=Brck	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cop	color:blue
1	Internet	Internet	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing	5	nsubj	_	CxnElt=4:Existential-CopPred-ThereExpl.Pivot
2	Explorer	Explorer	PROPN	NE	Case=Nom|Number=Sing	1	flat:name	_	_
3	6	6	NUM	CARD	Number=Plur|NumType=Card	1	flat	_	_
4	ist	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	Cxn=Existential-CopPred-ThereExpl
5	da	da	ADV	ADV	_	0	root	_	_

~~~


