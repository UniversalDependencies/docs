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
Average distance between parent and child is 1.05.

The following 10 pairs of parts of speech are connected with `nmod:comp`: <tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt> (4; 20% instances), <tt><a href="ug_udt-pos-VERB.html">VERB</a></tt>-<tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt> (4; 20% instances), <tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ug_udt-pos-VERB.html">VERB</a></tt> (3; 15% instances), <tt><a href="ug_udt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt> (2; 10% instances), <tt><a href="ug_udt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ug_udt-pos-PRON.html">PRON</a></tt> (2; 10% instances), <tt><a href="ug_udt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ug_udt-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="ug_udt-pos-ADP.html">ADP</a></tt>-<tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ug_udt-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ug_udt-pos-X.html">X</a></tt> (1; 5% instances), <tt><a href="ug_udt-pos-VERB.html">VERB</a></tt>-<tt><a href="ug_udt-pos-PRON.html">PRON</a></tt> (1; 5% instances).


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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nmod:comp	color:blue
1	_	_	PUNCT	Y	_	10	punct	_	Translit=_|Morf=Unknown
2	_	_	PUNCT	Y	_	10	punct	_	Translit=_|Morf=Unknown
3	دېڭىز	دېڭىز	NOUN	N	Case=Nom	4	nmod:poss	_	Translit=dëngiz
4	بويىغا	بوي	NOUN	N	Case=Dat|Number[psor]=Plur,Sing|Person[psor]=3	7	obl	_	Translit=boyigha
5	ئاتلىق	ئاتلىق	NOUN	A	Case=Nom	6	amod	_	Translit=atliq
6	ساياھەتكە	ساياھەت	NOUN	N	Case=Dat	7	obl	_	Translit=sayahetke
7	كېلىشتىن	كەل	VERB	V	Case=Abl|VerbForm=Ger	8	nmod:comp	_	Translit=këlishtin
8	ئارتۇق	ئارتۇق	NOUN	A	Case=Nom	9	amod	_	Translit=artuq
9	ھاماقەتلىك	_	NOUN	N	_	10	nsubj	_	Translit=hamaqetlik|Morf=Missing,1
10	يوق	يوق	ADJ	A	_	13	ccomp	_	SpaceAfter=No|Translit=yoq
11	،	،	PUNCT	Y	_	10	punct	_	Translit=,
12	-	-	PUNCT	Y	_	10	punct	_	Translit=-
13	دېدى	دې	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Translit=dëdi
14	ئۈچىنچىسى	ئۈچىنچى	NOUN	N	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	13	nsubj	_	SpaceAfter=No|Translit=üchinchisi
15	.	.	PUNCT	Y	_	14	punct	_	Translit=.

~~~


