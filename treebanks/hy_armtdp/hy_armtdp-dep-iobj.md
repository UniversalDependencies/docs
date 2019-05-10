---
layout: base
title:  'Statistics of iobj in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `iobj`

This relation is universal.
There are 1 language-specific subtypes of `iobj`: <tt><a href="hy_armtdp-dep-iobj-agent.html">iobj:agent</a></tt>.

113 nodes (0%) are attached to their parents as `iobj`.

74 instances of `iobj` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.46017699115044.

The following 6 pairs of parts of speech are connected with `iobj`: <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (60; 53% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (36; 32% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (13; 12% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 iobj	color:blue
1	Դողալով	դողալ	VERB	_	Case=Ins|Definite=Ind|Number=Coll|Polarity=Pos|Subcat=Intr|VerbForm=Gdv|Voice=Mid	3	advcl	_	Translit=doġalov|LTranslit=doġal
2	մատներս	մատ	NOUN	_	Animacy=Nhum|Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=1	3	obj	_	Translit=matners|LTranslit=mat
3	կպցնում	կպչել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=kpc’nowm|LTranslit=kpčel
4	եմ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	aux	_	Translit=em|LTranslit=em
5	ճակատին	ճակատ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	3	iobj	_	Translit=č̣akatin|LTranslit=č̣akat|SpaceAfter=No
6	`	`	PUNCT	_	_	8	punct	_	Translit=,|LTranslit=,
7	երակները	երակ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	8	nsubj	_	Translit=eraknerë|LTranslit=erak
8	պայթում	պայթել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	3	parataxis	_	Translit=payt’owm|LTranslit=payt’el
9	են	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	8	aux	_	Translit=en|LTranslit=em|SpaceAfter=No
10	:	:	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 iobj	color:blue
1	Միակ	միակ	ADV	_	_	2	advmod:emph	_	Translit=miak|LTranslit=miak
2	վայրն	վայր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	0	root	_	Translit=vayrn|LTranslit=vayr
3	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	cop	_	Translit=ē|LTranslit=em
4	որտեղ	որտեղ	ADV	_	PronType=Rel	9	advmod	_	Translit=orteġ|LTranslit=orteġ
5	ես	ես	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	Translit=es|LTranslit=es
6	ինձ	ես	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	9	iobj	_	Translit=inj|LTranslit=es
7	մարդ	մարդ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	9	xcomp	_	Translit=mard|LTranslit=mard
8	եմ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	9	aux	_	Translit=em|LTranslit=em
9	զգում	զգալ	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	2	acl:relcl	_	Translit=zgowm|LTranslit=zgal|SpaceAfter=No
10	,	,	PUNCT	_	_	11	punct	_	Translit=,|LTranslit=,
11	ասում	ասել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	2	parataxis	_	Translit=asowm|LTranslit=asel
12	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	11	aux	_	Translit=ē|LTranslit=em
13	նա	նա	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	Translit=na|LTranslit=na|SpaceAfter=No
14	:	:	PUNCT	_	_	2	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 iobj	color:blue
1	Շփոթի	շփոթ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	4	obl	_	Translit=šp’ot’i|LTranslit=šp’ot’
2	մեջ	մեջ	ADP	_	AdpType=Post|Case=Nom	1	case	_	Translit=meǰ|LTranslit=meǰ
3	Սիմեոնին	Սիմեոն	PROPN	_	Animacy=Hum|Case=Dat|Definite=Def|NameType=Giv|Number=Sing	4	iobj	_	Translit=simeonin|LTranslit=simeon
4	հաջողվեց	հաջողվել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	Translit=haǰoġvec’|LTranslit=haǰoġvel
5	գերել	գերել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	4	csubj	_	Translit=gerel|LTranslit=gerel
6	նրանց	նա	DET	_	Case=Gen|Number=Plur|Person=3|Poss=Yes|PronType=Prs	7	det:poss	_	Translit=nranc’|LTranslit=na
7	առաջնորդին	առաջնորդ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	5	obj	_	Translit=aṙaǰnordin|LTranslit=aṙaǰnord|SpaceAfter=No
8	:	:	PUNCT	_	_	4	punct	_	Translit=.|LTranslit=.

~~~


