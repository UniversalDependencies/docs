---
layout: base
title:  'Statistics of compound:prt in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="et_ewt-dep-compound.html">compound</a></tt>.

939 nodes (1%) are attached to their parents as `compound:prt`.

511 instances of `compound:prt` (54%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.80085197018104.

The following 5 pairs of parts of speech are connected with `compound:prt`: <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (916; 98% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (12; 1% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (9; 1% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADP.html">ADP</a></tt> (1; 0% instances).


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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 compound:prt	color:blue
1	see	see	DET	P	Case=Nom|Number=Sing|PronType=Dem	2	det	2:det	_
2	vasur	Vasur	PROPN	S	Case=Nom|Number=Sing|Typo=Yes	8	nsubj:cop	8:nsubj	CorrectForm=Lutsar
3	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	8:cop	_
4	nagu	nagu	ADV	D	_	8	advmod	8:advmod	_
5	jama	jama	NOUN	S	Case=Nom|Number=Sing	7	obj	7:obj	_
6	välja	välja	ADV	D	_	7	compound:prt	7:compound	_
7	vahutav	vahutav	ADJ	A	Case=Nom|Degree=Pos|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	8	amod	8:amod	_
8	ilmatädi	ilma_tädi	NOUN	S	Case=Nom|Number=Sing	0	root	0:root	SpaceAfter=No
9	.	.	PUNCT	Z	_	8	punct	8:punct	_

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


