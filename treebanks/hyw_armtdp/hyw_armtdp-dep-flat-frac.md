---
layout: base
title:  'Statistics of flat:frac in UD_Western_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Western_Armenian-ArmTDP: Relations: `flat:frac`

This relation is a language-specific subtype of <tt><a href="hyw_armtdp-dep-flat.html">flat</a></tt>.
There are also 3 other language-specific subtypes of `flat`: <tt><a href="hyw_armtdp-dep-flat-dist.html">flat:dist</a></tt>, <tt><a href="hyw_armtdp-dep-flat-name.html">flat:name</a></tt>, <tt><a href="hyw_armtdp-dep-flat-range.html">flat:range</a></tt>.

3 nodes (0%) are attached to their parents as `flat:frac`.

3 instances of `flat:frac` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.33333333333333.

The following 3 pairs of parts of speech are connected with `flat:frac`: <tt><a href="hyw_armtdp-pos-NUM.html">NUM</a></tt>-<tt><a href="hyw_armtdp-pos-CCONJ.html">CCONJ</a></tt> (1; 33% instances), <tt><a href="hyw_armtdp-pos-NUM.html">NUM</a></tt>-<tt><a href="hyw_armtdp-pos-NOUN.html">NOUN</a></tt> (1; 33% instances), <tt><a href="hyw_armtdp-pos-NUM.html">NUM</a></tt>-<tt><a href="hyw_armtdp-pos-NUM.html">NUM</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat:frac	color:blue
1	Կապ	կապ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	2	compound:lvc	_	Translit=Kap|LTranslit=kap
2	չունի	ունիմ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Translit=čowni|LTranslit=ownim
3	որ	որ	SCONJ	_	_	8	mark	_	Translit=or|LTranslit=or
4	ծնունդէդ	ծնունդ	NOUN	_	Animacy=Nhum|Case=Abl|Number=Sing|Number[psor]=Sing|Person[psor]=2	8	nmod:npmod	_	Translit=çnowndēd|LTranslit=çnownd
5	եօթ	եօթ|եօթը	NUM	_	NumForm=Word|NumType=Card	8	nummod	_	Translit=eòt’|LTranslit=eòt’|eòt’ë
6	ու	ու	CCONJ	_	_	5	flat:frac	_	Translit=ow|LTranslit=ow
7	կէս	կէս	NUM	_	NumForm=Word|NumType=Frac	5	flat:frac	_	Translit=kēs|LTranslit=kēs
8	տասնամեակ	տասնամեակ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	2	csubj	_	Translit=tasnameak|LTranslit=tasnameak
9	առաջ	առաջ	ADP	_	AdpType=Post	8	case	_	Translit=aṙaǰ|LTranslit=aṙaǰ
10	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	8	cop	_	Translit=ēr|LTranslit=em
11	Դէպքը	դէպք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	8	nsubj	_	Translit=Dēpk’ë|LTranslit=dēpk’|SpaceAfter=No
12	:	:	PUNCT	_	Foreign=Yes	2	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 24 flat:frac	color:blue
1	Դեռ	դեռ	ADV	_	_	2	advmod	_	Translit=Deṙ|LTranslit=deṙ
2	կան	կամ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	Translit=kan|LTranslit=kam
3	ուրիշ	ուրիշ	DET	_	PronType=Ind	4	det	_	Translit=owriš|LTranslit=owriš
4	շատեր	շատ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Plur	2	nsubj	_	Translit=šater|LTranslit=šat|SpaceAfter=No
5	,	,	PUNCT	_	_	9	punct	_	Translit=,|LTranslit=,
6	որ	որ	PRON	_	Case=Nom|Definite=Ind|Number=Sing|PronType=Rel	9	nsubj	_	Translit=or|LTranslit=or
7	ամսականներով	ամսական	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Plur	9	obl	_	Translit=amsakannerov|LTranslit=amsakan
8	կ՚	կը	AUX	_	Aspect=Imp|Mood=Ind	9	aux	_	Translit=k,|LTranslit=kë|SpaceAfter=No
9	ապրին	ապրիլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	4	acl:relcl	_	Translit=aprin|LTranslit=april|SpaceAfter=No
10	,	,	PUNCT	_	_	11	punct	_	Translit=,|LTranslit=,
11	վագըֆները	վագըֆ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	9	conj	_	Translit=vagëfnerë|LTranslit=vagëf
12	մեծ	մեծ	ADJ	_	Degree=Pos	13	amod	_	Translit=meç|LTranslit=meç
13	ապահովութիւն	ապահովութիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Coll	11	orphan	_	Translit=apahovowt’iwn|LTranslit=apahovowt’iwn
14	մը	մը	DET	_	PronType=Art	13	det	_	Translit=më|LTranslit=më
15	հարիւրներով	հարիւր	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Plur	16	obl	_	Translit=hariwrnerov|LTranslit=hariwr
16	համրուած	համրուիլ	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	17	acl	_	Translit=hamrowaç|LTranslit=hamrowil
17	տուներու	տուն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	13	nmod:npmod	_	Translit=townerow|LTranslit=town
18	համար	համար	ADP	_	AdpType=Post	17	case	_	Translit=hamar|LTranslit=hamar|SpaceAfter=No
19	,	,	PUNCT	_	_	30	punct	_	Translit=,|LTranslit=,
20	հողերու	հող	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	23	nmod:poss	_	Translit=hoġerow|LTranslit=hoġ|SpaceAfter=No
21	,	,	PUNCT	_	_	22	punct	_	Translit=,|LTranslit=,
22	ջրերու	ջուր	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	20	conj	_	Translit=ǰrerow|LTranslit=ǰowr
23	երեք	երեք	NUM	_	NumForm=Word|NumType=Card	30	nsubj	_	Translit=erek’|LTranslit=erek’
24	չորրորդը	չորրորդ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	23	flat:frac	_	Translit=čorrordë|LTranslit=čorrord
25	ու	ու	CCONJ	_	_	26	cc	_	Translit=ow|LTranslit=ow
26	աւելին	աւելի	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	23	conj	_	Translit=awelin|LTranslit=aweli
27	իսկ	իսկ	ADV	_	_	26	advmod:emph	_	Translit=isk|LTranslit=isk
28	անոնց	ան	PRON	_	Case=Dat|Number=Plur|Person=3|PronType=Prs	30	obj	_	Translit=anonc’|LTranslit=an
29	կը	կը	AUX	_	Aspect=Imp|Mood=Ind	30	aux	_	Translit=kë|LTranslit=kë
30	վերաբերի	վերաբերիլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	9	conj	_	Translit=veraberi|LTranslit=veraberil|SpaceAfter=No
31	։	։	PUNCT	_	_	2	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 flat:frac	color:blue
1	Կապ	կապ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	2	compound:lvc	_	Translit=Kap|LTranslit=kap
2	չունի	ունիմ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Translit=čowni|LTranslit=ownim
3	որ	որ	SCONJ	_	_	8	mark	_	Translit=or|LTranslit=or
4	ծնունդէդ	ծնունդ	NOUN	_	Animacy=Nhum|Case=Abl|Number=Sing|Number[psor]=Sing|Person[psor]=2	8	nmod:npmod	_	Translit=çnowndēd|LTranslit=çnownd
5	եօթ	եօթ|եօթը	NUM	_	NumForm=Word|NumType=Card	8	nummod	_	Translit=eòt’|LTranslit=eòt’|eòt’ë
6	ու	ու	CCONJ	_	_	5	flat:frac	_	Translit=ow|LTranslit=ow
7	կէս	կէս	NUM	_	NumForm=Word|NumType=Frac	5	flat:frac	_	Translit=kēs|LTranslit=kēs
8	տասնամեակ	տասնամեակ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	2	csubj	_	Translit=tasnameak|LTranslit=tasnameak
9	առաջ	առաջ	ADP	_	AdpType=Post	8	case	_	Translit=aṙaǰ|LTranslit=aṙaǰ
10	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	8	cop	_	Translit=ēr|LTranslit=em
11	Դէպքը	դէպք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	8	nsubj	_	Translit=Dēpk’ë|LTranslit=dēpk’|SpaceAfter=No
12	:	:	PUNCT	_	Foreign=Yes	2	punct	_	Translit=.|LTranslit=.

~~~


