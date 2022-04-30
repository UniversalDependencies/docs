---
layout: base
title:  'Statistics of cc in UD_Javanese-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Javanese-CSUI: Relations: `cc`

This relation is universal.

51 nodes (2%) are attached to their parents as `cc`.

51 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.68627450980392.

The following 9 pairs of parts of speech are connected with `cc`: <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-CCONJ.html">CCONJ</a></tt> (12; 24% instances), <tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="jv_csui-pos-CCONJ.html">CCONJ</a></tt> (12; 24% instances), <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-CCONJ.html">CCONJ</a></tt> (11; 22% instances), <tt><a href="jv_csui-pos-X.html">X</a></tt>-<tt><a href="jv_csui-pos-CCONJ.html">CCONJ</a></tt> (6; 12% instances), <tt><a href="jv_csui-pos-NUM.html">NUM</a></tt>-<tt><a href="jv_csui-pos-CCONJ.html">CCONJ</a></tt> (4; 8% instances), <tt><a href="jv_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="jv_csui-pos-CCONJ.html">CCONJ</a></tt> (3; 6% instances), <tt><a href="jv_csui-pos-ADV.html">ADV</a></tt>-<tt><a href="jv_csui-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances), <tt><a href="jv_csui-pos-AUX.html">AUX</a></tt>-<tt><a href="jv_csui-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances), <tt><a href="jv_csui-pos-SYM.html">SYM</a></tt>-<tt><a href="jv_csui-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc	color:blue
1	Timur	timur	NOUN	_	Number=Sing	14	nsubj	_	_
2	2	2	NUM	_	NumType=Card	1	nummod	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	Timur	timur	NOUN	_	Number=Sing	1	conj	_	_
5	3	3	NUM	_	NumType=Card	4	nummod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	_	_
7	lan	lan	CCONJ	_	Polite=Form	8	cc	_	Level=Ngoko
8	Barat	Barat	NOUN	_	Number=Sing	1	conj	_	_
9	1	1	NUM	_	NumType=Card	8	nummod	_	SpaceAfter=No
10	-	-	PUNCT	_	_	11	punct	_	SpaceAfter=No
11	Barat	Barat	NOUN	_	Number=Sing	8	nmod	_	_
12	3	3	NUM	_	NumType=Card	11	nummod	_	_
13	kabèh	kabèh	PRON	_	Polite=Infm|PronType=Tot	1	nmod	_	Level=Ngoko
14	nglayani	nglayani	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
15	penerbangan	penerbangan	X	_	Foreign=Yes	14	obj	_	_
16	domestik	domestik	X	_	Foreign=Yes	15	flat:foreign	_	SpaceAfter=No
17	.	.	PUNCT	_	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc	color:blue
1	Israèl	israèl	PROPN	_	_	4	nsubj	_	_
2	lan	lan	CCONJ	_	Polite=Infm	3	cc	_	Level=Ngoko
3	Arab	Arab	PROPN	_	_	1	conj	_	_
4	sarujuk	sarujuk	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
5	gencatan	gencatan	NOUN	_	Number=Sing	4	obl	_	_
6	senjata	senjata	NOUN	_	Number=Sing	5	nmod	_	SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 cc	color:blue
1	Koizumi	Koizumi	PROPN	_	_	2	nsubj	_	_
2	mundur	mundur	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
3	ana	ana	VERB	_	Mood=Ind|Polite=Infm|Voice=Act	2	advcl	_	Level=Ngoko
4	ing	ing	ADP	_	_	5	case	_	_
5	tanggal	tanggal	NOUN	_	Number=Sing	2	obl	_	_
6	26	26	NUM	_	NumType=Card	5	nummod	_	_
7	September	September	PROPN	_	_	6	flat	_	_
8	lan	lan	CCONJ	_	Polite=Infm	10	cc	_	Level=Ngoko
9	sakpungkasane	pungkasan	ADV	_	Polite=Infm	10	advmod	_	Level=Ngoko
10	digantiake	ganti	VERB	_	Mood=Ind|Polite=Infm|Voice=Pass	2	conj	_	Level=Ngoko
11	Abe	Abe	PROPN	_	_	10	obl:agent	_	SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


