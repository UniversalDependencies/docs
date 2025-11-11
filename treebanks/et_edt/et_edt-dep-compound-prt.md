---
layout: base
title:  'Statistics of compound:prt in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="et_edt-dep-compound.html">compound</a></tt>.

4528 nodes (1%) are attached to their parents as `compound:prt`.

2548 instances of `compound:prt` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.87588339222615.

The following 7 pairs of parts of speech are connected with `compound:prt`: <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (4373; 97% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (132; 3% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (17; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 compound:prt	color:blue
1	Rootsi	Rootsi	PROPN	S	Case=Gen|Number=Sing	2	nmod	2:nmod	NE=B-Loc
2	kirjanduses	kirjandus	NOUN	S	Case=Ine|Number=Sing	3	obl	3:obl	_
3	elati	elama	VERB	V	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	0:root	_
4	see	see	DET	P	Case=Nom|Number=Sing|PronType=Dem	5	det	5:det	_
5	periood	periood	NOUN	S	Case=Nom|Number=Sing	3	obj	3:obj	_
6	läbi	läbi	ADV	D	_	3	compound:prt	3:compound	_
7	1970ndatel	1970=s	ADJ	N	Case=Ade|Number=Plur|NumType=Ord	3	obl	3:obl	SpaceAfter=No
8	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 compound:prt	color:blue
1	Eesti	Eesti	PROPN	G	_	2	amod	2:amod	NE=B-Gep
2	oludes	olu	NOUN	S	Case=Ine|Number=Plur	9	obl	9:obl	_
3	tundus	tunduma	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	9	aux	9:aux	_
4	see	see	DET	P	Case=Nom|Number=Sing|PronType=Dem	5	det	5:det	_
5	probleem	probleem	NOUN	S	Case=Nom|Number=Sing	9	nsubj	9:nsubj	_
6	siiski	siiski	ADV	D	_	9	advmod	9:advmod	_
7	olevat	olema	AUX	V	Mood=Qot|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	9:cop	_
8	lahti	lahti	ADV	D	_	9	compound:prt	9:compound	_
9	rääkimata	rääki=mata	ADJ	A	Case=Abe|Degree=Pos|VerbForm=Sup|Voice=Act	0	root	0:root	SpaceAfter=No
10	.	.	PUNCT	Z	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 compound:prt	color:blue
1	Siis	siis	ADV	D	_	2	advmod	2:advmod	_
2	tuleb	tulema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Verb=tulema_4
3	harjuda	harjuma	VERB	V	VerbForm=Inf	2	csubj	2:csubj	Arg=tulema_Arg_1|Verb=harjuma
4	lühikesest	lühike	ADJ	A	Case=Ela|Degree=Pos|Number=Sing	5	amod	5:amod	_
5	basseinist	bassein	NOUN	S	Case=Ela|Number=Sing	8	nmod	8:nmod	_
6	pikka	pikk	ADJ	A	Case=Ine|Degree=Pos|Number=Sing	8	amod	8:amod	_
7	üle	üle	ADV	D	_	8	compound:prt	8:compound	_
8	minemisega	minemine	NOUN	S	Case=Com|Number=Sing	3	obl	3:obl	Arg=harjuma_Arg_2
9	...	...	PUNCT	Z	_	2	punct	2:punct	_

~~~


