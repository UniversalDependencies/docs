---
layout: base
title:  'Statistics of root in UD_Greek-GLCII'
udver: '2'
---

## Treebank Statistics: UD_Greek-GLCII: Relations: `root`

This relation is universal.

671 nodes (7%) are attached to their parents as `root`.

671 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.1177347242921.

The following 9 pairs of parts of speech are connected with `root`: -<tt><a href="el_glcii-pos-VERB.html">VERB</a></tt> (479; 71% instances), -<tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt> (84; 13% instances), -<tt><a href="el_glcii-pos-ADJ.html">ADJ</a></tt> (58; 9% instances), -<tt><a href="el_glcii-pos-PROPN.html">PROPN</a></tt> (23; 3% instances), -<tt><a href="el_glcii-pos-ADV.html">ADV</a></tt> (14; 2% instances), -<tt><a href="el_glcii-pos-NUM.html">NUM</a></tt> (7; 1% instances), -<tt><a href="el_glcii-pos-PRON.html">PRON</a></tt> (4; 1% instances), -<tt><a href="el_glcii-pos-DET.html">DET</a></tt> (1; 0% instances), -<tt><a href="el_glcii-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	Τι	τι	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Int	2	obj	_	_
2	κανεις	κανω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	;	;	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Γεια	γεια	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	σας	εγώ	PRON	PRON	Case=Gen|Number=Plur|Person=2|PronType=Prs	1	nmod	_	_
3	Δημήτρης	Δημήτρης	PROPN	PROPN	Case=Nom|Gender=Masc|Number=Sing	1	vocative	_	SpaceAfter=No
4	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	Ειναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	3	cop	_	IntendedLemma=ειμαι
2	πολυ	πολυ	ADV	ADV	_	3	advmod	_	_
3	σιμαντικο	σιμαντικος	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
4	να	να	AUX	AUX	_	6	aux	_	_
5	μην	μην	PART	PART	_	6	advmod	_	_
6	κοψουμε	κοβω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	csubj	_	_
7	δεντρα	δεντρο	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Plur	6	obj	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	11	punct	_	SpaceAfter=No
9	αντιθετος	αντιθέτως	ADV	ADV	Typo=Yes	11	cc	_	CorrectSpaceAfter=Yes|CorrectForm=αντιθέτως
10	να	να	AUX	AUX	_	11	aux	_	_
11	φυτεψουμε	φυτευω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	3	punct	_	SpaceAfter=No|CorrectSpaceAfter=Yes

~~~


