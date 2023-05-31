---
layout: base
title:  'Statistics of nsubj:pass in UD_Armenian-BSUT'
udver: '2'
---

## Treebank Statistics: UD_Armenian-BSUT: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="hy_bsut-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="hy_bsut-dep-nsubj-caus.html">nsubj:caus</a></tt>.

208 nodes (0%) are attached to their parents as `nsubj:pass`.

141 instances of `nsubj:pass` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.18269230769231.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt> (166; 80% instances), <tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_bsut-pos-PRON.html">PRON</a></tt> (27; 13% instances), <tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_bsut-pos-PROPN.html">PROPN</a></tt> (11; 5% instances), <tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_bsut-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_bsut-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 nsubj:pass	color:blue
1	3	3	NUM	_	NumForm=Digit|NumType=Card	3	nummod	_	Translit=3|LTranslit=3|SpaceAfter=No
2	.	.	PUNCT	_	_	1	punct	_	Translit=.|LTranslit=.
3	Ամսաթիվ	ամսաթիվ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=Amsat’iv|LTranslit=amsat’iv|SpaceAfter=No
4	.	.	PUNCT	_	_	8	punct	_	Translit=.|LTranslit=.
5	երբ	երբ	ADV	_	PronType=Int	8	advmod	_	Translit=erb|LTranslit=erb
6	՞	՞	PUNCT	_	_	5	punct	_	Translit=?|LTranslit=?
7	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	8	aux	_	Translit=ē|LTranslit=em
8	ստեղծվել	ստեղծել	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Pass	3	appos	_	Translit=steġçvel|LTranslit=steġçel
9	կոնտենտը	կոնտենտ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	8	nsubj:pass	_	Translit=kontentë|LTranslit=kontent|SpaceAfter=No
10	:	:	PUNCT	_	Foreign=Yes	8	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 nsubj:pass	color:blue
1	Ուղիղ	ուղիղ	ADJ	_	Degree=Pos	2	amod	_	Translit=OWġiġ|LTranslit=owġiġ
2	եթեր	եթեր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=et’er|LTranslit=et’er|SpaceAfter=No
3	,	,	PUNCT	_	_	9	punct	_	Translit=,|LTranslit=,
4	որը	որ	PRON	_	Case=Nom|Definite=Def|Number=Sing|PronType=Rel	9	nsubj:pass	_	Translit=orë|LTranslit=or
5	ոչ	ոչ	PART	_	Polarity=Neg	7	det	_	Translit=oč|LTranslit=oč
6	մի	մի	DET	_	PronType=Art	5	fixed	_	Translit=mi|LTranslit=mi
7	րոպե	րոպե	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	9	obl	_	Translit=rope|LTranslit=rope
8	չի	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	9	aux	_	Translit=či|LTranslit=em
9	անջատվում	անջատել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Pass	2	acl:relcl	_	Translit=anǰatvowm|LTranslit=anǰatel
10	ու	ու	CCONJ	_	_	14	cc	_	Translit=ow|LTranslit=ow
11	որի	որ	PRON	_	Case=Dat|Definite=Ind|Number=Sing|PronType=Rel	12	nmod:poss	_	Translit=ori|LTranslit=or
12	վերջը	վերջ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	14	nsubj	_	Translit=verǰë|LTranslit=verǰ
13	չի	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	14	aux	_	Translit=či|LTranslit=em
14	երևում	երևալ	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	9	conj	_	Translit=erewowm|LTranslit=erewal|SpaceAfter=No
15	։	։	PUNCT	_	_	2	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 12 nsubj:pass	color:blue
1	Մոսկվան	Մոսկվա	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Def|NameType=Geo|Number=Sing	4	nsubj	_	Translit=Moskvan|LTranslit=Moskva
2	նաև	նաև	CCONJ	_	ConjType=Comp	4	cc	_	Translit=naew|LTranslit=naew
3	չի	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	4	aux	_	Translit=či|LTranslit=em
4	խոսել	խոսել	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	Translit=xosel|LTranslit=xosel
5	այն	այն	PRON	_	Deixis=Remt|PronType=Dem	4	obl	_	Translit=ayn|LTranslit=ayn
6	մասին	մասին	ADP	_	AdpType=Post	5	case	_	Translit=masin|LTranslit=masin|SpaceAfter=No
7	,	,	PUNCT	_	_	15	punct	_	Translit=,|LTranslit=,
8	որ	որ	SCONJ	_	_	15	mark	_	Translit=or|LTranslit=or
9	Հայաստանի	Հայաստան	PROPN	_	Animacy=Nhum|Case=Dat|Definite=Ind|NameType=Geo|Number=Sing	15	obl	_	Translit=Hayastani|LTranslit=Hayastan
10	դեմ	դեմ	ADP	_	AdpType=Post	9	case	_	Translit=dem|LTranslit=dem
11	«	«	PUNCT	_	_	12	punct	_	Translit=«|LTranslit=«|SpaceAfter=No
12	Բայրաղթար	Բայրաղթար	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Ind|NameType=Pro|Number=Sing	15	nsubj:pass	_	Translit=Bayraġt’ar|LTranslit=Bayraġt’ar|SpaceAfter=No
13	»	»	PUNCT	_	_	12	punct	_	Translit=»|LTranslit=»
14	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	15	aux	_	Translit=ē|LTranslit=em
15	կիրառվել	կիրառել	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Pass	5	acl	_	Translit=kiraṙvel|LTranslit=kiraṙel
16	44-օրյա	44-օրյա	ADJ	_	NumForm=Combi	17	amod	_	Translit=44-òrya|LTranslit=44-òrya
17	պատերազմի	պատերազմ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	15	obl	_	Translit=paterazmi|LTranslit=paterazm
18	ժամանակ	ժամանակ	ADP	_	AdpType=Post	17	case	_	Translit=žamanak|LTranslit=žamanak|SpaceAfter=No
19	։	։	PUNCT	_	_	4	punct	_	Translit=.|LTranslit=.

~~~


