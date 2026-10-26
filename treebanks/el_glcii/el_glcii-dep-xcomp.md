---
layout: base
title:  'Statistics of xcomp in UD_Greek-GLCII'
udver: '2'
---

## Treebank Statistics: UD_Greek-GLCII: Relations: `xcomp`

This relation is universal.

165 nodes (2%) are attached to their parents as `xcomp`.

162 instances of `xcomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.35151515151515.

The following 7 pairs of parts of speech are connected with `xcomp`: <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-VERB.html">VERB</a></tt> (136; 82% instances), <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-ADJ.html">ADJ</a></tt> (12; 7% instances), <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt> (9; 5% instances), <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-PROPN.html">PROPN</a></tt> (5; 3% instances), <tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 xcomp	color:blue
1	Θέλω	θέλω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	να	να	AUX	AUX	_	3	aux	_	_
3	σπουδάσω	σπουδάζω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin|Voice=Act	1	xcomp	_	_
4	σ	σε	ADP	ADP	_	7	case	_	_
5	τη	ο	DET	DET	Case=Acc|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
6	ιατρική	ιατρικός	ADJ	ADJ	Case=Acc|Gender=Fem|Number=Sing	7	amod	_	_
7	σχολή	σχολή	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	3	obl	_	SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 xcomp	color:blue
1	Πώς	πώς	ADV	ADV	_	6	advmod	_	_
2	ο	ο	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	δήμαρχος	δήμαρχος	NOUN	NOUN	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
4	μόνος	μόνος	ADJ	ADJ	Case=Nom|Gender=Masc|Number=Sing	6	xcomp	_	_
5	του	μου	PRON	PRON	Case=Gen|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	4	obl	_	_
6	αποφασίζει	αποφασίζω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	τα	ο	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	8	det	_	_
8	δικαιώματά	δικαίωμα	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Plur	6	obj	_	_
9	μας	μου	PRON	PRON	Case=Gen|Gender=Masc|Number=Plur|Person=1|Poss=Yes|PronType=Prs	8	nmod	_	SpaceAfter=No
10	!	!	PUNCT	PUNCT	_	6	punct	_	SpaceAfter=No
11	!	!	PUNCT	PUNCT	_	6	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Το	εγώ	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	obj	_	_
2	λέμε	λέγω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	ταμπού	ταμπού	NOUN	NOUN	Case=Acc|Gender=Masc|Number=Sing	2	xcomp	_	SpaceAfter=No
4	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


