---
layout: base
title:  'Statistics of aux in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `aux`

This relation is universal.

965 nodes (4%) are attached to their parents as `aux`.

892 instances of `aux` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.17305699481865.

The following 7 pairs of parts of speech are connected with `aux`: <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-AUX.html">AUX</a></tt> (856; 89% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-AUX.html">AUX</a></tt> (47; 5% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-AUX.html">AUX</a></tt> (37; 4% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-AUX.html">AUX</a></tt> (17; 2% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-AUX.html">AUX</a></tt> (5; 1% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="et_ewt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_ewt-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux	color:blue
1	Pealetükkivus	peale_tükki=vus	NOUN	S	Case=Nom|Number=Sing	5	nsubj:cop	5:nsubj	_
2	muidugi	muidugi	ADV	D	_	5	advmod	5:advmod	_
3	ei	ei	AUX	V	Polarity=Neg	5	aux	5:aux	_
4	oleks	olema	AUX	V	Mood=Cnd|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
5	hea	hea	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	0:root	SpaceAfter=No
6	.	.	PUNCT	Z	_	5	punct	5:punct	_

~~~


