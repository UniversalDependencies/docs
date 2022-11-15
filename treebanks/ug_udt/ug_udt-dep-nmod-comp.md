---
layout: base
title:  'Statistics of nmod:comp in UD_Uyghur-UDT'
udver: '2'
---

## Treebank Statistics: UD_Uyghur-UDT: Relations: `nmod:comp`

This relation is a language-specific subtype of <tt><a href="ug_udt-dep-nmod.html">nmod</a></tt>.
There are also 4 other language-specific subtypes of `nmod`: <tt><a href="ug_udt-dep-nmod-cau.html">nmod:cau</a></tt>, <tt><a href="ug_udt-dep-nmod-part.html">nmod:part</a></tt>, <tt><a href="ug_udt-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="ug_udt-dep-nmod-tmod.html">nmod:tmod</a></tt>.

20 nodes (0%) are attached to their parents as `nmod:comp`.

20 instances of `nmod:comp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.15.

The following 9 pairs of parts of speech are connected with `nmod:comp`: <tt><a href="ug_udt-pos-VERB.html">VERB</a></tt>-<tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt> (5; 25% instances), <tt><a href="ug_udt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt> (3; 15% instances), <tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt> (3; 15% instances), <tt><a href="ug_udt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ug_udt-pos-PRON.html">PRON</a></tt> (2; 10% instances), <tt><a href="ug_udt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ug_udt-pos-VERB.html">VERB</a></tt> (2; 10% instances), <tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ug_udt-pos-VERB.html">VERB</a></tt> (2; 10% instances), <tt><a href="ug_udt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ug_udt-pos-X.html">X</a></tt> (1; 5% instances), <tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ug_udt-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="ug_udt-pos-VERB.html">VERB</a></tt>-<tt><a href="ug_udt-pos-PRON.html">PRON</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:comp	color:blue
1	ئادەمدىن	ئادەم	NOUN	N	Case=Abl	2	nmod:comp	_	Translit=ademdin
2	قالسا	قال	VERB	V	Mood=Cnd|Number=Plur|Person=3|VerbForm=Conv	5	advcl	_	Translit=qalsa
3	بۆرە	بۆرە	NOUN	N	Case=Nom	5	nsubj	_	Translit=böre
4	پاراسەتلىك	پاراسەتلىك	ADJ	A	_	5	amod	_	Translit=parasetlik
5	مەخلۇق	مەخلۇق	NOUN	N	Case=Nom	0	root	_	SpaceAfter=No|Translit=mexluq
6	.	.	PUNCT	Y	_	5	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:comp	color:blue
1	گاھى	_	VERB	V	_	2	acl	_	Translit=gahi|Morf=Unknown
2	چاغلاردا	چاغ	NOUN	N	Case=Loc|Number=Plur	18	nmod:tmod	_	SpaceAfter=No|Translit=chaghlarda
3	،	،	PUNCT	Y	_	2	punct	_	Translit=,
4	بويىدىن	بوي	NOUN	N	Case=Abl|Number[psor]=Plur,Sing|Person[psor]=3	5	nmod:comp	_	Translit=boyidin
5	ئېگىز	ئېگىز	ADJ	A	Case=Nom	6	amod	_	Translit=ëgiz
6	سازلارنى	ساز	NOUN	N	Case=Acc|Number=Plur	8	obj	_	Translit=sazlarni
7	قولىغا	قول	NOUN	N	Case=Dat|Number[psor]=Plur,Sing|Person[psor]=3	8	obl	_	Translit=qoligha
8	ئېلىۋېلىپ	_	VERB	V	_	18	advcl	_	SpaceAfter=No|Translit=ëliwëlip|Morf=Unknown
9	،	،	PUNCT	Y	_	8	punct	_	Translit=,
10	تۇرۇپ	تۇر	VERB	V	Aspect=Perf|VerbForm=Conv	0	root	_	Translit=turup
11	زىل	زىل	ADJ	A	_	12	amod	_	Translit=zil
12	تارىلارنى	_	NOUN	N	_	13	obj	_	Translit=tarilarni|Morf=Unknown
13	تىرىڭشىتسا	_	VERB	V	_	10	conj	_	SpaceAfter=No|Translit=tiringshitsa|Morf=Unknown
14	،	،	PUNCT	Y	_	15	punct	_	Translit=,
15	تۇرۇپ	تۇر	VERB	V	Aspect=Perf|VerbForm=Conv	13	conj	_	Translit=turup
16	بوم	بوم	ADJ	A	Case=Nom	17	amod	_	Translit=bom
17	تارىلارنى	_	NOUN	N	_	18	obj	_	Translit=tarilarni|Morf=Unknown
18	تىرىڭشىتاتتى	_	VERB	V	_	15	conj	_	SpaceAfter=No|Translit=tiringshitatti|Morf=Unknown
19	.	.	PUNCT	Y	_	13	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:comp	color:blue
1	چۈنكى	چۈنكى	SCONJ	C	_	6	mark	_	Translit=chünki
2	سەن	سەن	PRON	P	Case=Nom|Number=Sing|Person=2|PronType=Prs	6	nsubj	_	Translit=sen
3	ئۆزۈڭدىن	_	NOUN	N	_	4	nmod:comp	_	Translit=özüngdin|Morf=Missing,1
4	ئاجىزلارنى	ئاجىز	NOUN	N	Case=Acc|Number=Plur	6	obj	_	Translit=ajizlarni
5	قوغدىيالايدىغان	_	VERB	V	_	6	compound:lvc	_	Translit=qoghdiyalaydighan|Morf=Unknown
6	بولدۇڭ	بول	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin	9	ccomp	_	SpaceAfter=No|Translit=boldung
7	!	!	PUNCT	V	_	6	punct	_	Translit=!
8	_	_	PUNCT	Y	_	6	punct	_	Translit=_|Morf=Unknown
9	دېدى	دې	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Translit=dëdi
10	ئانا	ئانا	NOUN	N	Case=Nom	9	nsubj	_	Translit=ana
11	كۈلۈپ	_	X	Y	_	9	advcl	_	Translit=külüp|Morf=Unknown

~~~


