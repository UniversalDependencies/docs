---
layout: base
title:  'Statistics of nsubj in UD_Javanese-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Javanese-CSUI: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="jv_csui-dep-nsubj-pass.html">nsubj:pass</a></tt>.

146 nodes (7%) are attached to their parents as `nsubj`.

143 instances of `nsubj` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.5.

The following 17 pairs of parts of speech are connected with `nsubj`: <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-PRON.html">PRON</a></tt> (33; 23% instances), <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt> (32; 22% instances), <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (29; 20% instances), <tt><a href="jv_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="jv_csui-pos-PRON.html">PRON</a></tt> (11; 8% instances), <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt> (7; 5% instances), <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (6; 4% instances), <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-PRON.html">PRON</a></tt> (6; 4% instances), <tt><a href="jv_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (5; 3% instances), <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-X.html">X</a></tt> (4; 3% instances), <tt><a href="jv_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="jv_csui-pos-X.html">X</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="jv_csui-pos-ADV.html">ADV</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="jv_csui-pos-ADV.html">ADV</a></tt>-<tt><a href="jv_csui-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="jv_csui-pos-NUM.html">NUM</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="jv_csui-pos-X.html">X</a></tt>-<tt><a href="jv_csui-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj	color:blue
1	Dhèwèké	dhèwèké	PRON	_	Number=Sing|Person=3|Polite=Infm|PronType=Prs	4	nsubj	_	Level=Ngoko
2	wis	wis	AUX	_	Polite=Infm	4	aux	_	Level=Ngoko
3	tau	tau	VERB	_	Mood=Ind|Polite=Infm|Voice=Pass	2	fixed	_	Level=Ngoko
4	njabat	njabat	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
5	kepala	kepala	X	_	Foreign=Yes	4	obl	_	_
6	Inspeksi	Inspeksi	PROPN	_	_	5	nmod	_	_
7	Kebudayaan	Kebudayaan	PROPN	_	_	6	flat:name	_	_
8	ing	ing	ADP	_	_	9	case	_	_
9	Sumatera	Sumatera	PROPN	_	_	5	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nsubj	color:blue
1	Nalika	nalika	ADP	_	Polite=Elev	3	case	_	Level=KramaInggil
2	ing	ing	ADP	_	_	3	case	_	_
3	Jakarta	Jakarta	PROPN	_	_	6	obl	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	Robby	Robby	PROPN	_	_	6	nsubj	_	_
6	kenalan	kenal	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
7	banjur	banjur	ADV	_	_	8	advmod	_	_
8	dadi	dadi	VERB	_	Mood=Ind|Polite=Infm|Voice=Act	6	advcl	_	Level=Ngoko
9	"	"	PUNCT	_	_	10	punct	_	SpaceAfter=No
10	murid	murid	NOUN	_	Number=Sing	8	obl	_	SpaceAfter=No
11	"	"	PUNCT	_	_	10	punct	_	_
12	Prajudi	Prajudi	PROPN	_	_	10	nmod:poss	_	SpaceAfter=No
13	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj	color:blue
1	Temon	temu	NOUN	_	Number=Sing	5	nsubj	_	_
2	é	é	DET	_	Definite=Def|Polite=Infm|PronType=Art	1	det	_	Level=Ngoko
3	ing	ing	ADP	_	_	4	case	_	_
4	kana	kana	PRON	_	Polite=Infm|PronType=Dem	5	obl	_	Level=Ngoko
5	wujud	wujud	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
6	prasasti	prasasti	NOUN	_	Number=Sing	5	obl	_	_
7	watu	watu	NOUN	_	Number=Sing	6	nmod	_	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


