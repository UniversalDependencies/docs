---
layout: base
title:  'Statistics of cc in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="et_ewt-dep-cc-preconj.html">cc:preconj</a></tt>.

1120 nodes (4%) are attached to their parents as `cc`.

1119 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.75803571428571.

The following 9 pairs of parts of speech are connected with `cc`: <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-CCONJ.html">CCONJ</a></tt> (577; 52% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-CCONJ.html">CCONJ</a></tt> (300; 27% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-CCONJ.html">CCONJ</a></tt> (105; 9% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-CCONJ.html">CCONJ</a></tt> (50; 4% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-CCONJ.html">CCONJ</a></tt> (44; 4% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-CCONJ.html">CCONJ</a></tt> (34; 3% instances), <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_ewt-pos-CCONJ.html">CCONJ</a></tt> (7; 1% instances), <tt><a href="et_ewt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et_ewt-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="et_ewt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_ewt-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 cc	color:blue
1	See	see	PRON	P	Case=Nom|Number=Sing|PronType=Dem	5	nsubj:cop	5:nsubj	_
2	ei	ei	AUX	V	Polarity=Neg	5	aux	5:aux	_
3	ole	olema	AUX	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
4	niisugune	nii_sugune	DET	P	Case=Nom|Number=Sing|PronType=Dem	5	det	5:det	_
5	leib	leib	NOUN	S	Case=Nom|Number=Sing	0	root	0:root	SpaceAfter=No
6	,	,	PUNCT	Z	_	10	punct	10:punct	_
7	mida	mis	PRON	P	Case=Par|Number=Sing|PronType=Int,Rel	10	obj	10:obj	_
8	teie	sina	PRON	P	Case=Gen|Number=Plur|Person=2|PronType=Prs	9	nmod	9:nmod	_
9	esiisad	esi_isa	NOUN	S	Case=Nom|Number=Plur	10	nsubj	10:nsubj	_
10	sõid	sööma	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	acl:relcl	5:acl	SpaceAfter=No
11	,	,	PUNCT	Z	_	13	punct	13:punct	_
12	ja	ja	CCONJ	J	_	13	cc	13:cc	_
13	surid	surema	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	10	conj	10:conj	SpaceAfter=No
14	.	.	PUNCT	Z	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 cc	color:blue
1	Zopp	Zopp	PROPN	S	Case=Nom|Number=Sing	3	nsubj	3:nsubj	_
2	ei	ei	AUX	V	Polarity=Neg	3	aux	3:aux	_
3	löönud	lööma	VERB	V	Connegative=Yes|Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	ühtki	üks	DET	P	Case=Par|Number=Sing|PronType=Ind	5	det	5:det	_
5	ässa	äss	NOUN	S	Case=Par|Number=Sing	3	obj	3:obj	SpaceAfter=No
6	,	,	PUNCT	Z	_	9	punct	9.1:punct	_
7	kuid	kuid	CCONJ	J	_	9	cc	9.1:cc	_
8	ka	ka	ADV	D	_	9	advmod	9:advmod	_
9	vastane	vastane	NOUN	S	Case=Nom|Number=Sing	3	conj	9.1:nsubj	_
10	vaid	vaid	ADV	D	_	11	advmod	11:advmod	_
11	ühe	üks	NUM	N	Case=Gen|Number=Sing|NumType=Card	9	orphan	9.1:obj	SpaceAfter=No
12	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 cc	color:blue
1	või	või	CCONJ	J	_	7	cc	7:cc	_
2	et	et	SCONJ	J	_	7	mark	7:mark	_
3	10	10	NUM	N	Case=Nom|Number=Sing|NumForm=Digit|NumType=Card	4	nummod	4:nummod	_
4	%	%	NOUN	Y	Abbr=Yes	5	nmod	5:nmod	_
5	aafriklasi	aafriklane	NOUN	S	Case=Par|Number=Plur	7	nsubj:cop	7:nsubj	_
6	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
7	ok	ok	ADJ	A	Degree=Pos	0	root	0:root	SpaceAfter=No
8	?	?	PUNCT	Z	_	7	punct	7:punct	_

~~~


