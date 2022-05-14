---
layout: base
title:  'Statistics of nummod in UD_Armenian-BSUT'
udver: '2'
---

## Treebank Statistics: UD_Armenian-BSUT: Relations: `nummod`

This relation is universal.

612 nodes (1%) are attached to their parents as `nummod`.

549 instances of `nummod` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.11437908496732.

The following 8 pairs of parts of speech are connected with `nummod`: <tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_bsut-pos-NUM.html">NUM</a></tt> (462; 75% instances), <tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_bsut-pos-NUM.html">NUM</a></tt> (92; 15% instances), <tt><a href="hy_bsut-pos-SYM.html">SYM</a></tt>-<tt><a href="hy_bsut-pos-NUM.html">NUM</a></tt> (46; 8% instances), <tt><a href="hy_bsut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hy_bsut-pos-NUM.html">NUM</a></tt> (5; 1% instances), <tt><a href="hy_bsut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_bsut-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="hy_bsut-pos-X.html">X</a></tt>-<tt><a href="hy_bsut-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="hy_bsut-pos-ADV.html">ADV</a></tt>-<tt><a href="hy_bsut-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="hy_bsut-pos-INTJ.html">INTJ</a></tt>-<tt><a href="hy_bsut-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nummod	color:blue
1	1	1	NUM	_	NumForm=Digit|NumType=Card	4	nummod	_	Translit=1|LTranslit=1|SpaceAfter=No
2	.	.	PUNCT	_	_	1	punct	_	Translit=.|LTranslit=.
3	Նյութի	նյութ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	4	nmod:poss	_	Translit=Nyowt’i|LTranslit=nyowt’
4	իսկություն	իսկություն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Coll	0	root	_	Translit=iskowt’yown|LTranslit=iskowt’yown|SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	Translit=.|LTranslit=.
6	օրիգինալ	օրիգինալ	ADJ	_	Degree=Pos	4	appos	_	Translit=òriginal|LTranslit=òriginal
7	՞	՞	PUNCT	_	_	6	punct	_	Translit=?|LTranslit=?
8	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	cop	_	Translit=ē|LTranslit=em
9	կոնտենտը	կոնտենտ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	6	nsubj	_	Translit=kontentë|LTranslit=kontent|SpaceAfter=No
10	,	,	PUNCT	_	_	12	punct	_	Translit=,|LTranslit=,
11	թե	թե	CCONJ	_	_	12	cc	_	Translit=t’e|LTranslit=t’e
12	ոչ	ոչ	PART	_	Polarity=Neg	6	conj	_	Translit=oč|LTranslit=oč|SpaceAfter=No
13	:	:	PUNCT	_	Foreign=Yes	4	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nummod	color:blue
1	ա	ա	NUM	_	NumForm=Armenian|NumType=Card	7	nummod	_	Translit=a|LTranslit=a|SpaceAfter=No
2	.	․	PUNCT	_	_	1	punct	_	Translit=.|LTranslit=․
3	E	E	X	_	Foreign=Yes	6	nmod	_	Translit=E|LTranslit=E|SpaceAfter=No
4	-	-	PUNCT	_	_	5	punct	_	Translit=-|LTranslit=-|SpaceAfter=No
5	draft	draft	X	_	Foreign=Yes	3	flat	_	Translit=draft|LTranslit=draft
6	հարթակը	հարթակ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	7	nsubj:pass	_	Translit=hart’akë|LTranslit=hart’ak
7	ստեղծվել	ստեղծել	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Pass	0	root	_	Translit=steġçvel|LTranslit=steġçel
8	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	aux	_	Translit=ē|LTranslit=em
9	շատ	շատ	ADV	_	Degree=Pos	10	advmod	_	Translit=šat|LTranslit=šat
10	լուրջ	լուրջ	ADJ	_	Degree=Pos	11	amod	_	Translit=lowrǰ|LTranslit=lowrǰ
11	խնդիր	խնդիր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	12	obj	_	Translit=xndir|LTranslit=xndir
12	լուծելու	լուծել	VERB	_	Case=Dat|Definite=Ind|Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	7	obl	_	Translit=lowçelow|LTranslit=lowçel
13	համար	համար	ADP	_	AdpType=Post	12	case	_	Translit=hamar|LTranslit=hamar|SpaceAfter=No
14	։	։	PUNCT	_	_	7	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nummod	color:blue
1	8	8	NUM	_	NumForm=Digit|NumType=Card	2	nummod	_	Translit=8|LTranslit=8
2	հունիսի	հունիս	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	4	nmod:poss	_	Translit=hownisi|LTranslit=hownis
3	2018	2018	NUM	_	NumForm=Digit|NumType=Card	4	nummod	_	Translit=2018|LTranslit=2018
4	թվականի	թվական	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	5	nmod:poss	_	Translit=t’vakani|LTranslit=t’vakan
5	N	N|№	SYM	_	_	0	root	_	Translit=N|LTranslit=N|№
6	667	667	NUM	_	NumForm=Digit|NumType=Card	5	nummod	_	Translit=667|LTranslit=667|SpaceAfter=No
7	-	-	PUNCT	_	_	8	punct	_	Translit=-|LTranslit=-|SpaceAfter=No
8	Լ	Լ	ADJ	_	Abbr=Yes	6	flat	_	Translit=L|LTranslit=L

~~~


