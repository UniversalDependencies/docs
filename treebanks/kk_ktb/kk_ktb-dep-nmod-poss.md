---
layout: base
title:  'Statistics of nmod:poss in UD_Kazakh-KTB'
udver: '2'
---

## Treebank Statistics: UD_Kazakh-KTB: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="kk_ktb-dep-nmod.html">nmod</a></tt>.

819 nodes (8%) are attached to their parents as `nmod:poss`.

819 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.57875457875458.

The following 14 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt> (512; 63% instances), <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-PROPN.html">PROPN</a></tt> (180; 22% instances), <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-PRON.html">PRON</a></tt> (70; 9% instances), <tt><a href="kk_ktb-pos-NUM.html">NUM</a></tt>-<tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt> (14; 2% instances), <tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt> (11; 1% instances), <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="kk_ktb-pos-PRON.html">PRON</a></tt>-<tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="kk_ktb-pos-PRON.html">PRON</a></tt>-<tt><a href="kk_ktb-pos-PRON.html">PRON</a></tt> (6; 1% instances), <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="kk_ktb-pos-NUM.html">NUM</a></tt>-<tt><a href="kk_ktb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="kk_ktb-pos-PRON.html">PRON</a></tt>-<tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="kk_ktb-pos-PRON.html">PRON</a></tt>-<tt><a href="kk_ktb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 nmod:poss	color:blue
1	Қазіргі	қазір	ADV	adv	Case=Nom	2	amod	_	_
2	кезде	кез	NOUN	n	Case=Loc	9	obl	_	_
3	қаланың	қала	NOUN	n	Case=Gen	6	nmod:poss	_	_
4	ішкі	ішкі	ADJ	adj	_	6	amod	_	_
5	өңірлік	өңірлік	ADJ	adj	_	6	amod	_	_
6	өнімі	өнім	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	9	nsubj	_	_
7	20	20	NUM	num	NumType=Card	8	nummod	_	_
8	есе	есе	NOUN	n	Case=Nom	9	obj	_	_
9	өсті	өст	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
10	.	.	PUNCT	sent	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nmod:poss	color:blue
1	Бұл	бұл	PRON	prn	Case=Nom|PronType=Dem	7	nsubj	_	_
2	Қазақстанның	Қазақстан	PROPN	np	Case=Gen	5	nmod:poss	_	_
3	бәсекеге	бәсеке	NOUN	n	Case=Dat	4	nmod	_	_
4	қабілетті	қабілетті	ADJ	adj	_	5	amod	_	_
5	әлеуеті	әлеует	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	6	nsubj	_	_
6	бар	бар	ADJ	adj	_	7	acl	_	_
7	салалар	сала	NOUN	n	Case=Nom|Number=Plur	0	root	_	SpaceAfter=No
8	.	.	PUNCT	sent	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Біздің	біз	PRON	prn	Case=Gen|Number=Plur|Person=1|PronType=Prs	2	nmod:poss	_	_
2	елде	ел	NOUN	n	Case=Loc	6	obl	_	_
3	сізге	сіз	PRON	prn	Case=Dat|Number=Sing|Person=2|Polite=Form|PronType=Prs	6	obl	_	_
4	ерекше	ерекше	ADJ	adj	_	5	amod	_	_
5	құрметпен	құрмет	NOUN	n	Case=Ins	6	obl	_	_
6	қарайды	қара	VERB	v	Aspect=Hab|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
7	.	.	PUNCT	sent	_	6	punct	_	_

~~~


