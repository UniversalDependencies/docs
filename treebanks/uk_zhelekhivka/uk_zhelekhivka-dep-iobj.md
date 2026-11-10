---
layout: base
title:  'Statistics of iobj in UD_Ukrainian-Zhelekhivka'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-Zhelekhivka: Relations: `iobj`

This relation is universal.

47 nodes (1%) are attached to their parents as `iobj`.

36 instances of `iobj` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.70212765957447.

The following 6 pairs of parts of speech are connected with `iobj`: <tt><a href="uk_zhelekhivka-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_zhelekhivka-pos-PRON.html">PRON</a></tt> (26; 55% instances), <tt><a href="uk_zhelekhivka-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt> (10; 21% instances), <tt><a href="uk_zhelekhivka-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_zhelekhivka-pos-PRON.html">PRON</a></tt> (4; 9% instances), <tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_zhelekhivka-pos-PRON.html">PRON</a></tt> (3; 6% instances), <tt><a href="uk_zhelekhivka-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_zhelekhivka-pos-PROPN.html">PROPN</a></tt> (3; 6% instances), <tt><a href="uk_zhelekhivka-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_zhelekhivka-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 iobj	color:blue
1	Мусимо	мусити	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	TokenRange=10828:10834
2	у	у	ADP	ADP	Case=Loc	4	case	_	TokenRange=10835:10836
3	всякій	всякий	DET	DET	Case=Loc|Gender=Fem|Number=Sing|PronType=Tot	4	det	_	TokenRange=10837:10843
4	ситуації	ситуація	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	1	obl	_	TokenRange=10844:10852
5	здавати	здавати	VERB	VERB	Aspect=Imp|VerbForm=Inf	1	xcomp	_	TokenRange=10853:10860
6	собі	себе	PRON	PRON	Case=Dat|PronType=Prs|Reflex=Yes	5	iobj	_	TokenRange=10861:10865
7	справу	справа	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	5	obj	_	TokenRange=10866:10872
8	з	з	ADP	ADP	Case=Gen	9	case	_	TokenRange=10873:10874
9	того	те	PRON	PRON	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	7	nmod	_	SpaceAfter=No|TokenRange=10875:10879
10	,	,	PUNCT	PUNCT	_	17	punct	_	TokenRange=10879:10880
11	що	що	SCONJ	SCONJ	_	17	mark	_	TokenRange=10881:10883
12	нам	ми	PRON	PRON	Animacy=Anim|Case=Dat|Number=Plur|Person=1|PronType=Prs	17	iobj	_	TokenRange=10884:10887
13	попри	попри	ADP	ADP	Case=Acc	14	case	_	TokenRange=10888:10893
14	науку	наука	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	17	obl	_	TokenRange=10894:10899
15	і	і	CCONJ	CCONJ	_	16	cc	_	TokenRange=10900:10901
16	теорію	теорія	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	14	conj	_	TokenRange=10902:10908
17	треба	треба	ADV	ADV	_	9	acl	_	TokenRange=10909:10914
18	"	"	PUNCT	PUNCT	_	19	punct	_	SpaceAfter=No|TokenRange=10915:10916
19	діла	діло	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	17	obj	_	TokenRange=10916:10920
20	і	і	CCONJ	CCONJ	_	23	cc	_	TokenRange=10921:10922
21	ще	ще	ADV	ADV	_	22	advmod	_	TokenRange=10923:10925
22	раз	раз	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	23	obl	_	TokenRange=10926:10929
23	діла	діло	NOUN	VERB	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	19	conj	_	SpaceAfter=No|TokenRange=10930:10934
24	"	"	PUNCT	PUNCT	_	19	punct	_	SpaceAfter=No|TokenRange=10934:10935
25	.	.	PUNCT	PUNCT	_	1	punct	_	TokenRange=10935:10936

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 iobj	color:blue
1	що	що	PRON	PRON	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Int	3	obj	_	TokenRange=141:143
2	він	він	PRON	PRON	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	TokenRange=144:147
3	дасть	дати	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	TokenRange=148:153
4	людям	людина	NOUN	NOUN	Animacy=Anim|Case=Dat|Gender=Fem|Number=Plur	3	iobj	_	SpaceAfter=No|TokenRange=154:159
5	?	?	PUNCT	PUNCT	_	3	punct	_	TokenRange=159:160

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 iobj	color:blue
1	Так	так	PART	PART	_	0	root	_	SpaceAfter=No|TokenRange=7016:7019
2	,	,	PUNCT	PUNCT	_	1	punct	_	TokenRange=7019:7020
3	справді	справді	ADV	ADV	_	1	parataxis	_	TokenRange=7021:7028
4	"	"	PUNCT	PUNCT	_	6	punct	_	SpaceAfter=No|TokenRange=7029:7030
5	нам	ми	PRON	PRON	Animacy=Anim|Case=Dat|Number=Plur|Person=1|PronType=Prs	6	iobj	_	TokenRange=7030:7033
6	треба	треба	ADV	ADV	_	1	parataxis	_	TokenRange=7034:7039
7	засіяти	засіяти	VERB	VERB	Aspect=Perf|VerbForm=Inf	6	csubj	_	TokenRange=7040:7047
8	наукою	наука	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	7	obl	_	TokenRange=7048:7054
9	і	і	CCONJ	CCONJ	_	10	cc	_	TokenRange=7055:7056
10	ділами	діла	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Neut|Number=Plur	8	conj	_	SpaceAfter=No|TokenRange=7057:7063
11	!	!	PUNCT	PUNCT	_	6	punct	_	SpaceAfter=No|TokenRange=7063:7064
12	"	"	PUNCT	PUNCT	_	6	punct	_	TokenRange=7064:7065

~~~


