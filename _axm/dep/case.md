---
layout: relation
title: 'case'
shortdef: 'case marking'
udver: '2'
---

Middle Armenian uses a combination of inflected words (morphological cases) and adpositions to express semantic case. They are treated as dependents of the noun they attach to. The relation between the noun and the adposition is labeled `case`.

~~~ conllu
# visual-style 2 1 case color:blue
1	ի	ի	ADP	_	AdpType=Prep	2	case	_	_
2	կռիւ	կռիւ	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Ind|Number=Sing	0	root	_	_
3	ուր	ուր	ADV	_	PronType=Rel	5	advmod	_	_
4	թագաւորն	թագաւոր	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	5	nsubj	_	_
5	ուրդի	ուրդիլ	VERB	_	Aspect=Prosp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	2	acl:relcl	_
~~~

Currently, we also use `case` for some other case-marking elements treated as separate syntactic words (derived from a closed set of nouns, adjectives/participles or adverbs). These elements (known as “adpositional words” in Armenian (and also in Middle Armenian) grammar) are treated as dependents of the noun or clause they attach to or introduce. They are tagged and annotated according to their basic use. In this case the [ExtPos]() feature is used, as the word is coerced into a part of speech different from its lexical one. 

~~~ conllu
# visual-style 3 4 case color:blue
1	շաղվես	շաղվել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	եւ	եւ	CCONJ	_	_	5	cc	_	_
3	սիսռան	սիսեռ|սիսառն|սիսեառն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	5	obl	_	_
4	չաք	չաք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|ExtPos=ADP|Number=Sing	3	case
5	տաս	տալ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	_	_
7	որ	որ	SCONJ	_	_	8	mark	_	_
8	ուտէ	ուտէ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	1	advcl	_	_
~~~

~~~ conllu
# visual-style 1 2 case color:blue
1	եփելու	եփել	VERB	_	Case=Dat|Definite=Ind|Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	5	obl	_	_
2	ատենն	ատեն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|ExtPos=ADP|Number=Sing	1	case	_	_
3	սեխի	սեխ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	4	nmod:poss	_	_
4	կեղեւ	կեղեւ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	5	obj	_	_
5	ձգես	ձգել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root  _  _
~~~
<!-- Interlanguage links updated St 12. listopadu 2025, 09:21:22 CET -->
