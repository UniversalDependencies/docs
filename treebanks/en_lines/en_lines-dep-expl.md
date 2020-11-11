---
layout: base
title:  'Statistics of expl in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Relations: `expl`

This relation is universal.

360 nodes (0%) are attached to their parents as `expl`.

346 instances of `expl` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.70277777777778.

The following 8 pairs of parts of speech are connected with `expl`: <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (248; 69% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (44; 12% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (35; 10% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (21; 6% instances), <tt><a href="en_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (7; 2% instances), <tt><a href="en_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="en_lines-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 expl	color:blue
1	If	if	SCONJ	_	_	4	mark	_	_
2	that	that	PRON	DEM-SG	Number=Sing|PronType=Dem	4	nsubj	_	SpaceAfter=No
3	's	be	AUX	PRES	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	true	true	ADJ	POS	Degree=Pos	8	advmod	_	SpaceAfter=No
5	,	,	PUNCT	Comma	_	4	punct	_	_
6	then	then	ADV	_	PronType=Dem	8	advmod	_	_
7	there	there	PRON	EX	_	8	expl	_	SpaceAfter=No
8	's	be	VERB	PRES	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	no	no	DET	NEG	_	10	det	_	_
10	hope	hope	NOUN	SG-NOM	Number=Sing	8	nsubj	_	SpaceAfter=No
11	.	.	PUNCT	Period	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 expl	color:blue
1	There	there	PRON	EX	_	4	expl	_	_
2	are	be	AUX	PRES	Mood=Ind|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	raisons	raison	NOUN	PL-NOM-FGN	Number=Plur	4	compound	_	_
4	d'etat	d'etat	NOUN	SG-NOM-FGN	Number=Sing	0	root	_	_
5	and	and	CCONJ	_	_	9	cc	_	_
6	there	there	PRON	EX	_	9	expl	_	_
7	are	be	AUX	PRES	Mood=Ind|Tense=Pres|VerbForm=Fin	9	cop	_	_
8	private	private	ADJ	POS	Degree=Pos	9	amod	_	_
9	crimes	crime	NOUN	PL-NOM	Number=Plur	4	conj	_	SpaceAfter=No
10	.	.	PUNCT	Period	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl	color:blue
1	Is	be	AUX	PRES	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
2	it	it	PRON	PERS-SG	_	3	expl	_	_
3	possible	possible	ADJ	POS	Degree=Pos	0	root	_	_
4	that	that	SCONJ	_	_	6	mark	_	_
5	you	you	PRON	PERS-P2	_	6	nsubj	_	_
6	know	know	VERB	PRES	Mood=Ind|Tense=Pres|VerbForm=Fin	3	csubj	_	_
7	the	the	DET	DEF	Definite=Def|PronType=Art	8	det	_	_
8	people	people	NOUN	PL-NOM	Number=Plur	6	obj	_	_
9	involved	involve	VERB	PASS	Tense=Past|VerbForm=Part	8	acl	_	SpaceAfter=No
10	?	?	PUNCT	QuestionMark	_	3	punct	_	_

~~~


