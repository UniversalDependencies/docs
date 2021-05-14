---
layout: relation
title: 'compound'
shortdef: 'compound'
udver: '2'
---

The `compound` relation is used primarily for noun-noun compounds (for verb and verb-object compounds, see [compound:dir](), [compound:ext](), [compound:vo](), and [compound:vv]()). This applies to any nominal preceding and modifying another nominal unless the relationship between the two is a possessive one (see [nmod]()). The latter nominal is typically the head of the compound. 

~~~ conllu
# visual-style 2 1 compound	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	中文	_	NOUN	_	_	2	compound	_	Chinese-language
2	試卷	_	NOUN	_	_	0	root	_	exam-paper

1	"Chinese	_	_	_	_	0	_	_	_
2	language	_	_	_	_	0	_	_	_
3	exam	_	_	_	_	0	_	_	_
4	paper"	_	_	_	_	0	_	_	_

~~~

Names preceding titles or relationship roles are also treated as noun compounds, as well as names of companies or institutions with internal combinations of proper nouns with regular nouns.

~~~ conllu
# visual-style 2 1 compound	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	馬	_	PROPN	_	_	2	compound	_	Ma
2	先生	_	NOUN	_	_	0	root	_	Mr.

1	"Mr	_	_	_	_	0	_	_	_
2	Mǎ"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 3 1 compound	color:blue
# visual-style 3 2 compound	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	威威	_	PROPN	_	_	3	compound	_	Wēiwēi
2	職業	_	NOUN	_	_	3	compound	_	employment
3	介紹所	_	NOUN	_	_	0	root	_	agency

1	"Wēiwēi	_	_	_	_	0	_	_	_
2	Employment	_	_	_	_	0	_	_	_
3	Agency"	_	_	_	_	0	_	_	_

~~~

Internal compounding should always be parsed first. For example, in (3) the last two nouns 職業 介紹所 / _zhíyè jièshàosuǒ_ "employment agency" form a compound first before compounding with the proper noun 威威 / _Wēiwēi_; but in (4), 警察 招募 / _jǐngchá_ "police recruitment" form a compound first before compounding further with 廣告 / _guǎnggào_ "advertisement".

~~~ conllu
# visual-style 2 1 compound	color:blue
# visual-style 3 2 compound	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	警察	_	NOUN	_	_	2	compound	_	police
2	招募	_	NOUN	_	_	3	compound	_	recruitment
3	廣告	_	NOUN	_	_	0	root	_	advertisement

1	"police	_	_	_	_	0	_	_	_
2	recruitment	_	_	_	_	0	_	_	_
3	ad"	_	_	_	_	0	_	_	_

~~~

<!-- Interlanguage links updated Pá kvě 14 11:08:56 CEST 2021 -->
