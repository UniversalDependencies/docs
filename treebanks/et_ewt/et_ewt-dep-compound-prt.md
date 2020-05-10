---
layout: base
title:  'Statistics of compound:prt in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="et_ewt-dep-compound.html">compound</a></tt>.

563 nodes (1%) are attached to their parents as `compound:prt`.

309 instances of `compound:prt` (55%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.7886323268206.

The following 4 pairs of parts of speech are connected with `compound:prt`: <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (553; 98% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (6; 1% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound:prt	color:blue
1	See	see	DET	P	Case=Nom|Number=Sing|PronType=Dem	2	det	2:det	_
2	kôik	kõik	PRON	P	Case=Nom|Number=Sing|PronType=Tot	5	obj	5:obj	_
3	tuleb	tulema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	ära	ära	ADV	D	_	5	compound:prt	5:compound	_
5	aurustada	aurustama	VERB	V	VerbForm=Inf	3	csubj	3:csubj	_
6	enne	enne	ADV	D	_	5	advmod	5:advmod	_
7	kui	kui	SCONJ	J	_	9	mark	9:mark	_
8	pôlema	pôlema	NOUN	S	Case=Nom|Number=Sing	9	obl	9:obl	_
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 compound:prt	color:blue
1	Oma	oma	PRON	P	Case=Gen|Number=Sing|Poss=Yes|PronType=Prs	3	nmod	3:nmod	_
2	tõelisest	tõeline	ADJ	A	Case=Ela|Degree=Pos|Number=Sing	3	amod	3:amod	_
3	vanusest	vanus	NOUN	S	Case=Ela|Number=Sing	6	obl	6:obl	_
4	15	15	NUM	N	Case=Nom|Number=Sing|NumForm=Digit|NumType=Card	5	nummod	5:nummod	_
5	aastat	aasta	NOUN	S	Case=Par|Number=Sing	6	obl	6:obl	_
6	noorem	noorem	ADJ	A	Case=Nom|Degree=Cmp|Number=Sing	8	amod	8:amod	_
7	välja	välja	ADV	D	_	8	compound:prt	8:compound	_
8	nägemine	nägemine	NOUN	S	Case=Nom|Number=Sing	11	nsubj:cop	11:nsubj	_
9	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	11:cop	_
10	kahtlemata	kahtlemata	ADV	D	_	11	advmod	11:advmod	_
11	hälve	hälve	NOUN	S	Case=Nom|Number=Sing	0	root	0:root	SpaceAfter=No
12	,	,	PUNCT	Z	_	14	punct	14:punct	_
13	mis	mis	PRON	P	Case=Nom|Number=Sing|PronType=Int,Rel	14	nsubj	14:nsubj	_
14	vajab	vajama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	acl:relcl	11:acl	_
15	riiklikku	riiklik	ADJ	A	Case=Par|Degree=Pos|Number=Sing	16	amod	16:amod	_
16	tähelepanu	tähele_panu	NOUN	S	Case=Par|Number=Sing	14	obj	14:obj	SpaceAfter=No
17	.	.	PUNCT	Z	_	11	punct	11:punct	_

~~~


