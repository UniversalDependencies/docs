---
layout: base
title:  'Statistics of csubj:pass in UD_Western_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Western_Armenian-ArmTDP: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="hyw_armtdp-dep-csubj.html">csubj</a></tt>.

27 nodes (0%) are attached to their parents as `csubj:pass`.

27 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.51851851851852.

The following 3 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt> (25; 93% instances), <tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hyw_armtdp-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hyw_armtdp-pos-ADV.html">ADV</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 csubj:pass	color:blue
1	Նախատեսուած	նախատեսել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Pass	0	root	_	Translit=Naxatesowaç|LTranslit=naxatesel
2	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	aux	_	Translit=ē|LTranslit=em
3	2023	2023	NUM	_	NumForm=Digit|NumType=Card	9	obl	_	Translit=2023|LTranslit=2023|SpaceAfter=No
4	ին	ը	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Hyph=Yes|Number=Sing	3	dep	_	Translit=in|LTranslit=ë
5	անտուն	անտուն	ADJ	_	_	8	amod	_	Translit=antown|LTranslit=antown
6	եւ	եւ	CCONJ	_	_	7	cc	_	Translit=ew|LTranslit=ew
7	անօթեւան	անօթեւան	ADJ	_	_	5	conj	_	Translit=anòt’ewan|LTranslit=anòt’ewan
8	արցախցի	արցախցի	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	9	nsubj	_	Translit=arc’axc’i|LTranslit=arc’axc’i
9	չմնայ	մնալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Neg|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	1	csubj:pass	_	Translit=čmnay|LTranslit=mnal|SpaceAfter=No
10	:	:	PUNCT	_	Foreign=Yes	1	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 15 csubj:pass	color:blue
1	Եւ	եւ	CCONJ	_	_	3	cc	_	Translit=EW|LTranslit=ew
2	երբ	երբ	ADV	_	PronType=Rel	3	advmod	_	Translit=erb|LTranslit=erb
3	ըսուի	ըսել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	Translit=ësowi|LTranslit=ësel
4	իրենց	իրենք	PRON	_	Case=Dat|Number=Plur|Person=3|PronType=Emp	3	iobj	_	Translit=irenc’|LTranslit=irenk’|SpaceAfter=No
5	,	,	PUNCT	_	_	15	punct	_	Translit=,|LTranslit=,
6	թէ	թէ	SCONJ	_	_	15	mark	_	Translit=t’ē|LTranslit=t’ē
7	այդ	այդ	DET	_	Deixis=Med|PronType=Dem	9	det	_	Translit=ayd|LTranslit=ayd
8	բոլոր	բոլոր	DET	_	PronType=Tot	9	det	_	Translit=bolor|LTranslit=bolor
9	փաստերն	փաստ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	13	nsubj	_	Translit=p’astern|LTranslit=p’ast
10	ու	ու	CCONJ	_	_	11	cc	_	Translit=ow|LTranslit=ow
11	արձանագրութիւնները	արձանագրութիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	9	conj	_	Translit=arjanagrowt’iwnnerë|LTranslit=arjanagrowt’iwn
12	ճիշտ	ճիշտ	ADJ	_	Degree=Pos	13	compound:lvc	_	Translit=č̣išt|LTranslit=č̣išt
13	ըլլալով	ըլլալ	VERB	_	Case=Ins|Definite=Ind|Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	15	advcl	_	Translit=ëllalov|LTranslit=ëllal
14	մէկտեղ	մէկտեղ	ADV	_	_	13	advmod	_	Translit=mēkteġ|LTranslit=mēkteġ
15	ճիշտ	ճիշտ	ADJ	_	Degree=Pos	3	csubj:pass	_	Translit=č̣išt|LTranslit=č̣išt
16	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	15	cop	_	Translit=ē|LTranslit=em
17	նաեւ	նաեւ	CCONJ	_	_	15	cc	_	Translit=naew|LTranslit=naew
18	փաստն	փաստ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	15	nsubj	_	Translit=p’astn|LTranslit=p’ast
19	մըն	մը	DET	_	PronType=Art	18	det	_	Translit=mën|LTranslit=më
20	ալ	ալ	ADV	_	_	18	advmod:emph	_	Translit=al|LTranslit=al|SpaceAfter=No
21	,	,	PUNCT	_	_	26	punct	_	Translit=,|LTranslit=,
22	որ	որ	SCONJ	_	_	26	mark	_	Translit=or|LTranslit=or
23	քայքայուող	քայքայուիլ	VERB	_	Aspect=Dur|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	24	acl	_	Translit=k’ayk’ayowoġ|LTranslit=k’ayk’ayowil
24	Թուրքիան	Թուրքիա	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Def|NameType=Geo|Number=Sing	26	nsubj	_	Translit=T’owrk’ian|LTranslit=T’owrk’ia
25	կ՚	կը	AUX	_	Aspect=Imp|Mood=Ind	26	aux	_	Translit=k,|LTranslit=kë|SpaceAfter=No
26	ապրի	ապրիլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	18	acl	_	Translit=apri|LTranslit=april
27	այսօր	այսօր	ADV	_	_	26	advmod	_	Translit=aysòr|LTranslit=aysòr|SpaceAfter=No
28	,	,	PUNCT	_	_	32	punct	_	Translit=,|LTranslit=,
29	երբ	երբ	ADV	_	PronType=Rel	32	advmod	_	Translit=erb|LTranslit=erb
30	մենք	մենք	PRON	_	Animacy=Hum|Case=Nom|Number=Plur|Person=1|PronType=Prs	32	nsubj	_	Translit=menk’|LTranslit=menk’
31	կը	կը	AUX	_	Aspect=Imp|Mood=Ind	32	aux	_	Translit=kë|LTranslit=kë
32	մեռնինք	մեռնիլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=1|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	26	advcl:relcl	_	Translit=meṙnink’|LTranslit=meṙnil|SpaceAfter=No
33	։	։	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 23 csubj:pass	color:blue
1	Առկայ	առկայ	ADJ	_	_	4	amod	_	Translit=Aṙkay|LTranslit=aṙkay
2	նիւթական	նիւթական	ADJ	_	_	4	amod	_	Translit=niwt’akan|LTranslit=niwt’akan
3	անելի	անելի	ADJ	_	_	4	amod	_	Translit=aneli|LTranslit=aneli
4	լոյսին	լոյս	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	8	obl	_	Translit=loysin|LTranslit=loys
5	տակ	տակ	ADP	_	AdpType=Post	4	case	_	Translit=tak|LTranslit=tak|SpaceAfter=No
6	՝	՝	PUNCT	_	_	8	punct	_	Translit=,|LTranslit=,
7	միշտ	միշտ	ADV	_	_	8	advmod	_	Translit=mišt|LTranslit=mišt
8	շեշտուեցաւ	շեշտել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	Translit=šeštowec’aw|LTranslit=šeštel|SpaceAfter=No
9	,	,	PUNCT	_	_	23	punct	_	Translit=,|LTranslit=,
10	որ	որ	SCONJ	_	_	23	mark	_	Translit=or|LTranslit=or
11	շուրջ	շուրջ	ADV	_	_	12	advmod	_	Translit=šowrǰ|LTranslit=šowrǰ
12	3	3	NUM	_	NumForm=Digit|NumType=Card	13	nummod	_	Translit=3|LTranslit=3
13	հազար	հազար	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	14	nmod	_	Translit=hazar|LTranslit=hazar
14	աշակերտութեան	աշակերտութիւն	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Coll	23	obl	_	Translit=ašakertowt’ean|LTranslit=ašakertowt’iwn
15	համար	համար	ADP	_	AdpType=Post	14	case	_	Translit=hamar|LTranslit=hamar
16	այսքան	այսքան	ADV	_	Deixis=Prox|PronType=Dem	17	advmod	_	Translit=aysk’an|LTranslit=aysk’an
17	բարձր	բարձր	ADJ	_	Degree=Pos	18	amod	_	Translit=barjr|LTranslit=barjr
18	թիւով	թիւ	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	19	nmod	_	Translit=t’iwov|LTranslit=t’iw
19	վարժարաններու	վարժարան	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	20	nmod:poss	_	Translit=varžarannerow|LTranslit=varžaran
20	ցանցի	ցանց	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	22	nmod:poss	_	Translit=c’anc’i|LTranslit=c’anc’
21	մը	մը	DET	_	PronType=Art	20	det	_	Translit=më|LTranslit=më
22	գոյութիւնը	գոյութիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	23	nsubj	_	Translit=goyowt’iwnë|LTranslit=goyowt’iwn
23	աւելի	աւելի	ADV	_	Degree=Cmp	8	csubj:pass	_	Translit=aweli|LTranslit=aweli
24	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	23	cop	_	Translit=ē|LTranslit=em|SpaceAfter=No
25	։	։	PUNCT	_	_	8	punct	_	Translit=.|LTranslit=.

~~~


