---
layout: base
title:  'Statistics of xcomp in UD_Cappadocian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Cappadocian-TueCL: Relations: `xcomp`

This relation is universal.

29 nodes (1%) are attached to their parents as `xcomp`.

23 instances of `xcomp` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.24137931034483.

The following 6 pairs of parts of speech are connected with `xcomp`: <tt><a href="cpg_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_tuecl-pos-VERB.html">VERB</a></tt> (15; 52% instances), <tt><a href="cpg_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_tuecl-pos-NOUN.html">NOUN</a></tt> (7; 24% instances), <tt><a href="cpg_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cpg_tuecl-pos-VERB.html">VERB</a></tt> (2; 7% instances), <tt><a href="cpg_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_tuecl-pos-ADJ.html">ADJ</a></tt> (2; 7% instances), <tt><a href="cpg_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_tuecl-pos-NUM.html">NUM</a></tt> (2; 7% instances), <tt><a href="cpg_tuecl-pos-X.html">X</a></tt>-<tt><a href="cpg_tuecl-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 xcomp	color:blue
1	Νανόστε	νανούμαι	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	να	να	AUX	AUX	_	3	aux	3:aux	_
3	νάβρει	βρίσκω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	xcomp	1:xcomp	_
4	α	α	DET	DET	Case=Acc|Gender=Fem|Number=Sing	5	det	5:det	_
5	δεβοσύνη	δεβοσύνη	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	3	obj	3:obj	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	8	punct	8:punct	_
7	να	να	AUX	AUX	_	8	aux	8:aux	_
8	κομπώσει	(κομώνω)	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	acl	5:acl	_
9	τον	ο	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	10:det	_
10	αωπό	απός	NOUN	NOUN	Case=Acc|Gender=Masc|Number=Sing	8	obj	8:obj	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 xcomp	color:blue
1	‘Ινεται	γίνομαι	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	0:root	_
2	τελέφι	τελέφι	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Sing	1	xcomp	1:xcomp	_
3	το	το	DET	DET	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	4	det	4:det	_
4	δέρμα	δέρμα	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Sing	1	nsubj	1:nsubj	_
5	μας	εγω	PRON	PRON	Case=Gen|Gender=Neut|Number=Plur|Person=1|Poss=Yes|PronType=Prs	4	nmod	4:nmod	_
6	σ'	σε	ADP	ADP	_	8	case	8:case	_
7	η	η	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	8:det	_
8	στράτα	στράτα	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	1	obl	1:obl	SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 xcomp	color:blue
1	Ήτουν	είμαι	AUX	AUX	_	4	cop	4:cop	_
2	σ	σε	ADP	ADP	_	4	case	4:case	_
3	α	το	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	4	det	4:det	_
4	σέρε	σέρι	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Plur	0	root	0:root	_
5	μου	εγώ	PRON	PRON	Case=Gen|Number=Sing|Poss=Yes|PronType=Prs	4	nmod	4:nmod	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	10	punct	10:punct	_
7	κέσκε	keske	PART	PART	_	10	vocative	10:vocative	_
8	ν	να	AUX	AUX	_	10	aux	10:aux	_
9	τα	το	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing	10	obj	10:obj	_
10	φάω	τρώγω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin|Voice=Act	4	xcomp	4:xcomp	_
11	τσας	τσας	ADV	ADV	_	10	advmod	10:advmod	_
12	τα	το	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing	13	obj	13:obj	_
13	είχα	έχω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	4	xcomp	4:xcomp	_
14	σ	σε	ADP	ADP	_	16	case	16:case	_
15	α	το	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	16	det	16:det	_
16	σέρε	σέρι	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Plur	13	obl	13:obl	_
17	μου	εγώ	PRON	PRON	Case=Gen|Number=Sing|Poss=Yes|PronType=Prs	16	nmod	16:nmod	SpaceAfter=No
18	»	»	PUNCT	PUNCT	_	4	punct	4:punct	SpaceAfter=No
19	.	.	PUNCT	PUNCT	_	4	punct	4:punct	_

~~~


