---
layout: base
title:  'Statistics of nmod in UD_Abaza-ATB'
udver: '2'
---

## Treebank Statistics: UD_Abaza-ATB: Relations: `nmod`

This relation is universal.

16 nodes (2%) are attached to their parents as `nmod`.

16 instances of `nmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25.

The following 6 pairs of parts of speech are connected with `nmod`: <tt><a href="abq_atb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="abq_atb-pos-NOUN.html">NOUN</a></tt> (7; 44% instances), <tt><a href="abq_atb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="abq_atb-pos-PRON.html">PRON</a></tt> (5; 31% instances), <tt><a href="abq_atb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="abq_atb-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="abq_atb-pos-ADV.html">ADV</a></tt>-<tt><a href="abq_atb-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="abq_atb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="abq_atb-pos-DET.html">DET</a></tt> (1; 6% instances), <tt><a href="abq_atb-pos-NUM.html">NUM</a></tt>-<tt><a href="abq_atb-pos-PRON.html">PRON</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod	color:blue
1	ачвымла	чвымла	NOUN	_	Definite=Def	2	obj	_	Gloss=def-лестница
2	рчпатI	чпара	VERB	_	Number[erg]=Plur|Person[erg]=3|Tense=Aor|VerbForm=Fin	0	root	_	Gloss=3pl.erg-делать-dcl
3	йдыргылын	адыргылра	VERB	_	Caus=Yes|Gender[abs]=Neut|Number[abs]=Sing|Number[erg]=Plur|Person[abs]=3|Person[erg]=3|Tense=Past|VerbForm=Fin	2	conj	_	Gloss=3sg.n.abs-3pl.erg-caus-стоять-pst
4	унадзума	надзара	VERB	_	Gender[abs]=Masc|Number[abs]=Sing|Person[abs]=2|Tense=Pres|VerbForm=NonFin	2	conj	_	Gloss=2sg.m.abs-trl-достичь-ipf-q
5	ажвгIванд	жвгIванд	NOUN	_	Definite=Def	6	nmod	_	Gloss=def-небо
6	ахъахь	хъахь	NOUN	_	Gender[psor]=Neut|Number[psor]=Sing|Person[psor]=3	4	obl	_	Gloss=3sg.n.pr-поверхность

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod	color:blue
1	йгьи	йгьи	CCONJ	_	_	5	cc	_	Gloss=и
2	ауат	ауат	PRON	_	_	3	nmod	_	Gloss=dist.pl
3	рыбызшва	бызшва	NOUN	_	Number[psor]=Plur|Person[psor]=3	5	nsubj	_	Gloss=3pl.pr-язык
4	абаза	абаза	ADJ	_	_	5	amod	_	Gloss=абазинский
5	бызшвапI	бызшва	VERB	_	Tense=Pres|VerbForm=Fin	0	root	_	Gloss=язык-npst.dcl

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 nmod	color:blue
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


