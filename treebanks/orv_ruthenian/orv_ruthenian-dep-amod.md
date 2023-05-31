---
layout: base
title:  'Statistics of amod in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `amod`

This relation is universal.

459 nodes (5%) are attached to their parents as `amod`.

259 instances of `amod` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.20697167755991.

The following 8 pairs of parts of speech are connected with `amod`: <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt> (418; 91% instances), <tt><a href="orv_ruthenian-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt> (22; 5% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (8; 2% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-PROPN.html">PROPN</a></tt> (7; 2% instances), <tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="orv_ruthenian-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 amod	color:blue
1	АРТЫКУЛЪ	артыкулъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
2	1	1	ADJ	_	Case=Nom|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	1	amod	_	SpaceAfter=No
3	.	.	PUNCT	_	_	1	punct	_	SpacesAfter=\r\n\r\n

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 amod	color:blue
1	А	а	CCONJ	_	_	2	cc	_	wf="А"
2	привезлъ	привезти	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="привезлъ"
3	к	къ	ADP	_	_	4	case	_	wf="к"
4	нам	мы	PRON	_	Case=Dat|Number=Plur|Person=1|PronType=Prs	2	obl	_	wf="нам"
5	вѣсы	вѣсъ	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	2	obj	_	wf="вѣсы"
6	Іванъ	Иванъ	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	2	nsubj	_	wf="Іванъ"
7	Колинъ	Колинъ	PROPN	_	Case=Nom|Gender=Masc|NameType=Sur|Number=Sing	6	flat:name	_	wf="Колинъ"|SpaceAfter=No
8	:	:	PUNCT	_	_	10	punct	_	_
9	и	и	CCONJ	_	_	10	cc	_	wf="и"
10	солоныи	солоный	ADJ	_	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	6	amod	_	wf="солоныи"|SpaceAfter=No
11	,	,	PUNCT	_	_	13	punct	_	_
12	и	и	CCONJ	_	_	13	cc	_	wf="и"
13	серебреныи	серебреный	ADJ	_	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	10	conj	_	wf="серебреныи"|SpaceAfter=No
14	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
1	А	а	CCONJ	_	_	7	cc	_	wf="А"
2	ко	къ	ADP	_	_	4	case	_	wf="ко"
3	реченому	рещи	VERB	_	Case=Dat|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	4	amod	_	wf="реченому"
4	дни	день	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	7	obl	_	wf="дни"
5	ему	онъ	PRON	_	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	det	_	wf="ему"
6	опѧть	опять	ADV	_	Degree=Pos	7	advmod	_	wf="опѧть"
7	быти	быти	VERB	_	VerbForm=Inf|Voice=Act	0	root	_	wf="быти"|SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


