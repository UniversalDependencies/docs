---
layout: relation
title:  'obl:cmp'
shortdef : 'oblique modifier specifying standard of comparison'
udver: '2'
---

The relation `obl:cmp` is used for standards of comparison.

~~~ sdparse
ఆమె నాకంటే చిన్న . \n āmè nākaṁṭe cinna . \n she than-me young .
nsubj(చిన్న, ఆమె)
obl:cmp(చిన్న, నాకంటే)
punct(చిన్న, .-4)
~~~

~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3 2 obl:cmp	color:blue
# sent_id = 48
# text = ఆమె నాకంటే చిన్న .
# translit = āmè nākaṁṭe cinna .
1	ఆమె	_	PRON	PRON	_	3	nsubj	_	Translit=āmè|LTranslit=_
2	నాకంటే	_	PRON	PRON	_	3	obl:cmp	_	Translit=nākaṁṭe|LTranslit=_
3	చిన్న	_	NOUN	NOUN	_	0	root	_	Translit=cinna|LTranslit=_
4	.	_	PUNCT	PUNCT	_	3	punct	_	Translit=.|LTranslit=_

~~~

<!-- Interlanguage links updated St lis 3 20:59:05 CET 2021 -->
