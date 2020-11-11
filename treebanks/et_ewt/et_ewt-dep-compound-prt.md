---
layout: base
title:  'Statistics of compound:prt in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="et_ewt-dep-compound.html">compound</a></tt>.

731 nodes (1%) are attached to their parents as `compound:prt`.

403 instances of `compound:prt` (55%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.81668946648427.

The following 5 pairs of parts of speech are connected with `compound:prt`: <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (714; 98% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (8; 1% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (7; 1% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound:prt	color:blue
1	See	see	DET	P	Case=Nom|Number=Sing|PronType=Dem	2	det	2:det	_
2	kôik	kõik	PRON	P	Case=Nom|Number=Sing|PronType=Tot|Typo=Yes	5	obj	5:obj	CorrectForm=kõik
3	tuleb	tulema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	ära	ära	ADV	D	_	5	compound:prt	5:compound	_
5	aurustada	aurustama	VERB	V	VerbForm=Inf	3	csubj	3:csubj	_
6	enne	enne	ADV	D	_	5	advmod	5:advmod	_
7	kui	kui	SCONJ	J	_	9	mark	9:mark	_
8	pôlema	põlema	NOUN	S	Case=Nom|Number=Sing|Typo=Yes	9	obl	9:obl	CorrectForm=põlema
9	pääsed	pääsema	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl	3:advcl	SpaceAfter=No
10	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 compound:prt	color:blue
1	Ja	ja	CCONJ	J	_	6	cc	6:cc	_
2	sisemisel	sisemine	ADJ	A	Case=Ade|Degree=Pos|Number=Sing	3	amod	3:amod	_
3	ringil	ring	NOUN	S	Case=Ade|Number=Sing	6	obl	6:obl	_
4	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	6:aux	_
5	asfalt	asfalt	NOUN	S	Case=Nom|Number=Sing	6	obj	6:obj	_
6	lisatud	lisama	VERB	V	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
7	kuni	kuni	ADP	K	AdpType=Prep	9	case	9:case	_
8	3.	3.	ADJ	N	Case=Gen|Number=Sing|NumForm=Digit|NumType=Ord	9	amod	9:amod	_
9	kurvini	kurv	NOUN	S	Case=Ter|Number=Sing	6	obl	6:obl	_
10	kaasa	kaasa	ADV	D	_	11	compound:prt	11:compound	_
11	arvatud	arva=tud	ADJ	A	Degree=Pos|Tense=Past|VerbForm=Part|Voice=Pass	9	amod	9:amod	SpaceAfter=No
12	.	.	PUNCT	Z	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound:prt	color:blue
1	Suured	suur	ADJ	A	Case=Nom|Degree=Pos|Number=Plur	2	amod	2:amod	_
2	tänud	tä=nud	ADJ	A	Degree=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
3	terviseametile	tervise_amet	NOUN	S	Case=All|Number=Sing	2	obl	2:obl	_
4	kriisi	kriis	NOUN	S	Case=Gen|Number=Sing	2	obl	2:obl	_
5	ette	ette	ADV	D	_	6	compound:prt	6:compound	_
6	nägemise	nägemine	NOUN	S	Case=Gen|Number=Sing	2	obl	2:obl	_
7	eest	eest	ADP	K	AdpType=Post	6	case	6:case	SpaceAfter=No
8	...	...	PUNCT	Z	_	2	punct	2:punct	_
9	NOOOT	Nooot	X	T	_	2	parataxis	2:parataxis	_

~~~


