---
layout: relation
title: 'csubj'
shortdef: 'clausal subject'
udver: '2'
---

A clausal subject is a clausal syntactic subject of a clause, i.e., the subject is itself a clause. The governor of this relation might not always be a verb: when the clause contains a copula, the root of the clause is the complement of the copula rather than the copular verb itself. The dependent is the main lexical verb or other predicate of the subject clause.

For the clausal subject of a passive verb or verb group, the subtype [csubj:pass]() is used.

~~~ conllu
# visual-style 3 6 csubj color:blue
1	Հարկ	հարկ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Coll	3	compound:lvc	_	Translit=Hark|LTranslit=hark
2	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	aux	_	Translit=ē|LTranslit=em
3	լինում	լինել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	Translit=linowm|LTranslit=linel
4	նաև	նաև	CCONJ	_	ConjType=Comp	3	cc	_	Translit=naew|LTranslit=naew
5	երկար	երկար	ADV	_	Degree=Pos	6	advmod	_	Translit=erkar|LTranslit=erkar
6	մտորել	մտորել	VERB	_	Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	3	csubj	_	Translit=mtorel|LTranslit=mtorel
~~~

~~~ conllu
# visual-style 4 6 csubj color:blue
1	Խաղի	խաղ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	3	nmod:poss	_	Translit=Xaġi|LTranslit=xaġ
2	վերջին	վերջին	ADJ	_	Degree=Pos	3	amod	_	Translit=verǰin|LTranslit=verǰin
3	րոպեներին	րոպե	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Plur	4	obl	_	Translit=ropenerin|LTranslit=rope
4	հաջողվեց	հաջողվել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	Translit=haǰoġvec’|LTranslit=haǰoġvel
5	առաջ	առաջ	ADV	_	_	6	compound:lvc	_	Translit=aṙaǰ|LTranslit=aṙaǰ
6	անցնել	անցնել	VERB	_	Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	4	csubj	_	Translit=anc’nel|LTranslit=anc’nel
7	մեր	մեր	DET	_	Number=Plur|Person=1|Poss=Yes|PronType=Prs	8	det:poss	_	Translit=mer|LTranslit=mer
8	թիմից	թիմ	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Sing	6	obl	_	Translit=t’imic’|LTranslit=t’im|SpaceAfter=No
9	։	։	PUNCT	_	_	4	punct	_	Translit=.|LTranslit=.
~~~

We also analyze the nominal predicates with clausal subjects formed by subordinating conjunction _որ_/_or_ “that” or _թե_/_tʼe_ “whether” similarly.

~~~ conllu
# visual-style 1 6 csubj color:blue
1	Անհավատալի	անհավատալի	ADJ	_	Degree=Pos	0	root	_	Translit=Anhavatali|LTranslit=anhavatali
2	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	cop	_	Translit=ē|LTranslit=em|SpaceAfter=No
3	,	,	PUNCT	_	_	6	punct	_	Translit=,|LTranslit=,
4	որ	որ	SCONJ	_	_	6	mark	_	Translit=or|LTranslit=or
5	այլևս	այլևս	ADV	_	_	6	advmod:emph	_	Translit=aylews|LTranslit=aylews
6	մեզ	մենք	PRON	_	Case=Dat|Number=Plur|Person=1|PronType=Prs	1	csubj	_	Translit=mez|LTranslit=menk’
7	հետ	հետ	ADP	_	AdpType=Post	6	case	_	Translit=het|LTranslit=het
8	չէ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	6	cop	_	Translit=čē|LTranslit=em
9	Միքայելը	Միքայել	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Giv|Number=Sing	6	nsubj	_	Translit=Mik’ayelë|LTranslit=Mik’ayel
~~~

~~~ conllu
# visual-style 1 7 csubj color:blue
1	Թվում	թվալ	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	Translit=T’vowm|LTranslit=t’val
2	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	1	aux	_	Translit=ēr|LTranslit=em|SpaceAfter=No
3	,	,	PUNCT	_	_	7	punct	_	Translit=,|LTranslit=,
4	թե	թե	SCONJ	_	_	7	mark	_	Translit=t’e|LTranslit=t’e
5	հանդիպման	հանդիպում	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	6	nmod:poss	_	Translit=handipman|LTranslit=handipowm
6	բախտը	բախտ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Coll	7	nsubj:pass	_	Translit=baxtë|LTranslit=baxt
7	որոշված	որոշել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Pass	1	csubj	_	Translit=orošvaç|LTranslit=orošel
8	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	aux	_	Translit=ē|LTranslit=em
~~~
<!-- Interlanguage links updated Út 30. června 2026, 10:59:56 CEST -->
