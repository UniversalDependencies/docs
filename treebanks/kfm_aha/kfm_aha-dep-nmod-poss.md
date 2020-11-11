---
layout: base
title:  'Statistics of nmod:poss in UD_Khunsari-AHA'
udver: '2'
---

## Treebank Statistics: UD_Khunsari-AHA: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="kfm_aha-dep-nmod.html">nmod</a></tt>.

6 nodes (8%) are attached to their parents as `nmod:poss`.

5 instances of `nmod:poss` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.16666666666667.

The following 3 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="kfm_aha-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kfm_aha-pos-PRON.html">PRON</a></tt> (3; 50% instances), <tt><a href="kfm_aha-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kfm_aha-pos-NOUN.html">NOUN</a></tt> (2; 33% instances), <tt><a href="kfm_aha-pos-ADV.html">ADV</a></tt>-<tt><a href="kfm_aha-pos-NOUN.html">NOUN</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod:poss	color:blue
1	مُن	مُن	PRON	PRO	Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
2	دارُن	دار	AUX	V_AUX	Number=Sing|Person=1|Tense=Fut	6	aux	_	_
3	رِختا	رخت	NOUN	N_Sing	Number=Sing	6	obj	_	_
4	ما	مو	PRON	PRO	Number=Sing|Person=1|PronType=Prs	3	nmod:poss	_	_
5	کول	کول	NOUN	N_SING	_	6	compound:lvc	_	_
6	مِکِرُن	کِر	VERB	V_PRS	Number=Sing|Person=1|Tense=Pres	0	root	_	SpaceAfter=No
7	.	.	PUNCT	DELM	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	اِزِ	اِزِ	ADV	ADV_TIME	Case=Tem	5	advmod	_	_
2	یَک	یَک	NUM	NUM	NumType=Card	3	nummod	_	_
3	کیلو	کیلو	NOUN	N_Sing	Number=Sing	4	nmod:poss	_	_
4	برنجِن	برنج	NOUN	N_Sing	Number=Sing	5	obj	_	_
5	آکَ	کَ	VERB	V_PA	Number=Sing|Person=1|Tense=Past	0	root	_	SpaceAfter=No
6	.	.	PUNCT	DELM	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nmod:poss	color:blue
1	اِداجِن	داج	VERB	V_PP	Number=Plur|Person=3|VerbForm=Part	0	root	_	_
2	علی	علی	NOUN	N_Sing	Number=Sing	4	nsubj	_	_
3	روزی	روز	ADV	N_Sing	Number=Sing	7	advmod	_	_
4	دِی	دِی	NUM	NUM	NumType=Card	5	nummod	_	_
5	ساعت	ساعت	NOUN	N_Sing	Number=Sing	3	nmod:poss	_	_
6	کار	کار	NOUN	N_Sing	Number=Sing	7	compound:lvc	_	_
7	اِکِرُ	کِر	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	1	ccomp	_	SpaceAfter=No
8	.	.	PUNCT	DELM	_	7	punct	_	_

~~~


