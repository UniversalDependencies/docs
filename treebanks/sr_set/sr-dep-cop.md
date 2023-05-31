---
layout: base
title:  'Statistics of cop in UD_Serbian'
udver: '2'
---

## Treebank Statistics: UD_Serbian: Relations: `cop`

This relation is universal.

1328 nodes (2%) are attached to their parents as `cop`.

1175 instances of `cop` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.32756024096386.

The following 10 pairs of parts of speech are connected with `cop`: <tt><a href="sr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (633; 48% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (576; 43% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (62; 5% instances), <tt><a href="sr-pos-PRON.html">PRON</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (33; 2% instances), <tt><a href="sr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (10; 1% instances), <tt><a href="sr-pos-NUM.html">NUM</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (9; 1% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sr-pos-PART.html">PART</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cop	color:blue
1	Poreklom	poreklo	NOUN	_	Case=Ins|Gender=Neut|Number=Sing	6	parataxis	_	_
2	iz	iz	ADP	_	Case=Gen	3	case	_	_
3	Afrike	Afrika	PROPN	_	Case=Gen|Gender=Fem|Number=Sing	1	nmod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	1	punct	_	_
5	nilski	nilski	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Plur	6	amod	_	_
6	konji	konj	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	8	nsubj	_	_
7	su	biti	AUX	_	Number=Plur|Person=3|Tense=Pres	8	cop	_	_
8	vegetarijanci	vegetarijanac	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 cop	color:blue
1	Njegove	njegov	PRON	_	Case=Nom|Gender=Fem|Number=Plur|Person=3|Poss=Yes	2	det	_	_
2	izjave	izjava	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	5	nsubj	_	_
3	su	biti	AUX	_	Number=Plur|Person=3|Tense=Pres	5	cop	_	_
4	dobro	dobro	ADV	_	Degree=Pos	5	advmod	_	_
5	primljene	primiti	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Plur|VerbForm=Part	0	root	_	SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	_	_
7	posebno	posebno	ADV	_	Degree=Pos	9	advmod	_	_
8	među	među	ADP	_	Case=Ins	9	case	_	_
9	političarima	političar	NOUN	_	Case=Ins|Gender=Masc|Number=Plur	5	parataxis	_	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cop	color:blue
1	Malo	malo	ADV	_	Degree=Pos	0	root	_	_
2	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	1	cop	_	_
3	onih	onaj	PRON	_	Case=Gen|Gender=Masc|Number=Plur|PronType=Dem	1	nsubj	_	_
4	koji	koji	PRON	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Ind	5	nsubj	_	_
5	žele	želeti	VERB	_	Number=Plur|Person=3|Tense=Pres	3	acl	_	_
6	da	da	SCONJ	_	_	10	mark	_	_
7	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	10	compound	_	_
8	taj	taj	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	9	det	_	_
9	scenario	scenario	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	10	nsubj	_	_
10	ponovi	ponoviti	VERB	_	Number=Sing|Person=3|Tense=Pres	5	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	_	_	1	punct	_	_

~~~


