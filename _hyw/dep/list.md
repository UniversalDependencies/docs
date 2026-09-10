---
layout: relation
title: 'list'
shortdef: 'list'
udver: '2'
---

The `list` relation is used for chains of comparable items.
In lists with more than two items, all items of the list should modify the first one.
Informal and web text often contains passages which are meant to be interpreted as lists but are parsed as single sentences.
Email signatures often contain these structures, in the form of contact information:
the different contact information items are labeled as `list`; the key-value pair relations are labeled as [appos]().

However, `list` should not be over-used. If a construction can be easily analyzed
using the grammatical relations of standard sentences, such as when there is overt coordination,
then it should be analyzed with these more standard relations, even if it is laid out as a list typographically.

~~~ conllu
# visual-style 1 3 list color:blue
# visual-style 1 6 list color:blue
1	Վառնա	Վառնա	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Ind|NameType=Geo|Number=Sing	0	root	_	Translit=Vaṙna|LTranslit=Vaṙna|SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	Translit=,|LTranslit=,
3	Թիւ	թիւ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	1	list	_	Translit=T’iw|LTranslit=t’iw
4	33	33	NUM	_	NumForm=Digit|NumType=Card	3	flat	_	Translit=33|LTranslit=33|SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	Translit=,|LTranslit=,
6	1906	1906	NUM	_	NumForm=Digit|NumType=Card	1	list	_	Translit=1906|LTranslit=1906|SpaceAfter=No
~~~

~~~ conllu
# visual-style 1 4 list color:blue
# visual-style 1 8 list color:blue
1	Մարկ	Մարկ	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	0	root	_	Translit=Mark|LTranslit=Mark
2	Նշանեան	Նշանեան	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Sur|Number=Sing	1	flat:name	_	Translit=Nšanean|LTranslit=Nšanean|SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	Translit=,|LTranslit=,
4	Նոր	նոր	ADJ	_	Degree=Pos	1	list	_	Translit=Nor|LTranslit=nor
5	Եորկ	Եորկ	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Ind|NameType=Geo|Number=Sing	4	flat	_	Translit=Eork|LTranslit=Eork|SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	_	Translit=,|LTranslit=,
7	Գոլումպիա	Գոլումպիա	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Ind|NameType=Geo|Number=Sing	8	nmod	_	Translit=Golowmpia|LTranslit=Golowmpia
8	Համալսարան	համալսարան	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	1	list	_	Translit=Hamalsaran|LTranslit=hamalsaran
~~~

<!-- Interlanguage links updated Út 30. června 2026, 11:00:14 CEST -->
