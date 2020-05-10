---
layout: base
title:  'Statistics of dislocated in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `dislocated`

This relation is universal.

4 nodes (0%) are attached to their parents as `dislocated`.

4 instances of `dislocated` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 9.

The following 3 pairs of parts of speech are connected with `dislocated`: <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (1; 25% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 2 dislocated	color:blue
1	Bir	bir	DET	_	Definite=Ind|PronType=Art	2	det	_	_
2	ahçı	ahçı	NOUN	_	Case=Nom|Number=Sing	11	dislocated	_	_
3	ki	ki	SCONJ	_	_	6	mark	_	_
4	baklava	baklava	NOUN	_	Case=Nom|Number=Sing	5	obj	_	_
5	yapmayı	yap	VERB	_	Case=Acc|Number=Sing|VerbForm=Vnoun	6	xcomp	_	_
6	bilmesin	bil	VERB	_	Mood=Opt|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	2	acl	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	ben	ben	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	11	nsubj	_	_
9	ona	o	PRON	_	Case=Dat|Number=Sing|PronType=Prs	11	obl	_	_
10	ahçı	ahçı	NOUN	_	Case=Nom|Number=Sing	11	obj	_	_
11	demem	de	VERB	_	Aspect=Hab|Mood=Gen|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 1 dislocated	color:blue
1	Sen	sen	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	12	dislocated	_	_
2	ki	ki	SCONJ	_	_	6	mark	_	_
3	herkesin	herkes	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Prs	5	nmod	_	_
4	doğum	doğum	NOUN	_	Case=Nom|Number=Sing	5	nmod	_	_
5	gününü	gün	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	obj	_	_
6	hatırlarsın	hatırla	VERB	_	Aspect=Hab|Mood=Gen|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	1	acl	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	sen	sen	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	12	nsubj	_	_
9	bile	bile	ADV	_	_	8	advmod:emph	_	_
10	Semra’nın	Semra	PROPN	_	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=2	11	nmod	_	_
11	kini	-ki	NOUN	_	Case=Acc|Number=Sing	12	ccomp	_	_
12	unuttun	unut	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
13	.	.	PUNCT	_	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 dislocated	color:blue
1	Semra	Semra	PROPN	_	Number=Sing	8	dislocated	_	_
2	ki	ki	SCONJ	_	_	4	mark	_	_
3	partileri	parti	NOUN	_	Case=Acc|Number=Plur	4	obj	_	_
4	sevmez	sev	VERB	_	Aspect=Hab|Mood=Gen|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	1	acl	_	SpaceAfter=No
5	,	,	PUNCT	_	_	1	punct	_	_
6	o	o	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
7	bile	bile	ADV	_	_	6	advmod:emph	_	_
8	eğlendi	eğlen	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


