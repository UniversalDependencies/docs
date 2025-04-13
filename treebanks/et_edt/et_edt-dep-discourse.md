---
layout: base
title:  'Statistics of discourse in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `discourse`

This relation is universal.

306 nodes (0%) are attached to their parents as `discourse`.

261 instances of `discourse` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.59477124183007.

The following 21 pairs of parts of speech are connected with `discourse`: <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt> (136; 44% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt> (44; 14% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt> (22; 7% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt> (21; 7% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt> (18; 6% instances), <tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt> (15; 5% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt> (13; 4% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (9; 3% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (7; 2% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (6; 2% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 discourse	color:blue
1	“	“	PUNCT	Z	_	4	punct	4:punct	_
2	No	no	INTJ	I	_	4	discourse	4:discourse	_
3	siis	siis	ADV	D	_	4	advmod	4:advmod	_
4	hakkas	hakkama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Verb=hakkama
5	tulema	tulema	VERB	V	Case=Ill|VerbForm=Sup|Voice=Act	4	xcomp	4:xcomp	Arg=hakkama_Arg_1
6	neid	see	DET	P	Case=Par|Number=Plur|PronType=Dem	7	det	7:det	_
7	jobisid	jobi	NOUN	S	Case=Par|Number=Plur	4	nsubj	4:nsubj|5:nsubj	Arg=hakkama_Arg_0|SpaceAfter=No
8	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 discourse	color:blue
1	"	"	PUNCT	Z	_	7	punct	7:punct	SpaceAfter=No
2	No	no	INTJ	I	_	7	discourse	7:discourse	_
3	eks	eks	ADV	D	_	7	advmod	7:advmod	_
4	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	7	nsubj:cop	7:nsubj	_
5	oli	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
6	ikka	ikka	ADV	D	_	7	advmod	7:advmod	_
7	ateist	ateist	NOUN	S	Case=Nom|Number=Sing	0	root	0:root	_
8	...	...	PUNCT	Z	_	7	punct	7:punct	SpaceAfter=No
9	"	"	PUNCT	Z	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 discourse	color:blue
1	"	"	PUNCT	Z	_	3	punct	3:punct	SpaceAfter=No
2	Ja	ja	CCONJ	J	_	3	cc	3:cc	_
3	nüüd	nüüd	ADV	D	_	0	root	0:root	SpaceAfter=No
4	:	:	PUNCT	Z	_	3	punct	3:punct	_
5	hoo	hoo	INTJ	I	_	3	discourse	3:discourse	SpaceAfter=No
6	!	!	PUNCT	Z	_	3	punct	3:punct	SpaceAfter=No
7	"	"	PUNCT	Z	_	3	punct	3:punct	_

~~~


