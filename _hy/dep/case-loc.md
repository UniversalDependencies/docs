---
layout: relation
title: 'case:loc'
shortdef: 'postpositional localizer'
udver: '2'
---

We treat a closed set of postpositions (traditionally known as “improper adpositions”) as localizers. See [ADP]() for a list of localizers.

A localizer is attached either to the noun it follows or directly to the main verb of the clause. Localizers are always tagged `ADP`. When a localizer follows a noun and functions as its adposition, it is attached to the noun with the `case:loc` relation. When it occurs independently as an adverbial modifier of a verb, it is attached directly to the predicate with the [obl]() relation, while retaining the `ADP` tag. 

~~~ conllu
# visual-style 6 7 case:loc color:blue
1	Գնում	գնալ	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	Translit=Gnowm|LTranslit=gnal
2	էին	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	1	aux	_	Translit=ēin|LTranslit=em
3	նրանք	նրանք	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	1	nsubj	_	Translit=nrank’|LTranslit=nrank’
4	իրիկնադեմի	իրիկնադեմ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Coll	6	nmod:poss	_	Translit=iriknademi|LTranslit=iriknadem
5	երկարած	երկարել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	6	acl	_	Translit=erkaraç|LTranslit=erkarel
6	ստվերների	ստվեր	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	1	obl	_	Translit=stverneri|LTranslit=stver
7	միջով	մեջ	ADP	_	AdpType=Post|Case=Ins	6	case:loc	_	Translit=miǰov|LTranslit=meǰ|SpaceAfter=No
~~~

~~~ conllu
# visual-style 9 11 obl color:blue
1	Մի	մի	DET	_	PronType=Art	3	det	_	Translit=Mi|LTranslit=mi
2	հարյուր	հարյուր	NUM	_	NumForm=Word|NumType=Card	3	nummod	_	Translit=haryowr|LTranslit=haryowr
3	անգամ	անգամ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	5	obl	_	Translit=angam|LTranslit=angam
4	մահը	մահ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Coll	5	nsubj	_	Translit=mahë|LTranslit=mah
5	ժպտացել	ժպտալ	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	Translit=žptac’el|LTranslit=žptal
6	ու	ու	CCONJ	_	_	9	cc	_	Translit=ow|LTranslit=ow
7	աչքով	աչք	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	8	compound:lvc	_	Translit=ačk’ov|LTranslit=ačk’
8	անելով	անել	VERB	_	Case=Ins|Definite=Ind|Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	9	advcl	_	Translit=anelov|LTranslit=anel
9	անցել	անցնել	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Mid	5	conj	_	Translit=anc’el|LTranslit=anc’nel
10	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	9	aux	_	Translit=ēr|LTranslit=em
11	կողքից	կողք	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Sing	9	obl	_	Translit=koġk’ic’|LTranslit=koġk’|SpaceAfter=No
12	։	։	PUNCT	_	_	5	punct	_	Translit=.|LTranslit=.
~~~

<!-- Interlanguage links updated Út 30. června 2026, 10:59:45 CEST -->
