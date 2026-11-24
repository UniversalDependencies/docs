---
layout: base
title:  'Statistics of discourse in UD_Middle_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Middle_Armenian-ArmTDP: Relations: `discourse`

This relation is universal.

17 nodes (0%) are attached to their parents as `discourse`.

12 instances of `discourse` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.

The following 6 pairs of parts of speech are connected with `discourse`: <tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="axm_armtdp-pos-NUM.html">NUM</a></tt> (10; 59% instances), <tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="axm_armtdp-pos-INTJ.html">INTJ</a></tt> (2; 12% instances), <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-INTJ.html">INTJ</a></tt> (2; 12% instances), <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-PART.html">PART</a></tt> (1; 6% instances), <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	Ծ	Ծ.	NUM	_	NumForm=Armenian|NumType=Card	4	discourse	_	SpaceAfter=No|Translit=Ç|LTranslit=Ç.
2	.	.	PUNCT	_	_	1	punct	_	Translit=.|LTranslit=.
3	Յաղագս	յաղագս	ADP	_	AdpType=Prep	4	case	_	Translit=Yaġags|LTranslit=yaġags
4	ցաւուն	ցաւ	NOUN	_	Case=Dat|Definite=Def|Number=Sing	0	root	_	SpaceAfter=No|Translit=c’awown|LTranslit=c’aw
5	,	,	PUNCT	_	_	7	punct	_	Translit=,|LTranslit=,
6	որ	որ	PRON	_	Case=Nom|Number=Sing|PronType=Rel	7	nsubj	_	Translit=or|LTranslit=or
7	կոչի	կոչիլ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	4	acl:relcl	_	Translit=koč’i|LTranslit=koč’il
8	համր	համր	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	7	xcomp	_	SpaceAfter=No|Translit=hamr|LTranslit=hamr
9	։	։	PUNCT	_	_	4	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 discourse	color:blue
1	Փառք	փառք	NOUN	_	Case=Nom|Definite=Ind|Number=Ptan	0	root	_	Translit=P’aṙk’|LTranslit=p’aṙk’
2	Սուրբ	սուրբ	ADJ	_	_	3	amod	_	Translit=Sowrb|LTranslit=sowrb
3	Երրորդութեանն	երրորդութիւն	NOUN	_	Case=Dat|Definite=Def|Number=Sing	1	nmod:npmod	_	Translit=Errordowt’eann|LTranslit=errordowt’iwn
4	յաւիտենից	յաւիտենից	ADV	_	_	1	advmod	_	Translit=yawitenic’|LTranslit=yawitenic’
5	յաւիտեանս	յաւիտեանս	ADV	_	_	4	advmod	_	SpaceAfter=No|Translit=yawiteans|LTranslit=yawiteans
6	,	,	PUNCT	_	_	7	punct	_	Translit=,|LTranslit=,
7	ամէն	ամէն	INTJ	_	_	1	discourse	_	SpaceAfter=No|Translit=amēn|LTranslit=amēn
8	:	:	PUNCT	_	Foreign=Yes	1	punct	_	Translit=:|LTranslit=:

~~~


~~~ conllu
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 34 discourse	color:blue
1	Զ	զ	ADP	_	AdpType=Prep	3	case	_	SpaceAfter=No|Translit=Z|LTranslit=z
2	գեղեցիկ	գեղեցիկ	ADJ	_	Degree=Pos	3	amod	_	Translit=geġec’ik|LTranslit=geġec’ik
3	ծաղիկն	ծաղիկ	NOUN	_	Case=Nom|Definite=Def|Number=Sing	13	obj	_	Translit=çaġikn|LTranslit=çaġik
4	եկեղեցոյ	եկեղեցի	NOUN	_	Case=Dat|Definite=Ind|Number=Sing	3	nmod:poss	_	Translit=ekeġec’oy|LTranslit=ekeġec’i
5	եւ	եւ	CCONJ	_	_	10	cc	_	Translit=ew|LTranslit=ew
6	զ	զ	ADP	_	AdpType=Prep	10	case	_	SpaceAfter=No|Translit=z|LTranslit=z
7	քրիստոսապսակ	քրիստոսապսակ	ADJ	_	_	10	amod	_	Translit=k’ristosapsak|LTranslit=k’ristosapsak
8	նորընծա	նորընծայ	ADJ	_	_	10	amod	_	Translit=norënça|LTranslit=norënçay
9	սուրբ	սուրբ	ADJ	_	_	10	amod	_	Translit=sowrb|LTranslit=sowrb
10	րաբունին	րաբունի	NOUN	_	Case=Nom|Definite=Def|Number=Sing	3	conj	_	Translit=rabownin|LTranslit=rabowni
11	զ	զ	ADP	_	AdpType=Prep	12	case	_	SpaceAfter=No|Translit=z|LTranslit=z
12	Ստեփանոս	Ստեփանոս	PROPN	_	Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	3	appos	_	Translit=Step’anos|LTranslit=Step’anos
13	յիշեցէք	յիշել	VERB	_	Aspect=Prosp|Mood=Imp|Number=Plur|Person=2|Subcat=Tran|VerbForm=Fin|Voice=Act	0	root	_	Translit=yišec’ēk’|LTranslit=yišel
14	առաջի	առաջի	ADP	_	AdpType=Prep	16	case	_	Translit=aṙaǰi|LTranslit=aṙaǰi
15	անաւրին	անաւրին	ADJ	_	Style=Rare	16	amod	_	Translit=anawrin|LTranslit=anawrin
16	զենմանն	զենումն	NOUN	_	Case=Dat|Definite=Def|Number=Sing	13	obl	_	Translit=zenmann|LTranslit=zenowmn
17	Քրիստոսի	Քրիստոս	PROPN	_	Case=Dat|Definite=Ind|NameType=Prs|Number=Sing	16	nmod:poss	_	Translit=K’ristosi|LTranslit=K’ristos
18	եւ	եւ	CCONJ	_	_	20	cc	_	Translit=ew|LTranslit=ew
19	զ	զ	ADP	_	AdpType=Prep	20	case	_	SpaceAfter=No|Translit=z|LTranslit=z
20	ծնողսն	ծնող	NOUN	_	Case=Acc|Definite=Def|Number=Plur	13	dislocated	_	Translit=çnoġsn|LTranslit=çnoġ
21	իւր	իւր	DET	_	Number=Sing|Person=3|PronType=Poss|Style=Arch	20	det	_	Translit=iwr|LTranslit=iwr
22	զ	զ	ADP	_	AdpType=Prep	24	case	_	SpaceAfter=No|Translit=z|LTranslit=z
23	իշխանաց	իշխան	NOUN	_	Case=Dat|Definite=Ind|Number=Plur	24	nmod:poss	_	Translit=išxanac’|LTranslit=išxan
24	իշխանն	իշխան	NOUN	_	Case=Nom|Definite=Def|Number=Sing	20	appos	_	Translit=išxann|LTranslit=išxan
25	զ	զ	ADP	_	AdpType=Prep	26	case	_	SpaceAfter=No|Translit=z|LTranslit=z
26	Տարսաիճն	Տարսաիճ	PROPN	_	Case=Nom|Definite=Def|NameType=Giv|Number=Sing	24	appos	_	Translit=Tarsaičn|LTranslit=Tarsaič
27	եւ	եւ	CCONJ	_	_	30	cc	_	Translit=ew|LTranslit=ew
28	զ	զ	ADP	_	AdpType=Prep	30	case	_	SpaceAfter=No|Translit=z|LTranslit=z
29	մեծահաւատ	մեծահաւատ	ADJ	_	_	30	amod	_	Translit=meçahawat|LTranslit=meçahawat
30	մայր	մայր	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	24	conj	_	Translit=mayr|LTranslit=mayr
31	իւր	իւր	DET	_	Number=Sing|Person=3|PronType=Poss|Style=Arch	30	det	_	Translit=iwr|LTranslit=iwr
32	զ	զ	ADP	_	AdpType=Prep	33	case	_	SpaceAfter=No|Translit=z|LTranslit=z
33	Արուզխաթունն	Արուզխաթուն	PROPN	_	Case=Nom|Definite=Def|NameType=Giv|Number=Sing	30	appos	_	Translit=Arowzxat’ownn|LTranslit=Arowzxat’own
34	ամէն	ամէն	INTJ	_	_	13	discourse	_	SpaceAfter=No|Translit=amēn|LTranslit=amēn
35	:	:	PUNCT	_	Foreign=Yes	13	punct	_	Translit=:|LTranslit=:

~~~


