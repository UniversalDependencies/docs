---
layout: base
title:  'Statistics of vocative in UD_Romanian-RRT'
udver: '2'
---

## Treebank Statistics: UD_Romanian-RRT: Relations: `vocative`

This relation is universal.

61 nodes (0%) are attached to their parents as `vocative`.

36 instances of `vocative` (59%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.31147540983607.

The following 10 pairs of parts of speech are connected with `vocative`: <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt> (41; 67% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-PROPN.html">PROPN</a></tt> (7; 11% instances), <tt><a href="ro_rrt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt> (3; 5% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-PRON.html">PRON</a></tt> (3; 5% instances), <tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="ro_rrt-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_rrt-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="ro_rrt-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 vocative	color:blue
1	Am	avea	AUX	Va--1	Person=1	2	aux	_	_
2	spus	spune	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
3	eu	eu	PRON	Pp1-sn--------s	Case=Nom|Number=Sing|Person=1|PronType=Prs|Strength=Strong	2	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	COMMA	_	5	punct	_	_
5	mamă	mamă	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	2	vocative	_	SpaceAfter=No
6	,	,	PUNCT	COMMA	_	5	punct	_	_
7	sau	sau	CCONJ	Ccssp	Polarity=Pos	10	cc	_	_
8	n-	nu	PART	Qz-y	Polarity=Neg|Variant=Short	10	advmod	_	SpaceAfter=No
9	am	avea	AUX	Va--1	Person=1	10	aux	_	_
10	spus	spune	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	2	conj	_	SpaceAfter=No
11	?	?	PUNCT	QUEST	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 vocative	color:blue
1	După	după	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	_
2	Oceania	Oceania	PROPN	Np	_	6	vocative	_	SpaceAfter=No
3	,	,	PUNCT	COMMA	_	2	punct	_	_
4	ție	tu	PRON	Pp2-sd--------s	Case=Dat|Number=Sing|Person=2|PronType=Prs|Strength=Strong	6	iobj	_	SpaceAfter=No
5	-ți	tu	PRON	Pp2-sd--y-----w	Case=Dat|Number=Sing|Person=2|PronType=Prs|Strength=Weak|Variant=Short	6	expl	_	_
6	cânt	cânta	VERB	Vmip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	8	advcl	_	SpaceAfter=No
7	,	,	PUNCT	COMMA	_	6	punct	_	_
8	urmă	urma	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
9	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	10	det	_	_
10	muzică	muzică	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	8	nsubj	_	_
11	mai	mai	ADV	Rp	_	12	advmod	_	_
12	lejeră	lejer	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	10	amod	_	SpaceAfter=No
13	.	.	PUNCT	PERIOD	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 vocative	color:blue
1	Haideți	haideți	INTJ	I	_	0	root	_	SpaceAfter=No
2	,	,	PUNCT	COMMA	_	3	punct	_	_
3	tovarăși	tovarăș	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	1	vocative	_	SpaceAfter=No
4	,	,	PUNCT	COMMA	_	1	punct	_	_
5	mai	mai	ADV	Rp	_	6	advmod	_	_
6	multă	mult	DET	Di3fsr	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Ind	7	det	_	_
7	viață	viață	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	1	parataxis	_	SpaceAfter=No
8	-n	în	ADP	Spsay	AdpType=Prep|Case=Acc|Variant=Short	9	case	_	_
9	mișcare	mișcare	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	7	nmod	_	SpaceAfter=No
10	!	!	PUNCT	EXCL	_	1	punct	_	_

~~~


