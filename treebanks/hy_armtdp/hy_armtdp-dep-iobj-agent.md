---
layout: base
title:  'Statistics of iobj:agent in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `iobj:agent`

This relation is a language-specific subtype of <tt><a href="hy_armtdp-dep-iobj.html">iobj</a></tt>.

15 nodes (0%) are attached to their parents as `iobj:agent`.

10 instances of `iobj:agent` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.46666666666667.

The following 3 pairs of parts of speech are connected with `iobj:agent`: <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (7; 47% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (6; 40% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-DET.html">DET</a></tt> (2; 13% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 iobj:agent	color:blue
1	Արդեն	արդեն	ADV	_	_	2	advmod	_	Translit=Arden|LTranslit=arden
2	մոտակա	մոտակա	ADJ	_	Degree=Pos	3	amod	_	Translit=motaka|LTranslit=motaka
3	խոտերն	խոտ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	5	iobj:agent	_	Translit=xotern|LTranslit=xot
4	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	aux	_	Translit=ē|LTranslit=em
5	խշրտացնում	խշրտացնել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Cau	0	root	_	Translit=xšrtac’nowm|LTranslit=xšrtac’nel|SpaceAfter=No
6	...	...	PUNCT	_	_	5	punct	_	Translit=...|LTranslit=...

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 iobj:agent	color:blue
1	Ձեռքի	ձեռք	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	2	nmod:poss	_	Translit=Jeṙk’i|LTranslit=jeṙk’
2	աշխատանքը	աշխատանք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	7	nsubj:caus	_	Translit=ašxatank’ë|LTranslit=ašxatank’
3	շատ	շատ	ADJ	_	Degree=Pos	4	amod	_	Translit=šat|LTranslit=šat
4	տեղերում	տեղ	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Plur	7	obl	_	Translit=teġerowm|LTranslit=teġ
5	դեռ	դեռ	ADV	_	_	7	advmod	_	Translit=deṙ|LTranslit=deṙ
6	իրեն	ինքը	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Emp|Reflex=Yes	7	iobj:agent	_	Translit=iren|LTranslit=ink’ë
7	զգալ	զգալ	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	0	root	_	Translit=zgal|LTranslit=zgal
8	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	7	aux	_	Translit=ēr|LTranslit=em
9	տալիս	տալ	AUX	_	Aspect=Imp|VerbForm=Part	7	aux:caus	_	Translit=talis|LTranslit=tal|SpaceAfter=No
10	:	:	PUNCT	_	Foreign=Yes	7	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 iobj:agent	color:blue
1	Բնական	բնական	ADJ	_	Degree=Pos	0	root	_	Translit=Bnakan|LTranslit=bnakan
2	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	cop	_	Translit=ē|LTranslit=em|SpaceAfter=No
3	,	,	PUNCT	_	_	9	punct	_	Translit=,|LTranslit=,
4	որ	որ	SCONJ	_	_	9	mark	_	Translit=or|LTranslit=or
5	նման	նման	ADJ	_	_	6	amod	_	Translit=nman|LTranslit=nman
6	դեպքում	դեպք	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Sing	9	obl	_	Translit=depk’owm|LTranslit=depk’
7	հաջողությունները	հաջողություն	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Plur	9	nsubj:caus	_	Translit=haǰoġowt’yownnerë|LTranslit=haǰoġowt’yown
8	իրենց	իրենց	DET	_	Number=Plur|Person=3|Poss=Yes|PronType=Emp|Reflex=Yes	9	iobj:agent	_	Translit=irenc’|LTranslit=irenc’
9	սպասեցնել	սպասեցնել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	1	csubj	_	Translit=spasec’nel|LTranslit=spasec’nel
10	չէին	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Imp|VerbForm=Fin	9	aux	_	Translit=čēin|LTranslit=em
11	տալիս	տալ	AUX	_	Aspect=Imp|VerbForm=Part	9	aux:caus	_	Translit=talis|LTranslit=tal|SpaceAfter=No
12	։	։	PUNCT	_	_	1	punct	_	Translit=.|LTranslit=.

~~~


