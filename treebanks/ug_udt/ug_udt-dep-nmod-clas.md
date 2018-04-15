---
layout: base
title:  'Statistics of nmod:clas in UD_Uyghur-UDT'
udver: '2'
---

## Treebank Statistics: UD_Uyghur-UDT: Relations: `nmod:clas`

This relation is a language-specific subtype of <tt><a href="ug_udt-dep-nmod.html">nmod</a></tt>.
There are also 8 other language-specific subtypes of `nmod`: <tt><a href="ug_udt-dep-nmod-abl.html">nmod:abl</a></tt>, <tt><a href="ug_udt-dep-nmod-cau.html">nmod:cau</a></tt>, <tt><a href="ug_udt-dep-nmod-comp.html">nmod:comp</a></tt>, <tt><a href="ug_udt-dep-nmod-ins.html">nmod:ins</a></tt>, <tt><a href="ug_udt-dep-nmod-part.html">nmod:part</a></tt>, <tt><a href="ug_udt-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="ug_udt-dep-nmod-ref.html">nmod:ref</a></tt>, <tt><a href="ug_udt-dep-nmod-tmod.html">nmod:tmod</a></tt>.

55 nodes (0%) are attached to their parents as `nmod:clas`.

55 instances of `nmod:clas` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.58181818181818.

The following 7 pairs of parts of speech are connected with `nmod:clas`: <tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt> (45; 82% instances), <tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ug_udt-pos-ADJ.html">ADJ</a></tt> (4; 7% instances), <tt><a href="ug_udt-pos-VERB.html">VERB</a></tt>-<tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="ug_udt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ug_udt-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ug_udt-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ug_udt-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ug_udt-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nmod:clas	color:blue
1	توساتتىن	توساتتىن	ADV	D	_	10	advmod	_	Translit=tosattin
2	بىر	بىر	NUM	M	_	4	nummod	_	Translit=bir
3	قىزىل	قىزىل	ADJ	A	_	4	amod	_	Translit=qizil
4	شار	شار	NOUN	N	Case=Nom	10	nsubj	_	Translit=shar
5	لەيلەپ	_	VERB	V	_	9	advmod	_	SpaceAfter=No|Translit=leylep|Morf=Unknown
6	،	،	PUNCT	Y	_	5	punct	_	Translit=,
7	دېرىزە	دېرىزە	NOUN	N	Case=Nom	8	nmod:clas	_	Translit=dërize
8	ئالدىغا	ئالد	NOUN	N	Case=Dat|Number[psor]=Plur,Sing|Person[psor]=3	9	obl	_	Translit=aldigha
9	كېلىپ	كەل	VERB	V	Aspect=Perf|VerbForm=Conv	10	advcl	_	Translit=këlip
10	توختىدى	توختى	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No|Translit=toxtidi
11	.	.	PUNCT	Y	_	10	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:clas	color:blue
1	ھەر	ھەر	DET	P	_	2	det	_	Translit=her
2	ئىككىسى	ئىككى	NUM	M	Case=Nom|Number[psor]=Plur,Sing|NumType=Ord|Person[psor]=3	6	nsubj	_	Translit=ikkisi
3	ۋوگزال	_	ADJ	A	_	4	nmod:clas	_	Translit=wogzal|Morf=Missing,1
4	باشلىقىنىڭ	باشلىق	NOUN	N	Case=Gen|Number[psor]=Plur,Sing|Person[psor]=3	5	nmod:poss	_	Translit=bashliqining
5	ئۆيىدە	ئۆي	NOUN	N	Case=Loc|Number[psor]=Plur,Sing|Person[psor]=3	6	obl	_	Translit=öyide
6	تۇراتتى	_	VERB	V	_	0	root	_	SpaceAfter=No|Translit=turatti|Morf=Unknown
7	.	.	PUNCT	Y	_	6	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:clas	color:blue
1	مەن	مەن	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	Translit=men
2	بىر	بىر	NUM	M	_	4	nummod	_	Translit=bir
3	چوڭ	چوڭ	ADJ	A	_	4	amod	_	Translit=chong
4	پارنىك	_	NOUN	N	_	5	nmod:clas	_	Translit=parnik|Morf=Unknown
5	مودىلىنى	_	VERB	V	_	6	obj	_	Translit=modilini|Morf=Unknown
6	كۆردۈم	كۆر	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No|Translit=kördüm
7	.	.	PUNCT	Y	_	6	punct	_	Translit=.

~~~


