---
layout: base
title:  'Statistics of nsubj:caus in UD_Armenian-BSUT'
udver: '2'
---

## Treebank Statistics: UD_Armenian-BSUT: Relations: `nsubj:caus`

This relation is a language-specific subtype of <tt><a href="hy_bsut-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="hy_bsut-dep-nsubj-pass.html">nsubj:pass</a></tt>.

4 nodes (0%) are attached to their parents as `nsubj:caus`.

4 instances of `nsubj:caus` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.75.

The following 3 pairs of parts of speech are connected with `nsubj:caus`: <tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_bsut-pos-PRON.html">PRON</a></tt> (1; 25% instances), <tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_bsut-pos-PROPN.html">PROPN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 nsubj:caus	color:blue
1	Շատ	շատ	ADJ	_	Degree=Pos	9	obl	_	Translit=Šat|LTranslit=šat|SpaceAfter=No
2	-	-	PUNCT	_	_	3	punct	_	Translit=-|LTranslit=-|SpaceAfter=No
3	շատերի	շատ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Plur	1	compound:redup	_	Translit=šateri|LTranslit=šat
4	մոտ	մոտ	ADP	_	AdpType=Post	1	case	_	Translit=mot|LTranslit=mot
5	այս	այս	DET	_	Deixis=Prox|PronType=Dem	6	det	_	Translit=ays|LTranslit=ays
6	գրառումը	գրառում	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	9	nsubj:caus	_	Translit=graṙowmë|LTranslit=graṙowm
7	տարակուսանք	տարակուսանք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Coll	9	obj	_	Translit=tarakowsank’|LTranslit=tarakowsank’
8	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	9	aux	_	Translit=ēr|LTranslit=em
9	առաջացրել	առաջացնել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=aṙaǰac’rel|LTranslit=aṙaǰac’nel|SpaceAfter=No
10	,	,	PUNCT	_	_	17	punct	_	Translit=,|LTranslit=,
11	թե	թե	SCONJ	_	_	17	mark	_	Translit=t’e|LTranslit=t’e
12	յանի	յանի	PART	_	Style=Vrnc	17	discourse	_	Translit=yani|LTranslit=yani
13	էս	էս	DET	_	Deixis=Prox|PronType=Dem|Style=Coll	14	det	_	Translit=ēs|LTranslit=ēs
14	ինչ	ինչ	PRON	_	Case=Nom|Definite=Ind|Number=Sing|PronType=Int	17	obj	_	Translit=inč|LTranslit=inč
15	՞	՞	PUNCT	_	_	14	punct	_	Translit=?|LTranslit=?
16	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	17	aux	_	Translit=ē|LTranslit=em
17	գրել	գրել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	9	advcl	_	Translit=grel|LTranslit=grel
18	Արմեն	Արմեն	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	17	nsubj	_	Translit=Armen|LTranslit=Armen
19	Աշոտյանը	Աշոտյան	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Sur|Number=Sing	18	flat:name	_	Translit=Ašotyanë|LTranslit=Ašotyan|SpaceAfter=No
20	:	:	PUNCT	_	Foreign=Yes	9	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 nsubj:caus	color:blue
1	Մի	մի	NUM	_	NumForm=Word|NumType=Card	2	nummod	_	Translit=Mi|LTranslit=mi
2	խոսքով	խոսք	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	4	parataxis	_	Translit=xosk’ov|LTranslit=xosk’|SpaceAfter=No
3	`	`	PUNCT	_	Foreign=Yes	4	punct	_	Translit=,|LTranslit=,
4	ֆիլմ	ֆիլմ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=film|LTranslit=film|SpaceAfter=No
5	,	,	PUNCT	_	_	9	punct	_	Translit=,|LTranslit=,
6	որը	որ	PRON	_	Case=Nom|Definite=Def|Number=Sing|PronType=Rel	9	nsubj:caus	_	Translit=orë|LTranslit=or
7	շատ	շատ	ADJ	_	Degree=Pos	8	amod	_	Translit=šat|LTranslit=šat
8	բան	բան	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	9	obj	_	Translit=ban|LTranslit=ban
9	կսովորեցնի	սովորել	VERB	_	Aspect=Prosp|Mood=Cnd|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Cau	4	acl:relcl	_	Translit=ksovorec’ni|LTranslit=sovorel
10	ձեր	ձեր	DET	_	Number=Plur|Person=2|Poss=Yes|PronType=Prs	11	det:poss	_	Translit=jer|LTranslit=jer
11	երեխաներին	երեխա	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Plur	9	iobj:agent	_	Translit=erexanerin|LTranslit=erexa|SpaceAfter=No
12	:	:	PUNCT	_	Foreign=Yes	4	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 nsubj:caus	color:blue
1	Երկրորդ	երկրորդ	ADJ	_	NumForm=Word|NumType=Ord	2	amod	_	Translit=Erkrord|LTranslit=erkrord
2	անգամ	անգամ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	7	obl	_	Translit=angam|LTranslit=angam
3	Սեդան	Սեդա	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Giv|Number=Sing	7	nsubj:caus	_	Translit=Sedan|LTranslit=Seda
4	իր	իր	DET	_	Number=Sing|Person=3|Poss=Yes|PronType=Emp|Reflex=Yes	6	det:poss	_	Translit=ir|LTranslit=ir
5	կարկաչուն	կարկաչուն	ADJ	_	_	6	amod	_	Translit=karkačown|LTranslit=karkačown
6	ծիծաղով	ծիծաղ	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Coll	7	obl	_	Translit=çiçaġov|LTranslit=çiçaġ
7	հասկացրել	հասկանալ	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Cau	0	root	_	Translit=haskac’rel|LTranslit=haskanal
8	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	7	aux	_	Translit=ēr|LTranslit=em|SpaceAfter=No
9	,	,	PUNCT	_	_	13	punct	_	Translit=,|LTranslit=,
10	որ	որ	SCONJ	_	_	13	mark	_	Translit=or|LTranslit=or
11	գլխի	գլուխ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	13	compound:lvc	_	Translit=glxi|LTranslit=glowx
12	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	13	aux	_	Translit=ē|LTranslit=em
13	ընկնում	ընկնել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	7	ccomp	_	Translit=ënknowm|LTranslit=ënknel|SpaceAfter=No
14	,	,	PUNCT	_	_	18	punct	_	Translit=,|LTranslit=,
15	թե	թե	SCONJ	_	_	18	mark	_	Translit=t’e|LTranslit=t’e
16	ինչի	ինչի	ADV	_	PronType=Int|Style=Coll	18	advmod	_	Translit=inči|LTranslit=inči
17	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	18	aux	_	Translit=ē|LTranslit=em
18	ստում	ստել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	13	ccomp	_	Translit=stowm|LTranslit=stel|SpaceAfter=No
19	:	:	PUNCT	_	Foreign=Yes	7	punct	_	Translit=.|LTranslit=.

~~~


