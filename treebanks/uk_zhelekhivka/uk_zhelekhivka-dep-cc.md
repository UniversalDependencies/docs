---
layout: base
title:  'Statistics of cc in UD_Ukrainian-Zhelekhivka'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-Zhelekhivka: Relations: `cc`

This relation is universal.

417 nodes (4%) are attached to their parents as `cc`.

417 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.92086330935252.

The following 12 pairs of parts of speech are connected with `cc`: <tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_zhelekhivka-pos-CCONJ.html">CCONJ</a></tt> (151; 36% instances), <tt><a href="uk_zhelekhivka-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_zhelekhivka-pos-CCONJ.html">CCONJ</a></tt> (130; 31% instances), <tt><a href="uk_zhelekhivka-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_zhelekhivka-pos-CCONJ.html">CCONJ</a></tt> (46; 11% instances), <tt><a href="uk_zhelekhivka-pos-PROPN.html">PROPN</a></tt>-<tt><a href="uk_zhelekhivka-pos-CCONJ.html">CCONJ</a></tt> (42; 10% instances), <tt><a href="uk_zhelekhivka-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_zhelekhivka-pos-CCONJ.html">CCONJ</a></tt> (31; 7% instances), <tt><a href="uk_zhelekhivka-pos-PRON.html">PRON</a></tt>-<tt><a href="uk_zhelekhivka-pos-CCONJ.html">CCONJ</a></tt> (7; 2% instances), <tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_zhelekhivka-pos-PART.html">PART</a></tt> (4; 1% instances), <tt><a href="uk_zhelekhivka-pos-DET.html">DET</a></tt>-<tt><a href="uk_zhelekhivka-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="uk_zhelekhivka-pos-AUX.html">AUX</a></tt>-<tt><a href="uk_zhelekhivka-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_zhelekhivka-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="uk_zhelekhivka-pos-NUM.html">NUM</a></tt>-<tt><a href="uk_zhelekhivka-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="uk_zhelekhivka-pos-PROPN.html">PROPN</a></tt>-<tt><a href="uk_zhelekhivka-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 cc	color:blue
1	Але	але	CCONJ	CCONJ	_	5	cc	_	TokenRange=17539:17542
2	про	про	ADP	ADP	Case=Acc	3	case	_	TokenRange=17543:17546
3	се	се	PRON	PRON	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	5	obl	_	TokenRange=17547:17549
4	буде	бути	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	5	cop	_	TokenRange=17550:17554
5	річ	річ	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	_	TokenRange=17555:17558
6	трохи	трохи	ADV	ADV	_	7	advmod	_	TokenRange=17559:17564
7	згодом	згодом	ADV	ADV	_	5	advmod	_	SpaceAfter=No|TokenRange=17565:17571
8	.	.	PUNCT	PUNCT	_	5	punct	_	TokenRange=17571:17572

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 cc	color:blue
1	Греки	грек	NOUN	NOUN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	TokenRange=3888:3893
2	кілько	кілька	DET	DET	Case=Acc|NumType=Card|PronType=Ind	3	det:numgov	_	TokenRange=3894:3900
3	віків	вік	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	4	obl	_	TokenRange=3901:3906
4	носили	носити	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	TokenRange=3907:3913
5	турецьке	турецький	ADJ	ADJ	Case=Acc|Gender=Neut|Number=Sing	6	amod	_	TokenRange=3914:3922
6	ярмо	ярмо	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	4	obj	_	SpaceAfter=No|TokenRange=3923:3927
7	,	,	PUNCT	PUNCT	_	10	punct	_	TokenRange=3927:3928
8	а	а	CCONJ	CCONJ	_	10	cc	_	TokenRange=3929:3930
9	таки	таки	PART	PART	_	10	discourse	_	TokenRange=3931:3935
10	скинули	скинути	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	4	conj	_	TokenRange=3936:3943
11	єго	воно	PRON	NOUN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	10	obj	_	SpaceAfter=No|TokenRange=3944:3947
12	.	.	PUNCT	PUNCT	_	4	punct	_	TokenRange=3947:3948

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 cc	color:blue
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


