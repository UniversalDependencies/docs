---
layout: base
title:  'Statistics of csubj in UD_Armenian-BSUT'
udver: '2'
---

## Treebank Statistics: UD_Armenian-BSUT: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="hy_bsut-dep-csubj-pass.html">csubj:pass</a></tt>.

15 nodes (0%) are attached to their parents as `csubj`.

9 instances of `csubj` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.4.

The following 6 pairs of parts of speech are connected with `csubj`: <tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt> (6; 40% instances), <tt><a href="hy_bsut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt> (3; 20% instances), <tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt> (3; 20% instances), <tt><a href="hy_bsut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_bsut-pos-ADJ.html">ADJ</a></tt> (1; 7% instances), <tt><a href="hy_bsut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_bsut-pos-PRON.html">PRON</a></tt> (1; 7% instances), <tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_bsut-pos-ADP.html">ADP</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 csubj	color:blue
1	Չեք	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Neg|Tense=Pres|VerbForm=Fin	3	aux	_	Translit=Ček’|LTranslit=em
2	՞	՞	PUNCT	_	_	1	punct	_	Translit=?|LTranslit=?
3	ասի	ասել	VERB	_	Aspect=Prosp|Connegative=Yes|Subcat=Tran|VerbForm=Part|Voice=Act	10	parataxis	_	Translit=asi|LTranslit=asel|SpaceAfter=No
4	՝	՝	PUNCT	_	_	10	punct	_	Translit=,|LTranslit=,
5	մեծարգո	մեծարգո	ADJ	_	_	6	amod	_	Translit=meçargo|LTranslit=meçargo
6	վարչապետ	վարչապետ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	10	vocative	_	Translit=varčapet|LTranslit=varčapet|SpaceAfter=No
7	,	,	PUNCT	_	_	10	punct	_	Translit=,|LTranslit=,
8	զգույշ	զգույշ	ADJ	_	Degree=Pos	10	xcomp	_	Translit=zgowyš|LTranslit=zgowyš
9	՛	՛	PUNCT	_	_	8	punct	_	Translit=՛|LTranslit=՛
10	եղեք	լինել	VERB	_	Aspect=Prosp|Mood=Imp|Number=Plur|Person=2|Subcat=Intr|VerbForm=Fin|Voice=Mid	0	root	_	Translit=eġek’|LTranslit=linel|SpaceAfter=No
11	,	,	PUNCT	_	_	16	punct	_	Translit=,|LTranslit=,
12	«	«	PUNCT	_	_	13	punct	_	Translit=«|LTranslit=«|SpaceAfter=No
13	անզգույշ	անզգույշ	ADJ	_	Degree=Pos	15	advmod	_	Translit=anzgowyš|LTranslit=anzgowyš|SpaceAfter=No
14	»	»	PUNCT	_	_	13	punct	_	Translit=»|LTranslit=»
15	քաշքշվել	քաշքշել	VERB	_	Polarity=Pos|Subcat=Intr|VerbForm=Fin|Voice=Pass	16	csubj	_	Translit=k’ašk’švel|LTranslit=k’ašk’šel
16	կա	կամ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	10	advcl	_	Translit=ka|LTranslit=kam|SpaceAfter=No
17	,	,	PUNCT	_	_	21	punct	_	Translit=,|LTranslit=,
18	երկու	երկու	NUM	_	NumForm=Word|NumType=Card	19	nummod	_	Translit=erkow|LTranslit=erkow
19	կրակոցով	կրակոց	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	20	nmod	_	Translit=krakoc’ov|LTranslit=krakoc’
20	ինքնասպանություն	ինքնասպանություն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	21	nsubj	_	Translit=ink’naspanowt’yown|LTranslit=ink’naspanowt’yown
21	կա	կամ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	16	conj	_	Translit=ka|LTranslit=kam|SpaceAfter=No
22	։	։	PUNCT	_	_	10	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 21 csubj	color:blue
1	Նա	նա	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	Translit=Na|LTranslit=na
2	միաժամանակ	միաժամանակ	ADV	_	_	3	advmod	_	Translit=miažamanak|LTranslit=miažamanak
3	նշել	նշել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=nšel|LTranslit=nšel
4	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	aux	_	Translit=ē|LTranslit=em|SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	Translit=,|LTranslit=,
6	որ	որ	SCONJ	_	_	7	mark	_	Translit=or|LTranslit=or
7	անհասկանալի	անհասկանալի	ADJ	_	Degree=Pos	3	ccomp	_	Translit=anhaskanali|LTranslit=anhaskanali
8	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	cop	_	Translit=ē|LTranslit=em|SpaceAfter=No
9	,	,	PUNCT	_	_	21	punct	_	Translit=,|LTranslit=,
10	թե	թե	SCONJ	_	_	21	mark	_	Translit=t’e|LTranslit=t’e
11	ինչու	ինչու	ADV	_	PronType=Int	21	advmod	_	Translit=inčow|LTranslit=inčow
12	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	21	aux	_	Translit=ē|LTranslit=em
13	նման	նման	ADJ	_	_	14	amod	_	Translit=nman|LTranslit=nman
14	նվերը	նվեր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	21	nsubj:pass	_	Translit=nverë|LTranslit=nver|SpaceAfter=No
15	,	,	PUNCT	_	_	21	punct	_	Translit=,|LTranslit=,
16	և	և	CCONJ	_	_	21	cc	_	Translit=ew|LTranslit=ew
17	ինչու	ինչու	ADV	_	PronType=Int	21	advmod	_	Translit=inčow|LTranslit=inčow
18	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	21	aux	_	Translit=ē|LTranslit=em
19	բաժնետոմսերի	բաժնետոմս	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	20	nmod:poss	_	Translit=bažnetomseri|LTranslit=bažnetoms
20	կառավարումը	կառավարում	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Coll	21	nsubj:pass	_	Translit=kaṙavarowmë|LTranslit=kaṙavarowm
21	փոխանցվում	փոխանցել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Pass	7	csubj	_	Translit=p’oxanc’vowm|LTranslit=p’oxanc’el
22	վարչապետի	վարչապետ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Sing	23	nmod:poss	_	Translit=varčapeti|LTranslit=varčapet
23	գրասենյակին	գրասենյակ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	21	iobj	_	Translit=grasenyakin|LTranslit=grasenyak|SpaceAfter=No
24	,	,	PUNCT	_	_	31	punct	_	Translit=,|LTranslit=,
25	այլ	այլ	CCONJ	_	ConjType=Comp	31	cc	_	Translit=ayl|LTranslit=ayl
26	ոչ	ոչ	PART	_	Polarity=Neg	25	fixed	_	Translit=oč|LTranslit=oč
27	թե	թե	PART	_	_	25	fixed	_	Translit=t’e|LTranslit=t’e
28	ֆինանսների	ֆինանս	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	31	nmod:poss	_	Translit=finansneri|LTranslit=finans
29	կամ	կամ	CCONJ	_	_	30	cc	_	Translit=kam|LTranslit=kam
30	էկոնոմիկայի	էկոնոմիկա	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	28	conj	_	Translit=ēkonomikayi|LTranslit=ēkonomika
31	նախարարություններին	նախարարություն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Plur	23	conj	_	Translit=naxararowt’yownnerin|LTranslit=naxararowt’yown|SpaceAfter=No
32	:	:	PUNCT	_	Foreign=Yes	3	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 csubj	color:blue
1	Իսկ	իսկ	CCONJ	_	_	4	cc	_	Translit=Isk|LTranslit=isk
2	«	«	PUNCT	_	_	4	punct	_	Translit=«|LTranslit=«|SpaceAfter=No
3	մուռ	մուռ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Coll|Style=Vrnc	4	compound:lvc	_	Translit=mowṙ|LTranslit=mowṙ
4	հանելն	հանել	VERB	_	Case=Nom|Definite=Def|Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	7	csubj	_	Translit=haneln|LTranslit=hanel|SpaceAfter=No
5	»	»	PUNCT	_	_	4	punct	_	Translit=»|LTranslit=»
6	արդարադատության	արդարադատություն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Coll	7	nmod:poss	_	Translit=ardaradatowt’yan|LTranslit=ardaradatowt’yown
7	խնդիրն	խնդիր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	0	root	_	Translit=xndirn|LTranslit=xndir
8	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	cop	_	Translit=ē|LTranslit=em|SpaceAfter=No
9	։	։	PUNCT	_	_	7	punct	_	Translit=.|LTranslit=.

~~~


