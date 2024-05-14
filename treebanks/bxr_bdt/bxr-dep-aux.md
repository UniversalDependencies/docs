---
layout: base
title:  'Statistics of aux in UD_Buryat'
udver: '2'
---

## Treebank Statistics: UD_Buryat: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="bxr-dep-aux-pass.html">aux:pass</a></tt>.

162 nodes (2%) are attached to their parents as `aux`.

162 instances of `aux` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.0679012345679.

The following 6 pairs of parts of speech are connected with `aux`: <tt><a href="bxr-pos-VERB.html">VERB</a></tt>-<tt><a href="bxr-pos-AUX.html">AUX</a></tt> (105; 65% instances), <tt><a href="bxr-pos-VERB.html">VERB</a></tt>-<tt><a href="bxr-pos-VERB.html">VERB</a></tt> (23; 14% instances), <tt><a href="bxr-pos-VERB.html">VERB</a></tt>-<tt><a href="bxr-pos-NOUN.html">NOUN</a></tt> (16; 10% instances), <tt><a href="bxr-pos-VERB.html">VERB</a></tt>-<tt><a href="bxr-pos-ADJ.html">ADJ</a></tt> (10; 6% instances), <tt><a href="bxr-pos-VERB.html">VERB</a></tt>-<tt><a href="bxr-pos-ADV.html">ADV</a></tt> (7; 4% instances), <tt><a href="bxr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bxr-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 aux	color:blue
1	Эжын	эжын	NOUN	_	Case=Nom	3	nsubj	_	_
2	гэртээ	гэр	NOUN	_	Case=Dat|Reflex=Yes	3	nmod	_	_
3	ерэхэдэнь	ерэ	VERB	_	Case=Dat|Number[psor]=Sing|Person[psor]=3|VerbForm=Ger	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	аба	аба	NOUN	_	Case=Nom	7	nsubj	_	_
6	кофе	кофе	NOUN	_	Case=Nom	7	obj	_	_
7	шанажа	шана	VERB	_	VerbForm=Coverb	3	advcl	_	_
8	байгаа	бай	AUX	_	_	7	aux	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 aux	color:blue
1	Түсэб	түсэб	NOUN	_	Case=Nom	5	nmod	_	_
2	соо	соо	ADP	_	_	1	case	_	_
3	зарим	зарим	DET	_	PronType=Ind	4	det	_	_
4	хубилалтанууд	хубилалта	NOUN	_	Case=Nom|Number=Plur	5	nsubj	_	_
5	хэгдэжэ	хэ	VERB	_	VerbForm=Coverb	0	root	_	_
6	болохо	боло	VERB	_	_	5	aux	_	SpaceAfter=No
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 aux	color:blue
1	Намда	би	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	2	nmod	_	_
2	ошохо	ошо	VERB	_	_	0	root	_	_
3	хэрэгтэй	хэрэг	NOUN	_	Case=Com	2	aux	_	SpaceAfter=No
4	,	,	PUNCT	_	_	2	punct	_	_
5	орой	орой	NOUN	_	Case=Nom	2	advcl	_	_
6	болоо	боло	VERB	_	Mood=Des|Number=Sing|Person=3	5	cop	_	SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	_	_

~~~


