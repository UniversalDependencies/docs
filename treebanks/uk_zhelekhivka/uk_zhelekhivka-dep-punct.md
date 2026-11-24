---
layout: base
title:  'Statistics of punct in UD_Ukrainian-Zhelekhivka'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-Zhelekhivka: Relations: `punct`

This relation is universal.

1527 nodes (16%) are attached to their parents as `punct`.

902 instances of `punct` (59%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.02030124426981.

The following 14 pairs of parts of speech are connected with `punct`: <tt><a href="uk_zhelekhivka-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_zhelekhivka-pos-PUNCT.html">PUNCT</a></tt> (698; 46% instances), <tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_zhelekhivka-pos-PUNCT.html">PUNCT</a></tt> (422; 28% instances), <tt><a href="uk_zhelekhivka-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_zhelekhivka-pos-PUNCT.html">PUNCT</a></tt> (189; 12% instances), <tt><a href="uk_zhelekhivka-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_zhelekhivka-pos-PUNCT.html">PUNCT</a></tt> (105; 7% instances), <tt><a href="uk_zhelekhivka-pos-PROPN.html">PROPN</a></tt>-<tt><a href="uk_zhelekhivka-pos-PUNCT.html">PUNCT</a></tt> (58; 4% instances), <tt><a href="uk_zhelekhivka-pos-X.html">X</a></tt>-<tt><a href="uk_zhelekhivka-pos-PUNCT.html">PUNCT</a></tt> (15; 1% instances), <tt><a href="uk_zhelekhivka-pos-PRON.html">PRON</a></tt>-<tt><a href="uk_zhelekhivka-pos-PUNCT.html">PUNCT</a></tt> (13; 1% instances), <tt><a href="uk_zhelekhivka-pos-PART.html">PART</a></tt>-<tt><a href="uk_zhelekhivka-pos-PUNCT.html">PUNCT</a></tt> (11; 1% instances), <tt><a href="uk_zhelekhivka-pos-AUX.html">AUX</a></tt>-<tt><a href="uk_zhelekhivka-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances), <tt><a href="uk_zhelekhivka-pos-INTJ.html">INTJ</a></tt>-<tt><a href="uk_zhelekhivka-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances), <tt><a href="uk_zhelekhivka-pos-DET.html">DET</a></tt>-<tt><a href="uk_zhelekhivka-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), <tt><a href="uk_zhelekhivka-pos-ADP.html">ADP</a></tt>-<tt><a href="uk_zhelekhivka-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="uk_zhelekhivka-pos-NUM.html">NUM</a></tt>-<tt><a href="uk_zhelekhivka-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="uk_zhelekhivka-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="uk_zhelekhivka-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 punct	color:blue
1	що	що	PRON	PRON	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Int	3	obj	_	TokenRange=141:143
2	він	він	PRON	PRON	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	TokenRange=144:147
3	дасть	дати	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	TokenRange=148:153
4	людям	людина	NOUN	NOUN	Animacy=Anim|Case=Dat|Gender=Fem|Number=Plur	3	iobj	_	SpaceAfter=No|TokenRange=154:159
5	?	?	PUNCT	PUNCT	_	3	punct	_	TokenRange=159:160

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 punct	color:blue
1	Віщовання	віщування	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	0	root	_	TokenRange=0:9
2	про	про	ADP	ADP	Case=Acc	4	case	_	TokenRange=10:13
3	XX.	XX.	ADJ	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	amod	_	_
4	вік	вік	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	1	nmod	_	SpaceAfter=No|TokenRange=18:21
5	.	.	PUNCT	PUNCT	_	1	punct	_	SpacesAfter=\r\n|TokenRange=21:22

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 punct	color:blue
1	І	і	CCONJ	CCONJ	_	7	cc	_	TokenRange=4180:4181
2	Ельзас	Ельзас	PROPN	PROPN	Animacy=Inan|Case=Nom|Gender=Masc|NameType=Geo|Number=Sing	7	nsubj	_	NameType=Geo|TokenRange=4182:4188
3	і	і	CCONJ	CCONJ	_	4	cc	_	TokenRange=4189:4190
4	Льотаринґія	Лотарингія	PROPN	PROPN	Animacy=Inan|Case=Nom|Gender=Fem|NameType=Geo|Number=Sing	2	conj	_	NameType=Geo|TokenRange=4191:4202
5	наостанку	наостанку	ADV	ADV	_	7	advmod	_	TokenRange=4203:4212
6	будуть	бути	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	7	cop	_	TokenRange=4213:4219
7	вольними	вольний	ADJ	ADJ	Case=Ins|Degree=Pos|Number=Plur	0	root	_	SpaceAfter=No|TokenRange=4220:4228
8	.	.	PUNCT	PUNCT	_	7	punct	_	SpaceAfter=No|TokenRange=4228:4229
9	»	»	PUNCT	PUNCT	_	7	punct	_	SpacesAfter=\r\n\r\n\s\r\n\r\n|TokenRange=4229:4230

~~~


