---
layout: base
title:  'Statistics of cop in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `cop`

This relation is universal.

5059 nodes (1%) are attached to their parents as `cop`.

4972 instances of `cop` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.09310140343942.

The following 12 pairs of parts of speech are connected with `cop`: <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (2962; 59% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (1591; 31% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (229; 5% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (138; 3% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (55; 1% instances), <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (28; 1% instances), <tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (24; 0% instances), <tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (17; 0% instances), <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (7; 0% instances), <tt><a href="fr_gsd-pos-DET.html">DET</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="fr_gsd-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 cop	color:blue
1	C'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	9	nsubj	_	SpaceAfter=No|wordform=c'
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
3	véritablement	véritablement	ADV	_	_	9	advmod	_	_
4	pour	pour	ADP	_	_	7	case	_	_
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
6	futur	futur	ADJ	_	Gender=Masc|Number=Sing	7	amod	_	_
7	baptisé	baptiser	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	9	obl:mod	_	_
8	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	changement	changement	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
10	de	de	ADP	_	_	11	case	_	_
11	cap	cap	NOUN	_	Gender=Masc|Number=Sing	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	wordform=il
2	ne	ne	ADV	_	Polarity=Neg	4	advmod	_	_
3	sera	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	cop	_	_
4	présent	présent	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
5	que	que	ADV	_	_	10	advmod	_	_
6	durant	durant	ADP	_	_	10	case	_	_
7	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	10	det	_	_
8	10	10	NUM	_	Number=Plur	10	nummod	_	_
9	premières	premier	ADJ	_	Gender=Fem|Number=Plur	10	amod	_	_
10	parties	partie	NOUN	_	Gender=Fem|Number=Plur	4	obl:mod	_	SpaceAfter=No
11	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cop	color:blue
1	Qu'	que	PRON	_	Person=3|PronType=Int	0	root	_	SpaceAfter=No|wordform=qu'
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	SpaceAfter=No
3	-ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	1	expl:subj	_	wordform=ce
4	qui	qui	PRON	_	PronType=Rel	5	nsubj	_	_
5	va	aller	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	advcl:cleft	_	_
6	augmenter	augmenter	VERB	_	VerbForm=Inf	5	xcomp:obj	_	_
7	?	?	PUNCT	_	_	1	punct	_	_

~~~


