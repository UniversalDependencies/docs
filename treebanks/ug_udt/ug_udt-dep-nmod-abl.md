---
layout: base
title:  'Statistics of nmod:abl in UD_Uyghur-UDT'
udver: '2'
---

## Treebank Statistics: UD_Uyghur-UDT: Relations: `nmod:abl`

This relation is a language-specific subtype of <tt><a href="ug_udt-dep-nmod.html">nmod</a></tt>.
There are also 8 other language-specific subtypes of `nmod`: <tt><a href="ug_udt-dep-nmod-cau.html">nmod:cau</a></tt>, <tt><a href="ug_udt-dep-nmod-clas.html">nmod:clas</a></tt>, <tt><a href="ug_udt-dep-nmod-comp.html">nmod:comp</a></tt>, <tt><a href="ug_udt-dep-nmod-ins.html">nmod:ins</a></tt>, <tt><a href="ug_udt-dep-nmod-part.html">nmod:part</a></tt>, <tt><a href="ug_udt-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="ug_udt-dep-nmod-ref.html">nmod:ref</a></tt>, <tt><a href="ug_udt-dep-nmod-tmod.html">nmod:tmod</a></tt>.

25 nodes (0%) are attached to their parents as `nmod:abl`.

24 instances of `nmod:abl` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.04.

The following 6 pairs of parts of speech are connected with `nmod:abl`: <tt><a href="ug_udt-pos-VERB.html">VERB</a></tt>-<tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt> (18; 72% instances), <tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt> (3; 12% instances), <tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ug_udt-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="ug_udt-pos-NUM.html">NUM</a></tt>-<tt><a href="ug_udt-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="ug_udt-pos-VERB.html">VERB</a></tt>-<tt><a href="ug_udt-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="ug_udt-pos-VERB.html">VERB</a></tt>-<tt><a href="ug_udt-pos-PRON.html">PRON</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 nmod:abl	color:blue
1	-	-	PUNCT	Y	_	2	punct	_	Translit=-
2	ئاڭلىشىمچە	_	VERB	V	_	9	advcl	_	SpaceAfter=No|Translit=anglishimche|Morf=Unknown
3	،	،	PUNCT	Y	_	2	punct	_	Translit=,
4	ئاسماندىن	ئاسمان	NOUN	N	Case=Abl	9	nmod:abl	_	Translit=asmandin
5	پات	پات	ADJ	V	_	7	compound:redup	_	Translit=pat
6	-	-	PUNCT	Y	_	5	punct	_	Translit=-
7	پات	پات	ADJ	D	Case=Nom	9	advmod	_	Translit=pat
8	مېتېئورىتلار	مېتېئورىت	NOUN	N	Case=Nom|Number=Plur	9	nsubj	_	Translit=mëtëoritlar
9	چۈشۈپ	چۈش	VERB	V	Aspect=Perf|VerbForm=Cov	0	root	_	Translit=chüshüp
10	تۇرىدىكەن	_	VERB	V	_	9	aux	_	SpaceAfter=No|Translit=turidiken|Morf=Unknown
11	،	،	PUNCT	Y	_	10	punct	_	Translit=,

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:abl	color:blue
1	نۇرغۇن	نۇرغۇن	NOUN	A	Case=Nom	4	amod	_	Translit=nurghun
2	دەل	دەل	ADV	D	_	4	compound:redup	_	Translit=del
3	-	-	PUNCT	Y	_	2	punct	_	Translit=-
4	دەرەخلەر	دەرەخ	NOUN	N	Case=Nom|Number=Plur	11	nsubj	_	Translit=derexler
5	مورىلاردىن	مورا	NOUN	N	Case=Abl|Number=Plur	6	nmod:abl	_	Translit=morilardin
6	كۆتۈرۈلۈۋاتقان	_	NOUN	N	_	8	acl	_	Translit=kötürülüwatqan|Morf=Unknown
7	ئىس	ئىس	NOUN	N	Case=Nom	8	compound:redup	_	Translit=is
8	تۈتەكلەر	تۈتەك	NOUN	N	Case=Nom|Number=Plur	11	case	_	Translit=tütekler
9	case	case	X	R	_	8	advmod	_	Translit=bilen
10	نەلەرگىدۇر	_	PRON	P	_	11	advmod	_	Translit=nelergidur|Morf=Unknown
11	غايىپ	_	NOUN	N	_	0	root	_	Translit=ghayip|Morf=Unknown
12	بوپتۇ	_	VERB	V	_	11	compound	_	SpaceAfter=No|Translit=boptu|Morf=Unknown
13	.	.	PUNCT	Y	_	12	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 13 nmod:abl	color:blue
1	ئۇ	ئۇ	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	case	_	Translit=u
2	ھالدا	ھال	NOUN	N	Case=Loc	23	advmod	_	Translit=halda
3	سەن	سەن	PRON	P	Case=Nom|Number=Sing|Person=2|PronType=Prs	23	nmod:poss	_	Translit=sen
4	ئاشۇ	ئاشۇ	PRON	P	Case=Nom|PronType=Dem	5	det	_	Translit=ashu
5	چۆچەكتىكى	چۆچەك	NOUN	N	Case=Nom	7	amod	_	Translit=chöchektiki
6	بىچارە	بىچارە	NOUN	A	Case=Nom	7	amod	_	Translit=bichare
7	قىزنىڭ	قىز	NOUN	N	Case=Gen	11	nsubj	_	Translit=qizning
8	بۈگۈنكى	بۈگۈنكى	NOUN	A	Case=Nom	9	amod	_	Translit=bügünki
9	زامان	زامان	NOUN	N	Case=Nom	10	nmod	_	Translit=zaman
10	رېئاللىقىدىكى	رېئاللىق	NOUN	N	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	11	amod	_	Translit=rëalliqidiki
11	ئۆزۈڭ	ئۆز	PRON	P	Case=Nom|Number[psor]=Sing|Person[psor]=2|Reflex=Yes	23	obj	_	SpaceAfter=No|Translit=özüng
12	،	،	PUNCT	Y	_	11	punct	_	Translit=,
13	ھېلىقى	_	PRON	P	_	18	nmod:abl	_	Translit=hëliqi|Morf=Unknown
14	قان	قان	NOUN	N	Case=Nom	15	compound	_	Translit=qan
15	شورىغۇچ	_	NOUN	N	_	18	acl	_	Translit=shorighuch|Morf=Unknown
16	يەتتە	يەتتە	NUM	M	_	17	nummod	_	Translit=yette
17	باشلىق	باشلىق	ADJ	R	Case=Nom	18	nmod	_	Translit=bashliq
18	يالماۋۇزنىڭ	_	NOUN	N	_	19	nmod:poss	_	Translit=yalmawuzning|Morf=Unknown
19	مەن	مەن	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	11	conj	_	Translit=men
20	ئىكەنلىكىمنى	_	AUX	V	_	19	cop	_	Translit=ikenlikimni|Morf=Unknown
21	شەكسىز	شەكسىز	ADV	V	_	23	advmod	_	Translit=sheksiz
22	ھېس	ھېس	NOUN	N	Case=Nom	23	compound	_	Translit=hës
23	قىلىۋالالايسەن	_	VERB	V	_	0	root	_	SpaceAfter=No|Translit=qiliwalalaysen|Morf=Unknown
24	.	.	PUNCT	Y	_	23	punct	_	Translit=.

~~~


