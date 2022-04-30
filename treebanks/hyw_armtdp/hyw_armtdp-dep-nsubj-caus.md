---
layout: base
title:  'Statistics of nsubj:caus in UD_Western_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Western_Armenian-ArmTDP: Relations: `nsubj:caus`

This relation is a language-specific subtype of <tt><a href="hyw_armtdp-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="hyw_armtdp-dep-nsubj-pass.html">nsubj:pass</a></tt>.

15 nodes (0%) are attached to their parents as `nsubj:caus`.

15 instances of `nsubj:caus` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.4.

The following 4 pairs of parts of speech are connected with `nsubj:caus`: <tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hyw_armtdp-pos-NOUN.html">NOUN</a></tt> (9; 60% instances), <tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hyw_armtdp-pos-PRON.html">PRON</a></tt> (4; 27% instances), <tt><a href="hyw_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hyw_armtdp-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hyw_armtdp-pos-PROPN.html">PROPN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 nsubj:caus	color:blue
1	Միայն	միայն	ADV	_	_	2	advmod:emph	_	Translit=Miayn|LTranslit=miayn
2	Յունուար	Յունուար	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	3	nmod	_	Translit=Yownowar|LTranslit=Yownowar
3	ամիսը	ամիս	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	7	nsubj:caus	_	Translit=amisë|LTranslit=amis
4	այնքան	այնքան	DET	_	Deixis=Remt|PronType=Dem	5	det	_	Translit=aynk’an|LTranslit=aynk’an
5	շատերու	շատ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Plur	7	obj	_	Translit=šaterow|LTranslit=šat
6	կը	կը	AUX	_	Aspect=Imp|Mood=Ind	7	aux	_	Translit=kë|LTranslit=kë
7	յիշեցնէ	յիշեցնել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Cau	0	root	_	Translit=yišec’nē|LTranslit=yišec’nel
8	մեզի	մենք	PRON	_	Animacy=Hum|Case=Dat|Number=Plur|Person=1|PronType=Prs	7	iobj:agent	_	Translit=mezi|LTranslit=menk’|SpaceAfter=No
9	։	։	PUNCT	_	_	7	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:caus	color:blue
1	Ան	ան	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj:caus	_	Translit=An|LTranslit=an
2	դիտել	դիտել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	0	root	_	Translit=ditel|LTranslit=ditel
3	տուաւ	տալ	AUX	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Cau	2	aux:caus	_	Translit=towaw|LTranslit=tal|SpaceAfter=No
4	,	,	PUNCT	_	_	14	punct	_	Translit=,|LTranslit=,
5	որ	որ	SCONJ	_	_	14	mark	_	Translit=or|LTranslit=or
6	այսօր	այսօր	ADV	_	_	14	advmod	_	Translit=aysòr|LTranslit=aysòr
7	նոյնիսկ	նոյնիսկ	ADV	_	_	10	advmod:emph	_	Translit=noynisk|LTranslit=noynisk
8	մեր	մենք	DET	_	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	9	det:poss	_	Translit=mer|LTranslit=menk’
9	վարժարաններու	վարժարան	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	10	nmod:poss	_	Translit=varžarannerow|LTranslit=varžaran
10	վարիչները	վարիչ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Plur	14	nsubj	_	Translit=varičnerë|LTranslit=varič
11	իրենց	ինք	DET	_	Case=Gen|Number=Plur|Person=3|Poss=Yes|PronType=Emp|Reflex=Yes	12	det:poss	_	Translit=irenc’|LTranslit=ink’
12	զաւակները	զաւակ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Plur	14	obj	_	Translit=zawaknerë|LTranslit=zawak
13	չեն	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	14	aux	_	Translit=čen|LTranslit=em
14	ուղարկեր	ուղարկել	VERB	_	Aspect=Imp|Connegative=Yes|Subcat=Tran|VerbForm=Part|Voice=Act	2	ccomp	_	Translit=owġarker|LTranslit=owġarkel
15	իրենց	ինք	DET	_	Case=Gen|Number=Plur|Person=3|Poss=Yes|PronType=Emp|Reflex=Yes	16	nsubj	_	Translit=irenc’|LTranslit=ink’
16	ղեկավարած	ղեկավարել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Tran|VerbForm=Part|Voice=Act	17	acl	_	Translit=ġekavaraç|LTranslit=ġekavarel
17	դպրոցը	դպրոց	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	14	obl	_	Translit=dproc’ë|LTranslit=dproc’|SpaceAfter=No
18	։	։	PUNCT	_	_	2	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 nsubj:caus	color:blue
1	Սնահաւատութենէ	սնահաւատութիւն	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Coll	5	obl	_	Translit=Snahawatowt’enē|LTranslit=snahawatowt’iwn
2	ալ	ալ	ADV	_	_	1	advmod:emph	_	Translit=al|LTranslit=al
3	իր	ինք	DET	_	Case=Gen|Number=Sing|Person=3|Poss=Yes|PronType=Emp|Reflex=Yes	4	det:poss	_	Translit=ir|LTranslit=ink’
4	բաժինը	բաժին	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	5	obj	_	Translit=bažinë|LTranslit=bažin
5	ստացած	ստանալ	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=stac’aç|LTranslit=stanal
6	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	aux	_	Translit=ē|LTranslit=em
7	աչքը	աչք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	5	nsubj	_	Translit=ačk’ë|LTranslit=ačk’|SpaceAfter=No
8	.	.	PUNCT	_	_	15	punct	_	Translit=.|LTranslit=.
9	երբեմն	երբեմն	ADV	_	_	15	advmod	_	Translit=erbemn|LTranslit=erbemn
10	կապոյտ	կապոյտ	ADJ	_	Degree=Pos	11	amod	_	Translit=kapoyt|LTranslit=kapoyt
11	գոյնով	գոյն	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	12	nmod:npmod	_	Translit=goynov|LTranslit=goyn
12	աչքի	աչք	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	13	nsubj:caus	_	Translit=ačk’i|LTranslit=ačk’
13	նշաններ	նշան	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Plur	15	nsubj:pass	_	Translit=nšanner|LTranslit=nšan
14	կը	կը	AUX	_	Aspect=Imp|Mood=Ind	15	aux	_	Translit=kë|LTranslit=kë
15	դրուին	դնել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Pass	5	conj	_	Translit=drowin|LTranslit=dnel
16	դռներու	դուռ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	15	obl	_	Translit=dṙnerow|LTranslit=dowṙ
17	վրայ	վրայ	ADP	_	AdpType=Post	16	case	_	Translit=vray|LTranslit=vray
18	եւ	եւ	CCONJ	_	_	27	cc	_	Translit=ew|LTranslit=ew
19	ըստ	ըստ	ADP	_	AdpType=Prep	20	case	_	Translit=ëst|LTranslit=ëst
20	այնմ	այնմ	PRON	_	Deixis=Remt|Number=Sing|PronType=Dem|Style=Rare	27	parataxis	_	Translit=aynm|LTranslit=aynm
21	վատ	վատ	ADJ	_	Degree=Pos	22	amod	_	Translit=vat|LTranslit=vat
22	բան	բան	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	24	nsubj	_	Translit=ban|LTranslit=ban
23	մը	մը	DET	_	PronType=Art	22	det	_	Translit=më|LTranslit=më
24	պատահելու	պատահիլ	VERB	_	Case=Dat|Definite=Ind|Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	27	obl	_	Translit=patahelow|LTranslit=patahil
25	պարագային	պարագային	ADP	_	AdpType=Post	24	case	_	Translit=paragayin|LTranslit=paragayin
26	կ՚	կը	AUX	_	Aspect=Imp|Mood=Ind	27	aux	_	Translit=k,|LTranslit=kë|SpaceAfter=No
27	ըսուի	ըսել	VERB	_	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Pass	5	conj	_	Translit=ësowi|LTranslit=ësel
28	«	«	PUNCT	_	_	31	punct	_	Translit=«|LTranslit=«|SpaceAfter=No
29	անպայման	անպայման	PART	_	_	31	discourse	_	Translit=anpayman|LTranslit=anpayman
30	աչք	աչք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	31	compound:lvc	_	Translit=ačk’|LTranslit=ačk’
31	դպած	դպիլ	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	27	csubj:pass	_	Translit=dpaç|LTranslit=dpil
32	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	31	aux	_	Translit=ē|LTranslit=em|SpaceAfter=No
33	»	»	PUNCT	_	_	31	punct	_	Translit=»|LTranslit=»
34	կամ	կամ	CCONJ	_	_	37	cc	_	Translit=kam|LTranslit=kam
35	«	«	PUNCT	_	_	37	punct	_	Translit=«|LTranslit=«|SpaceAfter=No
36	աչքէ	աչք	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Sing	37	obl	_	Translit=ačk’ē|LTranslit=ačk’
37	եղաւ	ըլլալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	31	conj	_	Translit=eġaw|LTranslit=ëllal|SpaceAfter=No
38	»	»	PUNCT	_	_	37	punct	_	Translit=»|LTranslit=»|SpaceAfter=No
39	։	։	PUNCT	_	_	5	punct	_	Translit=.|LTranslit=.

~~~


