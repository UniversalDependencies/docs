---
layout: base
title:  'Statistics of cop in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `cop`

This relation is universal.

10727 nodes (2%) are attached to their parents as `cop`.

7961 instances of `cop` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.30707560361704.

The following 11 pairs of parts of speech are connected with `cop`: <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-AUX.html">AUX</a></tt> (4518; 42% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-AUX.html">AUX</a></tt> (3904; 36% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-AUX.html">AUX</a></tt> (917; 9% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-AUX.html">AUX</a></tt> (913; 9% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-AUX.html">AUX</a></tt> (254; 2% instances), <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-AUX.html">AUX</a></tt> (114; 1% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-AUX.html">AUX</a></tt> (73; 1% instances), <tt><a href="et_edt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_edt-pos-AUX.html">AUX</a></tt> (28; 0% instances), <tt><a href="et_edt-pos-X.html">X</a></tt>-<tt><a href="et_edt-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="et_edt-pos-DET.html">DET</a></tt>-<tt><a href="et_edt-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et_edt-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cop	color:blue
1	Huvitav	huvitav	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	2	amod	2:amod	_
2	küsimus	küsimus	NOUN	S	Case=Nom|Number=Sing	0	root	0:root	_
3	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	2:cop	SpaceAfter=No
4	,	,	PUNCT	Z	_	8	punct	8:punct	_
5	millest	mis	PRON	P	Case=Ela|Number=Sing|PronType=Int,Rel	8	obl:arg	8:obl	Arg=meenuma_Arg_3
6	need	see	DET	P	Case=Nom|Number=Plur|PronType=Dem	7	det	7:det	_
7	kirjad	kiri	NOUN	S	Case=Nom|Number=Plur	8	nsubj	8:nsubj	Arg=meenuma_Arg_0
8	jutustavad	jutustama	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	csubj:cop	2:csubj	SpaceAfter=No|Verb=jutustama
9	?	?	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 cop	color:blue
1	Nagu	nagu	SCONJ	J	_	2	mark	2:mark	_
2	Fellini	Fellini	PROPN	S	Case=Nom|Number=Sing	9	advcl	9:advcl	NE=B-Per|SpaceAfter=No
3	,	,	PUNCT	Z	_	9	punct	9:punct	_
4	olete	olema	AUX	V	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	9:cop	_
5	te	sina	PRON	P	Case=Nom|Number=Plur|Person=2|PronType=Prs	9	nsubj:cop	9:nsubj	_
6	oma	oma	PRON	P	Case=Gen|Number=Sing|Poss=Yes|PronType=Prs	7	nmod	7:nmod	_
7	filmides	film	NOUN	S	Case=Ine|Number=Plur	9	obl:lmod	9:obl	_
8	tohutult	tohutult	ADV	D	_	9	advmod	9:advmod	_
9	erootiline	erootiline	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	0:root	SpaceAfter=No
10	.	.	PUNCT	Z	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	Seetõttu	see_tõttu	ADV	D	_	3	advmod	3:advmod	_
2	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	_
3	hädasti	hädasti	ADV	D	_	0	root	0:root	_
4	vaja	vaja	ADV	D	_	3	advmod	3:advmod	_
5	midagi	miski	PRON	P	Case=Par|Number=Sing|PronType=Ind	3	nsubj:cop	3:nsubj	_
6	või	või	CCONJ	J	_	7	cc	7:cc	_
7	kedagi	keegi	PRON	P	Case=Par|Number=Sing|PronType=Ind	5	conj	3:nsubj|5:conj|10:obl	SpaceAfter=No
8	,	,	PUNCT	Z	_	10	punct	10:punct	_
9	kellega	kes	PRON	P	Case=Com|Number=Sing|PronType=Int,Rel	10	obl	7:ref	Arg=võitlema_Arg_1
10	võidelda	võitlema	VERB	V	VerbForm=Inf	7	acl:relcl	7:acl:relcl	SpaceAfter=No|Verb=võitlema
11	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


