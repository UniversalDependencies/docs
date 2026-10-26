---
layout: base
title:  'Statistics of advmod:lmod in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `advmod:lmod`

This relation is a language-specific subtype of <tt><a href="et_edt-dep-advmod.html">advmod</a></tt>.
There are also 1 other language-specific subtypes of `advmod`: <tt><a href="et_edt-dep-advmod-tmod.html">advmod:tmod</a></tt>.

1388 nodes (0%) are attached to their parents as `advmod:lmod`.

904 instances of `advmod:lmod` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.97838616714697.

The following 10 pairs of parts of speech are connected with `advmod:lmod`: <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (930; 67% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (206; 15% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (133; 10% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (48; 3% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (26; 2% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (22; 2% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (17; 1% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 advmod:lmod	color:blue
1	Ja	ja	CCONJ	J	_	8	cc	8:cc	_
2	sellest	see	DET	P	Case=Ela|Number=Sing|PronType=Dem	3	det	3:det	_
3	ajast	aeg	NOUN	S	Case=Ela|Number=Sing	8	obl:tmod	8:obl	_
4	peale	peale	ADP	K	AdpType=Post	3	case	3:case	_
5	on	olema	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux	8:aux	_
6	kirjanike	kirjanik	NOUN	S	Case=Gen|Number=Plur	7	nmod	7:nmod	_
7	pilgud	pilk	NOUN	S	Case=Nom|Number=Plur	8	nsubj	8:nsubj	Arg=pöörduma_Arg_1
8	pöördunud	pöörduma	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	Verb=pöörduma_1
9	mujale	mujale	ADV	D	_	8	advmod:lmod	8:advmod	SpaceAfter=No
10	.	.	PUNCT	Z	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 advmod:lmod	color:blue
1	Kolmas	kolmas	ADJ	N	Case=Nom|Number=Sing|NumForm=Word|NumType=Ord	2	amod	2:amod	_
2	paraadna	paraadna	NOUN	S	Case=Nom|Number=Sing	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	Z	_	4	punct	4:punct	_
4	üles	üles	ADV	D	_	2	advmod:lmod	2:advmod	SpaceAfter=No
5	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 advmod:lmod	color:blue
1	Sellepärast	selle_pärast	ADV	D	_	5	advmod	5:advmod	_
2	Kaplinskil	Kaplinski	PROPN	S	Case=Ade|Number=Sing	5	obl	5:obl	NE=B-Per
3	siin	siin	ADV	D	_	5	advmod:lmod	5:advmod	_
4	nii	nii	ADV	D	_	5	advmod	5:advmod	_
5	mugav	mugav	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	0:root	_
6	mässata	mässama	VERB	V	VerbForm=Inf	5	csubj:cop	5:csubj	_
7	ongi	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	SpaceAfter=No
8	.	.	PUNCT	Z	_	5	punct	5:punct	_

~~~


