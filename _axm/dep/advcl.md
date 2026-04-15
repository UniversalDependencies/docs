---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
udver: '2'
---

An adverbial clause modifier is a clause which modifies a verb or other predicate (adjective, etc.),
as a modifier not as a core complement. This includes things such as a temporal clause, consequence, conditional clause, purpose
clause, etc. The dependent must be clausal (or else it is an [advmod]()) and the dependent is the main predicate of the clause.

~~~ conllu
# visual-style 8 4 advcl:relcl color:blue
1  Եւ  եւ  CCONJ  _ 4 cc  _  _  _
2  յորժամ  յորժամ  ADV  _  4  advmod  _  _  _
3  որ  որ  PART  _  2  fixed  _  _  _
4  օթիս օթել  VERB  _  Aspect=Prosp|Mood=Sub|Number=Sing|Person=2|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid  8  advcl  _  _  
5  ի  ի  ADP  _  6  case  _  _  _
6 ճանապարհն  ճանապարհ  NOUN  _   Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing  4  obl  _  SpaceAfter=No  
7 '  '  PUNCT	_  _  8  punct  _  _
8 լվա  լվանալ  VERB  _  Aspect=Prosp|LangId=Hy|Mood=Imp|Number=Sing|Person=2|Subcat=Tran|VerbForm=Fin|Voice=Act  0  root  _  _
9  զ  զ  ADP  _	AdpType=Prep  10  case  _  _
10 երեսդ  երես  NOUN  _  Animacy=Nhum|Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2  obj  8  _  _
9 հով  հով  ADJ  _  Degree=Pos  10  amod  _  _
10 ջրով  ջուր  NOUN  _   Animacy=Nhum|Case=Ins|Definite=Indef|Number=Sing  8  obl  _  SpaceAfter=No
11 ։  ։  PUNCT	_  _  8  punct  _  _

~~~
