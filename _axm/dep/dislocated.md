---
layout: relation
title:  'dislocated'
shortdef : 'dislocated elements'
udver: '2'
---

The `dislocated` relation is used for elements that have been displaced from its regular syntactic position, often to the front or back of the clause it resides within or of the whole sentence. This applies often to an argument of a clause that has been moved to the periphery for topic, focus, or similar types of effects.

However, this relation is also used generally for topic elements that otherwise do not fulfill any core grammatical relation of a sentence. These elements may be separated off with a comma intonation.

The dislocated elements attach to the same governor as the dependent that they double for. Right dislocated elements are frequent in
spoken languages.

~~~ conllu
# visual-style 13 3 dislocated color:blue
1  եւ	եւ	CCONJ	_	_  13  cc	_	_
2-3  զայնոք	_	_	_	_	_	_	_	_
2  զ	զ	ADP	_	AdpType=Prep  3  case	_	_
3  այնոք	այնոք	PRON	_	Case=Acc|Deixis=Remt|Number=Plur|PronType=Dem  13  dislocated	_	_
4  որ	որ	PRON	_	Case=Nom|Number=Sing|PronType=Rel  7  nsubj	_	_
5  ի	ի	ADP	_	AdpType=Prep  6  case	_	_
6  մեղայն	մեղայ	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Def|Number=Coll  7  compound:lvc	_	_
7  գան	գալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid  3  acl:relcl	_	_
8  եւ	եւ	CCONJ	_	_  10  cc	_	_
9  մեղացուք	մեղացու	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Plur  10  xcomp	_	_
10  լինին	լինիլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid  7  conj	_	SpaceAfter=No
11  ,	,	PUNCT	_	_  13  punct	_	_
12  նա	նա	SCONJ	_	_  13  mark	_	_
13  աւերէ	աւերել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act  0  root	_	_
14-15  զիրենց	_	_	_	_	_	_	_	_
14  զ	զ	ADP	_	AdpType=Prep  16  case	_	_
15  իրենց	իր	DET	_	Case=Acc|Number=Plur|Person=3|PronType=Poss  16  det:poss	_	_
16  զաւդվածքն	զաւդված	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Def|Number=Sing|Style=Var  13  obj	_	_

~~~
<!-- Interlanguage links updated St 6. května 2026, 20:46:43 CEST -->
