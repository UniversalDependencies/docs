---
layout: base
title:  'Statistics of nmod:poss in UD_Soi-AHA'
udver: '2'
---

## Treebank Statistics: UD_Soi-AHA: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="soj_aha-dep-nmod.html">nmod</a></tt>.

4 nodes (7%) are attached to their parents as `nmod:poss`.

3 instances of `nmod:poss` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25.

The following 3 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="soj_aha-pos-NOUN.html">NOUN</a></tt>-<tt><a href="soj_aha-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="soj_aha-pos-ADV.html">ADV</a></tt>-<tt><a href="soj_aha-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="soj_aha-pos-NOUN.html">NOUN</a></tt>-<tt><a href="soj_aha-pos-PRON.html">PRON</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	هِزِ	هزِ	ADV	ADV_TIME	Case=Tem	6	advmod	_	_
2	ئی	ئی	NUM	NUM	NumType=Card	3	nummod	_	_
3	کیلو	کیلو	NOUN	N_Sing	Number=Sing	4	nmod:poss	_	_
4	برنج	برنج	NOUN	N_Sing	Number=Sing	6	obj	_	_
5	ِم	مِن	PRON	_	Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
6	هاگِت	گِت	VERB	V_PA	Number=Sing|Person=1|Tense=Past	0	root	_	SpaceAfter=No
7	.	.	PUNCT	DELM	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nmod:poss	color:blue
1	واجَن	واج	VERB	V_PP	Number=Plur|Person=3|VerbForm=Part	0	root	_	_
2	علی	علی	NOUN	N_Sing	Number=Sing	4	nsubj	_	_
3	رویی	رو	ADV	N_Sing	Number=Sing	7	advmod	_	_
4	دِ	دِ	NUM	NUM	NumType=Card	5	nummod	_	_
5	سات	سات	NOUN	N_Sing	Number=Sing	3	nmod:poss	_	_
6	کار	کار	NOUN	N_Sing	Number=Sing	7	compound:lvc	_	_
7	اَکَرَ	کَر	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	1	ccomp	_	SpaceAfter=No
8	.	.	PUNCT	DELM	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nmod:poss	color:blue
1	بِرا	بِرا	NOUN	N_Sing	Number=Sing	5	nsubj	_	_
2	م	م	PRON	PRO	Number=Sing|Person=1|PronType=Prs	1	nmod:poss	_	_
3	بِ	بِ	ADP	P	_	5	case	_	_
4	مدرسه	مدرسه	NOUN	N_Sing	Number=Sing	5	obl	_	_
5	ناشی	ش	VERB	V_PRS	Number=Sing|Person=3|Polarity=Neg|Tense=Pres	0	root	_	SpaceAfter=No
6	.	.	PUNCT	DELM	_	5	punct	_	_

~~~


