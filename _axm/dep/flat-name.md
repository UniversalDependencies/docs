---
layout: relation
title: 'flat:name'
shortdef: 'names'
udver: '2'
---

The `flat:name` relation is a specialization of [flat]() used for names.

~~~ conllu
# visual-style 1 2 flat:name color:blue
1	Յովանէս	Յովանէս	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	0	root	_	_
2	Թլկուրանցի	Թլկուրանցի	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Prs|Number=Sing	1	flat:name	_	_
~~~

Names are annotated in a flat, head-initial structure, in which all words in the name modify the first one using the `flat:name` label. This also works for numerals that 
are part of the names.
Words joined by `flat:name` should all be part of a minimal noun phrase; otherwise regular syntactic relations should be used. 

~~~ conllu
# visual-style 1 2 flat:name color:blue
1	Գարեգին	Գարեգին	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	0	root	_	_
2	Բ	Բ	ADJ	_	NumForm=Armenian|NumType=Ord	1	flat:name	_	_
~~~

The titles/honorifics, when immediately following the first noun, are analyzed using the `flat:name` relation. They are treated as a part of the names: (see also [nmod]() and [apposition](appos)): 

~~~ conllu
# visual-style 1 2 flat:name color:blue
# visual-style 1 3 flat:name color:blue
1	Խոսրով	Խոսրով	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	0	root	_	_
2	Գ	Գ	ADJ	_	NumForm=Armenian|NumType=Ord	1	flat:name	_	_
3	Կոտակ	կոտակ	ADJ	_	Style=Vrnc	1	flat:name	_	_
~~~

~~~ sdparse
Արշակ թագավոր \n King Arshak 
flat:name(Արշակ, թագավոր)
flat:name(King, Arshak)
~~~

~~~ sdparse
Զարեհ էֆենդի \n Zareh Efendi 
flat:name(Զարեհ, էֆենդի)
flat:name(Zareh, Efendi)
~~~
<!-- Interlanguage links updated St 6. května 2026, 20:46:59 CEST -->
