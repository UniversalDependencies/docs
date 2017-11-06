---
layout: base
title:  'Statistics of aux in UD_Serbian'
udver: '2'
---

## Treebank Statistics: UD_Serbian: Relations: `aux`

This relation is universal.

4101 nodes (5%) are attached to their parents as `aux`.

2776 instances of `aux` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.87564008778347.

The following 14 pairs of parts of speech are connected with `aux`: <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (3177; 77% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (709; 17% instances), <tt><a href="sr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (125; 3% instances), <tt><a href="sr-pos-AUX.html">AUX</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (49; 1% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (12; 0% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-VERB.html">VERB</a></tt> (8; 0% instances), <tt><a href="sr-pos-PRON.html">PRON</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="sr-pos-NUM.html">NUM</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="sr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="sr-pos-PRON.html">PRON</a></tt>-<tt><a href="sr-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="sr-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 aux	color:blue
1	Bitići	Bitići	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	kaže	kazati	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	da	da	SCONJ	_	_	7	mark	_	_
4	bi	biti	AUX	_	Number=Plur|Person=3|Tense=Past	7	aux	_	_
5	jači	jak	ADJ	_	Case=Nom|Definite=Def|Degree=Cmp|Gender=Masc|Number=Plur	6	amod	_	_
6	sindikati	sindikat	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	7	nsubj	_	_
7	doneli	doneti	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	2	ccomp	_	_
8	bolje	dobar	ADJ	_	Case=Acc|Definite=Def|Degree=Cmp|Gender=Masc|Number=Plur	9	amod	_	_
9	ishode	ishod	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	7	obj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	Toliko	toliko	ADV	_	Degree=Pos	3	det:numgov	_	_
2	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	4	aux	_	_
3	radnika	radnik	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	4	obj	_	_
4	otpušteno	otpustiti	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Neut|Number=Sing|VerbForm=Part	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 aux	color:blue
1	Novi	nov	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	_
2	predsednik	predsednik	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
3	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	4	aux	_	_
4	rekao	reći	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
5	da	da	SCONJ	_	_	10	mark	_	_
6	će	hteti	AUX	_	Number=Sing|Person=3|Tense=Pres	10	aux	_	_
7	pridruživanje	pridruživanje	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	10	nsubj	_	_
8	EU	EU	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	7	obl	_	_
9	biti	biti	AUX	_	VerbForm=Inf	10	cop	_	_
10	prioritet	prioritet	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	4	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	_	_	4	punct	_	_

~~~


