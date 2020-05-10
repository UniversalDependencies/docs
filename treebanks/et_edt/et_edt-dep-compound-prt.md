---
layout: base
title:  'Statistics of compound:prt in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="et_edt-dep-compound.html">compound</a></tt>.

4388 nodes (1%) are attached to their parents as `compound:prt`.

2516 instances of `compound:prt` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.87420237010027.

The following 7 pairs of parts of speech are connected with `compound:prt`: <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (4282; 98% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (87; 2% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (15; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 compound:prt	color:blue
1	Rootsi	Rootsi	PROPN	S	Case=Gen|Number=Sing	2	nmod	2:nmod	_
2	kirjanduses	kirjandus	NOUN	S	Case=Ine|Number=Sing	3	obl	3:obl	_
3	elati	elama	VERB	V	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	0:root	_
4	see	see	DET	P	Case=Nom|Number=Sing|PronType=Dem	5	det	5:det	_
5	periood	periood	NOUN	S	Case=Nom|Number=Sing	3	obj	3:obj	_
6	läbi	läbi	ADV	D	_	3	compound:prt	3:compound	_
7	1970ndatel	1970=s	ADJ	N	Case=Ade|Number=Plur|NumType=Ord	3	obl	3:obl	SpaceAfter=No
8	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound:prt	color:blue
1	Kõik	kõik	DET	P	Case=Nom|Number=Plur|PronType=Tot	5	det	5:det	_
2	1992	1992	NUM	N	NumForm=Digit|NumType=Card	4	obl	4:obl	_
3	välja	välja	ADV	D	_	4	compound:prt	4:compound	_
4	antud	antud	ADJ	A	Degree=Pos|Tense=Past|VerbForm=Part|Voice=Pass	5	acl	5:acl	_
5	margid	mark	NOUN	S	Case=Nom|Number=Plur	8	nsubj:cop	8:nsubj	_
6	olid	olema	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	8	cop	8:cop	_
7	venekeelsete	vene_keelne	ADJ	A	Case=Gen|Degree=Pos|Number=Plur	8	amod	8:amod	_
8	kirjadega	kiri	NOUN	S	Case=Com|Number=Plur	0	root	0:root	SpaceAfter=No
9	.	.	PUNCT	Z	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 compound:prt	color:blue
1	Siis	siis	ADV	D	_	2	advmod	2:advmod	_
2	tuleb	tulema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	harjuda	harjuma	VERB	V	VerbForm=Inf	2	csubj	2:csubj	_
4	lühikesest	lühike	ADJ	A	Case=Ela|Degree=Pos|Number=Sing	5	amod	5:amod	_
5	basseinist	bassein	NOUN	S	Case=Ela|Number=Sing	8	nmod	8:nmod	_
6	pikka	pikk	ADJ	A	Case=Ine|Degree=Pos|Number=Sing	8	amod	8:amod	_
7	üle	üle	ADV	D	_	8	compound:prt	8:compound	_
8	minemisega	minemine	NOUN	S	Case=Com|Number=Sing	3	obl	3:obl	_
9	...	...	PUNCT	Z	_	2	punct	2:punct	_

~~~


