---
layout: base
title:  'Statistics of csubj:pass in UD_Armenian-BSUT'
udver: '2'
---

## Treebank Statistics: UD_Armenian-BSUT: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="hy_bsut-dep-csubj.html">csubj</a></tt>.

15 nodes (0%) are attached to their parents as `csubj:pass`.

14 instances of `csubj:pass` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.26666666666667.

The following 2 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt> (14; 93% instances), <tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj:pass	color:blue
1	Թույլատրվեցին	թույլատրել	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	Translit=T’owylatrvec’in|LTranslit=t’owylatrel
2	դահլիճներում	դահլիճ	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Plur	3	obl	_	Translit=dahlič̣nerowm|LTranslit=dahlič̣
3	լսել	լսել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	1	csubj:pass	_	Translit=lsel|LTranslit=lsel
4	մեր	մենք	DET	_	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	7	det:poss	_	Translit=mer|LTranslit=menk’
5	հոգևոր	հոգևոր	ADJ	_	_	7	amod	_	Translit=hogewor|LTranslit=hogewor
6	սքանչելի	սքանչելի	ADJ	_	Degree=Pos	7	amod	_	Translit=sk’ančeli|LTranslit=sk’ančeli
7	երաժշտությունը	երաժշտություն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	3	obj	_	Translit=eražštowt’yownë|LTranslit=eražštowt’yown|SpaceAfter=No
8	:	:	PUNCT	_	Foreign=Yes	1	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 csubj:pass	color:blue
1	Նամակում	նամակ	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Sing	3	obl	_	Translit=Namakowm|LTranslit=namak
2	չի	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	3	aux	_	Translit=či|LTranslit=em
3	նշվում	նշել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Pass	0	root	_	Translit=nšvowm|LTranslit=nšel|SpaceAfter=No
4	,	,	PUNCT	_	_	9	punct	_	Translit=,|LTranslit=,
5	թե	թե	SCONJ	_	_	9	mark	_	Translit=t’e|LTranslit=t’e
6	դա	դա	PRON	_	Case=Nom|Deixis=Med|Number=Sing|PronType=Dem	9	nsubj	_	Translit=da|LTranslit=da
7	ինչ	ինչ	DET	_	PronType=Ind	8	det	_	Translit=inč|LTranslit=inč
8	տիպի	տիպ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	9	nmod:poss	_	Translit=tipi|LTranslit=tip
9	հարձակում	հարձակում	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	3	csubj:pass	_	Translit=harjakowm|LTranslit=harjakowm
10	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	9	cop	_	Translit=ē|LTranslit=em
11	և	և	CCONJ	_	_	14	cc	_	Translit=ew|LTranslit=ew
12	որ	որ	DET	_	PronType=Int	13	det	_	Translit=or|LTranslit=or
13	երկրի	երկիր	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	14	nmod:poss	_	Translit=erkri|LTranslit=erkir
14	հաքերների	հաքեր	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	9	conj	_	Translit=hak’erneri|LTranslit=hak’er
15	մասին	մասին	ADP	_	AdpType=Post	14	case	_	Translit=masin|LTranslit=masin
16	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	14	cop	_	Translit=ē|LTranslit=em
17	խոսքը	խոսք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	14	nsubj	_	Translit=xosk’ë|LTranslit=xosk’|SpaceAfter=No
18	։	։	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.

~~~


