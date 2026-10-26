---
layout: base
title:  'Statistics of vocative in UD_Greek-GLCII'
udver: '2'
---

## Treebank Statistics: UD_Greek-GLCII: Relations: `vocative`

This relation is universal.

10 nodes (0%) are attached to their parents as `vocative`.

5 instances of `vocative` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 5 pairs of parts of speech are connected with `vocative`: <tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_glcii-pos-PROPN.html">PROPN</a></tt> (4; 40% instances), <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt> (2; 20% instances), <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-PROPN.html">PROPN</a></tt> (2; 20% instances), <tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="el_glcii-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 vocative	color:blue
1	Γεια	γεια	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	σας	εγώ	PRON	PRON	Case=Gen|Number=Plur|Person=2|PronType=Prs	1	nmod	_	_
3	Δημήτρης	Δημήτρης	PROPN	PROPN	Case=Nom|Gender=Masc|Number=Sing	1	vocative	_	SpaceAfter=No
4	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 vocative	color:blue
1	1	1	NUM	NUM	NumType=Card	6	discourse	_	SpaceAfter=No|NewPar=Yes
2	.	.	PUNCT	PUNCT	_	1	punct	_	_
3	Παιδιά	παιδί	NOUN	NOUN	Case=Voc|Gender=Neut|Number=Plur	6	vocative	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	6	punct	_	_
5	να	να	AUX	AUX	_	6	aux	_	_
6	προσέχετε	προσέχω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	την	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	διατροφή	διατροφή	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	6	obj	_	_
9	σας	μου	PRON	PRON	Case=Gen|Gender=Masc|Number=Plur|Person=2|Poss=Yes|PronType=Prs	8	nmod	_	_
10	και	και	CCONJ	CCONJ	_	12	cc	_	_
11	μην	μην	PART	PART	_	12	advmod	_	_
12	πίνετε	πίνω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	_
13	πολλή	πολύς	DET	DET	Case=Acc|Gender=Fem|Number=Sing|PronType=Ind	14	det	_	_
14	λεμονάδα	λεμονάδα	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	12	obj	_	SpaceAfter=No
15	.	.	PUNCT	PUNCT	_	6	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 vocative	color:blue
1	Αγαπητή	αγαπητός	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Sing	2	amod	_	_
2	'Ολγα	'Ολγα	PROPN	PROPN	Case=Voc|Gender=Fem|Number=Sing	5	vocative	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	5	punct	_	_
4	Τι	τι	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Int	5	obj	_	NewPar=Yes
5	κάνεις	κάνω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	CorrectSpaceAfter=No
6	;	;	PUNCT	PUNCT	_	5	punct	_	SpaceAfter=No

~~~


