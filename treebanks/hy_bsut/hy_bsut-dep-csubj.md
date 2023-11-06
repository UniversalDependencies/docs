---
layout: base
title:  'Statistics of csubj in UD_Armenian-BSUT'
udver: '2'
---

## Treebank Statistics: UD_Armenian-BSUT: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="hy_bsut-dep-csubj-pass.html">csubj:pass</a></tt>.

151 nodes (0%) are attached to their parents as `csubj`.

127 instances of `csubj` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.45695364238411.

The following 14 pairs of parts of speech are connected with `csubj`: <tt><a href="hy_bsut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt> (95; 63% instances), <tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt> (29; 19% instances), <tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt> (12; 8% instances), <tt><a href="hy_bsut-pos-ADV.html">ADV</a></tt>-<tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="hy_bsut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_bsut-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="hy_bsut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="hy_bsut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_bsut-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_bsut-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="hy_bsut-pos-PRON.html">PRON</a></tt>-<tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_bsut-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_bsut-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_bsut-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 csubj	color:blue
1	Փաստերի	փաստ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	2	nmod:poss	_	Translit=P’asteri|LTranslit=p’ast
2	ստուգման	ստուգում	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	4	nmod:poss	_	Translit=stowgman|LTranslit=stowgowm
3	ամենապարզ	պարզ	ADJ	_	Degree=Pos	4	amod	_	Translit=amenaparz|LTranslit=parz
4	կանոններն	կանոն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	7	obj	_	Translit=kanonnern|LTranslit=kanon
5	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	cop	_	Translit=ē|LTranslit=em
6	պետք	պետք	ADJ	_	_	0	root	_	Translit=petk’|LTranslit=petk’
7	օգտագործել	օգտագործել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	6	csubj	_	Translit=ògtagorçel|LTranslit=ògtagorçel|SpaceAfter=No
8	.	.	PUNCT	_	_	6	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 csubj	color:blue
1	-	-	PUNCT	_	_	5	punct	_	Translit=-|LTranslit=-
2	Չէ	չէ	INTJ	_	_	5	discourse	_	Translit=Čē|LTranslit=čē|SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	Translit=,|LTranslit=,
4	նահանջել	նահանջել	VERB	_	Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	5	csubj	_	Translit=nahanǰel|LTranslit=nahanǰel
5	չկա	կամ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	Translit=čka|LTranslit=kam|SpaceAfter=No
6	,	,	PUNCT	_	_	10	punct	_	Translit=,|LTranslit=,
7	մոր	մայր	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Sing	8	nmod:poss	_	Translit=mor|LTranslit=mayr
8	քֆուր	քֆուր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing|Style=Vulg	10	compound:lvc	_	Translit=k’fowr|LTranslit=k’fowr
9	ենք	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	10	aux	_	Translit=enk’|LTranslit=em
10	կերել	ուտել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	5	conj	_	Translit=kerel|LTranslit=owtel|SpaceAfter=No
11	,	,	PUNCT	_	_	13	punct	_	Translit=,|LTranslit=,|SpaceAfter=No
12	-	-	PUNCT	_	_	13	punct	_	Translit=-|LTranslit=-
13	գոռաց	գոռալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	5	parataxis	_	Translit=goṙac’|LTranslit=goṙal
14	բարձրաձայն	բարձրաձայն	ADV	_	_	13	advmod	_	Translit=barjrajayn|LTranslit=barjrajayn|SpaceAfter=No
15	:	:	PUNCT	_	Foreign=Yes	5	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 csubj	color:blue
1	«	«	PUNCT	_	_	5	punct	_	Translit=«|LTranslit=«|SpaceAfter=No
2	Ինչ	ինչ	PART	_	_	5	discourse	_	Translit=Inč|LTranslit=inč
3	՜	՜	PUNCT	_	_	2	punct	_	Translit=!|LTranslit=!
4	լավ	լավ	ADJ	_	Degree=Pos	5	amod	_	Translit=lav|LTranslit=lav
5	բան	բան	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=ban|LTranslit=ban
6	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	cop	_	Translit=ē|LTranslit=em
7	ծեր	ծեր	ADJ	_	Degree=Pos	8	xcomp	_	Translit=çer|LTranslit=çer
8	լինելը	լինել	VERB	_	Case=Nom|Definite=Def|Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	5	csubj	_	Translit=linelë|LTranslit=linel|SpaceAfter=No
9	»	»	PUNCT	_	_	5	punct	_	Translit=»|LTranslit=»|SpaceAfter=No
10	:	:	PUNCT	_	Foreign=Yes	5	punct	_	Translit=.|LTranslit=.

~~~


