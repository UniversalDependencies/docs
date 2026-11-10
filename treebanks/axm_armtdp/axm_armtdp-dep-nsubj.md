---
layout: base
title:  'Statistics of nsubj in UD_Middle_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Middle_Armenian-ArmTDP: Relations: `nsubj`

This relation is universal.
There are 2 language-specific subtypes of `nsubj`: <tt><a href="axm_armtdp-dep-nsubj-outer.html">nsubj:outer</a></tt>, <tt><a href="axm_armtdp-dep-nsubj-pass.html">nsubj:pass</a></tt>.

311 nodes (6%) are attached to their parents as `nsubj`.

246 instances of `nsubj` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.80385852090032.

The following 9 pairs of parts of speech are connected with `nsubj`: <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt> (138; 44% instances), <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-PROPN.html">PROPN</a></tt> (71; 23% instances), <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-PRON.html">PRON</a></tt> (58; 19% instances), <tt><a href="axm_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt> (15; 5% instances), <tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="axm_armtdp-pos-PRON.html">PRON</a></tt> (12; 4% instances), <tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt> (9; 3% instances), <tt><a href="axm_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="axm_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="axm_armtdp-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="axm_armtdp-pos-ADP.html">ADP</a></tt>-<tt><a href="axm_armtdp-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nsubj	color:blue
1	Եւ	եւ	CCONJ	_	_	12	cc	_	Translit=Ew|LTranslit=ew
2	որ	որ	SCONJ	_	_	5	mark	_	Translit=or|LTranslit=or
3	գաղտուկ	գաղտուկ	ADJ	_	_	4	amod	_	Translit=gaġtowk|LTranslit=gaġtowk
4	մեղանք	մեղանք	NOUN	_	Case=Nom|Definite=Ind|Number=Ptan	5	nsubj	_	Translit=meġank’|LTranslit=meġank’
5	լինի	լինել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	12	advcl	_	Translit=lini|LTranslit=linel
6	յ	ի	ADP	_	AdpType=Prep	7	case	_	SpaceAfter=No|Translit=y|LTranslit=i
7	երկիրն	երկիր	NOUN	_	Case=Nom|Definite=Def|Number=Sing	5	obl	_	SpaceAfter=No|Translit=erkirn|LTranslit=erkir
8	՝	՝	PUNCT	_	_	12	punct	_	Translit=:|LTranslit=:
9	զ	զ	ADP	_	AdpType=Prep	10	case	_	SpaceAfter=No|Translit=z|LTranslit=z
10	այն	այն	PRON	_	Case=Nom|Deixis=Remt|Number=Sing|PronType=Dem	12	obj	_	Translit=ayn|LTranslit=ayn
11	խոստովանհայրքն	խոստովանհայր	NOUN	_	Case=Nom|Definite=Def|Number=Plur	12	nsubj	_	Translit=xostovanhayrk’n|LTranslit=xostovanhayr
12	ուղղեն	ուղղել	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|Translit=owġġen|LTranslit=owġġel
13	։	։	PUNCT	_	_	12	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Զոհալն	Զոհալ	PROPN	_	Case=Nom|Definite=Def|NameType=Geo|Number=Sing|Style=Var	2	nsubj	_	Translit=Zohaln|LTranslit=Zohal
2	ունի	ունալ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Translit=owni|LTranslit=ownal
3	զ	զ	ADP	_	AdpType=Prep	4	case	_	SpaceAfter=No|Translit=z|LTranslit=z
4	փոթոթն	փոթոթ	NOUN	_	Case=Nom|Definite=Def|Number=Sing	2	obj	_	Translit=p’ot’ot’n|LTranslit=p’ot’ot’
5	եւ	եւ	CCONJ	_	_	7	cc	_	Translit=ew|LTranslit=ew
6	զ	զ	ADP	_	AdpType=Prep	7	case	_	SpaceAfter=No|Translit=z|LTranslit=z
7	թթուն	թթու	NOUN	_	Case=Nom|Definite=Def|Number=Sing	4	conj	_	Translit=t’t’own|LTranslit=t’t’ow
8	ու	ու	CCONJ	_	_	11	cc	_	Translit=ow|LTranslit=ow
9	զ	զ	ADP	_	AdpType=Prep	11	case	_	SpaceAfter=No|Translit=z|LTranslit=z
10	ծանր	ծանր	ADJ	_	Degree=Pos	11	amod	_	Translit=çanr|LTranslit=çanr
11	համն	համ	NOUN	_	Case=Nom|Definite=Def|Number=Sing	4	conj	_	Translit=hamn|LTranslit=ham
12	զ	զ	ADP	_	AdpType=Prep	13	case	_	SpaceAfter=No|Translit=z|LTranslit=z
13	հոտածն	հոտած	NOUN	_	Case=Nom|Definite=Def|Number=Sing	11	appos	_	SpaceAfter=No|Translit=hotaçn|LTranslit=hotaç
14	։	։	PUNCT	_	_	2	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nsubj	color:blue
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


