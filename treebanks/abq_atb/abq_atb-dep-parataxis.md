---
layout: base
title:  'Statistics of parataxis in UD_Abaza-ATB'
udver: '2'
---

## Treebank Statistics: UD_Abaza-ATB: Relations: `parataxis`

This relation is universal.

9 nodes (1%) are attached to their parents as `parataxis`.

9 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.55555555555556.

The following 4 pairs of parts of speech are connected with `parataxis`: <tt><a href="abq_atb-pos-VERB.html">VERB</a></tt>-<tt><a href="abq_atb-pos-VERB.html">VERB</a></tt> (6; 67% instances), <tt><a href="abq_atb-pos-ADV.html">ADV</a></tt>-<tt><a href="abq_atb-pos-ADJ.html">ADJ</a></tt> (1; 11% instances), <tt><a href="abq_atb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="abq_atb-pos-VERB.html">VERB</a></tt> (1; 11% instances), <tt><a href="abq_atb-pos-PRON.html">PRON</a></tt>-<tt><a href="abq_atb-pos-VERB.html">VERB</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 parataxis	color:blue
1	угьымпхащума	пхащара	VERB	_	Gender[abs]=Masc|Int=Yes|Number[abs]=Sing|Person[abs]=2|Polarity=Neg|Tense=Pres	0	root	_	Gloss=2sg.m.abs-neg.emp-neg-стыдиться-ipf-q
2	лхIвад	хIвара	VERB	_	Gender[erg]=Fem|Number[erg]=Sing|Person[erg]=3|Tense=Aor|VerbForm=Fin	1	parataxis	_	Gloss=3sg.f.erg-говорить-dcl
3	уыбызшвала	бызшва	NOUN	_	Gender[psor]=Masc|Number[psor]=Sing|Person[psor]=2	5	obl	_	Gloss=2sg.m.pr-язык-ins
4	гIвба	гIвба	NOUN	_	_	5	obj	_	Gloss=два-cl.n
5	гIаугныс	гара	VERB	_	Gender[erg]=Masc|Number[erg]=Sing|Person[erg]=2|VerbForm=Conv	1	xcomp	_	Gloss=csl-2sg.m.erg-нести-purp

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 parataxis	color:blue
1	йуымрыбагъьауата	рыбагъьара	VERB	_	Gender[abs]=Neut|Gender[erg]=Masc|Number[abs]=Sing|Number[erg]=Sing|Person[abs]=3|Person[erg]=2|Polarity=Neg|Tense=Pres|VerbForm=NonFin	0	root	_	Gloss=3sg.n.abs-2sg.m.erg-neg-укреплять-ipf-adv
2	ауи	ауи	PRON	_	Number=Sing|PronType=Dem	4	obl	_	Gloss=dist.sg
3	дыната	дына	PART	_	_	4	discourse	_	Gloss=filler-adv
4	йчпата	чпара	VERB	_	Gender[abs]=Neut|Number[abs]=Sing|Person[abs]=3	5	csubj	_	Gloss=3sg.n.abs-делать-adv
5	йутахъызтын	тахъыра	VERB	_	Gender[abs]=Neut|Gender[io]=Masc|Number[abs]=Sing|Number[io]=Sing|Person[abs]=3|Person[io]=2|VerbForm=Conv	11	advcl	_	Gloss=3sg.n.abs-2sg.m.io-нужно-cond.real
6	арса	араса	ADV	_	_	11	advmod	_	Gloss=так
7	чIврыта	чIвры	ADJ	_	_	11	advmod	_	Gloss=длинный-adv
8	цIагIвта	цIагIв	ADJ	_	_	7	conj	_	Gloss=тонкий-adv
9	гIвмачвакI	мачвы	NOUN	_	_	10	nsubj	_	Gloss=два-палец-unit
10	зквшвауала	аквшвара	VERB	_	RelType=Io|Tense=Pres|VerbForm=NonFin	11	advcl	_	Gloss=rel.io-loc-поместиться-ipf-ins
11	йрыгIв	рыгIвра	VERB	_	Gender[abs]=Neut|Mood=Imp|Number[abs]=Sing|Person[abs]=3	1	conj	_	Gloss=3sg.n.abs-раскатать(imp)
12	арса	араса	ADV	_	_	11	advmod	_	Gloss=так
13	лентIа	лентIа	NOUN	_	_	14	nmod	_	Gloss=лента
14	апшта	апш	ADJ	_	_	12	parataxis	_	Gloss=подобный-adv

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 parataxis	color:blue
1	ауаъа	ауаъа	PRON	_	_	2	obl	_	Gloss=dist.loc
2	йгIашIарышвта	шIарышвра	VERB	_	Caus=Yes|Gender[abs]=Neut|Number[abs]=Sing|Person[abs]=3|Tense=Aor|VerbForm=NonFin	13	advcl	_	Gloss=3sg.n.abs-csl-loc-caus-падать-adv
3	хIан	аны	NOUN	_	Number[psor]=Plur|Person[psor]=1	5	nmod	_	Gloss=1pl.pr-мать
4	рыцхIа	рыцхIа	ADJ	_	_	3	amod	_	Gloss=бедный
5	лхIатырла	хIатыр	NOUN	_	Gender[psor]=Fem|Number[psor]=Sing|Person[psor]=3	13	obl	_	Gloss=3sg.f.pr-услуга-ins
6	лара	лара	PRON	_	_	8	nsubj	_	Gloss=она
7	адуней	дуней	NOUN	_	Definite=Def	8	obl	_	Gloss=def-мир
8	дгьыквхым	аквызлара	VERB	_	Gender[abs]=Com|Number[abs]=Sing|Person[abs]=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	5	parataxis	_	Gloss=3sg.h.abs-neg.emp-быть.на-re-neg
9	хIан	аны	NOUN	_	Number[psor]=Plur|Person[psor]=1	11	nmod	_	Gloss=1pl.pr-мать
10	рыцхIа	рыцхIа	ADJ	_	_	9	amod	_	Gloss=бедный
11	лхIатырла	хIатыр	NOUN	_	Gender[psor]=Fem|Number[psor]=Sing|Person[psor]=3	5	dep:repeat	_	Gloss=3sg.f.pr-услуга-ins
12	лыбызшвагьи	бызшва	NOUN	_	Gender[psor]=Fem|Number[psor]=Sing|Person[psor]=3	13	obj	_	Gloss=3sg.f.pr-язык-add
13	хIлырдырд	дырра	VERB	_	Caus=Yes|Gender[erg]=Fem|Number[erg]=Sing|Number[io]=Plur|Person[erg]=3|Person[io]=1|Tense=Aor|VerbForm=Fin	0	root	_	Gloss=1pl.io-3sg.f.erg-caus-знать-dcl
14	хIыбызшвагьи	бызшва	NOUN	_	Number[psor]=Plur|Person[psor]=1	15	obj	_	Gloss=1pl.pr-язык-add
15	хIлырдырд	дырра	VERB	_	Caus=Yes|Gender[erg]=Fem|Number[erg]=Sing|Number[io]=Plur|Person[erg]=3|Person[io]=1|Tense=Aor|VerbForm=Fin	13	conj	_	Gloss=1pl.io-3sg.f.erg-caus-знать-dcl

~~~


