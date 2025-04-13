---
layout: base
title:  'Statistics of nsubj:pass in UD_Georgian-GLC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GLC: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="ka_glc-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="ka_glc-dep-nsubj-outer.html">nsubj:outer</a></tt>.

180 nodes (0%) are attached to their parents as `nsubj:pass`.

98 instances of `nsubj:pass` (54%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.22777777777778.

The following 7 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="ka_glc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_glc-pos-NOUN.html">NOUN</a></tt> (147; 82% instances), <tt><a href="ka_glc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_glc-pos-PRON.html">PRON</a></tt> (23; 13% instances), <tt><a href="ka_glc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_glc-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="ka_glc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_glc-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="ka_glc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_glc-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="ka_glc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_glc-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ka_glc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_glc-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 nsubj:pass	color:blue
1	ნეოლითის	ნეოლითი	NOUN	Noun	Animacy=Inan|Case=Gen|Number=Sing	2	nmod	_	Translit=neolitʻis
2	ხანი	ხანი	NOUN	Noun	Animacy=Inan|Case=Ins|Number=Sing	4	obl	_	Translit=xani
3	დან	დან	ADP	Post	AdpType=Post|Case=Ins	2	case	_	Translit=dan
4	აღინიშნება	ინიშნება	VERB	Verb	Aspect=Perf|Mood=Ind|Number[subj]=Sing|Person[subj]=3|Subcat=Intr|Tense=Fut|Voice=Pass	0	root	_	Translit=aġinišneba
5	ადამიანის	ადამიანი	NOUN	Noun	Animacy=Anim|Case=Gen|Number=Sing	6	nmod	_	Translit=adamianis
6	არსებობა	არსებობა	NOUN	Noun	Animacy=Inan|Case=Nom|Number=Sing	4	nsubj:pass	_	Translit=arseboba
7	კავკასია	კავკასია	PROPN	Prop	Case=Dat|NameType=Geo|Number=Sing	6	obl	_	Translit=kavkasia
8	ში	ში	ADP	Post	AdpType=Post|Case=Dat	7	case	_	Translit=ši
9	.	.	PUNCT	F	PunctType=Peri	4	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:pass	color:blue
1	ამიტომ	ამიტომ	SCONJ	Conj	_	6	mark	_	Translit=amitom
2	იგი	იგი	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	6	nsubj:pass	_	Translit=igi
3	წინადადების	წინადადება	NOUN	Noun	Animacy=Inan|Case=Gen|Number=Sing	6	nmod	_	Translit=cinadadebis
4	მთავარ	მთავარი	ADJ	Adj	Case=Ess|Degree=Pos|Number=Sing	5	amod	_	Translit=mtʻavar
5	წევრად	წევრი	ADJ	Adj	Case=Ess|Number=Sing	6	amod	_	Translit=cevrad
6	მიიჩნევა	ამჩნევს	VERB	Verb	Aspect=Imp|Mood=Ind|Number[subj]=Sing|Person[subj]=3|Subcat=Tran|Tense=Pres|Voice=Pass	0	root	_	SpaceAfter=No|Translit=miičʻneva
7	.	.	PUNCT	F	PunctType=Peri	6	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubj:pass	color:blue
1	საქართველოს	საქართველო	PROPN	Prop	Case=Gen|NameType=Geo|Number=Sing	2	nmod	_	Translit=sakʻartʻvelos
2	სისხლის	სისხლი	NOUN	Noun	Animacy=Inan|Case=Gen|Number=Sing	3	nmod	_	Translit=sisxlis
3	სამართლის	სამართალი	NOUN	Noun	Animacy=Inan|Case=Gen|Number=Sing	5	nmod	_	Translit=samartʻlis
4	საპროცესო	საპროცესო	ADJ	Adj	Case=Nom|Number=Sing	5	amod	_	Translit=saprocʻeso
5	კოდექსი	კოდექსი	NOUN	Noun	Animacy=Inan|Case=Nom|Number=Sing	7	nsubj:pass	_	Translit=kodekʻsi
6	—	—	PUNCT	F	PunctType=Dash	5	punct	_	Translit=—
7	მიღებულ	მიღებული	ADJ	Adj	Case=Nom|Number=Sing	0	root	_	Translit=miġebul
8	იქნა	არის	AUX	Aux	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Subcat=Intr|Tense=Past	7	cop	_	Translit=ikʻna
9	2009	2009	NUM	Num	NumForm=Digit|NumType=Card	10	nummod	_	Translit=2009
10	წლის	წელი	NOUN	Noun	Animacy=Inan|Case=Gen|Number=Sing	12	nmod	_	Translit=clis
11	9	9	NUM	Num	NumForm=Digit|NumType=Card	12	nummod	_	Translit=9
12	ოქტომბერს	ოქტომბერი	NOUN	Noun	Animacy=Inan|Case=Dat|Number=Sing	7	obl:tmod	_	Translit=okʻtombers
13	საქართველოს	საქართველო	PROPN	Prop	Case=Gen|NameType=Geo|Number=Sing	12	nmod	_	Translit=sakʻartʻvelos
14	უმაღლესი	მაღალი	ADJ	Adj	Case=Gen|Degree=Sup|Number=Sing	16	amod	_	Translit=umaġlesi
15	საკანონმდებლო	საკანონმდებლო	ADJ	Adj	Case=Gen|Number=Sing	16	amod	_	Translit=sakanonmdeblo
16	ორგანოს	ორგანო	NOUN	Noun	Animacy=Inan|Case=Gen|Number=Sing	7	obl	_	Translit=organos
17	მიერ	მიერ	ADP	Post	AdpType=Post|Case=Gen	16	case	_	SpaceAfter=No|Translit=mier
18	.	.	PUNCT	F	PunctType=Peri	7	punct	_	Translit=.

~~~


