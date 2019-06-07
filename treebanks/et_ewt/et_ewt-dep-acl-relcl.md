---
layout: base
title:  'Statistics of acl:relcl in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="et_ewt-dep-acl.html">acl</a></tt>.

332 nodes (1%) are attached to their parents as `acl:relcl`.

331 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.21987951807229.

The following 18 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (215; 65% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (54; 16% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (11; 3% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (9; 3% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (7; 2% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (6; 2% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (5; 2% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-DET.html">DET</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 acl:relcl	color:blue
1	See	see	PRON	P	Case=Nom|Number=Sing|PronType=Dem	3	nsubj:cop	3:nsubj	_
2	ongi	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	_
3	leib	leib	NOUN	S	Case=Nom|Number=Sing	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	Z	_	8	punct	8:punct	_
5	mis	mis	PRON	P	Case=Nom|Number=Sing|PronType=Int,Rel	8	nsubj	8:nsubj	_
6	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux	8:aux	_
7	alla	alla	ADV	D	_	8	compound:prt	8:compound	_
8	tulnud	tulema	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	3	acl:relcl	3:acl	_
9	taevast	taevas	NOUN	S	Case=Ela|Number=Sing	8	obl	8:obl	SpaceAfter=No
10	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl:relcl	color:blue
1	Vaim	vaim	NOUN	S	Case=Nom|Number=Sing	3	nsubj:cop	3:nsubj	_
2	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	_
3	see	see	PRON	P	Case=Nom|Number=Sing|PronType=Dem	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	Z	_	6	punct	6:punct	_
5	kes	kes	PRON	P	Case=Nom|Number=Sing|PronType=Int,Rel	6	nsubj	6:nsubj	_
6	elustab	elustama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl:relcl	3:acl	SpaceAfter=No
7	,	,	PUNCT	Z	_	8	punct	8:punct	_
8	lihast	liha	NOUN	S	Case=Ela|Number=Sing	3	conj	3:conj	_
9	ei	ei	AUX	V	Polarity=Neg	8	aux	8:aux	_
10	ole	olema	AUX	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	8:cop	_
11	mingit	mingi	DET	P	Case=Par|Number=Sing|PronType=Ind	12	det	12:det	_
12	kasu	kasu	NOUN	S	Case=Par|Number=Sing	8	nsubj:cop	8:nsubj	SpaceAfter=No
13	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 acl:relcl	color:blue
1	Ka	ka	ADV	D	_	3	advmod	3:advmod	_
2	sinu	sina	PRON	P	Case=Gen|Number=Sing|Person=2|PronType=Prs	3	nmod	3:nmod	_
3	pere	pere	NOUN	S	Case=Nom|Number=Sing	13	nsubj	13:nsubj	SpaceAfter=No
4	,	,	PUNCT	Z	_	9	punct	9:punct	_
5	kes	kes	PRON	P	Case=Nom|Number=Sing|PronType=Int,Rel	9	nsubj:cop	9:nsubj	_
6	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	9:cop	_
7	muidu	muidu	ADV	D	_	9	advmod	9:advmod	_
8	igati	igati	ADV	D	_	9	advmod	9:advmod	_
9	toetav	toetav	ADJ	A	Case=Nom|Degree=Pos|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	3	acl:relcl	3:acl	SpaceAfter=No
10	,	,	PUNCT	Z	_	9	punct	9:punct	_
11	lihtsalt	lihtsalt	ADV	D	_	13	advmod	13:advmod	_
12	ei	ei	AUX	V	Polarity=Neg	13	aux	13:aux	_
13	oska	oskama	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
14	sind	sina	PRON	P	Case=Par|Number=Sing|Person=2|PronType=Prs	15	obj	15:obj	_
15	aidat	aidat	NOUN	S	Case=Nom|Number=Sing	13	obj	13:obj	SpaceAfter=No
16	.	.	PUNCT	Z	_	13	punct	13:punct	_

~~~


