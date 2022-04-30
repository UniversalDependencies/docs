---
layout: base
title:  'Statistics of nmod:npmod in UD_Armenian-BSUT'
udver: '2'
---

## Treebank Statistics: UD_Armenian-BSUT: Relations: `nmod:npmod`

This relation is a language-specific subtype of <tt><a href="hy_bsut-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="hy_bsut-dep-nmod-poss.html">nmod:poss</a></tt>.

28 nodes (1%) are attached to their parents as `nmod:npmod`.

22 instances of `nmod:npmod` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.60714285714286.

The following 6 pairs of parts of speech are connected with `nmod:npmod`: <tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt> (16; 57% instances), <tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_bsut-pos-PROPN.html">PROPN</a></tt> (8; 29% instances), <tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_bsut-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_bsut-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="hy_bsut-pos-PRON.html">PRON</a></tt>-<tt><a href="hy_bsut-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="hy_bsut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nmod:npmod	color:blue
1	Իրանը	Իրան	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Def|NameType=Geo|Number=Sing	2	nsubj	_	Translit=Iranë|LTranslit=Iran
2	հաստատում	հաստատել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=hastatowm|LTranslit=hastatel
3	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	aux	_	Translit=ē|LTranslit=em
4	Հայաստանի	Հայաստան	PROPN	_	Animacy=Nhum|Case=Dat|Definite=Ind|NameType=Geo|Number=Sing	5	nmod:poss	_	Translit=Hayastani|LTranslit=Hayastan
5	տարածք	տարածք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	7	nmod:npmod	_	Translit=taraçk’|LTranslit=taraçk’
6	օտար	օտար	ADJ	_	Degree=Pos	7	amod	_	Translit=òtar|LTranslit=òtar
7	ներխուժման	ներխուժում	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	8	nmod:poss	_	Translit=nerxowžman|LTranslit=nerxowžowm
8	հավանականությունը	հավանականություն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	2	obj	_	Translit=havanakanowt’yownë|LTranslit=havanakanowt’yown

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nmod:npmod	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nmod:npmod	color:blue
1	Միքայել	Միքայել	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	0	root	_	Translit=Mik’ayel|LTranslit=Mik’ayel
2	Մինասյան	Մինասյան	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Sur|Number=Sing	1	flat:name	_	Translit=Minasyan|LTranslit=Minasyan|SpaceAfter=No
3	.	.	PUNCT	_	_	8	punct	_	Translit=.|LTranslit=.
4	Հանկարծակի	հանկարծակի	ADV	_	_	8	advmod:emph	_	Translit=Hankarçaki|LTranslit=hankarçaki
5	«	«	PUNCT	_	_	6	punct	_	Translit=«|LTranslit=«|SpaceAfter=No
6	օբյեկտիվ	օբյեկտիվ	ADJ	_	Degree=Pos	8	nmod:npmod	_	Translit=òbyektiv|LTranslit=òbyektiv|SpaceAfter=No
7	»	»	PUNCT	_	_	6	punct	_	Translit=»|LTranslit=»
8	դարձածը	դարձած	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	1	appos	_	Translit=darjaçë|LTranslit=darjaç

~~~


