---
layout: base
title:  'Statistics of aux in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="kpv_ikdp-dep-aux-neg.html">aux:neg</a></tt>.

6 nodes (0%) are attached to their parents as `aux`.

5 instances of `aux` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.83333333333333.

The following 2 pairs of parts of speech are connected with `aux`: <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-AUX.html">AUX</a></tt> (4; 67% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-AUX.html">AUX</a></tt> (2; 33% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 aux	color:blue
1	Сылэн	сійӧ	PRON	Pron	Case=Gen|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
2	вӧлі	вӧвны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	8	aux	_	_
3	этадз	этадз	ADV	Adv	_	5	advmod	_	_
4	через	через	ADP	Pr	_	5	case	_	Lang=Rus
5	плечо	плечо	NOUN	N	Case=Acc|Number=Sing	8	obl	_	Lang=Rus
6	дӧраысь	дӧра	NOUN	N	Case=Ela|Number=Sing	7	nmod	_	_
7	сумка	сумка	NOUN	N	Case=Nom|Number=Sing	8	obj	_	Lang=Rus
8	вурема	вурны	VERB	V	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 aux	color:blue
1	Но	но	CCONJ	CC	_	2	cc	_	Lang=Mixed
2	тятеис	тятей	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	0	root	_	GTtags=Sg,Nom,PxSg3
3	потанас	потан	NOUN	N	Case=Ine|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	obl	_	GTtags=Sg,Ine,PxSg3
4	из	оз	AUX	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past	2	aux:neg	_	GTtags=Neg,Ind,Prt1,Sg3
5	вӧв	вӧвны	AUX	V	Connegative=Yes	2	aux	_	GTtags=IV,ConNeg|SpaceAfter=No
6	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


