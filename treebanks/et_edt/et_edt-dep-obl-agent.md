---
layout: base
title:  'Statistics of obl:agent in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="et_edt-dep-obl.html">obl</a></tt>.

384 nodes (0%) are attached to their parents as `obl:agent`.

368 instances of `obl:agent` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.75.

The following 9 pairs of parts of speech are connected with `obl:agent`: <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (104; 27% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (101; 26% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (49; 13% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (48; 13% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (46; 12% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (32; 8% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl:agent	color:blue
1	Davosi	Davos	PROPN	S	Case=Gen|Number=Sing	2	nmod	2:nmod	NE=B-Gep
2	analüütikute	analüütik	NOUN	S	Case=Gen|Number=Plur	3	obl:agent	3:obl:agent	_
3	arvates	arvama	VERB	V	VerbForm=Conv	4	advcl	4:advcl	Verb=arvama
4	toetuvad	toetuma	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Verb=toetuma
5	riigid	riik	NOUN	S	Case=Nom|Number=Plur	4	nsubj	4:nsubj	Arg=toetuma_Arg_0
6	neljale	neli	NUM	N	Case=All|Number=Sing|NumForm=Word|NumType=Card	7	nummod	7:nummod	_
7	sambale	sammas	NOUN	S	Case=All|Number=Sing	4	obl	4:obl	Arg=toetuma_Arg_1|SpaceAfter=No
8	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 obl:agent	color:blue
1	See	see	PRON	P	Case=Nom|Number=Sing|PronType=Dem	2	nsubj	2:nsubj	Arg=ületama_Arg_0
2	ületab	ületama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Verb=ületama_3
3	Tartu	Tartu	PROPN	S	Case=Gen|Number=Sing	4	nmod	4:nmod	NE=B-Gep
4	juhtide	juht	NOUN	S	Case=Gen|Number=Plur	5	obl:agent	5:obl:agent	_
5	lubatud	lubatud	ADJ	A	Degree=Pos|Tense=Past|VerbForm=Part|Voice=Pass	6	acl	6:acl	_
6	kvoodi	kvoot	NOUN	S	Case=Gen|Number=Sing	2	obj	2:obj	Arg=ületama_Arg_1|SpaceAfter=No
7	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 obl:agent	color:blue
1	Enno	Enno	PROPN	S	Case=Nom|Number=Sing	2	nmod	2:nmod	NE=B-Per
2	Perel	Pere	PROPN	S	Case=Ade|Number=Sing	0	root	0:root	NE=I-Per
3	oli	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	cop	2:cop	_
4	probleeme	probleem	NOUN	S	Case=Par|Number=Plur	2	nsubj	2:nsubj	_
5	ka	ka	ADV	D	_	8	advmod	8:advmod	_
6	enda	ise	PRON	P	Case=Gen|Number=Sing|PronType=Prs|Reflex=Yes	7	obl:agent	7:obl:agent	_
7	juhitavas	juhi=tav	ADJ	A	Case=Ine|Degree=Pos|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Pass	8	acl	8:acl	_
8	ettevõttes	ette_võte	NOUN	S	Case=Ine|Number=Sing	2	obl	2:obl	SpaceAfter=No
9	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


