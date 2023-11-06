---
layout: base
title:  'Statistics of compound:prt in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="et_ewt-dep-compound.html">compound</a></tt>.

1177 nodes (1%) are attached to their parents as `compound:prt`.

619 instances of `compound:prt` (53%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.81053525913339.

The following 6 pairs of parts of speech are connected with `compound:prt`: <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (1149; 98% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (18; 2% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (7; 1% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-INTJ.html">INTJ</a></tt> (1; 0% instances).


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
2	vasur	Vasur	PROPN	S	Case=Nom|Number=Sing|Typo=Yes	8	nsubj:cop	8:nsubj	NE=B-Per|CorrectForm=Lutsar
3	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	8:cop	_
4	nagu	nagu	ADV	D	_	8	advmod	8:advmod	_
5	jama	jama	NOUN	S	Case=Nom|Number=Sing	7	obj	7:obj	_
6	välja	välja	ADV	D	_	7	compound:prt	7:compound	_
7	vahutav	vahutav	ADJ	A	Case=Nom|Degree=Pos|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	8	acl	8:acl	_
8	ilmatädi	ilma_tädi	NOUN	S	Case=Nom|Number=Sing	0	root	0:root	SpaceAfter=No
9	.	.	PUNCT	Z	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 compound:prt	color:blue
1	Mina	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj	_
2	arvan	arvama	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	Z	_	8	punct	8:punct	_
4	et	et	SCONJ	J	_	8	mark	8:mark	_
5	see	see	PRON	P	Case=Nom|Number=Sing|PronType=Dem	8	nsubj:cop	8:nsubj	_
6	oleks	olema	AUX	V	Mood=Cnd|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	8:cop	_
7	küll	küll	ADV	D	_	8	advmod	8:advmod	_
8	oluline	oluline	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	2	ccomp	2:ccomp	SpaceAfter=No
9	,	,	PUNCT	Z	_	21	punct	21:punct	_
10	et	et	SCONJ	J	_	21	mark	21:mark	_
11	läbi	läbi	ADV	D	_	12	compound:prt	12:compound	_
12	põdenud	põde=nu	NOUN	S	Case=Nom|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	21	nsubj	21:nsubj|22:nsubj	_
13	tööle	töö	NOUN	S	Case=All|Number=Sing	22	obl	22:obl	SpaceAfter=No
14	,	,	PUNCT	Z	_	15	punct	15:punct	_
15	kooli	kool	NOUN	S	Case=Add|Number=Sing	13	conj	13:conj|22:obl	SpaceAfter=No
16	,	,	PUNCT	Z	_	19	punct	19:punct	_
17	ja	ja	CCONJ	J	_	19	cc	19:cc	_
18	kuhu	kuhu	ADV	D	_	19	advmod	19:advmod	_
19	vaja	vaja	ADV	D	_	13	conj	13:conj|22:advmod	_
20	tagasi	tagasi	ADV	D	_	22	compound:prt	22:compound	_
21	hakkaks	hakkama	VERB	V	Mood=Cnd|Tense=Pres|VerbForm=Fin|Voice=Act	8	advcl	8:advcl	_
22	jõudma	jõudma	VERB	V	Case=Ill|VerbForm=Sup|Voice=Act	21	xcomp	21:xcomp	SpaceAfter=No
23	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


