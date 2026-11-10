---
layout: base
title:  'Statistics of nsubj:pass in UD_Middle_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Middle_Armenian-ArmTDP: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="axm_armtdp-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="axm_armtdp-dep-nsubj-outer.html">nsubj:outer</a></tt>.

9 nodes (0%) are attached to their parents as `nsubj:pass`.

5 instances of `nsubj:pass` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.33333333333333.

The following 2 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-PRON.html">PRON</a></tt> (5; 56% instances), <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt> (4; 44% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 nsubj:pass	color:blue
1	Լուսաբերն	Լուսաբեր	PROPN	_	Case=Nom|Definite=Def|NameType=Geo|Number=Sing	0	root	_	Translit=Lowsabern|LTranslit=Lowsaber
2	զ	զ	ADP	_	AdpType=Prep	3	case	_	SpaceAfter=No|Translit=z|LTranslit=z
3	արտուտն	արտուտ	NOUN	_	Case=Nom|Definite=Def|Number=Sing	1	parataxis	_	Translit=artowtn|LTranslit=artowt
4	եւ	եւ	CCONJ	_	_	6	cc	_	Translit=ew|LTranslit=ew
5	զ	զ	ADP	_	AdpType=Prep	6	case	_	SpaceAfter=No|Translit=z|LTranslit=z
6	տատրակն	տատրակ	NOUN	_	Case=Nom|Definite=Def|Number=Sing	3	conj	_	SpaceAfter=No|Translit=tatrakn|LTranslit=tatrak
7	,	,	PUNCT	_	_	10	punct	_	Translit=,|LTranslit=,
8	զինչ	զինչ	PRON	_	ExtPos=PRON|PronType=Rel	10	nsubj:pass	_	Translit=zinč’|LTranslit=zinč’
9	որ	որ	PART	_	_	8	fixed	_	Translit=or|LTranslit=or
10	ուտուի	ուտել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Pass	3	conj	_	SpaceAfter=No|Translit=owtowi|LTranslit=owtel
11	։	։	PUNCT	_	_	1	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 nsubj:pass	color:blue
1	Եւ	եւ	CCONJ	_	_	7	cc	_	Translit=Ew|LTranslit=ew
2	թէ	թէ	SCONJ	_	_	5	mark	_	Translit=t’ē|LTranslit=t’ē
3	այլազգի	այլազգի	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	5	nsubj	_	Translit=aylazgi|LTranslit=aylazgi
4	քրիստոնէ	քրիստոնէ	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	5	obj	_	Translit=k’ristonē|LTranslit=k’ristonē
5	սպաննէ	սպաննել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	7	advcl	_	SpaceAfter=No|Translit=spannē|LTranslit=spannel
6	՝	՝	PUNCT	_	_	7	punct	_	Translit=:|LTranslit=:
7	մեռնի	մեռնիլ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	SpaceAfter=No|Translit=meṙni|LTranslit=meṙnil
8	.	.	PUNCT	_	_	18	punct	_	Translit=.|LTranslit=.
9	եւ	եւ	CCONJ	_	_	18	cc	_	Translit=ew|LTranslit=ew
10	թէ	թէ	SCONJ	_	_	14	mark	_	Translit=t’ē|LTranslit=t’ē
11	յ	ի	ADP	_	AdpType=Prep|ExtPos=ADV	14	advmod	_	SpaceAfter=No|Translit=y|LTranslit=i
12	ոչ	ոչ	PART	_	Polarity=Neg	11	fixed	_	Translit=oč’|LTranslit=oč’
13	կամայ	կամայ	ADJ	_	_	11	fixed	_	Translit=kamay|LTranslit=kamay
14	սպաննէ	սպաննել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	18	advcl	_	SpaceAfter=No|Translit=spannē|LTranslit=spannel
15	՝	՝	PUNCT	_	_	18	punct	_	Translit=:|LTranslit=:
16	երկու	երկու	NUM	_	NumForm=Word|NumType=Card	17	nummod	_	Translit=erkow|LTranslit=erkow
17	ձեռսն	ձեռ	NOUN	_	Case=Acc|Definite=Def|Number=Plur	18	nsubj:pass	_	Translit=jeṙsn|LTranslit=jeṙ
18	կտրվի	կտրել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Pass	7	conj	_	Translit=ktrvi|LTranslit=ktrel
19	եւ	եւ	CCONJ	_	_	23	cc	_	Translit=ew|LTranslit=ew
20	զ	զ	ADP	_	AdpType=Prep	22	case	_	SpaceAfter=No|Translit=z|LTranslit=z
21	արեան	արիւն	NOUN	_	Case=Dat|Definite=Ind|Number=Sing	22	nmod:poss	_	Translit=arean|LTranslit=ariwn
22	գինն	գին	NOUN	_	Case=Nom|Definite=Def|Number=Sing	23	obj	_	Translit=ginn|LTranslit=gin
23	վճարէ	վճարել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	18	conj	_	SpaceAfter=No|Translit=včarē|LTranslit=včarel
24	.	.	PUNCT	_	_	34	punct	_	Translit=.|LTranslit=.
25	եւ	եւ	CCONJ	_	_	34	cc	_	Translit=ew|LTranslit=ew
26	ընդհանուր	ընդհանուր	ADJ	_	_	27	amod	_	Translit=ëndhanowr|LTranslit=ëndhanowr
27	գին	գին	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	34	nsubj	_	Translit=gin|LTranslit=gin
28	արեան	արիւն	NOUN	_	Case=Dat|Definite=Ind|Number=Sing	27	nmod:poss	_	Translit=arean|LTranslit=ariwn
29	քրիստոնէին	քրիստոնէ	NOUN	_	Case=Dat|Definite=Def|Number=Sing	28	nmod:poss	_	SpaceAfter=No|Translit=k’ristonēin|LTranslit=k’ristonē
30	.	.	PUNCT	_	_	34	punct	_	Translit=.|LTranslit=.
31	ԳՃ	ԳՃ.	NUM	_	NumForm=Armenian|NumType=Card	33	nummod	_	SpaceAfter=No|Translit=GČ|LTranslit=GČ.
32	.	.	PUNCT	_	_	31	punct	_	Translit=.|LTranslit=.
33	դեկան	դեկան	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	34	nmod	_	Translit=dekan|LTranslit=dekan
34	պերպեռատ	պերպեռատ	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	7	parataxis	_	Translit=perpeṙat|LTranslit=perpeṙat
35	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	34	cop	_	SpaceAfter=No|Translit=ē|LTranslit=em
36	,	,	PUNCT	_	_	38	punct	_	Translit=,|LTranslit=,
37	եւ	եւ	CCONJ	_	_	38	cc	_	Translit=ew|LTranslit=ew
38	այլ	այլ	ADV	_	_	34	conj	_	Translit=ayl|LTranslit=ayl
39	ինչ	ինչ	PRON	_	ExtPos=PRON|PronType=Rel	42	xcomp	_	Translit=inč’|LTranslit=inč’
40	որ	որ	PART	_	_	39	fixed	_	Translit=or|LTranslit=or
41	մարդն	մարդ	NOUN	_	Case=Nom|Definite=Def|Number=Sing	42	nsubj	_	Translit=mardn|LTranslit=mard
42	լինի	լինել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	38	advcl:relcl	_	SpaceAfter=No|Translit=lini|LTranslit=linel
43	։	։	PUNCT	_	_	7	punct	_	Translit=.|LTranslit=.

~~~


