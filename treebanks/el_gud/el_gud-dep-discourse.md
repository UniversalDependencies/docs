---
layout: base
title:  'Statistics of discourse in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `discourse`

This relation is universal.

50 nodes (0%) are attached to their parents as `discourse`.

43 instances of `discourse` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.82.

The following 9 pairs of parts of speech are connected with `discourse`: <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-INTJ.html">INTJ</a></tt> (28; 56% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-ADV.html">ADV</a></tt> (10; 20% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-INTJ.html">INTJ</a></tt> (4; 8% instances), <tt><a href="el_gud-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gud-pos-INTJ.html">INTJ</a></tt> (3; 6% instances), <tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="el_gud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gud-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 2 discourse	color:blue
1	«	«	PUNCT	_	_	13	punct	_	PunctType=Quot|SpaceAfter=No
2	Καλά	καλά	INTJ	_	_	13	discourse	_	SpaceAfter=No
3	,	,	PUNCT	_	_	13	punct	_	PunctType=Comm
4	τη	ο	DET	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	γυναίκα	γυναίκα	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	13	obj	_	_
6	σου	εγώ	PRON	_	Case=Gen|Number=Sing|Person=2|Poss=Yes|PronType=Prs	5	nmod	_	_
7	και	και	CCONJ	_	_	9	cc	_	_
8	τα	ο	DET	_	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	9	det	_	_
9	παιδιά	παιδί	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	5	conj	_	_
10	σου	εγώ	PRON	_	Case=Gen|Number=Sing|Person=2|Poss=Yes|PronType=Prs	9	nmod	_	_
11	δεν	δεν	PART	_	Polarity=Neg	13	advmod	_	_
12	τα	εγώ	PRON	_	Case=Acc|Gender=Neut|Number=Plur|Person=3|PronType=Prs	13	expl	_	_
13	σκέφτηκες	σκέφτομαι	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
14	;	;	PUNCT	_	_	13	punct	_	PunctType=Qest|SpaceAfter=No
15	»	»	PUNCT	_	_	13	punct	_	PunctType=Quot

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 discourse	color:blue
1	«	«	PUNCT	_	_	9	punct	_	PunctType=Quot|SpaceAfter=No
2	Αλήθεια	αλήθεια	ADV	_	_	9	discourse	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	PunctType=Comm
4	ρε	ρε	INTJ	_	_	5	discourse	_	_
5	μαμά	μαμά	NOUN	_	Case=Voc|Gender=Fem|Number=Sing	9	vocative	_	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	_	PunctType=Comm
7	τι	τι	ADV	_	_	9	advmod	_	_
8	τα	εγώ	PRON	_	Case=Acc|Gender=Neut|Number=Plur|Person=3|PronType=Prs	9	expl	_	_
9	ήθελες	θέλω	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
10	τα	ο	DET	_	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	11	det	_	_
11	ορεκτικά	ορεκτικός	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	9	obj	_	SpaceAfter=No
12	;	;	PUNCT	_	_	9	punct	_	PunctType=Qest|SpaceAfter=No
13	»	»	PUNCT	_	_	9	punct	_	PunctType=Quot

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 discourse	color:blue
1	«	«	PUNCT	_	_	9	punct	_	PunctType=Quot|SpaceAfter=No
2	Αλήθεια	αλήθεια	ADV	_	_	9	discourse	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	PunctType=Comm
4	ρε	ρε	INTJ	_	_	5	discourse	_	_
5	μαμά	μαμά	NOUN	_	Case=Voc|Gender=Fem|Number=Sing	9	vocative	_	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	_	PunctType=Comm
7	τι	τι	ADV	_	_	9	advmod	_	_
8	τα	εγώ	PRON	_	Case=Acc|Gender=Neut|Number=Plur|Person=3|PronType=Prs	9	expl	_	_
9	ήθελες	θέλω	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
10	τα	ο	DET	_	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	11	det	_	_
11	ορεκτικά	ορεκτικός	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	9	obj	_	SpaceAfter=No
12	;	;	PUNCT	_	_	9	punct	_	PunctType=Qest|SpaceAfter=No
13	»	»	PUNCT	_	_	9	punct	_	PunctType=Quot

~~~


