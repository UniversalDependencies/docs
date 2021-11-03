---
layout: base
title:  'Statistics of nmod:poss in UD_Javanese-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Javanese-CSUI: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="jv_csui-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="jv_csui-dep-nmod-lmod.html">nmod:lmod</a></tt>, <tt><a href="jv_csui-dep-nmod-tmod.html">nmod:tmod</a></tt>.

35 nodes (2%) are attached to their parents as `nmod:poss`.

35 instances of `nmod:poss` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.54285714285714.

The following 6 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-PRON.html">PRON</a></tt> (27; 77% instances), <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt> (3; 9% instances), <tt><a href="jv_csui-pos-X.html">X</a></tt>-<tt><a href="jv_csui-pos-PRON.html">PRON</a></tt> (2; 6% instances), <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="jv_csui-pos-PRON.html">PRON</a></tt>-<tt><a href="jv_csui-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="jv_csui-pos-X.html">X</a></tt>-<tt><a href="jv_csui-pos-DET.html">DET</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nmod:poss	color:blue
1	Jeneng	jeneng	NOUN	_	Number=Sing|Polite=Infm	3	nsubj	_	Level=Ngoko
2	é	é	PRON	_	Number=Sing|Person=3|Polite=Infm|PronType=Prs	1	nmod:poss	_	Level=Ngoko
3	disebutaké	sebut	VERB	_	Mood=Ind|Voice=Pass	0	root	_	_
4	kaping	kaping	NOUN	_	Number=Sing	3	obl	_	_
5	27	27	NUM	_	NumType=Card	4	nummod	_	_
6	ing	ing	ADP	_	_	7	case	_	_
7	Al-Quran	Al-Quran	PROPN	_	_	3	obl	_	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 nmod:poss	color:blue
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
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 nmod:poss	color:blue
1	Gunggung	gunggung	NOUN	_	Number=Sing	4	nsubj	_	_
2	subunit	subunit	X	_	Foreign=Yes	1	nmod	_	_
3	isa	bisa	AUX	_	Abbr=Yes|Polite=Infm	4	aux	_	Level=Ngoko
4	macem-macem	macem	ADJ	_	_	0	root	_	_
5	malah	malah	ADV	_	_	7	advmod	_	_
6	ning	ning	ADP	_	_	7	case	_	_
7	sèl	sèl	NOUN	_	Number=Sing	4	obl	_	_
8	kang	kang	PRON	_	Polite=Infm|PronType=Rel	9	nsubj	_	Level=Ngoko
9	padha	padha	ADJ	_	Polite=Infm	7	acl:relcl	_	Level=Ngoko
10	conto	contoh	NOUN	_	Number=Sing	4	nmod	_	_
11	né	é	DET	_	Definite=Def|Polite=Infm|PronType=Art	10	det	_	_
12	ning	ning	ADP	_	_	13	case	_	_
13	Salmonella	Salmonella	PROPN	_	_	10	nmod	_	_
14	kang	kang	PRON	_	Polite=Infm|PronType=Rel	19	obl	_	Level=Ngoko
15	gunggung	gunggung	NOUN	_	Number=Sing	19	nsubj	_	_
16	subunit	subunit	X	_	Foreign=Yes	15	nmod	_	_
17	é	é	PRON	_	Number=Sing|Person=3|Polite=Infm|PronType=Prs	16	nmod:poss	_	_
18	antara	antara	NOUN	_	Number=Sing|Polite=Infm	19	nmod:lmod	_	Level=Ngoko
19	3	3	NUM	_	NumType=Card	13	acl:relcl	_	SpaceAfter=No
20	,	,	PUNCT	_	_	21	punct	_	_
21	4	4	NUM	_	NumType=Card	19	conj	_	SpaceAfter=No
22	,	,	PUNCT	_	_	24	punct	_	_
23	utawa	utawa	CCONJ	_	Polite=Infm	24	cc	_	Level=Ngoko
24	5	5	NUM	_	NumType=Card	19	conj	_	SpaceAfter=No
25	.	.	PUNCT	_	_	4	punct	_	_

~~~


