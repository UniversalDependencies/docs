---
layout: base
title:  'Statistics of nmod:ins in UD_Uyghur-UDT'
udver: '2'
---

## Treebank Statistics: UD_Uyghur-UDT: Relations: `nmod:ins`

This relation is a language-specific subtype of <tt><a href="ug_udt-dep-nmod.html">nmod</a></tt>.
There are also 8 other language-specific subtypes of `nmod`: <tt><a href="ug_udt-dep-nmod-abl.html">nmod:abl</a></tt>, <tt><a href="ug_udt-dep-nmod-cau.html">nmod:cau</a></tt>, <tt><a href="ug_udt-dep-nmod-clas.html">nmod:clas</a></tt>, <tt><a href="ug_udt-dep-nmod-comp.html">nmod:comp</a></tt>, <tt><a href="ug_udt-dep-nmod-part.html">nmod:part</a></tt>, <tt><a href="ug_udt-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="ug_udt-dep-nmod-ref.html">nmod:ref</a></tt>, <tt><a href="ug_udt-dep-nmod-tmod.html">nmod:tmod</a></tt>.

2 nodes (0%) are attached to their parents as `nmod:ins`.

2 instances of `nmod:ins` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.5.

The following 2 pairs of parts of speech are connected with `nmod:ins`: <tt><a href="ug_udt-pos-VERB.html">VERB</a></tt>-<tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="ug_udt-pos-VERB.html">VERB</a></tt>-<tt><a href="ug_udt-pos-PRON.html">PRON</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 nmod:ins	color:blue
1	ئوخشاش	ئوخشاش	ADJ	A	_	4	amod	_	Translit=oxshash
2	بىر	بىر	NUM	M	_	3	nummod	_	Translit=bir
3	ئېرىقتىكى	ئېرىق	NOUN	N	Case=Nom	4	amod	_	Translit=ëriqtiki
4	سۇ	سۇ	NOUN	N	Case=Nom	15	parataxis	_	SpaceAfter=No|Translit=su
5	،	،	PUNCT	Y	_	4	punct	_	Translit=,
6	بەزىلەر	بەزى	ADJ	P	Case=Nom|Number=Plur	15	nsubj	_	Translit=beziler
7	ئۇنى	ئۇ	PRON	P	Case=Acc|Number=Sing|Person=3|PronType=Prs	15	obj	_	Translit=uni
8	ئالتۇن	ئالتۇن	NOUN	N	Case=Nom	9	amod	_	Translit=altun
9	كاسىدا	كاسا	NOUN	V	Case=Loc	15	advcl	_	SpaceAfter=No|Translit=kasida
10	،	،	PUNCT	Y	_	9	punct	_	Translit=,
11	بەزىلەر	بەزى	ADJ	P	Case=Nom|Number=Plur	15	nsubj	_	Translit=beziler
12	ساپال	ساپال	ADJ	N	_	13	amod	_	Translit=sapal
13	قاچىدا	_	NOUN	N	_	15	nmod:ins	_	Translit=qachida|Morf=Unknown
14	ئۇسۇپ	_	NOUN	N	_	15	advmod	_	Translit=usup|Morf=Missing,2
15	ئىچىدۇ	ئىچ	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Aor|VerbForm=Fin	0	root	_	SpaceAfter=No|Translit=ichidu
16	.	.	PUNCT	Y	_	15	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nmod:ins	color:blue
1	بىز	بىز	PRON	P	Case=Nom|Number=Plur|Person=1|PronType=Prs	6	nmod:ins	_	Translit=biz
2	بىر	بىر	NUM	M	_	3	nummod	_	Translit=bir
3	نەچچەيلەن	_	NOUN	N	_	1	appos	_	Translit=nechcheylen|Morf=Unknown
4	پاختىلىق	_	ADJ	A	_	5	amod	_	Translit=paxtiliq|Morf=Unknown
5	كىيملىرىمىزنى	_	NOUN	N	_	6	obj	_	Translit=kiymlirimizni|Morf=Unknown
6	سېلىۋىتىپ	_	VERB	V	_	10	advmod	_	SpaceAfter=No|Translit=sëliwitip|Morf=Unknown
7	،	،	PUNCT	Y	_	6	punct	_	Translit=,
8	دالىغا	دالا	NOUN	N	Case=Dat	10	obl	_	Translit=daligha
9	ئوقتەك	_	NOUN	N	_	10	advmod	_	Translit=oqtek|Morf=Unknown
10	ئېتىلدۇق	_	VERB	V	_	0	root	_	SpaceAfter=No|Translit=ëtilduq|Morf=Unknown
11	.	.	PUNCT	Y	_	10	punct	_	Translit=.

~~~


