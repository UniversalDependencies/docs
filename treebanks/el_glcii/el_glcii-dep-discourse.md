---
layout: base
title:  'Statistics of discourse in UD_Greek-GLCII'
udver: '2'
---

## Treebank Statistics: UD_Greek-GLCII: Relations: `discourse`

This relation is universal.

11 nodes (0%) are attached to their parents as `discourse`.

9 instances of `discourse` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.81818181818182.

The following 4 pairs of parts of speech are connected with `discourse`: <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-NUM.html">NUM</a></tt> (7; 64% instances), <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-INTJ.html">INTJ</a></tt> (2; 18% instances), <tt><a href="el_glcii-pos-ADV.html">ADV</a></tt>-<tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_glcii-pos-INTJ.html">INTJ</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	2	2	NUM	NUM	NumType=Card	4	discourse	_	SpaceAfter=No|NewPar=Yes
2	.	.	PUNCT	PUNCT	_	1	punct	_	_
3	Να	να	AUX	AUX	_	4	aux	_	_
4	κάνετε	κάνω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	0	root	_	_
5	σπορ	σπορ	NOUN	NOUN	_	4	obj	_	OrigLang=en
6	συχνά	συχνά	ADV	ADV	_	4	advmod	_	_
7	και	και	CCONJ	CCONJ	_	10	cc	_	_
8	να	να	AUX	AUX	_	10	aux	_	_
9	μην	μην	PART	PART	_	10	advmod	_	_
10	κάθεστε	κάθομαι	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	4	conj	_	_
11	συνέχεια	συνέχεια	ADV	ADV	_	10	advmod	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 discourse	color:blue
1	Ωχ	ωχ	INTJ	INTJ	_	5	discourse	_	SpaceAfter=No
2	...	...	PUNCT	PUNCT	_	5	punct	_	SpaceAfter=No|CorrectSpaceAfter=Yes
3	Τώρα	τώρα	ADV	ADV	_	5	advmod	_	_
4	σας	εγώ	PRON	PRON	Case=Gen|Gender=Masc|Number=Plur|Person=2|PronType=Prs	5	iobj	_	_
5	γράφω	γράφω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	CorrectSpaceAfter=No
6	,	,	PUNCT	PUNCT	_	7	punct	_	SpaceAfter=No|CorrectSpaceAfter=Yes
7	γυρίζοντας	γυρίζω	VERB	VERB	Aspect=Imp|VerbForm=Conv|Voice=Act	5	advcl	_	_
8	σ	σε	ADP	ADP	_	10	case	_	_
9	το	ο	DET	DET	Case=Acc|Gender=Neut|Number=Sing|PronType=Art	10	det	_	_
10	σπιτι	σπιτι	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	7	obl	_	SpaceAfter=No
11	,	,	PUNCT	PUNCT	_	14	punct	_	_
12	σ	σε	ADP	ADP	_	14	case	_	_
13	το	ο	DET	DET	Case=Acc|Gender=Neut|Number=Sing|PronType=Art	14	det	_	_
14	λεωφορείο	λεωφορείο	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	5	obl	_	SpaceAfter=No
15	,	,	PUNCT	PUNCT	_	18	punct	_	_
16	σ	σε	ADP	ADP	_	18	case	_	_
17	το	ο	DET	DET	Case=Acc|Gender=Neut|Number=Sing|PronType=Art	18	det	_	_
18	κινητό	κινητό	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	5	obl	_	_
19	μου	εγώ	PRON	PRON	Case=Gen|Gender=Masc|Number=Sing|Person=1|Poss=Yes|PronType=Prs	18	nmod	_	SpaceAfter=No
20	.	.	PUNCT	PUNCT	_	5	punct	_	SpaceAfter=No
21	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 discourse	color:blue
1	Τελως	τελως	NOUN	NOUN	Case=Nom|ExtPos=ADV|Gender=Neut|Number=Sing	8	discourse	_	_
2	πάντων	πας	ADJ	ADJ	Case=Gen|Gender=Neut|Number=Plur	1	fixed	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	6	punct	_	_
4	οπως	οπως	ADV	ADV	_	6	advmod	_	_
5	το	εγώ	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	obj	_	_
6	ζητάτε	ζητάω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	8	advcl	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	8	punct	_	SpaceAfter=No|CorrectSpaceAfter=Yes
8	πρόχειρα	πρόχειρα	ADV	ADV	_	0	root	_	SpaceAfter=No
9	)	)	PUNCT	PUNCT	_	8	punct	_	_

~~~


