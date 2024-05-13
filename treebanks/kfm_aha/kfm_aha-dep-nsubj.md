---
layout: base
title:  'Statistics of nsubj in UD_Khunsari-AHA'
udver: '2'
---

## Treebank Statistics: UD_Khunsari-AHA: Relations: `nsubj`

This relation is universal.

8 nodes (11%) are attached to their parents as `nsubj`.

8 instances of `nsubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.5.

The following 3 pairs of parts of speech are connected with `nsubj`: <tt><a href="kfm_aha-pos-VERB.html">VERB</a></tt>-<tt><a href="kfm_aha-pos-NOUN.html">NOUN</a></tt> (4; 50% instances), <tt><a href="kfm_aha-pos-VERB.html">VERB</a></tt>-<tt><a href="kfm_aha-pos-PRON.html">PRON</a></tt> (3; 38% instances), <tt><a href="kfm_aha-pos-NUM.html">NUM</a></tt>-<tt><a href="kfm_aha-pos-NOUN.html">NOUN</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
1	عبدالله	عبدالله	NOUN	N_SING	Number=Sing	3	nsubj	_	_
2	صُباح	صُباح	ADV	ADV	_	3	advmod	_	_
3	اِچُ	چ	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
4	.	.	PUNCT	DELM	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nsubj	color:blue
1	مُن	مُن	PRON	PRO	Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
2	دارُن	دار	AUX	V_AUX	Number=Sing|Person=1|Tense=Fut	6	aux	_	_
3	رِختا	رخت	NOUN	N_Sing	Number=Sing	6	obj	_	_
4	ما	مو	PRON	PRO	Number=Sing|Person=1|PronType=Prs	3	nmod:poss	_	_
5	کول	کول	NOUN	N_SING	_	6	compound:lvc	_	_
6	مِکِرُن	کِر	VERB	V_PRS	Number=Sing|Person=1|Tense=Pres	0	root	_	SpaceAfter=No
7	.	.	PUNCT	DELM	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj	color:blue
1	اِداجِن	داج	VERB	V_PP	Number=Plur|Person=3|VerbForm=Part	0	root	_	_
2	علی	علی	NOUN	N_Sing	Number=Sing	4	nsubj	_	_
3	روزی	روز	ADV	N_Sing	Number=Sing	7	advmod	_	_
4	دِی	دِی	NUM	NUM	NumType=Card	5	nummod	_	_
5	ساعت	ساعت	NOUN	N_Sing	Number=Sing	3	nmod:poss	_	_
6	کار	کار	NOUN	N_Sing	Number=Sing	7	compound:lvc	_	_
7	اِکِرُ	کِر	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	1	ccomp	_	SpaceAfter=No
8	.	.	PUNCT	DELM	_	7	punct	_	_

~~~


