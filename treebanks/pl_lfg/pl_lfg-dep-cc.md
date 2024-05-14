---
layout: base
title:  'Statistics of cc in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="pl_lfg-dep-cc-preconj.html">cc:preconj</a></tt>.

3187 nodes (2%) are attached to their parents as `cc`.

3187 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.06024474427361.

The following 8 pairs of parts of speech are connected with `cc`: <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-CCONJ.html">CCONJ</a></tt> (2036; 64% instances), <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-CCONJ.html">CCONJ</a></tt> (695; 22% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-CCONJ.html">CCONJ</a></tt> (237; 7% instances), <tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_lfg-pos-CCONJ.html">CCONJ</a></tt> (141; 4% instances), <tt><a href="pl_lfg-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_lfg-pos-CCONJ.html">CCONJ</a></tt> (50; 2% instances), <tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_lfg-pos-CCONJ.html">CCONJ</a></tt> (14; 0% instances), <tt><a href="pl_lfg-pos-DET.html">DET</a></tt>-<tt><a href="pl_lfg-pos-CCONJ.html">CCONJ</a></tt> (7; 0% instances), <tt><a href="pl_lfg-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_lfg-pos-CCONJ.html">CCONJ</a></tt> (7; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cc	color:blue
1	-	-	PUNCT	interp	PunctType=Dash	4	punct	4:punct	_
2	A	a	CCONJ	conj	_	4	cc	4:cc	_
3	co	co	PRON	subst:sg:acc:n	Case=Acc|Gender=Neut|Number=Sing|PronType=Int	4	obl	4:obl	_
4	czuję	czuć	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
5	?	?	PUNCT	interp	PunctType=Qest	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 cc	color:blue
1	Albo	albo	CCONJ	conj	_	2	cc	2:cc	_
2	idą	iść	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	do	do	ADP	prep:gen	AdpType=Prep	5	case	5:case	Case=Gen
4	miejscowego	miejscowy	ADJ	adj:sg:gen:m3:pos	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|SubGender=Masc3	5	amod	5:amod	_
5	hotelu	hotel	NOUN	subst:sg:gen:m3	Case=Gen|Gender=Masc|Number=Sing|SubGender=Masc3	2	obl	2:obl:do	SpaceAfter=No
6	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	_
7	biorą	brać	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	2:conj	_
8	pokoje	pokój	NOUN	subst:pl:acc:m3	Case=Acc|Gender=Masc|Number=Plur|SubGender=Masc3	7	obj	7:obj	_
9	i	i	CCONJ	conj	_	10	cc	10:cc	_
10	kobiety	kobieta	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	8	conj	7:obj|8:conj	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cc	color:blue
1	–	–	PUNCT	interp	PunctType=Dash	4	punct	4:punct	_
2	ale	ale	CCONJ	conj	_	4	cc	4:cc	_
3	no	no	PART	qub	_	4	advmod	4:advmod	_
4	dobry	dobry	ADJ	adj:sg:nom:m1:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|SubGender=Masc1	0	root	0:root	_
5	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
6	skubaniec	skubaniec	NOUN	subst:sg:nom:m1	Case=Nom|Gender=Masc|Number=Sing|SubGender=Masc1	4	nsubj	4:nsubj	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


