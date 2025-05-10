---
layout: base
title:  'Statistics of compound in UD_Uzbek-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Uzbek-TueCL: Relations: `compound`

This relation is universal.
There are 3 language-specific subtypes of `compound`: <tt><a href="uz_tuecl-dep-compound-lvc.html">compound:lvc</a></tt>, <tt><a href="uz_tuecl-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="uz_tuecl-dep-compound-svc.html">compound:svc</a></tt>.

28 nodes (3%) are attached to their parents as `compound`.

25 instances of `compound` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.07142857142857.

The following 10 pairs of parts of speech are connected with `compound`: <tt><a href="uz_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_tuecl-pos-VERB.html">VERB</a></tt> (15; 54% instances), <tt><a href="uz_tuecl-pos-ADV.html">ADV</a></tt>-<tt><a href="uz_tuecl-pos-VERB.html">VERB</a></tt> (2; 7% instances), <tt><a href="uz_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_tuecl-pos-NOUN.html">NOUN</a></tt> (2; 7% instances), <tt><a href="uz_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="uz_tuecl-pos-DET.html">DET</a></tt> (2; 7% instances), <tt><a href="uz_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_tuecl-pos-NOUN.html">NOUN</a></tt> (2; 7% instances), <tt><a href="uz_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uz_tuecl-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="uz_tuecl-pos-ADV.html">ADV</a></tt>-<tt><a href="uz_tuecl-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="uz_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_tuecl-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="uz_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="uz_tuecl-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="uz_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 compound	color:blue
1	Piter	Piter	PROPN	_	Case=Nom|Number=Sing	9	nsubj	_	_
2	Smit	Smit	PROPN	_	Case=Nom|Number=Sing	1	flat	_	_
3	ham	ham	CCONJ	_	_	1	cc	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	Meri	Meri	PROPN	_	Case=Nom|Number=Sing	1	conj	_	_
6	Braun	Braun	PROPN	_	Case=Nom|Number=Sing	5	flat	_	_
7	ham	ham	CCONJ	_	_	5	cc	_	_
8	saylana	sayla	VERB	_	VerbForm=Conv	9	compound	_	_
9	olmaydi	ol	VERB	_	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	0	root	_	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound	color:blue
1	Umuman	umuman	ADV	_	_	10	advmod	_	_
2	olganda	ol	VERB	_	_	1	compound	_	SpaceAfter=No
3	,	,	PUNCT	_	_	1	punct	_	_
4	oʻqishni	oʻqi	VERB	_	Case=Acc|VerbForm=Vnoun	10	xcomp	_	_
5	emas	emas	AUX	_	Polarity=Neg	4	cop	_	SpaceAfter=No
6	,	,	PUNCT	_	_	4	punct	_	_
7	rasm	rasm	NOUN	_	Case=Nom|Number=Sing	8	obj	_	_
8	chizishni	chiz	VERB	_	Case=Acc|VerbForm=Vnoun	4	conj	_	_
9	yaxshi	yaxshi	ADJ	_	_	10	compound:lvc	_	_
10	koʻradi	koʻr	VERB	_	_	0	root	_	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 compound	color:blue
1	Olma	olma	NOUN	_	Case=Nom|Number=Sing	2	nmod	_	_
2	daraxtlari	daraxt	NOUN	_	Case=Nom|Number=Plur|Poss=Yes	7	nsubj	_	_
3	aprel	aprel	NOUN	_	Case=Nom|Number=Sing	5	compound	_	SpaceAfter=No
4	-	-	PUNCT	_	_	3	punct	_	SpaceAfter=No
5	may	may	NOUN	_	Case=Nom|Number=Sing	6	nmod	_	_
6	oylarida	oy	NOUN	_	Case=Loc|Number=Plur|Poss=Yes	7	obl	_	_
7	gullab	gulla	VERB	_	VerbForm=Conv	0	root	_	SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	_
9	oʻzaro	oʻzaro	ADV	_	_	10	advcl	_	_
10	changlanadi	changlan	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	conj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	7	punct	_	_

~~~


