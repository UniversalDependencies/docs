---
layout: base
title:  'Statistics of iobj in UD_Western_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Western_Armenian-ArmTDP: Relations: `iobj`

This relation is universal.
There are 1 language-specific subtypes of `iobj`: <tt><a href="hyw_armtdp-dep-iobj-agent.html">iobj:agent</a></tt>.

81 nodes (0%) are attached to their parents as `iobj`.

45 instances of `iobj` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.92592592592593.

The following 4 pairs of parts of speech are connected with `iobj`: <tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hyw_armtdp-pos-PRON.html">PRON</a></tt> (38; 47% instances), <tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hyw_armtdp-pos-NOUN.html">NOUN</a></tt> (37; 46% instances), <tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hyw_armtdp-pos-PROPN.html">PROPN</a></tt> (5; 6% instances), <tt><a href="hyw_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hyw_armtdp-pos-PART.html">PART</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 iobj	color:blue
1	Ինչեր	ինչ	PRON	_	Case=Nom|Definite=Ind|Number=Plur|PronType=Exc	4	obj	_	Translit=Inčer|LTranslit=inč
2	՜	՜	PUNCT	_	_	1	punct	_	Translit=!|LTranslit=!
3	կ՚	կը	AUX	_	Aspect=Imp|Mood=Ind	4	aux	_	Translit=k,|LTranslit=kë|SpaceAfter=No
4	ըսէր	ըսել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	Translit=ësēr|LTranslit=ësel
5	մեզի	մենք	PRON	_	Animacy=Hum|Case=Dat|Number=Plur|Person=1|PronType=Prs	4	iobj	_	Translit=mezi|LTranslit=menk’
6	ձեր	դուք	PRON	_	Animacy=Hum|Case=Gen|Number=Sing|Person=2|Polite=Form|PronType=Prs	4	obl	_	Translit=jer|LTranslit=dowk’
7	վրայ	վրայ	ADP	_	AdpType=Post	6	case	_	Translit=vray|LTranslit=vray|SpaceAfter=No
8	...	...	PUNCT	_	_	4	punct	_	Translit=...|LTranslit=...

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 iobj	color:blue
1	Ընթրիքէն	ընթրիք	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Def|Number=Sing	7	obl	_	Translit=Ënt’rik’ēn|LTranslit=ënt’rik’
2	յետոյ	յետոյ	ADP	_	AdpType=Post	1	case	_	Translit=yetoy|LTranslit=yetoy
3	ամէն	ամէն	DET	_	PronType=Tot	4	det	_	Translit=amēn|LTranslit=amēn
4	մարդ	մարդ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	7	nsubj	_	Translit=mard|LTranslit=mard
5	սովորական	սովորական	ADJ	_	Degree=Pos	6	amod	_	Translit=sovorakan|LTranslit=sovorakan
6	զբօսանքներուն	զբօսանք	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Plur	7	iobj	_	Translit=zbòsank’nerown|LTranslit=zbòsank’
7	տուաւ	տալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Translit=towaw|LTranslit=tal
8	ինքզինքը	ինքզինք	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Emp|Reflex=Yes	7	obj	_	Translit=ink’zink’ë|LTranslit=ink’zink’|SpaceAfter=No
9	։	։	PUNCT	_	_	7	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 iobj	color:blue
1	Այս	այս	DET	_	Deixis=Prox|PronType=Dem	2	det	_	Translit=Ays|LTranslit=ays
2	անգամ	անգամ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	7	obl	_	Translit=angam|LTranslit=angam
3	ինք	ինք	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Emp	7	nsubj	_	Translit=ink’|LTranslit=ink’
4	եւս	եւս	ADV	_	_	3	advmod:emph	_	Translit=ews|LTranslit=ews
5	համակերպած	համակերպիլ	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	7	xcomp	_	Translit=hamakerpaç|LTranslit=hamakerpil
6	կը	կը	AUX	_	Aspect=Imp|Mood=Ind	7	aux	_	Translit=kë|LTranslit=kë
7	թուի	թուիլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	Translit=t’owi|LTranslit=t’owil
8	այդ	այդ	DET	_	Deixis=Med|PronType=Dem	9	det	_	Translit=ayd|LTranslit=ayd
9	գաղափարին	գաղափար	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	5	obj	_	Translit=gaġap’arin|LTranslit=gaġap’ar|SpaceAfter=No
10	՝	՝	PUNCT	_	_	11	punct	_	Translit=,|LTranslit=,
11	պայմանով	պայման	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	5	obl	_	Translit=paymanov|LTranslit=payman
12	որ	որ	SCONJ	_	_	14	mark	_	Translit=or|LTranslit=or
13	Եւրոպացիք	եւրոպացի	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Plur	14	nsubj	_	Translit=EWropac’ik’|LTranslit=ewropac’i
14	ստիպեն	ստիպել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	11	acl:relcl	_	Translit=stipen|LTranslit=stipel
15	Թուրքիոյ	Թուրքիա	PROPN	_	Animacy=Nhum|Case=Dat|Definite=Ind|NameType=Geo|Number=Sing	14	iobj	_	Translit=T’owrk’ioy|LTranslit=T’owrk’ia|SpaceAfter=No
16	,	,	PUNCT	_	_	20	punct	_	Translit=,|LTranslit=,
17	բարենորոգումները	բարենորոգում	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	20	obj	_	Translit=barenorogowmnerë|LTranslit=barenorogowm
18	իր	ինք	DET	_	Case=Gen|Number=Sing|Person=3|Poss=Yes|PronType=Emp	19	det:poss	_	Translit=ir|LTranslit=ink’
19	ձեռքով	ձեռք	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	20	obl	_	Translit=jeṙk’ov|LTranslit=jeṙk’
20	ընելու	ընել	VERB	_	Case=Dat|Definite=Ind|Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	14	ccomp	_	Translit=ënelow|LTranslit=ënel|SpaceAfter=No
21	։	։	PUNCT	_	_	7	punct	_	Translit=.|LTranslit=.

~~~


