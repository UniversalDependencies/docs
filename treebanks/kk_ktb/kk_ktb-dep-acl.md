---
layout: base
title:  'Statistics of acl in UD_Kazakh-KTB'
udver: '2'
---

## Treebank Statistics: UD_Kazakh-KTB: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="kk_ktb-dep-acl-relcl.html">acl:relcl</a></tt>.

108 nodes (1%) are attached to their parents as `acl`.

106 instances of `acl` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.87037037037037.

The following 8 pairs of parts of speech are connected with `acl`: <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt> (90; 83% instances), <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt> (7; 6% instances), <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt> (4; 4% instances), <tt><a href="kk_ktb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="kk_ktb-pos-PRON.html">PRON</a></tt>-<tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="kk_ktb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 acl	color:blue
1	Қалыптасу	қалыпта	VERB	v	Case=Nom|VerbForm=Ger|Voice=Rcp	2	acl	_	_
2	кезеңі	кезең	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	4	nsubj	_	_
3	табысты	табысты	ADJ	adj	_	4	advmod	_	_
4	аяқталды	аяқта	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
5	.	.	PUNCT	sent	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 acl	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 acl	color:blue
1	Ел	ел	NOUN	n	Case=Nom	2	nmod:poss	_	_
2	экономикасының	экономика	NOUN	n	Case=Gen|Number[psor]=Plur,Sing|Person[psor]=3	3	nmod:poss	_	_
3	негізі	негіз	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	10	nsubj	_	_
4	мұнай	мұнай	NOUN	n	Case=Nom	10	acl	_	_
5	және	және	CCONJ	cnjcoo	_	9	cc	_	_
6	мұнай	мұнай	NOUN	n	Case=Nom	9	obj	_	_
7	мен	мен	CCONJ	cnjcoo	_	8	cc	_	_
8	газ	газ	NOUN	n	Case=Nom	6	conj	_	_
9	өңдеу	өңде	VERB	v	Case=Nom|VerbForm=Ger	4	conj	_	_
10	өнеркәсіптері	өнеркәсіп	NOUN	n	Case=Nom|Number=Plur|Number[psor]=Plur,Sing|Person[psor]=3	0	root	_	SpaceAfter=No
11	.	.	PUNCT	sent	_	10	punct	_	_

~~~


