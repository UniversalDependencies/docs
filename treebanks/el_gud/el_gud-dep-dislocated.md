---
layout: base
title:  'Statistics of dislocated in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `dislocated`

This relation is universal.

51 nodes (0%) are attached to their parents as `dislocated`.

50 instances of `dislocated` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.66666666666667.

The following 7 pairs of parts of speech are connected with `dislocated`: <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-PRON.html">PRON</a></tt> (23; 45% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (12; 24% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-DET.html">DET</a></tt> (11; 22% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-PROPN.html">PROPN</a></tt> (2; 4% instances), <tt><a href="el_gud-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gud-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-SCONJ.html">SCONJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 dislocated	color:blue
1	Είναι	είμαι	AUX	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	3	cop	_	_
2	το	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	3	det	_	_
3	λιγότερο	λίγος	ADJ	AjCp	Case=Nom|Degree=Cmp|Gender=Neut|Number=Sing	0	root	_	_
4	που	που	PRON	PnRe	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	5	dislocated	_	_
5	μπορούμε	μπορώ	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl:relcl	_	_
6	να	να	SCONJ	CjSb	_	8	mark	_	_
7	της	εγώ	PRON	PnPe	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	iobj	_	_
8	προσφέρουμε	προσφέρω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	5	xcomp	_	SpaceAfter=No
9	.	.	PUNCT	PTERMP	_	3	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 dislocated	color:blue
1	«	«	PUNCT	OPUNCT	_	9	punct	_	PunctType=Quot
2	Βέβαια	βέβαια	ADV	AdBa	_	9	advmod	_	_
3	,	,	PUNCT	PUNCT	_	2	punct	_	PunctType=Comm
4	η	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	περίπτωση	περίπτωση	NOUN	NoCm	Case=Nom|Gender=Fem|Number=Sing	9	dislocated	_	_
6	του	ο	DET	AtDf	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	εκβιασμού	εκβιασμός	NOUN	NoCm	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
8	δεν	δεν	PART	PtNg	Polarity=Neg	9	advmod	_	_
9	μπορεί	μπορώ	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	να	να	SCONJ	PtSj	_	11	mark	_	_
11	αποκλεισθεί	αποκλείω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Pass	9	csubj	_	_
12	»	»	PUNCT	CPUNCT	_	9	punct	_	PunctType=Quot|SpaceAfter=No
13	.	.	PUNCT	PTERMP	_	9	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 dislocated	color:blue
1	Αυτό	αυτός	DET	PnDm	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	dislocated	_	_
2	πρέπει	πρέπει	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	να	να	SCONJ	PtSj	_	4	mark	_	_
4	καταλάβεις	καταλαβαίνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	2	csubj	_	SpaceAfter=No
5	.	.	PUNCT	PTERMP	_	2	punct	_	PunctType=Peri

~~~


