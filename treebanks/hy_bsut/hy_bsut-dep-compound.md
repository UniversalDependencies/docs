---
layout: base
title:  'Statistics of compound in UD_Armenian-BSUT'
udver: '2'
---

## Treebank Statistics: UD_Armenian-BSUT: Relations: `compound`

This relation is universal.
There are 3 language-specific subtypes of `compound`: <tt><a href="hy_bsut-dep-compound-lvc.html">compound:lvc</a></tt>, <tt><a href="hy_bsut-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="hy_bsut-dep-compound-svc.html">compound:svc</a></tt>.

52 nodes (0%) are attached to their parents as `compound`.

49 instances of `compound` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.84615384615385.

The following 12 pairs of parts of speech are connected with `compound`: <tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt> (34; 65% instances), <tt><a href="hy_bsut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_bsut-pos-ADJ.html">ADJ</a></tt> (7; 13% instances), <tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_bsut-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="hy_bsut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="hy_bsut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_bsut-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="hy_bsut-pos-ADV.html">ADV</a></tt>-<tt><a href="hy_bsut-pos-ADP.html">ADP</a></tt> (1; 2% instances), <tt><a href="hy_bsut-pos-INTJ.html">INTJ</a></tt>-<tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_bsut-pos-ADP.html">ADP</a></tt> (1; 2% instances), <tt><a href="hy_bsut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hy_bsut-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="hy_bsut-pos-X.html">X</a></tt>-<tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="hy_bsut-pos-X.html">X</a></tt>-<tt><a href="hy_bsut-pos-X.html">X</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 compound	color:blue
1	Դե	դե	INTJ	_	_	3	discourse	_	Translit=De|LTranslit=de|SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	Translit=,|LTranslit=,
3	մարդ	մարդ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=mard|LTranslit=mard
4	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	cop	_	Translit=ē|LTranslit=em|SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	Translit=,|LTranslit=,
6	խոսել	խոսել	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Mid	3	conj	_	Translit=xosel|LTranslit=xosel
7	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	aux	_	Translit=ē|LTranslit=em|SpaceAfter=No
8	,	,	PUNCT	_	_	11	punct	_	Translit=,|LTranslit=,
9	խելքին	խելք	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Coll	10	compound	_	Translit=xelk’in|LTranslit=xelk’
10	եկածը	եկած	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	11	obj	_	Translit=ekaçë|LTranslit=ekaç
11	ասել	ասել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	3	conj	_	Translit=asel|LTranslit=asel
12	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	11	aux	_	Translit=ē|LTranslit=em|SpaceAfter=No
13	,	,	PUNCT	_	_	18	punct	_	Translit=,|LTranslit=,
14	ու	ու	CCONJ	_	_	18	cc	_	Translit=ow|LTranslit=ow
15	Արմեն	Արմեն	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	18	nsubj	_	Translit=Armen|LTranslit=Armen
16	Աշոտյանը	Աշոտյան	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Sur|Number=Sing	15	flat:name	_	Translit=Ašotyanë|LTranslit=Ašotyan
17	սրանից	սա	PRON	_	Case=Abl|Deixis=Prox|Number=Sing|PronType=Dem	18	obl	_	Translit=sranic’|LTranslit=sa
18	նեղվել	նեղվել	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Mid	3	conj	_	Translit=neġvel|LTranslit=neġvel
19	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	18	aux	_	Translit=ē|LTranslit=em|SpaceAfter=No
20	:	:	PUNCT	_	Foreign=Yes	3	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 compound	color:blue
1	Այս	այս	DET	_	Deixis=Prox|PronType=Dem	2	det	_	Translit=Ays|LTranslit=ays
2	եզրակացության	եզրակացություն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	4	compound:lvc	_	Translit=ezrakac’owt’yan|LTranslit=ezrakac’owt’yown
3	են	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	aux	_	Translit=en|LTranslit=em
4	եկել	գալ	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	Translit=ekel|LTranslit=gal
5	բժշկական	բժշկական	ADJ	_	_	8	amod	_	Translit=bžškakan|LTranslit=bžškakan|SpaceAfter=No
6	-	-	PUNCT	_	_	7	punct	_	Translit=-|LTranslit=-|SpaceAfter=No
7	գենետիկական	գենետիկական	ADJ	_	_	5	compound	_	Translit=genetikakan|LTranslit=genetikakan
8	կենտրոնի	կենտրոն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	9	nmod:poss	_	Translit=kentroni|LTranslit=kentron
9	մասնագետները	մասնագետ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Plur	4	nsubj	_	Translit=masnagetnerë|LTranslit=masnaget|SpaceAfter=No
10	։	։	PUNCT	_	_	4	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 compound	color:blue
1	Սկիզբ	սկիզբ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Coll	3	compound:lvc	_	Translit=Skizb|LTranslit=skizb
2	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	aux	_	Translit=ē|LTranslit=em
3	առնում	առնել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=aṙnowm|LTranslit=aṙnel
4	Գեղամա	Գեղամա	ADJ	_	NameType=Geo|Poss=Yes	5	amod	_	Translit=Geġama|LTranslit=Geġama
5	լեռների	լեռ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	9	nmod:poss	_	Translit=leṙneri|LTranslit=leṙ
6	հարավ	հարավ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Coll	9	amod	_	Translit=harav|LTranslit=harav|SpaceAfter=No
7	-	-	PUNCT	_	_	8	punct	_	Translit=-|LTranslit=-|SpaceAfter=No
8	արևմտյան	արևմտյան	ADJ	_	NameType=Geo	6	compound	_	Translit=arewmtyan|LTranslit=arewmtyan
9	լանջերից	լանջ	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Plur	3	obl	_	Translit=lanǰeric’|LTranslit=lanǰ|SpaceAfter=No
10	։	։	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.

~~~


