---
layout: base
title:  'Statistics of iobj in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `iobj`

This relation is universal.
There are 1 language-specific subtypes of `iobj`: <tt><a href="hy_armtdp-dep-iobj-agent.html">iobj:agent</a></tt>.

155 nodes (0%) are attached to their parents as `iobj`.

106 instances of `iobj` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.80645161290323.

The following 8 pairs of parts of speech are connected with `iobj`: <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (84; 54% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (49; 32% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (16; 10% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PART.html">PART</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 iobj	color:blue
1	Շեֆիս	շեֆ	NOUN	_	Animacy=Hum|Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=1|Style=Coll	2	iobj	_	Translit=Šefis|LTranslit=šef
2	ասացի	ասել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Translit=asac’i|LTranslit=asel|SpaceAfter=No
3	,	,	PUNCT	_	_	9	punct	_	Translit=,|LTranslit=,
4	որ	որ	SCONJ	_	_	9	mark	_	Translit=or|LTranslit=or
5	ակադեմիայում	ակադեմիա	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Sing	6	obl	_	Translit=akademiayowm|LTranslit=akademia
6	հավաքված	հավաքվել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	7	acl	_	Translit=havak’vaç|LTranslit=havak’vel
7	մարդիկ	մարդ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Plur	9	nsubj	_	Translit=mardik|LTranslit=mard
8	իրար	իրար	PRON	_	Case=Dat|Number=Plur|PronType=Rcp	9	obj	_	Translit=irar|LTranslit=irar
9	նման	նման	ADJ	_	Degree=Pos	2	ccomp	_	Translit=nman|LTranslit=nman
10	են	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	9	cop	_	Translit=en|LTranslit=em|SpaceAfter=No
11	։	։	PUNCT	_	_	2	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 iobj	color:blue
1	Աստված	աստված	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	3	nsubj	_	Translit=Astvaç|LTranslit=astvaç
2	բարի	բարի	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Coll	3	obj	_	Translit=bari|LTranslit=bari
3	տա	տալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Translit=ta|LTranslit=tal
4	ձեզ	դուք	PRON	_	Case=Dat|Number=Plur|Person=2|Polite=Infm|PronType=Prs	3	iobj	_	Translit=jez|LTranslit=dowk’
5	էլ	էլ	ADV	_	_	4	advmod:emph	_	Translit=ēl|LTranslit=ēl|SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	_	Translit=,|LTranslit=,
7	երկու	երկու	NUM	_	NumForm=Word|NumType=Card	8	nummod	_	Translit=erkow|LTranslit=erkow
8	ախպորն	ախպեր	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing|Style=Vrnc	4	conj	_	Translit=axporn|LTranslit=axper
9	էլ	էլ	ADV	_	_	8	advmod:emph	_	Translit=ēl|LTranslit=ēl|SpaceAfter=No
10	։	։	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 iobj	color:blue
1	Շփոթի	շփոթ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	4	obl	_	Translit=Šp’ot’i|LTranslit=šp’ot’
2	մեջ	մեջ	ADP	_	AdpType=Post|Case=Nom	1	case	_	Translit=meǰ|LTranslit=meǰ
3	Սիմեոնին	Սիմեոն	PROPN	_	Animacy=Hum|Case=Dat|Definite=Def|NameType=Giv|Number=Sing	4	iobj	_	Translit=Simeonin|LTranslit=Simeon
4	հաջողվեց	հաջողվել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	Translit=haǰoġvec’|LTranslit=haǰoġvel
5	գերել	գերել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	4	csubj	_	Translit=gerel|LTranslit=gerel
6	նրանց	նա	DET	_	Case=Gen|Number=Plur|Person=3|Poss=Yes|PronType=Prs	7	det:poss	_	Translit=nranc’|LTranslit=na
7	առաջնորդին	առաջնորդ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	5	obj	_	Translit=aṙaǰnordin|LTranslit=aṙaǰnord|SpaceAfter=No
8	:	:	PUNCT	_	_	4	punct	_	Translit=.|LTranslit=.

~~~


