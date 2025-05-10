---
layout: base
title:  'Statistics of discourse in UD_Greek-Cretan'
udver: '2'
---

## Treebank Statistics: UD_Greek-Cretan: Relations: `discourse`

This relation is universal.

37 nodes (1%) are attached to their parents as `discourse`.

27 instances of `discourse` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.64864864864865.

The following 9 pairs of parts of speech are connected with `discourse`: <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-INTJ.html">INTJ</a></tt> (20; 54% instances), <tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_cretan-pos-INTJ.html">INTJ</a></tt> (6; 16% instances), <tt><a href="el_cretan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_cretan-pos-INTJ.html">INTJ</a></tt> (2; 5% instances), <tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_cretan-pos-PART.html">PART</a></tt> (2; 5% instances), <tt><a href="el_cretan-pos-PRON.html">PRON</a></tt>-<tt><a href="el_cretan-pos-INTJ.html">INTJ</a></tt> (2; 5% instances), <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-ADV.html">ADV</a></tt> (2; 5% instances), <tt><a href="el_cretan-pos-ADV.html">ADV</a></tt>-<tt><a href="el_cretan-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="el_cretan-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_cretan-pos-INTJ.html">INTJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 discourse	color:blue
1	Ντα	ντα	INTJ	AdBa	_	5	discourse	_	SpaceAfter=No
2	,	,	PUNCT	AdBa	_	1	punct	_	PunctType=Comm
3	αυτός	αυτός	DET	PnDm	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	5	nsubj	_	_
4	δε	δεν	PART	PtNg	Polarity=Neg	5	advmod	_	_
5	δίνει	δίνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	μούδε	μούδε	CCONJ	AdBa	_	5	cc	_	_
7	τ'	ο	DET	AtDf	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	αγγέλου	άγγελος	NOUN	NoPr	Case=Gen|Gender=Masc|Number=Sing	5	iobj	_	_
9	του	εγώ	PRON	AtDf	Case=Gen|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	8	nmod	_	_
10	νερό	νερό	NOUN	NoCm	Case=Gen|Gender=Neut|Number=Sing	5	obj	_	SpaceAfter=No
11	.	.	PUNCT	PTERMP	_	5	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	Ε	Ε	INTJ	OPUNCT	_	4	discourse	_	_
2	,	,	PUNCT	OPUNCT	_	1	punct	_	PunctType=Comm
3	μια	ένας	DET	AtId	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	βραδιά	βραδιά	NOUN	NoCm	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
5	είναι	είμαι	AUX	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	4	cop	_	_
6	,	,	PUNCT	PUNCT	_	4	punct	_	PunctType=Comm
7	ας	ας	AUX	PtOt	_	8	aux	_	_
8	κακοπεράσουμε	κακοπερνώ	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	4	conj	_	_
9	.	.	PUNCT	PTERMP	_	8	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 discourse	color:blue
1	Φωνιάζει	φωνιάζω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	:	:	PUNCT	PTERM	_	1	punct	_	PunctType=Colo
3	«	«	PUNCT	OPUNCT	_	7	punct	_	PunctType=Quot
4	Μωρέ	μωρέ	INTJ	AdBa	_	5	discourse	_	_
5	θεοκατάρατε	θεοκατάρατος	ADJ	NoCm	Case=Voc|Gender=Masc|Number=Sing	7	vocative	_	_
6	,	,	PUNCT	PUNCT	_	5	punct	_	PunctType=Comm
7	κατές	κατέχω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp	_	_
8	είντα	είντα	PRON	NoCm	Case=Acc|Gender=Neut|Number=Sing|PronType=Int	10	obj	_	_
9	μου	εγώ	PRON	PnPe	Case=Gen|Number=Sing|Person=1|PronType=Prs	10	iobj	_	_
10	λες	λέω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	7	ccomp	_	_
11	;	;	PUNCT	CPUNCT	_	7	punct	_	PunctType=Qest
12	»	»	PUNCT	OPUNCT	_	7	punct	_	PunctType=Quot
13	.	.	PUNCT	PTERMP	_	1	punct	_	PunctType=Peri

~~~


