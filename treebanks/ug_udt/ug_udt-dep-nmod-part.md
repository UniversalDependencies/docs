---
layout: base
title:  'Statistics of nmod:part in UD_Uyghur-UDT'
udver: '2'
---

## Treebank Statistics: UD_Uyghur-UDT: Relations: `nmod:part`

This relation is a language-specific subtype of <tt><a href="ug_udt-dep-nmod.html">nmod</a></tt>.
There are also 4 other language-specific subtypes of `nmod`: <tt><a href="ug_udt-dep-nmod-cau.html">nmod:cau</a></tt>, <tt><a href="ug_udt-dep-nmod-comp.html">nmod:comp</a></tt>, <tt><a href="ug_udt-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="ug_udt-dep-nmod-tmod.html">nmod:tmod</a></tt>.

6 nodes (0%) are attached to their parents as `nmod:part`.

6 instances of `nmod:part` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16666666666667.

The following 3 pairs of parts of speech are connected with `nmod:part`: <tt><a href="ug_udt-pos-PRON.html">PRON</a></tt>-<tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt> (3; 50% instances), <tt><a href="ug_udt-pos-NUM.html">NUM</a></tt>-<tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt> (2; 33% instances), <tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:part	color:blue
1	شۇنىڭ	_	CCONJ	C	_	7	cc	_	Translit=shuning|Morf=Missing,1
2	بىلەن	بىلەن	ADP	C	_	1	fixed	_	Translit=bilen
3	ھاشارەتلەرنىڭ	ھاشارەت	NOUN	N	Case=Gen|Number=Plur	4	nmod:part	_	Translit=hasharetlerning
4	ھەممىسى	_	PRON	P	_	7	nsubj	_	Translit=hemmisi|Morf=Unknown
5	دېگۈدەك	دېگۈدەك	NOUN	V	Case=Nom	7	obl	_	Translit=dëgüdek
6	توڭلاپ	_	VERB	V	_	7	advmod	_	Translit=tonglap|Morf=Unknown
7	ئۆلۈپ	ئۆل	VERB	V	Aspect=Perf|VerbForm=Inf	0	root	_	Translit=ölüp
8	كەتتى	كەت	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	aux	_	SpaceAfter=No|Translit=ketti
9	.	.	PUNCT	Y	_	8	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:part	color:blue
1	بىر	بىر	NUM	M	_	2	nummod	_	Translit=bir
2	يىلى	يىل	NOUN	N	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	20	nmod:tmod	_	Translit=yili
3	باھار	باھار	NOUN	N	Case=Nom	4	nmod:poss	_	Translit=bahar
4	كۈنلىرىنىڭ	كۈن	NOUN	N	Case=Gen|Number=Plur|Number[psor]=Plur,Sing|Person[psor]=3	5	nmod:part	_	Translit=künlirining
5	بىرىدە	_	NUM	M	_	20	nmod:tmod	_	SpaceAfter=No|Translit=biride|Morf=Unknown
6	،	،	PUNCT	Y	_	5	punct	_	Translit=,
7	شىۋېتسارىيىنىڭ	_	NOUN	N	_	9	nmod:poss	_	Translit=shiwëtsariyining|Morf=Unknown
8	بىر	بىر	DET	M	Case=Nom|NumType=Ord	9	det	_	Translit=bir
9	ۋوگزالىدا	_	NOUN	N	_	20	obl	_	Translit=wogzalida|Morf=Unknown
10	ھاۋا	ھاۋا	NOUN	N	Case=Nom	11	compound	_	Translit=hawa
11	تەڭشىگۈچ	تەڭشىگۈچ	NOUN	N	Case=Nom	12	nsubj	_	Translit=tengshigüch
12	ئورنىتىلغان	_	NOUN	N	_	17	amod	_	Translit=ornitilghan|Morf=Unknown
13	چىرايلىق	چىرايلىق	ADJ	A	_	17	amod	_	SpaceAfter=No|Translit=chirayliq
14	،	،	PUNCT	Y	_	13	punct	_	Translit=,
15	ئازادە	ئازادە	ADJ	A	Case=Nom	13	conj	_	Translit=azade
16	بىر	بىر	DET	M	Case=Nom|NumType=Ord	17	det	_	Translit=bir
17	پويىز	پويىز	NOUN	N	Case=Nom	20	nsubj	_	Translit=poyiz
18	قوزغىلىش	_	VERB	V	_	19	nmod:poss	_	Translit=qozghilish|Morf=Unknown
19	ئالدىدا	ئالد	NOUN	N	Case=Loc|Number[psor]=Plur,Sing|Person[psor]=3	20	obl	_	Translit=aldida
20	تۇراتتى	_	VERB	V	_	0	root	_	SpaceAfter=No|Translit=turatti|Morf=Unknown
21	.	.	PUNCT	Y	_	20	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nmod:part	color:blue
1	بۇ	بۇ	PRON	P	Case=Nom|PronType=Dem	7	nsubj	_	Translit=bu
2	مىلادىيە	مىلادىيە	NOUN	N	Case=Nom	5	nmod:poss	_	Translit=miladiye
3	1025	1025	NUM	M	NumType=Ord	5	nummod	_	Translit=1025
4	-	-	PUNCT	Y	_	3	punct	_	Translit=-
5	يىلنىڭ	يىل	NOUN	N	Case=Gen	7	nmod:part	_	Translit=yilning
6	ئەتىياز	ئەتىياز	NOUN	N	Case=Nom	7	compound	_	Translit=etiyaz
7	كۈنلىرى	كۈن	NOUN	N	Case=Nom|Number=Plur|Number[psor]=Plur,Sing|Person[psor]=3	0	root	_	Translit=künliri
8	ئىدى	ئى	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	cop	_	SpaceAfter=No|Translit=idi
9	.	.	PUNCT	Y	_	8	punct	_	Translit=.

~~~


