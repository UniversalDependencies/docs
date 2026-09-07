The `dislocated` relation is used for elements that have been displaced from its regular syntactic position, often to the front or back of the clause it resides within or of the whole sentence. This applies often to an argument of a clause that has been moved to the periphery for topic, focus, or similar types of effects.

However, this relation is also used generally for topic elements that otherwise do not fulfill any core grammatical relation of a sentence. These elements may be separated off with a comma intonation.

The dislocated elements attach to the same governor as the dependent that they double for. Right dislocated elements are frequent in spoken languages.

~~~ conllu
# visual-style 4 7 dislocated color:blue
1	Ան	ան	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	Translit=An|LTranslit=an
2	իր	իր	DET	_	Number=Sing|Person=3|Poss=Yes|PronType=Emp|Reflex=Yes	3	det:poss	_	Translit=ir|LTranslit=ir
3	գործին	գործ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	4	compound:lvc	_	Translit=gorçin|LTranslit=gorç
4	նայեցաւ	նայիլ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	Translit=nayec’aw|LTranslit=nayil
5	նորէն	նորէն	ADV	_	_	4	advmod	_	Translit=norēn|LTranslit=norēn|SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	Translit=,|LTranslit=,
7	ժամուն	ժամ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	4	dislocated	_	Translit=žamown|LTranslit=žam|SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	Translit=,|LTranslit=,
9	բանկալին	բանկալ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	7	conj	_	Translit=bankalin|LTranslit=bankal|SpaceAfter=No
10	,	,	PUNCT	_	_	11	punct	_	Translit=,|LTranslit=,
11	խորանին	խորան	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	7	conj	_	Translit=xoranin|LTranslit=xoran|SpaceAfter=No
12	,	,	PUNCT	_	_	13	punct	_	Translit=,|LTranslit=,
13	մոմին	մոմ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	7	conj	_	Translit=momin|LTranslit=mom|SpaceAfter=No
14	,	,	PUNCT	_	_	15	punct	_	Translit=,|LTranslit=,
15	կանթեղին	կանթեղ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	7	conj	_	Translit=kant’eġin|LTranslit=kant’eġ|SpaceAfter=No
16	:	:	PUNCT	_	Foreign=Yes	4	punct	_	Translit=.|LTranslit=.
~~~

~~~ conllu
# visual-style 3 7 dislocated color:blue
1	Լռութիւնը	լռութիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Coll	3	nsubj	_	Translit=Lṙowt’iwnë|LTranslit=lṙowt’iwn
2	կրկին	կրկին	ADV	_	_	3	advmod	_	Translit=krkin|LTranslit=krkin
3	հաստատուեցաւ	հաստատուիլ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	Translit=hastatowec’aw|LTranslit=hastatowil
4	գրասենեակին	գրասենեակ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	3	obl	_	Translit=graseneakin|LTranslit=graseneak
5	մէջ	մէջ	ADP	_	AdpType=Post	4	case	_	Translit=mēǰ|LTranslit=mēǰ|SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	Translit=,|LTranslit=,
7	համապարփակ	համապարփակ	ADJ	_	Degree=Pos	3	dislocated	_	Translit=hamaparp’ak|LTranslit=hamaparp’ak|SpaceAfter=No
8	։	։	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.
~~~

~~~ conllu
# visual-style 11 15 dislocated color:blue
1	—	—	PUNCT	_	_	7	punct	_	Translit=—|LTranslit=—
2	Մեր	մենք	DET	_	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	3	det:poss	_	Translit=Mer|LTranslit=menk’
3	գիւղին	գիւղ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	4	nmod:poss	_	Translit=giwġin|LTranslit=giwġ
4	մարդիկը	մարդ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Plur	7	nsubj	_	Translit=mardikë|LTranslit=mard
5	քաղաք	քաղաք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	7	obl	_	Translit=k’aġak’|LTranslit=k’aġak’
6	կ՚	կը	AUX	_	Aspect=Imp|Mood=Ind	7	aux	_	Translit=k,|LTranslit=kë|SpaceAfter=No
7	երթան	երթալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	Translit=ert’an|LTranslit=ert’al|SpaceAfter=No
8	,	,	PUNCT	_	_	11	punct	_	Translit=,|LTranslit=,
9	քաղաքը	քաղաք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	11	obl	_	Translit=k’aġak’ë|LTranslit=k’aġak’
10	կը	կը	AUX	_	Aspect=Imp|Mood=Ind	11	aux	_	Translit=kë|LTranslit=kë
11	մեռնին	մեռնիլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	7	conj	_	Translit=meṙnin|LTranslit=meṙnil|SpaceAfter=No
12	,	,	PUNCT	_	_	13	punct	_	Translit=,|LTranslit=,
13	ըսաւ	ըսել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	7	parataxis	_	Translit=ësaw|LTranslit=ësel|SpaceAfter=No
14	,	,	PUNCT	_	_	15	punct	_	Translit=,|LTranslit=,
15	քաղաքը	քաղաք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	11	dislocated	_	Translit=k’aġak’ë|LTranslit=k’aġak’|SpaceAfter=No
16	։	։	PUNCT	_	_	7	punct	_	Translit=.|LTranslit=.
~~~

<!-- Interlanguage links updated Út 30. června 2026, 11:00:05 CEST -->
