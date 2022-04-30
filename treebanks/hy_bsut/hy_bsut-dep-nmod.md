---
layout: base
title:  'Statistics of nmod in UD_Armenian-BSUT'
udver: '2'
---

## Treebank Statistics: UD_Armenian-BSUT: Relations: `nmod`

This relation is universal.
There are 2 language-specific subtypes of `nmod`: <tt><a href="hy_bsut-dep-nmod-npmod.html">nmod:npmod</a></tt>, <tt><a href="hy_bsut-dep-nmod-poss.html">nmod:poss</a></tt>.

38 nodes (1%) are attached to their parents as `nmod`.

38 instances of `nmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.44736842105263.

The following 5 pairs of parts of speech are connected with `nmod`: <tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt> (17; 45% instances), <tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_bsut-pos-PROPN.html">PROPN</a></tt> (12; 32% instances), <tt><a href="hy_bsut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt> (6; 16% instances), <tt><a href="hy_bsut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hy_bsut-pos-PROPN.html">PROPN</a></tt> (2; 5% instances), <tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_bsut-pos-X.html">X</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod	color:blue
1	Ռուս	ռուս	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	2	nmod	_	Translit=Ṙows|LTranslit=ṙows
2	փորձագետներն	փորձագետ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Plur	4	nsubj	_	Translit=p’orjagetnern|LTranslit=p’orjaget
3	էլ	էլ	ADV	_	_	2	advmod:emph	_	Translit=ēl|LTranslit=ēl
4	ասում	ասել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=asowm|LTranslit=asel
5	են	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	aux	_	Translit=en|LTranslit=em|SpaceAfter=No
6	,	,	PUNCT	_	_	11	punct	_	Translit=,|LTranslit=,
7	որ	որ	SCONJ	_	_	11	mark	_	Translit=or|LTranslit=or
8	Մոսկվան	Մոսկվա	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Def|NameType=Geo|Number=Sing	11	nsubj	_	Translit=Moskvan|LTranslit=Moskva
9	նույն	նույն	DET	_	Deixis=Remt|PronType=Dem	10	det	_	Translit=nowyn|LTranslit=nowyn
10	ձևաչափում	ձևաչափ	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Sing	11	obl	_	Translit=jewačap’owm|LTranslit=jewačap’
11	կարող	կարող	ADJ	_	Degree=Pos	4	ccomp	_	Translit=karoġ|LTranslit=karoġ
12	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	11	cop	_	Translit=ē|LTranslit=em
13	բարձրացնել	բարձրացնել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	11	xcomp	_	Translit=barjrac’nel|LTranslit=barjrac’nel
14	Ղարաբաղի	Ղարաբաղ	PROPN	_	Animacy=Nhum|Case=Dat|Definite=Ind|NameType=Geo|Number=Sing	15	nmod:poss	_	Translit=Ġarabaġi|LTranslit=Ġarabaġ
15	կարգավիճակի	կարգավիճակ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	16	nmod:poss	_	Translit=kargavič̣aki|LTranslit=kargavič̣ak
16	հարցը	հարց	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	13	obj	_	Translit=harc’ë|LTranslit=harc’|SpaceAfter=No
17	։	։	PUNCT	_	_	4	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nmod	color:blue
1	Սոչիում	Սոչի	PROPN	_	Animacy=Nhum|Case=Loc|Definite=Ind|NameType=Geo|Number=Sing	5	nmod:npmod	_	Translit=Sočiowm|LTranslit=Soči
2	Պուտին	Պուտին	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Sur|Number=Sing	5	nmod	_	Translit=Powtin|LTranslit=Powtin|SpaceAfter=No
3	-	-	PUNCT	_	_	4	punct	_	Translit=-|LTranslit=-|SpaceAfter=No
4	Էրդողան	Էրդողան	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Ind|NameType=Sur|Number=Sing	2	flat:range	_	Translit=Ērdoġan|LTranslit=Ērdoġan
5	համաձայնությունները	համաձայնություն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	10	nsubj	_	Translit=hamajaynowt’yownnerë|LTranslit=hamajaynowt’yown
6	Իրանի	Իրան	PROPN	_	Animacy=Nhum|Case=Dat|Definite=Ind|NameType=Geo|Number=Sing	10	obl	_	Translit=Irani|LTranslit=Iran
7	մոտ	մոտ	ADP	_	AdpType=Post	6	case	_	Translit=mot|LTranslit=mot
8	կասկածներ	կասկած	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Plur	10	obj	_	Translit=kaskaçner|LTranslit=kaskaç
9	չեն	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	10	aux	_	Translit=čen|LTranslit=em
10	թողել	թողնել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=t’oġel|LTranslit=t’oġnel|SpaceAfter=No
11	։	։	PUNCT	_	_	10	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod	color:blue
1	Ռուսաստանի	Ռուսաստան	PROPN	_	Animacy=Nhum|Case=Dat|Definite=Ind|NameType=Geo|Number=Sing	3	nmod:poss	_	Translit=Ṙowsastani|LTranslit=Ṙowsastan
2	պաշտպանության	պաշտպանություն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	3	nmod:poss	_	Translit=paštpanowt’yan|LTranslit=paštpanowt’yown
3	փոխնարար	փոխնարար	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	4	nmod	_	Translit=p’oxnarar|LTranslit=p’oxnarar
4	Բուլգակովը	Բուլգակով	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Sur|Number=Sing	5	nsubj	_	Translit=Bowlgakovë|LTranslit=Bowlgakov
5	այցելել	այցելել	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	Translit=ayc’elel|LTranslit=ayc’elel
6	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	aux	_	Translit=ē|LTranslit=em
7	Ղարաբաղ	Ղարաբաղ	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Ind|NameType=Geo|Number=Sing	5	obl	_	Translit=Ġarabaġ|LTranslit=Ġarabaġ|SpaceAfter=No
8	։	։	PUNCT	_	_	5	punct	_	Translit=.|LTranslit=.

~~~


